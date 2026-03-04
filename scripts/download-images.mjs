#!/usr/bin/env node
// Download product images from WordPress to local public/ directory
// Usage: node scripts/download-images.mjs

import { mkdir, writeFile, access } from "fs/promises";
import { join, dirname, basename } from "path";

const BASE_URL = "https://www.atlasaircons.com/wp-content/uploads";
const OUTPUT_DIR = "public/images/products";

// All unique image filenames used across the site
const images = [
  // Shared product images (2025/06)
  "2025/06/Powerjet-ac-service-vadodara.webp",
  "2025/06/ac-chemical-service.webp",
  "2025/06/central-ac-repair-service-diagram.webp",
  "2025/06/ac-repair-service.webp",
  "2025/06/ac-installation-service.webp",
  // Blog post images (2026/02 and others)
  "2026/02/ac-chemical-service.webp",
  "2026/02/Powerjet-ac-service-vadodara.webp",
  // Specific product/blog images
  "2025/06/Copper-Wire-1024x576.webp",
  "2025/06/ac-blower-motor.webp",
  "2025/06/emergency-24hrs.webp",
  "2025/06/emergency-ac-repairing.webp",
  "2025/06/Atlas-Aircon-Vehicle.webp",
  "2025/06/copper-pipe.webp",
  "2025/06/Air-Conditioner-Gas.webp",
  "2025/06/mafron-gas.webp",
  "2025/06/HVAC-Air-Filter.webp",
  "2025/06/Air-Filters.webp",
  "2025/06/Air-Conditioner-Air-Filter.webp",
  "2025/06/Window-ac-lg.jpg",
  "2025/06/Installation-Process-Window.jpg",
  "2025/06/Split-ac-shift.jpg",
  "2025/06/Packaged-AC.png",
  "2025/06/centrifugal-fan.webp",
  "2025/06/panel-ac-centrifugal-fan.webp",
  "2025/06/best-ac-cooling.webp",
  "2025/06/chimin.webp",
  "2025/06/compressor.webp",
  "2025/06/Atlas-Aircon-Calculator.webp",
];

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function downloadImage(relPath) {
  const url = `${BASE_URL}/${relPath}`;
  const filename = basename(relPath);
  const outPath = join(OUTPUT_DIR, filename);

  if (await fileExists(outPath)) {
    console.log(`  ✓ Already exists: ${filename}`);
    return { status: "skipped", filename };
  }

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
        Referer: "https://www.atlasaircons.com/",
      },
    });

    if (!res.ok) {
      console.log(`  ✗ Failed (${res.status}): ${filename}`);
      return { status: "failed", filename, code: res.status };
    }

    const buffer = Buffer.from(await res.arrayBuffer());
    await writeFile(outPath, buffer);
    const sizeKB = (buffer.length / 1024).toFixed(1);
    console.log(`  ✓ Downloaded: ${filename} (${sizeKB} KB)`);
    return { status: "ok", filename, size: buffer.length };
  } catch (err) {
    console.log(`  ✗ Error: ${filename} — ${err.message}`);
    return { status: "error", filename, error: err.message };
  }
}

async function main() {
  console.log(`\n📥 Downloading ${images.length} images from WordPress...\n`);

  await mkdir(OUTPUT_DIR, { recursive: true });

  const results = [];
  for (const img of images) {
    results.push(await downloadImage(img));
    // Small delay to avoid rate limiting
    await new Promise((r) => setTimeout(r, 300));
  }

  const ok = results.filter((r) => r.status === "ok").length;
  const skipped = results.filter((r) => r.status === "skipped").length;
  const failed = results.filter((r) => r.status !== "ok" && r.status !== "skipped").length;

  console.log(`\n✅ Done: ${ok} downloaded, ${skipped} skipped, ${failed} failed`);
  console.log(`📁 Images saved to: ${OUTPUT_DIR}/\n`);
}

main();
