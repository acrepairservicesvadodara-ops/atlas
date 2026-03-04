// ============================================================
// Atlas Aircon — Master Data Index
// Re-exports all data modules for convenient imports
// ============================================================

// Types
export type {
  Product,
  ServicePage,
  BlogPost,
  CorePage,
  SiteData,
  ProductCategory,
  ServiceType,
  City,
} from "./types";

// Products
export {
  cleaningProducts,
  sparePartsProducts,
  airCurtainProducts,
  atlasAirconProducts,
  danfossCompressors,
  emersonCompressors,
  otherCompressors,
  capacitorProducts,
  coilProducts,
  copperPipeProducts,
  allProducts,
  productCategorySummary,
  SHARED_IMAGES,
} from "./products";

// Service Pages
export {
  cities,
  serviceTypes,
  generateServicePages,
  uniquePages,
  corePages,
  allServicePages,
  servicePageSummary,
} from "./service-pages";

// Blog Posts
export { blogPosts, blogPostSummary } from "./blog-posts";
