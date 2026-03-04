const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '..', 'public', 'images');
let removed = 0;

for (const file of fs.readdirSync(imgDir)) {
  const fp = path.join(imgDir, file);
  if (!fs.statSync(fp).isFile()) continue;
  
  // Check if it's actually HTML
  const buf = fs.readFileSync(fp);
  const head = buf.slice(0, 20).toString('utf8');
  if (head.includes('<!DOCTYPE') || head.includes('<html') || head.includes('<!doctype')) {
    console.log(`Removing fake: ${file} (HTML)`);
    fs.unlinkSync(fp);
    removed++;
  }
}
console.log(`\nRemoved ${removed} fake images.`);

// Show remaining real images
const real = fs.readdirSync(imgDir).filter(f => fs.statSync(path.join(imgDir, f)).isFile());
console.log(`Real images: ${real.length}`);
real.forEach(f => {
  const stat = fs.statSync(path.join(imgDir, f));
  console.log(`  ${f} (${(stat.size/1024).toFixed(0)}KB)`);
});
