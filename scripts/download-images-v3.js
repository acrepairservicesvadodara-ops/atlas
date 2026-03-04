const fs = require('fs');
const path = require('path');
const https = require('https');

const outDir = path.join(__dirname, '..', 'public', 'images');

// Curated list of important service images from accessible paths
const images = [
  // Service / Hero images
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2021/02/comman-problems-of-AC-1024x656.jpg', name: 'common-ac-problems.jpg' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2024/03/Walkin-Freezer-Repair-Service-1200x675.webp', name: 'walkin-freezer-repair.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2026/02/HVAC-1-scaled-1-1200x654.webp', name: 'hvac-service.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2026/02/Air-scaled-1-1200x601.webp', name: 'air-conditioning.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2026/02/HVAC-2-scaled-1.webp', name: 'hvac-commercial.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2026/02/HVAC-scaled-1.webp', name: 'hvac-industrial.webp' },
  
  // Brand service images 
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2024/03/Daiki-Ac-Repair-Service-1200x675.webp', name: 'daikin-ac-repair.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2024/03/Croma-Ac-Repair-Services-1200x676.webp', name: 'croma-ac-repair.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2024/03/Cruise-Ac-Repair-Service-1200x675.webp', name: 'cruise-ac-repair.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2023/03/cube-ac-repair-service-in-vadodara-1024x576.webp', name: 'cube-ac-repair.webp' },
  
  // Compressor images
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2026/02/Danfoss-Compressor.webp', name: 'danfoss-compressor.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2026/02/copeland-compressor.jpg', name: 'copeland-compressor.jpg' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2026/02/Emerson_Copeland_ZR2.jpg', name: 'emerson-copeland.jpg' },
  
  // Emergency / 24x7
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/02/Emergency-AC-Breakdown-Atlas-Aircon-1200x675.webp', name: 'emergency-ac-breakdown.webp' },
  
  // More brand images
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2024/03/Daikin-Ac-Repair-Services-1200x675.webp', name: 'daikin-ac-services.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2024/03/Electrolux-Ac-Repair-Services-1200x675.webp', name: 'electrolux-ac-services.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2024/03/General-Ac-Repair-Service-1200x676.webp', name: 'general-ac-services.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2024/03/Godrej-Ac-Repair-Service-1200x675.webp', name: 'godrej-ac-services.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2024/03/Hitachi-Ac-Repair-Service-1200x676.webp', name: 'hitachi-ac-services.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2024/03/LG-Ac-Repair-Service-1200x675.webp', name: 'lg-ac-services.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2024/03/Samsung-Ac-Repair-Service-1200x675.webp', name: 'samsung-ac-services.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2024/03/Voltas-Ac-Repair-Service-1200x675.webp', name: 'voltas-ac-services.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2024/03/Whirlpool-Ac-Repair-Service-1200x675.webp', name: 'whirlpool-ac-services.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2024/03/Carrier-Ac-Repair-Service-1200x675.webp', name: 'carrier-ac-services.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2024/03/Bluestar-Ac-Repair-Service-1200x676.webp', name: 'bluestar-ac-services.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2024/03/Panasonic-Ac-Repair-Service-1200x675.webp', name: 'panasonic-ac-services.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2024/03/Mitsubishi-Ac-Repair-Service-1200x675.webp', name: 'mitsubishi-ac-services.webp' },
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Referer': 'https://www.atlasaircons.com/',
      },
      timeout: 15000,
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(dest);
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    }).on('timeout', function() { this.destroy(); reject(new Error('timeout')); });
  });
}

async function main() {
  let ok = 0, fail = 0;
  for (const { url, name } of images) {
    const dest = path.join(outDir, name);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      const buf = fs.readFileSync(dest).slice(0, 20).toString();
      if (!buf.includes('<!DOCTYPE') && !buf.includes('<html')) {
        ok++;
        continue;
      }
    }
    try {
      await downloadFile(url, dest);
      const buf = fs.readFileSync(dest).slice(0, 20).toString();
      if (buf.includes('<!DOCTYPE') || buf.includes('<html')) {
        fs.unlinkSync(dest);
        throw new Error('blocked (HTML)');
      }
      const sz = fs.statSync(dest).size;
      console.log(`  ✅ ${name} (${(sz/1024).toFixed(0)}KB)`);
      ok++;
    } catch (err) {
      console.log(`  ❌ ${name}: ${err.message}`);
      fail++;
    }
    await new Promise(r => setTimeout(r, 150));
  }
  console.log(`\nDone: ${ok} ok, ${fail} failed`);
  console.log(`\nTotal images in /public/images/:`);
  const all = fs.readdirSync(outDir).filter(f => fs.statSync(path.join(outDir, f)).isFile());
  console.log(`  ${all.length} files`);
}
main();
