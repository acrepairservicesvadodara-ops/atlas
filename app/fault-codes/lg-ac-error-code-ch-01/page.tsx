import { Metadata } from "next";
import Link from "next/link";
import {
  Phone, CheckCircle, AlertTriangle, Zap, ArrowRight, ArrowLeft,
  Wrench, Search, CircleDollarSign, ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "LG AC Error CH01 | Indoor Temperature Sensor Failure | Diagnostic Guide | Atlas Aircon",
  description: "LG AC Error CH01 indicates indoor temperature sensor failure. Learn causes, DIY checks, professional repair costs. Expert LG AC repair in Vadodara. Call +91 97272 57141.",
  keywords: [
    "lg ac error ch01",
    "lg ac error code ch01",
    "lg ac ch01 fault",
    "lg ac indoor temperature sensor failure",
    "lg ac troubleshooting",
    "ac error ch01 meaning",
    "lg ac repair vadodara",
    "ac error code fix",
  ],
  alternates: { canonical: "https://atlasaircons.com/fault-codes/lg-ac-error-code-ch-01" },
  openGraph: {
    title: "LG AC Error CH01 — Indoor Temperature Sensor Failure | Atlas Aircon",
    description: "Diagnostic protocol & repair guide for LG AC Error CH01. Suspects: Thermistor or PCB Circuit.",
    url: "https://atlasaircons.com/fault-codes/lg-ac-error-code-ch-01",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "LG AC Error CH01 — Indoor Temperature Sensor Failure",
  description: "Complete diagnostic protocol and repair guide for LG AC Error Code CH01.",
  author: { "@type": "Organization", name: "Atlas Aircon" },
  publisher: { "@type": "Organization", name: "Atlas Aircon", url: "https://atlasaircons.com" },
  mainEntityOfPage: "https://atlasaircons.com/fault-codes/lg-ac-error-code-ch-01",
};

export default function LGErrorCH01Page() {
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
              <span className="text-red-400">LG AC Error CH01</span>
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
            <h2 className="text-3xl font-bold mb-6">Understanding LG Error CH01</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <p className="text-gray-700">The indoor unit's temperature sensor (thermistor) is sending incorrect readings or has an open circuit. This prevents the AC from regulating temperature properly.</p>
              <p className="text-gray-700 mt-3">
                <strong>Impact:</strong> If left unaddressed, this error can lead to compressor damage, increased energy consumption, and complete system shutdown. It is critical to resolve CH01 promptly to avoid costly repairs.
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
              Our certified technicians follow a systematic approach to diagnose and resolve the CH01 error efficiently. We carry diagnostic tools and common LG spare parts in our service vehicles, enabling single-visit repairs in most cases.
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
            <h3 className="text-2xl font-bold mb-4">When to Call a Professional for Error CH01</h3>
            <p className="text-gray-600 mb-4">
              While the basic checks above can help you identify obvious issues, LG AC systems use sophisticated electronics that require professional diagnostic equipment. If the DIY steps don&apos;t resolve the CH01 code, attempting further repairs without proper tools can cause additional damage — turning a ₹500 sensor replacement into a ₹8,000+ PCB replacement.
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
              <ArrowLeft className="w-5 h-5" /> View All LG Error Codes
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
              { q: "Are you an authorized service center for LG?", a: "Atlas Aircon provides multi-brand AC service. While not an authorized center, our technicians are trained on LG and use genuine parts." },
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
          { "@type": "Question", name: "Are you an authorized service center for LG?", acceptedAnswer: { "@type": "Answer", text: "Atlas Aircon provides multi-brand AC service. While not an authorized center, our technicians are trained on LG and use genuine parts." } },
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
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
          <h2 className="text-3xl font-bold mb-4">Can&apos;t Fix LG Error CH01?</h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Don&apos;t risk further damage. Our expert technicians have resolved this exact error across hundreds of LG units. We can dispatch to your location immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919727257141" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition">
              <Phone size={22} /> Call Expert Now
            </a>
            <a href={`https://wa.me/919727257141?text=${encodeURIComponent("HELP: My LG AC is showing error CH01. I need support.")}`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">
              Get Live Troubleshooting
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
