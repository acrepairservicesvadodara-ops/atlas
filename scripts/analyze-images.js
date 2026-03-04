const data = require('../scraped-data.json');
const entries = Object.entries(data);
let allImages = [];
const pageImages = {}; // url -> images array

for (const [url, page] of entries) {
  if (page.images && page.images.length > 0) {
    const imgs = [];
    for (const img of page.images) {
      if (img.includes('atlasaircons.com') && img.includes('/uploads/')) {
        allImages.push(img);
        imgs.push(img);
      }
    }
    if (imgs.length > 0) pageImages[url] = imgs;
  }
}

const unique = [...new Set(allImages)];
// Filter out scaled/resized variants - keep originals only
const originals = unique.filter(u => !/-\d+x\d+\./.test(u));
console.log('Total unique images:', unique.length);
console.log('Original (non-resized):', originals.length);

// Pages with product images
const pagesWithImages = Object.keys(pageImages).length;
console.log('Pages with images:', pagesWithImages);

// Check which paths are likely accessible vs blocked
const accessible = originals.filter(u => /uploads\/(2023|2024|2026|2021|2022|2018|2019|2017|2025\/02)/.test(u));
const blocked = originals.filter(u => /uploads\/2025\/(0[3-9]|1[0-2])/.test(u));
console.log('Likely accessible:', accessible.length);
console.log('Potentially blocked (2025/03-12):', blocked.length);

// Which pages use each image - map image -> pages
const imgToPages = {};
for (const [url, imgs] of Object.entries(pageImages)) {
  for (const img of imgs) {
    const orig = img.replace(/-\d+x\d+\./, '.');
    if (!imgToPages[orig]) imgToPages[orig] = [];
    imgToPages[orig].push(url);
  }
}

// Show image usage frequency
const sorted = Object.entries(imgToPages).sort((a, b) => b[1].length - a[1].length);
console.log('\nTop 20 most-used images:');
for (const [img, pages] of sorted.slice(0, 20)) {
  const filename = img.split('/').pop();
  console.log(`  ${pages.length} pages: ${filename}`);
}

// Count already downloaded
const fs = require('fs');
const downloaded = new Set();
try {
  for (const f of fs.readdirSync('public/images')) downloaded.add(f);
  for (const f of fs.readdirSync('public/images/products')) downloaded.add(f);
} catch(e) {}

let alreadyHave = 0;
let needToDownload = 0;
for (const img of originals) {
  const filename = img.split('/').pop();
  if (downloaded.has(filename)) alreadyHave++;
  else needToDownload++;
}

console.log('\nAlready downloaded:', alreadyHave);
console.log('Need to download:', needToDownload);
console.log('Accessible to download:', accessible.filter(u => {
  const f = u.split('/').pop();
  return !downloaded.has(f);
}).length);

// Write accessible list for download
const toDownload = accessible.filter(u => {
  const f = u.split('/').pop();
  return !downloaded.has(f);
});
fs.writeFileSync('scripts/images-to-download.json', JSON.stringify(toDownload, null, 2));
console.log('\nWrote', toDownload.length, 'URLs to scripts/images-to-download.json');

// Also write full mapping: page slug -> image files it needs
const slugImageMap = {};
for (const [url, imgs] of Object.entries(pageImages)) {
  const slug = url.replace('https://www.atlasaircons.com/', '').replace(/\/$/, '');
  if (!slug) continue;
  slugImageMap[slug] = [...new Set(imgs.map(i => i.split('/').pop().replace(/-\d+x\d+\./, '.')))];
}
fs.writeFileSync('scripts/page-image-map.json', JSON.stringify(slugImageMap, null, 2));
console.log('Wrote page-image-map.json with', Object.keys(slugImageMap).length, 'pages');
