import { Metadata } from "next";
import Link from "next/link";
import {
  Phone, CheckCircle, Star, Clock, Shield, Award, MapPin,
  ArrowRight, Wrench, AlertTriangle, ThermometerSnowflake,
  Settings, Factory, XCircle, Building2,
} from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Hitachi AC Service Center Anand | Out-of-Warranty Repair Expert | Atlas Aircon",
  description: "Independent Hitachi AC service center in Anand. Expert out-of-warranty split AC repair, gas charging, PCB repair, deep cleaning & compressor overhaul. Same-day service. Call +91 97272 57141.",
  keywords: [
    "hitachi ac service center anand",
    "hitachi ac repair anand",
    "hitachi ac service anand",
    "hitachi split ac repair anand",
    "hitachi ac gas charging anand",
    "hitachi ac pcb repair anand",
    "hitachi ac installation anand",
    "hitachi ac not cooling anand",
    "ac service center anand",
    "best ac repair anand",
  ],
  alternates: { canonical: "https://atlasaircons.com/hitachi-ac-service-center-anand" },
  openGraph: {
    title: "Hitachi AC Service Center Anand | Atlas Aircon",
    description: "Independent out-of-warranty Hitachi AC repair specialist in Anand. Same-day service, 90-day guarantee.",
    url: "https://atlasaircons.com/hitachi-ac-service-center-anand",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hitachi AC Service Center Anand",
  provider: { "@type": "LocalBusiness", name: "Atlas Aircon", telephone: "+919727257141" },
  areaServed: { "@type": "City", name: "Anand" },
  serviceType: "AC Repair Service",
  description: "Independent, out-of-warranty Hitachi AC repair, maintenance and installation in Anand, Gujarat.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is Atlas Aircon an authorized Hitachi service center in Anand?", acceptedAnswer: { "@type": "Answer", text: "No. Atlas Aircon is an independent service provider specializing in high-quality out-of-warranty repairs. If your Hitachi AC is under official warranty, contact Hitachi directly." } },
    { "@type": "Question", name: "How quickly can you repair my Hitachi AC in Anand?", acceptedAnswer: { "@type": "Answer", text: "We offer same-day service across Anand. Our technicians typically arrive within 45-60 minutes of your call for emergency repairs." } },
    { "@type": "Question", name: "What is the cost of Hitachi AC gas refilling in Anand?", acceptedAnswer: { "@type": "Answer", text: "Gas refilling for Hitachi ACs starts at \u20B92,500 including leak detection. Final cost depends on the refrigerant type (R32/R410A) and quantity needed." } },
    { "@type": "Question", name: "Do you provide warranty on Hitachi AC repairs?", acceptedAnswer: { "@type": "Answer", text: "Yes, all repairs are backed by our 90-day labor warranty and 90-day parts warranty under the Atlas Aircon Service Guarantee." } },
  ],
};

export default function HitachiServiceCenterAnandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <Wrench className="w-4 h-4" /><span>Independent Service Provider</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-yellow-400">Hitachi AC Service Center</span> Anand
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Expert independent repair solutions for Hitachi air conditioners in Anand. Specializing in out-of-warranty service with same-day dispatch and a full satisfaction guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:+919727257141" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg">
                  <Phone size={22} /> +91 97272 57141
                </a>
                <a href="https://wa.me/919727257141" className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition">
                  Book Expert Repair
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                {[{ l: "Same-Day Service" }, { l: "90-Day Guarantee" }, { l: "Transparent Pricing" }].map((b) => (
                  <div key={b.l} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span>{b.l}</span></div>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <BookingForm title={"Book Hitachi AC Service"} />
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-4 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-700">
              <strong>Important:</strong> Atlas Aircon is an <strong>Independent and Unauthorized Service Provider</strong>. We are NOT affiliated with Hitachi or any brand&apos;s official service network. We specialize in out-of-warranty repairs only. If your unit is under manufacturer warranty, contact Hitachi&apos;s official support.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content - Why Choose Independent */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Independent Hitachi AC Service in Anand?</h2>
            <p className="text-gray-600">
              Once your Hitachi air conditioner&apos;s official warranty expires, finding quality repair at a reasonable cost becomes a challenge. Authorized centers often push for full-unit replacements on older models or charge premium rates for simple repairs. As Anand&apos;s leading independent Hitachi AC service center, Atlas Aircon specializes in component-level repair that extends the life of your equipment at a fraction of the replacement cost.
            </p>
            <p className="text-gray-600">
              Our technicians are factory-trained on Hitachi&apos;s proprietary inverter technology, PCB architecture, and refrigeration circuits. We maintain a local inventory of common Hitachi spare parts — capacitors, thermistors, fan motors, and PCB boards — so most repairs are completed in a single visit. With over 20 years of experience across Anand and all of Gujarat, we&apos;ve built a reputation for honesty, speed, and technical precision.
            </p>
            <p className="text-gray-600">
              Whether your Hitachi split AC is showing error codes, your window unit isn&apos;t cooling, or your inverter AC&apos;s compressor is making unusual sounds — we&apos;ve seen and fixed it all. From basic servicing to complex compressor overhauling, our Anand-based team handles everything with a commitment to 100% customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Hitachi AC Service Offerings</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: ThermometerSnowflake, t: "Split & Window AC Repair", d: "Gas charging, sensor replacement, PCB repair, and complete overhaul for all Hitachi models including inverter series.", color: "blue" },
              { icon: Settings, t: "Deep Chemical Cleaning", d: "Foam-jet and high-pressure cleaning of evaporator, condenser, and drain pan. Eliminates bacteria and restores cooling.", color: "green" },
              { icon: Building2, t: "Commercial & Ductable AC", d: "Cassette AC, floor-standing, and ductable unit repairs for offices and showrooms in Anand.", color: "purple" },
              { icon: Factory, t: "Industrial Panel AC", d: "Rittal and Hitachi panel cooler maintenance for GIDC factories and automation panels.", color: "red" },
              { icon: Wrench, t: "Compressor Repair", d: "Expert diagnosis and repair of Hitachi rotary and scroll compressors. Motor rewinding available.", color: "orange" },
              { icon: Shield, t: "AMC Plans", d: "Annual Maintenance Contracts with quarterly service visits, priority breakdown support, and discounted parts.", color: "teal" },
            ].map((s) => (
              <div key={s.t} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
                <div className={`w-14 h-14 bg-${s.color === "teal" ? "cyan" : s.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                  <s.icon className={`w-7 h-7 text-${s.color === "teal" ? "cyan" : s.color}-600`} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{s.t}</h3>
                <p className="text-gray-600 text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Hitachi AC Repair Price List — Anand</h2>
          <p className="text-gray-600 text-center mb-12">Transparent pricing for out-of-warranty service</p>
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr><th className="text-left py-4 px-6">Service</th><th className="text-right py-4 px-6">Price</th><th className="text-right py-4 px-6 hidden md:table-cell">Warranty</th></tr>
              </thead>
              <tbody>
                {[
                  { s: "General AC Service", p: "\u20B9599", w: "30 Days" },
                  { s: "Deep Chemical Jet Wash", p: "\u20B9999", w: "60 Days" },
                  { s: "Gas Charging (Full Fill)", p: "\u20B92,500+", w: "90 Days" },
                  { s: "PCB Repair (Component Level)", p: "\u20B91,200 - \u20B93,500", w: "90 Days" },
                  { s: "Compressor Repair", p: "\u20B93,500 - \u20B98,000", w: "90 Days" },
                  { s: "Split AC Installation", p: "\u20B91,500", w: "1 Year" },
                ].map((row, i) => (
                  <tr key={row.s} className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-white" : ""}`}>
                    <td className="py-4 px-6">{row.s}</td>
                    <td className="py-4 px-6 text-right font-semibold text-blue-600">{row.p}</td>
                    <td className="py-4 px-6 text-right text-gray-500 text-sm hidden md:table-cell">{row.w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">All Brands We Service in Anand</h2>
          <p className="text-gray-600 text-center mb-8 text-sm max-w-3xl mx-auto">
            While we specialize as a Hitachi AC service center, our team is equally proficient with all major brands.
            <em> Brand names are used solely to indicate repair expertise — we are independent.</em>
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {["Blue Star","Voltas","Daikin","LG","Samsung","Carrier","Hitachi","Lloyd","Godrej","Panasonic","Haier","Whirlpool","O General","Toshiba","Mitsubishi"].map((b) => (
              <span key={b} className="bg-white text-gray-700 px-5 py-3 rounded-full font-medium text-sm border border-gray-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hitachi AC Service FAQs — Anand</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Is Atlas Aircon an authorized Hitachi service center?", a: "No. We are an independent provider specializing in out-of-warranty repairs. For units under official warranty, contact Hitachi directly." },
              { q: "How quickly can you repair my Hitachi AC in Anand?", a: "Same-day service is standard. Emergency calls are attended within 45-60 minutes across Anand." },
              { q: "What is the cost of Hitachi AC gas refilling?", a: "Gas refilling starts at \u20B92,500 including leak detection. Cost depends on refrigerant type and quantity." },
              { q: "Do you provide warranty on repairs?", a: "Yes — 90-day labor warranty and 90-day parts warranty under our Atlas Aircon Service Guarantee." },
              { q: "Can you repair Hitachi inverter AC PCB?", a: "Absolutely. We do component-level PCB repair for all Hitachi inverter models, saving you the cost of full board replacement." },
            ].map((faq) => (
              <details key={faq.q} className="group bg-gray-50 rounded-xl border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 group-open:border-b group-open:border-gray-200">
                  {faq.q}
                  <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="p-6 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Hitachi AC Repair in Anand?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Expert independent Hitachi AC repair with same-day service, transparent pricing, and 90-day guarantee. Call now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919727257141" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition">
              <Phone size={22} /> Call +91 97272 57141
            </a>
            <a href="https://wa.me/919727257141" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">
              WhatsApp for Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
