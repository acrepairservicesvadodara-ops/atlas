import { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, User, ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "LG Air Conditioner Features, Advantages, Disadvantages Of LG [2026 Updated] | Hitech Aircool Engineers Blog",
  description: "Voice Controlled Air Conditioners By LG: Lg Air Conditioner When you have a look at the climate co...",
  alternates: { canonical: "https://hitechairconditioning.in/voice-controlled-air-conditioners-by-lg" },
  openGraph: {
    title: "LG Air Conditioner Features, Advantages, Disadvantages Of LG [2026 Updated] | Hitech Aircool Engineers",
    description: "Voice Controlled Air Conditioners By LG: Lg Air Conditioner When you have a look at the climate co...",
    url: "https://hitechairconditioning.in/voice-controlled-air-conditioners-by-lg",
    type: "article",
    images: ["/images/products/LGs-Latest-Voice-Enabled-Air-Conditioner-Atlas.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "LG Air Conditioner Features, Advantages, Disadvantages Of LG [2026 Updated]",
  author: { "@type": "Person", name: "Mehfuz Shahid Khan", jobTitle: "Director, Hitech Aircool Engineers" },
  publisher: { "@type": "Organization", name: "Hitech Aircool Engineers", url: "https://hitechairconditioning.in" },
  datePublished: "2025-06-15",
  dateModified: "2026-03-01",
  mainEntityOfPage: "https://hitechairconditioning.in/voice-controlled-air-conditioners-by-lg",
  image: "/images/products/LGs-Latest-Voice-Enabled-Air-Conditioner-Atlas.webp",
};

export default function Pagevoicecontrolledairconditionersbylg() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Article Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blogs" className="text-gray-400 hover:text-white text-sm flex items-center gap-1 mb-6 inline-flex"><ArrowLeft className="w-4 h-4" /> Back to Blog</Link>
            <span className="bg-teal-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">HVAC Guide</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">LG Air Conditioner Features, Advantages, Disadvantages Of LG [2026 Updated]</h1>
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
            <img src="/images/products/LGs-Latest-Voice-Enabled-Air-Conditioner-Atlas.webp" alt="LG Air Conditioner Features, Advantages, Disadvantages Of LG [2026 Updated]" className="w-full h-auto rounded-xl mb-8" />
            <p className="text-gray-600 mb-4">Voice Controlled Air Conditioners By LG: Lg Air Conditioner When you have a look at the climate co...</p>

          </div>
        </div>
      </section>

      {/* Author Box */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 text-teal-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Mehfuz Shahid Khan</h3>
              <p className="text-gray-500 text-sm mb-2">Director &amp; Lead HVAC Architect &bull; Hitech Aircool Engineers</p>
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
              { q: "Are you an authorized service center for LG?", a: "Hitech Aircool Engineers provides multi-brand AC service. While not an authorized center, our technicians are trained on LG and use genuine parts." },
              { q: "What is the cost of repair for LG?", a: "Repair costs depend on issue: gas refilling from ₹1,500, PCB repair from ₹1,200, compressor repair from ₹3,500. Inspection ₹299 adjusted against repairs." },
              { q: "Can you repair older models of LG?", a: "Yes, we repair all models including discontinued ones. We maintain inventory of common spare parts and can source parts for older units." },
              { q: "How quickly can you repair LG's AC?", a: "Most repairs are completed same-day within 2-3 hours. Complex repairs requiring parts may take 1-2 days. Emergency service available 24/7." },
              { q: "Do you use genuine parts for LG?", a: "Yes, we use OEM-quality parts for repairs. For critical components like compressors, we source genuine parts when available." },
              { q: "What warranty do you provide on repairs?", a: "We provide 30-90 days warranty on repairs. Spare parts carry manufacturer warranty. Warranty doesn't cover misuse or power surge damage." },
              { q: "Is gas refilling expensive for LG?", a: "Gas refilling follows standard pricing: R22 from ₹1,500, R32/R410A from ₹2,000. Prices depend on gas type in your specific model." },
              { q: "Can you service inverter AC of LG?", a: "Yes, we specialize in inverter AC service and repair. Our technicians are trained on variable frequency drive and inverter PCB diagnosis." },
              { q: "Do you provide AMC for LG?", a: "Yes, AMC plans cover LG and all other brands. Starting ₹1,999/year for split AC, includes free services, priority support, discounted repairs." },
              { q: "How do I maintain LG's AC?", a: "Clean filters every 2 weeks, ensure outdoor unit has airflow, run AC at 24-26°C, schedule professional service every 6 months." }
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 group">
                <summary className="p-5 cursor-pointer font-semibold text-gray-900 flex justify-between items-center">
                  {faq.q}
                  <span className="text-teal-600 group-open:rotate-180 transition-transform">▼</span>
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
          { "@type": "Question", name: "Are you an authorized service center for LG?", acceptedAnswer: { "@type": "Answer", text: "Hitech Aircool Engineers provides multi-brand AC service. While not an authorized center, our technicians are trained on LG and use genuine parts." } },
          { "@type": "Question", name: "What is the cost of repair for LG?", acceptedAnswer: { "@type": "Answer", text: "Repair costs depend on issue: gas refilling from ₹1,500, PCB repair from ₹1,200, compressor repair from ₹3,500. Inspection ₹299 adjusted against repairs." } },
          { "@type": "Question", name: "Can you repair older models of LG?", acceptedAnswer: { "@type": "Answer", text: "Yes, we repair all models including discontinued ones. We maintain inventory of common spare parts and can source parts for older units." } },
          { "@type": "Question", name: "How quickly can you repair LG's AC?", acceptedAnswer: { "@type": "Answer", text: "Most repairs are completed same-day within 2-3 hours. Complex repairs requiring parts may take 1-2 days. Emergency service available 24/7." } },
          { "@type": "Question", name: "Do you use genuine parts for LG?", acceptedAnswer: { "@type": "Answer", text: "Yes, we use OEM-quality parts for repairs. For critical components like compressors, we source genuine parts when available." } },
          { "@type": "Question", name: "What warranty do you provide on repairs?", acceptedAnswer: { "@type": "Answer", text: "We provide 30-90 days warranty on repairs. Spare parts carry manufacturer warranty. Warranty doesn't cover misuse or power surge damage." } },
          { "@type": "Question", name: "Is gas refilling expensive for LG?", acceptedAnswer: { "@type": "Answer", text: "Gas refilling follows standard pricing: R22 from ₹1,500, R32/R410A from ₹2,000. Prices depend on gas type in your specific model." } },
          { "@type": "Question", name: "Can you service inverter AC of LG?", acceptedAnswer: { "@type": "Answer", text: "Yes, we specialize in inverter AC service and repair. Our technicians are trained on variable frequency drive and inverter PCB diagnosis." } },
          { "@type": "Question", name: "Do you provide AMC for LG?", acceptedAnswer: { "@type": "Answer", text: "Yes, AMC plans cover LG and all other brands. Starting ₹1,999/year for split AC, includes free services, priority support, discounted repairs." } },
          { "@type": "Question", name: "How do I maintain LG's AC?", acceptedAnswer: { "@type": "Answer", text: "Clean filters every 2 weeks, ensure outdoor unit has airflow, run AC at 24-26°C, schedule professional service every 6 months." } }
        ]
      }) }} />

{/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Expert HVAC Help?</h2>
          <p className="text-teal-100 mb-8">Our team is available 24/7 across Gujarat.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919328953665" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"><Phone size={22} /> Call +91 93289 53665</a>
            <a href="https://wa.me/919328953665" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
