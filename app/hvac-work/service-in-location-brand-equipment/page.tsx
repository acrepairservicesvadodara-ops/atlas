import { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, User, ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "[Service] In [Location] | Atlas Aircon Blog",
  description: "Professional [service] in [location] by Atlas Aircon. Certified technicians, same-day service, transparent pricing. Serving Vadodara & Gujarat. Call +91 97272 57141.",
  alternates: { canonical: "https://atlasaircons.com/hvac-work/service-in-location-brand-equipment" },
  openGraph: {
    title: "[Service] In [Location] | Atlas Aircon",
    description: "Professional [service] in [location] by Atlas Aircon. Certified technicians, same-day service, transparent pricing. Serving Vadodara & Gujarat. Call +91 97272 57141.",
    url: "https://atlasaircons.com/hvac-work/service-in-location-brand-equipment",
    type: "article",
    images: ["/images/products/chiller-repair.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "[Service] In [Location]",
  author: { "@type": "Person", name: "Mehfuz Shahid Khan", jobTitle: "Director, Atlas Aircon" },
  publisher: { "@type": "Organization", name: "Atlas Aircon", url: "https://atlasaircons.com" },
  datePublished: "2025-06-15",
  dateModified: "2026-03-01",
  mainEntityOfPage: "https://atlasaircons.com/hvac-work/service-in-location-brand-equipment",
  image: "/images/products/chiller-repair.webp",
};

export default function Pagehvacworkserviceinlocationbrandequipment() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Article Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blogs" className="text-gray-400 hover:text-white text-sm flex items-center gap-1 mb-6 inline-flex"><ArrowLeft className="w-4 h-4" /> Back to Blog</Link>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">HVAC Guide</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">[Service] In [Location]</h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2"><User className="w-4 h-4" /> Mehfuz Shahid Khan</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 5 Min Read</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Engineering Verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img src="/images/products/chiller-repair.webp" alt="[Service] In [Location]" className="w-full h-auto rounded-xl mb-8" />
            <p className="text-gray-600 mb-4">&lt;div class=&quot;bg-slate-900 border-t-4 border-sky-500 rounded-t-xl p-6 s...</p>

          </div>
        </div>
      </section>

      {/* Author Box */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Mehfuz Shahid Khan</h3>
              <p className="text-gray-500 text-sm mb-2">Director &amp; Lead HVAC Architect &bull; Atlas Aircon</p>
              <p className="text-gray-600 text-sm">20+ years of hands-on experience in industrial cooling, chiller overhauls, and VRF installations across Gujarat&apos;s industrial zones.</p>
            </div>
          </div>
        </div>
      </section>

      
      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "What does Service In Location Brand Equipment include?", a: "Service In Location Brand Equipment includes filter cleaning, coil jet wash, drain pipe clearing, gas pressure check, electrical inspection, fan motor check, and performance testing." },
              { q: "How much does Service In Location Brand Equipment cost?", a: "Service In Location Brand Equipment starts from ₹499 for basic service. Deep jet cleaning is ₹799 for split AC, ₹599 for window AC. Chemical wash starts from ₹999." },
              { q: "How often should AC be serviced?", a: "AC should be serviced at least twice a year — before summer and after monsoon. Heavy use environments may need quarterly servicing." },
              { q: "Will Service In Location Brand Equipment improve cooling?", a: "Yes, proper Service In Location Brand Equipment can improve cooling efficiency by 20-30%. Dirty filters and coils reduce airflow and heat exchange." },
              { q: "Does Service In Location Brand Equipment reduce electricity bills?", a: "Regular Service In Location Brand Equipment can reduce electricity consumption by 15-25%. A well-maintained AC runs more efficiently, saving power." },
              { q: "How long does Service In Location Brand Equipment take?", a: "Basic Service In Location Brand Equipment takes 30-45 minutes. Deep cleaning with jet wash takes 1-1.5 hours. Chemical foam cleaning takes about 2 hours." },
              { q: "Can Service In Location Brand Equipment remove bad smell?", a: "Yes, Service In Location Brand Equipment includes cleaning of filters, coils, and drain pan which removes bacteria and mold causing odors. Anti-bacterial spray applied." },
              { q: "Is gas top-up included in Service In Location Brand Equipment?", a: "Basic service includes gas pressure check. If gas is low, top-up is charged separately — R22 from ₹1,500, R32/R410A from ₹2,000." },
              { q: "Do you clean outdoor AC unit?", a: "Yes, complete service includes outdoor unit cleaning. Condenser coil cleaning is essential for proper heat rejection." },
              { q: "What's the difference between service and deep cleaning?", a: "Basic service is dry cleaning and inspection. Deep cleaning uses high-pressure jet wash. Chemical wash uses foam for thorough cleaning." }
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 group">
                <summary className="p-5 cursor-pointer font-semibold text-gray-900 flex justify-between items-center">
                  {faq.q}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What does Service In Location Brand Equipment include?", acceptedAnswer: { "@type": "Answer", text: "Service In Location Brand Equipment includes filter cleaning, coil jet wash, drain pipe clearing, gas pressure check, electrical inspection, fan motor check, and performance testing." } },
          { "@type": "Question", name: "How much does Service In Location Brand Equipment cost?", acceptedAnswer: { "@type": "Answer", text: "Service In Location Brand Equipment starts from ₹499 for basic service. Deep jet cleaning is ₹799 for split AC, ₹599 for window AC. Chemical wash starts from ₹999." } },
          { "@type": "Question", name: "How often should AC be serviced?", acceptedAnswer: { "@type": "Answer", text: "AC should be serviced at least twice a year — before summer and after monsoon. Heavy use environments may need quarterly servicing." } },
          { "@type": "Question", name: "Will Service In Location Brand Equipment improve cooling?", acceptedAnswer: { "@type": "Answer", text: "Yes, proper Service In Location Brand Equipment can improve cooling efficiency by 20-30%. Dirty filters and coils reduce airflow and heat exchange." } },
          { "@type": "Question", name: "Does Service In Location Brand Equipment reduce electricity bills?", acceptedAnswer: { "@type": "Answer", text: "Regular Service In Location Brand Equipment can reduce electricity consumption by 15-25%. A well-maintained AC runs more efficiently, saving power." } },
          { "@type": "Question", name: "How long does Service In Location Brand Equipment take?", acceptedAnswer: { "@type": "Answer", text: "Basic Service In Location Brand Equipment takes 30-45 minutes. Deep cleaning with jet wash takes 1-1.5 hours. Chemical foam cleaning takes about 2 hours." } },
          { "@type": "Question", name: "Can Service In Location Brand Equipment remove bad smell?", acceptedAnswer: { "@type": "Answer", text: "Yes, Service In Location Brand Equipment includes cleaning of filters, coils, and drain pan which removes bacteria and mold causing odors. Anti-bacterial spray applied." } },
          { "@type": "Question", name: "Is gas top-up included in Service In Location Brand Equipment?", acceptedAnswer: { "@type": "Answer", text: "Basic service includes gas pressure check. If gas is low, top-up is charged separately — R22 from ₹1,500, R32/R410A from ₹2,000." } },
          { "@type": "Question", name: "Do you clean outdoor AC unit?", acceptedAnswer: { "@type": "Answer", text: "Yes, complete service includes outdoor unit cleaning. Condenser coil cleaning is essential for proper heat rejection." } },
          { "@type": "Question", name: "What's the difference between service and deep cleaning?", acceptedAnswer: { "@type": "Answer", text: "Basic service is dry cleaning and inspection. Deep cleaning uses high-pressure jet wash. Chemical wash uses foam for thorough cleaning." } }
        ]
      }) }} />

{/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Expert HVAC Help?</h2>
          <p className="text-blue-100 mb-8">Our team is available 24/7 across Gujarat.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919727257141" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"><Phone size={22} /> Call +91 97272 57141</a>
            <a href="https://wa.me/919727257141" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
