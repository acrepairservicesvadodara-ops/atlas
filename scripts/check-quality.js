const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');
let total = 0;
let jsonLdErrors = [];
let unescapedQuotes = [];
let placeholder = [];
let emptyDesc = [];

function walk(dir) {
  for (const n of fs.readdirSync(dir)) {
    const p = path.join(dir, n);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (n === 'page.tsx') {
      total++;
      const code = fs.readFileSync(p, 'utf8');
      const rel = path.relative(appDir, p).replace('/page.tsx', '');

      // Check for placeholder content
      if (code.includes('content placeholder') || code.includes('Content coming soon')) {
        placeholder.push(rel);
      }

      // Check for empty/missing descriptions
      const descMatch = code.match(/description:\s*"([^"]*)"/);
      if (descMatch && descMatch[1].length < 10) {
        emptyDesc.push({ slug: rel, desc: descMatch[1] });
      }

      // Check JSON-LD block for syntax issues
      const jsonLdMatch = code.match(/const jsonLd = (\{[\s\S]*?\n\});/);
      if (jsonLdMatch) {
        try {
          new Function('return ' + jsonLdMatch[1]);
        } catch (e) {
          jsonLdErrors.push({ slug: rel, error: e.message.slice(0, 100) });
        }
      }

      // Check for unescaped quotes in string values (outside JSX)
      // Look for patterns like: "text with " unescaped quote"
      const lines = code.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // Skip JSX content lines and imports
        if (line.trim().startsWith('<') || line.trim().startsWith('//') || line.includes('import ')) continue;
        // Check for string assignments with unescaped quotes
        const strMatch = line.match(/(?:title|description|name|alt):\s*"(.+)"/);
        if (strMatch) {
          const val = strMatch[1];
          // Count quotes - if odd number of backslash-escaped quotes vs total quotes, there's an issue
          const innerQuotes = val.match(/(?<!\\)"/g);
          if (innerQuotes && innerQuotes.length > 0) {
            unescapedQuotes.push({ slug: rel, line: i + 1, content: line.trim().slice(0, 120) });
            break; // Only report first per file
          }
        }
      }
    }
  }
}

walk(appDir);

console.log(`Total pages: ${total}`);
console.log(`\nPlaceholder pages: ${placeholder.length}`);
if (placeholder.length > 0 && placeholder.length <= 10) placeholder.forEach(s => console.log('  ', s));

console.log(`\nEmpty/short descriptions: ${emptyDesc.length}`);
if (emptyDesc.length <= 20) emptyDesc.forEach(d => console.log('  ', d.slug, '→', JSON.stringify(d.desc)));

console.log(`\nJSON-LD parse errors: ${jsonLdErrors.length}`);
if (jsonLdErrors.length <= 20) jsonLdErrors.forEach(e => console.log('  ', e.slug, '→', e.error));

console.log(`\nUnescaped quotes in strings: ${unescapedQuotes.length}`);
if (unescapedQuotes.length <= 20) unescapedQuotes.forEach(q => console.log('  ', q.slug, 'L' + q.line, '→', q.content));
