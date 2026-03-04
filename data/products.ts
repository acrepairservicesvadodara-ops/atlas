// ============================================================
// Atlas Aircon — Product Data (202 products from product-sitemap.xml)
// Source: https://www.atlasaircons.com/product-sitemap.xml
// ============================================================

import { Product } from "./types";

// Shared product images used by many Hitech Aircool / Atlas products
export const SHARED_IMAGES = [
  "https://www.atlasaircons.com/wp-content/uploads/2025/06/Powerjet-ac-service-vadodara.webp",
  "https://www.atlasaircons.com/wp-content/uploads/2025/06/ac-chemical-service.webp",
  "https://www.atlasaircons.com/wp-content/uploads/2025/06/central-ac-repair-service-diagram.webp",
  "https://www.atlasaircons.com/wp-content/uploads/2025/06/ac-repair-service.webp",
  "https://www.atlasaircons.com/wp-content/uploads/2025/06/ac-installation-service.webp",
];

// ============================================================
// CLEANING PRODUCTS (30)
// Category URL: /product-category/cleaning/
// ============================================================
export const cleaningProducts: Product[] = [
  // Power Jet AC Service
  { name: "Power Jet AC Service (1 Ton)", slug: "power-jet-ac-service-1-ton", url: "https://www.atlasaircons.com/product/power-jet-ac-service-1-ton/", price: 499, sku: "HAE-001-01", category: "Cleaning", tags: ["1 ton", "power jet", "split ac"], description: "Professional power jet cleaning for 1-ton split AC units. High-pressure water jet cleaning of indoor & outdoor units.", images: SHARED_IMAGES },
  { name: "Power Jet AC Service (1.5 Ton)", slug: "power-jet-ac-service-1-5-ton", url: "https://www.atlasaircons.com/product/power-jet-ac-service-1-5-ton/", price: 549, sku: "HAE-001-02", category: "Cleaning", tags: ["1.5 ton", "power jet", "split ac"], description: "Professional power jet cleaning for 1.5-ton split AC units.", images: SHARED_IMAGES },
  { name: "Power Jet AC Service (2 Ton)", slug: "power-jet-ac-service-2-ton", url: "https://www.atlasaircons.com/product/power-jet-ac-service-2-ton/", price: 599, sku: "HAE-001-03", category: "Cleaning", tags: ["2 ton", "power jet", "split ac"], description: "Professional power jet cleaning for 2-ton split AC units.", images: SHARED_IMAGES },
  // Chemical Wash Service
  { name: "Chemical Wash Service (1 Ton)", slug: "chemical-wash-service-1-ton", url: "https://www.atlasaircons.com/product/chemical-wash-service-1-ton/", price: 899, sku: "HAE-003-01", category: "Cleaning", tags: ["1 ton", "chemical wash"], description: "Deep chemical wash for 1-ton split AC. Removes stubborn dirt, mold, and bacteria.", images: SHARED_IMAGES },
  { name: "Chemical Wash Service (1.5 Ton)", slug: "chemical-wash-service-1-5-ton", url: "https://www.atlasaircons.com/product/chemical-wash-service-1-5-ton/", price: 949, sku: "HAE-003-02", category: "Cleaning", tags: ["1.5 ton", "chemical wash"], description: "Deep chemical wash for 1.5-ton split AC.", images: SHARED_IMAGES },
  { name: "Chemical Wash Service (2 Ton)", slug: "chemical-wash-service-2-ton", url: "https://www.atlasaircons.com/product/chemical-wash-service-2-ton/", price: 999, sku: "HAE-003-03", category: "Cleaning", tags: ["2 ton", "chemical wash"], description: "Deep chemical wash for 2-ton split AC.", images: SHARED_IMAGES },
  // Full Deep AC Service
  { name: "Full Deep AC Service (1 Ton)", slug: "full-deep-ac-service-1-ton", url: "https://www.atlasaircons.com/product/full-deep-ac-service-1-ton/", price: 1199, sku: "HAE-004-01", category: "Cleaning", tags: ["1 ton", "deep service"], description: "Complete deep AC service for 1-ton units. Includes power jet + chemical wash + gas check.", images: SHARED_IMAGES },
  { name: "Full Deep AC Service (1.5 Ton)", slug: "full-deep-ac-service-1-5-ton", url: "https://www.atlasaircons.com/product/full-deep-ac-service-1-5-ton/", price: 1249, sku: "HAE-004-02", category: "Cleaning", tags: ["1.5 ton", "deep service"], description: "Complete deep AC service for 1.5-ton units.", images: SHARED_IMAGES },
  { name: "Full Deep AC Service (2 Ton)", slug: "full-deep-ac-service-2-ton", url: "https://www.atlasaircons.com/product/full-deep-ac-service-2-ton/", price: 1299, sku: "HAE-004-03", category: "Cleaning", tags: ["2 ton", "deep service"], description: "Complete deep AC service for 2-ton units.", images: SHARED_IMAGES },
  // Jet Spray + Gas Check
  { name: "Jet Spray + Gas Check (1 Ton)", slug: "jet-spray-gas-check-1-ton", url: "https://www.atlasaircons.com/product/jet-spray-gas-check-1-ton/", price: 649, sku: "HAE-012-01", category: "Cleaning", tags: ["1 ton", "jet spray", "gas check"], description: "Jet spray cleaning with gas pressure check for 1-ton AC.", images: SHARED_IMAGES },
  { name: "Jet Spray + Gas Check (1.5 Ton)", slug: "jet-spray-gas-check-1-5-ton", url: "https://www.atlasaircons.com/product/jet-spray-gas-check-1-5-ton/", price: 699, sku: "HAE-012-02", category: "Cleaning", tags: ["1.5 ton", "jet spray", "gas check"], description: "Jet spray cleaning with gas pressure check for 1.5-ton AC.", images: SHARED_IMAGES },
  { name: "Jet Spray + Gas Check (2 Ton)", slug: "jet-spray-gas-check-2-ton", url: "https://www.atlasaircons.com/product/jet-spray-gas-check-2-ton/", price: 749, sku: "HAE-012-03", category: "Cleaning", tags: ["2 ton", "jet spray", "gas check"], description: "Jet spray cleaning with gas pressure check for 2-ton AC.", images: SHARED_IMAGES },
  // Industrial Cleaning
  { name: "Industrial AC Cleaning", slug: "industrial-ac-cleaning", url: "https://www.atlasaircons.com/product/industrial-ac-cleaning/", price: 999, sku: "HAE-013-01", category: "Cleaning", tags: ["industrial"], description: "Industrial-grade AC cleaning service for commercial units.", images: SHARED_IMAGES },
  { name: "Package AC Cleaning", slug: "package-ac-cleaning", url: "https://www.atlasaircons.com/product/package-ac-cleaning/", price: 1499, sku: "HAE-013-02", category: "Cleaning", tags: ["package ac", "commercial"], description: "Professional cleaning for package AC units.", images: SHARED_IMAGES },
  { name: "Duct AC Cleaning", slug: "duct-ac-cleaning", url: "https://www.atlasaircons.com/product/duct-ac-cleaning/", price: 1999, sku: "HAE-013-03", category: "Cleaning", tags: ["duct ac", "commercial"], description: "Complete duct AC cleaning service.", images: SHARED_IMAGES },
  { name: "Central AC Cleaning", slug: "central-ac-cleaning", url: "https://www.atlasaircons.com/product/central-ac-cleaning/", price: 2499, sku: "HAE-013-04", category: "Cleaning", tags: ["central ac", "commercial"], description: "Professional central AC system cleaning.", images: SHARED_IMAGES },
  { name: "AHU Cleaning Service", slug: "ahu-cleaning-service", url: "https://www.atlasaircons.com/product/ahu-cleaning-service/", price: 2999, sku: "HAE-013-05", category: "Cleaning", tags: ["ahu", "industrial"], description: "Air Handling Unit cleaning service.", images: SHARED_IMAGES },
  { name: "Chiller Cleaning Service", slug: "chiller-cleaning-service", url: "https://www.atlasaircons.com/product/chiller-cleaning-service/", price: 3499, sku: "HAE-013-06", category: "Cleaning", tags: ["chiller", "industrial"], description: "Industrial chiller cleaning service.", images: SHARED_IMAGES },
  // Foam Jet
  { name: "AC Foam Jet Service", slug: "ac-foam-jet-service", url: "https://www.atlasaircons.com/product/ac-foam-jet-service/", price: 599, sku: "HAE-014-01", category: "Cleaning", tags: ["foam jet"], description: "Foam jet AC cleaning service for residential units.", images: SHARED_IMAGES },
  { name: "AC Foam Jet + Gas Top-up", slug: "ac-foam-jet-gas-top-up", url: "https://www.atlasaircons.com/product/ac-foam-jet-gas-top-up/", price: 849, sku: "HAE-014-02", category: "Cleaning", tags: ["foam jet", "gas top-up"], description: "Foam jet cleaning with gas top-up service.", images: SHARED_IMAGES },
  // Specialty Cleaning
  { name: "Window AC Cleaning", slug: "window-ac-cleaning", url: "https://www.atlasaircons.com/product/window-ac-cleaning/", price: 449, sku: "HAE-006-01", category: "Cleaning", tags: ["window ac"], description: "Professional window AC cleaning service.", images: SHARED_IMAGES },
  { name: "Window AC Deep Clean", slug: "window-ac-deep-clean", url: "https://www.atlasaircons.com/product/window-ac-deep-clean/", price: 799, sku: "HAE-006-02", category: "Cleaning", tags: ["window ac", "deep clean"], description: "Deep cleaning for window AC units.", images: SHARED_IMAGES },
  { name: "Cassette AC Cleaning", slug: "cassette-ac-cleaning", url: "https://www.atlasaircons.com/product/cassette-ac-cleaning/", price: 899, sku: "HAE-006-03", category: "Cleaning", tags: ["cassette ac"], description: "Cassette AC cleaning service.", images: SHARED_IMAGES },
  { name: "Tower AC Cleaning", slug: "tower-ac-cleaning", url: "https://www.atlasaircons.com/product/tower-ac-cleaning/", price: 699, sku: "HAE-006-04", category: "Cleaning", tags: ["tower ac"], description: "Tower AC cleaning service.", images: SHARED_IMAGES },
  { name: "Portable AC Service", slug: "portable-ac-service", url: "https://www.atlasaircons.com/product/portable-ac-service/", price: 499, sku: "HAE-006-05", category: "Cleaning", tags: ["portable ac"], description: "Portable AC cleaning and service.", images: SHARED_IMAGES },
  { name: "AC Outdoor Unit Clean", slug: "ac-outdoor-unit-clean", url: "https://www.atlasaircons.com/product/ac-outdoor-unit-clean/", price: 399, sku: "HAE-006-06", category: "Cleaning", tags: ["outdoor unit"], description: "Outdoor condenser unit cleaning.", images: SHARED_IMAGES },
  { name: "AC Drain Pipe Clean", slug: "ac-drain-pipe-clean", url: "https://www.atlasaircons.com/product/ac-drain-pipe-clean/", price: 249, sku: "HAE-006-07", category: "Cleaning", tags: ["drain pipe"], description: "AC drain pipe cleaning and unclogging.", images: SHARED_IMAGES },
  { name: "AC Filter Deep Clean", slug: "ac-filter-deep-clean", url: "https://www.atlasaircons.com/product/ac-filter-deep-clean/", price: 299, sku: "HAE-006-08", category: "Cleaning", tags: ["filter"], description: "Deep filter cleaning service.", images: SHARED_IMAGES },
  { name: "AC Coil Cleaning", slug: "ac-coil-cleaning", url: "https://www.atlasaircons.com/product/ac-coil-cleaning/", price: 599, sku: "HAE-006-09", category: "Cleaning", tags: ["coil cleaning"], description: "Evaporator and condenser coil cleaning.", images: SHARED_IMAGES },
  { name: "AC Sanitization", slug: "ac-sanitization", url: "https://www.atlasaircons.com/product/ac-sanitization/", price: 399, sku: "HAE-006-10", category: "Cleaning", tags: ["sanitization"], description: "AC sanitization and anti-bacterial treatment.", images: SHARED_IMAGES },
];

// ============================================================
// SPARE PARTS (21)
// Category URL: /product-category/spare-parts/
// ============================================================
export const sparePartsProducts: Product[] = [
  { name: "Evaporator Coil", slug: "evaporator-coil", url: "https://www.atlasaircons.com/product/evaporator-coil/", price: 7600, sku: "HAE-036", category: "Spare Parts", description: "Replacement evaporator coil for AC systems.", images: SHARED_IMAGES },
  { name: "Duct Cleaning Tool", slug: "duct-cleaning-tool", url: "https://www.atlasaircons.com/product/duct-cleaning-tool/", price: 20, sku: "HAE-034", category: "Spare Parts", description: "Professional duct cleaning tool per sq ft.", images: SHARED_IMAGES },
  { name: "AC Handles", slug: "ac-handles", url: "https://www.atlasaircons.com/product/ac-handles/", price: 250, sku: "HAE-031", category: "Spare Parts", description: "Replacement AC unit handles.", images: SHARED_IMAGES },
  { name: "Display PCB Board", slug: "display-pcb-board", url: "https://www.atlasaircons.com/product/display-pcb-board/", price: 3100, sku: "HAE-029", category: "Spare Parts", description: "Replacement display PCB board for AC indoor unit.", images: SHARED_IMAGES },
  { name: "Discharge Valves", slug: "discharge-valves", url: "https://www.atlasaircons.com/product/discharge-valves/", price: 700, sku: "HAE-027", category: "Spare Parts", description: "Compressor discharge valves.", images: SHARED_IMAGES },
  { name: "Temperature Controller", slug: "temperature-controller", url: "https://www.atlasaircons.com/product/temperature-controller/", price: 2100, sku: "HAE-026", category: "Spare Parts", description: "Digital temperature controller for AC/HVAC systems.", images: SHARED_IMAGES },
  { name: "Defrost Timers", slug: "defrost-timers", url: "https://www.atlasaircons.com/product/defrost-timers/", price: 550, sku: "HAE-023", category: "Spare Parts", description: "Defrost timer for refrigerator and freezer systems.", images: SHARED_IMAGES },
  { name: "AC Diffusers", slug: "ac-diffusers", url: "https://www.atlasaircons.com/product/ac-diffusers/", price: 1050, sku: "HAE-024", category: "Spare Parts", description: "HVAC air diffusers for duct systems.", images: SHARED_IMAGES },
  { name: "Defrost Heaters", slug: "defrost-heaters", url: "https://www.atlasaircons.com/product/defrost-heaters/", price: 750, sku: "HAE-022", category: "Spare Parts", description: "Defrost heater elements for refrigeration.", images: SHARED_IMAGES },
  { name: "AC Damper", slug: "ac-damper", url: "https://www.atlasaircons.com/product/ac-damper/", price: 1350, sku: "HAE-020", category: "Spare Parts", description: "HVAC volume control damper.", images: SHARED_IMAGES },
  { name: "Capillary Tube", slug: "capillary-tube", url: "https://www.atlasaircons.com/product/capillary-tube/", price: 1050, sku: "HAE-010-01", category: "Spare Parts", description: "Capillary tube for AC refrigerant flow control.", images: SHARED_IMAGES },
  { name: "4-Pole Contactor", slug: "4-pole-contactor", url: "https://www.atlasaircons.com/product/4-pole-contactor/", price: 1050, sku: "HAE-017-03", category: "Spare Parts", description: "4-pole electrical contactor for AC systems.", images: SHARED_IMAGES },
  { name: "Heavy Duty AC Stand", slug: "heavy-duty-ac-stand", url: "https://www.atlasaircons.com/product/heavy-duty-ac-stand/", price: 1350, sku: "HAE-016-03", category: "Spare Parts", description: "Heavy duty outdoor unit mounting stand.", images: SHARED_IMAGES },
  { name: "Three Phase Contactor", slug: "three-phase-contactor", url: "https://www.atlasaircons.com/product/three-phase-contactor/", price: 750, sku: "HAE-017-02", category: "Spare Parts", description: "3-phase electrical contactor.", images: SHARED_IMAGES },
  { name: "Readymade AC Stand", slug: "readymade-ac-stand", url: "https://www.atlasaircons.com/product/readymade-ac-stand/", price: 550, sku: "HAE-016-01", category: "Spare Parts", description: "Readymade outdoor unit stand.", images: SHARED_IMAGES },
  { name: "Fabricated AC Stand", slug: "fabricated-ac-stand", url: "https://www.atlasaircons.com/product/fabricated-ac-stand/", price: 899, sku: "HAE-016-02", category: "Spare Parts", description: "Custom fabricated AC outdoor unit stand.", images: SHARED_IMAGES },
  { name: "AC Compressor Repair Service", slug: "ac-compressor-repair-service", url: "https://www.atlasaircons.com/product/ac-compressor-repair-service/", price: 3999, sku: "HAE-015", category: "Spare Parts", description: "Professional AC compressor repair service.", images: SHARED_IMAGES },
  { name: "Flare Nut", slug: "flare-nut", url: "https://www.atlasaircons.com/product/flare-nut/", price: 45, sku: "HAE-042-01", category: "Spare Parts", description: "Brass flare nut for AC copper piping connections.", images: SHARED_IMAGES },
  { name: "Emergency AC Repair", slug: "emergency-ac-repair", url: "https://www.atlasaircons.com/product/emergency-ac-repair/", price: 1800, sku: "HAE-007-04", category: "Spare Parts", description: "Emergency AC repair service with priority dispatch.", images: SHARED_IMAGES },
  { name: "AC Chemical Wash Service", slug: "ac-chemical-wash-service", url: "https://www.atlasaircons.com/product/ac-chemical-wash-service/", price: 1200, sku: "HAE-011", category: "Spare Parts", description: "Professional chemical wash cleaning service.", images: SHARED_IMAGES },
  { name: "AC Deep Cleaning Service", slug: "ac-deep-cleaning-service", url: "https://www.atlasaircons.com/product/ac-deep-cleaning-service/", price: 1500, sku: "HAE-021", category: "Spare Parts", description: "Complete deep cleaning service for AC units.", images: SHARED_IMAGES },
];

// ============================================================
// AIR CURTAINS (11)
// Category URL: /product-category/air-curtains/
// ============================================================
export const airCurtainProducts: Product[] = [
  { name: "Air Curtain 2 Feet", slug: "air-curtain-2-feet", url: "https://www.atlasaircons.com/product/air-curtain-2-feet/", price: 8999, sku: "HAE-002-01", category: "Air Curtain", tags: ["2 feet", "residential"], description: "2-feet air curtain for small doorways.", images: SHARED_IMAGES },
  { name: "Air Curtain 3 Feet", slug: "air-curtain-3-feet", url: "https://www.atlasaircons.com/product/air-curtain-3-feet/", price: 9999, sku: "HAE-002-02", category: "Air Curtain", tags: ["3 feet", "residential"], description: "3-feet air curtain for standard doors.", images: SHARED_IMAGES },
  { name: "Air Curtain 4 Feet", slug: "air-curtain-4-feet", url: "https://www.atlasaircons.com/product/air-curtain-4-feet/", price: 11999, sku: "HAE-002-03", category: "Air Curtain", tags: ["4 feet", "commercial"], description: "4-feet air curtain for commercial entrances.", images: SHARED_IMAGES },
  { name: "Air Curtain 5 Feet", slug: "air-curtain-5-feet", url: "https://www.atlasaircons.com/product/air-curtain-5-feet/", price: 13999, sku: "HAE-002-04", category: "Air Curtain", tags: ["5 feet", "commercial"], description: "5-feet air curtain for wide doorways.", images: SHARED_IMAGES },
  { name: "Air Curtain 6 Feet", slug: "air-curtain-6-feet", url: "https://www.atlasaircons.com/product/air-curtain-6-feet/", price: 15999, sku: "HAE-002-05", category: "Air Curtain", tags: ["6 feet", "commercial"], description: "6-feet air curtain for large commercial doors.", images: SHARED_IMAGES },
  { name: "Air Curtain 7 Feet", slug: "air-curtain-7-feet", url: "https://www.atlasaircons.com/product/air-curtain-7-feet/", price: 17999, sku: "HAE-002-06", category: "Air Curtain", tags: ["7 feet", "industrial"], description: "7-feet air curtain for industrial entrances.", images: SHARED_IMAGES },
  { name: "Air Curtain 8 Feet", slug: "air-curtain-8-feet", url: "https://www.atlasaircons.com/product/air-curtain-8-feet/", price: 19999, sku: "HAE-002-07", category: "Air Curtain", tags: ["8 feet", "industrial"], description: "8-feet air curtain for warehouse doors.", images: SHARED_IMAGES },
  { name: "Air Curtain 9 Feet", slug: "air-curtain-9-feet", url: "https://www.atlasaircons.com/product/air-curtain-9-feet/", price: 21999, sku: "HAE-002-08", category: "Air Curtain", tags: ["9 feet", "industrial"], description: "9-feet air curtain for large industrial openings.", images: SHARED_IMAGES },
  { name: "Air Curtain 10 Feet", slug: "air-curtain-10-feet", url: "https://www.atlasaircons.com/product/air-curtain-10-feet/", price: 23999, sku: "HAE-002-09", category: "Air Curtain", tags: ["10 feet", "industrial"], description: "10-feet air curtain for extra-wide openings.", images: SHARED_IMAGES },
  { name: "Air Curtain 12 Feet", slug: "air-curtain-12-feet", url: "https://www.atlasaircons.com/product/air-curtain-12-feet/", price: 25999, sku: "HAE-002-10", category: "Air Curtain", tags: ["12 feet", "industrial"], description: "12-feet air curtain for factory entrances.", images: SHARED_IMAGES },
  { name: "Air Curtain Custom Size", slug: "air-curtain-custom", url: "https://www.atlasaircons.com/product/air-curtain-custom/", price: "variable", sku: "HAE-002-11", category: "Air Curtain", tags: ["custom", "industrial"], description: "Custom-sized air curtain. Price varies by specification.", images: SHARED_IMAGES },
];

// ============================================================
// ATLAS AIRCON BRANDED PRODUCTS (28)
// Category URL: /product-category/atlas-aircon/
// ============================================================
export const atlasAirconProducts: Product[] = [
  { name: "Top AC Service Vadodara", slug: "top-ac-service-vadodara", url: "https://www.atlasaircons.com/product/top-ac-service-vadodara/", price: 499, sku: "ATLAS-10561", category: "Atlas Aircon Products", description: "Premium AC service package in Vadodara.", images: SHARED_IMAGES },
  { name: "Water Pump Motor", slug: "water-pump-motor", url: "https://www.atlasaircons.com/product/water-pump-motor/", price: 2500, sku: "AT-BRC-1213", category: "Atlas Aircon Products", description: "Water pump motor for cooling systems.", images: SHARED_IMAGES },
  { name: "Panel AC Unit", slug: "panel-ac-unit", url: "https://www.atlasaircons.com/product/panel-ac-unit/", price: 59999, sku: "ATLAS-10562", category: "Atlas Aircon Products", description: "Industrial panel AC unit for control panels and CNC machines.", images: SHARED_IMAGES },
  { name: "HVAC Grills & Diffusers", slug: "hvac-grills-diffusers", url: "https://www.atlasaircons.com/product/hvac-grills-diffusers/", price: 2500, sku: "AT-BRC-1215", category: "Atlas Aircon Products", description: "HVAC air supply and return grills.", images: SHARED_IMAGES },
  { name: "Water Chiller", slug: "water-chiller", url: "https://www.atlasaircons.com/product/water-chiller/", price: 69999, sku: "ATLAS-10563", category: "Atlas Aircon Products", description: "Industrial water chiller system.", images: SHARED_IMAGES },
  { name: "Cold Room System", slug: "cold-room-system", url: "https://www.atlasaircons.com/product/cold-room-system/", price: 100999, sku: "AT-BRC-1216", category: "Atlas Aircon Products", description: "Complete cold room / cold storage system.", images: SHARED_IMAGES },
  { name: "Air Handling Unit (AHU)", slug: "air-handling-unit", url: "https://www.atlasaircons.com/product/air-handling-unit/", price: 189999, sku: "AT-BRC-1214", category: "Atlas Aircon Products", description: "Industrial Air Handling Unit for HVAC systems.", images: SHARED_IMAGES },
  { name: "Centrifugal Fan", slug: "centrifugal-fan", url: "https://www.atlasaircons.com/product/centrifugal-fan/", price: 2500, sku: "AT-BRC-1218", category: "Atlas Aircon Products", description: "Panel AC centrifugal fan motor.", images: SHARED_IMAGES },
  { name: "Copper Coil", slug: "copper-coil", url: "https://www.atlasaircons.com/product/copper-coil/", price: 5999, sku: "AT-BRC-1201", category: "Atlas Aircon Products", description: "AC copper coil for evaporator/condenser.", images: SHARED_IMAGES },
  { name: "AC Installation Service", slug: "ac-installation-service", url: "https://www.atlasaircons.com/product/ac-installation-service/", price: 1500, sku: "AT-BRC-1219", category: "Atlas Aircon Products", description: "Professional AC installation service.", images: SHARED_IMAGES },
  { name: "AC Remote Control", slug: "ac-remote-control", url: "https://www.atlasaircons.com/product/ac-remote-control/", price: 800, sku: "AT-BRC-1203", category: "Atlas Aircon Products", description: "Universal AC remote control replacement.", images: SHARED_IMAGES },
  { name: "5.5 Ton AC Compressor", slug: "5-5-ton-ac-compressor", url: "https://www.atlasaircons.com/product/5-5-ton-ac-compressor/", price: 2731, sku: "ATLAS-10586", category: "Atlas Aircon Products", description: "5.5 Ton compressor (Danfoss/Copeland) for industrial AC.", images: SHARED_IMAGES },
  { name: "Anti-Vibration Pads", slug: "anti-vibration-pads", url: "https://www.atlasaircons.com/product/anti-vibration-pads/", price: 3704, sku: "HAE-005-02", category: "Atlas Aircon Products", description: "Anti-vibration rubber pads for AC outdoor units.", images: SHARED_IMAGES },
  { name: "AC PCB Board", slug: "ac-pcb-board", url: "https://www.atlasaircons.com/product/ac-pcb-board/", price: 3800, sku: "AT-BRC-1204", category: "Atlas Aircon Products", description: "AC printed circuit board for inverter & non-inverter units.", images: SHARED_IMAGES },
  { name: "AC Capacitor", slug: "ac-capacitor", url: "https://www.atlasaircons.com/product/ac-capacitor/", price: 499, sku: "AT-BRC-1221", category: "Atlas Aircon Products", description: "AC run/start capacitor replacement.", images: SHARED_IMAGES },
  { name: "AC Fan Motor", slug: "ac-fan-motor", url: "https://www.atlasaircons.com/product/ac-fan-motor/", price: 3500, sku: "AT-BRC-1205", category: "Atlas Aircon Products", description: "AC condenser/indoor fan motor.", images: SHARED_IMAGES },
  { name: "Split AC Service", slug: "split-ac-service", url: "https://www.atlasaircons.com/product/split-ac-service/", price: 499, sku: "AT-BRC-1222", category: "Atlas Aircon Products", description: "Basic split AC service package.", images: SHARED_IMAGES },
  { name: "Cooling Coil", slug: "cooling-coil", url: "https://www.atlasaircons.com/product/cooling-coil/", price: 6500, sku: "AT-BRC-1206", category: "Atlas Aircon Products", description: "AC cooling coil replacement.", images: SHARED_IMAGES },
  { name: "24Hr Emergency AC Service", slug: "24hr-emergency-ac-service", url: "https://www.atlasaircons.com/product/24hr-emergency-ac-service/", price: 500, sku: "AT-BRC-1220", category: "Atlas Aircon Products", description: "24-hour emergency AC repair service. Visiting charges.", images: SHARED_IMAGES },
  { name: "Buy & Sell Used AC", slug: "buy-sell-used-ac", url: "https://www.atlasaircons.com/product/buy-sell-used-ac/", price: 2500, sku: "AT-BRC-1217", category: "Atlas Aircon Products", description: "Buy and sell used/second-hand AC units.", images: SHARED_IMAGES },
  { name: "AC Compressor (1-22 Ton)", slug: "ac-compressor-1-22-ton", url: "https://www.atlasaircons.com/product/ac-compressor-1-22-ton/", price: 8999, sku: "AT-BRC-1200", category: "Atlas Aircon Products", description: "AC compressor from 1 to 22 ton. All brands available.", images: SHARED_IMAGES },
  { name: "AC Air Filters", slug: "ac-air-filters", url: "https://www.atlasaircons.com/product/ac-air-filters/", price: "variable", sku: "AT-BRC-1202", category: "Atlas Aircon Products", description: "AC air filters — HEPA, carbon, washable. Price varies.", images: SHARED_IMAGES },
  { name: "Refrigerant Gas", slug: "refrigerant-gas", url: "https://www.atlasaircons.com/product/refrigerant-gas/", price: 1500, sku: "AT-BRC-1207", category: "Atlas Aircon Products", description: "AC refrigerant gas refilling (R22, R32, R410A, R407C).", images: SHARED_IMAGES },
  { name: "AC Blower Motor", slug: "ac-blower-motor", url: "https://www.atlasaircons.com/product/ac-blower-motor/", price: 2500, sku: "AT-BRC-1208", category: "Atlas Aircon Products", description: "AC indoor unit blower motor.", images: SHARED_IMAGES },
  { name: "Copper Pipes & Fittings", slug: "copper-pipes-fittings", url: "https://www.atlasaircons.com/product/copper-pipes-fittings/", price: 450, sku: "AT-BRC-1209", category: "Atlas Aircon Products", description: "AC copper piping and fittings per foot.", images: SHARED_IMAGES },
  { name: "Air Dryer Filter", slug: "air-dryer-filter", url: "https://www.atlasaircons.com/product/air-dryer-filter/", price: 3500, sku: "AT-BRC-1210", category: "Atlas Aircon Products", description: "Air dryer filter for AC/HVAC systems.", images: SHARED_IMAGES },
  { name: "Industrial Chiller", slug: "industrial-chiller", url: "https://www.atlasaircons.com/product/industrial-chiller/", price: 47500, sku: "ATLAS-10570", category: "Atlas Aircon Products", description: "Industrial water chiller unit. Price starting from.", images: SHARED_IMAGES },
  { name: "Honeycomb Cooling Pad", slug: "honeycomb-cooling-pad", url: "https://www.atlasaircons.com/product/honeycomb-cooling-pad/", price: 2500, sku: "AT-BRC-1212", category: "Atlas Aircon Products", description: "Honeycomb evaporative cooling pad for air coolers.", images: SHARED_IMAGES },
];

// ============================================================
// COMPRESSOR PRODUCTS (62)
// Category URL: /product-category/compressor/
// Sub-categories: Danfoss (21), Emerson/Copeland (33), GMC (1), Hitachi (2), LG (3), Tecumseh (2)
// ============================================================

// Danfoss Compressors (21)
export const danfossCompressors: Product[] = [
  { name: "Danfoss SM/SH 090 (7.5 Ton)", slug: "danfoss-sm-sh-090", url: "https://www.atlasaircons.com/product/danfoss-sm-sh-090/", price: 28500, sku: "DAN-090", category: "Compressor", tags: ["danfoss", "scroll", "7.5 ton"], description: "Danfoss SM/SH 090 scroll compressor, 7.5 Ton, R407C/R410A.", images: SHARED_IMAGES },
  { name: "Danfoss SM/SH 120 (10 Ton)", slug: "danfoss-sm-sh-120", url: "https://www.atlasaircons.com/product/danfoss-sm-sh-120/", price: 32500, sku: "DAN-120", category: "Compressor", tags: ["danfoss", "scroll", "10 ton"], description: "Danfoss SM/SH 120 scroll compressor, 10 Ton.", images: SHARED_IMAGES },
  { name: "Danfoss SM/SH 148 (12.5 Ton)", slug: "danfoss-sm-sh-148", url: "https://www.atlasaircons.com/product/danfoss-sm-sh-148/", price: 35500, sku: "DAN-148", category: "Compressor", tags: ["danfoss", "scroll", "12.5 ton"], description: "Danfoss SM/SH 148 scroll compressor, 12.5 Ton.", images: SHARED_IMAGES },
  { name: "Danfoss SM/SH 161 (13.5 Ton)", slug: "danfoss-sm-sh-161", url: "https://www.atlasaircons.com/product/danfoss-sm-sh-161/", price: 37500, sku: "DAN-161", category: "Compressor", tags: ["danfoss", "scroll", "13.5 ton"], description: "Danfoss SM/SH 161 scroll compressor, 13.5 Ton.", images: SHARED_IMAGES },
  { name: "Danfoss SM/SH 175 (14.5 Ton)", slug: "danfoss-sm-sh-175", url: "https://www.atlasaircons.com/product/danfoss-sm-sh-175/", price: 39500, sku: "DAN-175", category: "Compressor", tags: ["danfoss", "scroll", "14.5 ton"], description: "Danfoss SM/SH 175 scroll compressor, 14.5 Ton.", images: SHARED_IMAGES },
  { name: "Danfoss SM/SH 185 (15.5 Ton)", slug: "danfoss-sm-sh-185", url: "https://www.atlasaircons.com/product/danfoss-sm-sh-185/", price: 41500, sku: "DAN-185", category: "Compressor", tags: ["danfoss", "scroll", "15.5 ton"], description: "Danfoss SM/SH 185 scroll compressor, 15.5 Ton.", images: SHARED_IMAGES },
  { name: "Danfoss HLP072 (5.5 Ton)", slug: "danfoss-hlp072", url: "https://www.atlasaircons.com/product/danfoss-hlp072/", price: 27310, sku: "DAN-HLP072", category: "Compressor", tags: ["danfoss", "5.5 ton", "hermetic"], description: "Danfoss HLP072 hermetic compressor, 5.5 Ton, R22.", images: SHARED_IMAGES },
  // Additional Danfoss models (14 more in the category - various tonnages)
  { name: "Danfoss SZ/SY 090 (7.5T R410A)", slug: "danfoss-sz-sy-090", url: "https://www.atlasaircons.com/product/danfoss-sz-sy-090/", price: 30500, sku: "DAN-SZ090", category: "Compressor", tags: ["danfoss", "7.5 ton", "R410A"], description: "Danfoss SZ/SY 090 scroll compressor for R410A systems.", images: SHARED_IMAGES },
  { name: "Danfoss SZ/SY 115 (9.5T R410A)", slug: "danfoss-sz-sy-115", url: "https://www.atlasaircons.com/product/danfoss-sz-sy-115/", price: 33500, sku: "DAN-SZ115", category: "Compressor", tags: ["danfoss", "9.5 ton", "R410A"], description: "Danfoss SZ/SY 115 scroll compressor.", images: SHARED_IMAGES },
  { name: "Danfoss SZ/SY 148 (12.5T R410A)", slug: "danfoss-sz-sy-148", url: "https://www.atlasaircons.com/product/danfoss-sz-sy-148/", price: 37500, sku: "DAN-SZ148", category: "Compressor", tags: ["danfoss", "12.5 ton", "R410A"], description: "Danfoss SZ/SY 148 scroll compressor.", images: SHARED_IMAGES },
  { name: "Danfoss SZ/SY 175 (14.5T R410A)", slug: "danfoss-sz-sy-175", url: "https://www.atlasaircons.com/product/danfoss-sz-sy-175/", price: 41500, sku: "DAN-SZ175", category: "Compressor", tags: ["danfoss", "14.5 ton", "R410A"], description: "Danfoss SZ/SY 175 scroll compressor.", images: SHARED_IMAGES },
  { name: "Danfoss MT/MTZ 032 (2.5 Ton)", slug: "danfoss-mt-mtz-032", url: "https://www.atlasaircons.com/product/danfoss-mt-mtz-032/", price: 15500, sku: "DAN-MTZ032", category: "Compressor", tags: ["danfoss", "2.5 ton", "reciprocating"], description: "Danfoss MT/MTZ 032 reciprocating compressor.", images: SHARED_IMAGES },
  { name: "Danfoss MT/MTZ 040 (3.5 Ton)", slug: "danfoss-mt-mtz-040", url: "https://www.atlasaircons.com/product/danfoss-mt-mtz-040/", price: 17500, sku: "DAN-MTZ040", category: "Compressor", tags: ["danfoss", "3.5 ton", "reciprocating"], description: "Danfoss MT/MTZ 040 reciprocating compressor.", images: SHARED_IMAGES },
  { name: "Danfoss MT/MTZ 050 (4 Ton)", slug: "danfoss-mt-mtz-050", url: "https://www.atlasaircons.com/product/danfoss-mt-mtz-050/", price: 19500, sku: "DAN-MTZ050", category: "Compressor", tags: ["danfoss", "4 ton", "reciprocating"], description: "Danfoss MT/MTZ 050 reciprocating compressor.", images: SHARED_IMAGES },
  { name: "Danfoss MT/MTZ 064 (5 Ton)", slug: "danfoss-mt-mtz-064", url: "https://www.atlasaircons.com/product/danfoss-mt-mtz-064/", price: 21500, sku: "DAN-MTZ064", category: "Compressor", tags: ["danfoss", "5 ton", "reciprocating"], description: "Danfoss MT/MTZ 064 reciprocating compressor.", images: SHARED_IMAGES },
  { name: "Danfoss MT/MTZ 080 (6.5 Ton)", slug: "danfoss-mt-mtz-080", url: "https://www.atlasaircons.com/product/danfoss-mt-mtz-080/", price: 24500, sku: "DAN-MTZ080", category: "Compressor", tags: ["danfoss", "6.5 ton", "reciprocating"], description: "Danfoss MT/MTZ 080 reciprocating compressor.", images: SHARED_IMAGES },
  { name: "Danfoss MT/MTZ 100 (8 Ton)", slug: "danfoss-mt-mtz-100", url: "https://www.atlasaircons.com/product/danfoss-mt-mtz-100/", price: 27500, sku: "DAN-MTZ100", category: "Compressor", tags: ["danfoss", "8 ton", "reciprocating"], description: "Danfoss MT/MTZ 100 reciprocating compressor.", images: SHARED_IMAGES },
  { name: "Danfoss MT/MTZ 125 (10 Ton)", slug: "danfoss-mt-mtz-125", url: "https://www.atlasaircons.com/product/danfoss-mt-mtz-125/", price: 30500, sku: "DAN-MTZ125", category: "Compressor", tags: ["danfoss", "10 ton", "reciprocating"], description: "Danfoss MT/MTZ 125 reciprocating compressor.", images: SHARED_IMAGES },
  { name: "Danfoss MT/MTZ 144 (12 Ton)", slug: "danfoss-mt-mtz-144", url: "https://www.atlasaircons.com/product/danfoss-mt-mtz-144/", price: 33500, sku: "DAN-MTZ144", category: "Compressor", tags: ["danfoss", "12 ton", "reciprocating"], description: "Danfoss MT/MTZ 144 reciprocating compressor.", images: SHARED_IMAGES },
  { name: "Danfoss NTZ/NTZ 048 (4 Ton Low Temp)", slug: "danfoss-ntz-048", url: "https://www.atlasaircons.com/product/danfoss-ntz-048/", price: 22500, sku: "DAN-NTZ048", category: "Compressor", tags: ["danfoss", "4 ton", "low temperature"], description: "Danfoss NTZ 048 low temperature compressor for freezers.", images: SHARED_IMAGES },
  { name: "Danfoss NTZ/NTZ 068 (5.5 Ton Low Temp)", slug: "danfoss-ntz-068", url: "https://www.atlasaircons.com/product/danfoss-ntz-068/", price: 26500, sku: "DAN-NTZ068", category: "Compressor", tags: ["danfoss", "5.5 ton", "low temperature"], description: "Danfoss NTZ 068 low temperature compressor.", images: SHARED_IMAGES },
];

// Emerson/Copeland Compressors (33) — Key models
export const emersonCompressors: Product[] = [
  { name: "Copeland ZR 18 (1.5 Ton)", slug: "copeland-zr-18", url: "https://www.atlasaircons.com/product/copeland-zr-18/", price: 9500, sku: "COP-ZR18", category: "Compressor", tags: ["copeland", "scroll", "1.5 ton"], description: "Copeland ZR 18 scroll compressor, 1.5 Ton.", images: SHARED_IMAGES },
  { name: "Copeland ZR 22 (2 Ton)", slug: "copeland-zr-22", url: "https://www.atlasaircons.com/product/copeland-zr-22/", price: 10500, sku: "COP-ZR22", category: "Compressor", tags: ["copeland", "scroll", "2 ton"], description: "Copeland ZR 22 scroll compressor, 2 Ton.", images: SHARED_IMAGES },
  { name: "Copeland ZR 28 (2.3 Ton)", slug: "copeland-zr-28", url: "https://www.atlasaircons.com/product/copeland-zr-28/", price: 11500, sku: "COP-ZR28", category: "Compressor", tags: ["copeland", "scroll", "2.3 ton"], description: "Copeland ZR 28 scroll compressor.", images: SHARED_IMAGES },
  { name: "Copeland ZR 34 (3 Ton)", slug: "copeland-zr-34", url: "https://www.atlasaircons.com/product/copeland-zr-34/", price: 13500, sku: "COP-ZR34", category: "Compressor", tags: ["copeland", "scroll", "3 ton"], description: "Copeland ZR 34 scroll compressor, 3 Ton.", images: SHARED_IMAGES },
  { name: "Copeland ZR 36 (3 Ton)", slug: "copeland-zr-36", url: "https://www.atlasaircons.com/product/copeland-zr-36/", price: 14000, sku: "COP-ZR36", category: "Compressor", tags: ["copeland", "scroll", "3 ton"], description: "Copeland ZR 36 scroll compressor.", images: SHARED_IMAGES },
  { name: "Copeland ZR 40 (3.5 Ton)", slug: "copeland-zr-40", url: "https://www.atlasaircons.com/product/copeland-zr-40/", price: 15500, sku: "COP-ZR40", category: "Compressor", tags: ["copeland", "scroll", "3.5 ton"], description: "Copeland ZR 40 scroll compressor.", images: SHARED_IMAGES },
  { name: "Copeland ZR 45 (3.75 Ton)", slug: "copeland-zr-45", url: "https://www.atlasaircons.com/product/copeland-zr-45/", price: 16500, sku: "COP-ZR45", category: "Compressor", tags: ["copeland", "scroll", "3.75 ton"], description: "Copeland ZR 45 scroll compressor.", images: SHARED_IMAGES },
  { name: "Copeland ZR 48 (4 Ton)", slug: "copeland-zr-48", url: "https://www.atlasaircons.com/product/copeland-zr-48/", price: 17500, sku: "COP-ZR48", category: "Compressor", tags: ["copeland", "scroll", "4 ton"], description: "Copeland ZR 48 scroll compressor.", images: SHARED_IMAGES },
  { name: "Copeland ZR 54 (4.5 Ton)", slug: "copeland-zr-54", url: "https://www.atlasaircons.com/product/copeland-zr-54/", price: 19500, sku: "COP-ZR54", category: "Compressor", tags: ["copeland", "scroll", "4.5 ton"], description: "Copeland ZR 54 scroll compressor.", images: SHARED_IMAGES },
  { name: "Copeland ZR 57 (4.75 Ton)", slug: "copeland-zr-57", url: "https://www.atlasaircons.com/product/copeland-zr-57/", price: 20500, sku: "COP-ZR57", category: "Compressor", tags: ["copeland", "scroll", "4.75 ton"], description: "Copeland ZR 57 scroll compressor.", images: SHARED_IMAGES },
  { name: "Copeland ZR 61 (5 Ton)", slug: "copeland-zr-61", url: "https://www.atlasaircons.com/product/copeland-zr-61/", price: 21500, sku: "COP-ZR61", category: "Compressor", tags: ["copeland", "scroll", "5 ton"], description: "Copeland ZR 61 scroll compressor, 5 Ton.", images: SHARED_IMAGES },
  { name: "Copeland ZR 72 (5.5 Ton)", slug: "copeland-zr-72", url: "https://www.atlasaircons.com/product/copeland-zr-72/", price: 24500, sku: "COP-ZR72", category: "Compressor", tags: ["copeland", "scroll", "5.5 ton"], description: "Copeland ZR 72 scroll compressor, 5.5 Ton. Most popular model.", images: SHARED_IMAGES },
  { name: "Copeland ZR 81 (6.75 Ton)", slug: "copeland-zr-81", url: "https://www.atlasaircons.com/product/copeland-zr-81/", price: 27500, sku: "COP-ZR81", category: "Compressor", tags: ["copeland", "scroll", "6.75 ton"], description: "Copeland ZR 81 scroll compressor.", images: SHARED_IMAGES },
  { name: "Copeland ZR 94 (8 Ton)", slug: "copeland-zr-94", url: "https://www.atlasaircons.com/product/copeland-zr-94/", price: 30500, sku: "COP-ZR94", category: "Compressor", tags: ["copeland", "scroll", "8 ton"], description: "Copeland ZR 94 scroll compressor.", images: SHARED_IMAGES },
  { name: "Copeland ZR 108 (9 Ton)", slug: "copeland-zr-108", url: "https://www.atlasaircons.com/product/copeland-zr-108/", price: 33500, sku: "COP-ZR108", category: "Compressor", tags: ["copeland", "scroll", "9 ton"], description: "Copeland ZR 108 scroll compressor.", images: SHARED_IMAGES },
  { name: "Copeland ZR 125 (10 Ton)", slug: "copeland-zr-125", url: "https://www.atlasaircons.com/product/copeland-zr-125/", price: 36500, sku: "COP-ZR125", category: "Compressor", tags: ["copeland", "scroll", "10 ton"], description: "Copeland ZR 125 scroll compressor, 10 Ton.", images: SHARED_IMAGES },
  { name: "Copeland ZR 144 (12 Ton)", slug: "copeland-zr-144", url: "https://www.atlasaircons.com/product/copeland-zr-144/", price: 39500, sku: "COP-ZR144", category: "Compressor", tags: ["copeland", "scroll", "12 ton"], description: "Copeland ZR 144 scroll compressor.", images: SHARED_IMAGES },
  { name: "Copeland ZR 190 (16 Ton)", slug: "copeland-zr-190", url: "https://www.atlasaircons.com/product/copeland-zr-190/", price: 45500, sku: "COP-ZR190", category: "Compressor", tags: ["copeland", "scroll", "16 ton"], description: "Copeland ZR 190 scroll compressor, 16 Ton.", images: SHARED_IMAGES },
  { name: "Copeland CR 18 (1.5 Ton Reciprocating)", slug: "copeland-cr-18", url: "https://www.atlasaircons.com/product/copeland-cr-18/", price: 8500, sku: "COP-CR18", category: "Compressor", tags: ["copeland", "reciprocating", "1.5 ton"], description: "Copeland CR 18 reciprocating compressor.", images: SHARED_IMAGES },
  { name: "Copeland CR 22 (2 Ton Reciprocating)", slug: "copeland-cr-22", url: "https://www.atlasaircons.com/product/copeland-cr-22/", price: 9500, sku: "COP-CR22", category: "Compressor", tags: ["copeland", "reciprocating", "2 ton"], description: "Copeland CR 22 reciprocating compressor.", images: SHARED_IMAGES },
  { name: "Copeland CR 28 (2.3 Ton Reciprocating)", slug: "copeland-cr-28", url: "https://www.atlasaircons.com/product/copeland-cr-28/", price: 10500, sku: "COP-CR28", category: "Compressor", tags: ["copeland", "reciprocating", "2.3 ton"], description: "Copeland CR 28 reciprocating compressor.", images: SHARED_IMAGES },
  { name: "Copeland CR 34 (3 Ton Reciprocating)", slug: "copeland-cr-34", url: "https://www.atlasaircons.com/product/copeland-cr-34/", price: 12500, sku: "COP-CR34", category: "Compressor", tags: ["copeland", "reciprocating", "3 ton"], description: "Copeland CR 34 reciprocating compressor.", images: SHARED_IMAGES },
  { name: "Copeland CR 42 (3.5 Ton Reciprocating)", slug: "copeland-cr-42", url: "https://www.atlasaircons.com/product/copeland-cr-42/", price: 14500, sku: "COP-CR42", category: "Compressor", tags: ["copeland", "reciprocating", "3.5 ton"], description: "Copeland CR 42 reciprocating compressor.", images: SHARED_IMAGES },
  { name: "Copeland CR 53 (4.5 Ton Reciprocating)", slug: "copeland-cr-53", url: "https://www.atlasaircons.com/product/copeland-cr-53/", price: 17500, sku: "COP-CR53", category: "Compressor", tags: ["copeland", "reciprocating", "4.5 ton"], description: "Copeland CR 53 reciprocating compressor.", images: SHARED_IMAGES },
  { name: "Copeland CR 62 (5 Ton Reciprocating)", slug: "copeland-cr-62", url: "https://www.atlasaircons.com/product/copeland-cr-62/", price: 19500, sku: "COP-CR62", category: "Compressor", tags: ["copeland", "reciprocating", "5 ton"], description: "Copeland CR 62 reciprocating compressor.", images: SHARED_IMAGES },
  { name: "Copeland CR 72 (5.5 Ton Reciprocating)", slug: "copeland-cr-72", url: "https://www.atlasaircons.com/product/copeland-cr-72/", price: 21500, sku: "COP-CR72", category: "Compressor", tags: ["copeland", "reciprocating", "5.5 ton"], description: "Copeland CR 72 reciprocating compressor, 5.5 Ton.", images: SHARED_IMAGES },
  // Other Emerson Models
  { name: "Emerson ZB 15 (2 Ton Low Temp)", slug: "emerson-zb-15", url: "https://www.atlasaircons.com/product/emerson-zb-15/", price: 12500, sku: "EMR-ZB15", category: "Compressor", tags: ["emerson", "scroll", "low temp"], description: "Emerson ZB 15 low-temperature scroll compressor.", images: SHARED_IMAGES },
  { name: "Emerson ZB 21 (3 Ton Low Temp)", slug: "emerson-zb-21", url: "https://www.atlasaircons.com/product/emerson-zb-21/", price: 15500, sku: "EMR-ZB21", category: "Compressor", tags: ["emerson", "scroll", "low temp"], description: "Emerson ZB 21 low-temperature scroll compressor.", images: SHARED_IMAGES },
  { name: "Emerson ZB 30 (4 Ton Low Temp)", slug: "emerson-zb-30", url: "https://www.atlasaircons.com/product/emerson-zb-30/", price: 18500, sku: "EMR-ZB30", category: "Compressor", tags: ["emerson", "scroll", "low temp"], description: "Emerson ZB 30 low-temperature scroll compressor.", images: SHARED_IMAGES },
  { name: "Emerson ZB 38 (5 Ton Low Temp)", slug: "emerson-zb-38", url: "https://www.atlasaircons.com/product/emerson-zb-38/", price: 21500, sku: "EMR-ZB38", category: "Compressor", tags: ["emerson", "scroll", "low temp"], description: "Emerson ZB 38 low-temperature scroll compressor.", images: SHARED_IMAGES },
  { name: "Emerson ZB 45 (6 Ton Low Temp)", slug: "emerson-zb-45", url: "https://www.atlasaircons.com/product/emerson-zb-45/", price: 24500, sku: "EMR-ZB45", category: "Compressor", tags: ["emerson", "scroll", "low temp"], description: "Emerson ZB 45 low-temperature scroll compressor.", images: SHARED_IMAGES },
  { name: "Emerson ZF 09 (0.75 Ton)", slug: "emerson-zf-09", url: "https://www.atlasaircons.com/product/emerson-zf-09/", price: 8500, sku: "EMR-ZF09", category: "Compressor", tags: ["emerson", "scroll", "0.75 ton"], description: "Emerson ZF 09 scroll compressor, 0.75 Ton.", images: SHARED_IMAGES },
  { name: "Emerson ZF 13 (1 Ton)", slug: "emerson-zf-13", url: "https://www.atlasaircons.com/product/emerson-zf-13/", price: 9500, sku: "EMR-ZF13", category: "Compressor", tags: ["emerson", "scroll", "1 ton"], description: "Emerson ZF 13 scroll compressor, 1 Ton.", images: SHARED_IMAGES },
];

// Other brand compressors (GMC, Hitachi, LG, Tecumseh — 8 total)
export const otherCompressors: Product[] = [
  { name: "GMC Compressor (5 Ton)", slug: "gmc-compressor-5-ton", url: "https://www.atlasaircons.com/product/gmc-compressor-5-ton/", price: 18500, sku: "GMC-5T", category: "Compressor", tags: ["gmc", "5 ton"], description: "GMC compressor, 5 Ton capacity.", images: SHARED_IMAGES },
  { name: "Hitachi Scroll Compressor (3 Ton)", slug: "hitachi-scroll-3-ton", url: "https://www.atlasaircons.com/product/hitachi-scroll-3-ton/", price: 15500, sku: "HIT-3T", category: "Compressor", tags: ["hitachi", "scroll", "3 ton"], description: "Hitachi scroll compressor, 3 Ton.", images: SHARED_IMAGES },
  { name: "Hitachi Scroll Compressor (5 Ton)", slug: "hitachi-scroll-5-ton", url: "https://www.atlasaircons.com/product/hitachi-scroll-5-ton/", price: 22500, sku: "HIT-5T", category: "Compressor", tags: ["hitachi", "scroll", "5 ton"], description: "Hitachi scroll compressor, 5 Ton.", images: SHARED_IMAGES },
  { name: "LG Rotary Compressor (1 Ton)", slug: "lg-rotary-1-ton", url: "https://www.atlasaircons.com/product/lg-rotary-1-ton/", price: 6500, sku: "LG-1T", category: "Compressor", tags: ["lg", "rotary", "1 ton"], description: "LG rotary compressor, 1 Ton.", images: SHARED_IMAGES },
  { name: "LG Rotary Compressor (1.5 Ton)", slug: "lg-rotary-1-5-ton", url: "https://www.atlasaircons.com/product/lg-rotary-1-5-ton/", price: 7500, sku: "LG-1.5T", category: "Compressor", tags: ["lg", "rotary", "1.5 ton"], description: "LG rotary compressor, 1.5 Ton.", images: SHARED_IMAGES },
  { name: "LG Rotary Compressor (2 Ton)", slug: "lg-rotary-2-ton", url: "https://www.atlasaircons.com/product/lg-rotary-2-ton/", price: 8500, sku: "LG-2T", category: "Compressor", tags: ["lg", "rotary", "2 ton"], description: "LG rotary compressor, 2 Ton.", images: SHARED_IMAGES },
  { name: "Tecumseh Compressor (1.5 Ton)", slug: "tecumseh-1-5-ton", url: "https://www.atlasaircons.com/product/tecumseh-1-5-ton/", price: 7500, sku: "TEC-1.5T", category: "Compressor", tags: ["tecumseh", "1.5 ton"], description: "Tecumseh hermetic compressor, 1.5 Ton.", images: SHARED_IMAGES },
  { name: "Tecumseh Compressor (3 Ton)", slug: "tecumseh-3-ton", url: "https://www.atlasaircons.com/product/tecumseh-3-ton/", price: 12500, sku: "TEC-3T", category: "Compressor", tags: ["tecumseh", "3 ton"], description: "Tecumseh hermetic compressor, 3 Ton.", images: SHARED_IMAGES },
];

// ============================================================
// CAPACITOR PRODUCTS (34)
// Category URL: /product-category/capacitors/
// Range: ₹99 - ₹720
// ============================================================
export const capacitorProducts: Product[] = [
  { name: "AC Capacitor 1.5 MFD", slug: "ac-capacitor-1-5-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-1-5-mfd/", price: 99, sku: "CAP-1.5", category: "Capacitor", description: "1.5 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 2.5 MFD", slug: "ac-capacitor-2-5-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-2-5-mfd/", price: 110, sku: "CAP-2.5", category: "Capacitor", description: "2.5 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 3 MFD", slug: "ac-capacitor-3-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-3-mfd/", price: 120, sku: "CAP-3", category: "Capacitor", description: "3 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 4 MFD", slug: "ac-capacitor-4-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-4-mfd/", price: 130, sku: "CAP-4", category: "Capacitor", description: "4 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 5 MFD", slug: "ac-capacitor-5-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-5-mfd/", price: 140, sku: "CAP-5", category: "Capacitor", description: "5 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 6 MFD", slug: "ac-capacitor-6-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-6-mfd/", price: 150, sku: "CAP-6", category: "Capacitor", description: "6 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 8 MFD", slug: "ac-capacitor-8-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-8-mfd/", price: 160, sku: "CAP-8", category: "Capacitor", description: "8 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 10 MFD", slug: "ac-capacitor-10-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-10-mfd/", price: 170, sku: "CAP-10", category: "Capacitor", description: "10 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 12 MFD", slug: "ac-capacitor-12-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-12-mfd/", price: 185, sku: "CAP-12", category: "Capacitor", description: "12 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 15 MFD", slug: "ac-capacitor-15-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-15-mfd/", price: 199, sku: "CAP-15", category: "Capacitor", description: "15 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 16 MFD", slug: "ac-capacitor-16-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-16-mfd/", price: 210, sku: "CAP-16", category: "Capacitor", description: "16 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 20 MFD", slug: "ac-capacitor-20-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-20-mfd/", price: 230, sku: "CAP-20", category: "Capacitor", description: "20 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 25 MFD", slug: "ac-capacitor-25-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-25-mfd/", price: 250, sku: "CAP-25", category: "Capacitor", description: "25 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 30 MFD", slug: "ac-capacitor-30-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-30-mfd/", price: 280, sku: "CAP-30", category: "Capacitor", description: "30 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 35 MFD", slug: "ac-capacitor-35-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-35-mfd/", price: 299, sku: "CAP-35", category: "Capacitor", description: "35 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 40 MFD", slug: "ac-capacitor-40-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-40-mfd/", price: 320, sku: "CAP-40", category: "Capacitor", description: "40 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 45 MFD", slug: "ac-capacitor-45-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-45-mfd/", price: 350, sku: "CAP-45", category: "Capacitor", description: "45 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 50 MFD", slug: "ac-capacitor-50-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-50-mfd/", price: 380, sku: "CAP-50", category: "Capacitor", description: "50 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 55 MFD", slug: "ac-capacitor-55-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-55-mfd/", price: 399, sku: "CAP-55", category: "Capacitor", description: "55 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 60 MFD", slug: "ac-capacitor-60-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-60-mfd/", price: 420, sku: "CAP-60", category: "Capacitor", description: "60 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 65 MFD", slug: "ac-capacitor-65-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-65-mfd/", price: 440, sku: "CAP-65", category: "Capacitor", description: "65 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 70 MFD", slug: "ac-capacitor-70-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-70-mfd/", price: 460, sku: "CAP-70", category: "Capacitor", description: "70 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 75 MFD", slug: "ac-capacitor-75-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-75-mfd/", price: 480, sku: "CAP-75", category: "Capacitor", description: "75 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Capacitor 80 MFD", slug: "ac-capacitor-80-mfd", url: "https://www.atlasaircons.com/product/ac-capacitor-80-mfd/", price: 499, sku: "CAP-80", category: "Capacitor", description: "80 MFD AC run capacitor.", images: SHARED_IMAGES },
  { name: "AC Dual Capacitor 25+5 MFD", slug: "ac-dual-capacitor-25-5", url: "https://www.atlasaircons.com/product/ac-dual-capacitor-25-5/", price: 350, sku: "CAP-D25-5", category: "Capacitor", description: "Dual run capacitor 25+5 MFD.", images: SHARED_IMAGES },
  { name: "AC Dual Capacitor 30+5 MFD", slug: "ac-dual-capacitor-30-5", url: "https://www.atlasaircons.com/product/ac-dual-capacitor-30-5/", price: 370, sku: "CAP-D30-5", category: "Capacitor", description: "Dual run capacitor 30+5 MFD.", images: SHARED_IMAGES },
  { name: "AC Dual Capacitor 35+5 MFD", slug: "ac-dual-capacitor-35-5", url: "https://www.atlasaircons.com/product/ac-dual-capacitor-35-5/", price: 399, sku: "CAP-D35-5", category: "Capacitor", description: "Dual run capacitor 35+5 MFD.", images: SHARED_IMAGES },
  { name: "AC Dual Capacitor 40+5 MFD", slug: "ac-dual-capacitor-40-5", url: "https://www.atlasaircons.com/product/ac-dual-capacitor-40-5/", price: 420, sku: "CAP-D40-5", category: "Capacitor", description: "Dual run capacitor 40+5 MFD.", images: SHARED_IMAGES },
  { name: "AC Dual Capacitor 45+5 MFD", slug: "ac-dual-capacitor-45-5", url: "https://www.atlasaircons.com/product/ac-dual-capacitor-45-5/", price: 450, sku: "CAP-D45-5", category: "Capacitor", description: "Dual run capacitor 45+5 MFD.", images: SHARED_IMAGES },
  { name: "AC Start Capacitor 80-100 MFD", slug: "ac-start-capacitor-80-100", url: "https://www.atlasaircons.com/product/ac-start-capacitor-80-100/", price: 520, sku: "CAP-S80", category: "Capacitor", description: "Start capacitor 80-100 MFD.", images: SHARED_IMAGES },
  { name: "AC Start Capacitor 100-125 MFD", slug: "ac-start-capacitor-100-125", url: "https://www.atlasaircons.com/product/ac-start-capacitor-100-125/", price: 550, sku: "CAP-S100", category: "Capacitor", description: "Start capacitor 100-125 MFD.", images: SHARED_IMAGES },
  { name: "AC Start Capacitor 145-175 MFD", slug: "ac-start-capacitor-145-175", url: "https://www.atlasaircons.com/product/ac-start-capacitor-145-175/", price: 599, sku: "CAP-S145", category: "Capacitor", description: "Start capacitor 145-175 MFD.", images: SHARED_IMAGES },
  { name: "AC Start Capacitor 200-250 MFD", slug: "ac-start-capacitor-200-250", url: "https://www.atlasaircons.com/product/ac-start-capacitor-200-250/", price: 650, sku: "CAP-S200", category: "Capacitor", description: "Start capacitor 200-250 MFD.", images: SHARED_IMAGES },
  { name: "AC Start Capacitor 300-360 MFD", slug: "ac-start-capacitor-300-360", url: "https://www.atlasaircons.com/product/ac-start-capacitor-300-360/", price: 720, sku: "CAP-S300", category: "Capacitor", description: "Start capacitor 300-360 MFD.", images: SHARED_IMAGES },
];

// ============================================================
// COIL PRODUCTS (12)
// Category URL: /product-category/coils/
// Range: ₹4,500 - ₹16,200
// ============================================================
export const coilProducts: Product[] = [
  { name: "Cooling Coil 1 Ton", slug: "cooling-coil-1-ton", url: "https://www.atlasaircons.com/product/cooling-coil-1-ton/", price: 4500, sku: "COIL-1T", category: "Coil", description: "Copper cooling coil for 1 Ton AC.", images: SHARED_IMAGES },
  { name: "Cooling Coil 1.5 Ton", slug: "cooling-coil-1-5-ton", url: "https://www.atlasaircons.com/product/cooling-coil-1-5-ton/", price: 5200, sku: "COIL-1.5T", category: "Coil", description: "Copper cooling coil for 1.5 Ton AC.", images: SHARED_IMAGES },
  { name: "Cooling Coil 2 Ton", slug: "cooling-coil-2-ton", url: "https://www.atlasaircons.com/product/cooling-coil-2-ton/", price: 6500, sku: "COIL-2T", category: "Coil", description: "Copper cooling coil for 2 Ton AC.", images: SHARED_IMAGES },
  { name: "Condenser Coil 1 Ton", slug: "condenser-coil-1-ton", url: "https://www.atlasaircons.com/product/condenser-coil-1-ton/", price: 5500, sku: "CCOIL-1T", category: "Coil", description: "Condenser coil for 1 Ton AC outdoor unit.", images: SHARED_IMAGES },
  { name: "Condenser Coil 1.5 Ton", slug: "condenser-coil-1-5-ton", url: "https://www.atlasaircons.com/product/condenser-coil-1-5-ton/", price: 6800, sku: "CCOIL-1.5T", category: "Coil", description: "Condenser coil for 1.5 Ton AC.", images: SHARED_IMAGES },
  { name: "Condenser Coil 2 Ton", slug: "condenser-coil-2-ton", url: "https://www.atlasaircons.com/product/condenser-coil-2-ton/", price: 8200, sku: "CCOIL-2T", category: "Coil", description: "Condenser coil for 2 Ton AC.", images: SHARED_IMAGES },
  { name: "Evaporator Coil 1 Ton", slug: "evaporator-coil-1-ton", url: "https://www.atlasaircons.com/product/evaporator-coil-1-ton/", price: 5800, sku: "ECOIL-1T", category: "Coil", description: "Evaporator coil for 1 Ton AC indoor unit.", images: SHARED_IMAGES },
  { name: "Evaporator Coil 1.5 Ton", slug: "evaporator-coil-1-5-ton", url: "https://www.atlasaircons.com/product/evaporator-coil-1-5-ton/", price: 7200, sku: "ECOIL-1.5T", category: "Coil", description: "Evaporator coil for 1.5 Ton AC.", images: SHARED_IMAGES },
  { name: "Evaporator Coil 2 Ton", slug: "evaporator-coil-2-ton", url: "https://www.atlasaircons.com/product/evaporator-coil-2-ton/", price: 8800, sku: "ECOIL-2T", category: "Coil", description: "Evaporator coil for 2 Ton AC.", images: SHARED_IMAGES },
  { name: "Heating Coil 1 Ton", slug: "heating-coil-1-ton", url: "https://www.atlasaircons.com/product/heating-coil-1-ton/", price: 6500, sku: "HCOIL-1T", category: "Coil", description: "Heating coil for 1 Ton heat pump AC.", images: SHARED_IMAGES },
  { name: "Heating Coil 1.5 Ton", slug: "heating-coil-1-5-ton", url: "https://www.atlasaircons.com/product/heating-coil-1-5-ton/", price: 8500, sku: "HCOIL-1.5T", category: "Coil", description: "Heating coil for 1.5 Ton heat pump AC.", images: SHARED_IMAGES },
  { name: "Heating Coil 2 Ton", slug: "heating-coil-2-ton", url: "https://www.atlasaircons.com/product/heating-coil-2-ton/", price: 16200, sku: "HCOIL-2T", category: "Coil", description: "Heating coil for 2 Ton heat pump AC.", images: SHARED_IMAGES },
];

// ============================================================
// COPPER PIPE PRODUCTS (10)
// Category URL: /product-category/copper-pipe/
// Range: ₹2,899 - ₹25,200
// ============================================================
export const copperPipeProducts: Product[] = [
  { name: "Copper Pipe 1/4 inch (15m)", slug: "copper-pipe-1-4-inch-15m", url: "https://www.atlasaircons.com/product/copper-pipe-1-4-inch-15m/", price: 2899, sku: "CPIPE-1/4", category: "Copper Pipe", description: "1/4 inch copper pipe coil, 15 meter.", images: SHARED_IMAGES },
  { name: "Copper Pipe 3/8 inch (15m)", slug: "copper-pipe-3-8-inch-15m", url: "https://www.atlasaircons.com/product/copper-pipe-3-8-inch-15m/", price: 4200, sku: "CPIPE-3/8", category: "Copper Pipe", description: "3/8 inch copper pipe coil, 15 meter.", images: SHARED_IMAGES },
  { name: "Copper Pipe 1/2 inch (15m)", slug: "copper-pipe-1-2-inch-15m", url: "https://www.atlasaircons.com/product/copper-pipe-1-2-inch-15m/", price: 5800, sku: "CPIPE-1/2", category: "Copper Pipe", description: "1/2 inch copper pipe coil, 15 meter.", images: SHARED_IMAGES },
  { name: "Copper Pipe 5/8 inch (15m)", slug: "copper-pipe-5-8-inch-15m", url: "https://www.atlasaircons.com/product/copper-pipe-5-8-inch-15m/", price: 7500, sku: "CPIPE-5/8", category: "Copper Pipe", description: "5/8 inch copper pipe coil, 15 meter.", images: SHARED_IMAGES },
  { name: "Copper Pipe 3/4 inch (15m)", slug: "copper-pipe-3-4-inch-15m", url: "https://www.atlasaircons.com/product/copper-pipe-3-4-inch-15m/", price: 9200, sku: "CPIPE-3/4", category: "Copper Pipe", description: "3/4 inch copper pipe coil, 15 meter.", images: SHARED_IMAGES },
  { name: "Copper Pipe 7/8 inch (15m)", slug: "copper-pipe-7-8-inch-15m", url: "https://www.atlasaircons.com/product/copper-pipe-7-8-inch-15m/", price: 12500, sku: "CPIPE-7/8", category: "Copper Pipe", description: "7/8 inch copper pipe coil, 15 meter.", images: SHARED_IMAGES },
  { name: "Copper Pipe 1-1/8 inch (15m)", slug: "copper-pipe-1-1-8-inch-15m", url: "https://www.atlasaircons.com/product/copper-pipe-1-1-8-inch-15m/", price: 16500, sku: "CPIPE-1-1/8", category: "Copper Pipe", description: "1-1/8 inch copper pipe coil, 15 meter.", images: SHARED_IMAGES },
  { name: "Copper Pipe 1-3/8 inch (15m)", slug: "copper-pipe-1-3-8-inch-15m", url: "https://www.atlasaircons.com/product/copper-pipe-1-3-8-inch-15m/", price: 19800, sku: "CPIPE-1-3/8", category: "Copper Pipe", description: "1-3/8 inch copper pipe coil, 15 meter.", images: SHARED_IMAGES },
  { name: "Copper Pipe 1-5/8 inch (15m)", slug: "copper-pipe-1-5-8-inch-15m", url: "https://www.atlasaircons.com/product/copper-pipe-1-5-8-inch-15m/", price: 22500, sku: "CPIPE-1-5/8", category: "Copper Pipe", description: "1-5/8 inch copper pipe coil, 15 meter.", images: SHARED_IMAGES },
  { name: "Copper Pipe 2-1/8 inch (15m)", slug: "copper-pipe-2-1-8-inch-15m", url: "https://www.atlasaircons.com/product/copper-pipe-2-1-8-inch-15m/", price: 25200, sku: "CPIPE-2-1/8", category: "Copper Pipe", description: "2-1/8 inch copper pipe coil, 15 meter.", images: SHARED_IMAGES },
];

// ============================================================
// ALL PRODUCTS COMBINED
// ============================================================
export const allProducts: Product[] = [
  ...cleaningProducts,
  ...sparePartsProducts,
  ...airCurtainProducts,
  ...atlasAirconProducts,
  ...danfossCompressors,
  ...emersonCompressors,
  ...otherCompressors,
  ...capacitorProducts,
  ...coilProducts,
  ...copperPipeProducts,
];

// Product count summary
export const productCategorySummary = {
  "Cleaning": cleaningProducts.length,
  "Spare Parts": sparePartsProducts.length,
  "Air Curtains": airCurtainProducts.length,
  "Atlas Aircon Products": atlasAirconProducts.length,
  "Compressors (Danfoss)": danfossCompressors.length,
  "Compressors (Emerson/Copeland)": emersonCompressors.length,
  "Compressors (Other)": otherCompressors.length,
  "Capacitors": capacitorProducts.length,
  "Coils": coilProducts.length,
  "Copper Pipes": copperPipeProducts.length,
  "TOTAL": allProducts.length,
};
