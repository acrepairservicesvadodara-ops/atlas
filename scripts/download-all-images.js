const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const urls = JSON.parse(fs.readFileSync(path.join(__dirname, 'images-to-download.json'), 'utf-8'));
const outDir = path.join(__dirname, '..', 'public', 'images', 'products');
fs.mkdirSync(outDir, { recursive: true });

// Already downloaded
const existing = new Set(fs.readdirSync(outDir));

const toDownload = urls.filter(u => {
  const fname = decodeURIComponent(u.split('/').pop());
  return !existing.has(fname);
});

console.log(`Total URLs: ${urls.length}`);
console.log(`Already have: ${urls.length - toDownload.length}`);
console.log(`To download: ${toDownload.length}`);

const CONCURRENCY = 5;
let idx = 0;
let ok = 0;
let fail = 0;
let htmlFake = 0;

function download(url) {
  return new Promise((resolve) => {
    const fname = decodeURIComponent(url.split('/').pop());
    const dest = path.join(outDir, fname);

    const headers = {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
      'Referer': 'https://www.atlasaircons.com/',
      'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'image',
      'sec-fetch-mode': 'no-cors',
      'sec-fetch-site': 'same-origin',
    };

    const proto = url.startsWith('https') ? https : http;
    const req = proto.get(url, { headers, timeout: 15000 }, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        download(res.headers.location).then(resolve);
        return;
      }

      if (res.statusCode !== 200) {
        res.resume();
        fail++;
        resolve({ url, status: 'fail', code: res.statusCode });
        return;
      }

      const contentType = res.headers['content-type'] || '';
      // If it's HTML (Cloudflare block), skip
      if (contentType.includes('text/html')) {
        res.resume();
        htmlFake++;
        resolve({ url, status: 'blocked', contentType });
        return;
      }

      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const buf = Buffer.concat(chunks);
        // Double-check: if starts with <!DOCTYPE or <html, it's fake
        const head = buf.slice(0, 50).toString('utf-8').toLowerCase();
        if (head.includes('<!doctype') || head.includes('<html')) {
          htmlFake++;
          resolve({ url, status: 'blocked-html' });
          return;
        }
        
        if (buf.length < 100) {
          fail++;
          resolve({ url, status: 'too-small', size: buf.length });
          return;
        }

        fs.writeFileSync(dest, buf);
        ok++;
        process.stdout.write(`\r  Downloaded: ${ok} | Failed: ${fail} | Blocked: ${htmlFake} | Remaining: ${toDownload.length - ok - fail - htmlFake}   `);
        resolve({ url, status: 'ok', size: buf.length, file: fname });
      });
      res.on('error', () => {
        fail++;
        resolve({ url, status: 'error' });
      });
    });

    req.on('error', () => {
      fail++;
      resolve({ url, status: 'error' });
    });
    req.on('timeout', () => {
      req.destroy();
      fail++;
      resolve({ url, status: 'timeout' });
    });
  });
}

async function run() {
  console.log(`\nStarting download of ${toDownload.length} images...\n`);
  
  const results = [];
  
  // Process in batches
  for (let i = 0; i < toDownload.length; i += CONCURRENCY) {
    const batch = toDownload.slice(i, i + CONCURRENCY);
    const batchResults = await Promise.all(batch.map(download));
    results.push(...batchResults);
    
    // Small delay between batches to be polite
    if (i + CONCURRENCY < toDownload.length) {
      await new Promise(r => setTimeout(r, 200));
    }
  }

  console.log(`\n\nDone!`);
  console.log(`  OK: ${ok}`);
  console.log(`  Failed: ${fail}`);
  console.log(`  Blocked (HTML): ${htmlFake}`);

  // Report blocked URLs
  const blockedUrls = results.filter(r => r.status === 'blocked' || r.status === 'blocked-html');
  if (blockedUrls.length > 0) {
    console.log(`\nBlocked URLs (${blockedUrls.length}):`);
    for (const b of blockedUrls.slice(0, 10)) {
      console.log(`  ${b.url.split('/').pop()}`);
    }
    if (blockedUrls.length > 10) console.log(`  ... and ${blockedUrls.length - 10} more`);
  }

  // Save results
  fs.writeFileSync(path.join(__dirname, 'download-results.json'), JSON.stringify(results, null, 2));
  console.log('\nResults saved to scripts/download-results.json');
  
  // Count final totals
  const totalInProducts = fs.readdirSync(outDir).length;
  const totalInImages = fs.readdirSync(path.join(__dirname, '..', 'public', 'images')).filter(f => !f.startsWith('.')).length - 1; // -1 for products dir
  console.log(`\nTotal images: ${totalInImages} (root) + ${totalInProducts} (products) = ${totalInImages + totalInProducts}`);
}

run().catch(console.error);
