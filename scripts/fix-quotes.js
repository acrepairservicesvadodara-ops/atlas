const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');
let fixed = 0;
let totalFiles = 0;

function walk(dir) {
  for (const n of fs.readdirSync(dir)) {
    const p = path.join(dir, n);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (n === 'page.tsx') {
      totalFiles++;
      let code = fs.readFileSync(p, 'utf8');
      const original = code;

      // Fix unescaped double quotes inside string literals in metadata and JSON-LD
      // Strategy: find lines with key: "value" patterns and fix inner quotes
      
      // Fix metadata description/title fields with unescaped quotes
      code = fixStringFields(code);
      
      // Fix JSON-LD description field 
      code = fixJsonLdStrings(code);
      
      // Fix JSX text content with unescaped quotes (use &quot; or curly braces)
      code = fixJsxQuotes(code);

      if (code !== original) {
        fs.writeFileSync(p, code);
        fixed++;
      }
    }
  }
}

function fixStringFields(code) {
  // Match: key: "value with "quotes" inside",
  // We need to handle lines like:
  //   description: "Some text with "inner" quotes here",
  //   title: "Product "Name" | Brand",
  
  const lines = code.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Match metadata/object string properties
    const match = line.match(/^(\s*(?:title|description|name|alt|keywords|text|image|url|priceCurrency|price|availability|addressLocality|addressRegion|postalCode|addressCountry|ratingValue|reviewCount|seller|brand):\s*)"(.*)"(,?\s*)$/);
    if (match) {
      const prefix = match[1];
      const value = match[2];
      const suffix = match[3];
      
      // Check if there are unescaped quotes inside
      // Find internal quotes (not the wrapping ones)
      if (value.includes('"') || value.includes('\u201c') || value.includes('\u201d')) {
        const escaped = value
          .replace(/\\"/g, '__ESCAPED_QUOTE__')  // preserve already-escaped
          .replace(/"/g, '\\"')                   // escape unescaped
          .replace(/__ESCAPED_QUOTE__/g, '\\"')  // restore
          .replace(/\u201c/g, '\\"')             // smart quotes
          .replace(/\u201d/g, '\\"');
        lines[i] = `${prefix}"${escaped}"${suffix}`;
      }
    }
  }
  return lines.join('\n');
}

function fixJsonLdStrings(code) {
  // Fix the JSON-LD block specifically
  // Find the const jsonLd = { ... }; block
  const jsonLdStart = code.indexOf('const jsonLd = {');
  if (jsonLdStart === -1) return code;
  
  // Find the closing };
  let depth = 0;
  let jsonLdEnd = -1;
  for (let i = jsonLdStart + 'const jsonLd = '.length; i < code.length; i++) {
    if (code[i] === '{') depth++;
    else if (code[i] === '}') {
      depth--;
      if (depth === 0) {
        jsonLdEnd = i + 1;
        break;
      }
    }
  }
  
  if (jsonLdEnd === -1) return code;
  
  let block = code.slice(jsonLdStart, jsonLdEnd);
  
  // Fix string values within the JSON-LD block line by line
  const lines = block.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Match property: "value",
    const match = line.match(/^(\s*\w+:\s*)"(.*)"(,?\s*)$/);
    if (match) {
      const prefix = match[1];
      let value = match[2];
      const suffix = match[3];
      
      if (value.includes('"') || value.includes('\u201c') || value.includes('\u201d')) {
        value = value
          .replace(/\\"/g, '__ESC__')
          .replace(/"/g, '\\"')
          .replace(/__ESC__/g, '\\"')
          .replace(/[\u201c\u201d]/g, '\\"');
        lines[i] = `${prefix}"${value}"${suffix}`;
      }
    }
  }
  
  const fixedBlock = lines.join('\n');
  return code.slice(0, jsonLdStart) + fixedBlock + code.slice(jsonLdEnd);
}

function fixJsxQuotes(code) {
  // In JSX text content, replace unescaped " with &quot;
  // Match patterns like: >Some text with "quotes" here<
  // Also fix: className="..." attributes are fine, skip those
  
  // Fix JSX text nodes containing unescaped double quotes
  // Pattern: between > and < in JSX
  code = code.replace(/>([^<]*"[^<]*)</g, (match) => {
    // Don't touch script tags or attributes
    if (match.includes('dangerouslySetInnerHTML') || match.includes('className=')) return match;
    return match.replace(/"/g, '&quot;');
  });
  
  // Fix template literal strings with unescaped quotes: `text with "quotes"`
  // These are fine in JS template literals, but let's also fix JSX {} expressions
  
  return code;
}

walk(appDir);
console.log(`Scanned ${totalFiles} files, fixed ${fixed} files with quote issues.`);
