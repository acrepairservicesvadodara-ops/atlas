import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Star, Clock, Shield, Award, MapPin, ArrowRight, Wrench, AlertTriangle, Zap, ThermometerSnowflake, Settings } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "24 Hour AC Service in Vadodara | Installation, Service & Repair | Hitech Aircool Engineers",
  description: "24 hour AC repair in Vadodara. Expert AC installation, service & repair. 20+ years experience, 90-day warranty. Call +91 93289 53665",
  keywords: [
    "24 Hour AC Service Vadodara",
    "24 hour ac service",
    "24 Hour AC Service installation",
    "24 Hour AC Service service",
    "24 Hour AC Service repair",
    "best 24 Hour AC Service service",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/24-hour-ac-service-vadodara",
  },
};

const keywordData = {
  title: "24 Hour AC Service",
  slug: "24-hour-ac-service",
  description: "24 hour AC repair",
  category: "Emergency"
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

export default function AC24HourACServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 text-white py-16 md:py-24">
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
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                {keywordData.description} in Vadodara. Expert AC installation, service & repair by certified technicians. 
                Same-day service, genuine parts, 90-day warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+919328953665"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"
                >
                  <Phone size={22} />
                  +91 93289 53665
                </a>
                <a
                  href="https://wa.me/919328953665"
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
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Service</h3>
              <p className="text-gray-600 mb-4">
                Regular {keywordData.title.toLowerCase()} service and maintenance in Vadodara. Keep your AC running efficiently with professional cleaning and tune-up.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Deep filter cleaning</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Coil cleaning & sanitization</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Gas pressure check</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Performance optimization</li>
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
            Why Choose Hitech Aircool Engineers for {keywordData.title}?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-semibold mb-2">20+ Years Experience</h3>
              <p className="text-gray-600 text-sm">Trusted since 2004</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-semibold mb-2">90 Days Warranty</h3>
              <p className="text-gray-600 text-sm">On all repairs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-semibold mb-2">Same Day Service</h3>
              <p className="text-gray-600 text-sm">Quick response</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-teal-600" />
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
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="text-left py-4 px-6">Service</th>
                  <th className="text-right py-4 px-6">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">AC Installation (Split/Window)</td>
                  <td className="py-4 px-6 text-right font-semibold text-teal-600">₹1,499 - ₹2,999</td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="py-4 px-6">AC Service (Basic)</td>
                  <td className="py-4 px-6 text-right font-semibold text-teal-600">₹399 - ₹599</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">AC Deep Cleaning</td>
                  <td className="py-4 px-6 text-right font-semibold text-teal-600">₹799 - ₹1,199</td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="py-4 px-6">AC Repair</td>
                  <td className="py-4 px-6 text-right font-semibold text-teal-600">₹500 - ₹5,000</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">AC Gas Refilling</td>
                  <td className="py-4 px-6 text-right font-semibold text-teal-600">₹1,500 - ₹3,000</td>
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
              { q: "What does 24 Hour Ac Service Vadodara include?", a: "24 Hour Ac Service Vadodara includes filter cleaning, coil jet wash, drain pipe clearing, gas pressure check, electrical inspection, fan motor check, and performance testing." },
              { q: "How much does 24 Hour Ac Service Vadodara cost?", a: "24 Hour Ac Service Vadodara starts from ₹499 for basic service. Deep jet cleaning is ₹799 for split AC, ₹599 for window AC. Chemical wash starts from ₹999." },
              { q: "How often should AC be serviced?", a: "AC should be serviced at least twice a year — before summer and after monsoon. Heavy use environments may need quarterly servicing." },
              { q: "Will 24 Hour Ac Service Vadodara improve cooling?", a: "Yes, proper 24 Hour Ac Service Vadodara can improve cooling efficiency by 20-30%. Dirty filters and coils reduce airflow and heat exchange." },
              { q: "Does 24 Hour Ac Service Vadodara reduce electricity bills?", a: "Regular 24 Hour Ac Service Vadodara can reduce electricity consumption by 15-25%. A well-maintained AC runs more efficiently, saving power." },
              { q: "How long does 24 Hour Ac Service Vadodara take?", a: "Basic 24 Hour Ac Service Vadodara takes 30-45 minutes. Deep cleaning with jet wash takes 1-1.5 hours. Chemical foam cleaning takes about 2 hours." },
              { q: "Can 24 Hour Ac Service Vadodara remove bad smell?", a: "Yes, 24 Hour Ac Service Vadodara includes cleaning of filters, coils, and drain pan which removes bacteria and mold causing odors. Anti-bacterial spray applied." },
              { q: "Is gas top-up included in 24 Hour Ac Service Vadodara?", a: "Basic service includes gas pressure check. If gas is low, top-up is charged separately — R22 from ₹1,500, R32/R410A from ₹2,000." },
              { q: "Do you clean outdoor AC unit?", a: "Yes, complete service includes outdoor unit cleaning. Condenser coil cleaning is essential for proper heat rejection." },
              { q: "What's the difference between service and deep cleaning?", a: "Basic service is dry cleaning and inspection. Deep cleaning uses high-pressure jet wash. Chemical wash uses foam for thorough cleaning." }
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
          { "@type": "Question", name: "What does 24 Hour Ac Service Vadodara include?", acceptedAnswer: { "@type": "Answer", text: "24 Hour Ac Service Vadodara includes filter cleaning, coil jet wash, drain pipe clearing, gas pressure check, electrical inspection, fan motor check, and performance testing." } },
          { "@type": "Question", name: "How much does 24 Hour Ac Service Vadodara cost?", acceptedAnswer: { "@type": "Answer", text: "24 Hour Ac Service Vadodara starts from ₹499 for basic service. Deep jet cleaning is ₹799 for split AC, ₹599 for window AC. Chemical wash starts from ₹999." } },
          { "@type": "Question", name: "How often should AC be serviced?", acceptedAnswer: { "@type": "Answer", text: "AC should be serviced at least twice a year — before summer and after monsoon. Heavy use environments may need quarterly servicing." } },
          { "@type": "Question", name: "Will 24 Hour Ac Service Vadodara improve cooling?", acceptedAnswer: { "@type": "Answer", text: "Yes, proper 24 Hour Ac Service Vadodara can improve cooling efficiency by 20-30%. Dirty filters and coils reduce airflow and heat exchange." } },
          { "@type": "Question", name: "Does 24 Hour Ac Service Vadodara reduce electricity bills?", acceptedAnswer: { "@type": "Answer", text: "Regular 24 Hour Ac Service Vadodara can reduce electricity consumption by 15-25%. A well-maintained AC runs more efficiently, saving power." } },
          { "@type": "Question", name: "How long does 24 Hour Ac Service Vadodara take?", acceptedAnswer: { "@type": "Answer", text: "Basic 24 Hour Ac Service Vadodara takes 30-45 minutes. Deep cleaning with jet wash takes 1-1.5 hours. Chemical foam cleaning takes about 2 hours." } },
          { "@type": "Question", name: "Can 24 Hour Ac Service Vadodara remove bad smell?", acceptedAnswer: { "@type": "Answer", text: "Yes, 24 Hour Ac Service Vadodara includes cleaning of filters, coils, and drain pan which removes bacteria and mold causing odors. Anti-bacterial spray applied." } },
          { "@type": "Question", name: "Is gas top-up included in 24 Hour Ac Service Vadodara?", acceptedAnswer: { "@type": "Answer", text: "Basic service includes gas pressure check. If gas is low, top-up is charged separately — R22 from ₹1,500, R32/R410A from ₹2,000." } },
          { "@type": "Question", name: "Do you clean outdoor AC unit?", acceptedAnswer: { "@type": "Answer", text: "Yes, complete service includes outdoor unit cleaning. Condenser coil cleaning is essential for proper heat rejection." } },
          { "@type": "Question", name: "What's the difference between service and deep cleaning?", acceptedAnswer: { "@type": "Answer", text: "Basic service is dry cleaning and inspection. Deep cleaning uses high-pressure jet wash. Chemical wash uses foam for thorough cleaning." } }
        ]
      }) }} />

{/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need {keywordData.title} Service in Vadodara?
          </h2>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
            Expert AC installation, service & repair for {keywordData.title.toLowerCase()} in Vadodara.
            Same-day service available. Call now!
          </p>
          <a
            href="tel:+919328953665"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"
          >
            <Phone size={22} />
            Call +91 93289 53665
          </a>
        </div>
      </section>
    </>
  );
}
