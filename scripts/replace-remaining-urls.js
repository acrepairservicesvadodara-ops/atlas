const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');

// Fallback images by category
const fallbacks = {
  'chemical': '/images/products/ac-chemical-service.webp',
  'hvac': '/images/hvac-service.webp',
  'chiller': '/images/products/chiller-repair-service.webp',
  'cold-room': '/images/products/walkin-freezer-repair.webp',
  'ac-repair': '/images/products/ac-repair-service.webp',
  'installation': '/images/products/ac-installation-service.webp',
  'gas': '/images/air-conditioning.webp',
  'compressor': '/images/products/compressor.webp',
  'panel': '/images/products/panel-ac-centrifugal-fan.webp',
  'cooler': '/images/products/water-cooler-repair-service.webp',
  'vehicle': '/images/products/Atlas-aircon-vehicle.webp',
  'logo': '/images/atlas-aircon-logo.png',
  'default': '/images/Atlas-Aircon-Ac-Service-in-vadodara-2.webp',
};

function selectFallback(url) {
  const filename = url.toLowerCase();
  if (filename.includes('chemical') || filename.includes('deep-clean')) return fallbacks.chemical;
  if (filename.includes('hvac')) return fallbacks.hvac;
  if (filename.includes('chiller')) return fallbacks.chiller;
  if (filename.includes('cold-room') || filename.includes('freezer')) return fallbacks['cold-room'];
  if (filename.includes('installation')) return fallbacks.installation;
  if (filename.includes('gas') || filename.includes('refill')) return fallbacks.gas;
  if (filename.includes('compressor')) return fallbacks.compressor;
  if (filename.includes('panel')) return fallbacks.panel;
  if (filename.includes('cooler')) return fallbacks.cooler;
  if (filename.includes('vehicle')) return fallbacks.vehicle;
  if (filename.includes('logo')) return fallbacks.logo;
  if (filename.includes('repair')) return fallbacks['ac-repair'];
  return fallbacks.default;
}

function findPageFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (entry.name === 'page.tsx') {
      files.push(fullPath);
    }
  }
  return files;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;
  let replacements = 0;
  
  // Match WordPress image URLs
  const wpPattern = /https?:\/\/(?:www\.)?atlasaircons\.com\/wp-content\/uploads\/[^\s"'<>]+/g;
  
  const matches = content.match(wpPattern) || [];
  for (const url of new Set(matches)) {
    // Skip template strings
    if (url.includes('${')) continue;
    
    const fallback = selectFallback(url);
    content = content.split(url).join(fallback);
    modified = true;
    replacements++;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }
  return replacements;
}

const pages = findPageFiles(appDir);
let total = 0;
let filesModified = 0;

for (const page of pages) {
  const count = processFile(page);
  if (count > 0) {
    total += count;
    filesModified++;
  }
}

console.log(`Replaced ${total} remaining WordPress URLs with fallback images`);
console.log(`Files modified: ${filesModified}`);

// Verify no more WP URLs
const remaining = [];
for (const page of pages) {
  const content = fs.readFileSync(page, 'utf-8');
  if (content.includes('atlasaircons.com/wp-content')) {
    remaining.push(page);
  }
}
console.log(`Pages still with WP URLs: ${remaining.length}`);
if (remaining.length > 0) {
  console.log('  ' + remaining.slice(0, 5).map(p => path.basename(path.dirname(p))).join(', '));
}
