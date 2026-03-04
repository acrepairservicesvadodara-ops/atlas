#!/usr/bin/env python3
import re, html, json, os

def unescape(s):
    return html.unescape(s).strip() if s else ""

pages = [
    ("window-ac-vadodara", "Window AC - Vadodara"),
    ("split-ac-vadodara", "Split AC - Vadodara"),
    ("panel-ac", "Panel AC"),
    ("industrial-chiller", "Industrial Chiller"),
    ("cold-storage", "Cold Storage"),
    ("vrf-vrv-system", "VRF VRV System"),
    ("ac-installation", "AC Installation"),
    ("window-ac-ahmedabad", "Window AC - Ahmedabad"),
    ("window-ac-surat", "Window AC - Surat"),
]

results = []
for slug, label in pages:
    fpath = f"/tmp/{slug}.html"
    if not os.path.exists(fpath):
        results.append({"slug": slug, "label": label, "error": "File not found"})
        continue
    with open(fpath, "r", encoding="utf-8", errors="replace") as f:
        raw = f.read()
    
    # WP outer meta title
    wp_title = ""
    m = re.search(r'<title>([^<]+)</title>', raw[:3000])
    if m:
        wp_title = unescape(m.group(1))
    
    # WP outer meta description
    wp_desc = ""
    m = re.search(r'<meta\s+name="description"\s+content="([^"]*)"', raw[:3000])
    if m:
        wp_desc = unescape(m.group(1))
    
    # Inner page title (second <title> inside embedded HTML)
    inner_title = ""
    titles = re.findall(r'<title>(.*?)</title>', raw, re.DOTALL)
    if len(titles) > 1:
        inner_title = unescape(re.sub(r'<[^>]+>', '', titles[1]))
    
    # Inner meta description
    inner_desc = ""
    descs = re.findall(r'<meta\s+name="description"\s+content="([^"]*)"', raw)
    if len(descs) > 1:
        inner_desc = unescape(descs[1])
    
    # Inner meta keywords
    inner_kw = ""
    kws = re.findall(r'<meta\s+name="keywords"\s+content="([^"]*)"', raw)
    if kws:
        inner_kw = unescape(kws[0])
    
    # OG title
    og_title = ""
    m = re.search(r'<meta\s+property="og:title"\s+content="([^"]*)"', raw)
    if m:
        og_title = unescape(m.group(1))
    
    # Canonical
    canonical = ""
    canons = re.findall(r'<link\s+rel="canonical"\s+href="([^"]*)"', raw)
    
    # H1
    h1s = [unescape(re.sub(r'<[^>]+>', '', h)) for h in re.findall(r'<h1[^>]*>(.*?)</h1>', raw, re.DOTALL)]
    
    # H2
    h2s = [unescape(re.sub(r'<[^>]+>', '', h)) for h in re.findall(r'<h2[^>]*>(.*?)</h2>', raw, re.DOTALL)]
    
    # H3
    h3s = [unescape(re.sub(r'<[^>]+>', '', h)) for h in re.findall(r'<h3[^>]*>(.*?)</h3>', raw, re.DOTALL)]
    
    # Images (src from <img> tags)
    imgs = list(set(re.findall(r'<img[^>]+src="([^"]+)"', raw)))
    imgs = [i for i in imgs if 'emoji' not in i and 'data:' not in i]
    
    # Hero section text
    hero_text = ""
    m = re.search(r'class="hero-bg[^"]*"[^>]*>(.*?)</section>', raw, re.DOTALL)
    if m:
        hero_text = unescape(re.sub(r'<[^>]+>', ' ', m.group(1)))
        hero_text = re.sub(r'\s+', ' ', hero_text).strip()[:500]
    
    # Hero background image
    hero_bg = ""
    m = re.search(r"\.hero-bg\s*\{[^}]*url\('([^']+)'\)", raw)
    if m:
        hero_bg = m.group(1)
    
    # Schema JSON-LD
    schemas = re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', raw, re.DOTALL)
    schema_types = []
    for s in schemas:
        try:
            d = json.loads(s)
            schema_types.append(d.get("@type", "unknown"))
        except:
            pass
    
    # Preloaded images
    preloads = re.findall(r'<link\s+rel="preload"\s+as="image"\s+href="([^"]+)"', raw)
    
    # Key paragraphs from the inner body
    paras = re.findall(r'<p[^>]*>(.*?)</p>', raw, re.DOTALL)
    clean_paras = []
    for p in paras:
        t = unescape(re.sub(r'<[^>]+>', '', p)).strip()
        if len(t) > 30 and 'atlas command' not in t.lower() and 'access denied' not in t.lower():
            clean_paras.append(t[:300])
    
    results.append({
        "slug": slug,
        "label": label,
        "wp_title": wp_title,
        "wp_meta_desc": wp_desc,
        "inner_title": inner_title,
        "inner_meta_desc": inner_desc,
        "inner_keywords": inner_kw,
        "og_title": og_title,
        "canonicals": canons,
        "h1": h1s,
        "h2": h2s,
        "h3": h3s,
        "hero_text": hero_text,
        "hero_bg_image": hero_bg,
        "preloaded_images": preloads,
        "all_images": sorted(imgs),
        "schema_types": schema_types,
        "key_paragraphs": clean_paras[:12],
    })

print(json.dumps(results, indent=2, ensure_ascii=False))
