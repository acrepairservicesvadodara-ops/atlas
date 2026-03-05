import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Star, Clock, Shield, Award, MapPin, ArrowRight, Wrench, AlertTriangle, Zap, ThermometerSnowflake, Settings } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "AC Installation Charges in Vadodara | Installation, Service & Repair | Hitech Aircool Engineers",
  description: "AC installation cost in Vadodara. Expert AC installation, service & repair. 20+ years experience, 90-day warranty. Call +91 93289 53665",
  keywords: [
    "AC Installation Charges Vadodara",
    "ac installation charges",
    "AC Installation Charges installation",
    "AC Installation Charges service",
    "AC Installation Charges repair",
    "best AC Installation Charges service",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-installation-charges-vadodara",
  },
};

const keywordData = {
  title: "AC Installation Charges",
  slug: "ac-installation-charges",
  description: "AC installation cost",
  category: "Core"
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

export default function ACInstallationChargesPage() {
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
              { q: "What is included in AC installation?", a: "AC installation includes site inspection, bracket/stand fitting, copper piping up to 3m, electrical wiring, drain pipe, gas charging, vacuum testing, and final testing." },
              { q: "How much does AC installation cost in Vadodara?", a: "AC installation costs vary: Split AC from ₹1,500, Window AC from ₹800, Cassette AC from ₹3,500. Additional piping charged at ₹150/meter." },
              { q: "How long does AC installation take?", a: "Standard AC installation takes 2-3 hours for split AC, 1-2 hours for window AC. Complex installations with long piping may take 4-5 hours." },
              { q: "Do you provide AC installation warranty?", a: "Hitech Aircool Engineers provides 1-year warranty on installation workmanship. Any installation-related issues within this period are fixed free of charge." },
              { q: "Can you relocate my existing AC?", a: "Yes, AC relocation includes uninstallation, transport, reinstallation, gas top-up, and testing. Charges vary by distance and AC type." },
              { q: "What type of copper piping do you use?", a: "We use premium quality copper pipes (0.8mm thickness) with proper insulation. Quality piping prevents gas leaks and maintains AC efficiency." },
              { q: "Is electrical work included in installation?", a: "Basic electrical work is included. MCB installation, dedicated wiring, or major modifications are charged separately after inspection." },
              { q: "Can you install AC on higher floors?", a: "Yes, installation available for all floor levels. For high-rise buildings, we coordinate with society for outdoor unit placement." },
              { q: "Do you provide demo after AC installation?", a: "Yes, our technician provides demo of AC operation, remote control features, and basic maintenance tips after installation." },
              { q: "What should I prepare before AC installation?", a: "Ensure installation area is accessible and clear. For split AC, decide outdoor unit placement. Electrical point should be within 2 meters." }
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
          { "@type": "Question", name: "What is included in AC installation?", acceptedAnswer: { "@type": "Answer", text: "AC installation includes site inspection, bracket/stand fitting, copper piping up to 3m, electrical wiring, drain pipe, gas charging, vacuum testing, and final testing." } },
          { "@type": "Question", name: "How much does AC installation cost in Vadodara?", acceptedAnswer: { "@type": "Answer", text: "AC installation costs vary: Split AC from ₹1,500, Window AC from ₹800, Cassette AC from ₹3,500. Additional piping charged at ₹150/meter." } },
          { "@type": "Question", name: "How long does AC installation take?", acceptedAnswer: { "@type": "Answer", text: "Standard AC installation takes 2-3 hours for split AC, 1-2 hours for window AC. Complex installations with long piping may take 4-5 hours." } },
          { "@type": "Question", name: "Do you provide AC installation warranty?", acceptedAnswer: { "@type": "Answer", text: "Hitech Aircool Engineers provides 1-year warranty on installation workmanship. Any installation-related issues within this period are fixed free of charge." } },
          { "@type": "Question", name: "Can you relocate my existing AC?", acceptedAnswer: { "@type": "Answer", text: "Yes, AC relocation includes uninstallation, transport, reinstallation, gas top-up, and testing. Charges vary by distance and AC type." } },
          { "@type": "Question", name: "What type of copper piping do you use?", acceptedAnswer: { "@type": "Answer", text: "We use premium quality copper pipes (0.8mm thickness) with proper insulation. Quality piping prevents gas leaks and maintains AC efficiency." } },
          { "@type": "Question", name: "Is electrical work included in installation?", acceptedAnswer: { "@type": "Answer", text: "Basic electrical work is included. MCB installation, dedicated wiring, or major modifications are charged separately after inspection." } },
          { "@type": "Question", name: "Can you install AC on higher floors?", acceptedAnswer: { "@type": "Answer", text: "Yes, installation available for all floor levels. For high-rise buildings, we coordinate with society for outdoor unit placement." } },
          { "@type": "Question", name: "Do you provide demo after AC installation?", acceptedAnswer: { "@type": "Answer", text: "Yes, our technician provides demo of AC operation, remote control features, and basic maintenance tips after installation." } },
          { "@type": "Question", name: "What should I prepare before AC installation?", acceptedAnswer: { "@type": "Answer", text: "Ensure installation area is accessible and clear. For split AC, decide outdoor unit placement. Electrical point should be within 2 meters." } }
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
