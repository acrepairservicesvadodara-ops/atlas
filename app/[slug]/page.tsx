import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  Clock,
  Calendar,
  User,
  ArrowLeft,
  Share2,
  MessageCircle,
  CheckCircle,
  Star,
  Shield,
  Award,
} from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import Breadcrumb from "@/components/Breadcrumb";
import BlogCard from "@/components/BlogCard";
import { BlogPostSchema } from "@/components/Schema";

// ── Generate static params for all blog posts ─────────────────
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// ── Dynamic metadata ──────────────────────────────────────────
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.metaTitle || post.title,
    description:
      post.metaDescription ||
      `${post.contentSummary.slice(0, 150)}... Read more on Atlas Aircon blog.`,
    keywords: [
      post.title,
      "Atlas Aircon",
      "AC repair",
      "AC service Vadodara",
    ],
    alternates: {
      canonical: `https://atlasaircons.com/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.contentSummary.slice(0, 200),
      url: `https://atlasaircons.com/${post.slug}`,
      type: "article",
      images: post.images?.[0]
        ? [
            {
              url: `https://atlasaircons.com/images/products/${post.images[0]}`,
            },
          ]
        : [{ url: "https://atlasaircons.com/og-image.jpg" }],
    },
  };
}

// ── Page Component ────────────────────────────────────────────
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Related posts — same reading range or recent posts
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.hasUniqueContent)
    .slice(0, 3);

  const shareUrl = `https://atlasaircons.com/${post.slug}`;
  const heroImage = post.images?.[0]
    ? `/images/products/${post.images[0]}`
    : null;

  return (
    <>
      <BlogPostSchema
        title={post.title}
        description={post.contentSummary}
        slug={post.slug}
        dateModified={post.lastModified}
        image={heroImage || undefined}
        readTime={post.readTime}
      />

      <Breadcrumb
        items={[
          { label: "Blogs", href: "/blogs" },
          { label: post.title, href: `/${post.slug}` },
        ]}
      />

      <article className="bg-white">
        {/* ── Hero ──────────────────────────────────────────── */}
        <header className="bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {post.readTime && (
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-sm">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime} read
                </span>
              )}
              {post.lastModified && (
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-sm">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.lastModified).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              {post.contentSummary}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">Mehfuz Shahid Khan</p>
                <p className="text-blue-200 text-sm">
                  Founder & Chief Architect — Atlas Aircon
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* ── Hero Image ───────────────────────────────────── */}
        {heroImage && (
          <div className="container mx-auto px-4 max-w-4xl -mt-8">
            <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={heroImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>
          </div>
        )}

        {/* ── Article Body ─────────────────────────────────── */}
        <div className="container mx-auto px-4 max-w-4xl py-12">
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600">
            <p className="lead text-xl text-gray-700 leading-relaxed">
              {post.contentSummary}
            </p>

            <h2>Why This Matters</h2>
            <p>
              At Atlas Aircon, we&apos;ve spent over 20 years in the field — servicing,
              repairing, and installing AC systems for 5000+ customers across Vadodara
              and Gujarat. This article draws on real-world experience from our certified
              technicians and aims to help you make informed decisions about your AC needs.
            </p>

            <h2>Expert Recommendations</h2>
            <ul>
              <li>
                <strong>Regular Maintenance:</strong> Schedule AC servicing every 3-6
                months for optimal performance and lower electricity bills
              </li>
              <li>
                <strong>Genuine Parts:</strong> Always use OEM or certified spare parts
                 for longer life and warranty coverage
              </li>
              <li>
                <strong>Professional Service:</strong> Avoid DIY repairs for gas
                refilling, compressor work, or electrical issues — these require
                certified technicians
              </li>
              <li>
                <strong>Timely Repair:</strong> Don&apos;t ignore warning signs like unusual
                noise, water leakage, or reduced cooling — early repair saves money
              </li>
            </ul>

            <h2>Atlas Aircon Pricing</h2>
            <p>
              Transparent pricing is our commitment. Here are our standard service rates:
            </p>
          </div>

          {/* Pricing Table */}
          <div className="my-8 bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="text-left py-3 px-5 font-semibold">Service</th>
                  <th className="text-right py-3 px-5 font-semibold">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Power Jet AC Service", "₹499 – ₹599"],
                  ["Chemical Wash", "₹899 – ₹999"],
                  ["Full Deep AC Service", "₹1,199 – ₹1,299"],
                  ["AC Gas Refilling", "₹1,500 – ₹3,000"],
                  ["AC Installation (Split)", "₹1,499 – ₹2,999"],
                  ["Compressor Repair", "₹3,999+"],
                  ["AC AMC (Annual)", "₹2,600 – ₹5,000"],
                ].map(([service, price], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="py-3 px-5 text-gray-800">{service}</td>
                    <td className="py-3 px-5 text-right font-semibold text-blue-600">
                      {price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600">
            <h2>Get Expert Help Today</h2>
            <p>
              Whether you need AC repair, installation, or maintenance — Atlas Aircon
              is Vadodara&apos;s most trusted HVAC service provider. Contact us for
              same-day service, genuine parts, and 90-day warranty on all repairs.
            </p>
          </div>

          {/* CTA Box */}
          <div className="my-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">
              Need AC Service in Vadodara?
            </h3>
            <p className="text-blue-100 mb-6 max-w-lg mx-auto">
              Same-day service. 90-day warranty. 20+ years experience. 5000+
              happy customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+919727257141"
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold transition"
              >
                <Phone className="w-5 h-5" />
                +91 97272 57141
              </a>
              <a
                href="https://wa.me/919727257141?text=Hi%20Atlas%20Aircon!%20I%20need%20AC%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold transition"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Share */}
          <div className="flex items-center gap-4 py-6 border-t border-gray-200">
            <Share2 className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-500 font-medium">Share:</span>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-green-600 transition"
            >
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-blue-700 transition"
            >
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-gray-800 transition"
            >
              X / Twitter
            </a>
          </div>
        </div>
      </article>

      {/* ── Why Choose Atlas ───────────────────────────────── */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Why 5000+ Customers Trust Atlas Aircon
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Award, label: "20+ Years", sub: "Since 2004" },
              { icon: Shield, label: "90-Day Warranty", sub: "All repairs" },
              { icon: Star, label: "4.9 Rating", sub: "500+ reviews" },
              { icon: CheckCircle, label: "Same Day", sub: "Quick response" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <p className="font-semibold text-gray-900">{label}</p>
                <p className="text-sm text-gray-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Posts ──────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">More Articles</h2>
              <Link
                href="/blogs"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                View All →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
