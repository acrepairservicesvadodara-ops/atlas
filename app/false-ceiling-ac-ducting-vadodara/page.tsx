import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Star, Clock, Shield, Award, MapPin, ArrowRight, Wrench, AlertTriangle, Zap, ThermometerSnowflake, Settings } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "False Ceiling AC Ducting in Vadodara | Installation, Service & Repair | Atlas Aircon",
  description: "Concealed AC duct in Vadodara. Expert AC installation, service & repair. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "False Ceiling AC Ducting Vadodara",
    "false ceiling ac ducting",
    "False Ceiling AC Ducting installation",
    "False Ceiling AC Ducting service",
    "False Ceiling AC Ducting repair",
    "best False Ceiling AC Ducting service",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/false-ceiling-ac-ducting-vadodara",
  },
};

const keywordData = {
  title: "False Ceiling AC Ducting",
  slug: "false-ceiling-ac-ducting",
  description: "Concealed AC duct",
  category: "HVAC"
};

const getCategoryIcon = () => {
  switch (keywordData.category) {
    case "Problems": return AlertTriangle;
    case "Commercial": return Wrench;
    case "Emergency": return Zap;
    default: return ThermometerSnowflake;
  }
};

const CategoryIcon = getCategoryIcon();

export default function FalseCeilingACDuctingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <CategoryIcon className="w-4 h-4" />
                <span>{keywordData.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-yellow-400">{keywordData.title}</span> in Vadodara
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {keywordData.description} in Vadodara. Expert AC installation, service & repair by certified technicians. 
                Same-day service, genuine parts, 90-day warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+919727257141"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"
                >
                  <Phone size={22} />
                  +91 97272 57141
                </a>
                <a
                  href="https://wa.me/919727257141"
                  className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition"
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Installation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Repair</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <BookingForm title={`Book ${keywordData.title} Service`} />
            </div>
          </div>
        </div>
      </section>

      {/* AC Installation, Service & Repair */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {keywordData.title} - Installation, Service & Repair
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Complete AC solutions including installation, service and repair for {keywordData.title.toLowerCase()} in Vadodara
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-green-300 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <ThermometerSnowflake className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Installation</h3>
              <p className="text-gray-600 mb-4">
                Professional {keywordData.title.toLowerCase()} installation in Vadodara. Expert installation with proper site inspection, quality materials, and perfect setup.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Site survey & consultation</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Quality copper piping</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Proper electrical wiring</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Gas charging & testing</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-300 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Service</h3>
              <p className="text-gray-600 mb-4">
                Regular {keywordData.title.toLowerCase()} service and maintenance in Vadodara. Keep your AC running efficiently with professional cleaning and tune-up.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Deep filter cleaning</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Coil cleaning & sanitization</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Gas pressure check</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Performance optimization</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-red-300 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Wrench className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Repair</h3>
              <p className="text-gray-600 mb-4">
                Expert {keywordData.title.toLowerCase()} repair in Vadodara. We fix all AC problems with genuine spare parts and 90-day warranty on repairs.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500" /> Cooling issue repair</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500" /> Gas leak detection & fix</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500" /> Compressor repair</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500" /> Electrical fault repair</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Atlas Aircon for {keywordData.title}?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">20+ Years Experience</h3>
              <p className="text-gray-600 text-sm">Trusted since 2004</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">90 Days Warranty</h3>
              <p className="text-gray-600 text-sm">On all repairs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Same Day Service</h3>
              <p className="text-gray-600 text-sm">Quick response</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">5000+ Customers</h3>
              <p className="text-gray-600 text-sm">Happy customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {keywordData.title} Price in Vadodara
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Transparent pricing with no hidden charges
          </p>
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="text-left py-4 px-6">Service</th>
                  <th className="text-right py-4 px-6">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">AC Installation (Split/Window)</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹1,499 - ₹2,999</td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="py-4 px-6">AC Service (Basic)</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹399 - ₹599</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">AC Deep Cleaning</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹799 - ₹1,199</td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="py-4 px-6">AC Repair</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹500 - ₹5,000</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">AC Gas Refilling</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹1,500 - ₹3,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      
      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "What false ceiling ac ducting vadodaras does Atlas Aircon provide?", a: "Atlas Aircon provides false ceiling ac ducting vadodara, service, installation, AMC, gas refilling, and maintenance for all brands and types in Vadodara." },
              { q: "How do I book false ceiling ac ducting vadodara?", a: "Call +91 97272 57141, WhatsApp us, or book online. Same-day service available across Vadodara." },
              { q: "What is your service charge?", a: "Inspection charge is ₹299 (adjusted against repairs). Basic service from ₹499, deep cleaning from ₹799, gas refilling from ₹1,500." },
              { q: "Do you provide warranty?", a: "Yes, 30-90 days warranty on repairs, 1 year on installation. Spare parts carry manufacturer warranty." },
              { q: "Which brands do you service?", a: "We service all brands: Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Panasonic, Godrej, and more." },
              { q: "Is emergency service available?", a: "Yes, 24/7 emergency false ceiling ac ducting vadodara available. Call +91 97272 57141 for immediate assistance." },
              { q: "What payment methods do you accept?", a: "Cash, UPI (GPay, PhonePe), bank transfer, and cards. Payment after service completion." },
              { q: "Do you offer AMC?", a: "Yes, AMC from ₹1,999/year includes free services, priority support, and repair discounts." },
              { q: "Where are you located?", a: "Atlas Aircon is based in Sayajigunj, Vadodara. We serve all areas across Vadodara and Gujarat." },
              { q: "What are your working hours?", a: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM. 24/7 emergency service available." }
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
          { "@type": "Question", name: "What false ceiling ac ducting vadodaras does Atlas Aircon provide?", acceptedAnswer: { "@type": "Answer", text: "Atlas Aircon provides false ceiling ac ducting vadodara, service, installation, AMC, gas refilling, and maintenance for all brands and types in Vadodara." } },
          { "@type": "Question", name: "How do I book false ceiling ac ducting vadodara?", acceptedAnswer: { "@type": "Answer", text: "Call +91 97272 57141, WhatsApp us, or book online. Same-day service available across Vadodara." } },
          { "@type": "Question", name: "What is your service charge?", acceptedAnswer: { "@type": "Answer", text: "Inspection charge is ₹299 (adjusted against repairs). Basic service from ₹499, deep cleaning from ₹799, gas refilling from ₹1,500." } },
          { "@type": "Question", name: "Do you provide warranty?", acceptedAnswer: { "@type": "Answer", text: "Yes, 30-90 days warranty on repairs, 1 year on installation. Spare parts carry manufacturer warranty." } },
          { "@type": "Question", name: "Which brands do you service?", acceptedAnswer: { "@type": "Answer", text: "We service all brands: Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Panasonic, Godrej, and more." } },
          { "@type": "Question", name: "Is emergency service available?", acceptedAnswer: { "@type": "Answer", text: "Yes, 24/7 emergency false ceiling ac ducting vadodara available. Call +91 97272 57141 for immediate assistance." } },
          { "@type": "Question", name: "What payment methods do you accept?", acceptedAnswer: { "@type": "Answer", text: "Cash, UPI (GPay, PhonePe), bank transfer, and cards. Payment after service completion." } },
          { "@type": "Question", name: "Do you offer AMC?", acceptedAnswer: { "@type": "Answer", text: "Yes, AMC from ₹1,999/year includes free services, priority support, and repair discounts." } },
          { "@type": "Question", name: "Where are you located?", acceptedAnswer: { "@type": "Answer", text: "Atlas Aircon is based in Sayajigunj, Vadodara. We serve all areas across Vadodara and Gujarat." } },
          { "@type": "Question", name: "What are your working hours?", acceptedAnswer: { "@type": "Answer", text: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM. 24/7 emergency service available." } }
        ]
      }) }} />

{/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need {keywordData.title} Service in Vadodara?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Expert AC installation, service & repair for {keywordData.title.toLowerCase()} in Vadodara.
            Same-day service available. Call now!
          </p>
          <a
            href="tel:+919727257141"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"
          >
            <Phone size={22} />
            Call +91 97272 57141
          </a>
        </div>
      </section>
    </>
  );
}
