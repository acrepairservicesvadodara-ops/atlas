const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');
let samples = [];

function walk(dir) {
  if (samples.length >= 10) return;
  for (const n of fs.readdirSync(dir)) {
    if (samples.length >= 10) return;
    const p = path.join(dir, n);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (n === 'page.tsx') {
      const code = fs.readFileSync(p, 'utf8');
      const rel = path.relative(appDir, p).replace('/page.tsx', '');
      const lines = code.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim().startsWith('<') || line.trim().startsWith('//') || line.includes('import ')) continue;
        const strMatch = line.match(/(?:title|description|name|alt):\s*"(.+)"/);
        if (strMatch) {
          const val = strMatch[1];
          const innerQuotes = val.match(/(?<!\\)"/g);
          if (innerQuotes && innerQuotes.length > 0) {
            samples.push({ slug: rel, line: i + 1, content: lines[i].trim() });
            break;
          }
        }
      }
    }
  }
}

walk(appDir);
console.log('Sample unescaped quotes:');
samples.forEach((s, i) => {
  console.log(`\n--- ${i+1}. ${s.slug} (line ${s.line}) ---`);
  console.log(s.content);
});
