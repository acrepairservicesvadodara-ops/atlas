const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const outDir = path.join(__dirname, '..', 'public', 'images');

// Key images from the original Atlas Aircon site
const imagesToDownload = [
  // Hero / General
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2023/02/Window-AC-Installation-and-Repairing.webp', name: 'window-ac-installation-repairing.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2019/03/cropped-AtlasAircon-Logo.png', name: 'atlas-aircon-logo.png' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2026/02/emergency-ac-repairing.webp', name: 'emergency-ac-repairing.webp' },
  
  // Service images
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2018/02/Installation-Process-of-Window-Air-conditioner-by-Atlas-Aircon-AC-Repair-Serivce-Vadodara.jpg', name: 'ac-installation-process.jpg' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/emergency-24hrs-7-days-ac-repairing.webp', name: 'emergency-24hrs-ac-repairing.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/05/AC-Fan-Motor.webp', name: 'ac-fan-motor.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/05/AC-Compressor.webp', name: 'ac-compressor.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/05/AC-PCB-Board-1.webp', name: 'ac-pcb-board.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/05/AC-Gas-Leak.webp', name: 'ac-gas-leak.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/05/Copper-Pipe.webp', name: 'copper-pipe.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/05/AC-Remote.webp', name: 'ac-remote.webp' },
  
  // Product images
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2026/02/Compressor-Capacitor-and-fan-capacitor.webp', name: 'capacitor.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/05/AC-Coil.webp', name: 'ac-coil.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/05/AC-Filter.webp', name: 'ac-filter.webp' },
  
  // More service images
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
  
  // Team / Trust
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/atlas-aircon-team.webp', name: 'atlas-aircon-team.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/atlas-aircon-vehicle.webp', name: 'atlas-aircon-vehicle.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/happy-customer.webp', name: 'happy-customer.webp' },
  
  // Hero backgrounds
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/ac-repair-vadodara-hero.webp', name: 'ac-repair-vadodara-hero.webp' },
  { url: 'https://www.atlasaircons.com/wp-content/uploads/2025/10/ac-service-vadodara.webp', name: 'ac-service-vadodara.webp' },
];

// Also scrape images from scraped data for the most popular pages
const scraped = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'scraped-data.json'), 'utf8'));
const popularSlugs = [
  'https://www.atlasaircons.com/',
  'https://www.atlasaircons.com/ac-repair-vadodara/',
  'https://www.atlasaircons.com/ac-service-vadodara/',
  'https://www.atlasaircons.com/ac-installation-vadodara/',
  'https://www.atlasaircons.com/ac-gas-refilling-vadodara/',
  'https://www.atlasaircons.com/chiller-repair-vadodara/',
  'https://www.atlasaircons.com/ac-amc-vadodara/',
  'https://www.atlasaircons.com/split-ac-repair-vadodara/',
  'https://www.atlasaircons.com/window-ac-repair-vadodara/',
  'https://www.atlasaircons.com/about-us/',
];

for (const slug of popularSlugs) {
  const data = scraped[slug];
  if (data && data.images) {
    for (const img of data.images) {
      if (img && img.includes('atlasaircons.com') && !img.includes('emoji') && !img.includes('admin-ajax')) {
        const name = path.basename(new URL(img).pathname);
        if (!imagesToDownload.find(i => i.name === name)) {
          imagesToDownload.push({ url: img, name });
        }
      }
    }
  }
}

console.log(`Will download ${imagesToDownload.length} images...`);

// Ensure output dirs exist
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const protocol = url.startsWith('https') ? https : http;
    
    const request = protocol.get(url, { 
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' },
      timeout: 15000
    }, (response) => {
      // Handle redirects
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
      file.on('finish', () => { file.close(resolve); });
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

async function downloadAll() {
  let success = 0, fail = 0;
  
  for (let i = 0; i < imagesToDownload.length; i++) {
    const { url, name } = imagesToDownload[i];
    const dest = path.join(outDir, name);
    
    // Skip if already exists
    if (fs.existsSync(dest)) {
      const stat = fs.statSync(dest);
      if (stat.size > 1000) {
        success++;
        continue;
      }
    }
    
    try {
      await downloadFile(url, dest);
      const stat = fs.statSync(dest);
      console.log(`  ✅ ${name} (${(stat.size/1024).toFixed(0)}KB)`);
      success++;
    } catch (err) {
      console.log(`  ❌ ${name}: ${err.message}`);
      fail++;
    }
    
    // Small delay
    await new Promise(r => setTimeout(r, 100));
  }
  
  console.log(`\nDone! ${success} downloaded, ${fail} failed.`);
}

downloadAll();
