const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const notFoundPath = path.join(__dirname, 'images-not-found.json');
const outDir = path.join(__dirname, '..', 'public', 'images', 'products');
const notFoundUrls = JSON.parse(fs.readFileSync(notFoundPath, 'utf-8'));

// Filter real URLs (not template strings)
const realUrls = notFoundUrls.filter(u => 
  !u.includes('${') && 
  u.match(/\.(webp|jpg|jpeg|png|gif|avif)$/i)
);

// Normalize to original (remove size suffix)
const originals = [...new Set(realUrls.map(u => u.replace(/-\d+x\d+\./, '.')))];

// Filter accessible paths
const accessible = originals.filter(u => 
  /uploads\/(2023|2024|2026|2021|2022|2018|2019|2017|2025\/02)/.test(u)
);

// Already have
const existing = new Set();
try {
  for (const f of fs.readdirSync(outDir)) existing.add(f.toLowerCase());
  for (const f of fs.readdirSync(path.join(outDir, '..'))) {
    if (f !== 'products') existing.add(f.toLowerCase());
  }
} catch(e) {}

const toDownload = accessible.filter(u => {
  const fname = decodeURIComponent(u.split('/').pop()).toLowerCase();
  return !existing.has(fname);
});

console.log(`Real image URLs: ${realUrls.length}`);
console.log(`Unique originals: ${originals.length}`);
console.log(`Accessible: ${accessible.length}`);
console.log(`Need to download: ${toDownload.length}`);

let ok = 0, fail = 0;

function download(url) {
  return new Promise((resolve) => {
    const fname = decodeURIComponent(url.split('/').pop());
    const dest = path.join(outDir, fname);

    const headers = {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
      'Referer': 'https://www.atlasaircons.com/',
      'Accept': 'image/webp,image/*,*/*',
    };

    const proto = url.startsWith('https') ? https : http;
    const req = proto.get(url, { headers, timeout: 15000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        download(res.headers.location).then(resolve);
        return;
      }
      if (res.statusCode !== 200) {
        res.resume();
        fail++; resolve({ url, status: 'fail', code: res.statusCode }); return;
      }
      const ct = res.headers['content-type'] || '';
      if (ct.includes('text/html')) {
        res.resume();
        fail++; resolve({ url, status: 'blocked' }); return;
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const buf = Buffer.concat(chunks);
        const head = buf.slice(0, 50).toString('utf-8').toLowerCase();
        if (head.includes('<!doctype') || head.includes('<html')) {
          fail++; resolve({ url, status: 'blocked-html' }); return;
        }
        if (buf.length < 100) {
          fail++; resolve({ url, status: 'too-small' }); return;
        }
        fs.writeFileSync(dest, buf);
        ok++;
        process.stdout.write(`\r  OK: ${ok} | Fail: ${fail} / ${toDownload.length}   `);
        resolve({ url, status: 'ok', file: fname });
      });
    });
    req.on('error', () => { fail++; resolve({ url, status: 'error' }); });
    req.on('timeout', () => { req.destroy(); fail++; resolve({ url, status: 'timeout' }); });
  });
}

async function run() {
  console.log(`\nDownloading ${toDownload.length} missing images...\n`);
  for (let i = 0; i < toDownload.length; i += 3) {
    const batch = toDownload.slice(i, i + 3);
    await Promise.all(batch.map(download));
    await new Promise(r => setTimeout(r, 150));
  }
  console.log(`\n\nDone! OK: ${ok}, Failed: ${fail}`);
  console.log(`Total in products/: ${fs.readdirSync(outDir).length}`);
}

run().catch(console.error);
