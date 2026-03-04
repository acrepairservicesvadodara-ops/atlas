const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');
let fixed = 0;

function slugToReadable(slug) {
  return slug
    .split('/').pop()
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace(/\bAc\b/g, 'AC')
    .replace(/\bHvac\b/g, 'HVAC')
    .replace(/\bPcb\b/g, 'PCB')
    .replace(/\bSku\b/g, 'SKU')
    .replace(/\bKml\b/g, 'KML');
}

function generateDesc(slug, title) {
  const readable = title || slugToReadable(slug);
  
  // Product-style pages
  if (slug.includes('hitech-aircool') || slug.includes('atlas-aircon-ac-')) {
    return `Buy ${readable} at best price from Atlas Aircon. Genuine HVAC spare parts with warranty, GST invoice & fast delivery across Gujarat. Call +91 97272 57141.`;
  }
  // Blog/guide pages
  if (slug.includes('guide') || slug.includes('ultimate') || slug.includes('top-') || slug.includes('best-') || slug.includes('premium') || slug.includes('standard-')) {
    return `${readable} - Expert guide by Atlas Aircon Vadodara. Professional HVAC tips, product recommendations & service insights. Call +91 97272 57141.`;
  }
  // Service pages
  if (slug.includes('repair') || slug.includes('service') || slug.includes('installation') || slug.includes('charging')) {
    return `Professional ${readable.toLowerCase()} by Atlas Aircon. Certified technicians, same-day service, transparent pricing. Serving Vadodara & Gujarat. Call +91 97272 57141.`;
  }
  // Locations/sitemap/non-content
  if (slug === 'locations.kml' || slug === 'sitemap-xml') {
    return `Atlas Aircon - Vadodara's trusted AC repair & HVAC service company. Professional air conditioning solutions across Gujarat. Call +91 97272 57141.`;
  }
  // Fallback
  return `${readable} - Atlas Aircon Vadodara. Professional AC repair, installation & maintenance services across Gujarat. Call +91 97272 57141.`;
}

function walk(dir) {
  for (const n of fs.readdirSync(dir)) {
    const p = path.join(dir, n);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (n === 'page.tsx') {
      let code = fs.readFileSync(p, 'utf8');
      const rel = path.relative(appDir, p).replace('/page.tsx', '');
      
      // Check all description fields for broken content
      const descMatch = code.match(/description:\s*"([^"]*)"/);
      if (!descMatch) continue;
      
      const desc = descMatch[1];
      // Detect broken descriptions: JSON fragments, HTML, too short, empty
      const isBroken = desc.length < 20 || 
        desc.startsWith('{ ') || desc.startsWith('[ ') || 
        desc.startsWith('<') || desc.startsWith('/*') ||
        desc.startsWith('&') || desc === '...' || desc === 'Blogs';
      
      if (!isBroken) continue;
      
      // Get title from file
      const titleMatch = code.match(/title:\s*"([^"]+)"/);
      const title = titleMatch ? titleMatch[1].replace(/ \| .*$/, '') : null;
      
      const newDesc = generateDesc(rel, title);
      
      // Replace ALL description fields in the file with the new one
      const original = code;
      
      // Fix metadata description
      code = code.replace(
        /(description:\s*)"[^"]*"/g,
        (match, prefix) => {
          // Don't replace long valid descriptions
          const val = match.replace(prefix, '').replace(/^"|"$/g, '');
          if (val.length >= 20 && !val.startsWith('{ ') && !val.startsWith('[ ') && 
              !val.startsWith('<') && !val.startsWith('/*') && !val.startsWith('&') &&
              val !== '...' && val !== 'Blogs') {
            return match;
          }
          return `${prefix}"${newDesc.replace(/"/g, '\\"')}"`;
        }
      );
      
      if (code !== original) {
        fs.writeFileSync(p, code);
        fixed++;
        console.log(`Fixed: ${rel}`);
      }
    }
  }
}

walk(appDir);
console.log(`\nFixed ${fixed} pages with broken descriptions.`);
