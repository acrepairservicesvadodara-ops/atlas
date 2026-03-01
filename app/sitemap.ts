import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://atlasaircons.com";
  const lastModified = new Date("2026-03-01");

  // High priority static pages
  const highPriorityPages = new Set([
    "", // homepage
    "about",
    "contact",
    "areas",
  ]);

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

  // Dynamically discover all route directories
  const appDir = path.join(process.cwd(), "app");
  const allDirs = fs.readdirSync(appDir, { withFileTypes: true })
    .filter((entry) => {
      if (!entry.isDirectory()) return false;
      // Skip Next.js internal/non-route dirs
      if (entry.name.startsWith("_") || entry.name.startsWith(".")) return false;
      // Only include dirs that have a page.tsx file
      const pagePath = path.join(appDir, entry.name, "page.tsx");
      return fs.existsSync(pagePath);
    })
    .map((entry) => entry.name);

  // Build sitemap entries
  const pages: MetadataRoute.Sitemap = [
    // Homepage
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  for (const dir of allDirs) {
    let priority = 0.6;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    if (highPriorityPages.has(dir)) {
      priority = 0.8;
      changeFrequency = dir === "contact" ? "monthly" : "weekly";
    } else if (servicePages.has(dir)) {
      priority = 0.9;
    } else if (dir.startsWith("ac-repair-") && !dir.endsWith("-vadodara")) {
      // Nearby city pages
      priority = 0.7;
    } else if (dir.includes("-ac-service-") || dir.includes("-ac-repair-")) {
      // Brand & type pages
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
