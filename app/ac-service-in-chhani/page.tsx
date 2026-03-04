import { Metadata } from "next";
import Link from "next/link";
import {
  Phone, CheckCircle, Star, Clock, Shield, Award, MapPin,
  ArrowRight, Wrench, ThermometerSnowflake, Settings, ThumbsUp,
} from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "AC Service & Repair in Chhani, Vadodara | Expert Technicians | Atlas Aircon",
  description: "Best AC service in Chhani, Vadodara. Professional AC repair, installation, gas refilling & deep cleaning. 24/7 emergency support. 1-year warranty. Starting \u20B9499. Call +91 97272 57141.",
  keywords: [
    "ac service chhani",
    "ac repair chhani vadodara",
    "ac installation chhani",
    "ac gas refilling chhani",
    "split ac repair chhani",
    "window ac service chhani",
    "ac deep cleaning chhani",
    "best ac service near me chhani",
    "ac mechanic chhani vadodara",
    "refrigerator repair chhani",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/ac-service-in-chhani",
  },
  openGraph: {
    title: "AC Service & Repair in Chhani | Atlas Aircon Vadodara",
    description: "Professional AC repair, installation & maintenance in Chhani. 24/7 emergency service, 1-year warranty.",
    url: "https://atlasaircons.com/ac-service-in-chhani",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Service in Chhani",
  provider: {
    "@type": "LocalBusiness",
    name: "Atlas Aircon",
    telephone: "+919727257141",
    address: { "@type": "PostalAddress", addressLocality: "Vadodara", addressRegion: "Gujarat", postalCode: "390005", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "5000" },
  },
  areaServed: { "@type": "Place", name: "Chhani, Vadodara" },
  serviceType: "AC Repair and Maintenance",
  offers: { "@type": "AggregateOffer", lowPrice: "249", highPrice: "5000", priceCurrency: "INR" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does AC service cost in Chhani?", acceptedAnswer: { "@type": "Answer", text: "Standard AC service in Chhani costs \u20B9499-\u20B9799 for window/split ACs. Deep jet cleaning starts at \u20B9499. Visit charges of \u20B9299 are adjusted against the final repair bill." } },
    { "@type": "Question", name: "Do you provide 24/7 emergency AC repair in Chhani?", acceptedAnswer: { "@type": "Answer", text: "Yes, Atlas Aircon provides round-the-clock emergency AC repair across Chhani and all of Vadodara. Our technicians can reach you within 45-60 minutes." } },
    { "@type": "Question", name: "Which AC brands do you service in Chhani?", acceptedAnswer: { "@type": "Answer", text: "We service all major brands including Voltas, LG, Samsung, Daikin, Hitachi, Blue Star, Carrier, O General, Lloyd, Panasonic and more." } },
    { "@type": "Question", name: "Do you offer an AC AMC plan for Chhani residents?", acceptedAnswer: { "@type": "Answer", text: "Yes, we offer comprehensive Annual Maintenance Contracts (AMC) covering quarterly servicing, priority emergency calls, and discounted spare parts for homes and offices in Chhani." } },
    { "@type": "Question", name: "What warranty do you give on AC repairs?", acceptedAnswer: { "@type": "Answer", text: "All repairs come with a 1-year service warranty and 90-day parts warranty, giving you complete peace of mind." } },
  ],
};

export default function ACServiceInChhaniPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <MapPin className="w-4 h-4" />
                <span>Chhani, Vadodara</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-yellow-400">AC Service &amp; Repair</span> in Chhani
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Looking for reliable AC service in Chhani? Atlas Aircon delivers fast, professional AC repair, installation and maintenance for all brands.
                Certified technicians, genuine parts, transparent pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:+919727257141" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg">
                  <Phone size={22} />
                  +91 97272 57141
                </a>
                <a href="https://wa.me/919727257141" className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition">
                  WhatsApp Us
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                {[{ l: "Certified Technicians" }, { l: "24/7 Emergency" }, { l: "1-Year Warranty" }, { l: "4.9★ Rated" }].map((b) => (
                  <div key={b.l} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span>{b.l}</span></div>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <BookingForm title={"Book AC Service in Chhani"} />
            </div>
          </div>
        </div>
      </section>

      {/* About Chhani Service Area — SEO Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Professional AC Service in Chhani — Vadodara</h2>
            <p className="text-gray-600">
              Chhani is one of the well-known localities in Vadodara, Gujarat, and homeowners here depend on air conditioning throughout the intense summer months. At Atlas Aircon, we bring over 20 years of HVAC expertise directly to your doorstep in Chhani. Whether you need a quick AC gas top-up, an annual maintenance check, or a complete split AC installation, our factory-trained engineers ensure the job is done right the first time.
            </p>
            <p className="text-gray-600">
              What sets us apart is our commitment to transparency and quality. Every technician carries a digital diagnostic toolkit, and you receive a detailed service report after each visit. We stock genuine spare parts for all major brands — so there is no waiting for components to arrive. For customers in Chhani, we typically arrive within 30-60 minutes of booking, making us the fastest AC service provider in the Vadodara region.
            </p>
            <p className="text-gray-600">
              Regular AC maintenance in Chhani is not a luxury — it is a necessity. Gujarat&apos;s hot climate means your air conditioner works harder and longer than units in cooler states. Dust from nearby construction, along with Vadodara&apos;s humidity, can clog filters and corrode fins faster than you&apos;d expect. Our deep-cleaning service removes years of buildup, restoring your AC&apos;s original cooling capacity and cutting your electricity bill by up to 15-20%.
            </p>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services &amp; Transparent Pricing</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Honest pricing with no hidden fees. All rates are for the Chhani area.</p>
          <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="text-left py-4 px-6">Service</th>
                  <th className="text-left py-4 px-6 hidden md:table-cell">Details</th>
                  <th className="text-right py-4 px-6">Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { s: "AC Repair (Visit + Diagnosis)", d: "Complete fault diagnosis for split, window & inverter ACs", p: "\u20B9299" },
                  { s: "AC Jet Pump Deep Service", d: "High-pressure cleaning of indoor & outdoor units", p: "From \u20B9499" },
                  { s: "AC Installation / Uninstallation", d: "Professional mounting, piping, wiring & gas charging", p: "From \u20B9799" },
                  { s: "AC Gas Refilling (R32/R410A)", d: "Leak detection, vacuum & full refrigerant recharge", p: "From \u20B91,500" },
                  { s: "AC Deep Chemical Wash", d: "Foam-based chemical cleaning of coils & drain pan", p: "From \u20B9999" },
                  { s: "Refrigerator Repair", d: "Gas charging, thermostat, compressor & gasket repair", p: "\u20B9249 (Visit)" },
                  { s: "Air Cooler Repair", d: "Motor, pump, pad & wiring repair for all cooler types", p: "\u20B9199 (Visit)" },
                ].map((row, i) => (
                  <tr key={row.s} className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                    <td className="py-4 px-6 font-medium">{row.s}</td>
                    <td className="py-4 px-6 text-gray-500 text-sm hidden md:table-cell">{row.d}</td>
                    <td className="py-4 px-6 text-right font-semibold text-blue-600 whitespace-nowrap">{row.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-gray-500 p-4 italic">*Final prices may vary based on AC type, tonnage and required parts. <Link href="/ac-service-charges-in-vadodara" className="text-blue-600 hover:underline">View full price list</Link></p>
          </div>
        </div>
      </section>

      {/* Why Choose — 4 pillars */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Chhani Residents Trust Atlas Aircon</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Award, t: "20+ Years Experience", d: "Gujarat\u2019s most experienced HVAC team since 2004" },
              { icon: Clock, t: "45-Min Response Time", d: "Fastest dispatch in Chhani & all Vadodara" },
              { icon: Shield, t: "1-Year Service Warranty", d: "Industry-leading warranty on every repair" },
              { icon: Star, t: "4.9/5 Star Rating", d: "5,000+ happy customers across Gujarat" },
            ].map((item) => (
              <div key={item.t} className="text-center bg-gray-50 p-6 rounded-xl">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">{item.t}</h3>
                <p className="text-gray-600 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra SEO Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Common AC Problems We Solve in Chhani</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { t: "AC Not Cooling Properly", d: "Low gas levels, dirty filters, or a faulty compressor. We diagnose the root cause and restore full cooling in a single visit." },
                { t: "AC Water Leaking", d: "Blocked drain pipe or frozen evaporator coil. Our technicians clear the drain line and check for underlying issues." },
                { t: "AC Making Noise", d: "Loose fan blades, worn bearings, or compressor vibration. We fix the source of the noise and add vibration dampeners." },
                { t: "AC Bad Smell", d: "Mold and bacteria buildup inside the unit. Our deep chemical wash eliminates odors and sanitizes the system." },
                { t: "AC Tripping MCB", d: "Electrical short, overloaded circuit, or faulty capacitor. We perform a complete electrical safety check and repair." },
                { t: "High Electricity Bills", d: "Dirty coils, low gas, or inefficient operation. Our tune-up service can reduce your AC power consumption by 15-20%." },
              ].map((item) => (
                <div key={item.t} className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-blue-600" /> {item.t}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Book Service in 3 Simple Steps</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { n: "1", t: "Call or WhatsApp", d: "Describe your AC issue. We\u2019ll give you an instant estimate and schedule a visit at your convenience." },
              { n: "2", t: "Expert Diagnosis & Repair", d: "Our certified technician arrives, diagnoses the fault with professional tools, and completes the repair on the spot." },
              { n: "3", t: "Enjoy Cool Comfort", d: "Your AC is restored to peak performance. Pay via cash, UPI or card. Warranty card issued instantly." },
            ].map((item) => (
              <div key={item.n} className="bg-gray-50 p-8 rounded-xl text-center">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">{item.n}</div>
                <h3 className="text-lg font-bold mb-3">{item.t}</h3>
                <p className="text-gray-600 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions — AC Service in Chhani</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How much does AC service cost in Chhani?", a: "Standard AC service costs \u20B9499-\u20B9799. Deep cleaning starts at \u20B9499. Visit charge of \u20B9299 is deducted from the repair bill." },
              { q: "Do you provide 24/7 emergency AC repair in Chhani?", a: "Yes! Our technicians are available round the clock. We can reach Chhani within 45-60 minutes for emergency calls." },
              { q: "Which AC brands do you service?", a: "All major brands: Voltas, LG, Samsung, Daikin, Hitachi, Blue Star, Carrier, O General, Lloyd, Panasonic, and more." },
              { q: "Do you offer AMC plans for Chhani residents?", a: "Yes, we offer Comprehensive and Non-Comprehensive AMCs with quarterly servicing, priority support, and discounted parts." },
              { q: "What warranty do you provide on AC repairs?", a: "1-year service warranty on all repairs and 90-day warranty on replaced spare parts." },
              { q: "Can you install a new split AC in Chhani?", a: "Absolutely. We handle end-to-end installation including site survey, copper piping, wiring, wall mounting, gas charging, and testing." },
              { q: "How often should I service my AC?", a: "We recommend servicing twice a year — once before summer and once after. Regular maintenance extends lifespan and saves on electricity." },
            ].map((faq) => (
              <details key={faq.q} className="group bg-white rounded-xl border border-gray-200">
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

      {/* Nearby Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">AC Service Across Vadodara</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {[{"name":"Alkapuri","href":"/ac-service-in-alkapuri"},{"name":"Akota","href":"/ac-service-in-akota"},{"name":"Sayajigunj","href":"/ac-service-in-sayajigunj"},{"name":"Raopura","href":"/ac-service-in-raopura"},{"name":"Mandvi","href":"/ac-service-in-mandvi"},{"name":"Pratapgunj","href":"/ac-service-in-pratapgunj"},{"name":"Fatehgunj","href":"/ac-service-in-fatehgunj"},{"name":"Nizampura","href":"/ac-service-in-nizampura"},{"name":"Chhani","href":"/ac-service-in-chhani"},{"name":"Sama","href":"/ac-service-in-sama"},{"name":"Karelibaug","href":"/ac-service-in-karelibaug"},{"name":"Warasiya","href":"/ac-service-in-warasiya"},{"name":"Harni","href":"/ac-service-in-harni"},{"name":"Ajwa Road","href":"/ac-service-in-ajwa road"},{"name":"Tarsali","href":"/ac-service-in-tarsali"},{"name":"Makarpura","href":"/ac-service-in-makarpura"},{"name":"Maneja","href":"/ac-service-in-maneja"},{"name":"Manjalpur","href":"/ac-service-in-manjalpur"},{"name":"Bhayli","href":"/ac-service-in-bhayli"},{"name":"Gotri","href":"/ac-service-in-gotri"}].map((area) => (
              <Link key={area.href} href={area.href} className="bg-gray-50 text-blue-700 px-4 py-2.5 rounded-full border border-blue-200 hover:bg-blue-50 hover:border-blue-400 transition text-sm font-medium">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need AC Service in Chhani?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Expert AC repair, installation &amp; maintenance. Same-day service, genuine parts, 1-year warranty. Book now!
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
