const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const appDir = path.join(__dirname, '..', 'app');

// Get list of broken files from tsc
const tscOutput = execSync('npx tsc --noEmit 2>&1 || true', { encoding: 'utf8', cwd: path.join(__dirname, '..') });
const brokenFiles = new Set();
for (const line of tscOutput.split('\n')) {
  const match = line.match(/^app\/(.+?)\/page\.tsx/);
  if (match) brokenFiles.add(match[1]);
}

console.log(`Found ${brokenFiles.size} broken files to fix.`);

// Load scraped data for real content
const scraped = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'scraped-data.json'), 'utf8'));
const scrapedMap = {};
for (const [url, entry] of Object.entries(scraped)) {
  const slug = url.replace(/https?:\/\/(www\.)?atlasaircons\.com\//, '').replace(/\/+$/, '');
  scrapedMap[slug] = entry;
}

function slugToReadable(slug) {
  return slug.split('/').pop()
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace(/\bAc\b/g, 'AC')
    .replace(/\bHvac\b/g, 'HVAC')
    .replace(/\bPcb\b/g, 'PCB');
}

function makeDescription(slug, title) {
  const readable = title || slugToReadable(slug);
  if (slug.includes('repair') || slug.includes('service') || slug.includes('installation') || slug.includes('charging')) {
    return `Professional ${readable.toLowerCase()} by Atlas Aircon. Certified technicians, same-day service, transparent pricing. Serving Vadodara & Gujarat. Call +91 97272 57141.`;
  }
  if (slug.includes('guide') || slug.includes('wiki') || slug.includes('blog') || slug.includes('ultimate') || slug.includes('top-')) {
    return `${readable} - Expert guide by Atlas Aircon Vadodara. Professional HVAC tips and service insights. Call +91 97272 57141.`;
  }
  if (slug.includes('hitech-aircool') || slug.includes('compressor') || slug.includes('capacitor') || slug.includes('coil') || slug.includes('motor')) {
    return `Buy ${readable} at best price from Atlas Aircon. Genuine HVAC spare parts with warranty and fast delivery across Gujarat. Call +91 97272 57141.`;
  }
  return `${readable} - Atlas Aircon Vadodara. Professional AC repair, installation & maintenance services across Gujarat. Call +91 97272 57141.`;
}

function escStr(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ');
}

let fixed = 0;

for (const slug of brokenFiles) {
  const filePath = path.join(appDir, slug, 'page.tsx');
  if (!fs.existsSync(filePath)) continue;
  
  let code = fs.readFileSync(filePath, 'utf8');
  
  // Get scraped data
  const data = scrapedMap[slug];
  
  // Get a clean title from scraped data or existing code
  let title = '';
  if (data && data.pageTitle) {
    title = data.pageTitle.replace(/ - Atlas Aircon.*$/, '').replace(/ \| .*$/, '');
  } else {
    const m = code.match(/title:\s*"([^"]+)"/);
    if (m) title = m[1].replace(/ \| .*$/, '');
  }
  
  const goodDesc = makeDescription(slug, title);
  
  // Strategy: replace the entire metadata block line by line
  // Fix all description fields - match "description: " followed by any string content until the next valid property
  const lines = code.split('\n');
  const fixedLines = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    // Check if this line starts a broken description field
    const descIdx = line.indexOf('description:');
    if (descIdx !== -1 && !line.trim().startsWith('//') && !line.trim().startsWith('<') && !line.trim().startsWith('*')) {
      const indent = line.match(/^(\s*)/)[1];
      
      // Check if this is a valid clean description or a broken one
      // Try to match: description: "clean text",
      const cleanMatch = line.match(/^(\s*description:\s*)"([^"\\]*(?:\\.[^"\\]*)*)"(,?\s*)$/);
      
      if (cleanMatch) {
        // Valid escaped string - check if the content is good
        const val = cleanMatch[2];
        if (val.includes('@context') || val.includes('@type') || val.length < 20 || val.startsWith('{') || val.startsWith('[') || val.startsWith('<')) {
          fixedLines.push(`${indent}description: "${escStr(goodDesc)}",`);
        } else {
          fixedLines.push(line);
        }
      } else {
        // This line has a broken description that may span or contain garbage
        // Find where the next valid property starts
        // Replace this line (and potentially continuation) with a clean description
        
        // Determine if we're in metadata or openGraph
        const isOg = fixedLines.slice(-5).some(l => l.includes('openGraph'));
        
        fixedLines.push(`${indent}description: "${escStr(goodDesc)}",`);
        
        // Skip any continuation garbage lines until we hit a recognizable property
        // Look ahead for lines that are continuations of the broken string
        while (i + 1 < lines.length) {
          const nextLine = lines[i + 1].trim();
          // If next line starts with a known property key or closing brace, stop skipping
          if (nextLine.match(/^(title|description|alternates|openGraph|keywords|url|type|images|canonical)[\s:]/)) break;
          if (nextLine.match(/^\}/) || nextLine.match(/^\];/) || nextLine === '') break;
          if (nextLine.match(/^(export|import|const|function|return)/)) break;
          // This looks like continuation garbage, skip it
          i++;
        }
      }
    } else {
      fixedLines.push(line);
    }
    i++;
  }
  
  const newCode = fixedLines.join('\n');
  if (newCode !== code) {
    fs.writeFileSync(filePath, newCode);
    fixed++;
  }
}

console.log(`Fixed ${fixed} / ${brokenFiles.size} broken files.`);
