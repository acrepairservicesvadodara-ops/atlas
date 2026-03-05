// FAQ Generation System for Hitech Aircool Engineers
// Generates unique, contextual FAQs based on page type and content

interface FAQ {
  question: string;
  answer: string;
}

// ── FAQ Templates by Category ─────────────────────────────────

// Service FAQs (AC repair, service, installation, etc.)
const serviceTemplates = {
  repair: [
    { q: "What is the cost of {service} in {area}?", a: "The cost of {service} in {area} starts from ₹299 for inspection. Actual repair costs depend on the issue — gas refilling from ₹1,500, PCB repair from ₹1,200, compressor repair from ₹3,500. Hitech Aircool Engineers provides upfront pricing with no hidden charges." },
    { q: "How quickly can you come for {service}?", a: "Hitech Aircool Engineers offers same-day {service} across {area}. In most cases, our certified technician reaches within 90 minutes to 3 hours of booking. For emergencies, call +91 93289 53665." },
    { q: "Do you provide warranty on {service}?", a: "Yes, Hitech Aircool Engineers provides 30 to 90 days warranty on {service} depending on the work performed. Spare parts like compressors, PCBs, and motors come with manufacturer warranty." },
    { q: "Which AC brands do you service for {service}?", a: "We provide {service} for all major brands — Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Mitsubishi, Panasonic, Whirlpool, Godrej, Croma, Toshiba, Haier, and more." },
    { q: "Is {service} available on Sundays and holidays?", a: "Yes, Hitech Aircool Engineers provides {service} 7 days a week including Sundays and public holidays. Our 24/7 emergency service is available at +91 93289 53665." },
    { q: "How long does {service} take?", a: "Most {service} jobs are completed within 1-2 hours. Complex repairs involving compressor replacement or major parts may take 3-4 hours. Our technician will provide an estimated time before starting." },
    { q: "Do I need to be present during {service}?", a: "Yes, we recommend being present during {service} for security and to understand the work being done. Our technicians explain the issue and solution before proceeding with any repairs." },
    { q: "Can you repair older AC models?", a: "Yes, Hitech Aircool Engineers specializes in repairing all AC models including older units. We maintain inventory of spare parts for discontinued models and can source parts for most brands." },
    { q: "What payment methods do you accept for {service}?", a: "We accept cash, UPI (GPay, PhonePe, Paytm), bank transfer, and cards. Payment is collected only after {service} is completed to your satisfaction." },
    { q: "Do you provide AMC for regular {service}?", a: "Yes, our Annual Maintenance Contract (AMC) for {service} starts from ₹1,999/year. AMC customers get priority service, free visits, discounted repairs, and scheduled maintenance." },
    { q: "What if my AC problem returns after {service}?", a: "If the same issue recurs within the warranty period after {service}, we'll fix it free of charge. Simply call us at +91 93289 53665 and reference your previous service." },
    { q: "Are your technicians certified for {service}?", a: "Yes, all Hitech Aircool Engineers technicians are factory-trained and certified for {service}. They undergo regular training on new AC technologies and brands." },
  ],
  installation: [
    { q: "What is the cost of {service} in {area}?", a: "The cost of {service} in {area} varies by AC type: Split AC installation from ₹1,500, Window AC from ₹800, Cassette AC from ₹3,500. This includes fitting, piping up to 3m, and testing." },
    { q: "How long does {service} take?", a: "Standard {service} takes 2-3 hours for split AC, 1-2 hours for window AC. Complex installations with long piping runs may take 4-5 hours." },
    { q: "What is included in {service}?", a: "{service} includes site inspection, bracket/stand fitting, copper piping, electrical wiring, drain pipe, gas charging, vacuum testing, and final testing. Additional piping charged at ₹150/meter." },
    { q: "Do you provide the AC unit or only {service}?", a: "Hitech Aircool Engineers provides {service} only. We can recommend and help you purchase AC units at discounted prices from authorized dealers." },
    { q: "Is electrical work included in {service}?", a: "Basic electrical work is included in {service}. If MCB installation, dedicated wiring, or major electrical modifications are needed, this is charged separately after inspection." },
    { q: "What warranty do you provide on {service}?", a: "Hitech Aircool Engineers provides 1-year warranty on {service} workmanship. Any installation-related issues within this period are fixed free of charge." },
    { q: "Can you relocate my existing AC during {service}?", a: "Yes, AC relocation is part of our {service} offerings. Relocation includes uninstallation, transport, reinstallation, gas top-up, and testing. Charges vary by distance and AC type." },
    { q: "Do I need to prepare anything before {service}?", a: "Please ensure the installation area is accessible and clear. For split AC, outdoor unit placement should be decided. Electrical point should be available within 2 meters." },
    { q: "What type of copper piping do you use for {service}?", a: "We use premium quality copper pipes (0.8mm thickness) with proper insulation for {service}. Poor quality piping can cause gas leaks and reduce AC efficiency." },
    { q: "Can you install AC on higher floors?", a: "Yes, {service} is available for all floor levels. For high-rise buildings, we coordinate with your society for outdoor unit installation. Additional charges may apply for floors above 3rd." },
    { q: "Do you provide demo after {service}?", a: "Yes, after {service} completion, our technician provides a full demo of AC operation, remote control features, and basic maintenance tips." },
    { q: "What happens if there's an issue after {service}?", a: "Any {service} related issues within warranty period are fixed free. Our service team is available at +91 93289 53665 for immediate support." },
  ],
  service: [
    { q: "What does {service} include?", a: "{service} includes filter cleaning, coil jet wash, drain pipe clearing, gas pressure check, electrical inspection, fan motor check, and performance testing. Deep cleaning includes chemical wash of evaporator and condenser." },
    { q: "How much does {service} cost in {area}?", a: "{service} in {area} starts from ₹499 for basic service. Deep jet cleaning is ₹799 for split AC, ₹599 for window AC. Chemical wash (foam cleaning) starts from ₹999." },
    { q: "How often should I get {service}?", a: "We recommend {service} at least twice a year — before summer and after monsoon. Heavy use environments may need quarterly servicing for optimal performance." },
    { q: "Will {service} improve my AC's cooling?", a: "Yes, proper {service} can improve cooling efficiency by 20-30%. Dirty filters and coils reduce airflow and heat exchange, making AC work harder and cool less." },
    { q: "Does {service} reduce electricity bills?", a: "Regular {service} can reduce electricity consumption by 15-25%. A well-maintained AC runs more efficiently and doesn't overheat, saving power." },
    { q: "How long does {service} take?", a: "Basic {service} takes 30-45 minutes. Deep cleaning with jet wash takes 1-1.5 hours. Chemical foam cleaning takes about 2 hours." },
    { q: "Do you remove bad smell during {service}?", a: "Yes, {service} includes cleaning of filters, coils, and drain pan which removes bacteria and mold causing bad odors. We also apply anti-bacterial spray for fresh air." },
    { q: "Is gas top-up included in {service}?", a: "Basic {service} includes gas pressure check. If gas level is low, top-up is charged separately based on gas type — R22 from ₹1,500, R32/R410A from ₹2,000." },
    { q: "Can you service my outdoor unit?", a: "Yes, complete {service} includes outdoor unit cleaning. Outdoor coil cleaning is essential for proper heat rejection and preventing compressor overheating." },
    { q: "Do you provide a service report after {service}?", a: "Yes, Hitech Aircool Engineers provides a detailed service report after {service} listing work done, issues found, gas pressure readings, and recommendations." },
    { q: "What's the difference between service and deep cleaning?", a: "Basic {service} is dry cleaning of filters and visual inspection. Deep cleaning uses high-pressure jet wash to remove stubborn dirt from coils. Chemical wash uses foam for thorough cleaning." },
    { q: "Is {service} available for commercial ACs?", a: "Yes, we provide {service} for all commercial AC types — cassette, ductable, VRF/VRV, package units, AHUs, and chillers. Commercial servicing charges vary by equipment size." },
  ],
};

// Area-specific FAQs
const areaTemplates = [
  { q: "Which areas of {area} do you cover for AC service?", a: "We cover all localities within {area} including nearby residential societies, commercial complexes, and industrial areas. Same-day service available throughout {area}." },
  { q: "What are your service charges in {area}?", a: "AC service charges in {area} are standard: inspection ₹299 (adjusted against repairs), basic service from ₹499, deep cleaning from ₹799. No area-based surcharges within Vadodara." },
  { q: "How quickly can you reach {area}?", a: "Our nearest technician can reach {area} within 90 minutes to 3 hours depending on current workload. For emergencies, we prioritize dispatch." },
  { q: "Do you have technicians located in {area}?", a: "Yes, Hitech Aircool Engineers has servicemen positioned across Vadodara including near {area}. This ensures faster response times for AC repair and service calls." },
  { q: "Is emergency AC service available in {area}?", a: "Yes, 24/7 emergency AC repair is available in {area}. Call +91 93289 53665 for immediate assistance with AC breakdown, gas leaks, or cooling failures." },
  { q: "What AC problems are common in {area}?", a: "Common AC issues in {area} include gas leakage (due to vibration), water dripping, reduced cooling (dust accumulation), and electrical tripping. Regular maintenance prevents most issues." },
  { q: "Do you offer AMC plans for customers in {area}?", a: "Yes, AMC plans are available for {area} residents from ₹1,999/year. Includes 2-4 free services, priority support, and discounted repairs." },
  { q: "Can you install new AC in {area}?", a: "Yes, we provide professional AC installation in {area} for all AC types — split, window, cassette, ductable. Installation includes copper piping, stand, and testing." },
  { q: "Do you service office ACs in {area}?", a: "Yes, Hitech Aircool Engineers services commercial ACs in {area} offices, shops, showrooms, and businesses. We handle all types including VRF systems and ducted ACs." },
  { q: "What brands can you repair in {area}?", a: "We repair all AC brands in {area} — Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Panasonic, Godrej, Whirlpool, and more." },
  { q: "Is your service available on weekends in {area}?", a: "Yes, AC service is available in {area} 7 days a week including Saturdays and Sundays. Book online or call +91 93289 53665." },
  { q: "What payment options are available in {area}?", a: "We accept all payment methods in {area} — cash, UPI (GPay, PhonePe), bank transfer, and cards. Payment after service completion." },
];

// Brand-specific FAQs
const brandTemplates = [
  { q: "Do you provide authorized service for {brand} AC?", a: "Hitech Aircool Engineers provides multi-brand AC service including {brand}. While we're not an authorized service center, our technicians are trained on {brand} AC systems and use genuine parts." },
  { q: "What is the cost of {brand} AC repair?", a: "{brand} AC repair costs depend on the issue: gas refilling from ₹1,500, PCB repair from ₹1,200, compressor repair from ₹3,500. Inspection charge is ₹299 (adjusted against repairs)." },
  { q: "Can you repair older {brand} AC models?", a: "Yes, we repair all {brand} AC models including discontinued ones. We maintain inventory of common spare parts and can source parts for older {brand} units." },
  { q: "How quickly can you repair my {brand} AC?", a: "Most {brand} AC repairs are completed same-day within 2-3 hours. Complex repairs requiring parts may take 1-2 days. Emergency service available 24/7." },
  { q: "Do you use genuine parts for {brand} AC repairs?", a: "Yes, we use OEM-quality parts for {brand} AC repairs. For critical components like compressors, we source genuine {brand} parts when available." },
  { q: "What warranty do you provide on {brand} AC repairs?", a: "We provide 30-90 days warranty on {brand} AC repairs. Spare parts carry manufacturer warranty. Warranty doesn't cover misuse or power surge damage." },
  { q: "Is {brand} AC gas refilling expensive?", a: "{brand} AC gas refilling follows standard pricing: R22 from ₹1,500, R32/R410A from ₹2,000. Prices depend on gas type used in your specific {brand} model." },
  { q: "Can you service {brand} inverter AC?", a: "Yes, we specialize in {brand} inverter AC service and repair. Our technicians are trained on variable frequency drive technology and inverter PCB diagnosis." },
  { q: "Do you provide AMC for {brand} AC?", a: "Yes, AMC plans cover {brand} and all other brands. Starting from ₹1,999/year for split AC, includes free services, priority support, and discounted repairs." },
  { q: "How do I maintain my {brand} AC between services?", a: "For {brand} AC, clean filters every 2 weeks, ensure outdoor unit has proper airflow, run AC at 24-26°C for efficiency, and schedule professional service every 6 months." },
  { q: "My {brand} AC is not cooling. What could be wrong?", a: "Common causes for {brand} AC not cooling: low gas (leak), dirty filters/coils, compressor issue, or faulty thermostat. Our technician can diagnose and fix the exact problem." },
  { q: "Can you install {brand} AC bought elsewhere?", a: "Yes, we install {brand} AC purchased from any dealer or online. Installation charges are same regardless of purchase source. Quality installation with 1-year workmanship warranty." },
];

// AC Type FAQs
const acTypeTemplates = {
  split: [
    { q: "What is the cost of split AC repair?", a: "Split AC repair costs vary: gas refilling ₹1,500-₹3,000, PCB repair ₹1,200-₹4,000, compressor replacement ₹4,000-₹12,000. Diagnosis charge ₹299 adjusted against repairs." },
    { q: "Why is my split AC not cooling?", a: "Common reasons: low refrigerant gas (leak), dirty filters, blocked condenser coil, faulty compressor, or thermostat issue. Professional diagnosis required for accurate repair." },
    { q: "How often should split AC be serviced?", a: "Split AC should be serviced every 3-6 months depending on usage. At minimum, service before summer and after monsoon season for optimal performance." },
    { q: "Is split AC gas refilling costly?", a: "Split AC gas refilling costs depend on refrigerant type: R22 ₹1,500-₹2,500, R32 ₹2,000-₹3,500, R410A ₹2,500-₹4,000. Includes pressure testing and leak check." },
  ],
  window: [
    { q: "Is window AC repair cheaper than split AC?", a: "Window AC repairs are generally 20-30% cheaper due to simpler design. Gas refilling, motor replacement, and compressor repairs cost less than equivalent split AC parts." },
    { q: "Why does my window AC make noise?", a: "Window AC noise causes: loose mounting, worn fan bearings, debris hitting fan, compressor vibration, or refrigerant issues. Proper diagnosis identifies the exact source." },
    { q: "Can window AC be converted to split AC?", a: "No, window AC cannot be converted to split AC. However, we can help you uninstall window AC and install a new split AC in its place." },
    { q: "How long does window AC installation take?", a: "Window AC installation takes 1-2 hours including frame fitting, sealing, electrical connection, and testing. Charges start from ₹800." },
  ],
  cassette: [
    { q: "What is the cost of cassette AC repair?", a: "Cassette AC repairs are 30-50% higher than split AC due to complexity. PCB repair ₹2,000-₹6,000, compressor replacement ₹8,000-₹20,000, gas refilling ₹3,000-₹5,000." },
    { q: "How often should cassette AC be serviced?", a: "Cassette AC in commercial settings should be serviced monthly or quarterly due to heavy usage. Minimally, service every 3 months for optimal cooling and air quality." },
    { q: "Is cassette AC installation expensive?", a: "Cassette AC installation is more complex, costing ₹3,500-₹8,000 depending on ceiling type and drainage requirements. Includes false ceiling opening and restoration." },
    { q: "Why is my cassette AC leaking water?", a: "Cassette AC water leaks are usually caused by: blocked drain pipe, cracked drain pan, improper slope, or frozen evaporator coil. Professional cleaning and realignment fixes most issues." },
  ],
  central: [
    { q: "Do you repair central AC systems?", a: "Yes, Hitech Aircool Engineers repairs central AC systems including AHUs, ductwork, chillers, and controls. Commercial central AC is our specialty for offices and buildings." },
    { q: "What is the cost of central AC maintenance?", a: "Central AC maintenance costs depend on system size: small systems from ₹3,000/quarterly, large commercial systems from ₹10,000/quarterly. AMC available for predictable costs." },
    { q: "How often does central AC need servicing?", a: "Central AC requires monthly filter checks and quarterly professional service. Chillers need bi-annual maintenance. Regular service prevents costly breakdowns." },
    { q: "Can you design and install new central AC?", a: "Yes, we design and install complete central AC systems for offices, showrooms, hospitals, and factories. Includes load calculation, ductwork design, and commissioning." },
  ],
};

// Industrial/Commercial FAQs
const industrialTemplates = [
  { q: "Do you provide industrial HVAC services?", a: "Yes, Hitech Aircool Engineers specializes in industrial HVAC including chiller repair, AHU service, cooling tower maintenance, VRF systems, and panel AC for factories across Gujarat." },
  { q: "What is the response time for industrial AC breakdown?", a: "For industrial emergencies, we prioritize response within 2-4 hours. 24/7 helpline available at +91 93289 53665 for chiller breakdowns and critical cooling failures." },
  { q: "Do you offer AMC for industrial HVAC?", a: "Yes, comprehensive AMC for industrial HVAC includes scheduled maintenance, emergency response, parts discount, and dedicated technician. Plans customized per equipment inventory." },
  { q: "Can you repair imported industrial AC equipment?", a: "Yes, we repair industrial AC from all manufacturers — Carrier, Trane, York, Daikin, Blue Star, Voltas, and imported machinery. Multi-brand expertise for all HVAC equipment." },
  { q: "Is your team trained for VRF/VRV systems?", a: "Yes, our technicians are certified for Daikin VRV, Mitsubishi VRF, LG Multi-V, and other VRF systems. We handle installation, commissioning, and repairs." },
  { q: "Do you provide chiller plant maintenance?", a: "Yes, complete chiller plant maintenance including water-cooled chillers, air-cooled chillers, cooling towers, pumps, and controls. Preventive maintenance reduces downtime." },
  { q: "Can you service pharmaceutical industry AC?", a: "Yes, we service cleanroom ACs, precision cooling systems, and pharmaceutical-grade HVAC. We understand validation requirements and documentation needs." },
  { q: "Do you work in GIDC industrial areas?", a: "Yes, we regularly service industries in Makarpura GIDC, Nandesari GIDC, Waghodia GIDC, Savli GIDC, and all industrial estates in Gujarat." },
  { q: "What is the cost of industrial AC repair?", a: "Industrial AC repair costs vary widely based on equipment type and issue. We provide free inspection and detailed quotation before proceeding with any repairs." },
  { q: "Do you provide spare parts for industrial AC?", a: "Yes, we stock and supply spare parts for industrial AC including compressors, controls, motors, sensors, and refrigerants. Genuine and equivalent parts available." },
];

// ── Generate FAQs for a given page ────────────────────────────

export function generateFAQs(pageType: string, context: {
  service?: string;
  area?: string;
  brand?: string;
  acType?: string;
}): FAQ[] {
  const faqs: FAQ[] = [];
  const used = new Set<string>();
  
  const addFaq = (q: string, a: string) => {
    // Replace placeholders
    q = q.replace(/\{service\}/g, context.service || "AC service")
         .replace(/\{area\}/g, context.area || "Vadodara")
         .replace(/\{brand\}/g, context.brand || "your AC")
         .replace(/\{acType\}/g, context.acType || "your AC");
    a = a.replace(/\{service\}/g, context.service || "AC service")
         .replace(/\{area\}/g, context.area || "Vadodara")
         .replace(/\{brand\}/g, context.brand || "your AC")
         .replace(/\{acType\}/g, context.acType || "your AC");
    
    if (!used.has(q)) {
      used.add(q);
      faqs.push({ question: q, answer: a });
    }
  };
  
  // Add FAQs based on page type
  if (pageType === "service-repair") {
    serviceTemplates.repair.slice(0, 10).forEach(f => addFaq(f.q, f.a));
  } else if (pageType === "service-installation") {
    serviceTemplates.installation.slice(0, 10).forEach(f => addFaq(f.q, f.a));
  } else if (pageType === "service-service") {
    serviceTemplates.service.slice(0, 10).forEach(f => addFaq(f.q, f.a));
  } else if (pageType === "area") {
    areaTemplates.slice(0, 10).forEach(f => addFaq(f.q, f.a));
  } else if (pageType === "brand") {
    brandTemplates.slice(0, 10).forEach(f => addFaq(f.q, f.a));
  } else if (pageType === "industrial") {
    industrialTemplates.slice(0, 10).forEach(f => addFaq(f.q, f.a));
  } else if (pageType === "ac-type" && context.acType) {
    const key = context.acType.toLowerCase() as keyof typeof acTypeTemplates;
    if (acTypeTemplates[key]) {
      acTypeTemplates[key].slice(0, 5).forEach(f => addFaq(f.q, f.a));
    }
    // Fill remaining from service templates
    serviceTemplates.service.slice(0, 10 - faqs.length).forEach(f => addFaq(f.q, f.a));
  } else {
    // Default: mix of service FAQs
    serviceTemplates.service.slice(0, 5).forEach(f => addFaq(f.q, f.a));
    serviceTemplates.repair.slice(0, 5).forEach(f => addFaq(f.q, f.a));
  }
  
  return faqs.slice(0, 10);
}

// Export templates for external use
export const faqTemplates = {
  service: serviceTemplates,
  area: areaTemplates,
  brand: brandTemplates,
  acType: acTypeTemplates,
  industrial: industrialTemplates,
};
