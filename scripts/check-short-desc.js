const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');
const results = [];

function walk(dir) {
  for (const n of fs.readdirSync(dir)) {
    const p = path.join(dir, n);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (n === 'page.tsx') {
      const code = fs.readFileSync(p, 'utf8');
      const rel = path.relative(appDir, p).replace('/page.tsx', '');
      const descMatch = code.match(/description:\s*"([^"]*)"/);
      if (descMatch && descMatch[1].length < 10) {
        results.push({ slug: rel, desc: descMatch[1] });
      }
    }
  }
}

walk(appDir);
console.log(`Pages with short descriptions (< 10 chars): ${results.length}\n`);
results.forEach(r => console.log(`  ${r.slug} → "${r.desc}"`));
