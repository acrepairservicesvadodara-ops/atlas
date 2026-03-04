import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Star, Shield, Award, Clock, MapPin, ArrowRight, Wrench } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Panel AC Service Rajpipla | Atlas Aircon Gujarat",
  description: "Expert panel AC service Rajpipla for industrial units, government offices, and towns across Narmada district. 24/7 emergency repair, AMCs, and service for Ritta",
  alternates: { canonical: "https://atlasaircons.com/panel-ac-service-rajpipla" },
  openGraph: {
    title: "Panel AC Service Rajpipla | Atlas Aircon",
    description: "Expert panel AC service Rajpipla for industrial units, government offices, and towns across Narmada district. 24/7 emergency repair, AMCs, and service for Ritta",
    url: "https://atlasaircons.com/panel-ac-service-rajpipla",
    type: "website",
    images: ["/images/products/panel-ac-repair-service.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Panel AC Service Rajpipla",
  provider: {
    "@type": "LocalBusiness",
    name: "Atlas Aircon",
    telephone: "+919727257141",
    address: { "@type": "PostalAddress", addressLocality: "Vadodara", addressRegion: "Gujarat", postalCode: "390005", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "5000" },
  },
  areaServed: { "@type": "City", name: "Rajpipla" },
};

export default function Pagepanelacservicerajpipla() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <MapPin className="w-4 h-4" /><span>Rajpipla, Gujarat</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Panel AC Service Rajpipla</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">Expert panel AC service Rajpipla for industrial units, government offices, and towns across Narmada district. 24/7 emergency repair, AMCs, and service for Rittal, Schneider units.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:+919727257141" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"><Phone size={22} /> +91 97272 57141</a>
                <a href="https://wa.me/919727257141" className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition">WhatsApp Us</a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                {["Certified Technicians", "24/7 Emergency", "Genuine Parts", "4.9\u2605 Rated"].map(b => (
                  <div key={b} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span>{b}</span></div>
                ))}
              </div>
            </div>
            <div className="hidden md:block"><BookingForm title={"Book Service"} /></div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-4">Expert panel AC service Rajpipla for industrial units, government offices, and towns across Narmada district. 24/7 emergency repair, AMCs, and service for Rittal, Schneider units.</p>
          </div>
        </div>
      </section>


      {/* Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Work Gallery</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <img src="/images/products/panel-ac-repair-service.webp" alt="Panel AC Service Rajpipla" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/Installation-Process-of-Window-Air-conditioner-by-Atlas-Aircon-AC-Repair-Serivce-Vadodara.webp" alt="Panel AC Service Rajpipla" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
          </div>
        </div>
      </section>
      {/* Why Choose */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Atlas Aircon</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Award, t: "20+ Years Experience", d: "Gujarat\u2019s most experienced HVAC team" },
              { icon: Clock, t: "Same-Day Service", d: "Fastest dispatch across Gujarat" },
              { icon: Shield, t: "Service Warranty", d: "Every repair backed by warranty" },
              { icon: Star, t: "4.9/5 Rating", d: "5,000+ happy customers" },
            ].map(item => (
              <div key={item.t} className="text-center bg-gray-50 p-6 rounded-xl">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><item.icon className="w-8 h-8 text-blue-600" /></div>
                <h3 className="font-semibold mb-2">{item.t}</h3>
                <p className="text-gray-600 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Brands We Service</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {["Blue Star","Voltas","Daikin","LG","Samsung","Carrier","Hitachi","Lloyd","Godrej","Panasonic","Haier","Whirlpool","O General","Toshiba","Mitsubishi"].map(b => (
              <span key={b} className="bg-white text-gray-700 px-5 py-3 rounded-full text-sm border border-gray-200 hover:bg-blue-50 transition">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {[{"name":"Alkapuri","href":"/ac-service-in-alkapuri"},{"name":"Akota","href":"/ac-service-in-akota"},{"name":"Sayajigunj","href":"/ac-service-in-sayajigunj"},{"name":"Raopura","href":"/ac-service-in-raopura"},{"name":"Mandvi","href":"/ac-service-in-mandvi"},{"name":"Pratapgunj","href":"/ac-service-in-pratapgunj"},{"name":"Fatehgunj","href":"/ac-service-in-fatehgunj"},{"name":"Nizampura","href":"/ac-service-in-nizampura"},{"name":"Chhani","href":"/ac-service-in-chhani"},{"name":"Sama","href":"/ac-service-in-sama"},{"name":"Karelibaug","href":"/ac-service-in-karelibaug"},{"name":"Warasiya","href":"/ac-service-in-warasiya"},{"name":"Harni","href":"/ac-service-in-harni"},{"name":"Ajwa Road","href":"/ac-service-in-ajwa-road"},{"name":"Tarsali","href":"/ac-service-in-tarsali"},{"name":"Makarpura","href":"/ac-service-in-makarpura"}].map((area: { href: string; name: string }) => (
              <Link key={area.href} href={area.href} className="bg-white text-blue-700 px-4 py-2.5 rounded-full border border-blue-200 hover:bg-blue-50 transition text-sm font-medium">{area.name}</Link>
            ))}
          </div>
        </div>
      </section>

      
      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "What is the cost of PANEL AC repair?", a: "Repair costs vary: gas refilling ₹1,500-₹3,000, PCB repair ₹1,200-₹4,000, compressor replacement ₹4,000-₹12,000. Diagnosis ₹299 adjusted against repairs." },
              { q: "Why is my AC not cooling properly?", a: "Common reasons: low refrigerant gas (leak), dirty filters, blocked condenser coil, faulty compressor, or thermostat issue. Diagnosis required for accurate repair." },
              { q: "How often should PANEL AC be serviced?", a: "PANEL AC should be serviced every 3-6 months depending on usage. At minimum, service before summer and after monsoon season." },
              { q: "Is gas refilling expensive for PANEL AC?", a: "Gas refilling costs depend on refrigerant type: R22 ₹1,500-₹2,500, R32 ₹2,000-₹3,500, R410A ₹2,500-₹4,000. Includes pressure testing." },
              { q: "How long does installation take for PANEL AC?", a: "Installation typically takes 2-4 hours depending on complexity, piping requirements, and site conditions." },
              { q: "What brands do you service for PANEL AC?", a: "We service all brands: Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Panasonic, Godrej, and more." },
              { q: "Is AMC available for PANEL AC?", a: "Yes, AMC plans available from ₹1,999/year. Includes scheduled servicing, priority emergency support, and discounted repairs." },
              { q: "Do you repair older models of PANEL AC?", a: "Yes, we repair all models including discontinued ones. Spare parts sourced for older units when required." },
              { q: "What warranty do you provide?", a: "We provide 30-90 days repair warranty and 1-year installation warranty. Spare parts carry manufacturer warranty." },
              { q: "Can you convert or upgrade PANEL AC?", a: "We can advise on upgrades and handle new installations. Converting between AC types isn't possible but replacement is." }
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
          { "@type": "Question", name: "What is the cost of PANEL AC repair?", acceptedAnswer: { "@type": "Answer", text: "Repair costs vary: gas refilling ₹1,500-₹3,000, PCB repair ₹1,200-₹4,000, compressor replacement ₹4,000-₹12,000. Diagnosis ₹299 adjusted against repairs." } },
          { "@type": "Question", name: "Why is my AC not cooling properly?", acceptedAnswer: { "@type": "Answer", text: "Common reasons: low refrigerant gas (leak), dirty filters, blocked condenser coil, faulty compressor, or thermostat issue. Diagnosis required for accurate repair." } },
          { "@type": "Question", name: "How often should PANEL AC be serviced?", acceptedAnswer: { "@type": "Answer", text: "PANEL AC should be serviced every 3-6 months depending on usage. At minimum, service before summer and after monsoon season." } },
          { "@type": "Question", name: "Is gas refilling expensive for PANEL AC?", acceptedAnswer: { "@type": "Answer", text: "Gas refilling costs depend on refrigerant type: R22 ₹1,500-₹2,500, R32 ₹2,000-₹3,500, R410A ₹2,500-₹4,000. Includes pressure testing." } },
          { "@type": "Question", name: "How long does installation take for PANEL AC?", acceptedAnswer: { "@type": "Answer", text: "Installation typically takes 2-4 hours depending on complexity, piping requirements, and site conditions." } },
          { "@type": "Question", name: "What brands do you service for PANEL AC?", acceptedAnswer: { "@type": "Answer", text: "We service all brands: Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Panasonic, Godrej, and more." } },
          { "@type": "Question", name: "Is AMC available for PANEL AC?", acceptedAnswer: { "@type": "Answer", text: "Yes, AMC plans available from ₹1,999/year. Includes scheduled servicing, priority emergency support, and discounted repairs." } },
          { "@type": "Question", name: "Do you repair older models of PANEL AC?", acceptedAnswer: { "@type": "Answer", text: "Yes, we repair all models including discontinued ones. Spare parts sourced for older units when required." } },
          { "@type": "Question", name: "What warranty do you provide?", acceptedAnswer: { "@type": "Answer", text: "We provide 30-90 days repair warranty and 1-year installation warranty. Spare parts carry manufacturer warranty." } },
          { "@type": "Question", name: "Can you convert or upgrade PANEL AC?", acceptedAnswer: { "@type": "Answer", text: "We can advise on upgrades and handle new installations. Converting between AC types isn't possible but replacement is." } }
        ]
      }) }} />

{/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Professional Help?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Expert technicians, genuine parts, same-day service. Contact Atlas Aircon now!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919727257141" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"><Phone size={22} /> Call +91 97272 57141</a>
            <a href="https://wa.me/919727257141" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
