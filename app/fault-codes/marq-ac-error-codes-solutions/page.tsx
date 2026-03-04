import { Metadata } from "next";
import Link from "next/link";
import {
  Phone, CheckCircle, AlertTriangle, Zap, ArrowRight, ArrowLeft,
  Wrench, Search, CircleDollarSign, ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Marq AC Error SSOLUTIONS | Indoor Temperature Sensor Failure | Diagnostic Guide | Atlas Aircon",
  description: "Marq AC Error SSOLUTIONS indicates indoor temperature sensor failure. Learn causes, DIY checks, professional repair costs. Expert Marq AC repair in Vadodara. Call +91 97272 57141.",
  keywords: [
    "marq ac error ssolutions",
    "marq ac error code ssolutions",
    "marq ac ssolutions fault",
    "marq ac indoor temperature sensor failure",
    "marq ac troubleshooting",
    "ac error ssolutions meaning",
    "marq ac repair vadodara",
    "ac error code fix",
  ],
  alternates: { canonical: "https://atlasaircons.com/fault-codes/marq-ac-error-codes-solutions" },
  openGraph: {
    title: "Marq AC Error SSOLUTIONS — Indoor Temperature Sensor Failure | Atlas Aircon",
    description: "Diagnostic protocol & repair guide for Marq AC Error SSOLUTIONS. Suspects: Thermistor or PCB Circuit.",
    url: "https://atlasaircons.com/fault-codes/marq-ac-error-codes-solutions",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Marq AC Error SSOLUTIONS — Indoor Temperature Sensor Failure",
  description: "Complete diagnostic protocol and repair guide for Marq AC Error Code SSOLUTIONS.",
  author: { "@type": "Organization", name: "Atlas Aircon" },
  publisher: { "@type": "Organization", name: "Atlas Aircon", url: "https://atlasaircons.com" },
  mainEntityOfPage: "https://atlasaircons.com/fault-codes/marq-ac-error-codes-solutions",
};

export default function MarqErrorSSOLUTIONSPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero / Fault Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/ac-error-codes" className="text-gray-400 hover:text-white text-sm flex items-center gap-1 transition mb-4 inline-flex">
              <ArrowLeft className="w-4 h-4" /> Back to Error Code Database
            </Link>
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 px-4 py-2 rounded-full text-sm mb-6">
              <ShieldAlert className="w-4 h-4 text-red-400" /><span className="text-red-300">ACTIVE FAULT</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-red-400">Marq AC Error SSOLUTIONS</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-8">Indoor Temperature Sensor Failure</p>
            <div className="grid grid-cols-3 gap-4 max-w-lg">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 uppercase mb-1">Symptom</p>
                <p className="font-bold text-yellow-400">Indoor Temperature</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 uppercase mb-1">Suspect #1</p>
                <p className="font-bold text-orange-400">Thermistor</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 uppercase mb-1">Suspect #2</p>
                <p className="font-bold text-red-400">PCB Circuit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Warning */}
      <section className="py-4 bg-amber-50 border-b border-amber-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 max-w-4xl mx-auto">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <p className="text-sm text-amber-800"><strong>SAFETY:</strong> Always disconnect power before inspecting any AC components. Never bypass safety sensors.</p>
          </div>
        </div>
      </section>

      {/* Understanding the Error */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Understanding Marq Error SSOLUTIONS</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <p className="text-gray-700">The indoor unit's temperature sensor (thermistor) is sending incorrect readings or has an open circuit. This prevents the AC from regulating temperature properly.</p>
              <p className="text-gray-700 mt-3">
                <strong>Impact:</strong> If left unaddressed, this error can lead to compressor damage, increased energy consumption, and complete system shutdown. It is critical to resolve SSOLUTIONS promptly to avoid costly repairs.
              </p>
            </div>

            {/* DIY Checks */}
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Search className="w-6 h-6 text-blue-600" /> DIY Troubleshooting Steps
            </h3>
            <div className="space-y-4 mb-12">
              {[
                { step: "Step 1", desc: "Check thermistor resistance with multimeter (should read 5-15kΩ at room temp)" },
                { step: "Step 2", desc: "Inspect wiring connector between sensor and PCB for loose pins" },
                { step: "Step 3", desc: "Replace thermistor if resistance is out of range" },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{item.step.split(" ")[1]}</div>
                  <p className="text-gray-600 pt-2">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Professional Protocol */}
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Wrench className="w-6 h-6 text-blue-600" /> Atlas Aircon Repair Protocol
            </h3>
            <p className="text-gray-600 mb-4">
              Our certified technicians follow a systematic approach to diagnose and resolve the SSOLUTIONS error efficiently. We carry diagnostic tools and common Marq spare parts in our service vehicles, enabling single-visit repairs in most cases.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 mb-8">
              <h4 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                <CircleDollarSign className="w-5 h-5" /> Estimated Repair Cost (Atlas Aircon)
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">{("Thermistor: ₹500-₹900").split(":")[0]}</p>
                  <p className="text-xl font-bold text-blue-700">{("Thermistor: ₹500-₹900").split(": ")[1]}</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">{("PCB Repair: ₹1,200-₹2,500").split(":")[0]}</p>
                  <p className="text-xl font-bold text-blue-700">{("PCB Repair: ₹1,200-₹2,500").split(": ")[1]}</p>
                </div>
              </div>
            </div>

            {/* Extra SEO content */}
            <h3 className="text-2xl font-bold mb-4">When to Call a Professional for Error SSOLUTIONS</h3>
            <p className="text-gray-600 mb-4">
              While the basic checks above can help you identify obvious issues, Marq AC systems use sophisticated electronics that require professional diagnostic equipment. If the DIY steps don&apos;t resolve the SSOLUTIONS code, attempting further repairs without proper tools can cause additional damage — turning a ₹500 sensor replacement into a ₹8,000+ PCB replacement.
            </p>
            <p className="text-gray-600 mb-8">
              Atlas Aircon&apos;s team carries professional-grade multimeters, clamp meters, refrigerant manifold gauges, and brand-specific diagnostic software. We diagnose the exact fault within 15-30 minutes and provide a transparent quote before starting any repair. Our 90-day warranty covers both parts and labor, giving you complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-6 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center max-w-4xl mx-auto">
            <Link href="/ac-error-codes" className="text-blue-600 hover:text-blue-800 font-medium transition flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" /> View All Marq Error Codes
            </Link>
          </div>
        </div>
      </section>

      
      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "What marq ac error codes solutionss does Atlas Aircon provide?", a: "Atlas Aircon provides marq ac error codes solutions, service, installation, AMC, gas refilling, and maintenance for all brands and types in Vadodara." },
              { q: "How do I book marq ac error codes solutions?", a: "Call +91 97272 57141, WhatsApp us, or book online. Same-day service available across Vadodara." },
              { q: "What is your service charge?", a: "Inspection charge is ₹299 (adjusted against repairs). Basic service from ₹499, deep cleaning from ₹799, gas refilling from ₹1,500." },
              { q: "Do you provide warranty?", a: "Yes, 30-90 days warranty on repairs, 1 year on installation. Spare parts carry manufacturer warranty." },
              { q: "Which brands do you service?", a: "We service all brands: Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Panasonic, Godrej, and more." },
              { q: "Is emergency service available?", a: "Yes, 24/7 emergency marq ac error codes solutions available. Call +91 97272 57141 for immediate assistance." },
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
          { "@type": "Question", name: "What marq ac error codes solutionss does Atlas Aircon provide?", acceptedAnswer: { "@type": "Answer", text: "Atlas Aircon provides marq ac error codes solutions, service, installation, AMC, gas refilling, and maintenance for all brands and types in Vadodara." } },
          { "@type": "Question", name: "How do I book marq ac error codes solutions?", acceptedAnswer: { "@type": "Answer", text: "Call +91 97272 57141, WhatsApp us, or book online. Same-day service available across Vadodara." } },
          { "@type": "Question", name: "What is your service charge?", acceptedAnswer: { "@type": "Answer", text: "Inspection charge is ₹299 (adjusted against repairs). Basic service from ₹499, deep cleaning from ₹799, gas refilling from ₹1,500." } },
          { "@type": "Question", name: "Do you provide warranty?", acceptedAnswer: { "@type": "Answer", text: "Yes, 30-90 days warranty on repairs, 1 year on installation. Spare parts carry manufacturer warranty." } },
          { "@type": "Question", name: "Which brands do you service?", acceptedAnswer: { "@type": "Answer", text: "We service all brands: Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Panasonic, Godrej, and more." } },
          { "@type": "Question", name: "Is emergency service available?", acceptedAnswer: { "@type": "Answer", text: "Yes, 24/7 emergency marq ac error codes solutions available. Call +91 97272 57141 for immediate assistance." } },
          { "@type": "Question", name: "What payment methods do you accept?", acceptedAnswer: { "@type": "Answer", text: "Cash, UPI (GPay, PhonePe), bank transfer, and cards. Payment after service completion." } },
          { "@type": "Question", name: "Do you offer AMC?", acceptedAnswer: { "@type": "Answer", text: "Yes, AMC from ₹1,999/year includes free services, priority support, and repair discounts." } },
          { "@type": "Question", name: "Where are you located?", acceptedAnswer: { "@type": "Answer", text: "Atlas Aircon is based in Sayajigunj, Vadodara. We serve all areas across Vadodara and Gujarat." } },
          { "@type": "Question", name: "What are your working hours?", acceptedAnswer: { "@type": "Answer", text: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM. 24/7 emergency service available." } }
        ]
      }) }} />

{/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
          <h2 className="text-3xl font-bold mb-4">Can&apos;t Fix Marq Error SSOLUTIONS?</h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Don&apos;t risk further damage. Our expert technicians have resolved this exact error across hundreds of Marq units. We can dispatch to your location immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919727257141" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition">
              <Phone size={22} /> Call Expert Now
            </a>
            <a href={`https://wa.me/919727257141?text=${encodeURIComponent("HELP: My Marq AC is showing error SSOLUTIONS. I need support.")}`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">
              Get Live Troubleshooting
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
