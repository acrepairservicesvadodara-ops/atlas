import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { allProducts } from "@/data/products";
import { blogPosts } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://atlasaircons.com";
  const today = new Date();
  const lastModified = today; // Dynamic timestamp for freshness

  // High priority static pages
  const highPriorityPages = new Set(["about", "contact", "areas"]);

  // Main service pages (priority 0.9)
  const servicePages = new Set([
    "ac-repair-vadodara",
    "ac-service-vadodara",
    "ac-installation-vadodara",
    "ac-amc-vadodara",
    "ac-gas-refilling-vadodara",
    "chiller-repair-vadodara",
    "hvac-service-vadodara",
    "vrf-vrv-system-vadodara",
  ]);

  const pages: MetadataRoute.Sitemap = [];

  // ── 1. Homepage ─────────────────────────────────────────────
  pages.push({
    url: baseUrl,
    lastModified,
    changeFrequency: "daily",
    priority: 1.0,
  });

  // ── 2. Core pages (shop, blogs) ─────────────────────────────
  pages.push(
    { url: `${baseUrl}/shop`, lastModified, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/blogs`, lastModified, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/cleaning`, lastModified, changeFrequency: "weekly", priority: 0.85 },
  );

  // ── 3. Product category pages ───────────────────────────────
  const categorySlugs = [
    "cleaning",
    "spare-parts",
    "air-curtains",
    "atlas-aircon",
    "compressor",
    "capacitors",
    "coils",
    "copper-pipe",
  ];
  for (const slug of categorySlugs) {
    pages.push({
      url: `${baseUrl}/product-category/${slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // ── 4. Individual product pages ─────────────────────────────
  for (const product of allProducts) {
    pages.push({
      url: `${baseUrl}/product/${product.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // ── 5. Blog posts ──────────────────────────────────────────
  for (const post of blogPosts) {
    pages.push({
      url: `${baseUrl}/${post.slug}`,
      lastModified: post.lastModified ? new Date(post.lastModified) : lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // ── 6. Service & keyword pages (static folders in app/) ─────
  const appDir = path.join(process.cwd(), "app");
  const blogSlugs = new Set(blogPosts.map((p) => p.slug));
  const skipDirs = new Set([
    "product",
    "product-category",
    "shop",
    "blogs",
    "cleaning",
    "[slug]",
  ]);

  const allDirs = fs
    .readdirSync(appDir, { withFileTypes: true })
    .filter((entry) => {
      if (!entry.isDirectory()) return false;
      if (entry.name.startsWith("_") || entry.name.startsWith(".")) return false;
      if (skipDirs.has(entry.name)) return false;
      if (blogSlugs.has(entry.name)) return false;
      const pagePath = path.join(appDir, entry.name, "page.tsx");
      return fs.existsSync(pagePath);
    })
    .map((entry) => entry.name);

  for (const dir of allDirs) {
    let priority = 0.6;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    if (highPriorityPages.has(dir)) {
      priority = 0.8;
      changeFrequency = dir === "contact" ? "monthly" : "weekly";
    } else if (servicePages.has(dir)) {
      priority = 0.9;
    } else if (dir.startsWith("ac-repair-") && !dir.endsWith("-vadodara")) {
      priority = 0.7;
    } else if (dir.includes("-ac-service-") || dir.includes("-ac-repair-")) {
      priority = 0.7;
    }

    pages.push({
      url: `${baseUrl}/${dir}`,
      lastModified,
      changeFrequency,
      priority,
    });
  }

  return pages;
}
