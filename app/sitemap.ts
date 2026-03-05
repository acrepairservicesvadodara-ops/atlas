import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { blogPosts } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hitechairconditioning.in";
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

  // ── 2. Core pages (blogs) ──────────────────────────────────
  pages.push(
    { url: `${baseUrl}/blogs`, lastModified, changeFrequency: "daily", priority: 0.9 },
  );

  // ── 3. Blog posts ──────────────────────────────────────────
  for (const post of blogPosts) {
    pages.push({
      url: `${baseUrl}/${post.slug}`,
      lastModified: post.lastModified ? new Date(post.lastModified) : lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // ── 4. Service & keyword pages (static folders in app/) ─────
  const appDir = path.join(process.cwd(), "app");
  const blogSlugs = new Set(blogPosts.map((p) => p.slug));
  const skipDirs = new Set([
    "blogs",
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
