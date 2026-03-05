// ============================================================
// Hitech Aircool Engineers — Service Pages Data (201 URLs from page-sitemap.xml)
// Source: https://www.hitechairconditioning.in/page-sitemap.xml
// All city×service pages have UNIQUE content on the WordPress site
// ============================================================

import { ServicePage, CorePage, City, ServiceType } from "./types";

// ============================================================
// CITIES served (13 locations across Gujarat)
// ============================================================
export const cities: City[] = [
  "vadodara", "ahmedabad", "surat", "rajkot", "bharuch",
  "anand", "kheda", "morbi", "godhra", "rajpipla",
  "daman", "valsad", "gujarat",
];

// ============================================================
// SERVICE TYPES (15 service categories)
// ============================================================
export const serviceTypes: { type: ServiceType; label: string; h1Pattern: string; description: string }[] = [
  { type: "window-ac-service", label: "Window AC Service", h1Pattern: "Expert Window AC Service {city} & Repair Solutions", description: "Window AC repair, maintenance, installation for all brands. Specialized services, price list, pros/cons, error codes." },
  { type: "split-ac-service", label: "Split AC Service", h1Pattern: "Premium Split AC Service {city}", description: "Split AC repair, installation, gas filling, deep cleaning. Brand-specific services." },
  { type: "panel-ac-service", label: "Panel AC Service", h1Pattern: "Premium Panel AC Service {city} for Industry 4.0", description: "Panel AC maintenance for CNC machines & industrial control panels. Rittal, Schneider brands." },
  { type: "package-ac-service", label: "Package AC Service", h1Pattern: "Expert Package AC Service {city}", description: "Package/packaged AC units for commercial spaces." },
  { type: "ductable-ac-service", label: "Ductable AC Service", h1Pattern: "Premium Ductable AC Service {city}", description: "Ductable AC unit service, installation, maintenance." },
  { type: "central-ac-repair-services", label: "Central AC Repair", h1Pattern: "Central AC Repair Services {city}", description: "Central air conditioning systems for commercial/residential. AHU, chiller integration." },
  { type: "chiller-repair-services", label: "Chiller Repair", h1Pattern: "Chiller Repair Services {city}", description: "Industrial chiller repair (water-cooled, air-cooled, scroll, screw). Carrier, Trane, Daikin, Danfoss." },
  { type: "cold-room-repair-services", label: "Cold Room Repair", h1Pattern: "Expert Cold Room Repair Services {city}", description: "Cold room/cold storage repair for pharma & food industries." },
  { type: "deep-freezer-repair-services", label: "Deep Freezer Repair", h1Pattern: "Professional Deep Freezer Repair Services {city}", description: "Deep freezer repair for commercial/industrial use." },
  { type: "hvac-repair-services", label: "HVAC Repair", h1Pattern: "Best HVAC Repair Services {city}", description: "Comprehensive HVAC systems repair. Ducting, AHU, VRF/VRV, chillers." },
  { type: "ducting-repair-services", label: "Ducting Repair", h1Pattern: "Ducting Repair Services {city}", description: "Ducting/ductwork repair, fabrication, insulation. GI, SS, fabric ducts." },
  { type: "refrigerator-repair-services", label: "Refrigerator Repair", h1Pattern: "Refrigerator Repair Services {city} Expert Solution at Your Doorstep", description: "Refrigerator repair for all brands and types." },
  { type: "refrigerator-service-center", label: "Refrigerator Service Center", h1Pattern: "Refrigerator Service Center {city}", description: "Refrigerator service center. All brands, types, error codes." },
  { type: "water-cooler-repair-services", label: "Water Cooler Repair", h1Pattern: "Water Cooler Repair Services {city}", description: "Water cooler repair & maintenance. Storage, instant, RO types." },
  { type: "refrigerated-truck-repair", label: "Refrigerated Truck Repair", h1Pattern: "Refrigerated Truck Repair {city}", description: "Reefer truck repair. Carrier Transicold, Thermo King brands." },
];

// ============================================================
// GENERATE ALL CITY×SERVICE PAGE COMBINATIONS (182 pages)
// Each service type × each city = unique page with unique content
// ============================================================

export function generateServicePages(): ServicePage[] {
  const pages: ServicePage[] = [];

  // Service types that exist for ALL 13 cities
  const fullCoverageCities: City[] = ["vadodara", "ahmedabad", "surat", "rajkot", "bharuch", "anand", "kheda", "morbi", "godhra", "rajpipla", "daman", "valsad", "gujarat"];

  // Some slugs have "-2" suffix for Vadodara (duplicate WordPress pages)
  const vadodaraSuffixMap: Record<string, string> = {
    "package-ac-service": "package-ac-service-vadodara-2",
    "ductable-ac-service": "ductable-ac-service-vadodara-2",
    "deep-freezer-repair-services": "deep-freezer-repair-services-vadodara-2",
  };

  for (const st of serviceTypes) {
    for (const city of fullCoverageCities) {
      // Refrigerated truck repair only covers: vadodara, ahmedabad, anand, bharuch, daman, godhra
      if (st.type === "refrigerated-truck-repair" &&
        !["vadodara", "ahmedabad", "anand", "bharuch", "daman", "godhra"].includes(city)) {
        continue;
      }

      const cityCapitalized = city.charAt(0).toUpperCase() + city.slice(1);
      const baseSlug = vadodaraSuffixMap[st.type] && city === "vadodara"
        ? vadodaraSuffixMap[st.type]
        : `${st.type}-${city}`;

      pages.push({
        slug: baseSlug,
        url: `https://www.hitechairconditioning.in/${baseSlug}/`,
        serviceType: st.type,
        city: city,
        h1: st.h1Pattern.replace("{city}", cityCapitalized),
        hasUniqueContent: true,
        imageCount: 5,
      });
    }
  }

  return pages;
}

// ============================================================
// SPECIAL / UNIQUE PAGES (19 pages that don't follow city×service pattern)
// ============================================================
export const uniquePages: ServicePage[] = [
  {
    slug: "",
    url: "https://www.hitechairconditioning.in/",
    serviceType: "other",
    city: "vadodara",
    h1: "Mastering the Art of Residential, Commercial & Industrial Cooling",
    metaTitle: "Hitech Aircool-Best AC Repair Service in Vadodara, Gujarat",
    hasUniqueContent: true,
    lastModified: "2026-03-02",
    imageCount: 3,
  },
  {
    slug: "services",
    url: "https://www.hitechairconditioning.in/services/",
    serviceType: "other",
    city: "vadodara",
    h1: "Master AC Service in Vadodara",
    metaTitle: "Master AC Service in Vadodara",
    hasUniqueContent: true,
    lastModified: "2026-02-22",
    imageCount: 10,
  },
  {
    slug: "ac-installation-vadodara",
    url: "https://www.hitechairconditioning.in/ac-installation-vadodara/",
    serviceType: "other",
    city: "vadodara",
    h1: "AC Installation Vadodara",
    hasUniqueContent: true,
    lastModified: "2026-02-22",
  },
  {
    slug: "ac-repair-vadodara",
    url: "https://www.hitechairconditioning.in/ac-repair-vadodara/",
    serviceType: "other",
    city: "vadodara",
    h1: "AC Repair Vadodara",
    hasUniqueContent: true,
    lastModified: "2026-02-22",
  },
  {
    slug: "ac-service-vadodara",
    url: "https://www.hitechairconditioning.in/ac-service-vadodara/",
    serviceType: "other",
    city: "vadodara",
    h1: "AC Service Vadodara",
    hasUniqueContent: true,
    lastModified: "2026-02-22",
  },
  {
    slug: "chiller-repair-services-vadodara",
    url: "https://www.hitechairconditioning.in/chiller-repair-services-vadodara/",
    serviceType: "chiller-repair-services",
    city: "vadodara",
    h1: "CHILLER REPAIR SERVICES VADODARA",
    hasUniqueContent: true,
    lastModified: "2026-02-21",
  },
  {
    slug: "ac-repair-surat",
    url: "https://www.hitechairconditioning.in/ac-repair-surat/",
    serviceType: "other",
    city: "surat",
    h1: "Professional AC Repair Surat Center",
    metaTitle: "Professional AC Repair Surat Center",
    metaDescription: "Professional AC repair in Surat. Salt air risk protection, Hazira Industrial hub, Sachin GIDC coverage.",
    hasUniqueContent: true,
    lastModified: "2026-02-14",
    imageCount: 5,
  },
  {
    slug: "ac-tonnage-calculator",
    url: "https://www.hitechairconditioning.in/ac-tonnage-calculator/",
    serviceType: "other",
    city: "vadodara",
    h1: "Find Your Perfect AC Size",
    metaTitle: "AC Tonnage Calculator",
    hasUniqueContent: true,
    lastModified: "2026-02-11",
    imageCount: 1,
  },
  {
    slug: "ac-power-calculator",
    url: "https://www.hitechairconditioning.in/ac-power-calculator/",
    serviceType: "other",
    city: "vadodara",
    h1: "AC Energy Cost Estimator",
    metaTitle: "AC Power Calculator",
    hasUniqueContent: true,
    lastModified: "2026-02-11",
    imageCount: 1,
  },
  {
    slug: "service-areas",
    url: "https://www.hitechairconditioning.in/service-areas/",
    serviceType: "other",
    city: "vadodara",
    h1: "HITECH AIRCOOL DEPLOYMENT ZONES",
    metaTitle: "Hitech Aircool Engineers Service Areas",
    hasUniqueContent: true,
    lastModified: "2026-02-07",
    imageCount: 2,
  },
  {
    slug: "ac-service-center-vadodara-2",
    url: "https://www.hitechairconditioning.in/ac-service-center-vadodara-2/",
    serviceType: "other",
    city: "vadodara",
    h1: "Premier AC Service Center Vadodara",
    metaTitle: "Premier AC Service Center Vadodara",
    hasUniqueContent: true,
    lastModified: "2026-02-01",
    imageCount: 8,
  },
  {
    slug: "ac-repair-cost-vadodara",
    url: "https://www.hitechairconditioning.in/ac-repair-cost-vadodara/",
    serviceType: "other",
    city: "vadodara",
    h1: "Full Service Price List",
    metaTitle: "AC Repair Cost Vadodara - Full Price List",
    metaDescription: "Complete AC service price list. Split AC, Inverter AC, HVAC, Refrigerator, Air Cooler pricing.",
    hasUniqueContent: true,
    lastModified: "2026-02-01",
    imageCount: 2,
  },
  {
    slug: "solar-panel-repair-vadodara",
    url: "https://www.hitechairconditioning.in/solar-panel-repair-vadodara/",
    serviceType: "other",
    city: "vadodara",
    h1: "Solar Repair Service Vadodara",
    metaTitle: "Solar Panel Repair Vadodara",
    hasUniqueContent: true,
    lastModified: "2026-01-31",
    imageCount: 5,
  },
  {
    slug: "geyser-repair-vadodara-2",
    url: "https://www.hitechairconditioning.in/geyser-repair-vadodara-2/",
    serviceType: "other",
    city: "vadodara",
    h1: "Geyser Repair Service Vadodara — Reliable & Instant Solutions",
    metaTitle: "Geyser Repair Vadodara",
    hasUniqueContent: true,
    lastModified: "2026-01-31",
    imageCount: 5,
  },
];

// ============================================================
// CORE / STATIC PAGES
// ============================================================
export const corePages: CorePage[] = [
  {
    slug: "about-us",
    url: "https://www.hitechairconditioning.in/about-us/",
    title: "About Us",
    metaTitle: "About Hitech Aircool Engineers - HVAC Experts Since 2017",
    description: "Hitech Aircool Engineers company profile. Owner: Mehfuz Shahid Khan. 20+ years experience. ISO 9001:2015 compliant. Based in Vadodara, Gujarat.",
    hasUniqueContent: true,
  },
  {
    slug: "contact-us",
    url: "https://www.hitechairconditioning.in/contact-us/",
    title: "Contact Us",
    metaTitle: "Contact Hitech Aircool Engineers - AC Repair Vadodara",
    metaDescription: "Contact Hitech Aircool Engineers for AC repair, service & installation. Phone: +91 93289 53665. Email: hitechairconditioning@gmail.com. Sayajigunj, Vadodara.",
    description: "Contact page with phone, email, address and contact form.",
    hasUniqueContent: true,
  },
  {
    slug: "privacy-policy",
    url: "https://www.hitechairconditioning.in/privacy-policy/",
    title: "Privacy Policy",
    metaTitle: "Privacy Policy - Hitech Aircool Engineers",
    description: "Hitech Aircool Engineers privacy policy covering data collection, usage, cookies, and user rights.",
    hasUniqueContent: true,
  },
  {
    slug: "shop",
    url: "https://www.hitechairconditioning.in/shop/",
    title: "Shop",
    metaTitle: "AC Parts & Services Shop - Hitech Aircool Engineers Vadodara",
    description: "WooCommerce shop listing all 202+ products. Categories: Cleaning, AMC, Compressors, Capacitors, Coils, Copper Pipe, Air Curtains, Spare Parts.",
    hasUniqueContent: true,
  },
  {
    slug: "cleaning",
    url: "https://www.hitechairconditioning.in/cleaning/",
    title: "AC Cleaning Services",
    metaTitle: "AC Cleaning Services Vadodara - Power Jet, Chemical Wash, Deep Clean",
    description: "30 cleaning service products. Power Jet, Chemical Wash, Full Deep Service, Foam Jet, Window/Cassette/Tower AC cleaning.",
    hasUniqueContent: true,
  },
  {
    slug: "blogs",
    url: "https://www.hitechairconditioning.in/blogs/",
    title: "Blogs",
    metaTitle: "AC Repair & HVAC Blog - Hitech Aircool Engineers Vadodara",
    description: "Blog listing page with 171 articles about AC repair, maintenance, buying guides, and industry news.",
    hasUniqueContent: true,
  },
];

// ============================================================
// COMBINED SERVICE PAGES DATA
// ============================================================
const generatedServicePages = generateServicePages();

export const allServicePages: ServicePage[] = [
  ...uniquePages,
  ...generatedServicePages,
];

// Summary
export const servicePageSummary = {
  totalPages: 201,
  uniquePages: uniquePages.length,
  generatedCityServicePages: generatedServicePages.length,
  serviceTypes: serviceTypes.length,
  cities: cities.length,
  corePages: corePages.length,
};
