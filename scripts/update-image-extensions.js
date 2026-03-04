const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');
const imagesDir = path.join(__dirname, '..', 'public', 'images');

// Build list of WebP files that replaced original files
const webpFiles = new Map();

function scanDir(dir, prefix = '') {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    if (f.isDirectory()) {
      scanDir(path.join(dir, f.name), prefix ? `${prefix}/${f.name}` : f.name);
    } else if (f.name.endsWith('.webp')) {
      const base = f.name.replace('.webp', '');
      webpFiles.set(base.toLowerCase(), prefix ? `${prefix}/${f.name}` : f.name);
    }
  }
}

scanDir(imagesDir);
console.log(`Found ${webpFiles.size} WebP files`);

// Process all page.tsx files to update image extensions
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

  // Match image paths with non-webp extensions
  const imgPattern = /\/images\/((?:products\/)?[^"'`\s]+\.(jpg|jpeg|png|JPG|JPEG|PNG|gif))/g;
  
  let match;
  const toReplace = [];
  while ((match = imgPattern.exec(content)) !== null) {
    const fullPath = match[1];
    const baseName = fullPath.replace(/\.(jpg|jpeg|png|gif)$/i, '').toLowerCase();
    const dirPart = fullPath.includes('/') ? fullPath.substring(0, fullPath.lastIndexOf('/') + 1) : '';
    const fileName = fullPath.includes('/') ? fullPath.substring(fullPath.lastIndexOf('/') + 1) : fullPath;
    const baseOnly = fileName.replace(/\.(jpg|jpeg|png|gif)$/i, '').toLowerCase();
    
    // Check if webp version exists
    const webpPath = webpFiles.get(baseOnly);
    if (webpPath) {
      const newPath = `/images/${webpPath}`;
      toReplace.push({ old: `/images/${fullPath}`, new: newPath });
    }
  }

  for (const r of toReplace) {
    if (content.includes(r.old)) {
      content = content.split(r.old).join(r.new);
      modified = true;
      replacements++;
    }
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

console.log(`\nUpdated ${total} image references in ${filesModified} files`);

// Also check for any remaining non-webp references
let remaining = 0;
for (const page of pages) {
  const content = fs.readFileSync(page, 'utf-8');
  const matches = content.match(/\/images\/[^"'`\s]+\.(jpg|jpeg|png)/gi) || [];
  remaining += matches.length;
}
console.log(`Remaining non-WebP references: ${remaining}`);
