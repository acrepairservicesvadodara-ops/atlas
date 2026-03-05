// ============================================================
// Hitech Aircool Engineers — Master Data Index
// Re-exports all data modules for convenient imports
// ============================================================

// Types
export type {
  ServicePage,
  BlogPost,
  CorePage,
  SiteData,
  ServiceType,
  City,
} from "./types";

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
