// JSON-LD Structured Data Components for SEO
// Supports: Product, BreadcrumbList, BlogPosting, Service, FAQPage

import { Product } from "@/data/types";

interface BreadcrumbItem {
  name: string;
  url: string;
}

// ── BreadcrumbList Schema ─────────────────────────────────────
export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ── Product Schema ────────────────────────────────────────────
export function ProductSchema({ product }: { product: Product }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.sku,
    image: product.images[0] || "https://atlasaircons.com/og-image.jpg",
    brand: {
      "@type": "Brand",
      name: "Atlas Aircon",
    },
    offers: {
      "@type": "Offer",
      url: `https://atlasaircons.com/product/${product.slug}`,
      priceCurrency: "INR",
      price: typeof product.price === "number" ? product.price : undefined,
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Atlas Aircon",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "120",
      bestRating: "5",
      worstRating: "1",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ── BlogPosting Schema ────────────────────────────────────────
export function BlogPostSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
  readTime,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  readTime?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `https://atlasaircons.com/${slug}`,
    image: image || "https://atlasaircons.com/og-image.jpg",
    datePublished: datePublished || "2025-01-01",
    dateModified: dateModified || datePublished || "2025-01-01",
    author: {
      "@type": "Person",
      name: "Mehfuz Shahid Khan",
      jobTitle: "Founder & Chief Architect",
      url: "https://atlasaircons.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Atlas Aircon",
      logo: {
        "@type": "ImageObject",
        url: "https://atlasaircons.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://atlasaircons.com/${slug}`,
    },
    ...(readTime && { timeRequired: `PT${readTime.replace(/[^0-9]/g, "")}M` }),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ── Service Schema ────────────────────────────────────────────
export function ServiceSchema({
  name,
  description,
  slug,
  areaServed,
}: {
  name: string;
  description: string;
  slug: string;
  areaServed?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://atlasaircons.com/${slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Atlas Aircon",
      telephone: "+919727257141",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sayajigunj",
        addressLocality: "Vadodara",
        addressRegion: "Gujarat",
        postalCode: "390005",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: areaServed || "Vadodara",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${name} Packages`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: `${name} - Basic` },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: `${name} - Premium` },
        },
      ],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ── FAQ Schema ────────────────────────────────────────────────
export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ── ItemList Schema (for category/listing pages) ──────────────
export function ProductListSchema({
  name,
  products,
}: {
  name: string;
  products: Product[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: products.length,
    itemListElement: products.slice(0, 50).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://atlasaircons.com/product/${p.slug}`,
      name: p.name,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
