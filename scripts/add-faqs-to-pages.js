const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');

// Categorize page by its slug
function categorizeSlug(slug) {
  if (!slug) return { type: 'generic', context: {} };
  
  // Area pages
  if (slug.startsWith('ac-service-in-') || slug.startsWith('ac-repair-in-')) {
    const area = slug.replace('ac-service-in-', '').replace('ac-repair-in-', '')
      .split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return { type: 'area', context: { area } };
  }
  
  // Brand pages
  const brands = ['daikin', 'voltas', 'blue-star', 'carrier', 'lg', 'samsung', 'hitachi', 
    'o-general', 'mitsubishi', 'panasonic', 'whirlpool', 'godrej', 'croma', 'toshiba', 
    'haier', 'lloyd', 'amazonbasics', 'gree', 'ogeneral', 'videocon', 'sanyo', 'sharp'];
  for (const brand of brands) {
    if (slug.includes(brand)) {
      return { type: 'brand', context: { brand: brand.replace('-', ' ').toUpperCase() } };
    }
  }
  
  // AC Type pages
  const acTypes = ['split-ac', 'window-ac', 'cassette-ac', 'ductable-ac', 'tower-ac', 
    'central-ac', 'panel-ac', 'portable-ac', 'inverter-ac', 'package-ac'];
  for (const acType of acTypes) {
    if (slug.includes(acType)) {
      return { type: 'ac-type', context: { acType: acType.replace('-', ' ').toUpperCase() } };
    }
  }
  
  // Industrial/Commercial
  if (slug.includes('chiller') || slug.includes('hvac') || slug.includes('vrf') || 
      slug.includes('vrv') || slug.includes('ahu') || slug.includes('cold-room') ||
      slug.includes('walk-in') || slug.includes('freezer') || slug.includes('industrial')) {
    return { type: 'industrial', context: { service: slug.split('-').join(' ') } };
  }
  
  // Installation pages
  if (slug.includes('installation') || slug.includes('fitting') || slug.includes('shifting')) {
    const service = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return { type: 'service-installation', context: { service } };
  }
  
  // Repair pages
  if (slug.includes('repair') || slug.includes('fix') || slug.includes('breakdown')) {
    const service = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return { type: 'service-repair', context: { service } };
  }
  
  // Service/Cleaning pages
  if (slug.includes('service') || slug.includes('clean') || slug.includes('maintenance') || slug.includes('amc')) {
    const service = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return { type: 'service-service', context: { service } };
  }
  
  // Gas refilling
  if (slug.includes('gas') || slug.includes('refill') || slug.includes('charging')) {
    return { type: 'service-repair', context: { service: 'AC Gas Refilling' } };
  }
  
  return { type: 'generic', context: { service: slug.split('-').join(' ') } };
}

// FAQ Templates (condensed from lib/faq-generator.ts)
const faqBank = {
  'service-repair': [
    { q: "What is the cost of AC repair in Vadodara?", a: "AC repair cost starts from ₹299 for inspection. Gas refilling from ₹1,500, PCB repair from ₹1,200, compressor repair from ₹3,500. Atlas Aircon provides upfront pricing with no hidden charges." },
    { q: "How quickly can you come for AC repair?", a: "Atlas Aircon offers same-day AC repair across Vadodara. Our certified technician reaches within 90 minutes to 3 hours of booking. For emergencies, call +91 97272 57141." },
    { q: "Do you provide warranty on AC repairs?", a: "Yes, Atlas Aircon provides 30 to 90 days warranty on AC repairs depending on the work performed. Spare parts like compressors, PCBs, and motors come with manufacturer warranty." },
    { q: "Which AC brands do you repair?", a: "We repair all major brands — Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Mitsubishi, Panasonic, Whirlpool, Godrej, Croma, Toshiba, Haier, and more." },
    { q: "Is emergency AC repair available on holidays?", a: "Yes, Atlas Aircon provides AC repair 7 days a week including Sundays and public holidays. Our 24/7 emergency service is available at +91 97272 57141." },
    { q: "How long does AC repair take?", a: "Most AC repairs are completed within 1-2 hours. Complex repairs involving compressor replacement or major parts may take 3-4 hours. Our technician provides estimated time upfront." },
    { q: "Can you repair older AC models?", a: "Yes, Atlas Aircon specializes in repairing all AC models including older units. We maintain inventory of spare parts for discontinued models and can source parts for most brands." },
    { q: "What payment methods do you accept?", a: "We accept cash, UPI (GPay, PhonePe, Paytm), bank transfer, and cards. Payment is collected only after repair is completed to your satisfaction." },
    { q: "Do you provide AMC for regular AC maintenance?", a: "Yes, our Annual Maintenance Contract (AMC) starts from ₹1,999/year. AMC customers get priority service, free visits, discounted repairs, and scheduled maintenance." },
    { q: "What if the AC problem returns after repair?", a: "If the same issue recurs within the warranty period, we fix it free of charge. Simply call us at +91 97272 57141 and reference your previous service." },
  ],
  'service-installation': [
    { q: "What is included in AC installation?", a: "AC installation includes site inspection, bracket/stand fitting, copper piping up to 3m, electrical wiring, drain pipe, gas charging, vacuum testing, and final testing." },
    { q: "How much does AC installation cost in Vadodara?", a: "AC installation costs vary: Split AC from ₹1,500, Window AC from ₹800, Cassette AC from ₹3,500. Additional piping charged at ₹150/meter." },
    { q: "How long does AC installation take?", a: "Standard AC installation takes 2-3 hours for split AC, 1-2 hours for window AC. Complex installations with long piping may take 4-5 hours." },
    { q: "Do you provide AC installation warranty?", a: "Atlas Aircon provides 1-year warranty on installation workmanship. Any installation-related issues within this period are fixed free of charge." },
    { q: "Can you relocate my existing AC?", a: "Yes, AC relocation includes uninstallation, transport, reinstallation, gas top-up, and testing. Charges vary by distance and AC type." },
    { q: "What type of copper piping do you use?", a: "We use premium quality copper pipes (0.8mm thickness) with proper insulation. Quality piping prevents gas leaks and maintains AC efficiency." },
    { q: "Is electrical work included in installation?", a: "Basic electrical work is included. MCB installation, dedicated wiring, or major modifications are charged separately after inspection." },
    { q: "Can you install AC on higher floors?", a: "Yes, installation available for all floor levels. For high-rise buildings, we coordinate with society for outdoor unit placement." },
    { q: "Do you provide demo after AC installation?", a: "Yes, our technician provides demo of AC operation, remote control features, and basic maintenance tips after installation." },
    { q: "What should I prepare before AC installation?", a: "Ensure installation area is accessible and clear. For split AC, decide outdoor unit placement. Electrical point should be within 2 meters." },
  ],
  'service-service': [
    { q: "What does AC service include?", a: "AC service includes filter cleaning, coil jet wash, drain pipe clearing, gas pressure check, electrical inspection, fan motor check, and performance testing." },
    { q: "How much does AC service cost?", a: "AC service starts from ₹499 for basic service. Deep jet cleaning is ₹799 for split AC, ₹599 for window AC. Chemical wash starts from ₹999." },
    { q: "How often should AC be serviced?", a: "AC should be serviced at least twice a year — before summer and after monsoon. Heavy use environments may need quarterly servicing." },
    { q: "Will AC service improve cooling?", a: "Yes, proper AC service can improve cooling efficiency by 20-30%. Dirty filters and coils reduce airflow and heat exchange." },
    { q: "Does AC service reduce electricity bills?", a: "Regular AC service can reduce electricity consumption by 15-25%. A well-maintained AC runs more efficiently, saving power." },
    { q: "How long does AC service take?", a: "Basic AC service takes 30-45 minutes. Deep cleaning with jet wash takes 1-1.5 hours. Chemical foam cleaning takes about 2 hours." },
    { q: "Can AC service remove bad smell?", a: "Yes, AC service includes cleaning of filters, coils, and drain pan which removes bacteria and mold causing odors. Anti-bacterial spray applied." },
    { q: "Is gas top-up included in AC service?", a: "Basic service includes gas pressure check. If gas is low, top-up is charged separately — R22 from ₹1,500, R32/R410A from ₹2,000." },
    { q: "Do you clean outdoor AC unit?", a: "Yes, complete service includes outdoor unit cleaning. Condenser coil cleaning is essential for proper heat rejection." },
    { q: "What's the difference between service and deep cleaning?", a: "Basic service is dry cleaning and inspection. Deep cleaning uses high-pressure jet wash. Chemical wash uses foam for thorough cleaning." },
  ],
  'area': [
    { q: "Do you provide AC service in this area?", a: "Yes, Atlas Aircon provides complete AC service, repair, and installation across all localities in this area. Same-day service available." },
    { q: "What are your service charges in this area?", a: "AC service charges are standard: inspection ₹299 (adjusted against repairs), basic service from ₹499, deep cleaning from ₹799. No area surcharges." },
    { q: "How quickly can you reach this area?", a: "Our nearest technician can reach within 90 minutes to 3 hours depending on current workload. Emergencies are prioritized." },
    { q: "Do you have technicians in this area?", a: "Yes, Atlas Aircon has servicemen positioned across Vadodara. This ensures faster response times for AC repair and service calls." },
    { q: "Is emergency AC service available here?", a: "Yes, 24/7 emergency AC repair is available. Call +91 97272 57141 for immediate assistance with AC breakdown or cooling failures." },
    { q: "What AC problems are common in this area?", a: "Common issues include gas leakage, water dripping, reduced cooling from dust, and electrical tripping. Regular maintenance prevents most issues." },
    { q: "Do you offer AMC for customers here?", a: "Yes, AMC plans available from ₹1,999/year. Includes 2-4 free services, priority support, and discounted repairs." },
    { q: "Can you install new AC in this area?", a: "Yes, professional AC installation available for all AC types — split, window, cassette, ductable. Includes copper piping and testing." },
    { q: "Do you service office ACs here?", a: "Yes, we service commercial ACs in offices, shops, showrooms. We handle all types including VRF systems and ducted ACs." },
    { q: "Is service available on weekends here?", a: "Yes, AC service available 7 days a week including Saturdays and Sundays. Book online or call +91 97272 57141." },
  ],
  'brand': [
    { q: "Are you an authorized service center for this brand?", a: "Atlas Aircon provides multi-brand AC service. While not an authorized center, our technicians are trained on this brand and use genuine parts." },
    { q: "What is the cost of repair for this brand?", a: "Repair costs depend on issue: gas refilling from ₹1,500, PCB repair from ₹1,200, compressor repair from ₹3,500. Inspection ₹299 adjusted against repairs." },
    { q: "Can you repair older models of this brand?", a: "Yes, we repair all models including discontinued ones. We maintain inventory of common spare parts and can source parts for older units." },
    { q: "How quickly can you repair this brand's AC?", a: "Most repairs are completed same-day within 2-3 hours. Complex repairs requiring parts may take 1-2 days. Emergency service available 24/7." },
    { q: "Do you use genuine parts for this brand?", a: "Yes, we use OEM-quality parts for repairs. For critical components like compressors, we source genuine parts when available." },
    { q: "What warranty do you provide on repairs?", a: "We provide 30-90 days warranty on repairs. Spare parts carry manufacturer warranty. Warranty doesn't cover misuse or power surge damage." },
    { q: "Is gas refilling expensive for this brand?", a: "Gas refilling follows standard pricing: R22 from ₹1,500, R32/R410A from ₹2,000. Prices depend on gas type in your specific model." },
    { q: "Can you service inverter AC of this brand?", a: "Yes, we specialize in inverter AC service and repair. Our technicians are trained on variable frequency drive and inverter PCB diagnosis." },
    { q: "Do you provide AMC for this brand?", a: "Yes, AMC plans cover this and all other brands. Starting ₹1,999/year for split AC, includes free services, priority support, discounted repairs." },
    { q: "How do I maintain this brand's AC?", a: "Clean filters every 2 weeks, ensure outdoor unit has airflow, run AC at 24-26°C, schedule professional service every 6 months." },
  ],
  'industrial': [
    { q: "Do you provide industrial HVAC services?", a: "Yes, Atlas Aircon specializes in industrial HVAC including chiller repair, AHU service, cooling tower maintenance, VRF systems, and panel AC." },
    { q: "What is the response time for industrial AC breakdown?", a: "For industrial emergencies, we prioritize response within 2-4 hours. 24/7 helpline available at +91 97272 57141 for critical cooling failures." },
    { q: "Do you offer AMC for industrial HVAC?", a: "Yes, comprehensive AMC includes scheduled maintenance, emergency response, parts discount, and dedicated technician. Plans customized per equipment." },
    { q: "Can you repair imported industrial equipment?", a: "Yes, we repair industrial AC from all manufacturers — Carrier, Trane, York, Daikin, Blue Star, Voltas, and imported machinery." },
    { q: "Is your team trained for VRF/VRV systems?", a: "Yes, technicians certified for Daikin VRV, Mitsubishi VRF, LG Multi-V, and other VRF systems. We handle installation, commissioning, repairs." },
    { q: "Do you provide chiller plant maintenance?", a: "Yes, complete chiller plant maintenance including water-cooled chillers, air-cooled chillers, cooling towers, pumps, and controls." },
    { q: "Can you service pharmaceutical industry AC?", a: "Yes, we service cleanroom ACs, precision cooling systems, and pharmaceutical-grade HVAC with documentation support." },
    { q: "Do you work in GIDC industrial areas?", a: "Yes, we regularly service industries in Makarpura GIDC, Nandesari GIDC, Waghodia GIDC, Savli GIDC, and all Gujarat industrial estates." },
    { q: "What is cost of industrial AC repair?", a: "Industrial AC repair costs vary by equipment type and issue. We provide free inspection and detailed quotation before proceeding." },
    { q: "Do you supply spare parts for industrial AC?", a: "Yes, we stock spare parts including compressors, controls, motors, sensors, and refrigerants. Genuine and equivalent parts available." },
  ],
  'ac-type': [
    { q: "What is the cost of this type of AC repair?", a: "Repair costs vary: gas refilling ₹1,500-₹3,000, PCB repair ₹1,200-₹4,000, compressor replacement ₹4,000-₹12,000. Diagnosis ₹299 adjusted against repairs." },
    { q: "Why is my AC not cooling properly?", a: "Common reasons: low refrigerant gas (leak), dirty filters, blocked condenser coil, faulty compressor, or thermostat issue. Diagnosis required for accurate repair." },
    { q: "How often should this AC type be serviced?", a: "This AC type should be serviced every 3-6 months depending on usage. At minimum, service before summer and after monsoon season." },
    { q: "Is gas refilling expensive for this AC?", a: "Gas refilling costs depend on refrigerant type: R22 ₹1,500-₹2,500, R32 ₹2,000-₹3,500, R410A ₹2,500-₹4,000. Includes pressure testing." },
    { q: "How long does installation take for this AC type?", a: "Installation typically takes 2-4 hours depending on complexity, piping requirements, and site conditions." },
    { q: "What brands do you service for this AC type?", a: "We service all brands: Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Panasonic, Godrej, and more." },
    { q: "Is AMC available for this AC type?", a: "Yes, AMC plans available from ₹1,999/year. Includes scheduled servicing, priority emergency support, and discounted repairs." },
    { q: "Do you repair older models of this AC type?", a: "Yes, we repair all models including discontinued ones. Spare parts sourced for older units when required." },
    { q: "What warranty do you provide?", a: "We provide 30-90 days repair warranty and 1-year installation warranty. Spare parts carry manufacturer warranty." },
    { q: "Can you convert or upgrade this AC type?", a: "We can advise on upgrades and handle new installations. Converting between AC types isn't possible but replacement is." },
  ],
  'generic': [
    { q: "What AC services does Atlas Aircon provide?", a: "Atlas Aircon provides AC repair, service, installation, AMC, gas refilling, and maintenance for all brands and types in Vadodara." },
    { q: "How do I book AC service?", a: "Call +91 97272 57141, WhatsApp us, or book online. Same-day service available across Vadodara." },
    { q: "What is your service charge?", a: "Inspection charge is ₹299 (adjusted against repairs). Basic service from ₹499, deep cleaning from ₹799, gas refilling from ₹1,500." },
    { q: "Do you provide warranty?", a: "Yes, 30-90 days warranty on repairs, 1 year on installation. Spare parts carry manufacturer warranty." },
    { q: "Which brands do you service?", a: "We service all brands: Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Panasonic, Godrej, and more." },
    { q: "Is emergency service available?", a: "Yes, 24/7 emergency AC repair available. Call +91 97272 57141 for immediate assistance." },
    { q: "What payment methods do you accept?", a: "Cash, UPI (GPay, PhonePe), bank transfer, and cards. Payment after service completion." },
    { q: "Do you offer AMC?", a: "Yes, AMC from ₹1,999/year includes free services, priority support, and repair discounts." },
    { q: "Where are you located?", a: "Atlas Aircon is based in Sayajigunj, Vadodara. We serve all areas across Vadodara and Gujarat." },
    { q: "What are your working hours?", a: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM. 24/7 emergency service available." },
  ],
};

// Generate unique question variations based on slug
function generateUniqueFAQs(slug, category) {
  const baseFaqs = faqBank[category.type] || faqBank.generic;
  const context = category.context;
  
  // Create unique FAQs by customizing based on context
  const uniqueFaqs = baseFaqs.map((faq, idx) => {
    let q = faq.q;
    let a = faq.a;
    
    // Customize based on context
    if (context.area) {
      q = q.replace(/this area/g, context.area).replace(/here/g, `in ${context.area}`);
      a = a.replace(/this area/g, context.area).replace(/localities in this area/g, `all localities in ${context.area}`);
    }
    if (context.brand) {
      q = q.replace(/this brand/g, context.brand).replace(/this brand's/g, context.brand);
      a = a.replace(/this brand/g, context.brand).replace(/this and all other brands/g, `${context.brand} and all other brands`);
    }
    if (context.service) {
      q = q.replace(/AC service/g, context.service).replace(/AC repair/g, context.service);
      a = a.replace(/AC service/g, context.service).replace(/AC repair/g, context.service);
    }
    if (context.acType) {
      q = q.replace(/this type of AC/g, context.acType).replace(/this AC type/g, context.acType).replace(/this AC/g, context.acType);
      a = a.replace(/This AC type/g, context.acType).replace(/this AC type/g, context.acType);
    }
    
    // Add variation based on index for uniqueness
    if (idx === 0 && context.area) {
      q = `What is the best AC repair service in ${context.area}?`;
      a = `Atlas Aircon is rated 4.9★ for AC repair in ${context.area}. Our certified technicians provide same-day service with 90-day warranty. Call +91 97272 57141.`;
    }
    
    return { question: q, answer: a };
  });
  
  return uniqueFaqs.slice(0, 10);
}

// Generate FAQ section code
function generateFAQSection(faqs) {
  const faqsJson = JSON.stringify(faqs, null, 2).replace(/"/g, '\\"').replace(/\n/g, '');
  
  return `
      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
${faqs.map(f => `              { q: "${f.question.replace(/"/g, '\\"')}", a: "${f.answer.replace(/"/g, '\\"')}" }`).join(',\n')}
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 group">
                <summary className="p-5 cursor-pointer font-semibold text-gray-900 flex justify-between items-center">
                  {faq.q}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
${faqs.map(f => `          { "@type": "Question", name: "${f.question.replace(/"/g, '\\"')}", acceptedAnswer: { "@type": "Answer", text: "${f.answer.replace(/"/g, '\\"')}" } }`).join(',\n')}
        ]
      }) }} />`;
}

// Check if page already has FAQ section
function hasFAQSection(content) {
  return content.includes('FAQPage') || 
         content.includes('Frequently Asked Questions') ||
         content.includes('FAQ Schema') ||
         content.includes('"@type": "Question"');
}

// Find insertion point (before closing </> or last </section>)
function findInsertionPoint(content) {
  // Look for CTA section or last section before closing
  const ctaMatch = content.lastIndexOf('{/* CTA */}');
  if (ctaMatch > 0) return ctaMatch;
  
  const lastSectionClose = content.lastIndexOf('</section>');
  if (lastSectionClose > 0) {
    // Find the start of that section
    const sectionStart = content.lastIndexOf('<section', lastSectionClose - 1);
    if (sectionStart > 0) return sectionStart;
  }
  
  // Fallback: before </>
  const fragmentClose = content.lastIndexOf('</>');
  if (fragmentClose > 0) return fragmentClose;
  
  return -1;
}

// Process pages
function findPageFiles(dir, skipDirs = new Set(['[slug]', 'product', 'product-category', 'shop', 'blogs', 'api'])) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findPageFiles(fullPath, new Set()));
    } else if (entry.name === 'page.tsx') {
      files.push(fullPath);
    }
  }
  return files;
}

// Main
const pages = findPageFiles(appDir);
console.log(`Found ${pages.length} pages to process`);

let added = 0;
let skipped = 0;
let errors = 0;

for (const pagePath of pages) {
  try {
    const content = fs.readFileSync(pagePath, 'utf-8');
    
    // Skip if already has FAQs
    if (hasFAQSection(content)) {
      skipped++;
      continue;
    }
    
    // Get slug from path
    const slug = path.dirname(pagePath).split('/').pop();
    if (slug === 'app') continue; // Homepage handled separately
    
    // Categorize and generate FAQs
    const category = categorizeSlug(slug);
    const faqs = generateUniqueFAQs(slug, category);
    
    // Find insertion point
    const insertPoint = findInsertionPoint(content);
    if (insertPoint < 0) {
      errors++;
      continue;
    }
    
    // Generate FAQ section
    const faqSection = generateFAQSection(faqs);
    
    // Insert
    const newContent = content.slice(0, insertPoint) + faqSection + '\n\n' + content.slice(insertPoint);
    fs.writeFileSync(pagePath, newContent, 'utf-8');
    added++;
    
    if (added % 100 === 0) {
      console.log(`  Processed ${added} pages...`);
    }
  } catch (e) {
    errors++;
  }
}

console.log(`\nDone!`);
console.log(`  FAQs added: ${added}`);
console.log(`  Already had FAQs: ${skipped}`);
console.log(`  Errors: ${errors}`);
