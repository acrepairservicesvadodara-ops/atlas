// More accurate check: try to parse each page.tsx as a module to find real syntax errors
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const appDir = path.join(__dirname, '..', 'app');
let total = 0;
let realErrors = [];

function walk(dir) {
  for (const n of fs.readdirSync(dir)) {
    const p = path.join(dir, n);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (n === 'page.tsx') {
      total++;
      const code = fs.readFileSync(p, 'utf8');
      const rel = path.relative(appDir, p).replace('/page.tsx', '');
      
      // Check for actual broken strings - a " inside a "..." that isn't escaped
      // The pattern: find string literals and check for unbalanced quotes
      // Simplest reliable check: look for lines where a string value contains
      // literal double-quote characters that break the string
      
      const lines = code.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Skip JSX, imports, comments
        if (line.trim().startsWith('<') || line.trim().startsWith('//') || 
            line.trim().startsWith('*') || line.trim().startsWith('/*') ||
            line.includes('import ') || line.trim() === '') continue;
        
        // Count non-escaped double quotes on the line
        // Remove template literals first
        let cleaned = line.replace(/`[^`]*`/g, '');
        // Remove regex
        cleaned = cleaned.replace(/\/[^/]+\//g, '');
        
        // Count unescaped double quotes
        let quoteCount = 0;
        for (let j = 0; j < cleaned.length; j++) {
          if (cleaned[j] === '"' && (j === 0 || cleaned[j-1] !== '\\')) {
            quoteCount++;
          }
        }
        
        // Odd number of non-escaped quotes means broken string
        if (quoteCount % 2 !== 0) {
          realErrors.push({ slug: rel, line: i + 1, content: line.trim().slice(0, 150) });
          break; // One per file
        }
      }
    }
  }
}

walk(appDir);

console.log(`Scanned: ${total} pages`);
console.log(`Real syntax errors (odd quotes): ${realErrors.length}`);
if (realErrors.length <= 30) {
  realErrors.forEach((e, i) => {
    console.log(`\n${i+1}. ${e.slug} L${e.line}:`);
    console.log(`   ${e.content}`);
  });
}
