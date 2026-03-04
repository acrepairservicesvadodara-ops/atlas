#!/usr/bin/env node
/**
 * Atlas Aircon — Regenerate ALL pages from scraped real data
 * Reads scraped-data.json and creates/overwrites page.tsx files
 * with REAL content: titles, prices, descriptions, images, SKUs, FAQs, etc.
 *
 * Usage:
 *   node scripts/regenerate-from-scraped.js
 */

const fs = require("fs");
const path = require("path");

const APP_DIR = path.join(__dirname, "..", "app");
const DATA_FILE = path.join(__dirname, "..", "scraped-data.json");
const PHONE = "+91 97272 57141";
const WA = "https://wa.me/919727257141";

// ─── HELPERS ───────────────────────────────────────────────────
function esc(s) {
  if (!s) return "";
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$").replace(/"/g, '\\"').replace(/'/g, "\\'");
}

function escJsx(s) {
  if (!s) return "";
  return s.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function safeComponentName(s) {
  return "Page" + s.replace(/[^a-zA-Z0-9]/g, "").slice(0, 40);
}

function escStr(s) {
  // For use inside JSX string literals and template strings
  if (!s) return "";
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ").replace(/\r/g, "").trim();
}

function escJsxText(s) {
  if (!s) return "";
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/{/g, "&#123;").replace(/}/g, "&#125;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
}

// Clean up scraped data fields
function cleanDesc(d) {
  if (!d) return "";
  return d.replace(/^Description\s*/i, "").replace(/<!--[\s\S]*?-->/g, "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function cleanSku(s) {
  if (!s || s === "SKU" || s === "SKU:" || s.length < 3) return "";
  return s.trim();
}

function cleanRelatedProducts(rp) {
  if (!rp || !Array.isArray(rp)) return [];
  return rp.filter(p => p.url && p.title && !p.url.includes("add-to-cart")).slice(0, 4);
}

// Slug-based categorization (more reliable than HTML type detection)
function categorizeBySlug(slug) {
  if (slug.endsWith("-hitech-aircool-engineers") && !slug.startsWith("24x7-")) return "product";
  if (slug.startsWith("24x7-") && slug.includes("emergency")) return "emergency-product";
  if (slug.startsWith("ac-service-in-")) return "area-service"; // handcrafted, skip
  if (/-ac-service-center-/.test(slug)) return "brand-center"; // handcrafted, skip
  if (slug.startsWith("fault-codes/") && slug !== "fault-codes") return "fault-code"; // handcrafted
  if (slug.startsWith("wiki/")) return "blog";
  if (slug.startsWith("hvac-work/")) return "blog";
  if (/^(how-to-|best-|most-|the-|advantages-|common-|guide|choose-|dont-|when-to-|top-\d|ai-|eco-|eesl-|new-|latest-|voice-|samsung-air|various-|willis-|who-invented|why-does|what-is|things-to|the-benefits|the-cost|the-growth|standard-ac|premier-|affordable|comprehensive-walk|cold-room-and)/.test(slug)) return "blog";
  if (/^(about-us|contact-us|privacy-policy|return-policy|testimonials|gallery|franchise|register|my-account|cart|checkout|book-appointment|abp-bookings|service-areas|services$|shop$|blogs$|recent-projects|ac-technician-jobs|sitemap-xml|frequently-asked|fault-codes$|wiki$)/.test(slug)) return "static";
  if (/^\d+(-\d+)?$/.test(slug)) return "static";
  return "service"; // everything else is a service/city page
}

const vadodaraAreas = [
  "Alkapuri","Akota","Sayajigunj","Raopura","Mandvi","Pratapgunj","Fatehgunj","Nizampura",
  "Chhani","Sama","Karelibaug","Warasiya","Harni","Ajwa Road","Tarsali","Makarpura",
  "Maneja","Manjalpur","Bhayli","Gotri"
];
const areaLinksJSON = JSON.stringify(vadodaraAreas.slice(0,16).map(a => ({ name: a, href: "/ac-service-in-" + a.toLowerCase().replace(/\s+/g, "-") })));

const allBrands = ["Blue Star","Voltas","Daikin","LG","Samsung","Carrier","Hitachi","Lloyd","Godrej","Panasonic","Haier","Whirlpool","O General","Toshiba","Mitsubishi"];

// ─── PRODUCT PAGE TEMPLATE ─────────────────────────────────────
function generateProductPage(data) {
  const title = data.productTitle || data.pageTitle || "Product";
  const price = data.price || "Contact Us";
  const priceNum = (price.match(/[0-9,]+/) || ["0"])[0].replace(/,/g, "");
  const desc = cleanDesc(data.description) || cleanDesc(data.shortDescription) || cleanDesc(data.metaDescription) || "";
  const shortDesc = cleanDesc(data.shortDescription) || desc.slice(0, 250);
  const sku = cleanSku(data.sku);
  const category = data.category || "HVAC Parts";
  const tags = (data.tags || []).slice(0, 8);
  const images = (data.images || []).filter(i => i && !i.includes("admin-ajax") && !i.includes("emoji") && !i.includes("cropped-"));
  const mainImage = images[0] || data.ogImage || "";
  const relatedProducts = cleanRelatedProducts(data.relatedProducts);
  const slug = data.slug;
  const metaDesc = cleanDesc(data.metaDescription) || cleanDesc(data.ogDescription) || shortDesc.slice(0, 155);

  // Clean description for JSX
  const descClean = escJsxText(desc);
  const shortDescClean = escJsxText(shortDesc);
  const titleClean = escJsxText(title);
  const categoryClean = escJsxText(category);
  const skuClean = escJsxText(sku);
  const metaDescClean = escStr(metaDesc).slice(0, 160);

  const imageElements = images.length > 0
    ? images.slice(0, 4).map((img, i) => `
                <img
                  src="${esc(img)}"
                  alt="${escStr(title)}${i > 0 ? " - Image " + (i+1) : ""}"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="${i === 0 ? "eager" : "lazy"}"
                />`).join("\n")
    : `
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-12 h-12 text-blue-300" />
                  </div>
                  <p className="text-blue-200 text-sm">Product Image</p>
                </div>`;

  const relatedSection = relatedProducts.length > 0
    ? `
      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Related Products</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {${JSON.stringify(relatedProducts)}.map((p: { url: string; title: string; price: string }) => (
              <a key={p.url} href={p.url.replace("https://www.atlasaircons.com/", "/").replace("https://atlasaircons.com/", "/").replace(/\\/$/, "")} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition block">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2">{p.title}</h3>
                <p className="text-blue-600 font-bold">{p.price}</p>
              </a>
            ))}
          </div>
        </div>
      </section>` : "";

  const tagsSection = tags.length > 0
    ? `
              <div className="mt-6 flex flex-wrap gap-2">
                ${tags.map(t => `<span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">${escJsxText(t)}</span>`).join("\n                ")}
              </div>` : "";

  return `import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, ShoppingCart, Truck, FileText, Shield, Star, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "${escStr(title)} | Buy Online | Atlas Aircon Gujarat",
  description: "${metaDescClean}",
  keywords: ["${escStr(title).toLowerCase()}", "hitech aircool engineers", "hvac parts vadodara", "ac spare parts gujarat", "${escStr(category).toLowerCase()}"],
  alternates: { canonical: "https://atlasaircons.com/${esc(slug)}" },
  openGraph: {
    title: "${escStr(title)}",
    description: "${metaDescClean}",
    url: "https://atlasaircons.com/${esc(slug)}",
    type: "website",
    ${mainImage ? `images: ["${esc(mainImage)}"],` : ""}
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "${escStr(title)}",
  description: "${escStr(desc).slice(0, 300)}",
  ${mainImage ? `image: "${esc(mainImage)}",` : ""}
  brand: { "@type": "Brand", name: "Hitech Aircool Engineers" },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "${priceNum}",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Atlas Aircon" },
  },
  category: "${escStr(category)}",
  ${sku ? `sku: "${escStr(sku)}",` : ""}
};

export default function ${safeComponentName(slug)}() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Product Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 md:p-8">
              <div className="space-y-4">${imageElements}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold">IN STOCK</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">${categoryClean}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">${titleClean}</h1>
              <div className="flex items-center gap-2 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                <span className="text-gray-300 text-sm ml-2">(35+ reviews)</span>
              </div>
              <p className="text-3xl font-bold text-yellow-400 mb-6">${escJsxText(price)}</p>
              <p className="text-gray-300 mb-6 leading-relaxed">${shortDescClean.slice(0, 300)}</p>
              ${sku ? `<p className="text-gray-400 text-sm mb-4">SKU: <span className="text-white font-mono">${skuClean}</span></p>` : ""}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a href="tel:+919727257141" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition">
                  <Phone className="w-5 h-5" /> Order Now
                </a>
                <a href="${WA}?text=${encodeURIComponent("I want to order: " + title)}" className="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition">
                  WhatsApp Order
                </a>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-gray-300"><Truck className="w-4 h-4 text-blue-400" /> GIDC Delivery</div>
                <div className="flex items-center gap-1.5 text-gray-300"><FileText className="w-4 h-4 text-blue-400" /> GST Invoice</div>
                <div className="flex items-center gap-1.5 text-gray-300"><Shield className="w-4 h-4 text-blue-400" /> Genuine Parts</div>
              </div>${tagsSection}
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Description</h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>${descClean || shortDescClean}</p>
            </div>
            ${sku || category ? `
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Product Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                ${sku ? `<div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">SKU</span><span className="font-medium">${skuClean}</span></div>` : ""}
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">Category</span><span className="font-medium">${categoryClean}</span></div>
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">Brand</span><span className="font-medium">Hitech Aircool Engineers</span></div>
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">Availability</span><span className="font-medium text-green-600">In Stock</span></div>
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">Delivery</span><span className="font-medium">All Gujarat &amp; GIDC Zones</span></div>
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">Invoice</span><span className="font-medium">GST Invoice Provided</span></div>
              </div>
            </div>` : ""}
          </div>
        </div>
      </section>
${relatedSection}
      {/* Why Buy From Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Why Buy From Atlas Aircon?</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, t: "100% Genuine", d: "All parts sourced directly from authorized distributors" },
              { icon: Truck, t: "Fast Delivery", d: "Same-day dispatch to Vadodara, next-day across Gujarat" },
              { icon: FileText, t: "GST Invoice", d: "Proper tax invoice with every order for business claims" },
              { icon: Star, t: "Expert Support", d: "Technical guidance from 20+ years experienced engineers" },
            ].map(item => (
              <div key={item.t} className="bg-gray-50 p-6 rounded-xl text-center border border-gray-100">
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

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need This Product?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Contact us for bulk orders, custom specs, or technical queries. Our HVAC engineers are ready to help.</p>
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
    </>
  );
}
`;
}

// ─── SERVICE / AREA / BRAND PAGE TEMPLATE ──────────────────────
function generateServicePageFromData(data) {
  const title = data.pageTitle || data.productTitle || "Service";
  const desc = cleanDesc(data.metaDescription) || cleanDesc(data.ogDescription) || "";
  const images = (data.images || []).filter(i => i && !i.includes("admin-ajax") && !i.includes("emoji"));
  const mainImage = images[0] || data.ogImage || "";
  const slug = data.slug;
  const faq = data.faq || [];
  const tables = data.tables || [];
  const contentSections = data.contentSections || [];
  const metaDescClean = escStr(desc).slice(0, 160);

  // Extract headings and paragraphs from content sections
  const headings = contentSections.filter(s => s.type === "heading").map(s => s.text);
  const paragraphs = contentSections.filter(s => s.type === "paragraph").map(s => s.text);

  // Determine if it's a city-specific page
  const cities = ["vadodara","ahmedabad","surat","rajkot","bharuch","anand","kheda","morbi","godhra","rajpipla","daman","valsad"];
  let city = "Vadodara";
  for (const c of cities) {
    if (slug.includes(c)) { city = c.charAt(0).toUpperCase() + c.slice(1); break; }
  }

  // Build content blocks
  const contentBlocks = paragraphs.slice(0, 6).map(p => `            <p className="text-gray-600 mb-4">${escJsxText(p)}</p>`).join("\n");

  // Build pricing table if available
  let tableSection = "";
  if (tables.length > 0) {
    const table = tables[0];
    const rows = table.map((row, i) => {
      const cells = row.map(c => i === 0
        ? `<th className="text-left py-4 px-6">${escJsxText(c)}</th>`
        : `<td className="py-4 px-6">${escJsxText(c)}</td>`
      ).join("");
      return i === 0
        ? `                <thead className="bg-blue-600 text-white"><tr>${cells}</tr></thead>`
        : `                  <tr className="${i % 2 === 0 ? "bg-gray-50" : "bg-white"} border-b border-gray-200">${cells}</tr>`;
    });
    tableSection = `
      {/* Pricing Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Service Pricing</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-sm">
${rows[0]}
              <tbody>
${rows.slice(1).join("\n")}
              </tbody>
            </table>
          </div>
        </div>
      </section>`;
  }

  // Build FAQ section
  let faqSection = "";
  if (faq.length > 0) {
    const faqItems = faq.slice(0, 10).map(f => `
              <details className="group bg-gray-50 rounded-xl border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 group-open:border-b group-open:border-gray-200">${escJsxText(f.q)}<ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" /></summary>
                <p className="p-6 text-gray-600">${escJsxText(f.a)}</p>
              </details>`).join("\n");
    faqSection = `
      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">${faqItems}
          </div>
        </div>
      </section>`;
  }

  // Build image gallery
  let gallerySection = "";
  if (images.length > 1) {
    const imgTags = images.slice(0, 6).map(img => `
              <img src="${esc(img)}" alt="${escStr(title)}" className="w-full h-48 object-cover rounded-xl" loading="lazy" />`).join("");
    gallerySection = `
      {/* Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Work Gallery</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">${imgTags}
          </div>
        </div>
      </section>`;
  }

  return `import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Star, Shield, Award, Clock, MapPin, ArrowRight, Wrench } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "${escStr(title)} | Atlas Aircon Gujarat",
  description: "${metaDescClean}",
  alternates: { canonical: "https://atlasaircons.com/${esc(slug)}" },
  openGraph: {
    title: "${escStr(title)} | Atlas Aircon",
    description: "${metaDescClean}",
    url: "https://atlasaircons.com/${esc(slug)}",
    type: "website",
    ${mainImage ? `images: ["${esc(mainImage)}"],` : ""}
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "${escStr(title)}",
  provider: {
    "@type": "LocalBusiness",
    name: "Atlas Aircon",
    telephone: "+919727257141",
    address: { "@type": "PostalAddress", addressLocality: "Vadodara", addressRegion: "Gujarat", postalCode: "390005", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "5000" },
  },
  areaServed: { "@type": "City", name: "${city}" },
};

export default function ${safeComponentName(slug)}() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">${escJsxText(title)}</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">${escJsxText(desc).slice(0, 300) || `Professional HVAC service by Atlas Aircon. Certified technicians, genuine parts, same-day service across ${city} and Gujarat.`}</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:+919727257141" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"><Phone size={22} /> ${PHONE}</a>
                <a href="${WA}" className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition">WhatsApp Us</a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                {["Certified Technicians", "24/7 Emergency", "Genuine Parts", "4.9\\u2605 Rated"].map(b => (
                  <div key={b} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span>{b}</span></div>
                ))}
              </div>
            </div>
            <div className="hidden md:block"><BookingForm title={"Book Service"} /></div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
${contentBlocks || `            <p className="text-gray-600 mb-4">${escJsxText(desc) || `Professional HVAC and air conditioning service by Atlas Aircon. Our certified engineers serve ${city} and all of Gujarat with 20+ years of hands-on experience.`}</p>`}
          </div>
        </div>
      </section>
${tableSection}
${gallerySection}
      {/* Why Choose */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Atlas Aircon</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Award, t: "20+ Years Experience", d: "Gujarat\\u2019s most experienced HVAC team" },
              { icon: Clock, t: "Same-Day Service", d: "Fastest dispatch across Gujarat" },
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
          <h2 className="text-2xl font-bold text-center mb-8">Brands We Service</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {${JSON.stringify(allBrands)}.map(b => (
              <span key={b} className="bg-white text-gray-700 px-5 py-3 rounded-full text-sm border border-gray-200 hover:bg-blue-50 transition">{b}</span>
            ))}
          </div>
        </div>
      </section>
${faqSection}
      {/* Areas */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {${areaLinksJSON}.map((area: { href: string; name: string }) => (
              <Link key={area.href} href={area.href} className="bg-white text-blue-700 px-4 py-2.5 rounded-full border border-blue-200 hover:bg-blue-50 transition text-sm font-medium">{area.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Professional Help?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Expert technicians, genuine parts, same-day service. Contact Atlas Aircon now!</p>
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

// ─── BLOG / WIKI / ARTICLE PAGE TEMPLATE ───────────────────────
function generateBlogPageFromData(data) {
  const title = data.pageTitle || "Article";
  const desc = cleanDesc(data.metaDescription) || cleanDesc(data.ogDescription) || "";
  const images = (data.images || []).filter(i => i && !i.includes("admin-ajax") && !i.includes("emoji"));
  const mainImage = images[0] || data.ogImage || "";
  const slug = data.slug;
  const contentSections = data.contentSections || [];
  const faq = data.faq || [];
  const metaDescClean = escStr(desc).slice(0, 160);

  const paragraphs = contentSections.filter(s => s.type === "paragraph").map(s => s.text);
  const headings = contentSections.filter(s => s.type === "heading").map(s => s.text);

  // Build article body from real content
  let articleBody = "";
  let hIdx = 0;
  let pIdx = 0;
  for (const section of contentSections) {
    if (section.type === "heading") {
      articleBody += `\n            <h2 className="text-2xl font-bold mt-8 mb-4">${escJsxText(section.text)}</h2>\n`;
    } else if (section.type === "paragraph") {
      articleBody += `            <p className="text-gray-600 mb-4">${escJsxText(section.text)}</p>\n`;
    }
  }

  if (!articleBody) {
    articleBody = `            <p className="text-gray-600 mb-4">${escJsxText(desc) || "Expert guide by Atlas Aircon. Contact us for professional HVAC advice."}</p>\n`;
  }

  // Hero image
  const heroImage = mainImage
    ? `\n            <img src="${esc(mainImage)}" alt="${escStr(title)}" className="w-full h-auto rounded-xl mb-8" />`
    : "";

  return `import { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, User, ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "${escStr(title)} | Atlas Aircon Blog",
  description: "${metaDescClean}",
  alternates: { canonical: "https://atlasaircons.com/${esc(slug)}" },
  openGraph: {
    title: "${escStr(title)} | Atlas Aircon",
    description: "${metaDescClean}",
    url: "https://atlasaircons.com/${esc(slug)}",
    type: "article",
    ${mainImage ? `images: ["${esc(mainImage)}"],` : ""}
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "${escStr(title)}",
  author: { "@type": "Person", name: "Mehfuz Shahid Khan", jobTitle: "Director, Atlas Aircon" },
  publisher: { "@type": "Organization", name: "Atlas Aircon", url: "https://atlasaircons.com" },
  datePublished: "2025-06-15",
  dateModified: "2026-03-01",
  mainEntityOfPage: "https://atlasaircons.com/${esc(slug)}",
  ${mainImage ? `image: "${esc(mainImage)}",` : ""}
};

export default function ${safeComponentName(slug)}() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Article Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blogs" className="text-gray-400 hover:text-white text-sm flex items-center gap-1 mb-6 inline-flex"><ArrowLeft className="w-4 h-4" /> Back to Blog</Link>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">HVAC Guide</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">${escJsxText(title)}</h1>
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
          <div className="max-w-4xl mx-auto">${heroImage}
${articleBody}
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
              <p className="text-gray-500 text-sm mb-2">Director &amp; Lead HVAC Architect &bull; Atlas Aircon</p>
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


// ─── STATIC PAGE TEMPLATE ──────────────────────────────────────
function generateStaticPageFromData(data) {
  // Same as service but simpler
  return generateServicePageFromData(data);
}

// ─── MAIN EXECUTION ────────────────────────────────────────────
let created = 0;
let skipped = 0;
let errors = [];

function writePageAsync(slug, content) {
  const dir = path.join(APP_DIR, slug);
  return fs.promises.mkdir(dir, { recursive: true })
    .then(() => fs.promises.writeFile(path.join(dir, "page.tsx"), content, "utf-8"))
    .then(() => { created++; })
    .catch(e => { errors.push({ slug, error: e.message }); });
}

(async () => {
  // Load scraped data
  if (!fs.existsSync(DATA_FILE)) {
    console.error("❌ No scraped-data.json found! Run scrape-all.js first.");
    process.exit(1);
  }

  const allData = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  const entries = Object.values(allData).filter(d => !d.error && d.slug && d.slug !== "/");

  console.log(`Loaded ${entries.length} scraped entries`);

  // Keep track of which pages should NOT be overwritten
  // (area-service-in-* and brand-service-center-* have handcrafted templates)
  function hasHandcraftedTemplate(slug) {
    if (slug.startsWith("ac-service-in-")) return true;
    if (/-ac-service-center-/.test(slug)) return true;
    if (slug.startsWith("fault-codes/") && slug !== "fault-codes") return true;
    return false;
  }

  const tasks = [];
  const stats = { product: 0, page: 0, blog: 0, wiki: 0, "hvac-work": 0, skipped: 0 };

  for (const data of entries) {
    const slug = data.slug;
    if (!slug || slug === "/" || slug === "") continue;

    // Categorize by slug pattern (more reliable than HTML type detection)
    const category = categorizeBySlug(slug);

    // Skip handcrafted templates
    if (category === "area-service" || category === "brand-center" || category === "fault-code") {
      stats.skipped = (stats.skipped || 0) + 1;
      skipped++;
      continue;
    }

    let content;
    switch (category) {
      case "product":
      case "emergency-product":
        content = generateProductPage(data);
        stats.product = (stats.product || 0) + 1;
        break;
      case "blog":
        content = generateBlogPageFromData(data);
        stats.blog = (stats.blog || 0) + 1;
        break;
      case "static":
        content = generateStaticPageFromData(data);
        stats.static = (stats.static || 0) + 1;
        break;
      default: // "service" and everything else
        content = generateServicePageFromData(data);
        stats.service = (stats.service || 0) + 1;
    }

    tasks.push(writePageAsync(slug, content));
  }

  await Promise.all(tasks);

  console.log(`\n✅ Regenerated ${created} pages with REAL scraped content`);
  console.log(`⏭️  Skipped ${skipped} (handcrafted templates preserved)`);
  if (errors.length > 0) {
    console.log(`❌ Errors: ${errors.length}`);
    errors.slice(0, 10).forEach(e => console.log(`  ${e.slug}: ${e.error}`));
  }
  console.log(`\nBreakdown:`);
  for (const [k, v] of Object.entries(stats)) {
    if (v > 0) console.log(`  ${k}: ${v}`);
  }
})();
