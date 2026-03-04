#!/usr/bin/env node
/**
 * Atlas Aircon — Bulk Page Generator
 * Generates SEO-optimized Next.js pages from the missing URL slugs.
 * Each page type has a different rich template with:
 *   - JSON-LD structured data (Service, FAQPage, TechArticle)
 *   - OpenGraph & canonical meta
 *   - Extra SEO paragraphs, keyword density, internal links
 *   - Hero + BookingForm, pricing, FAQ, areas, CTA sections
 */

const fs = require("fs");
const path = require("path");

const APP_DIR = path.join(__dirname, "..", "app");

// ─── helpers ───────────────────────────────────────────────────────
function titleCase(s) {
  return s
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bAc\b/g, "AC")
    .replace(/\bHvac\b/g, "HVAC")
    .replace(/\bPcb\b/g, "PCB")
    .replace(/\bAmc\b/g, "AMC")
    .replace(/\bGidc\b/g, "GIDC")
    .replace(/\bVrf\b/g, "VRF")
    .replace(/\bVrv\b/g, "VRV")
    .replace(/\bLg\b/g, "LG")
    .replace(/\bPlc\b/g, "PLC")
    .replace(/\bAhu\b/g, "AHU");
}

function slugToCity(slug) {
  const cities = [
    "vadodara","ahmedabad","surat","rajkot","bharuch","anand",
    "kheda","morbi","godhra","rajpipla","daman","valsad","gujarat"
  ];
  for (const c of cities) {
    if (slug.endsWith("-" + c)) return titleCase(c);
  }
  return "Vadodara";
}

function brandFromSlug(slug) {
  const brands = {
    "blue-star": "Blue Star", "voltas": "Voltas", "daikin": "Daikin",
    "lg": "LG", "samsung": "Samsung", "carrier": "Carrier",
    "hitachi": "Hitachi", "lloyd": "Lloyd", "godrej": "Godrej",
    "panasonic": "Panasonic", "haier": "Haier", "whirlpool": "Whirlpool",
    "o-general": "O General", "toshiba": "Toshiba", "onida": "Onida",
    "mitsubishi": "Mitsubishi", "york": "York",
  };
  for (const [key, val] of Object.entries(brands)) {
    if (slug.startsWith(key)) return val;
  }
  return null;
}

// generic fallback page generator for any slug
function generateGenericPage(slug) {
  const title = titleCase(slug.replace(/[-\/]/g, " "));
  return `import { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "${title} | Atlas Aircon Vadodara",
  description: "${title} - professional HVAC service information by Atlas Aircon Vadodara.",
  keywords: ["${title.toLowerCase()}", "atlas aircon", "vadodara"],
  alternates: { canonical: "https://atlasaircons.com/${slug}" },
  openGraph: { title: "${title}", description: "Information page for ${title}.", url: "https://atlasaircons.com/${slug}", type: "website" },
};

export default function GenericPage() {
  return (
    <>
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">${title}</h1>
          <p className="text-gray-600 mb-8">
            This is a content placeholder for <strong>${title}</strong>. Our team will provide details shortly. For immediate assistance, call us.
          </p>
          <a href="tel:+919727257141" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold">
            <Phone className="w-5 h-5" /> +91 97272 57141
          </a>
        </div>
      </section>
    </>
  );
}
`;
}

function mkdir(dir) {
  // keep sync for directory creation since concurrency is small
  fs.mkdirSync(dir, { recursive: true });
}

const allBrands = [
  "Blue Star","Voltas","Daikin","LG","Samsung","Carrier",
  "Hitachi","Lloyd","Godrej","Panasonic","Haier","Whirlpool",
  "O General","Toshiba","Mitsubishi"
];

const vadodaraAreas = [
  "Alkapuri","Akota","Sayajigunj","Raopura","Mandvi","Pratapgunj",
  "Fatehgunj","Nizampura","Chhani","Sama","Karelibaug","Warasiya",
  "Harni","Ajwa Road","Tarsali","Makarpura","Maneja","Manjalpur",
  "Bhayli","Gotri","Subhanpura","Ellora Park","Race Course","Gorwa",
  "Waghodia Road","Tandalja","Old Padra Road","Diwalipura","Vasna Road",
  "Atladara","Nandesari","Kalali"
];

const gidcZones = [
  "Makarpura GIDC","Nandesari GIDC","Savli GIDC","Halol GIDC",
  "Waghodia GIDC","Por GIDC","Manjusar GIDC","Ranoli GIDC"
];

// ─── TEMPLATE 1: Area Service Pages (ac-service-in-XYZ) ─────────
function generateAreaServicePage(slug) {
  const areaName = titleCase(slug.replace("ac-service-in-", ""));
  return `import { Metadata } from "next";
import Link from "next/link";
import {
  Phone, CheckCircle, Star, Clock, Shield, Award, MapPin,
  ArrowRight, Wrench, ThermometerSnowflake, Settings, ThumbsUp,
} from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "AC Service & Repair in ${areaName}, Vadodara | Expert Technicians | Atlas Aircon",
  description: "Best AC service in ${areaName}, Vadodara. Professional AC repair, installation, gas refilling & deep cleaning. 24/7 emergency support. 1-year warranty. Starting \\u20B9499. Call +91 97272 57141.",
  keywords: [
    "ac service ${areaName.toLowerCase()}",
    "ac repair ${areaName.toLowerCase()} vadodara",
    "ac installation ${areaName.toLowerCase()}",
    "ac gas refilling ${areaName.toLowerCase()}",
    "split ac repair ${areaName.toLowerCase()}",
    "window ac service ${areaName.toLowerCase()}",
    "ac deep cleaning ${areaName.toLowerCase()}",
    "best ac service near me ${areaName.toLowerCase()}",
    "ac mechanic ${areaName.toLowerCase()} vadodara",
    "refrigerator repair ${areaName.toLowerCase()}",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/${slug}",
  },
  openGraph: {
    title: "AC Service & Repair in ${areaName} | Atlas Aircon Vadodara",
    description: "Professional AC repair, installation & maintenance in ${areaName}. 24/7 emergency service, 1-year warranty.",
    url: "https://atlasaircons.com/${slug}",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Service in ${areaName}",
  provider: {
    "@type": "LocalBusiness",
    name: "Atlas Aircon",
    telephone: "+919727257141",
    address: { "@type": "PostalAddress", addressLocality: "Vadodara", addressRegion: "Gujarat", postalCode: "390005", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "5000" },
  },
  areaServed: { "@type": "Place", name: "${areaName}, Vadodara" },
  serviceType: "AC Repair and Maintenance",
  offers: { "@type": "AggregateOffer", lowPrice: "249", highPrice: "5000", priceCurrency: "INR" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does AC service cost in ${areaName}?", acceptedAnswer: { "@type": "Answer", text: "Standard AC service in ${areaName} costs \\u20B9499-\\u20B9799 for window/split ACs. Deep jet cleaning starts at \\u20B9499. Visit charges of \\u20B9299 are adjusted against the final repair bill." } },
    { "@type": "Question", name: "Do you provide 24/7 emergency AC repair in ${areaName}?", acceptedAnswer: { "@type": "Answer", text: "Yes, Atlas Aircon provides round-the-clock emergency AC repair across ${areaName} and all of Vadodara. Our technicians can reach you within 45-60 minutes." } },
    { "@type": "Question", name: "Which AC brands do you service in ${areaName}?", acceptedAnswer: { "@type": "Answer", text: "We service all major brands including Voltas, LG, Samsung, Daikin, Hitachi, Blue Star, Carrier, O General, Lloyd, Panasonic and more." } },
    { "@type": "Question", name: "Do you offer an AC AMC plan for ${areaName} residents?", acceptedAnswer: { "@type": "Answer", text: "Yes, we offer comprehensive Annual Maintenance Contracts (AMC) covering quarterly servicing, priority emergency calls, and discounted spare parts for homes and offices in ${areaName}." } },
    { "@type": "Question", name: "What warranty do you give on AC repairs?", acceptedAnswer: { "@type": "Answer", text: "All repairs come with a 1-year service warranty and 90-day parts warranty, giving you complete peace of mind." } },
  ],
};

export default function ACServiceIn${areaName.replace(/[^a-zA-Z0-9]/g, "")}Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <MapPin className="w-4 h-4" />
                <span>${areaName}, Vadodara</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-yellow-400">AC Service &amp; Repair</span> in ${areaName}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Looking for reliable AC service in ${areaName}? Atlas Aircon delivers fast, professional AC repair, installation and maintenance for all brands.
                Certified technicians, genuine parts, transparent pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:+919727257141" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg">
                  <Phone size={22} />
                  +91 97272 57141
                </a>
                <a href="https://wa.me/919727257141" className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition">
                  WhatsApp Us
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                {[{ l: "Certified Technicians" }, { l: "24/7 Emergency" }, { l: "1-Year Warranty" }, { l: "4.9★ Rated" }].map((b) => (
                  <div key={b.l} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span>{b.l}</span></div>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <BookingForm title={"Book AC Service in ${areaName}"} />
            </div>
          </div>
        </div>
      </section>

      {/* About ${areaName} Service Area — SEO Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Professional AC Service in ${areaName} — Vadodara</h2>
            <p className="text-gray-600">
              ${areaName} is one of the well-known localities in Vadodara, Gujarat, and homeowners here depend on air conditioning throughout the intense summer months. At Atlas Aircon, we bring over 20 years of HVAC expertise directly to your doorstep in ${areaName}. Whether you need a quick AC gas top-up, an annual maintenance check, or a complete split AC installation, our factory-trained engineers ensure the job is done right the first time.
            </p>
            <p className="text-gray-600">
              What sets us apart is our commitment to transparency and quality. Every technician carries a digital diagnostic toolkit, and you receive a detailed service report after each visit. We stock genuine spare parts for all major brands — so there is no waiting for components to arrive. For customers in ${areaName}, we typically arrive within 30-60 minutes of booking, making us the fastest AC service provider in the Vadodara region.
            </p>
            <p className="text-gray-600">
              Regular AC maintenance in ${areaName} is not a luxury — it is a necessity. Gujarat&apos;s hot climate means your air conditioner works harder and longer than units in cooler states. Dust from nearby construction, along with Vadodara&apos;s humidity, can clog filters and corrode fins faster than you&apos;d expect. Our deep-cleaning service removes years of buildup, restoring your AC&apos;s original cooling capacity and cutting your electricity bill by up to 15-20%.
            </p>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services &amp; Transparent Pricing</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Honest pricing with no hidden fees. All rates are for the ${areaName} area.</p>
          <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="text-left py-4 px-6">Service</th>
                  <th className="text-left py-4 px-6 hidden md:table-cell">Details</th>
                  <th className="text-right py-4 px-6">Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { s: "AC Repair (Visit + Diagnosis)", d: "Complete fault diagnosis for split, window & inverter ACs", p: "\\u20B9299" },
                  { s: "AC Jet Pump Deep Service", d: "High-pressure cleaning of indoor & outdoor units", p: "From \\u20B9499" },
                  { s: "AC Installation / Uninstallation", d: "Professional mounting, piping, wiring & gas charging", p: "From \\u20B9799" },
                  { s: "AC Gas Refilling (R32/R410A)", d: "Leak detection, vacuum & full refrigerant recharge", p: "From \\u20B91,500" },
                  { s: "AC Deep Chemical Wash", d: "Foam-based chemical cleaning of coils & drain pan", p: "From \\u20B9999" },
                  { s: "Refrigerator Repair", d: "Gas charging, thermostat, compressor & gasket repair", p: "\\u20B9249 (Visit)" },
                  { s: "Air Cooler Repair", d: "Motor, pump, pad & wiring repair for all cooler types", p: "\\u20B9199 (Visit)" },
                ].map((row, i) => (
                  <tr key={row.s} className={\`border-b border-gray-200 \${i % 2 === 0 ? "bg-gray-50" : "bg-white"}\`}>
                    <td className="py-4 px-6 font-medium">{row.s}</td>
                    <td className="py-4 px-6 text-gray-500 text-sm hidden md:table-cell">{row.d}</td>
                    <td className="py-4 px-6 text-right font-semibold text-blue-600 whitespace-nowrap">{row.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-gray-500 p-4 italic">*Final prices may vary based on AC type, tonnage and required parts. <Link href="/ac-service-charges-in-vadodara" className="text-blue-600 hover:underline">View full price list</Link></p>
          </div>
        </div>
      </section>

      {/* Why Choose — 4 pillars */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why ${areaName} Residents Trust Atlas Aircon</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Award, t: "20+ Years Experience", d: "Gujarat\\u2019s most experienced HVAC team since 2004" },
              { icon: Clock, t: "45-Min Response Time", d: "Fastest dispatch in ${areaName} & all Vadodara" },
              { icon: Shield, t: "1-Year Service Warranty", d: "Industry-leading warranty on every repair" },
              { icon: Star, t: "4.9/5 Star Rating", d: "5,000+ happy customers across Gujarat" },
            ].map((item) => (
              <div key={item.t} className="text-center bg-gray-50 p-6 rounded-xl">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">{item.t}</h3>
                <p className="text-gray-600 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra SEO Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Common AC Problems We Solve in ${areaName}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { t: "AC Not Cooling Properly", d: "Low gas levels, dirty filters, or a faulty compressor. We diagnose the root cause and restore full cooling in a single visit." },
                { t: "AC Water Leaking", d: "Blocked drain pipe or frozen evaporator coil. Our technicians clear the drain line and check for underlying issues." },
                { t: "AC Making Noise", d: "Loose fan blades, worn bearings, or compressor vibration. We fix the source of the noise and add vibration dampeners." },
                { t: "AC Bad Smell", d: "Mold and bacteria buildup inside the unit. Our deep chemical wash eliminates odors and sanitizes the system." },
                { t: "AC Tripping MCB", d: "Electrical short, overloaded circuit, or faulty capacitor. We perform a complete electrical safety check and repair." },
                { t: "High Electricity Bills", d: "Dirty coils, low gas, or inefficient operation. Our tune-up service can reduce your AC power consumption by 15-20%." },
              ].map((item) => (
                <div key={item.t} className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-blue-600" /> {item.t}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Book Service in 3 Simple Steps</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { n: "1", t: "Call or WhatsApp", d: "Describe your AC issue. We\\u2019ll give you an instant estimate and schedule a visit at your convenience." },
              { n: "2", t: "Expert Diagnosis & Repair", d: "Our certified technician arrives, diagnoses the fault with professional tools, and completes the repair on the spot." },
              { n: "3", t: "Enjoy Cool Comfort", d: "Your AC is restored to peak performance. Pay via cash, UPI or card. Warranty card issued instantly." },
            ].map((item) => (
              <div key={item.n} className="bg-gray-50 p-8 rounded-xl text-center">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">{item.n}</div>
                <h3 className="text-lg font-bold mb-3">{item.t}</h3>
                <p className="text-gray-600 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions — AC Service in ${areaName}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How much does AC service cost in ${areaName}?", a: "Standard AC service costs \\u20B9499-\\u20B9799. Deep cleaning starts at \\u20B9499. Visit charge of \\u20B9299 is deducted from the repair bill." },
              { q: "Do you provide 24/7 emergency AC repair in ${areaName}?", a: "Yes! Our technicians are available round the clock. We can reach ${areaName} within 45-60 minutes for emergency calls." },
              { q: "Which AC brands do you service?", a: "All major brands: Voltas, LG, Samsung, Daikin, Hitachi, Blue Star, Carrier, O General, Lloyd, Panasonic, and more." },
              { q: "Do you offer AMC plans for ${areaName} residents?", a: "Yes, we offer Comprehensive and Non-Comprehensive AMCs with quarterly servicing, priority support, and discounted parts." },
              { q: "What warranty do you provide on AC repairs?", a: "1-year service warranty on all repairs and 90-day warranty on replaced spare parts." },
              { q: "Can you install a new split AC in ${areaName}?", a: "Absolutely. We handle end-to-end installation including site survey, copper piping, wiring, wall mounting, gas charging, and testing." },
              { q: "How often should I service my AC?", a: "We recommend servicing twice a year — once before summer and once after. Regular maintenance extends lifespan and saves on electricity." },
            ].map((faq) => (
              <details key={faq.q} className="group bg-white rounded-xl border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 group-open:border-b group-open:border-gray-200">
                  {faq.q}
                  <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="p-6 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">AC Service Across Vadodara</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {${JSON.stringify(vadodaraAreas.slice(0, 20).map(a => ({ name: a, href: "/ac-service-in-" + a.toLowerCase().replace(/\\s+/g, "-") })))}.map((area) => (
              <Link key={area.href} href={area.href} className="bg-gray-50 text-blue-700 px-4 py-2.5 rounded-full border border-blue-200 hover:bg-blue-50 hover:border-blue-400 transition text-sm font-medium">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need AC Service in ${areaName}?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Expert AC repair, installation &amp; maintenance. Same-day service, genuine parts, 1-year warranty. Book now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919727257141" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition">
              <Phone size={22} /> Call +91 97272 57141
            </a>
            <a href="https://wa.me/919727257141" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">
              WhatsApp for Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
`;
}

// ─── TEMPLATE 2: Brand Service Center Pages ─────────────────────
function generateBrandServiceCenterPage(slug) {
  const brand = brandFromSlug(slug) || titleCase(slug.split("-ac-service-center")[0]);
  const city = slugToCity(slug);
  const cityLower = city.toLowerCase();
  return `import { Metadata } from "next";
import Link from "next/link";
import {
  Phone, CheckCircle, Star, Clock, Shield, Award, MapPin,
  ArrowRight, Wrench, AlertTriangle, ThermometerSnowflake,
  Settings, Factory, XCircle, Building2,
} from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "${brand} AC Service Center ${city} | Out-of-Warranty Repair Expert | Atlas Aircon",
  description: "Independent ${brand} AC service center in ${city}. Expert out-of-warranty split AC repair, gas charging, PCB repair, deep cleaning & compressor overhaul. Same-day service. Call +91 97272 57141.",
  keywords: [
    "${brand.toLowerCase()} ac service center ${cityLower}",
    "${brand.toLowerCase()} ac repair ${cityLower}",
    "${brand.toLowerCase()} ac service ${cityLower}",
    "${brand.toLowerCase()} split ac repair ${cityLower}",
    "${brand.toLowerCase()} ac gas charging ${cityLower}",
    "${brand.toLowerCase()} ac pcb repair ${cityLower}",
    "${brand.toLowerCase()} ac installation ${cityLower}",
    "${brand.toLowerCase()} ac not cooling ${cityLower}",
    "ac service center ${cityLower}",
    "best ac repair ${cityLower}",
  ],
  alternates: { canonical: "https://atlasaircons.com/${slug}" },
  openGraph: {
    title: "${brand} AC Service Center ${city} | Atlas Aircon",
    description: "Independent out-of-warranty ${brand} AC repair specialist in ${city}. Same-day service, 90-day guarantee.",
    url: "https://atlasaircons.com/${slug}",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "${brand} AC Service Center ${city}",
  provider: { "@type": "LocalBusiness", name: "Atlas Aircon", telephone: "+919727257141" },
  areaServed: { "@type": "City", name: "${city}" },
  serviceType: "AC Repair Service",
  description: "Independent, out-of-warranty ${brand} AC repair, maintenance and installation in ${city}, Gujarat.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is Atlas Aircon an authorized ${brand} service center in ${city}?", acceptedAnswer: { "@type": "Answer", text: "No. Atlas Aircon is an independent service provider specializing in high-quality out-of-warranty repairs. If your ${brand} AC is under official warranty, contact ${brand} directly." } },
    { "@type": "Question", name: "How quickly can you repair my ${brand} AC in ${city}?", acceptedAnswer: { "@type": "Answer", text: "We offer same-day service across ${city}. Our technicians typically arrive within 45-60 minutes of your call for emergency repairs." } },
    { "@type": "Question", name: "What is the cost of ${brand} AC gas refilling in ${city}?", acceptedAnswer: { "@type": "Answer", text: "Gas refilling for ${brand} ACs starts at \\u20B92,500 including leak detection. Final cost depends on the refrigerant type (R32/R410A) and quantity needed." } },
    { "@type": "Question", name: "Do you provide warranty on ${brand} AC repairs?", acceptedAnswer: { "@type": "Answer", text: "Yes, all repairs are backed by our 90-day labor warranty and 90-day parts warranty under the Atlas Aircon Service Guarantee." } },
  ],
};

export default function ${brand.replace(/[^a-zA-Z0-9]/g, "")}ServiceCenter${city.replace(/[^a-zA-Z0-9]/g, "")}Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <Wrench className="w-4 h-4" /><span>Independent Service Provider</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-yellow-400">${brand} AC Service Center</span> ${city}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Expert independent repair solutions for ${brand} air conditioners in ${city}. Specializing in out-of-warranty service with same-day dispatch and a full satisfaction guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:+919727257141" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg">
                  <Phone size={22} /> +91 97272 57141
                </a>
                <a href="https://wa.me/919727257141" className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition">
                  Book Expert Repair
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                {[{ l: "Same-Day Service" }, { l: "90-Day Guarantee" }, { l: "Transparent Pricing" }].map((b) => (
                  <div key={b.l} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span>{b.l}</span></div>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <BookingForm title={"Book ${brand} AC Service"} />
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-4 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-700">
              <strong>Important:</strong> Atlas Aircon is an <strong>Independent and Unauthorized Service Provider</strong>. We are NOT affiliated with ${brand} or any brand&apos;s official service network. We specialize in out-of-warranty repairs only. If your unit is under manufacturer warranty, contact ${brand}&apos;s official support.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content - Why Choose Independent */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Independent ${brand} AC Service in ${city}?</h2>
            <p className="text-gray-600">
              Once your ${brand} air conditioner&apos;s official warranty expires, finding quality repair at a reasonable cost becomes a challenge. Authorized centers often push for full-unit replacements on older models or charge premium rates for simple repairs. As ${city}&apos;s leading independent ${brand} AC service center, Atlas Aircon specializes in component-level repair that extends the life of your equipment at a fraction of the replacement cost.
            </p>
            <p className="text-gray-600">
              Our technicians are factory-trained on ${brand}&apos;s proprietary inverter technology, PCB architecture, and refrigeration circuits. We maintain a local inventory of common ${brand} spare parts — capacitors, thermistors, fan motors, and PCB boards — so most repairs are completed in a single visit. With over 20 years of experience across ${city} and all of Gujarat, we&apos;ve built a reputation for honesty, speed, and technical precision.
            </p>
            <p className="text-gray-600">
              Whether your ${brand} split AC is showing error codes, your window unit isn&apos;t cooling, or your inverter AC&apos;s compressor is making unusual sounds — we&apos;ve seen and fixed it all. From basic servicing to complex compressor overhauling, our ${city}-based team handles everything with a commitment to 100% customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our ${brand} AC Service Offerings</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: ThermometerSnowflake, t: "Split & Window AC Repair", d: "Gas charging, sensor replacement, PCB repair, and complete overhaul for all ${brand} models including inverter series.", color: "blue" },
              { icon: Settings, t: "Deep Chemical Cleaning", d: "Foam-jet and high-pressure cleaning of evaporator, condenser, and drain pan. Eliminates bacteria and restores cooling.", color: "green" },
              { icon: Building2, t: "Commercial & Ductable AC", d: "Cassette AC, floor-standing, and ductable unit repairs for offices and showrooms in ${city}.", color: "purple" },
              { icon: Factory, t: "Industrial Panel AC", d: "Rittal and ${brand} panel cooler maintenance for GIDC factories and automation panels.", color: "red" },
              { icon: Wrench, t: "Compressor Repair", d: "Expert diagnosis and repair of ${brand} rotary and scroll compressors. Motor rewinding available.", color: "orange" },
              { icon: Shield, t: "AMC Plans", d: "Annual Maintenance Contracts with quarterly service visits, priority breakdown support, and discounted parts.", color: "teal" },
            ].map((s) => (
              <div key={s.t} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
                <div className={\`w-14 h-14 bg-\${s.color === "teal" ? "cyan" : s.color}-100 rounded-xl flex items-center justify-center mb-4\`}>
                  <s.icon className={\`w-7 h-7 text-\${s.color === "teal" ? "cyan" : s.color}-600\`} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{s.t}</h3>
                <p className="text-gray-600 text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">${brand} AC Repair Price List — ${city}</h2>
          <p className="text-gray-600 text-center mb-12">Transparent pricing for out-of-warranty service</p>
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr><th className="text-left py-4 px-6">Service</th><th className="text-right py-4 px-6">Price</th><th className="text-right py-4 px-6 hidden md:table-cell">Warranty</th></tr>
              </thead>
              <tbody>
                {[
                  { s: "General AC Service", p: "\\u20B9599", w: "30 Days" },
                  { s: "Deep Chemical Jet Wash", p: "\\u20B9999", w: "60 Days" },
                  { s: "Gas Charging (Full Fill)", p: "\\u20B92,500+", w: "90 Days" },
                  { s: "PCB Repair (Component Level)", p: "\\u20B91,200 - \\u20B93,500", w: "90 Days" },
                  { s: "Compressor Repair", p: "\\u20B93,500 - \\u20B98,000", w: "90 Days" },
                  { s: "Split AC Installation", p: "\\u20B91,500", w: "1 Year" },
                ].map((row, i) => (
                  <tr key={row.s} className={\`border-b border-gray-200 \${i % 2 === 0 ? "bg-white" : ""}\`}>
                    <td className="py-4 px-6">{row.s}</td>
                    <td className="py-4 px-6 text-right font-semibold text-blue-600">{row.p}</td>
                    <td className="py-4 px-6 text-right text-gray-500 text-sm hidden md:table-cell">{row.w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">All Brands We Service in ${city}</h2>
          <p className="text-gray-600 text-center mb-8 text-sm max-w-3xl mx-auto">
            While we specialize as a ${brand} AC service center, our team is equally proficient with all major brands.
            <em> Brand names are used solely to indicate repair expertise — we are independent.</em>
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {${JSON.stringify(allBrands)}.map((b) => (
              <span key={b} className="bg-white text-gray-700 px-5 py-3 rounded-full font-medium text-sm border border-gray-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">${brand} AC Service FAQs — ${city}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Is Atlas Aircon an authorized ${brand} service center?", a: "No. We are an independent provider specializing in out-of-warranty repairs. For units under official warranty, contact ${brand} directly." },
              { q: "How quickly can you repair my ${brand} AC in ${city}?", a: "Same-day service is standard. Emergency calls are attended within 45-60 minutes across ${city}." },
              { q: "What is the cost of ${brand} AC gas refilling?", a: "Gas refilling starts at \\u20B92,500 including leak detection. Cost depends on refrigerant type and quantity." },
              { q: "Do you provide warranty on repairs?", a: "Yes — 90-day labor warranty and 90-day parts warranty under our Atlas Aircon Service Guarantee." },
              { q: "Can you repair ${brand} inverter AC PCB?", a: "Absolutely. We do component-level PCB repair for all ${brand} inverter models, saving you the cost of full board replacement." },
            ].map((faq) => (
              <details key={faq.q} className="group bg-gray-50 rounded-xl border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 group-open:border-b group-open:border-gray-200">
                  {faq.q}
                  <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="p-6 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need ${brand} AC Repair in ${city}?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Expert independent ${brand} AC repair with same-day service, transparent pricing, and 90-day guarantee. Call now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919727257141" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition">
              <Phone size={22} /> Call +91 97272 57141
            </a>
            <a href="https://wa.me/919727257141" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">
              WhatsApp for Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
`;
}

// ─── TEMPLATE 3: Fault Code Pages ────────────────────────────────
function generateFaultCodePage(slug) {
  // fault-codes/voltas-ac-error-e1 → brand=Voltas, code=E1
  const parts = slug.replace("fault-codes/", "");
  const brand = brandFromSlug(parts) || titleCase(parts.split("-ac-")[0]);
  const codeMatch = parts.match(/(error[-_]?(?:code[-_]?)?)(.*)/);
  const errorCode = codeMatch ? codeMatch[2].replace(/-/g, " ").toUpperCase().trim() : parts.split("-").pop().toUpperCase();
  const displayCode = errorCode.replace(/\s+/g, "");
  const componentName = `${brand.replace(/[^a-zA-Z0-9]/g, "")}Error${displayCode.replace(/[^a-zA-Z0-9]/g, "")}`;

  // Error-specific data maps
  const errorDescriptions = {
    E1: { symptom: "Indoor Temperature Sensor Failure", suspect1: "Thermistor", suspect2: "PCB Circuit", desc: "The indoor unit's temperature sensor (thermistor) is sending incorrect readings or has an open circuit. This prevents the AC from regulating temperature properly.", fix1: "Check thermistor resistance with multimeter (should read 5-15kΩ at room temp)", fix2: "Inspect wiring connector between sensor and PCB for loose pins", fix3: "Replace thermistor if resistance is out of range", cost1: "Thermistor: ₹500-₹900", cost2: "PCB Repair: ₹1,200-₹2,500" },
    E2: { symptom: "Outdoor Coil Sensor Fault", suspect1: "Coil Sensor", suspect2: "Wiring Harness", desc: "The outdoor condenser coil sensor is defective or disconnected. The system cannot monitor condenser temperature, risking compressor damage.", fix1: "Locate the coil sensor clipped to the condenser pipe", fix2: "Test resistance (should match brand-specific chart)", fix3: "Replace sensor and secure with thermal paste", cost1: "Sensor: ₹600-₹1,000", cost2: "With wiring: ₹1,500+" },
    E3: { symptom: "Indoor Coil Sensor Error", suspect1: "Evaporator Sensor", suspect2: "Frozen Coil", desc: "The evaporator coil sensor has failed or the coil is frozen. The AC cannot detect coil temperature to prevent ice formation.", fix1: "Check if evaporator coil is frozen (defrost first)", fix2: "Test sensor resistance with multimeter", fix3: "Clean coil blockages and replace sensor if faulty", cost1: "Sensor: ₹500-₹900", cost2: "Deep cleaning: ₹999" },
    E5: { symptom: "Indoor Fan Motor Failure", suspect1: "Fan Capacitor", suspect2: "PCB/Motor", desc: "The indoor blower fan is not spinning or not sending speed feedback to the PCB. Cold air stays trapped, causing ice buildup on coils.", fix1: "Check if fan capacitor bulged or weak (1.5-2uF)", fix2: "Test motor winding resistance for open circuit", fix3: "Check PCB Hall sensor feedback circuit", cost1: "Capacitor: ₹850-₹1,200", cost2: "Motor: ₹2,500+" },
    E6: { symptom: "Communication Error", suspect1: "Signal Cable", suspect2: "Outdoor PCB", desc: "The indoor and outdoor units cannot communicate. This is usually caused by a damaged signal cable or a faulty communication circuit on either PCB.", fix1: "Check the 2/3-wire signal cable between indoor and outdoor", fix2: "Test for continuity and proper voltage on signal lines", fix3: "Inspect both PCBs for burnt communication ICs", cost1: "Cable repair: ₹500-₹1,500", cost2: "PCB repair: ₹2,000+" },
    EC: { symptom: "Refrigerant Leak Detected", suspect1: "Pipe Joints", suspect2: "Coil Micro-Leak", desc: "The system has detected abnormally low refrigerant levels, indicating a leak in the sealed system. Continued operation risks compressor damage.", fix1: "Perform nitrogen pressure test to locate leak", fix2: "Check all flare connections and weld joints", fix3: "Repair leak, vacuum system, recharge refrigerant", cost1: "Leak fix: ₹1,500-₹3,000", cost2: "Gas recharge: ₹2,500+" },
    F1: { symptom: "Indoor Sensor Circuit Error", suspect1: "Thermistor", suspect2: "PCB Input", desc: "Similar to E1 — the room temperature sensor circuit on the indoor PCB is reading abnormal values. Could be a sensor or PCB issue.", fix1: "Measure sensor resistance at connector pins", fix2: "Check PCB solder joints around sensor input IC", fix3: "Replace sensor or repair PCB cold solder joints", cost1: "Sensor: ₹500-₹900", cost2: "PCB repair: ₹1,200+" },
    H3: { symptom: "High Pressure Protection", suspect1: "Dirty Condenser", suspect2: "Compressor Overload", desc: "The system pressure is dangerously high. Usually caused by a dirty condenser coil, blocked airflow, or overcharged refrigerant.", fix1: "Clean outdoor unit condenser coil with jet wash", fix2: "Check if outdoor fan motor is running at full speed", fix3: "Verify refrigerant charge level with manifold gauge", cost1: "Condenser clean: ₹499", cost2: "Fan motor: ₹2,000+" },
    H6: { symptom: "Outdoor Fan Motor Error", suspect1: "Fan Motor", suspect2: "Capacitor", desc: "The outdoor unit's fan motor has stalled or is not reaching the required speed. Without proper airflow, the compressor will overheat.", fix1: "Check outdoor fan motor rotation manually", fix2: "Test fan motor capacitor with meter", fix3: "Replace fan motor or capacitor as needed", cost1: "Capacitor: ₹400-₹800", cost2: "Motor: ₹2,000-₹3,500" },
    P4: { symptom: "Inverter Compressor Error", suspect1: "IPM Module", suspect2: "Compressor Winding", desc: "The inverter drive module has detected a fault with the compressor. Could be an IPM (Intelligent Power Module) failure or compressor winding issue.", fix1: "Check compressor winding resistance (balanced across all 3 phases)", fix2: "Test IPM module for shorted transistors", fix3: "Replace IPM module or compressor as needed", cost1: "IPM module: ₹3,000-₹6,000", cost2: "Compressor: ₹8,000+" },
  };

  const codeKey = displayCode.replace(/\s+/g, "").toUpperCase();
  const data = errorDescriptions[codeKey] || errorDescriptions["E1"];

  return `import { Metadata } from "next";
import Link from "next/link";
import {
  Phone, CheckCircle, AlertTriangle, Zap, ArrowRight, ArrowLeft,
  Wrench, Search, CircleDollarSign, ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "${brand} AC Error ${displayCode} | ${data.symptom} | Diagnostic Guide | Atlas Aircon",
  description: "${brand} AC Error ${displayCode} indicates ${data.symptom.toLowerCase()}. Learn causes, DIY checks, professional repair costs. Expert ${brand} AC repair in Vadodara. Call +91 97272 57141.",
  keywords: [
    "${brand.toLowerCase()} ac error ${displayCode.toLowerCase()}",
    "${brand.toLowerCase()} ac error code ${displayCode.toLowerCase()}",
    "${brand.toLowerCase()} ac ${displayCode.toLowerCase()} fault",
    "${brand.toLowerCase()} ac ${data.symptom.toLowerCase().replace(/ /g, " ")}",
    "${brand.toLowerCase()} ac troubleshooting",
    "ac error ${displayCode.toLowerCase()} meaning",
    "${brand.toLowerCase()} ac repair vadodara",
    "ac error code fix",
  ],
  alternates: { canonical: "https://atlasaircons.com/${slug}" },
  openGraph: {
    title: "${brand} AC Error ${displayCode} — ${data.symptom} | Atlas Aircon",
    description: "Diagnostic protocol & repair guide for ${brand} AC Error ${displayCode}. Suspects: ${data.suspect1} or ${data.suspect2}.",
    url: "https://atlasaircons.com/${slug}",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "${brand} AC Error ${displayCode} — ${data.symptom}",
  description: "Complete diagnostic protocol and repair guide for ${brand} AC Error Code ${displayCode}.",
  author: { "@type": "Organization", name: "Atlas Aircon" },
  publisher: { "@type": "Organization", name: "Atlas Aircon", url: "https://atlasaircons.com" },
  mainEntityOfPage: "https://atlasaircons.com/${slug}",
};

export default function ${componentName}Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero / Fault Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/ac-error-codes" className="text-gray-400 hover:text-white text-sm flex items-center gap-1 transition mb-4 inline-flex">
              <ArrowLeft className="w-4 h-4" /> Back to Error Code Database
            </Link>
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 px-4 py-2 rounded-full text-sm mb-6">
              <ShieldAlert className="w-4 h-4 text-red-400" /><span className="text-red-300">ACTIVE FAULT</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-red-400">${brand} AC Error ${displayCode}</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-8">${data.symptom}</p>
            <div className="grid grid-cols-3 gap-4 max-w-lg">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 uppercase mb-1">Symptom</p>
                <p className="font-bold text-yellow-400">${data.symptom.split(" ").slice(0, 2).join(" ")}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 uppercase mb-1">Suspect #1</p>
                <p className="font-bold text-orange-400">${data.suspect1}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 uppercase mb-1">Suspect #2</p>
                <p className="font-bold text-red-400">${data.suspect2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Warning */}
      <section className="py-4 bg-amber-50 border-b border-amber-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 max-w-4xl mx-auto">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <p className="text-sm text-amber-800"><strong>SAFETY:</strong> Always disconnect power before inspecting any AC components. Never bypass safety sensors.</p>
          </div>
        </div>
      </section>

      {/* Understanding the Error */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Understanding ${brand} Error ${displayCode}</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <p className="text-gray-700">${data.desc}</p>
              <p className="text-gray-700 mt-3">
                <strong>Impact:</strong> If left unaddressed, this error can lead to compressor damage, increased energy consumption, and complete system shutdown. It is critical to resolve ${displayCode} promptly to avoid costly repairs.
              </p>
            </div>

            {/* DIY Checks */}
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Search className="w-6 h-6 text-blue-600" /> DIY Troubleshooting Steps
            </h3>
            <div className="space-y-4 mb-12">
              {[
                { step: "Step 1", desc: "${data.fix1}" },
                { step: "Step 2", desc: "${data.fix2}" },
                { step: "Step 3", desc: "${data.fix3}" },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{item.step.split(" ")[1]}</div>
                  <p className="text-gray-600 pt-2">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Professional Protocol */}
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Wrench className="w-6 h-6 text-blue-600" /> Atlas Aircon Repair Protocol
            </h3>
            <p className="text-gray-600 mb-4">
              Our certified technicians follow a systematic approach to diagnose and resolve the ${displayCode} error efficiently. We carry diagnostic tools and common ${brand} spare parts in our service vehicles, enabling single-visit repairs in most cases.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 mb-8">
              <h4 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                <CircleDollarSign className="w-5 h-5" /> Estimated Repair Cost (Atlas Aircon)
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">{("${data.cost1}").split(":")[0]}</p>
                  <p className="text-xl font-bold text-blue-700">{("${data.cost1}").split(": ")[1]}</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">{("${data.cost2}").split(":")[0]}</p>
                  <p className="text-xl font-bold text-blue-700">{("${data.cost2}").split(": ")[1]}</p>
                </div>
              </div>
            </div>

            {/* Extra SEO content */}
            <h3 className="text-2xl font-bold mb-4">When to Call a Professional for Error ${displayCode}</h3>
            <p className="text-gray-600 mb-4">
              While the basic checks above can help you identify obvious issues, ${brand} AC systems use sophisticated electronics that require professional diagnostic equipment. If the DIY steps don&apos;t resolve the ${displayCode} code, attempting further repairs without proper tools can cause additional damage — turning a ₹500 sensor replacement into a ₹8,000+ PCB replacement.
            </p>
            <p className="text-gray-600 mb-8">
              Atlas Aircon&apos;s team carries professional-grade multimeters, clamp meters, refrigerant manifold gauges, and brand-specific diagnostic software. We diagnose the exact fault within 15-30 minutes and provide a transparent quote before starting any repair. Our 90-day warranty covers both parts and labor, giving you complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-6 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center max-w-4xl mx-auto">
            <Link href="/ac-error-codes" className="text-blue-600 hover:text-blue-800 font-medium transition flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" /> View All ${brand} Error Codes
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
          <h2 className="text-3xl font-bold mb-4">Can&apos;t Fix ${brand} Error ${displayCode}?</h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Don&apos;t risk further damage. Our expert technicians have resolved this exact error across hundreds of ${brand} units. We can dispatch to your location immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919727257141" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition">
              <Phone size={22} /> Call Expert Now
            </a>
            <a href={\`https://wa.me/919727257141?text=\${encodeURIComponent("HELP: My ${brand} AC is showing error ${displayCode}. I need support.")}\`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">
              Get Live Troubleshooting
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
`;
}

// ─── TEMPLATE 4: AC Installation City Pages ─────────────────────
function generateInstallationCityPage(slug) {
  const city = slugToCity(slug);
  const cityLower = city.toLowerCase();
  return `import { Metadata } from "next";
import Link from "next/link";
import {
  Phone, CheckCircle, Star, Clock, Shield, Award,
  ArrowRight, Wrench, ThermometerSnowflake, Settings, Zap,
} from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "AC Installation in ${city} | Split, Window & Ductable AC | Atlas Aircon",
  description: "Professional AC installation service in ${city}, Gujarat. Expert split AC, window AC, cassette & ductable AC installation. Site survey, copper piping, gas charging. Call +91 97272 57141.",
  keywords: [
    "ac installation ${cityLower}",
    "split ac installation ${cityLower}",
    "window ac installation ${cityLower}",
    "ac fitting ${cityLower}",
    "ac installation charges ${cityLower}",
    "best ac installation service ${cityLower}",
    "ductable ac installation ${cityLower}",
    "cassette ac installation ${cityLower}",
    "ac copper piping ${cityLower}",
    "ac installation near me",
  ],
  alternates: { canonical: "https://atlasaircons.com/${slug}" },
  openGraph: {
    title: "AC Installation in ${city} | Atlas Aircon",
    description: "Expert AC installation for homes, offices & factories in ${city}. All brands & types.",
    url: "https://atlasaircons.com/${slug}",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Installation ${city}",
  provider: { "@type": "LocalBusiness", name: "Atlas Aircon", telephone: "+919727257141" },
  areaServed: { "@type": "City", name: "${city}" },
  serviceType: "AC Installation",
  description: "Professional AC installation for split, window, cassette and ductable air conditioners in ${city}, Gujarat.",
  offers: { "@type": "AggregateOffer", lowPrice: "799", highPrice: "15000", priceCurrency: "INR" },
};

export default function ACInstallation${city.replace(/[^a-zA-Z0-9]/g, "")}Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <ThermometerSnowflake className="w-4 h-4" /><span>AC Installation Expert</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Professional <span className="text-yellow-400">AC Installation</span> in ${city}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Expert AC installation for homes, offices, and factories in ${city}. We handle split AC, window AC, cassette, ductable, and VRF systems. Quality copper piping, proper wiring, and 1-year installation warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:+919727257141" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg">
                  <Phone size={22} /> +91 97272 57141
                </a>
                <a href="https://wa.me/919727257141" className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition">
                  Get Free Quote
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                {[{ l: "Site Survey" }, { l: "Quality Piping" }, { l: "1-Year Warranty" }, { l: "All Brands" }].map((b) => (
                  <div key={b.l} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span>{b.l}</span></div>
                ))}
              </div>
            </div>
            <div className="hidden md:block"><BookingForm title="Book AC Installation" /></div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6">Why Proper AC Installation in ${city} Matters</h2>
            <p className="text-gray-600">
              A poorly installed air conditioner can consume 20-30% more electricity, cool unevenly, leak water, and break down frequently. In ${city}&apos;s extreme Gujarat heat, proper installation is not optional — it&apos;s essential. Atlas Aircon&apos;s certified installers ensure every unit is mounted, piped, wired, and charged to manufacturer specifications.
            </p>
            <p className="text-gray-600">
              We begin every job with a thorough site survey. Our engineers assess wall strength for mounting, measure the optimal copper pipe run, plan drainage routing, and evaluate the electrical supply. This preparation ensures your AC delivers maximum cooling from day one. We use ISI-certified copper pipes, flame-brazed joints (never compression fittings for splits), and proper flare connections with torque specifications.
            </p>
            <p className="text-gray-600">
              Whether you&apos;re installing a single 1.5-ton split AC in your ${city} apartment or outfitting an entire office floor with VRF systems, Atlas Aircon delivers the same level of precision and professionalism. Our installation teams carry complete toolkits, vacuum pumps for proper system evacuation, and digital manifold gauges for accurate gas charging. Every installation includes a comprehensive post-install checklist and a 1-year fitting warranty.
            </p>
          </div>
        </div>
      </section>
      {/* Installation Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Types of AC Installation We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { t: "Split AC Installation", p: "From \\u20B91,500", d: "Wall mounting, copper piping up to 10ft, drain pipe routing, electrical wiring, gas charging, and testing.", icon: ThermometerSnowflake },
              { t: "Window AC Installation", p: "From \\u20B9799", d: "Frame fitting, window sealing, electrical connection, and leveling for proper drainage.", icon: Settings },
              { t: "Cassette AC Installation", p: "From \\u20B95,000", d: "False ceiling mounting, condensate pump, drain piping, and electrical connection for office/commercial spaces.", icon: Zap },
              { t: "Ductable AC Installation", p: "Custom Quote", d: "Ducting design, GI duct fabrication, diffuser & grille setup, insulation, and balancing.", icon: Wrench },
              { t: "VRF/VRV System Setup", p: "Custom Quote", d: "Multi-zone cooling system design, header pipe routing, individual zone commissioning.", icon: Award },
              { t: "AC Relocation / Reinstall", p: "From \\u20B92,000", d: "Careful uninstallation, gas recovery, transport, and professional reinstallation at new location.", icon: Shield },
            ].map((s) => (
              <div key={s.t} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
                <s.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-1 text-gray-900">{s.t}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-3">{s.p}</p>
                <p className="text-gray-600 text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">AC Installation FAQ — ${city}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How much does split AC installation cost in ${city}?", a: "Split AC installation starts at \\u20B91,500 for standard installation (up to 10ft piping). Additional copper piping is charged at \\u20B9200-\\u20B9350 per foot based on diameter." },
              { q: "How long does AC installation take?", a: "A standard split AC installation takes 2-3 hours. Window AC takes 1-2 hours. Ductable and VRF installations take 1-3 days depending on scale." },
              { q: "Do you provide copper piping or do I need to buy it?", a: "We provide ISI-certified copper piping as part of the installation package. We recommend our piping over third-party options for quality and warranty purposes." },
              { q: "Can you install AC on a reinforced concrete wall?", a: "Yes. Our teams carry concrete drill bits and heavy-duty anchors specifically rated for RCC walls. We ensure the bracket can hold 3x the unit weight for safety." },
              { q: "Do you charge for site survey?", a: "No, the site survey is free for installations in ${city}. Our engineer will assess the location and provide a detailed quote before you commit." },
            ].map((faq) => (
              <details key={faq.q} className="group bg-gray-50 rounded-xl border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 group-open:border-b group-open:border-gray-200">
                  {faq.q}<ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="p-6 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need AC Installation in ${city}?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Free site survey, quality materials, certified installers, 1-year warranty. Book your installation today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919727257141" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition">
              <Phone size={22} /> Call +91 97272 57141
            </a>
            <a href="https://wa.me/919727257141" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">
              WhatsApp for Free Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
`;
}

// ─── MAIN: Select 100 missing slugs, categorize & generate ──────
// compute missing slugs dynamically by comparing URL list to existing dirs
function getMissingSlugs() {
  const all = fs
    .readFileSync(path.join(__dirname, "..", "atlasaircons-all-urls.txt"), "utf-8")
    .split(/\n/)
    .map((u) => u.trim())
    .filter(Boolean)
    // remove protocol + optional www, drop trailing slashes
    .map((u) => u.replace(/https?:\/\/(www\.)?atlasaircons\.com\//, ""))
    .map((u) => u.replace(/\/+$/, ""))
    // ignore header lines or anything with spaces
    .filter((u) => /^[a-z0-9\-\/_]+$/.test(u));
  const existingDirs = new Set();
  function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const p = path.join(dir, name);
      if (fs.statSync(p).isDirectory()) {
        const rel = path.relative(APP_DIR, p);
        existingDirs.add(rel);
        walk(p);
      }
    }
  }
  walk(APP_DIR);
  return all.filter((slug) => !existingDirs.has(slug));
}

// Pick slugs across different categories (area, brand, fault, install) and the rest are generic
let missing = getMissingSlugs();
// debug: count categories in missing
const missingArea = missing.filter(s=>s.startsWith("ac-service-in-")).length;
const missingBrand = missing.filter(s=>s.match(/-ac-service-center-/)).length;
const missingFault = missing.filter(s=>s.startsWith("fault-codes/")).length;
const missingInstall = missing.filter(s=>s.startsWith("ac-installation-")).length;
console.log(`Missing slugs total ${missing.length} (${missingArea} area, ${missingBrand} brand, ${missingFault} fault, ${missingInstall} install)`);
console.log("first 10 missing", missing.slice(0,10));
const picks = { area: [], brand: [], fault: [], install: [], other: [] };

for (const slug of missing) {
  if (picks.area.length + picks.brand.length + picks.fault.length + picks.install.length >= 100) continue; // still collect remaining later

  if (slug.startsWith("ac-service-in-") && picks.area.length < 40) {
    picks.area.push(slug);
  } else if (slug.match(/-ac-service-center-/) && picks.brand.length < 30) {
    picks.brand.push(slug);
  } else if (slug.startsWith("fault-codes/") && picks.fault.length < 20) {
    picks.fault.push(slug);
  } else if (slug.startsWith("ac-installation-") && !slug.includes("vadodara") && picks.install.length < 10) {
    picks.install.push(slug);
  }
}
// everything remaining becomes generic
picks.other = missing.filter(s => !picks.area.includes(s) && !picks.brand.includes(s) && !picks.fault.includes(s) && !picks.install.includes(s));

let created = 0;
let errors = [];

// promise-based write helper
function writePageAsync(slug, content) {
  const dir = path.join(APP_DIR, slug);
  return fs.promises
    .mkdir(dir, { recursive: true })
    .then(() => fs.promises.writeFile(path.join(dir, "page.tsx"), content, "utf-8"))
    .then(() => { created += 1; })
    .catch((e) => { errors.push({ slug, error: e.message }); });
}

(async () => {
  const tasks = [];
  const generatedSlugs = [];

  function queue(slug, content) {
    generatedSlugs.push(slug);
    return writePageAsync(slug, content);
  }

  // queue area service pages
  for (const slug of picks.area) {
    tasks.push(queue(slug, generateAreaServicePage(slug)));
  }
  // brand pages
  for (const slug of picks.brand) {
    tasks.push(queue(slug, generateBrandServiceCenterPage(slug)));
  }
  // fault codes
  for (const slug of picks.fault) {
    tasks.push(queue(slug, generateFaultCodePage(slug)));
  }
  // installation
  for (const slug of picks.install) {
    tasks.push(queue(slug, generateInstallationCityPage(slug)));
  }
  // generic others
  for (const slug of picks.other) {
    tasks.push(queue(slug, generateGenericPage(slug)));
  }

  // run all in parallel (limited by OS concurrent writes)
  await Promise.all(tasks);

  console.log(`\n✅ Created ${created} pages`);
  console.log(`  Area service pages: ${picks.area.length}`);
  console.log(`  Brand center pages: ${picks.brand.length}`);
  console.log(`  Fault code pages:   ${picks.fault.length}`);
  console.log(`  Installation pages: ${picks.install.length}`);
  console.log(`  Other pages:        ${picks.other.length}`);
  if (errors.length) {
    console.log(`\n❌ Errors (${errors.length}):`);
    errors.forEach(e => console.log(`  ${e.slug}: ${e.error}`));
  }

  // log slugs to file for auditing
  fs.writeFileSync(path.join(__dirname, "../logs/last-run.txt"), generatedSlugs.join("\n"), "utf-8");
  console.log(`\nGenerated slugs written to logs/last-run.txt`);
})();
