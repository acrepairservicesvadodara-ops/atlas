// ============================================================
// Atlas Aircon — Master Data Types
// Generated: 4 March 2026
// Source: https://www.atlasaircons.com (WordPress + WooCommerce)
// Sitemaps: page-sitemap (201), product-sitemap (202), post-sitemap (171)
// ============================================================

export interface Product {
  name: string;
  slug: string;
  url: string;
  price: number | string; // number or "variable" for variable-priced products
  sku: string;
  category: ProductCategory;
  tags?: string[];
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  images: string[];
  lastModified?: string;
}

export type ProductCategory =
  | "Cleaning"
  | "AMC"
  | "Emergency"
  | "Installation"
  | "Compressor"
  | "Capacitor"
  | "Coil"
  | "Copper Pipe"
  | "Air Curtain"
  | "Spare Parts"
  | "Atlas Aircon Products";

export interface ServicePage {
  slug: string;
  url: string;
  serviceType: ServiceType;
  city: City;
  h1: string;
  metaTitle?: string;
  metaDescription?: string;
  hasUniqueContent: boolean;
  lastModified?: string;
  imageCount?: number;
}

export type ServiceType =
  | "window-ac-service"
  | "split-ac-service"
  | "water-cooler-repair-services"
  | "refrigerator-service-center"
  | "refrigerator-repair-services"
  | "panel-ac-service"
  | "package-ac-service"
  | "hvac-repair-services"
  | "ducting-repair-services"
  | "ductable-ac-service"
  | "deep-freezer-repair-services"
  | "cold-room-repair-services"
  | "chiller-repair-services"
  | "central-ac-repair-services"
  | "refrigerated-truck-repair"
  | "other";

export type City =
  | "vadodara"
  | "ahmedabad"
  | "surat"
  | "rajkot"
  | "bharuch"
  | "anand"
  | "kheda"
  | "morbi"
  | "godhra"
  | "rajpipla"
  | "daman"
  | "valsad"
  | "gujarat";

export interface BlogPost {
  slug: string;
  url: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  contentSummary: string;
  hasUniqueContent: boolean;
  readTime?: string;
  lastModified?: string;
  images?: string[];
}

export interface CorePage {
  slug: string;
  url: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  description: string;
  hasUniqueContent: boolean;
}

export interface SiteData {
  products: Product[];
  servicePages: ServicePage[];
  blogPosts: BlogPost[];
  corePages: CorePage[];
  stats: {
    totalProducts: number;
    totalServicePages: number;
    totalBlogPosts: number;
    totalCorePages: number;
    totalURLs: number;
  };
}
