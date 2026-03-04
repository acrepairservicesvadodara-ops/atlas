# Atlas Aircon Service Pages — Crawl Report

**Date:** 3 March 2026  
**Source:** https://www.atlasaircons.com/services/*  
**Pages Crawled:** 9

---

## CRITICAL FINDING

**All 9 service page URLs serve the IDENTICAL content.** The WordPress site uses a catch-all route for `/services/*` that renders the same homepage template regardless of the slug. The only differences between downloaded files are Cloudflare challenge tokens (timestamp-based).

This means **there are NO service-specific or city-specific templates on the live site**. Every URL under `/services/` shows the same generic homepage.

### Pages Verified Identical:
| URL Slug | Expected Content | Actual Content |
|---|---|---|
| `window-ac-vadodara` | Window AC for Vadodara | Homepage |
| `split-ac-vadodara` | Split AC for Vadodara | Homepage |
| `panel-ac` | Panel AC service | Homepage |
| `industrial-chiller` | Industrial Chiller | Homepage |
| `cold-storage` | Cold Storage | Homepage |
| `vrf-vrv-system` | VRF/VRV System | Homepage |
| `ac-installation` | AC Installation | Homepage |
| `window-ac-ahmedabad` | Window AC for Ahmedabad | Homepage |
| `window-ac-surat` | Window AC for Surat | Homepage |

---

## SINGLE TEMPLATE: Extracted Content

Since all pages render the same content, here is the ONE template data:

### Meta Tags

| Field | Value |
|---|---|
| **WP `<title>`** | `Trusted AC Service Vadodara \| Emergency Ac Repair Vadodara` |
| **Inner `<title>`** | `AC Service & Repair in Vadodara \| Installation & Gas Filling – Atlas Aircon` |
| **Meta Description (WP)** | Looking for the best AC repair vadodara, AC service vadodara, or AC installation in Vadodara? Atlas Aircon offers fast, reliable, and affordable cooling solutions with 24/7 support. Contact us for ac service vadodara free quote. |
| **Meta Description (Inner)** | Top-rated AC repair in Vadodara. Expert AC service, split AC installation, and chiller maintenance in Alkapuri, Makarpura, and all local areas. 24/7 Support. |
| **Meta Keywords** | ac repair in vadodara, ac service in vadodara, ac installation in vadodara, window ac service, split ac repair, hvac technician vadodara, chiller plant maintenance |
| **OG Title** | AC Repair In Vadodara, AC Installation, Repair & AMC Service |
| **OG Description** | AC Repair in Vadodara, Air Conditioner and Refrigerator Repair Service Center, We Provide Best AC Repair, AC Installation, and AC AMC in Vadodara, Gujarat. |
| **Canonical** | `https://www.atlasaircons.com/` (all pages point to homepage) |
| **OG Image** | `https://www.atlasaircons.com/wp-admin/admin-ajax.php?action=rank_math_overlay_thumb&id=4227&type=gif&hash=252a826dca75ae3483d1ee0e9f4d6aeb` |
| **Schema Type** | `Place` |

### Heading Structure

**H1:**
- `Mastering the Art of Residential, Commercial & Industrial Cooling`

**H2 (Section headings):**
1. `Vadodara's Most Trusted Cooling Experts` — About section
2. `Core Services` — Services grid
3. `Industrial Diagnostics` — Calculators section
4. `Genuine Spare Parts` — Atlas Store section
5. `Instant AI Troubleshooting` — Diagnostic tool section
6. `Internal Engineering Dispatch & Log` — CTA section
7. `Wait! Is Your Equipment Still Down?` — Exit-intent popup

**H3 (Sub-headings):**
1. `Window AC Service`
2. `Split AC Repair`
3. `Chiller Plants`
4. `Live Operations in Vadodara`
5. `Tonnage Calculator`
6. `Bill Estimator`
7. `Inverter PCB Board`
8. `Outdoor Fan Motor`
9. `AI System Diagnostic`
10. `Contact HQ`
11. `Company` (footer)
12. `Core Services` (footer)
13. `Headquarters` (footer)
14. `Expert Help` (popup)

---

### Page Sections (Full Structure)

#### 1. HEADER / NAV
- Logo: `cropped-AtlasAircon-Logo.png`
- Nav links: Home, SERVICES, About us, 📚 Atlas Wiki, ⚠️ Fault Codes, Shop, BLOG, CONTACT, Privacy Policy, Price List, ⚡ Daily Ops
- CTA: Phone `+91 97272 57141`

#### 2. HERO SECTION (`hero-bg`)
- **Badge:** "Since 2017 • Vadodara's #1"
- **H1:** "Mastering the Art of Residential, Commercial & Industrial Cooling"
- **Subtext:** "From **Window AC Service Vadodara** to Heavy Chiller Plants. We fix what others can't. 24/7 Emergency Support."
- **CTAs:**
  - WhatsApp Tech Support → `https://wa.me/919727257141`
  - Find Your Area → `#locations`
- **Background Image:** `https://www.atlasaircons.com/wp-content/uploads/2018/02/Installation-Process-of-Window-Air-conditioner-by-Atlas-Aircon-AC-Repair-Serivce-Vadodara.jpg`

#### 3. ABOUT SECTION (`#about`)
- **H2:** "Vadodara's Most Trusted Cooling Experts"
- **Text:** "Atlas Aircon isn't just a repair shop; we are an engineering firm dedicated to climate control. Whether it's a Window AC repair in Alkapuri or a Chiller Plant maintenance in Makarpura GIDC, we bring military-grade precision to every job."
- **Stats Grid:**
  - 5k+ Repairs
  - 90 Min Response
  - 4.9 Rating
- **Image:** `Window-AC-Installation-and-Repairing.webp`
- **Badge:** "Certified Experts — ISO 9001:2015 Compliant"

#### 4. CORE SERVICES SECTION (`#services`)
- **H2:** "Core Services"
- **3-column grid:**
  1. **Window AC Service** (icon: `fa-wind`) — "Deep jet cleaning, filter wash, and anti-rust coating for longevity." → `/window-ac-service-vadodara`
  2. **Split AC Repair** (icon: `fa-tools`) — "Fixing water leakage, gas charging, and PCB repairs on site." → `/split-ac-service-vadodara`
  3. **Chiller Plants** (icon: `fa-industry`) — "Industrial cooling solutions for GIDC factories and large offices." → `/chiller-repair-services-vadodara`

- **Live Operations in Vadodara** — Recent verified jobs from `/hvac-work/` posts

#### 5. CALCULATORS / ENGINEERING TOOLS (`#calculators`)
- **H2:** "Industrial Diagnostics"
- **Tonnage Calculator** — Inputs: Length (ft), Width (ft) → outputs tonnage
- **Bill Estimator** — Inputs: AC Type (1.5T Inverter 5-Star / Non-Inverter), Hours/Day, Rate/Unit → monthly cost

#### 6. SPARE PARTS / ATLAS STORE
- **H2:** "Genuine Spare Parts"
- Products:
  1. **Inverter PCB Board** — Compatible with LG/Samsung — ₹4,500 (HOT badge)
  2. **Outdoor Fan Motor** — Heavy Duty Copper Winding — ₹2,200

#### 7. AI TROUBLESHOOTING
- **H2:** "Instant AI Troubleshooting"
- **Symptoms:** Blowing Warm Air, Water Leaking, Strange Noises, Power Tripping
- Results lead to WhatsApp CTA

#### 8. DISPATCH SECTION
- **H2:** "Internal Engineering Dispatch & Log"
- Faux "Access Denied" locked section

#### 9. FOOTER
- **Company info:** Atlas Aircon, Vadodara's premier cooling engineering firm
- **Contact HQ:** Makarpura GIDC, Vadodara, Gujarat 390010 / +91 97272 57141
- **Also footer:** Sayajigunj, Vadodara, Gujarat – 390005 / atlasaircon1@gmail.com
- **Service Territory Matrix:** Vadodara | Ahmedabad | Surat | Bharuch | Anand | Rajkot | Gandhidham
- **GIDC Hubs:** Makarpura • Nandesari • Savli • Dahej • Ankleshwar • Halol
- **Owner:** Mehfuz Shahid (20+ Years Exp)
- **Footer service links:**
  - Industrial Chillers → `/services/industrial-chiller/`
  - VRF / VRV Systems → `/services/vrf-vrv-system/`
  - Cold Storage Rooms → `/services/cold-storage/`
  - Panel AC Repair → `/services/panel-ac/`
  - Commercial Installation → `/services/ac-installation/`

#### 10. POPUPS & FLOATING ELEMENTS
- **Exit-intent popup:** "Wait! Is Your Equipment Still Down?" — ₹299 inspection fee waiver offer
- **Radar toast:** Live dispatch notifications
- **Side button:** "🟢 LIVE SUPPORT ONLINE"
- **Mobile sticky bar:** Call Engineer + WhatsApp
- **Engineer request popup:** Form with Name, City/Work Site, Service Type

---

### Images Used

| Image | Usage |
|---|---|
| `wp-content/uploads/2019/03/cropped-AtlasAircon-Logo.png` | Logo (header, footer) |
| `wp-content/uploads/2019/03/AtlasAircon-Logo.png` | Footer logo (alternate) |
| `wp-content/uploads/2018/02/Installation-Process-of-Window-Air-conditioner-by-Atlas-Aircon-AC-Repair-Serivce-Vadodara.jpg` | Hero background |
| `wp-content/uploads/2023/02/Window-AC-Installation-and-Repairing.webp` | About section image |

---

### Technical Notes

- **WordPress Theme:** `atlas-aircon-2026` (custom)
- **Page ID:** 3154 (WordPress post)
- **Body Class:** `home wp-singular page-template-default page page-id-3154`
- **CSS Framework:** Tailwind CSS (CDN)
- **Icons:** Font Awesome 6.4.0
- **Fonts:** Inter (300, 400, 600, 700, 900)
- **Analytics:** Google Tag Manager `G-MER4RZ5SCW`, Google Ads `AW-11137442967`
- **SEO Plugin:** Rank Math
- **Caching:** Autoptimize
- **CDN:** Cloudflare (challenge platform active)
- **Prefetch:** Speculation Rules API enabled

---

## Implication for Next.js Project

Since the live WordPress site serves the **same homepage for ALL service URLs**, there is **no service-specific content to extract** from the existing site. The Next.js project will need to:

1. Create **unique content templates** per service type (Window AC, Split AC, Panel AC, Industrial Chiller, Cold Storage, VRF/VRV, AC Installation, etc.)
2. Create **city-variant templates** that adapt the service content per city (Vadodara, Ahmedabad, Surat, etc.)
3. Generate proper **unique meta titles, descriptions, H1s, and body content** per page
4. The current homepage template structure (hero → about → services → calculators → store → AI diagnostic → footer) can serve as the **layout shell** for the new pages
