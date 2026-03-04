#!/usr/bin/env node
/**
 * Atlas Aircon — Full Site Scraper
 * Fetches every URL from atlasaircons-all-urls.txt, extracts structured data
 * (title, price, description, images, SKU, category, tags, content sections, FAQs, related products)
 * and saves to scraped-data.json.
 *
 * Usage:
 *   node scripts/scrape-all.js              # scrape all
 *   node scripts/scrape-all.js --start=0 --count=50   # scrape subset
 *   node scripts/scrape-all.js --resume     # skip already-scraped URLs
 */

const fs = require("fs");
const path = require("path");

const URL_FILE = path.join(__dirname, "..", "atlasaircons-all-urls.txt");
const OUT_FILE = path.join(__dirname, "..", "scraped-data.json");
const CONCURRENCY = 10; // parallel requests
const DELAY_MS = 150; // delay between batches to be polite

// ─── Parse CLI args ─────────────────────────────────────────
const args = process.argv.slice(2).reduce((acc, a) => {
  const [k, v] = a.replace(/^--/, "").split("=");
  acc[k] = v === undefined ? true : isNaN(v) ? v : Number(v);
  return acc;
}, {});

// ─── Load URLs ──────────────────────────────────────────────
function loadUrls() {
  return fs.readFileSync(URL_FILE, "utf-8")
    .split(/\n/)
    .map(l => l.trim())
    .filter(l => l.startsWith("http"));
}

// ─── Load existing scraped data (for --resume) ──────────────
function loadExisting() {
  if (fs.existsSync(OUT_FILE)) {
    try { return JSON.parse(fs.readFileSync(OUT_FILE, "utf-8")); } catch { return {}; }
  }
  return {};
}

// ─── HTML Entity Decoder ────────────────────────────────────
function decodeEntities(s) {
  if (!s) return "";
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ").replace(/&rsquo;/g, "'").replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"').replace(/&ldquo;/g, '"').replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—").replace(/&hellip;/g, "…").replace(/&trade;/g, "™")
    .replace(/&copy;/g, "©").replace(/&reg;/g, "®").replace(/&#8377;/g, "₹")
    .replace(/&rupee;/gi, "₹").replace(/₹/g, "₹");
}

function stripTags(html) {
  if (!html) return "";
  return decodeEntities(html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());
}

// ─── Extract data from raw HTML ─────────────────────────────
function extractData(html, url) {
  const data = { url, slug: "", type: "unknown" };

  // Slug
  const slugMatch = url.replace(/https?:\/\/(www\.)?atlasaircons\.com\//, "").replace(/\/+$/, "");
  data.slug = slugMatch || "/";

  // Skip homepage - it's not a product
  if (data.slug === "/" || data.slug === "") {
    data.type = "homepage";
  }

  // Page title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  data.pageTitle = titleMatch ? decodeEntities(titleMatch[1]).replace(/ [-–|].*$/, "").trim() : "";

  // OG image
  const ogImg = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i)
    || html.match(/<meta\s+content="([^"]+)"\s+property="og:image"/i);
  data.ogImage = ogImg ? ogImg[1] : "";

  // OG description
  const ogDesc = html.match(/<meta\s+property="og:description"\s+content="([^"]+)"/i)
    || html.match(/<meta\s+content="([^"]+)"\s+property="og:description"/i);
  data.ogDescription = ogDesc ? decodeEntities(ogDesc[1]) : "";

  // Meta description
  const metaDesc = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i)
    || html.match(/<meta\s+content="([^"]+)"\s+name="description"/i);
  data.metaDescription = metaDesc ? decodeEntities(metaDesc[1]) : "";

  // Canonical
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  data.canonical = canonical ? canonical[1] : "";

  // ─── Detect page type ────────────────────────────────
  const isProduct = html.includes("woocommerce-product-gallery") || html.includes("product_title") ||
    html.includes("Add to cart") || html.includes("add-to-cart") || html.includes("class=\"price\"");
  const isBlog = html.includes("entry-content") && !isProduct && (html.includes("article") || html.includes("posted-on"));
  const isWiki = data.slug.startsWith("wiki/");
  const isHvacWork = data.slug.startsWith("hvac-work/");

  if (isProduct) data.type = "product";
  else if (isWiki) data.type = "wiki";
  else if (isHvacWork) data.type = "hvac-work";
  else if (isBlog) data.type = "blog";
  else data.type = "page";

  // ─── Product-specific extraction ─────────────────────
  if (data.type === "product") {
    // Product title (h1.product_title)
    const prodTitle = html.match(/<h1[^>]*class="[^"]*product_title[^"]*"[^>]*>([^<]+)<\/h1>/i)
      || html.match(/<h1[^>]*class="[^"]*product-title[^"]*"[^>]*>([^<]+)<\/h1>/i);
    if (prodTitle) data.productTitle = decodeEntities(prodTitle[1]);

    // Price
    const priceMatch = html.match(/class="[^"]*woocommerce-Price-amount[^"]*"[^>]*>(?:<bdi>)?(?:<span[^>]*>₹<\/span>)?([^<]+)/i);
    if (priceMatch) {
      data.price = "₹" + decodeEntities(priceMatch[1]).replace(/₹/g, "").trim();
    } else {
      // Try another pattern
      const altPrice = html.match(/<span class="price">.*?₹\s*([0-9,\.]+)/is)
        || html.match(/₹\s*([0-9,\.]+)/i);
      if (altPrice) data.price = "₹" + altPrice[1].trim();
    }

    // SKU
    const skuMatch = html.match(/SKU:\s*<\/span>\s*<span[^>]*>\s*([A-Z0-9][A-Z0-9\-]+)/i)
      || html.match(/class="sku[^"]*"[^>]*>\s*([A-Z0-9][A-Z0-9\-]+)/i)
      || html.match(/SKU:\s*(?:<[^>]+>\s*)*([A-Z]{2,}[\-][0-9][0-9\-]+)/i);
    if (skuMatch) data.sku = skuMatch[1].trim();

    // Category
    const catMatch = html.match(/Category:\s*<\/span>\s*<a[^>]*>([^<]+)/i)
      || html.match(/posted_in[^>]*>.*?<a[^>]*>([^<]+)/is);
    if (catMatch) data.category = decodeEntities(catMatch[1]);

    // Tags
    const tagsSection = html.match(/Tags?:\s*<\/span>(.*?)<\/span>/is)
      || html.match(/tagged_as[^>]*>(.*?)<\/span>/is);
    if (tagsSection) {
      const tagMatches = tagsSection[1].match(/<a[^>]*>([^<]+)<\/a>/gi);
      if (tagMatches) {
        data.tags = tagMatches.map(t => decodeEntities(t.replace(/<[^>]*>/g, "").trim()));
      }
    }

    // Product images (all from gallery)
    const imgMatches = html.match(/data-large_image="([^"]+)"/gi)
      || html.match(/wp-post-image[^>]*src="([^"]+)"/gi);
    if (imgMatches) {
      data.images = [];
      for (const m of imgMatches) {
        const src = m.match(/"([^"]+\.(jpg|jpeg|png|webp|gif|svg)([^"]*)?)"/i);
        if (src && !data.images.includes(src[1])) data.images.push(src[1]);
      }
    }
    // Also try og:image and gallery images
    if (!data.images || data.images.length === 0) {
      data.images = [];
      const allImgs = html.match(/https:\/\/www\.atlasaircons\.com\/wp-content\/uploads\/[^"'\s)]+\.(jpg|jpeg|png|webp)/gi);
      if (allImgs) {
        for (const img of allImgs) {
          if (!data.images.includes(img) && !img.includes("cropped-") && !img.includes("150x150")) {
            data.images.push(img);
          }
        }
      }
    }
    if (data.ogImage && data.images && !data.images.includes(data.ogImage)) {
      data.images.unshift(data.ogImage);
    }

    // Short description
    const shortDesc = html.match(/<div[^>]*class="[^"]*woocommerce-product-details__short-description[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
    if (shortDesc) data.shortDescription = stripTags(shortDesc[1]);

    // Full description
    const descTab = html.match(/<div[^>]*id="tab-description[^"]*"[^>]*>([\s\S]*?)<\/div>/i)
      || html.match(/<h2>Description<\/h2>([\s\S]*?)(?:<\/div>|<h2>)/i);
    if (descTab) data.description = stripTags(descTab[1]);

    // Stock
    const stockMatch = html.match(/(\d+)\s+in stock/i);
    if (stockMatch) data.stock = parseInt(stockMatch[1]);

    // Related products
    const relatedSection = html.match(/<section[^>]*class="[^"]*related[^"]*"[^>]*>([\s\S]*?)<\/section>/i);
    if (relatedSection) {
      const relatedItems = relatedSection[1].match(/<a[^>]*href="([^"]+)"[^>]*>[\s\S]*?<\/a>/gi);
      if (relatedItems) {
        data.relatedProducts = [];
        for (const item of relatedItems.slice(0, 4)) {
          const href = item.match(/href="([^"]+)"/);
          const title = item.match(/<h[23][^>]*>([^<]+)/i);
          const price = item.match(/₹\s*([0-9,\.]+)/);
          if (href) {
            data.relatedProducts.push({
              url: href[1],
              title: title ? decodeEntities(title[1]) : "",
              price: price ? "₹" + price[1] : "",
            });
          }
        }
      }
    }
  }

  // ─── Page/blog content extraction ────────────────────
  if (data.type !== "product") {
    // Main content - try entry-content first
    const entryContent = html.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/(?:article|div|main)/i);
    if (entryContent) {
      // Extract headings and paragraphs
      const sections = [];
      const h2s = entryContent[1].match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi);
      const ps = entryContent[1].match(/<p[^>]*>([\s\S]*?)<\/p>/gi);
      if (h2s) {
        for (const h of h2s) {
          const text = stripTags(h);
          if (text && text.length > 2) sections.push({ type: "heading", text });
        }
      }
      if (ps) {
        for (const p of ps) {
          const text = stripTags(p);
          if (text && text.length > 20) sections.push({ type: "paragraph", text });
        }
      }
      data.contentSections = sections;
    }

    // Try Elementor content sections
    if (!data.contentSections || data.contentSections.length === 0) {
      const sections = [];
      // Find all headings
      const headings = html.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi) || [];
      for (const h of headings) {
        const text = stripTags(h);
        if (text && text.length > 3 && text.length < 200 && !text.includes("LIVE LOG") && !text.includes("COMPANY") && !text.includes("CORE SERVICES") && !text.includes("HEADQUARTERS")) {
          sections.push({ type: "heading", text });
        }
      }
      // Find all meaningful paragraphs
      const paras = html.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
      for (const p of paras) {
        const text = stripTags(p);
        if (text && text.length > 40 && !text.includes("Connecting to dispatch") && !text.includes("NIGHT SQUAD")) {
          sections.push({ type: "paragraph", text });
        }
      }
      if (sections.length > 0) data.contentSections = sections;
    }

    // Extract pricing tables
    const tables = html.match(/<table[^>]*>([\s\S]*?)<\/table>/gi);
    if (tables) {
      data.tables = [];
      for (const table of tables) {
        const rows = [];
        const trs = table.match(/<tr[^>]*>([\s\S]*?)<\/tr>/gi) || [];
        for (const tr of trs) {
          const cells = [];
          const tds = tr.match(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi) || [];
          for (const td of tds) cells.push(stripTags(td));
          if (cells.length > 0) rows.push(cells);
        }
        if (rows.length > 1) data.tables.push(rows);
      }
    }

    // Extract FAQ / accordion
    const faqItems = [];
    // Schema.org FAQ
    const faqSchema = html.match(/"@type"\s*:\s*"FAQPage"[\s\S]*?"mainEntity"\s*:\s*\[([\s\S]*?)\]/i);
    if (faqSchema) {
      const qas = faqSchema[1].match(/"name"\s*:\s*"([^"]+)"[\s\S]*?"text"\s*:\s*"([^"]+)"/gi);
      if (qas) {
        for (const qa of qas) {
          const q = qa.match(/"name"\s*:\s*"([^"]+)"/i);
          const a = qa.match(/"text"\s*:\s*"([^"]+)"/i);
          if (q && a) faqItems.push({ q: decodeEntities(q[1]), a: decodeEntities(a[1]) });
        }
      }
    }
    // HTML accordion FAQ
    if (faqItems.length === 0) {
      const accordions = html.match(/<(?:details|div)[^>]*class="[^"]*(?:faq|accordion)[^"]*"[^>]*>([\s\S]*?)<\/(?:details|div)>/gi);
      if (accordions) {
        for (const acc of accordions) {
          const q = acc.match(/<(?:summary|h[234]|button)[^>]*>([\s\S]*?)<\/(?:summary|h[234]|button)>/i);
          const a = acc.match(/<(?:p|div)[^>]*class="[^"]*(?:answer|content|panel)[^"]*"[^>]*>([\s\S]*?)<\/(?:p|div)>/i);
          if (q) faqItems.push({ q: stripTags(q[1]), a: a ? stripTags(a[1]) : "" });
        }
      }
    }
    if (faqItems.length > 0) data.faq = faqItems;

    // Image extraction for non-product pages
    data.images = [];
    const contentImgs = html.match(/https:\/\/www\.atlasaircons\.com\/wp-content\/uploads\/[^"'\s)]+\.(jpg|jpeg|png|webp)/gi);
    if (contentImgs) {
      for (const img of contentImgs) {
        if (!data.images.includes(img) && !img.includes("cropped-") && !img.includes("150x150") && !img.includes("emoji")) {
          data.images.push(img);
        }
      }
    }
  }

  // ─── JSON-LD extraction ──────────────────────────────
  const jsonLdMatches = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi);
  if (jsonLdMatches) {
    data.jsonLd = [];
    for (const m of jsonLdMatches) {
      const content = m.replace(/<[^>]*>/g, "").trim();
      try { data.jsonLd.push(JSON.parse(content)); } catch {}
    }
  }

  return data;
}

// ─── Fetch a single URL ─────────────────────────────────────
async function scrapeUrl(url) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const resp = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml",
      },
      redirect: "follow",
    });

    clearTimeout(timeout);

    if (!resp.ok) return { url, error: `HTTP ${resp.status}` };

    const html = await resp.text();
    return extractData(html, url);
  } catch (e) {
    return { url, error: e.message };
  }
}

// ─── Batch runner with concurrency control ──────────────────
async function runBatch(urls, concurrency) {
  const results = [];
  for (let i = 0; i < urls.length; i += concurrency) {
    const batch = urls.slice(i, i + concurrency);
    const batchResults = await Promise.all(batch.map(scrapeUrl));
    results.push(...batchResults);

    const done = Math.min(i + concurrency, urls.length);
    const pct = ((done / urls.length) * 100).toFixed(1);
    const success = batchResults.filter(r => !r.error).length;
    const errCount = batchResults.filter(r => r.error).length;
    process.stdout.write(`\r  [${done}/${urls.length}] ${pct}% — batch: ${success} ok, ${errCount} err`);

    // Polite delay
    if (i + concurrency < urls.length) {
      await new Promise(r => setTimeout(r, DELAY_MS));
    }
  }
  console.log();
  return results;
}

// ─── MAIN ───────────────────────────────────────────────────
(async () => {
  const allUrls = loadUrls();
  console.log(`Total URLs in file: ${allUrls.length}`);

  // Subset support
  const start = args.start || 0;
  const count = args.count || allUrls.length;
  const urls = allUrls.slice(start, start + count);
  console.log(`Scraping URLs ${start} to ${start + urls.length - 1} (${urls.length} total)`);

  // Resume support
  const existing = args.resume ? loadExisting() : {};
  const alreadyScraped = new Set(Object.keys(existing));
  const toScrape = urls.filter(u => !alreadyScraped.has(u));
  console.log(`Already scraped: ${urls.length - toScrape.length}, remaining: ${toScrape.length}`);

  if (toScrape.length === 0) {
    console.log("Nothing to scrape!");
    return;
  }

  console.log(`\nStarting scrape (concurrency=${CONCURRENCY}, delay=${DELAY_MS}ms)...\n`);

  const results = await runBatch(toScrape, CONCURRENCY);

  // Merge with existing data
  const allData = { ...existing };
  let successCount = 0;
  let errorCount = 0;

  for (const r of results) {
    if (r.error) {
      errorCount++;
      allData[r.url] = { url: r.url, error: r.error };
    } else {
      successCount++;
      allData[r.url] = r;
    }
  }

  // Save
  fs.writeFileSync(OUT_FILE, JSON.stringify(allData, null, 2), "utf-8");
  console.log(`\n✅ Done!`);
  console.log(`  Scraped: ${successCount} success, ${errorCount} errors`);
  console.log(`  Total in JSON: ${Object.keys(allData).length}`);
  console.log(`  Saved to: ${OUT_FILE}`);

  // Summary by type
  const types = {};
  for (const d of Object.values(allData)) {
    if (d.error) { types["error"] = (types["error"] || 0) + 1; continue; }
    types[d.type] = (types[d.type] || 0) + 1;
  }
  console.log(`\n  Type breakdown:`);
  for (const [t, c] of Object.entries(types).sort((a, b) => b[1] - a[1])) {
    console.log(`    ${t}: ${c}`);
  }

  // Show sample product data
  const sampleProduct = Object.values(allData).find(d => d.type === "product" && d.price);
  if (sampleProduct) {
    console.log(`\n  Sample product:`);
    console.log(`    Title: ${sampleProduct.productTitle || sampleProduct.pageTitle}`);
    console.log(`    Price: ${sampleProduct.price}`);
    console.log(`    SKU: ${sampleProduct.sku}`);
    console.log(`    Images: ${(sampleProduct.images || []).length}`);
    console.log(`    Description: ${(sampleProduct.description || sampleProduct.shortDescription || "").slice(0, 80)}...`);
  }
})();
