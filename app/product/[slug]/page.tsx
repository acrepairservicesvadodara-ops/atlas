import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  Star,
  Shield,
  Clock,
  Award,
  CheckCircle,
  Truck,
  Tag,
  Package,
  ArrowLeft,
} from "lucide-react";
import { allProducts } from "@/data/products";
import { Product } from "@/data/types";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppEnquiry from "@/components/WhatsAppEnquiry";
import ProductCard from "@/components/ProductCard";
import { ProductSchema, FAQSchema } from "@/components/Schema";

// ── Static params for all products ────────────────────────────
export async function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

// ── Dynamic metadata ──────────────────────────────────────────
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = allProducts.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  const price =
    typeof product.price === "number"
      ? `₹${product.price.toLocaleString("en-IN")}`
      : "Get Quote";

  return {
    title: `${product.name} — ${price} | Buy Online | Atlas Aircon`,
    description: `${product.description} SKU: ${product.sku}. Buy from Atlas Aircon Vadodara. Free delivery, genuine parts, warranty.`,
    keywords: [
      product.name,
      product.sku,
      product.category,
      `${product.name} Vadodara`,
      `${product.name} price`,
      ...(product.tags || []),
    ],
    alternates: {
      canonical: `https://atlasaircons.com/product/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.description,
      url: `https://atlasaircons.com/product/${product.slug}`,
      images: [{ url: product.images[0] || "/og-image.jpg" }],
      type: "website",
    },
  };
}

// ── Helpers ───────────────────────────────────────────────────
function getCategorySlug(cat: string) {
  const map: Record<string, string> = {
    Cleaning: "/cleaning",
    "Spare Parts": "/shop?cat=spare-parts",
    "Air Curtain": "/shop?cat=air-curtains",
    "Atlas Aircon Products": "/shop?cat=atlas-aircon",
    Compressor: "/shop?cat=compressors",
    Capacitor: "/shop?cat=capacitors",
    Coil: "/shop?cat=coils",
    "Copper Pipe": "/shop?cat=copper-pipes",
  };
  return map[cat] || "/shop";
}

function getRelated(product: Product): Product[] {
  return allProducts
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);
}

function getFAQs(product: Product) {
  const price =
    typeof product.price === "number"
      ? `₹${product.price.toLocaleString("en-IN")}`
      : "Contact us for pricing";
  return [
    {
      question: `What is the price of ${product.name}?`,
      answer: `The price of ${product.name} is ${price}. Contact Atlas Aircon at +91 97272 57141 for the latest pricing and offers.`,
    },
    {
      question: `Is ${product.name} available in Vadodara?`,
      answer: `Yes, ${product.name} is available in Vadodara and across Gujarat. We offer same-day delivery and professional installation.`,
    },
    {
      question: `Does Atlas Aircon provide warranty on ${product.name}?`,
      answer: `Yes, all products from Atlas Aircon come with warranty. We also provide 90-day service warranty on installation and repair.`,
    },
    {
      question: `How to order ${product.name}?`,
      answer: `You can order by clicking the "Send Enquiry" button on this page, which connects you directly to our WhatsApp. You can also call us at +91 97272 57141.`,
    },
  ];
}

// ── Page Component ────────────────────────────────────────────
export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = allProducts.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = getRelated(product);
  const faqs = getFAQs(product);
  const priceDisplay =
    typeof product.price === "number"
      ? `₹${product.price.toLocaleString("en-IN")}`
      : "Get Quote";
  const categoryUrl = getCategorySlug(product.category);

  return (
    <>
      <ProductSchema product={product} />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { label: "Shop", href: "/shop" },
          { label: product.category, href: categoryUrl },
          { label: product.name, href: `/product/${product.slug}` },
        ]}
      />

      {/* ── Product Detail ─────────────────────────────────── */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Images */}
            <div>
              <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={product.images[0] || "/og-image.jpg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.slice(1, 5).map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${product.name} - Image ${i + 2}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 25vw, 12vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Tag className="w-4 h-4" />
                <Link
                  href={categoryUrl}
                  className="hover:text-blue-600 transition"
                >
                  {product.category}
                </Link>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill={i < 5 ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  4.8 (120+ reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-blue-600">
                  {priceDisplay}
                </span>
                {typeof product.price === "number" && (
                  <span className="text-lg text-gray-400 line-through">
                    ₹
                    {Math.round(product.price * 1.3).toLocaleString("en-IN")}
                  </span>
                )}
                {typeof product.price === "number" && (
                  <span className="bg-green-100 text-green-700 text-sm px-2 py-0.5 rounded-full font-medium">
                    30% OFF
                  </span>
                )}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* SKU & Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  SKU: {product.sku}
                </span>
                {product.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <Shield className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm font-medium">90 Days Warranty</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <Truck className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm font-medium">Same Day Delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <Package className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm font-medium">Genuine Parts</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <Award className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm font-medium">20+ Years Expert</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <WhatsAppEnquiry
                  productName={product.name}
                  productSku={product.sku}
                  productPrice={product.price}
                  className="flex-1"
                />
                <a
                  href="tel:+919727257141"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold transition flex-1"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-2 text-sm text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span className="font-medium">
                  In Stock — Available in Vadodara & Gujarat
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Description ────────────────────────────── */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">
            About {product.name}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>{product.description}</p>
            <h3>Why Choose Atlas Aircon?</h3>
            <ul>
              <li>20+ years of experience in AC & HVAC services in Vadodara</li>
              <li>Genuine spare parts with manufacturer warranty</li>
              <li>Certified technicians with hands-on expertise</li>
              <li>Same-day delivery & installation available</li>
              <li>5000+ satisfied customers across Gujarat</li>
              <li>
                Transparent pricing — no hidden charges
              </li>
            </ul>
            <h3>Service Areas</h3>
            <p>
              We deliver {product.name} across Vadodara, Ahmedabad, Surat,
              Rajkot, Bharuch, Anand, and all major cities in Gujarat. Express
              delivery available for urgent requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQs ───────────────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
                open={i === 0}
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-blue-600 transition">
                  {faq.question}
                  <span className="ml-4 text-gray-400 group-open:rotate-45 transition-transform text-xl">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Products ───────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Related Products</h2>
              <Link
                href={categoryUrl}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
              >
                View All
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Bottom CTA ─────────────────────────────────────── */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our expert technicians can help you find the perfect solution. 20+
            years of experience serving Vadodara & Gujarat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919727257141"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"
            >
              <Phone className="w-5 h-5" />
              +91 97272 57141
            </a>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition border border-white/30"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
