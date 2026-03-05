import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Star, Shield, Award, Clock, MapPin, ArrowRight, Wrench } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Blue Star Service Center In Anklav &raquo; Emergency Ac Repair #1 [2026 Updated] | Hitech Aircool Engineers Gujarat",
  description: "Blue Star Service Center in Anklav: When it comes to Blue Star appliance repairs in Anklav, look no further than our service center. We specialize in diagnosing",
  alternates: { canonical: "https://hitechairconditioning.in/blue-star-service-center-in-anklav" },
  openGraph: {
    title: "Blue Star Service Center In Anklav &raquo; Emergency Ac Repair #1 [2026 Updated] | Hitech Aircool Engineers",
    description: "Blue Star Service Center in Anklav: When it comes to Blue Star appliance repairs in Anklav, look no further than our service center. We specialize in diagnosing",
    url: "https://hitechairconditioning.in/blue-star-service-center-in-anklav",
    type: "website",
    images: ["/images/products/Most-Secure-Cloud-Solution-for-Companies-to-Store-Computer-Files.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Blue Star Service Center In Anklav &raquo; Emergency Ac Repair #1 [2026 Updated]",
  provider: {
    "@type": "LocalBusiness",
    name: "Hitech Aircool Engineers",
    telephone: "+919328953665",
    address: { "@type": "PostalAddress", addressLocality: "Vadodara", addressRegion: "Gujarat", postalCode: "390005", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "5000" },
  },
  areaServed: { "@type": "City", name: "Vadodara" },
};

export default function Pagebluestarservicecenterinanklav() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <MapPin className="w-4 h-4" /><span>Vadodara, Gujarat</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Blue Star Service Center In Anklav &amp;raquo; Emergency Ac Repair #1 [2026 Updated]</h1>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">Blue Star Service Center in Anklav: When it comes to Blue Star appliance repairs in Anklav, look no further than our service center. We specialize in diagnosing and addressing issues related to Blue Star cooling solutions. Our technicians are certified by Blue Star, ensuring a high level of expertis</p>
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
            <p className="text-gray-600 mb-4">Blue Star Service Center in Anklav: When it comes to Blue Star appliance repairs in Anklav, look no further than our service center. We specialize in diagnosing and addressing issues related to Blue Star cooling solutions. Our technicians are certified by Blue Star, ensuring a high level of expertise in handling your appliances.</p>
          </div>
        </div>
      </section>


      {/* Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Work Gallery</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <img src="/images/products/Most-Secure-Cloud-Solution-for-Companies-to-Store-Computer-Files.webp" alt="Blue Star Service Center In Anklav &raquo; Emergency Ac Repair #1 [2026 Updated]" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/Installation-Process-of-Window-Air-conditioner-by-Atlas-Aircon-AC-Repair-Serivce-Vadodara.webp" alt="Blue Star Service Center In Anklav &raquo; Emergency Ac Repair #1 [2026 Updated]" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
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
              { q: "Are you an authorized service center for BLUE STAR?", a: "Hitech Aircool Engineers provides multi-brand AC service. While not an authorized center, our technicians are trained on BLUE STAR and use genuine parts." },
              { q: "What is the cost of repair for BLUE STAR?", a: "Repair costs depend on issue: gas refilling from ₹1,500, PCB repair from ₹1,200, compressor repair from ₹3,500. Inspection ₹299 adjusted against repairs." },
              { q: "Can you repair older models of BLUE STAR?", a: "Yes, we repair all models including discontinued ones. We maintain inventory of common spare parts and can source parts for older units." },
              { q: "How quickly can you repair BLUE STAR's AC?", a: "Most repairs are completed same-day within 2-3 hours. Complex repairs requiring parts may take 1-2 days. Emergency service available 24/7." },
              { q: "Do you use genuine parts for BLUE STAR?", a: "Yes, we use OEM-quality parts for repairs. For critical components like compressors, we source genuine parts when available." },
              { q: "What warranty do you provide on repairs?", a: "We provide 30-90 days warranty on repairs. Spare parts carry manufacturer warranty. Warranty doesn't cover misuse or power surge damage." },
              { q: "Is gas refilling expensive for BLUE STAR?", a: "Gas refilling follows standard pricing: R22 from ₹1,500, R32/R410A from ₹2,000. Prices depend on gas type in your specific model." },
              { q: "Can you service inverter AC of BLUE STAR?", a: "Yes, we specialize in inverter AC service and repair. Our technicians are trained on variable frequency drive and inverter PCB diagnosis." },
              { q: "Do you provide AMC for BLUE STAR?", a: "Yes, AMC plans cover BLUE STAR and all other brands. Starting ₹1,999/year for split AC, includes free services, priority support, discounted repairs." },
              { q: "How do I maintain BLUE STAR's AC?", a: "Clean filters every 2 weeks, ensure outdoor unit has airflow, run AC at 24-26°C, schedule professional service every 6 months." }
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
          { "@type": "Question", name: "Are you an authorized service center for BLUE STAR?", acceptedAnswer: { "@type": "Answer", text: "Hitech Aircool Engineers provides multi-brand AC service. While not an authorized center, our technicians are trained on BLUE STAR and use genuine parts." } },
          { "@type": "Question", name: "What is the cost of repair for BLUE STAR?", acceptedAnswer: { "@type": "Answer", text: "Repair costs depend on issue: gas refilling from ₹1,500, PCB repair from ₹1,200, compressor repair from ₹3,500. Inspection ₹299 adjusted against repairs." } },
          { "@type": "Question", name: "Can you repair older models of BLUE STAR?", acceptedAnswer: { "@type": "Answer", text: "Yes, we repair all models including discontinued ones. We maintain inventory of common spare parts and can source parts for older units." } },
          { "@type": "Question", name: "How quickly can you repair BLUE STAR's AC?", acceptedAnswer: { "@type": "Answer", text: "Most repairs are completed same-day within 2-3 hours. Complex repairs requiring parts may take 1-2 days. Emergency service available 24/7." } },
          { "@type": "Question", name: "Do you use genuine parts for BLUE STAR?", acceptedAnswer: { "@type": "Answer", text: "Yes, we use OEM-quality parts for repairs. For critical components like compressors, we source genuine parts when available." } },
          { "@type": "Question", name: "What warranty do you provide on repairs?", acceptedAnswer: { "@type": "Answer", text: "We provide 30-90 days warranty on repairs. Spare parts carry manufacturer warranty. Warranty doesn't cover misuse or power surge damage." } },
          { "@type": "Question", name: "Is gas refilling expensive for BLUE STAR?", acceptedAnswer: { "@type": "Answer", text: "Gas refilling follows standard pricing: R22 from ₹1,500, R32/R410A from ₹2,000. Prices depend on gas type in your specific model." } },
          { "@type": "Question", name: "Can you service inverter AC of BLUE STAR?", acceptedAnswer: { "@type": "Answer", text: "Yes, we specialize in inverter AC service and repair. Our technicians are trained on variable frequency drive and inverter PCB diagnosis." } },
          { "@type": "Question", name: "Do you provide AMC for BLUE STAR?", acceptedAnswer: { "@type": "Answer", text: "Yes, AMC plans cover BLUE STAR and all other brands. Starting ₹1,999/year for split AC, includes free services, priority support, discounted repairs." } },
          { "@type": "Question", name: "How do I maintain BLUE STAR's AC?", acceptedAnswer: { "@type": "Answer", text: "Clean filters every 2 weeks, ensure outdoor unit has airflow, run AC at 24-26°C, schedule professional service every 6 months." } }
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
