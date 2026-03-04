import { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, User, ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Get The Best #1 Air Conditioning Service In Vadodara | Atlas Aircon Blog",
  description: "Vadodara, known for its warm climate, places a premium on effective air conditioning service solutions. As the temperature rises, residents are turning ...",
  alternates: { canonical: "https://atlasaircons.com/premier-air-conditioning-service-in-vadodara" },
  openGraph: {
    title: "Get The Best #1 Air Conditioning Service In Vadodara | Atlas Aircon",
    description: "Vadodara, known for its warm climate, places a premium on effective air conditioning service solutions. As the temperature rises, residents are turning ...",
    url: "https://atlasaircons.com/premier-air-conditioning-service-in-vadodara",
    type: "article",
    images: ["/images/products/Top-notch-AC-Repair-and-Service-in-Vadodara-for-Ultimate-Cooling-Comfort.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Get The Best #1 Air Conditioning Service In Vadodara",
  author: { "@type": "Person", name: "Mehfuz Shahid Khan", jobTitle: "Director, Atlas Aircon" },
  publisher: { "@type": "Organization", name: "Atlas Aircon", url: "https://atlasaircons.com" },
  datePublished: "2025-06-15",
  dateModified: "2026-03-01",
  mainEntityOfPage: "https://atlasaircons.com/premier-air-conditioning-service-in-vadodara",
  image: "/images/products/Top-notch-AC-Repair-and-Service-in-Vadodara-for-Ultimate-Cooling-Comfort.webp",
};

export default function Pagepremierairconditioningserviceinvadodara() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Article Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blogs" className="text-gray-400 hover:text-white text-sm flex items-center gap-1 mb-6 inline-flex"><ArrowLeft className="w-4 h-4" /> Back to Blog</Link>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">HVAC Guide</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Get The Best #1 Air Conditioning Service In Vadodara</h1>
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
            <img src="/images/products/Top-notch-AC-Repair-and-Service-in-Vadodara-for-Ultimate-Cooling-Comfort.webp" alt="Get The Best #1 Air Conditioning Service In Vadodara" className="w-full h-auto rounded-xl mb-8" />
            <p className="text-gray-600 mb-4">Vadodara, known for its warm climate, places a premium on effective air conditioning service solutions. As the temperature rises, residents are turning ...</p>

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
              { q: "What does Premier Air Conditioning Service In Vadodara include?", a: "Premier Air Conditioning Service In Vadodara includes filter cleaning, coil jet wash, drain pipe clearing, gas pressure check, electrical inspection, fan motor check, and performance testing." },
              { q: "How much does Premier Air Conditioning Service In Vadodara cost?", a: "Premier Air Conditioning Service In Vadodara starts from ₹499 for basic service. Deep jet cleaning is ₹799 for split AC, ₹599 for window AC. Chemical wash starts from ₹999." },
              { q: "How often should AC be serviced?", a: "AC should be serviced at least twice a year — before summer and after monsoon. Heavy use environments may need quarterly servicing." },
              { q: "Will Premier Air Conditioning Service In Vadodara improve cooling?", a: "Yes, proper Premier Air Conditioning Service In Vadodara can improve cooling efficiency by 20-30%. Dirty filters and coils reduce airflow and heat exchange." },
              { q: "Does Premier Air Conditioning Service In Vadodara reduce electricity bills?", a: "Regular Premier Air Conditioning Service In Vadodara can reduce electricity consumption by 15-25%. A well-maintained AC runs more efficiently, saving power." },
              { q: "How long does Premier Air Conditioning Service In Vadodara take?", a: "Basic Premier Air Conditioning Service In Vadodara takes 30-45 minutes. Deep cleaning with jet wash takes 1-1.5 hours. Chemical foam cleaning takes about 2 hours." },
              { q: "Can Premier Air Conditioning Service In Vadodara remove bad smell?", a: "Yes, Premier Air Conditioning Service In Vadodara includes cleaning of filters, coils, and drain pan which removes bacteria and mold causing odors. Anti-bacterial spray applied." },
              { q: "Is gas top-up included in Premier Air Conditioning Service In Vadodara?", a: "Basic service includes gas pressure check. If gas is low, top-up is charged separately — R22 from ₹1,500, R32/R410A from ₹2,000." },
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
          { "@type": "Question", name: "What does Premier Air Conditioning Service In Vadodara include?", acceptedAnswer: { "@type": "Answer", text: "Premier Air Conditioning Service In Vadodara includes filter cleaning, coil jet wash, drain pipe clearing, gas pressure check, electrical inspection, fan motor check, and performance testing." } },
          { "@type": "Question", name: "How much does Premier Air Conditioning Service In Vadodara cost?", acceptedAnswer: { "@type": "Answer", text: "Premier Air Conditioning Service In Vadodara starts from ₹499 for basic service. Deep jet cleaning is ₹799 for split AC, ₹599 for window AC. Chemical wash starts from ₹999." } },
          { "@type": "Question", name: "How often should AC be serviced?", acceptedAnswer: { "@type": "Answer", text: "AC should be serviced at least twice a year — before summer and after monsoon. Heavy use environments may need quarterly servicing." } },
          { "@type": "Question", name: "Will Premier Air Conditioning Service In Vadodara improve cooling?", acceptedAnswer: { "@type": "Answer", text: "Yes, proper Premier Air Conditioning Service In Vadodara can improve cooling efficiency by 20-30%. Dirty filters and coils reduce airflow and heat exchange." } },
          { "@type": "Question", name: "Does Premier Air Conditioning Service In Vadodara reduce electricity bills?", acceptedAnswer: { "@type": "Answer", text: "Regular Premier Air Conditioning Service In Vadodara can reduce electricity consumption by 15-25%. A well-maintained AC runs more efficiently, saving power." } },
          { "@type": "Question", name: "How long does Premier Air Conditioning Service In Vadodara take?", acceptedAnswer: { "@type": "Answer", text: "Basic Premier Air Conditioning Service In Vadodara takes 30-45 minutes. Deep cleaning with jet wash takes 1-1.5 hours. Chemical foam cleaning takes about 2 hours." } },
          { "@type": "Question", name: "Can Premier Air Conditioning Service In Vadodara remove bad smell?", acceptedAnswer: { "@type": "Answer", text: "Yes, Premier Air Conditioning Service In Vadodara includes cleaning of filters, coils, and drain pan which removes bacteria and mold causing odors. Anti-bacterial spray applied." } },
          { "@type": "Question", name: "Is gas top-up included in Premier Air Conditioning Service In Vadodara?", acceptedAnswer: { "@type": "Answer", text: "Basic service includes gas pressure check. If gas is low, top-up is charged separately — R22 from ₹1,500, R32/R410A from ₹2,000." } },
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
