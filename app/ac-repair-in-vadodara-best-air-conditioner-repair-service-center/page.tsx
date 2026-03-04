import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Star, Shield, Award, Clock, MapPin, ArrowRight, Wrench } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "AC Repair In Vadodara, Best Air Conditioner Repair [2026 Updated] | Atlas Aircon Gujarat",
  description: "An air conditioner or air conditioning is an electrical device which has four functions and basically cools a walled area. The four basic functions of a...",
  alternates: { canonical: "https://atlasaircons.com/ac-repair-in-vadodara-best-air-conditioner-repair-service-center" },
  openGraph: {
    title: "AC Repair In Vadodara, Best Air Conditioner Repair [2026 Updated] | Atlas Aircon",
    description: "An air conditioner or air conditioning is an electrical device which has four functions and basically cools a walled area. The four basic functions of a...",
    url: "https://atlasaircons.com/ac-repair-in-vadodara-best-air-conditioner-repair-service-center",
    type: "website",
    images: ["/images/Atlas-Aircon-Ac-Service-in-vadodara-2.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Repair In Vadodara, Best Air Conditioner Repair [2026 Updated]",
  provider: {
    "@type": "LocalBusiness",
    name: "Atlas Aircon",
    telephone: "+919727257141",
    address: { "@type": "PostalAddress", addressLocality: "Vadodara", addressRegion: "Gujarat", postalCode: "390005", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "5000" },
  },
  areaServed: { "@type": "City", name: "Vadodara" },
};

export default function Pageacrepairinvadodarabestairconditionerrepa() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <MapPin className="w-4 h-4" /><span>Vadodara, Gujarat</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">AC Repair In Vadodara, Best Air Conditioner Repair [2026 Updated]</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">An air conditioner or air conditioning is an electrical device which has four functions and basically cools a walled area. The four basic functions of a...</p>
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
            <p className="text-gray-600 mb-4">An air conditioner or air conditioning is an electrical device which has four functions and basically cools a walled area. The four basic functions of a...</p>
          </div>
        </div>
      </section>


      {/* Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Work Gallery</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <img src="/images/Atlas-Aircon-Ac-Service-in-vadodara-2.webp" alt="AC Repair In Vadodara, Best Air Conditioner Repair [2026 Updated]" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/atlas-aircon-logo.webp" alt="AC Repair In Vadodara, Best Air Conditioner Repair [2026 Updated]" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/Installation-Process-of-Window-Air-conditioner-by-Atlas-Aircon-AC-Repair-Serivce-Vadodara.webp" alt="AC Repair In Vadodara, Best Air Conditioner Repair [2026 Updated]" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/products/Cassette-AC-Repair-Service-Vadodara.webp" alt="AC Repair In Vadodara, Best Air Conditioner Repair [2026 Updated]" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/products/Cassette-AC-Repair-Service-Vadodara.webp" alt="AC Repair In Vadodara, Best Air Conditioner Repair [2026 Updated]" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/products/Split-AC-Repair-Service-Vadodara.webp" alt="AC Repair In Vadodara, Best Air Conditioner Repair [2026 Updated]" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
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
              { q: "What is the best AC repair service in Vadodara Best Air Conditioner Repair Service Center?", a: "Atlas Aircon is rated 4.9★ for AC repair in Vadodara Best Air Conditioner Repair Service Center. Our certified technicians provide same-day service with 90-day warranty. Call +91 97272 57141." },
              { q: "What are your service charges in Vadodara Best Air Conditioner Repair Service Center?", a: "AC service charges are standard: inspection ₹299 (adjusted against repairs), basic service from ₹499, deep cleaning from ₹799. No area surcharges." },
              { q: "How quickly can you reach Vadodara Best Air Conditioner Repair Service Center?", a: "Our nearest technician can reach within 90 minutes to 3 hours depending on current workload. Emergencies are prioritized." },
              { q: "Do you have technicians in Vadodara Best Air Conditioner Repair Service Center?", a: "Yes, Atlas Aircon has servicemen positioned across Vadodara. This ensures faster response times for AC repair and service calls." },
              { q: "Is emergency AC service available in Vadodara Best Air Conditioner Repair Service Center?", a: "Yes, 24/7 emergency AC repair is available. Call +91 97272 57141 for immediate assistance with AC breakdown or cooling failures." },
              { q: "What AC problems are common in Vadodara Best Air Conditioner Repair Service Center?", a: "Common issues include gas leakage, water dripping, reduced cooling from dust, and electrical tripping. Regular maintenance prevents most issues." },
              { q: "Do you offer AMC for customers in Vadodara Best Air Conditioner Repair Service Center?", a: "Yes, AMC plans available from ₹1,999/year. Includes 2-4 free services, priority support, and discounted repairs." },
              { q: "Can you install new AC in Vadodara Best Air Conditioner Repair Service Center?", a: "Yes, professional AC installation available for all AC types — split, window, cassette, ductable. Includes copper piping and testing." },
              { q: "Do you service office ACs in Vadodara Best Air Conditioner Repair Service Center?", a: "Yes, we service commercial ACs in offices, shops, showrooms. We handle all types including VRF systems and ducted ACs." },
              { q: "Is service available on weekends in Vadodara Best Air Conditioner Repair Service Center?", a: "Yes, AC service available 7 days a week including Saturdays and Sundays. Book online or call +91 97272 57141." }
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
          { "@type": "Question", name: "What is the best AC repair service in Vadodara Best Air Conditioner Repair Service Center?", acceptedAnswer: { "@type": "Answer", text: "Atlas Aircon is rated 4.9★ for AC repair in Vadodara Best Air Conditioner Repair Service Center. Our certified technicians provide same-day service with 90-day warranty. Call +91 97272 57141." } },
          { "@type": "Question", name: "What are your service charges in Vadodara Best Air Conditioner Repair Service Center?", acceptedAnswer: { "@type": "Answer", text: "AC service charges are standard: inspection ₹299 (adjusted against repairs), basic service from ₹499, deep cleaning from ₹799. No area surcharges." } },
          { "@type": "Question", name: "How quickly can you reach Vadodara Best Air Conditioner Repair Service Center?", acceptedAnswer: { "@type": "Answer", text: "Our nearest technician can reach within 90 minutes to 3 hours depending on current workload. Emergencies are prioritized." } },
          { "@type": "Question", name: "Do you have technicians in Vadodara Best Air Conditioner Repair Service Center?", acceptedAnswer: { "@type": "Answer", text: "Yes, Atlas Aircon has servicemen positioned across Vadodara. This ensures faster response times for AC repair and service calls." } },
          { "@type": "Question", name: "Is emergency AC service available in Vadodara Best Air Conditioner Repair Service Center?", acceptedAnswer: { "@type": "Answer", text: "Yes, 24/7 emergency AC repair is available. Call +91 97272 57141 for immediate assistance with AC breakdown or cooling failures." } },
          { "@type": "Question", name: "What AC problems are common in Vadodara Best Air Conditioner Repair Service Center?", acceptedAnswer: { "@type": "Answer", text: "Common issues include gas leakage, water dripping, reduced cooling from dust, and electrical tripping. Regular maintenance prevents most issues." } },
          { "@type": "Question", name: "Do you offer AMC for customers in Vadodara Best Air Conditioner Repair Service Center?", acceptedAnswer: { "@type": "Answer", text: "Yes, AMC plans available from ₹1,999/year. Includes 2-4 free services, priority support, and discounted repairs." } },
          { "@type": "Question", name: "Can you install new AC in Vadodara Best Air Conditioner Repair Service Center?", acceptedAnswer: { "@type": "Answer", text: "Yes, professional AC installation available for all AC types — split, window, cassette, ductable. Includes copper piping and testing." } },
          { "@type": "Question", name: "Do you service office ACs in Vadodara Best Air Conditioner Repair Service Center?", acceptedAnswer: { "@type": "Answer", text: "Yes, we service commercial ACs in offices, shops, showrooms. We handle all types including VRF systems and ducted ACs." } },
          { "@type": "Question", name: "Is service available on weekends in Vadodara Best Air Conditioner Repair Service Center?", acceptedAnswer: { "@type": "Answer", text: "Yes, AC service available 7 days a week including Saturdays and Sundays. Book online or call +91 97272 57141." } }
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
