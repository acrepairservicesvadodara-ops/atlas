const d = require("../scraped-data.json");
const entries = Object.values(d).filter(e => !e.error);

// Type distribution
const types = {};
entries.forEach(e => { types[e.type] = (types[e.type] || 0) + 1; });
console.log("Type distribution:", types);

// Check why everything is "product" — the site uses woocommerce-style classes everywhere
const sampleSlugs = [
  "ac-service-in-alkapuri",
  "how-to-clean-an-air-conditioner-filter",
  "blue-star-ac-service-center-vadodara",
  "about-us",
  "wiki/what-is-non-inverter-vs-inverter-ac",
  "ac-repair-ahmedabad",
  "cassette-ac-service-vadodara",
  "chiller-repair-services-vadodara",
];

for (const slug of sampleSlugs) {
  const e = entries.find(x => x.slug === slug);
  if (e) {
    console.log(`\n--- ${slug} ---`);
    console.log("  type:", e.type);
    console.log("  title:", e.productTitle || e.pageTitle);
    console.log("  price:", e.price || "N/A");
    console.log("  sku:", e.sku || "N/A");
    console.log("  images:", (e.images || []).length);
    console.log("  content sections:", (e.contentSections || []).length);
    console.log("  faq:", (e.faq || []).length);
    console.log("  tables:", (e.tables || []).length);
    console.log("  description:", (e.description || e.shortDescription || e.metaDescription || "").slice(0, 80));
  } else {
    console.log(`\n--- ${slug} --- NOT FOUND`);
  }
}

// How many with actual product data
const withSku = entries.filter(e => e.sku && e.sku !== "SKU:");
const withDesc = entries.filter(e => (e.description || "").length > 20);
const withImages = entries.filter(e => (e.images || []).length > 0);
const withContent = entries.filter(e => (e.contentSections || []).length > 2);
const withFaq = entries.filter(e => (e.faq || []).length > 0);
const withTables = entries.filter(e => (e.tables || []).length > 0);

console.log("\n\n=== DATA QUALITY ===");
console.log("  With SKU:", withSku.length);
console.log("  With description:", withDesc.length);
console.log("  With images:", withImages.length);
console.log("  With content sections:", withContent.length);
console.log("  With FAQ:", withFaq.length);
console.log("  With tables:", withTables.length);
