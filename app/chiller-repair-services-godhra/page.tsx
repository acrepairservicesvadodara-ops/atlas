import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Star, Shield, Award, Clock, MapPin, ArrowRight, Wrench } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "24/7 Emergency Cold Storage Chiller Repair Services Godhra | Hitech Aircool Engineers Gujarat",
  description: "Chiller Repair Services Godhra for cold storage, warehouses & agro-processing. Prevent grain & produce spoilage with fast compressor, tube & gas leak repair. Pr",
  alternates: { canonical: "https://hitechairconditioning.in/chiller-repair-services-godhra" },
  openGraph: {
    title: "24/7 Emergency Cold Storage Chiller Repair Services Godhra | Hitech Aircool Engineers",
    description: "Chiller Repair Services Godhra for cold storage, warehouses & agro-processing. Prevent grain & produce spoilage with fast compressor, tube & gas leak repair. Pr",
    url: "https://hitechairconditioning.in/chiller-repair-services-godhra",
    type: "website",
    images: ["/images/products/chiller-repair-service.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "24/7 Emergency Cold Storage Chiller Repair Services Godhra",
  provider: {
    "@type": "LocalBusiness",
    name: "Hitech Aircool Engineers",
    telephone: "+919328953665",
    address: { "@type": "PostalAddress", addressLocality: "Vadodara", addressRegion: "Gujarat", postalCode: "390005", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "5000" },
  },
  areaServed: { "@type": "City", name: "Godhra" },
};

export default function Pagechillerrepairservicesgodhra() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <MapPin className="w-4 h-4" /><span>Godhra, Gujarat</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">24/7 Emergency Cold Storage Chiller Repair Services Godhra</h1>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">Chiller Repair Services Godhra for cold storage, warehouses &amp; agro-processing. Prevent grain &amp; produce spoilage with fast compressor, tube &amp; gas leak repair. Protect your inventory. Call now!</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:+919328953665" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"><Phone size={22} /> +91 93289 53665</a>
                <a href="https://wa.me/919328953665" className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition">WhatsApp Us</a>
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
            <p className="text-gray-600 mb-4">Chiller Repair Services Godhra for cold storage, warehouses &amp; agro-processing. Prevent grain &amp; produce spoilage with fast compressor, tube &amp; gas leak repair. Protect your inventory. Call now!</p>
          </div>
        </div>
      </section>


      {/* Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Work Gallery</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <img src="/images/products/chiller-repair-service.webp" alt="24/7 Emergency Cold Storage Chiller Repair Services Godhra" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/Installation-Process-of-Window-Air-conditioner-by-Atlas-Aircon-AC-Repair-Serivce-Vadodara.webp" alt="24/7 Emergency Cold Storage Chiller Repair Services Godhra" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
          </div>
        </div>
      </section>
      {/* Why Choose */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Hitech Aircool Engineers</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Award, t: "20+ Years Experience", d: "Gujarat\u2019s most experienced HVAC team" },
              { icon: Clock, t: "Same-Day Service", d: "Fastest dispatch across Gujarat" },
              { icon: Shield, t: "Service Warranty", d: "Every repair backed by warranty" },
              { icon: Star, t: "4.9/5 Rating", d: "5,000+ happy customers" },
            ].map(item => (
              <div key={item.t} className="text-center bg-gray-50 p-6 rounded-xl">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4"><item.icon className="w-8 h-8 text-teal-600" /></div>
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
              <span key={b} className="bg-white text-gray-700 px-5 py-3 rounded-full text-sm border border-gray-200 hover:bg-teal-50 transition">{b}</span>
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
              <Link key={area.href} href={area.href} className="bg-white text-teal-700 px-4 py-2.5 rounded-full border border-teal-200 hover:bg-teal-50 transition text-sm font-medium">{area.name}</Link>
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
              { q: "Do you provide industrial HVchiller repair services godhras?", a: "Yes, Hitech Aircool Engineers specializes in industrial HVAC including chiller repair, AHU service, cooling tower maintenance, VRF systems, and panel AC." },
              { q: "What is the response time for industrial AC breakdown?", a: "For industrial emergencies, we prioritize response within 2-4 hours. 24/7 helpline available at +91 93289 53665 for critical cooling failures." },
              { q: "Do you offer AMC for industrial HVAC?", a: "Yes, comprehensive AMC includes scheduled maintenance, emergency response, parts discount, and dedicated technician. Plans customized per equipment." },
              { q: "Can you repair imported industrial equipment?", a: "Yes, we repair industrial AC from all manufacturers — Carrier, Trane, York, Daikin, Blue Star, Voltas, and imported machinery." },
              { q: "Is your team trained for VRF/VRV systems?", a: "Yes, technicians certified for Daikin VRV, Mitsubishi VRF, LG Multi-V, and other VRF systems. We handle installation, commissioning, repairs." },
              { q: "Do you provide chiller plant maintenance?", a: "Yes, complete chiller plant maintenance including water-cooled chillers, air-cooled chillers, cooling towers, pumps, and controls." },
              { q: "Can you service pharmaceutical industry AC?", a: "Yes, we service cleanroom ACs, precision cooling systems, and pharmaceutical-grade HVAC with documentation support." },
              { q: "Do you work in GIDC industrial areas?", a: "Yes, we regularly service industries in Makarpura GIDC, Nandesari GIDC, Waghodia GIDC, Savli GIDC, and all Gujarat industrial estates." },
              { q: "What is cost of industrial chiller repair services godhra?", a: "Industrial chiller repair services godhra costs vary by equipment type and issue. We provide free inspection and detailed quotation before proceeding." },
              { q: "Do you supply spare parts for industrial AC?", a: "Yes, we stock spare parts including compressors, controls, motors, sensors, and refrigerants. Genuine and equivalent parts available." }
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
          { "@type": "Question", name: "Do you provide industrial HVchiller repair services godhras?", acceptedAnswer: { "@type": "Answer", text: "Yes, Hitech Aircool Engineers specializes in industrial HVAC including chiller repair, AHU service, cooling tower maintenance, VRF systems, and panel AC." } },
          { "@type": "Question", name: "What is the response time for industrial AC breakdown?", acceptedAnswer: { "@type": "Answer", text: "For industrial emergencies, we prioritize response within 2-4 hours. 24/7 helpline available at +91 93289 53665 for critical cooling failures." } },
          { "@type": "Question", name: "Do you offer AMC for industrial HVAC?", acceptedAnswer: { "@type": "Answer", text: "Yes, comprehensive AMC includes scheduled maintenance, emergency response, parts discount, and dedicated technician. Plans customized per equipment." } },
          { "@type": "Question", name: "Can you repair imported industrial equipment?", acceptedAnswer: { "@type": "Answer", text: "Yes, we repair industrial AC from all manufacturers — Carrier, Trane, York, Daikin, Blue Star, Voltas, and imported machinery." } },
          { "@type": "Question", name: "Is your team trained for VRF/VRV systems?", acceptedAnswer: { "@type": "Answer", text: "Yes, technicians certified for Daikin VRV, Mitsubishi VRF, LG Multi-V, and other VRF systems. We handle installation, commissioning, repairs." } },
          { "@type": "Question", name: "Do you provide chiller plant maintenance?", acceptedAnswer: { "@type": "Answer", text: "Yes, complete chiller plant maintenance including water-cooled chillers, air-cooled chillers, cooling towers, pumps, and controls." } },
          { "@type": "Question", name: "Can you service pharmaceutical industry AC?", acceptedAnswer: { "@type": "Answer", text: "Yes, we service cleanroom ACs, precision cooling systems, and pharmaceutical-grade HVAC with documentation support." } },
          { "@type": "Question", name: "Do you work in GIDC industrial areas?", acceptedAnswer: { "@type": "Answer", text: "Yes, we regularly service industries in Makarpura GIDC, Nandesari GIDC, Waghodia GIDC, Savli GIDC, and all Gujarat industrial estates." } },
          { "@type": "Question", name: "What is cost of industrial chiller repair services godhra?", acceptedAnswer: { "@type": "Answer", text: "Industrial chiller repair services godhra costs vary by equipment type and issue. We provide free inspection and detailed quotation before proceeding." } },
          { "@type": "Question", name: "Do you supply spare parts for industrial AC?", acceptedAnswer: { "@type": "Answer", text: "Yes, we stock spare parts including compressors, controls, motors, sensors, and refrigerants. Genuine and equivalent parts available." } }
        ]
      }) }} />

{/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Professional Help?</h2>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto">Expert technicians, genuine parts, same-day service. Contact Hitech Aircool Engineers now!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919328953665" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"><Phone size={22} /> Call +91 93289 53665</a>
            <a href="https://wa.me/919328953665" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
