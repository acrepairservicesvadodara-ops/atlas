import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Star, Shield, Award, Clock, MapPin, ArrowRight, Wrench } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Ac Repair Servicing In Valsad | Hitech Aircool Engineers Gujarat",
  description: "ac repair servicing in valsad, Hitech Aircool Engineers was established in response to the growing need for quality repairing and maintenance services for air conditioners.",
  alternates: { canonical: "https://hitechairconditioning.in/ac-repair-servicing-in-valsad" },
  openGraph: {
    title: "Ac Repair Servicing In Valsad | Hitech Aircool Engineers",
    description: "ac repair servicing in valsad, Hitech Aircool Engineers was established in response to the growing need for quality repairing and maintenance services for air conditioners.",
    url: "https://hitechairconditioning.in/ac-repair-servicing-in-valsad",
    type: "website",
    images: ["/images/products/Air-Conditioner-Buying-Guide-Home.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ac Repair Servicing In Valsad",
  provider: {
    "@type": "LocalBusiness",
    name: "Hitech Aircool Engineers",
    telephone: "+919328953665",
    address: { "@type": "PostalAddress", addressLocality: "Vadodara", addressRegion: "Gujarat", postalCode: "390005", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "5000" },
  },
  areaServed: { "@type": "City", name: "Valsad" },
};

export default function Pageacrepairservicinginvalsad() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <MapPin className="w-4 h-4" /><span>Valsad, Gujarat</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ac Repair Servicing In Valsad</h1>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">ac repair servicing in valsad, Hitech Aircool Engineers was established in response to the growing need for quality repairing and maintenance services for air conditioners. keep your ac running right all summer long and beyond with dedicated, responsive ac repair service from the Hitech Aircool Engineers ac experts’ team. </p>
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
            <p className="text-gray-600 mb-4">ac repair servicing in valsad, Hitech Aircool Engineers was established in response to the growing need for quality repairing and maintenance services for air conditioners. keep your ac running right all summer long and beyond with dedicated, responsive ac repair service from the Hitech Aircool Engineers ac experts’ team. we offer home ac service in Valsad on ac maintenance, ac repair, &amp; ac installation.</p>
          </div>
        </div>
      </section>


      {/* Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Work Gallery</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <img src="/images/products/Air-Conditioner-Buying-Guide-Home.webp" alt="Ac Repair Servicing In Valsad" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/Installation-Process-of-Window-Air-conditioner-by-Atlas-Aircon-AC-Repair-Serivce-Vadodara.webp" alt="Ac Repair Servicing In Valsad" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/products/AC-Repairing-Service-Vadodara.webp" alt="Ac Repair Servicing In Valsad" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/products/AC-Repairing-Service-Vadodara.webp" alt="Ac Repair Servicing In Valsad" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/products/AHU-Repairing-Services-Vadodara.webp" alt="Ac Repair Servicing In Valsad" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/products/AHU-Repairing-Services-Vadodara.webp" alt="Ac Repair Servicing In Valsad" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
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
              { q: "What is the cost of Ac Repair Servicing In Valsad in Vadodara?", a: "Ac Repair Servicing In Valsad cost starts from ₹299 for inspection. Gas refilling from ₹1,500, PCB repair from ₹1,200, compressor repair from ₹3,500. Hitech Aircool Engineers provides upfront pricing with no hidden charges." },
              { q: "How quickly can you come for Ac Repair Servicing In Valsad?", a: "Hitech Aircool Engineers offers same-day Ac Repair Servicing In Valsad across Vadodara. Our certified technician reaches within 90 minutes to 3 hours of booking. For emergencies, call +91 93289 53665." },
              { q: "Do you provide warranty on Ac Repair Servicing In Valsads?", a: "Yes, Hitech Aircool Engineers provides 30 to 90 days warranty on Ac Repair Servicing In Valsads depending on the work performed. Spare parts like compressors, PCBs, and motors come with manufacturer warranty." },
              { q: "Which AC brands do you repair?", a: "We repair all major brands — Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Mitsubishi, Panasonic, Whirlpool, Godrej, Croma, Toshiba, Haier, and more." },
              { q: "Is emergency Ac Repair Servicing In Valsad available on holidays?", a: "Yes, Hitech Aircool Engineers provides Ac Repair Servicing In Valsad 7 days a week including Sundays and public holidays. Our 24/7 emergency service is available at +91 93289 53665." },
              { q: "How long does Ac Repair Servicing In Valsad take?", a: "Most Ac Repair Servicing In Valsads are completed within 1-2 hours. Complex repairs involving compressor replacement or major parts may take 3-4 hours. Our technician provides estimated time upfront." },
              { q: "Can you repair older AC models?", a: "Yes, Hitech Aircool Engineers specializes in repairing all AC models including older units. We maintain inventory of spare parts for discontinued models and can source parts for most brands." },
              { q: "What payment methods do you accept?", a: "We accept cash, UPI (GPay, PhonePe, Paytm), bank transfer, and cards. Payment is collected only after repair is completed to your satisfaction." },
              { q: "Do you provide AMC for regular AC maintenance?", a: "Yes, our Annual Maintenance Contract (AMC) starts from ₹1,999/year. AMC customers get priority service, free visits, discounted repairs, and scheduled maintenance." },
              { q: "What if the AC problem returns after repair?", a: "If the same issue recurs within the warranty period, we fix it free of charge. Simply call us at +91 93289 53665 and reference your previous service." }
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
          { "@type": "Question", name: "What is the cost of Ac Repair Servicing In Valsad in Vadodara?", acceptedAnswer: { "@type": "Answer", text: "Ac Repair Servicing In Valsad cost starts from ₹299 for inspection. Gas refilling from ₹1,500, PCB repair from ₹1,200, compressor repair from ₹3,500. Hitech Aircool Engineers provides upfront pricing with no hidden charges." } },
          { "@type": "Question", name: "How quickly can you come for Ac Repair Servicing In Valsad?", acceptedAnswer: { "@type": "Answer", text: "Hitech Aircool Engineers offers same-day Ac Repair Servicing In Valsad across Vadodara. Our certified technician reaches within 90 minutes to 3 hours of booking. For emergencies, call +91 93289 53665." } },
          { "@type": "Question", name: "Do you provide warranty on Ac Repair Servicing In Valsads?", acceptedAnswer: { "@type": "Answer", text: "Yes, Hitech Aircool Engineers provides 30 to 90 days warranty on Ac Repair Servicing In Valsads depending on the work performed. Spare parts like compressors, PCBs, and motors come with manufacturer warranty." } },
          { "@type": "Question", name: "Which AC brands do you repair?", acceptedAnswer: { "@type": "Answer", text: "We repair all major brands — Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Mitsubishi, Panasonic, Whirlpool, Godrej, Croma, Toshiba, Haier, and more." } },
          { "@type": "Question", name: "Is emergency Ac Repair Servicing In Valsad available on holidays?", acceptedAnswer: { "@type": "Answer", text: "Yes, Hitech Aircool Engineers provides Ac Repair Servicing In Valsad 7 days a week including Sundays and public holidays. Our 24/7 emergency service is available at +91 93289 53665." } },
          { "@type": "Question", name: "How long does Ac Repair Servicing In Valsad take?", acceptedAnswer: { "@type": "Answer", text: "Most Ac Repair Servicing In Valsads are completed within 1-2 hours. Complex repairs involving compressor replacement or major parts may take 3-4 hours. Our technician provides estimated time upfront." } },
          { "@type": "Question", name: "Can you repair older AC models?", acceptedAnswer: { "@type": "Answer", text: "Yes, Hitech Aircool Engineers specializes in repairing all AC models including older units. We maintain inventory of spare parts for discontinued models and can source parts for most brands." } },
          { "@type": "Question", name: "What payment methods do you accept?", acceptedAnswer: { "@type": "Answer", text: "We accept cash, UPI (GPay, PhonePe, Paytm), bank transfer, and cards. Payment is collected only after repair is completed to your satisfaction." } },
          { "@type": "Question", name: "Do you provide AMC for regular AC maintenance?", acceptedAnswer: { "@type": "Answer", text: "Yes, our Annual Maintenance Contract (AMC) starts from ₹1,999/year. AMC customers get priority service, free visits, discounted repairs, and scheduled maintenance." } },
          { "@type": "Question", name: "What if the AC problem returns after repair?", acceptedAnswer: { "@type": "Answer", text: "If the same issue recurs within the warranty period, we fix it free of charge. Simply call us at +91 93289 53665 and reference your previous service." } }
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
