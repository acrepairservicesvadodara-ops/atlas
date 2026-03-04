const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');
const imagesDir = path.join(__dirname, '..', 'public', 'images');
const productsDir = path.join(imagesDir, 'products');

// Build catalog of available local images
const localImages = new Map();

// Root images
for (const f of fs.readdirSync(imagesDir)) {
  if (f === 'products' || f.startsWith('.')) continue;
  const base = f.toLowerCase();
  localImages.set(base, `/images/${f}`);
  // Also map without extension for fuzzy matching
  const noExt = base.replace(/\.(webp|jpg|jpeg|png|gif)$/i, '');
  localImages.set(noExt, `/images/${f}`);
}

// Product images
for (const f of fs.readdirSync(productsDir)) {
  if (f.startsWith('.')) continue;
  const base = f.toLowerCase();
  localImages.set(base, `/images/products/${f}`);
  const noExt = base.replace(/\.(webp|jpg|jpeg|png|gif)$/i, '');
  localImages.set(noExt, `/images/products/${f}`);
}

console.log(`Indexed ${localImages.size / 2} local images`);

// Find matching local image for a WP URL
function findLocalImage(wpUrl) {
  // Extract filename
  let filename = wpUrl.split('/').pop();
  // Remove size suffix like -1200x654 or -1024x576
  filename = filename.replace(/-\d+x\d+\./, '.');
  // Decode URL encoding
  filename = decodeURIComponent(filename);
  
  const base = filename.toLowerCase();
  
  // Exact match
  if (localImages.has(base)) {
    return localImages.get(base);
  }
  
  // Try without extension
  const noExt = base.replace(/\.(webp|jpg|jpeg|png|gif)$/i, '');
  if (localImages.has(noExt)) {
    return localImages.get(noExt);
  }
  
  // Try scaled version names
  const scaledMatch = base.replace('-scaled-1', '').replace('-scaled', '');
  if (localImages.has(scaledMatch)) {
    return localImages.get(scaledMatch);
  }
  
  return null;
}

// Process all page.tsx files
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;
  let replacements = 0;
  let notFound = [];
  
  // Find all WordPress image URLs
  const wpUrlPattern = /https?:\/\/(?:www\.)?atlasaircons\.com\/wp-content\/uploads\/[^\s"'<>]+/g;
  
  const matches = content.match(wpUrlPattern) || [];
  
  for (const wpUrl of matches) {
    const localPath = findLocalImage(wpUrl);
    if (localPath) {
      content = content.split(wpUrl).join(localPath);
      modified = true;
      replacements++;
    } else {
      notFound.push(wpUrl);
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }
  
  return { replacements, notFound };
}

// Find all page.tsx files
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

// Process all pages
const pages = findPageFiles(appDir);
console.log(`Found ${pages.length} page.tsx files`);

let totalReplacements = 0;
let filesModified = 0;
const allNotFound = new Set();

for (const page of pages) {
  const { replacements, notFound } = processFile(page);
  if (replacements > 0) {
    totalReplacements += replacements;
    filesModified++;
  }
  for (const nf of notFound) {
    allNotFound.add(nf);
  }
}

console.log(`\nDone!`);
console.log(`  Files modified: ${filesModified}`);
console.log(`  Total URL replacements: ${totalReplacements}`);
console.log(`  Unique images not found locally: ${allNotFound.size}`);

if (allNotFound.size > 0 && allNotFound.size <= 20) {
  console.log(`\nNot found images:`);
  for (const url of allNotFound) {
    console.log(`  ${url.split('/').pop()}`);
  }
} else if (allNotFound.size > 20) {
  console.log(`\nFirst 20 not found:`);
  const arr = [...allNotFound];
  for (const url of arr.slice(0, 20)) {
    console.log(`  ${url.split('/').pop()}`);
  }
  console.log(`  ... and ${allNotFound.size - 20} more`);
  
  // Save not-found list for later
  fs.writeFileSync(
    path.join(__dirname, 'images-not-found.json'), 
    JSON.stringify([...allNotFound], null, 2)
  );
  console.log('\nSaved full list to scripts/images-not-found.json');
}
