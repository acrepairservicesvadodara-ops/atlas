import { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, User, ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "AC Repair Services In Vadodara | Atlas Aircon Blog",
  description: "In the sweltering heat of Vadodara, a well-functioning air conditioner is more than just a luxury; it's a necessity. Whether you're battling the scorchi...",
  alternates: { canonical: "https://atlasaircons.com/the-best-ac-repairing-services-in-vadodara" },
  openGraph: {
    title: "AC Repair Services In Vadodara | Atlas Aircon",
    description: "In the sweltering heat of Vadodara, a well-functioning air conditioner is more than just a luxury; it's a necessity. Whether you're battling the scorchi...",
    url: "https://atlasaircons.com/the-best-ac-repairing-services-in-vadodara",
    type: "article",
    images: ["/images/products/Benefits-of-Regular-AC-and-Refrigerator-Maintenance.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AC Repair Services In Vadodara",
  author: { "@type": "Person", name: "Mehfuz Shahid Khan", jobTitle: "Director, Atlas Aircon" },
  publisher: { "@type": "Organization", name: "Atlas Aircon", url: "https://atlasaircons.com" },
  datePublished: "2025-06-15",
  dateModified: "2026-03-01",
  mainEntityOfPage: "https://atlasaircons.com/the-best-ac-repairing-services-in-vadodara",
  image: "/images/products/Benefits-of-Regular-AC-and-Refrigerator-Maintenance.webp",
};

export default function Pagethebestacrepairingservicesinvadodara() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Article Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blogs" className="text-gray-400 hover:text-white text-sm flex items-center gap-1 mb-6 inline-flex"><ArrowLeft className="w-4 h-4" /> Back to Blog</Link>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">HVAC Guide</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">AC Repair Services In Vadodara</h1>
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
            <img src="/images/products/Benefits-of-Regular-AC-and-Refrigerator-Maintenance.webp" alt="AC Repair Services In Vadodara" className="w-full h-auto rounded-xl mb-8" />
            <p className="text-gray-600 mb-4">In the sweltering heat of Vadodara, a well-functioning air conditioner is more than just a luxury; it&apos;s a necessity. Whether you&apos;re battling the scorchi...</p>

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
              { q: "What is the cost of The Best Ac Repairing Services In Vadodara in Vadodara?", a: "The Best Ac Repairing Services In Vadodara cost starts from ₹299 for inspection. Gas refilling from ₹1,500, PCB repair from ₹1,200, compressor repair from ₹3,500. Atlas Aircon provides upfront pricing with no hidden charges." },
              { q: "How quickly can you come for The Best Ac Repairing Services In Vadodara?", a: "Atlas Aircon offers same-day The Best Ac Repairing Services In Vadodara across Vadodara. Our certified technician reaches within 90 minutes to 3 hours of booking. For emergencies, call +91 97272 57141." },
              { q: "Do you provide warranty on The Best Ac Repairing Services In Vadodaras?", a: "Yes, Atlas Aircon provides 30 to 90 days warranty on The Best Ac Repairing Services In Vadodaras depending on the work performed. Spare parts like compressors, PCBs, and motors come with manufacturer warranty." },
              { q: "Which AC brands do you repair?", a: "We repair all major brands — Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Mitsubishi, Panasonic, Whirlpool, Godrej, Croma, Toshiba, Haier, and more." },
              { q: "Is emergency The Best Ac Repairing Services In Vadodara available on holidays?", a: "Yes, Atlas Aircon provides The Best Ac Repairing Services In Vadodara 7 days a week including Sundays and public holidays. Our 24/7 emergency service is available at +91 97272 57141." },
              { q: "How long does The Best Ac Repairing Services In Vadodara take?", a: "Most The Best Ac Repairing Services In Vadodaras are completed within 1-2 hours. Complex repairs involving compressor replacement or major parts may take 3-4 hours. Our technician provides estimated time upfront." },
              { q: "Can you repair older AC models?", a: "Yes, Atlas Aircon specializes in repairing all AC models including older units. We maintain inventory of spare parts for discontinued models and can source parts for most brands." },
              { q: "What payment methods do you accept?", a: "We accept cash, UPI (GPay, PhonePe, Paytm), bank transfer, and cards. Payment is collected only after repair is completed to your satisfaction." },
              { q: "Do you provide AMC for regular AC maintenance?", a: "Yes, our Annual Maintenance Contract (AMC) starts from ₹1,999/year. AMC customers get priority service, free visits, discounted repairs, and scheduled maintenance." },
              { q: "What if the AC problem returns after repair?", a: "If the same issue recurs within the warranty period, we fix it free of charge. Simply call us at +91 97272 57141 and reference your previous service." }
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
          { "@type": "Question", name: "What is the cost of The Best Ac Repairing Services In Vadodara in Vadodara?", acceptedAnswer: { "@type": "Answer", text: "The Best Ac Repairing Services In Vadodara cost starts from ₹299 for inspection. Gas refilling from ₹1,500, PCB repair from ₹1,200, compressor repair from ₹3,500. Atlas Aircon provides upfront pricing with no hidden charges." } },
          { "@type": "Question", name: "How quickly can you come for The Best Ac Repairing Services In Vadodara?", acceptedAnswer: { "@type": "Answer", text: "Atlas Aircon offers same-day The Best Ac Repairing Services In Vadodara across Vadodara. Our certified technician reaches within 90 minutes to 3 hours of booking. For emergencies, call +91 97272 57141." } },
          { "@type": "Question", name: "Do you provide warranty on The Best Ac Repairing Services In Vadodaras?", acceptedAnswer: { "@type": "Answer", text: "Yes, Atlas Aircon provides 30 to 90 days warranty on The Best Ac Repairing Services In Vadodaras depending on the work performed. Spare parts like compressors, PCBs, and motors come with manufacturer warranty." } },
          { "@type": "Question", name: "Which AC brands do you repair?", acceptedAnswer: { "@type": "Answer", text: "We repair all major brands — Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Mitsubishi, Panasonic, Whirlpool, Godrej, Croma, Toshiba, Haier, and more." } },
          { "@type": "Question", name: "Is emergency The Best Ac Repairing Services In Vadodara available on holidays?", acceptedAnswer: { "@type": "Answer", text: "Yes, Atlas Aircon provides The Best Ac Repairing Services In Vadodara 7 days a week including Sundays and public holidays. Our 24/7 emergency service is available at +91 97272 57141." } },
          { "@type": "Question", name: "How long does The Best Ac Repairing Services In Vadodara take?", acceptedAnswer: { "@type": "Answer", text: "Most The Best Ac Repairing Services In Vadodaras are completed within 1-2 hours. Complex repairs involving compressor replacement or major parts may take 3-4 hours. Our technician provides estimated time upfront." } },
          { "@type": "Question", name: "Can you repair older AC models?", acceptedAnswer: { "@type": "Answer", text: "Yes, Atlas Aircon specializes in repairing all AC models including older units. We maintain inventory of spare parts for discontinued models and can source parts for most brands." } },
          { "@type": "Question", name: "What payment methods do you accept?", acceptedAnswer: { "@type": "Answer", text: "We accept cash, UPI (GPay, PhonePe, Paytm), bank transfer, and cards. Payment is collected only after repair is completed to your satisfaction." } },
          { "@type": "Question", name: "Do you provide AMC for regular AC maintenance?", acceptedAnswer: { "@type": "Answer", text: "Yes, our Annual Maintenance Contract (AMC) starts from ₹1,999/year. AMC customers get priority service, free visits, discounted repairs, and scheduled maintenance." } },
          { "@type": "Question", name: "What if the AC problem returns after repair?", acceptedAnswer: { "@type": "Answer", text: "If the same issue recurs within the warranty period, we fix it free of charge. Simply call us at +91 97272 57141 and reference your previous service." } }
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
