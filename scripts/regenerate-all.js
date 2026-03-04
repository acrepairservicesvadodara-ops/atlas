#!/usr/bin/env node
/**
 * Atlas Aircon — MEGA Regeneration Script
 * Overwrites ALL generic placeholder pages with RICH, SEO-optimized content
 * matching the original atlasaircons.com page structure and content style.
 *
 * Categories handled:
 *   1. Product/parts pages (hitech-aircool-engineers) — shop products with price, description, SKU
 *   2. 24x7 Emergency service pages — service products with booking CTA
 *   3. Blog/article pages — full article content with tips
 *   4. Wiki/guide pages — technical educational guides
 *   5. AC repair by city — city-level repair service landing
 *   6. AC service by city — city-level service landing
 *   7. Brand repair pages — brand-specific repair pages (non-service-center)
 *   8. Equipment-type service by city (cassette, ductable, central, split, window, panel, package)
 *   9. Refrigerator service/repair by city
 *  10. Chiller repair by city
 *  11. Cold room repair by city
 *  12. Air cooler repair by city
 *  13. Water cooler repair by city
 *  14. HVAC repair by city
 *  15. Ducting repair by city
 *  16. Deep freezer repair by city
 *  17. AHU services by city
 *  18. Refrigerated truck repair by city
 *  19. Washing machine repair pages
 *  20. Compressor model pages (Danfoss, Emerson, etc.)
 *  21. AMC/cleaning/deep-cleaning service pages
 *  22. Static pages (about, contact, privacy, etc.)
 *  23. Specific repair services (pcb, compressor, condenser, etc.)
 *  24. HVAC work/project case study pages
 *  25. Copper pipe variant pages
 *  26. Capacitor variant pages
 *  27. Air curtain/filter/misc product pages
 *  28. Remaining generic catch-all with rich content
 */

const fs = require("fs");
const path = require("path");

const APP_DIR = path.join(__dirname, "..", "app");
const PHONE = "+91 97272 57141";
const WA = "https://wa.me/919727257141";

// ─── HELPERS ───────────────────────────────────────────────────
function titleCase(s) {
  return s.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())
    .replace(/\bAc\b/g, "AC").replace(/\bHvac\b/g, "HVAC").replace(/\bPcb\b/g, "PCB")
    .replace(/\bAmc\b/g, "AMC").replace(/\bGidc\b/g, "GIDC").replace(/\bVrf\b/g, "VRF")
    .replace(/\bVrv\b/g, "VRV").replace(/\bLg\b/g, "LG").replace(/\bAhu\b/g, "AHU")
    .replace(/\bAhus\b/g, "AHUs").replace(/\bSs\b/g, "SS").replace(/\bDx\b/g, "DX")
    .replace(/\bGi\b/g, "GI").replace(/\bPuf\b/g, "PUF").replace(/\bPvc\b/g, "PVC")
    .replace(/\bMfd\b/g, "MFD").replace(/\bMcb\b/g, "MCB").replace(/\bRtu\b/g, "RTU")
    .replace(/\bId\b/g, "ID").replace(/\bOd\b/g, "OD").replace(/\bSwg\b/g, "SWG")
    .replace(/\bUlpa\b/g, "ULPA").replace(/\bHepa\b/g, "HEPA").replace(/\bIso\b/g, "ISO")
    .replace(/\bIpm\b/g, "IPM").replace(/\bPlc\b/g, "PLC").replace(/\bSku\b/g, "SKU")
    .replace(/\bHp\b/g, "HP").replace(/\bTr\b/g, "TR").replace(/\bRtus\b/g, "RTUs")
    .replace(/\bUpi\b/g, "UPI");
}

const cities = [
  "vadodara","ahmedabad","surat","rajkot","bharuch","anand","kheda","morbi",
  "godhra","rajpipla","daman","valsad","gujarat","vapi"
];

function slugToCity(slug) {
  for (const c of cities) {
    if (slug.endsWith("-" + c) || slug.endsWith("-" + c + "-2")) return titleCase(c);
  }
  return "Vadodara";
}

function safeComponentName(s) {
  return s.replace(/[^a-zA-Z0-9]/g, "");
}

const allBrands = ["Blue Star","Voltas","Daikin","LG","Samsung","Carrier","Hitachi","Lloyd","Godrej","Panasonic","Haier","Whirlpool","O General","Toshiba","Mitsubishi","York","Onida"];

const vadodaraAreas = [
  "Alkapuri","Akota","Sayajigunj","Raopura","Mandvi","Pratapgunj","Fatehgunj","Nizampura",
  "Chhani","Sama","Karelibaug","Warasiya","Harni","Ajwa Road","Tarsali","Makarpura",
  "Maneja","Manjalpur","Bhayli","Gotri","Subhanpura","Ellora Park","Race Course","Gorwa",
  "Waghodia Road","Tandalja","Old Padra Road","Diwalipura","Vasna Road","Atladara","Nandesari","Kalali"
];

const gidcZones = ["Makarpura GIDC","Nandesari GIDC","Savli GIDC","Halol GIDC","Waghodia GIDC","Por GIDC","Manjusar GIDC","Ranoli GIDC"];

const areaLinks = vadodaraAreas.slice(0,20).map(a => ({ name: a, href: "/ac-service-in-" + a.toLowerCase().replace(/\s+/g, "-") }));
const areaLinksJSON = JSON.stringify(areaLinks);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TEMPLATE: Product / Parts Page (hitech-aircool-engineers)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function generateProductPage(slug) {
  const rawTitle = titleCase(slug.replace(/-hitech-aircool-engineers$/, "").replace(/[-\/]/g, " "));
  const title = rawTitle + " | Hitech Aircool Engineers";

  // Determine product category and generate appropriate description
  let category = "HVAC Parts";
  let description = "";
  let price = "Contact for Price";
  let sku = "HAE-" + slug.slice(0,6).replace(/-/g,"").toUpperCase();

  if (slug.includes("capacitor")) {
    category = "Capacitors";
    const mfdMatch = slug.match(/(\d+[\-_]?\d*)\-?mfd/);
    const mfd = mfdMatch ? mfdMatch[1].replace("-","."): "";
    description = `High-quality ${mfd ? mfd + " MFD " : ""}capacitor for AC compressor and fan motor applications. Suitable for start and run circuits in residential and commercial air conditioning systems. Rated for continuous duty cycle with high insulation resistance. Compatible with all major AC brands including Voltas, LG, Samsung, Daikin, Carrier, and Blue Star.`;
    price = mfd && parseInt(mfd) > 50 ? "\\u20B9650" : mfd && parseInt(mfd) > 20 ? "\\u20B9430" : "\\u20B9280";
  } else if (slug.includes("copper-pipe")) {
    category = "Copper Pipes";
    const sizeMatch = slug.match(/(\d[\-\/]\d[^\-]*)/);
    const size = sizeMatch ? sizeMatch[1].replace(/-/g, "/") : "";
    description = `Premium-grade ${size ? size + ' inch ' : ''}copper refrigeration tubing for HVAC systems. Available in soft coil and hard-drawn straight lengths. Suitable for refrigerant lines (R-410A, R-32, R-22), water lines, and medical gas systems. Features high thermal conductivity, corrosion resistance, and easy brazing/soldering compatibility. Meets IS 1545 / ASTM B280 standards.`;
    price = "\\u20B92,700";
  } else if (slug.includes("compressor") && !slug.includes("repair")) {
    category = "Compressors";
    description = `Industrial-grade HVAC compressor for air conditioning and refrigeration applications. Suitable for split AC, packaged units, chillers, and cold room systems. Features high efficiency, low noise operation, and long service life. Available in hermetic, semi-hermetic, and scroll configurations from brands like Danfoss, Emerson (Copeland), Bitzer, and Tecumseh.`;
    price = "\\u20B913,500";
  } else if (slug.includes("filter")) {
    category = "Filters";
    description = `Professional-grade air filter for HVAC and air conditioning systems. Designed to capture dust, pollen, mold spores, and other airborne contaminants. Available in multiple sizes and filtration ratings. Essential for maintaining indoor air quality and protecting AC coils from clogging. Regular replacement improves cooling efficiency and reduces energy consumption.`;
    price = "\\u20B91,200";
  } else if (slug.includes("air-curtain")) {
    category = "Air Curtains";
    description = `High-performance air curtain for commercial and industrial applications. Creates an invisible barrier of air that separates indoor and outdoor environments while allowing free movement of people and vehicles. Prevents dust, insects, and outside air from entering conditioned spaces. Available in heated, unheated, and recirculating configurations for pedestrian entrances, loading docks, and cold storage facilities.`;
    price = "\\u20B98,999";
  } else if (slug.includes("fan") || slug.includes("blower")) {
    category = "Fans & Blowers";
    description = `Industrial-quality fan/blower assembly for HVAC applications. Designed for consistent airflow delivery in air handling units, condensers, evaporators, and ventilation systems. Features balanced impeller design, sealed bearings, and thermal overload protection. Available in axial, centrifugal, and mixed-flow configurations to match your specific airflow and static pressure requirements.`;
    price = "\\u20B93,500";
  } else if (slug.includes("coil") || slug.includes("condenser") || slug.includes("evaporator")) {
    category = "Coils & Heat Exchangers";
    description = `Precision-manufactured heat exchanger coil for HVAC and refrigeration systems. Features copper tubes with aluminum or copper fins for maximum heat transfer efficiency. Available in DX evaporator, condenser, chilled water, and hot water configurations. Custom sizes available to match your specific application requirements. All coils are factory leak-tested and ready for installation.`;
    price = "\\u20B96,500";
  } else if (slug.includes("valve") || slug.includes("gasket") || slug.includes("thermostat") || slug.includes("timer")) {
    category = "Controls & Valves";
    description = `Precision control component for HVAC and refrigeration systems. Engineered for reliable operation in demanding environments. Compatible with all major AC and refrigeration brands. Designed to maintain optimal system performance, prevent equipment damage, and ensure consistent temperature control.`;
    price = "\\u20B91,800";
  } else if (slug.includes("remote")) {
    category = "Remotes & Controls";
    description = `Universal/brand-specific AC remote control compatible with major air conditioner brands. Features LCD display, timer function, sleep mode, fan speed control, and swing direction adjustment. Easy to pair with your existing AC unit. Perfect replacement for lost or damaged remotes.`;
    price = "\\u20B9499";
  } else if (slug.includes("ducting") || slug.includes("duct") || slug.includes("diffuser") || slug.includes("grill")) {
    category = "Ducting & Accessories";
    description = `Professional-grade ducting component for HVAC air distribution systems. Manufactured from galvanized iron (GI) or insulated material for minimal air leakage and thermal loss. Suitable for commercial buildings, industrial facilities, and residential ducted systems. Available in standard and custom sizes.`;
    price = "\\u20B92,200";
  } else if (slug.includes("canvas")) {
    category = "Canvas Connectors";
    description = `Flexible canvas connector for HVAC ducting systems. Provides vibration isolation between the AHU/fan unit and rigid ductwork. Available in standard neoprene-coated, PVC-coated outdoor-rated, and high-temperature silicone-coated versions. Essential for preventing noise transmission and compensating for thermal expansion in duct runs.`;
    price = "\\u20B91,500";
  } else if (slug.includes("mounting") || slug.includes("bracket") || slug.includes("stand") || slug.includes("pad")) {
    category = "Mounting & Supports";
    description = `Heavy-duty mounting hardware for HVAC equipment installation. Designed to handle the weight and vibration of air conditioning units, condensers, and compressors. Features corrosion-resistant coating for long outdoor life. Available in various sizes and weight ratings to match your equipment specifications.`;
    price = "\\u20B91,200";
  } else if (slug.includes("refrigerant") || slug.includes("gas")) {
    category = "Refrigerants";
    description = `Genuine refrigerant gas for air conditioning and refrigeration systems. Available in R-22, R-32, R-410A, R-134a, and R-404A grades. All cylinders are factory-sealed with proper labeling and safety data. Essential for system charging, top-up, and leak repair applications. Only sold to certified HVAC technicians.`;
    price = "\\u20B94,500";
  } else if (slug.includes("oil")) {
    category = "Lubricants";
    description = `Premium compressor oil formulated for HVAC and refrigeration compressors. Provides optimal lubrication, reduces wear, and ensures long compressor life. Compatible with HFC and HCFC refrigerants. Available in POE (Polyolester) and mineral oil grades for different compressor types.`;
    price = "\\u20B91,800";
  } else if (slug.includes("water-pump")) {
    category = "Pumps";
    description = `Energy-efficient water pump designed for HVAC cooling systems, air coolers, and chilled water applications. Features copper winding motor, thermal overload protection, and corrosion-resistant impeller. Quiet operation suitable for residential and commercial installations.`;
    price = "\\u20B91,200";
  } else if (slug.includes("panel") && slug.includes("puf")) {
    category = "Insulation Panels";
    description = `Pre-fabricated PUF (Polyurethane Foam) insulation panel for cold room, walk-in cooler, and freezer construction. Features high-density foam core sandwiched between metal facings for excellent thermal insulation. Available in various thicknesses (50mm to 200mm) and standard/custom panel sizes. Cam-lock assembly system for easy installation.`;
    price = "\\u20B93,500";
  } else {
    description = `Professional-grade HVAC component available from Atlas Aircon / Hitech Aircool Engineers. This product is sourced from trusted manufacturers and is suitable for air conditioning, refrigeration, and ventilation applications across residential, commercial, and industrial settings. We supply genuine parts with GST invoice and delivery across Gujarat including all GIDC zones.`;
    price = "\\u20B9Contact Us";
  }

  return `import { Metadata } from "next";
import Link from "next/link";
import { Phone, ShoppingCart, Truck, FileText, Shield, Star, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "${title} | Buy Online | Atlas Aircon Gujarat",
  description: "${description.slice(0, 155)}",
  keywords: ["${rawTitle.toLowerCase()}", "hitech aircool engineers", "hvac parts vadodara", "ac spare parts gujarat", "${category.toLowerCase()}"],
  alternates: { canonical: "https://atlasaircons.com/${slug}" },
  openGraph: { title: "${title}", description: "${description.slice(0, 200)}", url: "https://atlasaircons.com/${slug}", type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "${rawTitle}",
  description: "${description.slice(0, 200)}",
  brand: { "@type": "Brand", name: "Hitech Aircool Engineers" },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "${price.replace(/[^0-9]/g, '') || '0'}",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Atlas Aircon" },
  },
  category: "${category}",
  sku: "${sku}",
};

export default function ${safeComponentName(rawTitle)}Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Product Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-12 h-12 text-blue-300" />
                </div>
                <p className="text-blue-200 text-sm">Product Image</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold">IN STOCK</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">${category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">${rawTitle}</h1>
              <div className="flex items-center gap-2 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                <span className="text-gray-300 text-sm ml-2">(35+ reviews)</span>
              </div>
              <p className="text-3xl font-bold text-yellow-400 mb-6">${price}</p>
              <p className="text-gray-300 mb-6 leading-relaxed">${description.slice(0, 250)}</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a href="tel:+919727257141" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition">
                  <Phone className="w-5 h-5" /> Order Now
                </a>
                <a href="${WA}?text=${encodeURIComponent("I want to order: " + rawTitle)}" className="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition">
                  WhatsApp Order
                </a>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-gray-300"><Truck className="w-4 h-4 text-blue-400" /> GIDC Delivery</div>
                <div className="flex items-center gap-1.5 text-gray-300"><FileText className="w-4 h-4 text-blue-400" /> GST Invoice</div>
                <div className="flex items-center gap-1.5 text-gray-300"><Shield className="w-4 h-4 text-blue-400" /> Genuine Parts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Product Description</h2>
            <div className="prose prose-lg text-gray-600">
              <p>${description}</p>
              <p>Atlas Aircon / Hitech Aircool Engineers is a trusted supplier of HVAC spare parts and components across Gujarat. We supply genuine, high-quality parts with proper documentation including GST invoice. Our inventory covers everything from capacitors and compressors to copper pipes, filters, and specialized coils. Fast delivery available to all GIDC industrial zones including Makarpura, Nandesari, Savli, Halol, and Manjusar.</p>
            </div>
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Product Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">SKU</span><span className="font-medium">${sku}</span></div>
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">Category</span><span className="font-medium">${category}</span></div>
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">Brand</span><span className="font-medium">Hitech Aircool Engineers</span></div>
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">Availability</span><span className="font-medium text-green-600">In Stock</span></div>
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">Delivery</span><span className="font-medium">All Gujarat &amp; GIDC Zones</span></div>
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">Invoice</span><span className="font-medium">GST Invoice Provided</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Why Buy From Atlas Aircon?</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, t: "100% Genuine", d: "All parts sourced directly from authorized distributors" },
              { icon: Truck, t: "Fast Delivery", d: "Same-day dispatch to Vadodara, next-day across Gujarat" },
              { icon: FileText, t: "GST Invoice", d: "Proper tax invoice with every order for business claims" },
              { icon: Star, t: "Expert Support", d: "Technical guidance from 20+ years experienced engineers" },
            ].map(item => (
              <div key={item.t} className="bg-white p-6 rounded-xl text-center border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">{item.t}</h3>
                <p className="text-gray-600 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Territory */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Service Territory</h2>
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto">We deliver across Gujarat. Major hubs: Vadodara, Ahmedabad, Surat, Bharuch, Anand, Rajkot, Gandhidham. GIDC zones: Makarpura, Nandesari, Savli, Dahej, Ankleshwar, Halol.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Vadodara","Ahmedabad","Surat","Bharuch","Anand","Rajkot","Godhra","Kheda","Morbi","Daman","Valsad"].map(c => (
              <span key={c} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need This Product?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Contact us for bulk orders, custom specifications, or technical queries. Our HVAC engineers are ready to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919727257141" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition">
              <Phone className="w-5 h-5" /> Call ${PHONE}
            </a>
            <a href="${WA}" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">
              WhatsApp Order
            </a>
          </div>
        </div>
      </section>

      {/* Browse More */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-6">Browse More</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/shop" className="bg-white text-blue-600 px-5 py-2.5 rounded-full border border-blue-200 hover:bg-blue-50 transition text-sm font-medium">All Products</Link>
            <Link href="/services" className="bg-white text-blue-600 px-5 py-2.5 rounded-full border border-blue-200 hover:bg-blue-50 transition text-sm font-medium">Our Services</Link>
            <Link href="/contact-us" className="bg-white text-blue-600 px-5 py-2.5 rounded-full border border-blue-200 hover:bg-blue-50 transition text-sm font-medium">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
`;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TEMPLATE: Equipment-Type Service by City
// Covers: cassette, ductable, central, split, window, panel, package AC
// Also: air-cooler-repair, refrigerator-(repair|service-center), chiller-repair,
//       cold-room-repair, water-cooler-repair, hvac-repair, ducting-repair,
//       deep-freezer-repair, air-handling-unit, refrigerated-truck-repair
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function generateEquipmentCityPage(slug) {
  const city = slugToCity(slug);
  const cityLower = city.toLowerCase();

  // Determine equipment type from slug
  let equipType = "AC";
  let equipFull = "Air Conditioner";
  let serviceType = "Repair & Service";
  let priceFrom = "\\u20B9499";
  let extraKeywords = "";

  if (slug.startsWith("cassette-ac")) { equipType = "Cassette AC"; equipFull = "Cassette Air Conditioner"; serviceType = "Installation & Repair"; priceFrom = "\\u20B9999"; }
  else if (slug.startsWith("ductable-ac")) { equipType = "Ductable AC"; equipFull = "Ductable Air Conditioner"; serviceType = "Installation & Repair"; priceFrom = "\\u20B91,500"; }
  else if (slug.startsWith("central-ac")) { equipType = "Central AC"; equipFull = "Central Air Conditioning"; serviceType = "Repair & Maintenance"; priceFrom = "\\u20B91,500"; }
  else if (slug.startsWith("split-ac")) { equipType = "Split AC"; equipFull = "Split Air Conditioner"; serviceType = "Service & Repair"; priceFrom = "\\u20B9499"; }
  else if (slug.startsWith("window-ac")) { equipType = "Window AC"; equipFull = "Window Air Conditioner"; serviceType = "Service & Repair"; priceFrom = "\\u20B9399"; }
  else if (slug.startsWith("panel-ac")) { equipType = "Panel AC"; equipFull = "Panel Air Conditioner / Control Cabinet Cooler"; serviceType = "Service & Maintenance"; priceFrom = "\\u20B91,299"; }
  else if (slug.startsWith("package-ac")) { equipType = "Package AC"; equipFull = "Packaged Air Conditioner"; serviceType = "Repair & Maintenance"; priceFrom = "\\u20B91,500"; }
  else if (slug.startsWith("air-cooler-repair")) { equipType = "Air Cooler"; equipFull = "Air Cooler"; serviceType = "Repair Service"; priceFrom = "\\u20B9199"; }
  else if (slug.startsWith("refrigerator-repair") || slug.startsWith("refrigerator-service")) { equipType = "Refrigerator"; equipFull = "Refrigerator / Fridge"; serviceType = "Repair & Service"; priceFrom = "\\u20B9249"; }
  else if (slug.startsWith("chiller-repair")) { equipType = "Chiller"; equipFull = "Industrial Chiller"; serviceType = "Repair & Overhaul"; priceFrom = "\\u20B93,000"; }
  else if (slug.startsWith("cold-room-repair")) { equipType = "Cold Room"; equipFull = "Cold Storage / Walk-in Cooler"; serviceType = "Repair & Maintenance"; priceFrom = "\\u20B92,500"; }
  else if (slug.startsWith("water-cooler-repair")) { equipType = "Water Cooler"; equipFull = "Water Cooler / Water Dispenser"; serviceType = "Repair Service"; priceFrom = "\\u20B9299"; }
  else if (slug.startsWith("hvac-repair")) { equipType = "HVAC"; equipFull = "HVAC System"; serviceType = "Repair & Maintenance"; priceFrom = "\\u20B91,799"; }
  else if (slug.startsWith("ducting-repair")) { equipType = "Ducting"; equipFull = "HVAC Duct System"; serviceType = "Repair & Fabrication"; priceFrom = "\\u20B91,500"; }
  else if (slug.startsWith("deep-freezer-repair")) { equipType = "Deep Freezer"; equipFull = "Deep Freezer / Commercial Freezer"; serviceType = "Repair Service"; priceFrom = "\\u20B9499"; }
  else if (slug.startsWith("air-handling-unit")) { equipType = "AHU"; equipFull = "Air Handling Unit (AHU)"; serviceType = "Service & Maintenance"; priceFrom = "\\u20B92,999"; }
  else if (slug.startsWith("refrigerated-truck")) { equipType = "Refrigerated Truck"; equipFull = "Refrigerated Truck / Reefer Vehicle"; serviceType = "Repair Service"; priceFrom = "\\u20B93,000"; }
  else if (slug.startsWith("ac-repair-") && !slug.includes("vadodara")) { equipType = "AC"; equipFull = "Air Conditioner"; serviceType = "Repair Service"; priceFrom = "\\u20B9299"; }
  else if (slug.startsWith("ac-service-") && !slug.includes("in-")) { equipType = "AC"; equipFull = "Air Conditioner"; serviceType = "Service & Maintenance"; priceFrom = "\\u20B9499"; }

  const compName = safeComponentName(equipType) + "Service" + safeComponentName(city);

  return `import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Star, Clock, Shield, Award, MapPin, ArrowRight, Wrench, Settings, Factory } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "${equipType} ${serviceType} in ${city} | Expert Technicians | Atlas Aircon",
  description: "Professional ${equipType.toLowerCase()} ${serviceType.toLowerCase()} in ${city}, Gujarat. Certified technicians, genuine parts, same-day service. 24/7 emergency support. Starting ${priceFrom}. Call ${PHONE}.",
  keywords: ["${equipType.toLowerCase()} ${serviceType.toLowerCase()} ${cityLower}", "${equipType.toLowerCase()} repair ${cityLower}", "${equipType.toLowerCase()} service ${cityLower}", "${equipType.toLowerCase()} maintenance ${cityLower}", "best ${equipType.toLowerCase()} service ${cityLower}"],
  alternates: { canonical: "https://atlasaircons.com/${slug}" },
  openGraph: { title: "${equipType} ${serviceType} ${city} | Atlas Aircon", description: "Expert ${equipType.toLowerCase()} ${serviceType.toLowerCase()} in ${city}. Same-day service, genuine parts, warranty.", url: "https://atlasaircons.com/${slug}", type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "${equipType} ${serviceType} ${city}",
  provider: { "@type": "LocalBusiness", name: "Atlas Aircon", telephone: "+919727257141", address: { "@type": "PostalAddress", addressLocality: "Vadodara", addressRegion: "Gujarat", postalCode: "390005", addressCountry: "IN" }, aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "5000" } },
  areaServed: { "@type": "City", name: "${city}" },
  serviceType: "${equipType} ${serviceType}",
  offers: { "@type": "AggregateOffer", lowPrice: "${priceFrom.replace(/[^0-9]/g,'')}", highPrice: "15000", priceCurrency: "INR" },
};

export default function ${compName}Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <MapPin className="w-4 h-4" /><span>${city}, Gujarat</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-yellow-400">${equipType} ${serviceType}</span> in ${city}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Looking for professional ${equipFull.toLowerCase()} ${serviceType.toLowerCase()} in ${city}? Atlas Aircon provides certified technicians, genuine spare parts, and same-day service for all ${equipType.toLowerCase()} brands and models. 24/7 emergency support available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:+919727257141" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"><Phone size={22} /> ${PHONE}</a>
                <a href="${WA}" className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition">WhatsApp Us</a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                {[{ l: "Certified Technicians" }, { l: "24/7 Emergency" }, { l: "Genuine Parts" }, { l: "4.9\\u2605 Rated" }].map(b => (
                  <div key={b.l} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span>{b.l}</span></div>
                ))}
              </div>
            </div>
            <div className="hidden md:block"><BookingForm title={"Book ${equipType} Service in ${city}"} /></div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6">Expert ${equipType} ${serviceType} in ${city}, Gujarat</h2>
            <p className="text-gray-600">${city} residents and businesses trust Atlas Aircon for professional ${equipFull.toLowerCase()} ${serviceType.toLowerCase()}. With over 20 years of hands-on HVAC experience, our factory-trained engineers handle everything from routine maintenance to complex overhauls. We service all major brands and models, ensuring your ${equipType.toLowerCase()} runs at peak efficiency throughout Gujarat&apos;s intense summer heat.</p>
            <p className="text-gray-600">What sets us apart in ${city} is our commitment to speed and transparency. Our technicians carry digital diagnostic tools and a full inventory of common spare parts in their service vehicles. This means most repairs are completed in a single visit — no waiting for parts, no return trips. We provide upfront quotes with no hidden charges, and every repair is backed by our service warranty.</p>
            <p className="text-gray-600">Whether you need emergency ${equipType.toLowerCase()} repair at midnight, a scheduled deep-cleaning service, or a complete new installation — Atlas Aircon delivers the same level of technical excellence across ${city} and all of Gujarat. Our industrial team also serves GIDC zones for factory and plant-level ${equipType.toLowerCase()} systems.</p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">${equipType} Service Price List — ${city}</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Transparent pricing. No hidden fees.</p>
          <div className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-blue-600 text-white"><tr><th className="text-left py-4 px-6">Service</th><th className="text-right py-4 px-6">Price</th></tr></thead>
              <tbody>
                {[
                  { s: "${equipType} Repair (Visit + Diagnosis)", p: "${priceFrom}" },
                  { s: "${equipType} Deep Cleaning / Jet Service", p: "From \\u20B9499" },
                  { s: "${equipType} Gas Refilling", p: "From \\u20B91,500" },
                  { s: "${equipType} Installation", p: "From \\u20B9799" },
                  { s: "${equipType} PCB / Board Repair", p: "From \\u20B91,200" },
                  { s: "${equipType} Compressor Repair", p: "From \\u20B93,500" },
                  { s: "${equipType} AMC (Annual Contract)", p: "Custom Quote" },
                ].map((row, i) => (
                  <tr key={row.s} className={\`border-b border-gray-200 \${i % 2 === 0 ? "bg-gray-50" : "bg-white"}\`}>
                    <td className="py-4 px-6 font-medium">{row.s}</td>
                    <td className="py-4 px-6 text-right font-semibold text-blue-600 whitespace-nowrap">{row.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why ${city} Trusts Atlas Aircon</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Award, t: "20+ Years Experience", d: "Gujarat\\u2019s most experienced HVAC team" },
              { icon: Clock, t: "Same-Day Service", d: "Fastest dispatch across ${city}" },
              { icon: Shield, t: "Service Warranty", d: "Every repair backed by warranty" },
              { icon: Star, t: "4.9/5 Rating", d: "5,000+ happy customers" },
            ].map(item => (
              <div key={item.t} className="text-center bg-gray-50 p-6 rounded-xl">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><item.icon className="w-8 h-8 text-blue-600" /></div>
                <h3 className="font-semibold mb-2">{item.t}</h3>
                <p className="text-gray-600 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Brands We Service in ${city}</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {${JSON.stringify(allBrands)}.map(b => (
              <span key={b} className="bg-white text-gray-700 px-5 py-3 rounded-full text-sm border border-gray-200 hover:bg-blue-50 transition">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">${equipType} Service FAQ — ${city}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How much does ${equipType.toLowerCase()} repair cost in ${city}?", a: "${equipType} repair starts at ${priceFrom} (visit charges). Final cost depends on the issue, model, and parts required. We provide upfront quotes before starting work." },
              { q: "Do you provide emergency ${equipType.toLowerCase()} repair in ${city}?", a: "Yes, Atlas Aircon provides 24/7 emergency ${equipType.toLowerCase()} repair across ${city}. Our technicians can reach you within 45-60 minutes." },
              { q: "Which ${equipType.toLowerCase()} brands do you service?", a: "We service all major brands including Voltas, LG, Samsung, Daikin, Hitachi, Blue Star, Carrier, O General, Lloyd, Panasonic, Haier, and more." },
              { q: "Do you offer AMC for ${equipType.toLowerCase()} in ${city}?", a: "Yes, we offer comprehensive Annual Maintenance Contracts with quarterly servicing, priority support, and discounted spare parts." },
              { q: "What warranty do you provide on repairs?", a: "All repairs come with our Atlas Aircon Service Guarantee — warranty on labor and replaced parts for your complete peace of mind." },
            ].map(faq => (
              <details key={faq.q} className="group bg-gray-50 rounded-xl border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 group-open:border-b group-open:border-gray-200">{faq.q}<ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" /></summary>
                <p className="p-6 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {${areaLinksJSON}.map(area => (
              <Link key={area.href} href={area.href} className="bg-white text-blue-700 px-4 py-2.5 rounded-full border border-blue-200 hover:bg-blue-50 transition text-sm font-medium">{area.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need ${equipType} ${serviceType} in ${city}?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Expert technicians, genuine parts, same-day service. Book now!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919727257141" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"><Phone size={22} /> Call ${PHONE}</a>
            <a href="${WA}" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">WhatsApp for Quote</a>
          </div>
        </div>
      </section>
    </>
  );
}
`;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TEMPLATE: Blog / Article / How-To Pages
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function generateBlogPage(slug) {
  const title = titleCase(slug.replace(/[-\/]/g, " "));
  const compName = safeComponentName(title);

  return `import { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, User, ArrowLeft, Share2, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "${title} | Atlas Aircon Blog",
  description: "${title} - Expert guide by Atlas Aircon. Professional HVAC insights, tips, and industry knowledge from Gujarat's leading AC service provider.",
  keywords: ["${title.toLowerCase()}", "ac tips", "hvac guide", "atlas aircon blog", "ac maintenance vadodara"],
  alternates: { canonical: "https://atlasaircons.com/${slug}" },
  openGraph: { title: "${title} | Atlas Aircon", description: "Expert HVAC guide by Atlas Aircon, Gujarat's #1 AC service provider.", url: "https://atlasaircons.com/${slug}", type: "article" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "${title}",
  author: { "@type": "Person", name: "Mehfuz Shahid Khan", jobTitle: "Director, Atlas Aircon" },
  publisher: { "@type": "Organization", name: "Atlas Aircon", url: "https://atlasaircons.com" },
  datePublished: "2025-06-15",
  dateModified: "2026-03-01",
  mainEntityOfPage: "https://atlasaircons.com/${slug}",
};

export default function ${compName}Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Article Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blogs" className="text-gray-400 hover:text-white text-sm flex items-center gap-1 mb-6 inline-flex"><ArrowLeft className="w-4 h-4" /> Back to Blog</Link>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">HVAC Guide</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">${title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2"><User className="w-4 h-4" /> Mehfuz Shahid Khan</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 5 Min Read</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Engineering Verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600 text-xl leading-relaxed">
              ${title} is an important topic for anyone who relies on air conditioning, refrigeration, or HVAC systems in their home, office, or industrial facility. At Atlas Aircon, we&apos;ve compiled our 20+ years of field experience into this comprehensive guide to help you make informed decisions and maintain your cooling equipment effectively.
            </p>

            <h2>Why This Matters</h2>
            <p className="text-gray-600">
              In Gujarat&apos;s extreme climate, your cooling system is not a luxury — it&apos;s essential infrastructure. Whether you are a homeowner in Vadodara, a factory manager in Makarpura GIDC, or a business owner in Ahmedabad, understanding your HVAC equipment helps you avoid costly breakdowns, reduce electricity bills, and extend equipment life. Regular maintenance alone can save 15-20% on your cooling costs.
            </p>

            <h2>Key Points to Remember</h2>
            <ul>
              <li><strong>Regular Service:</strong> Get your AC serviced at least twice a year — once before summer and once after the monsoon season. This prevents dust buildup, mold growth, and refrigerant issues.</li>
              <li><strong>Professional Help:</strong> While basic filter cleaning can be done at home, all electrical and refrigerant work should be handled by certified technicians. Improper handling can cause permanent damage or safety hazards.</li>
              <li><strong>Genuine Parts:</strong> Always insist on genuine OEM or equivalent-quality spare parts. Cheap components may save money upfront but lead to repeated breakdowns and higher long-term costs.</li>
              <li><strong>Energy Efficiency:</strong> A well-maintained system operates at its rated efficiency. Dirty coils, low gas, or blocked filters can increase power consumption by 20-40%.</li>
              <li><strong>Warranty Protection:</strong> Keep records of all service visits. Many manufacturers require proof of regular maintenance to honor warranty claims.</li>
            </ul>

            <h2>Atlas Aircon&apos;s Expert Recommendation</h2>
            <p className="text-gray-600">
              Based on our experience servicing thousands of units across Gujarat, we recommend a proactive approach to HVAC maintenance. Don&apos;t wait for a breakdown — schedule regular service visits and address small issues before they become expensive repairs. Our Annual Maintenance Contract (AMC) plans are designed specifically for this purpose, offering quarterly servicing, priority emergency support, and discounted parts.
            </p>

            <h2>Need Professional Help?</h2>
            <p className="text-gray-600">
              Atlas Aircon provides expert HVAC services across Vadodara, Ahmedabad, Surat, Bharuch, Anand, Rajkot, and all Gujarat GIDC zones. Our certified technicians are available 24/7 for emergency support. Call us at <a href="tel:+919727257141" className="text-blue-600 font-semibold">${PHONE}</a> or <a href="${WA}" className="text-green-600 font-semibold">WhatsApp us</a> for a quick quote.
            </p>
          </div>
        </div>
      </section>

      {/* Author Box */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Mehfuz Shahid Khan</h3>
              <p className="text-gray-500 text-sm mb-2">Director &amp; Lead HVAC Architect • Atlas Aircon</p>
              <p className="text-gray-600 text-sm">20+ years of hands-on experience in industrial cooling, chiller overhauls, and VRF installations across Gujarat&apos;s industrial zones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Expert HVAC Help?</h2>
          <p className="text-blue-100 mb-8">Our team is available 24/7 across Gujarat.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919727257141" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"><Phone size={22} /> Call ${PHONE}</a>
            <a href="${WA}" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
`;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TEMPLATE: Service/AMC/Cleaning/Maintenance Pages
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function generateServicePage(slug) {
  const title = titleCase(slug.replace(/[-\/]/g, " "));
  const compName = safeComponentName(title);

  // Determine if it's a cleaning, AMC, dismantling, or general service page
  let serviceCategory = "Service";
  if (slug.includes("chemical-wash") || slug.includes("deep-cleaning") || slug.includes("cleaning")) serviceCategory = "Cleaning";
  if (slug.includes("amc") || slug.includes("comprehensive") || slug.includes("non-comprehensive")) serviceCategory = "AMC";
  if (slug.includes("dismantling") || slug.includes("re-installation") || slug.includes("reinstall")) serviceCategory = "Dismantling & Reinstallation";

  return `import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Star, Shield, Award, Clock, ArrowRight, Wrench } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "${title} | Professional HVAC Service | Atlas Aircon",
  description: "${title} — Professional ${serviceCategory.toLowerCase()} service by Atlas Aircon. Certified technicians, genuine parts, warranty included. Serving Vadodara, Gujarat & all GIDC zones. Call ${PHONE}.",
  keywords: ["${title.toLowerCase()}", "${serviceCategory.toLowerCase()} service", "hvac service vadodara", "atlas aircon", "ac service gujarat"],
  alternates: { canonical: "https://atlasaircons.com/${slug}" },
  openGraph: { title: "${title} | Atlas Aircon", description: "Professional ${serviceCategory.toLowerCase()} service by Atlas Aircon Gujarat.", url: "https://atlasaircons.com/${slug}", type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "${title}",
  provider: { "@type": "LocalBusiness", name: "Atlas Aircon", telephone: "+919727257141" },
  areaServed: { "@type": "State", name: "Gujarat" },
  serviceType: "${title}",
};

export default function ${compName}Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <Wrench className="w-4 h-4" /><span>${serviceCategory}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">${title}</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Professional ${serviceCategory.toLowerCase()} service by Atlas Aircon / Hitech Aircool Engineers. Our certified technicians deliver expert ${serviceCategory.toLowerCase()} solutions for all HVAC, refrigeration, and cooling equipment. Available across Vadodara, Gujarat &amp; all GIDC industrial zones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:+919727257141" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"><Phone size={22} /> ${PHONE}</a>
                <a href="${WA}" className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition">WhatsApp Us</a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                {[{ l: "Certified Engineers" }, { l: "Genuine Parts" }, { l: "Service Warranty" }, { l: "24/7 Available" }].map(b => (
                  <div key={b.l} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span>{b.l}</span></div>
                ))}
              </div>
            </div>
            <div className="hidden md:block"><BookingForm title={"Book ${serviceCategory} Service"} /></div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6">About This Service</h2>
            <p className="text-gray-600">
              ${title} is one of the specialized services offered by Atlas Aircon / Hitech Aircool Engineers. With over 20 years of experience in the HVAC industry, we provide expert ${serviceCategory.toLowerCase()} solutions that extend equipment life, improve efficiency, and reduce operating costs. Our team serves residential, commercial, and industrial clients across Gujarat.
            </p>
            <p className="text-gray-600">
              Our certified technicians use professional-grade equipment and genuine parts for every job. Whether it&apos;s a routine ${serviceCategory.toLowerCase()} visit or an emergency call, we maintain the same high standards of quality and professionalism. All work is backed by our Atlas Aircon Service Guarantee for your complete peace of mind.
            </p>
            <p className="text-gray-600">
              We cover all equipment types including split ACs, window ACs, cassette units, ductable systems, VRF/VRV installations, chillers, cold rooms, panel ACs, AHUs, air coolers, refrigerators, washing machines, and more. Our industrial team specializes in GIDC factory environments where system uptime is critical.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">What&apos;s Included</h2>
            <ul>
              <li>Complete system inspection and diagnostic assessment</li>
              <li>Professional cleaning and maintenance as applicable</li>
              <li>Testing of all electrical components and safety circuits</li>
              <li>Performance optimization and efficiency tuning</li>
              <li>Detailed service report with recommendations</li>
              <li>Warranty documentation for all work performed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Atlas Aircon</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Award, t: "20+ Years Experience", d: "Gujarat\\u2019s most experienced HVAC team" },
              { icon: Clock, t: "Same-Day Service", d: "Fastest dispatch across Gujarat" },
              { icon: Shield, t: "Service Warranty", d: "Every job backed by warranty" },
              { icon: Star, t: "4.9/5 Rating", d: "5,000+ satisfied customers" },
            ].map(item => (
              <div key={item.t} className="text-center bg-white p-6 rounded-xl">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><item.icon className="w-8 h-8 text-blue-600" /></div>
                <h3 className="font-semibold mb-2">{item.t}</h3>
                <p className="text-gray-600 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Service Coverage</h2>
          <p className="text-gray-600 mb-6">Available across Gujarat: Vadodara, Ahmedabad, Surat, Bharuch, Anand, Rajkot, Godhra, Kheda, Morbi, Daman, Valsad. All GIDC zones covered.</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {${areaLinksJSON}.map(area => (
              <Link key={area.href} href={area.href} className="bg-gray-50 text-blue-700 px-4 py-2.5 rounded-full border border-blue-200 hover:bg-blue-50 transition text-sm font-medium">{area.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Book ${serviceCategory} Service Now</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Professional service, genuine parts, certified technicians. Contact us today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919727257141" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"><Phone size={22} /> Call ${PHONE}</a>
            <a href="${WA}" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
`;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TEMPLATE: Static / Utility Pages (about, contact, privacy, etc.)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function generateStaticPage(slug) {
  const title = titleCase(slug.replace(/[-\/]/g, " "));
  return `import { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Mail, Clock, CheckCircle, Star, Shield, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "${title} | Atlas Aircon - Gujarat's #1 HVAC Service Provider",
  description: "${title} - Atlas Aircon, Gujarat's leading HVAC and air conditioning service provider. Trusted since 2017. 24/7 emergency support. Call ${PHONE}.",
  alternates: { canonical: "https://atlasaircons.com/${slug}" },
  openGraph: { title: "${title} | Atlas Aircon", description: "${title} page for Atlas Aircon, Gujarat's #1 HVAC service.", url: "https://atlasaircons.com/${slug}", type: "website" },
};

export default function ${safeComponentName(title)}Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">${title}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Atlas Aircon — Gujarat&apos;s #1 authority for Industrial HVAC, Chiller Repair, AC Service &amp; GIDC Maintenance Projects. Trusted since 2017. 24/7 Emergency Support.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-blue-600" /> Headquarters</h3>
                <p className="text-gray-600">Sayajigunj, Vadodara<br />Gujarat – 390005, India</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Phone className="w-5 h-5 text-blue-600" /> Contact</h3>
                <p className="text-gray-600"><a href="tel:+919727257141" className="text-blue-600 font-semibold">${PHONE}</a><br /><a href="mailto:atlasaircon1@gmail.com" className="text-blue-600">atlasaircon1@gmail.com</a></p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>About Atlas Aircon</h2>
              <p className="text-gray-600">Atlas Aircon is Gujarat&apos;s leading HVAC and air conditioning service provider. Led by Mehfuz Shahid Khan with over 20 years of hands-on industrial cooling experience, we specialize in residential AC repair, commercial HVAC installations, industrial chiller overhauls, cold room construction, and VRF system deployment.</p>
              <p className="text-gray-600">Our service territory covers all major cities in Gujarat including Vadodara, Ahmedabad, Surat, Bharuch, Anand, Rajkot, Godhra, Kheda, Morbi, Daman, Valsad, and Gandhidham. We maintain strong presence in all GIDC industrial zones: Makarpura, Nandesari, Savli, Halol, Dahej, Ankleshwar, Manjusar, and more.</p>
              <p className="text-gray-600">Every service we deliver is backed by our Atlas Aircon Service Guarantee — warranty on labor and parts, transparent pricing with no hidden charges, and 24/7 emergency support. We use genuine OEM parts and maintain ISO-quality standards in all our operations.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Award, t: "20+ Years", d: "Industry Experience" },
                { icon: Star, t: "5,000+", d: "Happy Customers" },
                { icon: Shield, t: "ISO 9001", d: "Quality Standards" },
                { icon: Clock, t: "24/7", d: "Emergency Support" },
              ].map(item => (
                <div key={item.t} className="text-center bg-blue-50 p-6 rounded-xl">
                  <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-blue-600">{item.t}</p>
                  <p className="text-gray-600 text-sm">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919727257141" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"><Phone size={22} /> Call ${PHONE}</a>
            <a href="${WA}" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
`;
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// URL CATEGORIZATION ENGINE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function categorizeSlug(slug) {
  // Products (hitech-aircool-engineers suffix)
  if (slug.endsWith("-hitech-aircool-engineers")) return "product";

  // 24x7 Emergency pages (also products on original site)
  if (slug.startsWith("24x7-") && slug.includes("emergency")) return "product";

  // Equipment-type service pages by city
  if (/^(cassette|ductable|central|split|window|panel|package)-ac-(service|repair)/.test(slug)) return "equipment-city";

  // Repair by city (non-vadodara specific)
  if (/^ac-repair-(?!.*vadodara)/.test(slug) && !slug.includes("service") && !slug.includes("charges")) return "equipment-city";

  // AC service by city (NOT ac-service-in-*)
  if (/^ac-service-(?!in-)/.test(slug) && !slug.includes("charges") && !slug.includes("center") && !slug.includes("vadodara") && !slug.includes("near")) return "equipment-city";

  // Specific equipment repair by city
  if (/^(air-cooler-repair|refrigerator-repair|refrigerator-service-center|chiller-repair|cold-room-repair|water-cooler-repair|hvac-repair|ducting-repair|deep-freezer-repair|air-handling-unit|refrigerated-truck-repair)/.test(slug)) return "equipment-city";

  // Blog / article / how-to pages
  if (/^(how-to-|best-|most-|the-|advantages-|common-|guide|choose-|dont-|when-to-|top-\d|ai-|eco-|eesl-|new-|latest-|voice-|samsung-air|various-|willis-|who-invented|why-does|what-is|things-to|the-benefits|the-cost|the-growth|standard-ac|premier-|affordable|comprehensive-walk|cold-room-and)/.test(slug)) return "blog";

  // Service / AMC / Cleaning / Dismantling pages (hitech pattern but not product)
  if (/^(chemical-wash|deep-cleaning|comprehensive|dismantling|standard-cleaning|duct-cleaning|full-motor|motor-bearing|emergency-on-site|blower-motor-service|compressor-repair-hitech|advance-panel|foam-jet|power-jet|pressure-washer|professional-ac|professional-standard|installation-and-fitting|inverter-ac-service|ac-chemical|ac-cleaning-and|ac-compressor-repair|ac-cooling-coil|ac-fan-motor-sales|ac-swing-motor|ac-shifting|ac-copper-piping|ac-gas-refilling|gas-refilling|circuit-pcb|drain-pipe|dehumidifier|incubator|geyser|solar-panel|car-ac|portable-ac|portable-air|tower-ac|package-ac-repair|cassette-ac-repair-service|central-ac-installation|central-ac-maintenance|ductable-ac-installation|split-ac-installation|window-ac-installation|window-ac-repair-and|buy-sell|old-ac|second-hand|ac-on-rent|ac-tonnage|ac-power|annual-maintenance|ac-not-cooling$|ac-remote-control$|air-conditioner-maintenance$|air-conditioner-gas|air-conditioning-repair|home-appliance|symphony|front-load|fully-automatic|semi-automatic|top-load|washing-machine-repair)/.test(slug)) return "service";

  // HVAC work / project pages
  if (slug.startsWith("hvac-work/")) return "blog";

  // Wiki pages
  if (slug.startsWith("wiki/")) return "blog";

  // Static pages
  if (/^(about-us|contact-us|privacy-policy|return-policy|testimonials|gallery|franchise|register|my-account|cart|checkout|book-appointment|abp-bookings|service-areas|services$|shop$|blogs$|recent-projects|ac-technician-jobs|sitemap-xml|frequently-asked|fault-codes$|wiki$)/.test(slug)) return "static";

  // Brand repair pages (not service center, but brand-specific repair)
  if (/^(blue-star|voltas|daikin|lg|samsung|carrier|hitachi|godrej|onida|panasonic|haier|gree|whirlpool|lloyd|croma|cruise|amazon|electrolux|emerson|frigidaire|friin|highcool|himalaya|hi-sense|ifb|infocool|intec|kenstar|kelvinator|liebert|liugong|marq|national|o-general|paundit|re-connect|sanden|schneider|sharp|siemens|tcl|thermoelectric|trane|trotec|vestar|videocon|york|dimplex|coolair|cube)-ac-repair/.test(slug)) return "service";

  // Remaining service pages
  if (/^(trusted-ac|top-ac-service|top-ac-installation|most-searched|best-air|best-hvac|best-refrigerator|experienced-refrigerator|fast-refrigerator|top-refrigerator|fridge-repair|refrigerator-cooling|refrigerator-compressor|refrigerator-circuit|refrigerator-repair-cost|refrigerator-repair-in-vadodara|refrigerator-repairs|samsung-refrigerator|vadodara-ac|vadodaras-leading|inverter-air|air-conditioner-condenser|air-conditioner-copper|air-conditioner-service|air-dryer|water-chiller|water-cooler-repair-service-near|cold-room-repair-service|cold-room-repair-in|emergency-ac|emergency-ahu|ac-service-and-repair|ac-service-vadodara|ac-service-near|ac-repair-service|ac-repair-vadodara$|ac-fitting|ac-cleaning-services|ac-cleaning-charges|ac-installation-in-vadodara|split-window|oxygen-copper|pcb-repair|high-performance|successful-chiller|deep-cleaning-ac|hvac-contractors|hvac-ducting|panel-air|centrifugal-fan|panel-ac-centrifugal|rittal-panel|air-handling-unit-ahu|industrial-ac|ac-service-center-vadodara|ac-repair-cost|window-ac-repair-vadodara|buy-1-5-tr|ultimate-guide|top-7-superior|premium-ac|atlas-aircon-ac|atlas-aircons-high|atlas-aircons-honeycomb|atlas-aircon-hvac|washing-machine-repair-service|washing-machine-repair-vadodara|washing-machine-repair-in-vadodara)/.test(slug)) return "service";

  // Number-slug pages (252-2, 256-2, etc.)
  if (/^\d+(-\d+)?$/.test(slug)) return "static";

  // Remaining catch-all
  return "service";
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MAIN EXECUTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Read all URLs and compute ALL slugs (not just missing — we overwrite generics)
function getAllSlugs() {
  return fs.readFileSync(path.join(__dirname, "..", "atlasaircons-all-urls.txt"), "utf-8")
    .split(/\n/).map(u => u.trim()).filter(Boolean)
    .map(u => u.replace(/https?:\/\/(www\.)?atlasaircons\.com\//, ""))
    .map(u => u.replace(/\/+$/, ""))
    .filter(u => /^[a-z0-9\-\/_]+$/.test(u));
}

// Check if a page has the generic placeholder
function isGenericPlaceholder(slug) {
  const pagePath = path.join(APP_DIR, slug, "page.tsx");
  if (!fs.existsSync(pagePath)) return true; // doesn't exist yet
  const content = fs.readFileSync(pagePath, "utf-8");
  return content.includes("This is a content placeholder for");
}

// Exclude slugs that already have rich templates (area-service-in, brand-service-center, fault-codes, installation-city)
function hasRichTemplate(slug) {
  if (slug.startsWith("ac-service-in-")) return true;
  if (/-ac-service-center-/.test(slug)) return true;
  if (slug.startsWith("fault-codes/") && slug !== "fault-codes") return true;
  if (slug.startsWith("ac-installation-") && !slug.includes("vadodara") && !slug.includes("repair") && !slug.includes("charges") && !slug.includes("in-vadodara")) return true;
  return false;
}

let created = 0;
let skipped = 0;
const errors = [];

function writePageAsync(slug, content) {
  const dir = path.join(APP_DIR, slug);
  return fs.promises.mkdir(dir, { recursive: true })
    .then(() => fs.promises.writeFile(path.join(dir, "page.tsx"), content, "utf-8"))
    .then(() => { created++; })
    .catch(e => { errors.push({ slug, error: e.message }); });
}

(async () => {
  const allSlugs = getAllSlugs();
  console.log(`Total slugs from URL list: ${allSlugs.length}`);

  const tasks = [];
  const stats = { product: 0, "equipment-city": 0, blog: 0, service: 0, static: 0 };

  for (const slug of allSlugs) {
    // Skip slugs that already have rich templates from the original generator
    if (hasRichTemplate(slug)) {
      // But still check if it's a generic placeholder (shouldn't be, but just in case)
      if (!isGenericPlaceholder(slug)) {
        skipped++;
        continue;
      }
    }

    // Skip slugs where page.tsx exists and isn't a generic placeholder
    if (!isGenericPlaceholder(slug)) {
      skipped++;
      continue;
    }

    const category = categorizeSlug(slug);
    stats[category] = (stats[category] || 0) + 1;

    let content;
    switch (category) {
      case "product":
        content = generateProductPage(slug);
        break;
      case "equipment-city":
        content = generateEquipmentCityPage(slug);
        break;
      case "blog":
        content = generateBlogPage(slug);
        break;
      case "service":
        content = generateServicePage(slug);
        break;
      case "static":
        content = generateStaticPage(slug);
        break;
      default:
        content = generateServicePage(slug);
    }

    tasks.push(writePageAsync(slug, content));
  }

  await Promise.all(tasks);

  console.log(`\n✅ Regenerated ${created} pages with RICH content`);
  console.log(`⏭️  Skipped ${skipped} pages (already have rich templates)`);
  console.log(`\nBreakdown:`);
  for (const [cat, count] of Object.entries(stats)) {
    console.log(`  ${cat}: ${count}`);
  }
  if (errors.length) {
    console.log(`\n❌ Errors (${errors.length}):`);
    errors.slice(0, 10).forEach(e => console.log(`  ${e.slug}: ${e.error}`));
  }
})();
