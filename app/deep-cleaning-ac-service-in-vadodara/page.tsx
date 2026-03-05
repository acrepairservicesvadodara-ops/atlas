import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Star, Shield, Award, Clock, MapPin, ArrowRight, Wrench } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Deep Cleaning AC Service In Vadodara: Keep Your AC Running [2026 Updated] | Hitech Aircool Engineers Gujarat",
  description: "Deep Cleaning AC Service in Vad...",
  alternates: { canonical: "https://hitechairconditioning.in/deep-cleaning-ac-service-in-vadodara" },
  openGraph: {
    title: "Deep Cleaning AC Service In Vadodara: Keep Your AC Running [2026 Updated] | Hitech Aircool Engineers",
    description: "Deep Cleaning AC Service in Vad...",
    url: "https://hitechairconditioning.in/deep-cleaning-ac-service-in-vadodara",
    type: "website",
    images: ["/images/products/ac-chemical-service.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Deep Cleaning AC Service In Vadodara: Keep Your AC Running [2026 Updated]",
  provider: {
    "@type": "LocalBusiness",
    name: "Hitech Aircool Engineers",
    telephone: "+919328953665",
    address: { "@type": "PostalAddress", addressLocality: "Vadodara", addressRegion: "Gujarat", postalCode: "390005", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "5000" },
  },
  areaServed: { "@type": "City", name: "Vadodara" },
};

export default function Pagedeepcleaningacserviceinvadodara() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Deep Cleaning AC Service In Vadodara: Keep Your AC Running [2026 Updated]</h1>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">Deep Cleaning AC Service in Vad...</p>
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
            <p className="text-gray-600 mb-4">Deep Cleaning AC Service in Vad...</p>
          </div>
        </div>
      </section>


      {/* Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Work Gallery</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <img src="/images/products/ac-chemical-service.webp" alt="Deep Cleaning AC Service In Vadodara: Keep Your AC Running [2026 Updated]" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/atlas-aircon-logo.webp" alt="Deep Cleaning AC Service In Vadodara: Keep Your AC Running [2026 Updated]" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/Installation-Process-of-Window-Air-conditioner-by-Atlas-Aircon-AC-Repair-Serivce-Vadodara.webp" alt="Deep Cleaning AC Service In Vadodara: Keep Your AC Running [2026 Updated]" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/products/ac-chemical-service.webp" alt="Deep Cleaning AC Service In Vadodara: Keep Your AC Running [2026 Updated]" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/products/ac-chemical-service.webp" alt="Deep Cleaning AC Service In Vadodara: Keep Your AC Running [2026 Updated]" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/products/ac-chemical-service.webp" alt="Deep Cleaning AC Service In Vadodara: Keep Your AC Running [2026 Updated]" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
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
              { q: "What does Deep Cleaning Ac Service In Vadodara include?", a: "Deep Cleaning Ac Service In Vadodara includes filter cleaning, coil jet wash, drain pipe clearing, gas pressure check, electrical inspection, fan motor check, and performance testing." },
              { q: "How much does Deep Cleaning Ac Service In Vadodara cost?", a: "Deep Cleaning Ac Service In Vadodara starts from ₹499 for basic service. Deep jet cleaning is ₹799 for split AC, ₹599 for window AC. Chemical wash starts from ₹999." },
              { q: "How often should AC be serviced?", a: "AC should be serviced at least twice a year — before summer and after monsoon. Heavy use environments may need quarterly servicing." },
              { q: "Will Deep Cleaning Ac Service In Vadodara improve cooling?", a: "Yes, proper Deep Cleaning Ac Service In Vadodara can improve cooling efficiency by 20-30%. Dirty filters and coils reduce airflow and heat exchange." },
              { q: "Does Deep Cleaning Ac Service In Vadodara reduce electricity bills?", a: "Regular Deep Cleaning Ac Service In Vadodara can reduce electricity consumption by 15-25%. A well-maintained AC runs more efficiently, saving power." },
              { q: "How long does Deep Cleaning Ac Service In Vadodara take?", a: "Basic Deep Cleaning Ac Service In Vadodara takes 30-45 minutes. Deep cleaning with jet wash takes 1-1.5 hours. Chemical foam cleaning takes about 2 hours." },
              { q: "Can Deep Cleaning Ac Service In Vadodara remove bad smell?", a: "Yes, Deep Cleaning Ac Service In Vadodara includes cleaning of filters, coils, and drain pan which removes bacteria and mold causing odors. Anti-bacterial spray applied." },
              { q: "Is gas top-up included in Deep Cleaning Ac Service In Vadodara?", a: "Basic service includes gas pressure check. If gas is low, top-up is charged separately — R22 from ₹1,500, R32/R410A from ₹2,000." },
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
          { "@type": "Question", name: "What does Deep Cleaning Ac Service In Vadodara include?", acceptedAnswer: { "@type": "Answer", text: "Deep Cleaning Ac Service In Vadodara includes filter cleaning, coil jet wash, drain pipe clearing, gas pressure check, electrical inspection, fan motor check, and performance testing." } },
          { "@type": "Question", name: "How much does Deep Cleaning Ac Service In Vadodara cost?", acceptedAnswer: { "@type": "Answer", text: "Deep Cleaning Ac Service In Vadodara starts from ₹499 for basic service. Deep jet cleaning is ₹799 for split AC, ₹599 for window AC. Chemical wash starts from ₹999." } },
          { "@type": "Question", name: "How often should AC be serviced?", acceptedAnswer: { "@type": "Answer", text: "AC should be serviced at least twice a year — before summer and after monsoon. Heavy use environments may need quarterly servicing." } },
          { "@type": "Question", name: "Will Deep Cleaning Ac Service In Vadodara improve cooling?", acceptedAnswer: { "@type": "Answer", text: "Yes, proper Deep Cleaning Ac Service In Vadodara can improve cooling efficiency by 20-30%. Dirty filters and coils reduce airflow and heat exchange." } },
          { "@type": "Question", name: "Does Deep Cleaning Ac Service In Vadodara reduce electricity bills?", acceptedAnswer: { "@type": "Answer", text: "Regular Deep Cleaning Ac Service In Vadodara can reduce electricity consumption by 15-25%. A well-maintained AC runs more efficiently, saving power." } },
          { "@type": "Question", name: "How long does Deep Cleaning Ac Service In Vadodara take?", acceptedAnswer: { "@type": "Answer", text: "Basic Deep Cleaning Ac Service In Vadodara takes 30-45 minutes. Deep cleaning with jet wash takes 1-1.5 hours. Chemical foam cleaning takes about 2 hours." } },
          { "@type": "Question", name: "Can Deep Cleaning Ac Service In Vadodara remove bad smell?", acceptedAnswer: { "@type": "Answer", text: "Yes, Deep Cleaning Ac Service In Vadodara includes cleaning of filters, coils, and drain pan which removes bacteria and mold causing odors. Anti-bacterial spray applied." } },
          { "@type": "Question", name: "Is gas top-up included in Deep Cleaning Ac Service In Vadodara?", acceptedAnswer: { "@type": "Answer", text: "Basic service includes gas pressure check. If gas is low, top-up is charged separately — R22 from ₹1,500, R32/R410A from ₹2,000." } },
          { "@type": "Question", name: "Do you clean outdoor AC unit?", acceptedAnswer: { "@type": "Answer", text: "Yes, complete service includes outdoor unit cleaning. Condenser coil cleaning is essential for proper heat rejection." } },
          { "@type": "Question", name: "What's the difference between service and deep cleaning?", acceptedAnswer: { "@type": "Answer", text: "Basic service is dry cleaning and inspection. Deep cleaning uses high-pressure jet wash. Chemical wash uses foam for thorough cleaning." } }
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
