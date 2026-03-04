const d = require('../scraped-data.json');
const urls = new Set();
for (const [k,v] of Object.entries(d)) {
  if (v.images) {
    for (const img of v.images) {
      if (img && img.includes('atlasaircons.com/wp-content/uploads/') && 
          !img.includes('/2025/05') && !img.includes('/2025/10')) {
        urls.add(img);
      }
    }
  }
}
console.log('Unique downloadable images:', urls.size);
[...urls].forEach(u => console.log(u));
