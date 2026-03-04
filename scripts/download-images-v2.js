const fs = require('fs');
const path = require('path');
const https = require('https');

const outDir = path.join(__dirname, '..', 'public', 'images');

// Images that failed with hotlink protection - try with proper Referer
const images = [
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/05/AC-Fan-Motor.webp', name: 'ac-fan-motor.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/05/AC-Compressor.webp', name: 'ac-compressor.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/05/AC-PCB-Board-1.webp', name: 'ac-pcb-board.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/05/AC-Gas-Leak.webp', name: 'ac-gas-leak.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/05/Copper-Pipe.webp', name: 'copper-pipe.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/05/AC-Remote.webp', name: 'ac-remote.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/05/AC-Coil.webp', name: 'ac-coil.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/05/AC-Filter.webp', name: 'ac-filter.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/split-ac-installation.webp', name: 'split-ac-installation.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/split-ac-service.webp', name: 'split-ac-service.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/ac-gas-refilling.webp', name: 'ac-gas-refilling.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/chiller-repair.webp', name: 'chiller-repair.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/ac-amc-service.webp', name: 'ac-amc-service.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/ac-deep-cleaning.webp', name: 'ac-deep-cleaning.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/ac-not-cooling.webp', name: 'ac-not-cooling.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/cassette-ac-repair.webp', name: 'cassette-ac-repair.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/ductable-ac.webp', name: 'ductable-ac.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/panel-ac-repair.webp', name: 'panel-ac-repair.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/vrf-vrv-system.webp', name: 'vrf-vrv-system.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/cold-room-walkin-freezer.webp', name: 'cold-room-walkin-freezer.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/commercial-ac-service.webp', name: 'commercial-ac-service.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/atlas-aircon-team.webp', name: 'atlas-aircon-team.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/atlas-aircon-vehicle.webp', name: 'atlas-aircon-vehicle.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/happy-customer.webp', name: 'happy-customer.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/ac-repair-vadodara-hero.webp', name: 'ac-repair-vadodara-hero.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/ac-service-vadodara.webp', name: 'ac-service-vadodara.webp' },
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const options = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://www.atlasaircons.com/',
        'Accept': 'image/webp,image/avif,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'sec-fetch-dest': 'image',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
      },
      timeout: 15000,
    };
    
    const file = fs.createWriteStream(dest);
    const request = https.get(options, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        file.close();
        fs.unlinkSync(dest);
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => file.close(resolve));
    });
    request.on('error', (err) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    });
    request.on('timeout', () => {
      request.destroy();
      reject(new Error('timeout'));
    });
  });
}

async function main() {
  let ok = 0, fail = 0;
  for (const { url, name } of images) {
    const dest = path.join(outDir, name);
    try {
      await downloadFile(url, dest);
      // Verify it's actually an image
      const buf = fs.readFileSync(dest).slice(0, 20).toString('utf8');
      if (buf.includes('<!DOCTYPE') || buf.includes('<html')) {
        fs.unlinkSync(dest);
        console.log(`  ❌ ${name}: blocked (HTML)`);
        fail++;
      } else {
        const sz = fs.statSync(dest).size;
        console.log(`  ✅ ${name} (${(sz/1024).toFixed(0)}KB)`);
        ok++;
      }
    } catch (err) {
      console.log(`  ❌ ${name}: ${err.message}`);
      fail++;
    }
    await new Promise(r => setTimeout(r, 200));
  }
  console.log(`\n${ok} ok, ${fail} failed`);
}
main();
