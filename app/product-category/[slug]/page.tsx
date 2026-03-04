import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  Shield,
  Award,
  Truck,
  Package,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import {
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
} from "@/data/products";
import { Product } from "@/data/types";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import { ProductListSchema } from "@/components/Schema";

// ── Category config ───────────────────────────────────────────
interface CategoryConfig {
  slug: string;
  name: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  products: Product[];
  subCategories?: { name: string; products: Product[] }[];
}

const categoryMap: Record<string, CategoryConfig> = {
  cleaning: {
    slug: "cleaning",
    name: "Cleaning Services",
    description:
      "Professional AC cleaning, chemical wash, and deep cleaning services for all types of air conditioners. Starting from ₹249.",
    seoTitle:
      "AC Cleaning Services — Chemical Wash & Deep Cleaning | Atlas Aircon",
    seoDescription:
      "Professional AC cleaning services in Vadodara. Power jet wash, chemical wash, deep cleaning for split AC, window AC, cassette AC, duct AC. Starting ₹249. Same-day service.",
    products: cleaningProducts,
  },
  "spare-parts": {
    slug: "spare-parts",
    name: "AC Spare Parts",
    description:
      "Genuine AC spare parts — PCB boards, contactors, stands, capillary tubes, defrost timers, diffusers & more. Fast delivery across Gujarat.",
    seoTitle:
      "AC Spare Parts — PCB, Contactor, Stand, Diffuser | Atlas Aircon",
    seoDescription:
      "Buy genuine AC spare parts online. PCB boards, contactors, AC stands, capillary tubes, defrost timers, diffusers. Best prices in Vadodara & Gujarat. Same-day delivery.",
    products: sparePartsProducts,
  },
  "air-curtains": {
    slug: "air-curtains",
    name: "Air Curtains",
    description:
      "Industrial & commercial air curtains from 2 feet to 12 feet. Custom sizes available. Keep dust, insects & hot air out.",
    seoTitle:
      "Air Curtains — 2ft to 12ft Commercial & Industrial | Atlas Aircon",
    seoDescription:
      "Buy air curtains online — 2 feet to 12 feet sizes for shops, restaurants, warehouses & factories. Custom sizes available. Best prices in Vadodara, Gujarat.",
    products: airCurtainProducts,
  },
  "atlas-aircon": {
    slug: "atlas-aircon",
    name: "Atlas Aircon Products",
    description:
      "Atlas Aircon branded products & services — panel AC, chillers, AHU, cold rooms, compressors, fan motors, air filters, copper coils and more.",
    seoTitle:
      "Atlas Aircon Products — Panel AC, Chiller, AHU, Cold Room | Buy Online",
    seoDescription:
      "Buy Atlas Aircon products online. Panel AC, water chiller, industrial chiller, AHU, cold room, fan motors, PCB boards, copper coils. Best prices in Vadodara.",
    products: atlasAirconProducts,
  },
  compressor: {
    slug: "compressor",
    name: "AC Compressors",
    description:
      "Genuine AC compressors from Danfoss, Copeland/Emerson, Hitachi, LG, Tecumseh & GMC. 1 Ton to 22 Ton capacity. Scroll, reciprocating & rotary types.",
    seoTitle:
      "AC Compressors — Danfoss, Copeland, Emerson, Hitachi, LG | Atlas Aircon",
    seoDescription:
      "Buy AC compressors online — Danfoss, Copeland, Emerson, Hitachi, LG, Tecumseh. Scroll & reciprocating. 1-22 Ton. Best prices in Vadodara, Gujarat. Warranty available.",
    products: [
      ...danfossCompressors,
      ...emersonCompressors,
      ...otherCompressors,
    ],
    subCategories: [
      { name: "Danfoss Compressors", products: danfossCompressors },
      {
        name: "Copeland / Emerson Compressors",
        products: emersonCompressors,
      },
      {
        name: "Other Brands (Hitachi, LG, Tecumseh, GMC)",
        products: otherCompressors,
      },
    ],
  },
  capacitors: {
    slug: "capacitors",
    name: "AC Capacitors",
    description:
      "AC run capacitors, start capacitors & dual capacitors. 1.5 MFD to 300+ MFD. All sizes available with quick delivery.",
    seoTitle:
      "AC Capacitors — Run, Start & Dual Capacitors | Atlas Aircon",
    seoDescription:
      "Buy AC capacitors online. Run capacitors (1.5-80 MFD), dual capacitors (25+5 to 45+5), start capacitors (80-360 MFD). Best prices in Vadodara. Same-day delivery.",
    products: capacitorProducts,
  },
  coils: {
    slug: "coils",
    name: "AC Coils",
    description:
      "Copper cooling coils, condenser coils, evaporator coils & heating coils. 1 Ton, 1.5 Ton & 2 Ton sizes available.",
    seoTitle:
      "AC Coils — Cooling, Condenser, Evaporator & Heating | Atlas Aircon",
    seoDescription:
      "Buy AC coils online. Cooling coils, condenser coils, evaporator coils, heating coils for 1-2 Ton AC. Copper coils with best prices in Vadodara.",
    products: coilProducts,
  },
  "copper-pipe": {
    slug: "copper-pipe",
    name: "Copper Pipes",
    description:
      "AC copper pipe coils — 1/4\" to 2-1/8\" diameter, 15 meter coils. Premium quality for AC installation and industrial use.",
    seoTitle:
      "AC Copper Pipes — 1/4 to 2-1/8 inch | 15m Coils | Atlas Aircon",
    seoDescription:
      "Buy AC copper pipes online. 1/4 to 2-1/8 inch diameter, 15 meter coils. Best quality copper piping for AC installation. Delivery across Gujarat.",
    products: copperPipeProducts,
  },
};

const allSlugs = Object.keys(categoryMap);

// ── Static params ─────────────────────────────────────────────
export async function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

// ── Metadata ──────────────────────────────────────────────────
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categoryMap[slug];
  if (!cat) return { title: "Category Not Found" };

  return {
    title: cat.seoTitle,
    description: cat.seoDescription,
    alternates: {
      canonical: `https://atlasaircons.com/product-category/${slug}`,
    },
    openGraph: {
      title: cat.name,
      description: cat.description,
      url: `https://atlasaircons.com/product-category/${slug}`,
    },
  };
}

// ── Helpers ───────────────────────────────────────────────────
function getPriceRange(products: Product[]) {
  const prices = products
    .map((p) => p.price)
    .filter((p): p is number => typeof p === "number");
  if (prices.length === 0) return "Get Quote";
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return min === max
    ? `₹${min.toLocaleString("en-IN")}`
    : `₹${min.toLocaleString("en-IN")} – ₹${max.toLocaleString("en-IN")}`;
}

// ── Page Component ────────────────────────────────────────────
export default async function ProductCategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = categoryMap[slug];
  if (!cat) notFound();

  const priceRange = getPriceRange(cat.products);

  return (
    <>
      <ProductListSchema name={cat.name} products={cat.products} />

      <Breadcrumb
        items={[
          { label: "Shop", href: "/shop" },
          { label: cat.name, href: `/product-category/${slug}` },
        ]}
      />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-white/10 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            {cat.products.length} Products
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{cat.name}</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-6">
            {cat.description}
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-5 py-2 rounded-full text-sm">
            Price Range: <span className="font-bold">{priceRange}</span>
          </div>
        </div>
      </section>

      {/* ── Trust Badges ───────────────────────────────────── */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 py-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>90-Day Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-blue-600" />
              <span>Same-Day Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-blue-600" />
              <span>Genuine Parts</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-600" />
              <span>20+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products Grid ──────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {cat.subCategories ? (
            /* Render sub-categories (e.g., compressors by brand) */
            cat.subCategories.map((sub) => (
              <div key={sub.name} className="mb-14 last:mb-0">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {sub.name}
                  </h2>
                  <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border">
                    {sub.products.length} products
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                  {sub.products.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            /* Single grid */
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {cat.products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────────────── */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can&apos;t Find What You Need?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            We stock 200+ products and can source any AC part or equipment. Call
            us or send a WhatsApp message for custom requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919727257141"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"
            >
              <Phone className="w-5 h-5" />
              +91 97272 57141
            </a>
            <a
              href="https://wa.me/919727257141?text=Hi%20Atlas%20Aircon!%20I%20need%20help%20finding%20a%20product."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white mt-6 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Products
          </Link>
        </div>
      </section>
    </>
  );
}
