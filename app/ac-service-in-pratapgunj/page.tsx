import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Star, Shield, Award, Clock, ArrowRight, Wrench } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "AC Service In Pratapgunj | Professional HVAC Service | Atlas Aircon",
  description: "AC Service In Pratapgunj — Professional service service by Atlas Aircon. Certified technicians, genuine parts, warranty included. Serving Vadodara, Gujarat & all GIDC zones. Call +91 97272 57141.",
  keywords: ["ac service in pratapgunj", "service service", "hvac service vadodara", "atlas aircon", "ac service gujarat"],
  alternates: { canonical: "https://atlasaircons.com/ac-service-in-pratapgunj" },
  openGraph: { title: "AC Service In Pratapgunj | Atlas Aircon", description: "Professional service service by Atlas Aircon Gujarat.", url: "https://atlasaircons.com/ac-service-in-pratapgunj", type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Service In Pratapgunj",
  provider: { "@type": "LocalBusiness", name: "Atlas Aircon", telephone: "+919727257141" },
  areaServed: { "@type": "State", name: "Gujarat" },
  serviceType: "AC Service In Pratapgunj",
};

export default function ACServiceInPratapgunjPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <Wrench className="w-4 h-4" /><span>Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">AC Service In Pratapgunj</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Professional service service by Atlas Aircon / Hitech Aircool Engineers. Our certified technicians deliver expert service solutions for all HVAC, refrigeration, and cooling equipment. Available across Vadodara, Gujarat &amp; all GIDC industrial zones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:+919727257141" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"><Phone size={22} /> +91 97272 57141</a>
                <a href="https://wa.me/919727257141" className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition">WhatsApp Us</a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                {[{ l: "Certified Engineers" }, { l: "Genuine Parts" }, { l: "Service Warranty" }, { l: "24/7 Available" }].map(b => (
                  <div key={b.l} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span>{b.l}</span></div>
                ))}
              </div>
            </div>
            <div className="hidden md:block"><BookingForm title={"Book Service Service"} /></div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6">About This Service</h2>
            <p className="text-gray-600">
              AC Service In Pratapgunj is one of the specialized services offered by Atlas Aircon / Hitech Aircool Engineers. With over 20 years of experience in the HVAC industry, we provide expert service solutions that extend equipment life, improve efficiency, and reduce operating costs. Our team serves residential, commercial, and industrial clients across Gujarat.
            </p>
            <p className="text-gray-600">
              Our certified technicians use professional-grade equipment and genuine parts for every job. Whether it&apos;s a routine service visit or an emergency call, we maintain the same high standards of quality and professionalism. All work is backed by our Atlas Aircon Service Guarantee for your complete peace of mind.
            </p>
            <p className="text-gray-600">
              We cover all equipment types including split ACs, window ACs, cassette units, ductable systems, VRF/VRV installations, chillers, cold rooms, panel ACs, AHUs, air coolers, refrigerators, washing machines, and more. Our industrial team specializes in GIDC factory environments where system uptime is critical.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">What&apos;s Included</h2>
            <ul>
              <li>Complete system inspection and diagnostic assessment</li>
              <li>Professional cleaning and maintenance as applicable</li>
              <li>Testing of all electrical components and safety circuits</li>
              <li>Performance optimization and efficiency tuning</li>
              <li>Detailed service report with recommendations</li>
              <li>Warranty documentation for all work performed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Atlas Aircon</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Award, t: "20+ Years Experience", d: "Gujarat\u2019s most experienced HVAC team" },
              { icon: Clock, t: "Same-Day Service", d: "Fastest dispatch across Gujarat" },
              { icon: Shield, t: "Service Warranty", d: "Every job backed by warranty" },
              { icon: Star, t: "4.9/5 Rating", d: "5,000+ satisfied customers" },
            ].map(item => (
              <div key={item.t} className="text-center bg-white p-6 rounded-xl">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><item.icon className="w-8 h-8 text-blue-600" /></div>
                <h3 className="font-semibold mb-2">{item.t}</h3>
                <p className="text-gray-600 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Service Coverage</h2>
          <p className="text-gray-600 mb-6">Available across Gujarat: Vadodara, Ahmedabad, Surat, Bharuch, Anand, Rajkot, Godhra, Kheda, Morbi, Daman, Valsad. All GIDC zones covered.</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {[{"name":"Alkapuri","href":"/ac-service-in-alkapuri"},{"name":"Akota","href":"/ac-service-in-akota"},{"name":"Sayajigunj","href":"/ac-service-in-sayajigunj"},{"name":"Raopura","href":"/ac-service-in-raopura"},{"name":"Mandvi","href":"/ac-service-in-mandvi"},{"name":"Pratapgunj","href":"/ac-service-in-pratapgunj"},{"name":"Fatehgunj","href":"/ac-service-in-fatehgunj"},{"name":"Nizampura","href":"/ac-service-in-nizampura"},{"name":"Chhani","href":"/ac-service-in-chhani"},{"name":"Sama","href":"/ac-service-in-sama"},{"name":"Karelibaug","href":"/ac-service-in-karelibaug"},{"name":"Warasiya","href":"/ac-service-in-warasiya"},{"name":"Harni","href":"/ac-service-in-harni"},{"name":"Ajwa Road","href":"/ac-service-in-ajwa-road"},{"name":"Tarsali","href":"/ac-service-in-tarsali"},{"name":"Makarpura","href":"/ac-service-in-makarpura"},{"name":"Maneja","href":"/ac-service-in-maneja"},{"name":"Manjalpur","href":"/ac-service-in-manjalpur"},{"name":"Bhayli","href":"/ac-service-in-bhayli"},{"name":"Gotri","href":"/ac-service-in-gotri"}].map(area => (
              <Link key={area.href} href={area.href} className="bg-gray-50 text-blue-700 px-4 py-2.5 rounded-full border border-blue-200 hover:bg-blue-50 transition text-sm font-medium">{area.name}</Link>
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
              { q: "What is the best AC repair service in Pratapgunj?", a: "Atlas Aircon is rated 4.9★ for AC repair in Pratapgunj. Our certified technicians provide same-day service with 90-day warranty. Call +91 97272 57141." },
              { q: "What are your service charges in Pratapgunj?", a: "AC service charges are standard: inspection ₹299 (adjusted against repairs), basic service from ₹499, deep cleaning from ₹799. No area surcharges." },
              { q: "How quickly can you reach Pratapgunj?", a: "Our nearest technician can reach within 90 minutes to 3 hours depending on current workload. Emergencies are prioritized." },
              { q: "Do you have technicians in Pratapgunj?", a: "Yes, Atlas Aircon has servicemen positioned across Vadodara. This ensures faster response times for AC repair and service calls." },
              { q: "Is emergency AC service available in Pratapgunj?", a: "Yes, 24/7 emergency AC repair is available. Call +91 97272 57141 for immediate assistance with AC breakdown or cooling failures." },
              { q: "What AC problems are common in Pratapgunj?", a: "Common issues include gas leakage, water dripping, reduced cooling from dust, and electrical tripping. Regular maintenance prevents most issues." },
              { q: "Do you offer AMC for customers in Pratapgunj?", a: "Yes, AMC plans available from ₹1,999/year. Includes 2-4 free services, priority support, and discounted repairs." },
              { q: "Can you install new AC in Pratapgunj?", a: "Yes, professional AC installation available for all AC types — split, window, cassette, ductable. Includes copper piping and testing." },
              { q: "Do you service office ACs in Pratapgunj?", a: "Yes, we service commercial ACs in offices, shops, showrooms. We handle all types including VRF systems and ducted ACs." },
              { q: "Is service available on weekends in Pratapgunj?", a: "Yes, AC service available 7 days a week including Saturdays and Sundays. Book online or call +91 97272 57141." }
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
          { "@type": "Question", name: "What is the best AC repair service in Pratapgunj?", acceptedAnswer: { "@type": "Answer", text: "Atlas Aircon is rated 4.9★ for AC repair in Pratapgunj. Our certified technicians provide same-day service with 90-day warranty. Call +91 97272 57141." } },
          { "@type": "Question", name: "What are your service charges in Pratapgunj?", acceptedAnswer: { "@type": "Answer", text: "AC service charges are standard: inspection ₹299 (adjusted against repairs), basic service from ₹499, deep cleaning from ₹799. No area surcharges." } },
          { "@type": "Question", name: "How quickly can you reach Pratapgunj?", acceptedAnswer: { "@type": "Answer", text: "Our nearest technician can reach within 90 minutes to 3 hours depending on current workload. Emergencies are prioritized." } },
          { "@type": "Question", name: "Do you have technicians in Pratapgunj?", acceptedAnswer: { "@type": "Answer", text: "Yes, Atlas Aircon has servicemen positioned across Vadodara. This ensures faster response times for AC repair and service calls." } },
          { "@type": "Question", name: "Is emergency AC service available in Pratapgunj?", acceptedAnswer: { "@type": "Answer", text: "Yes, 24/7 emergency AC repair is available. Call +91 97272 57141 for immediate assistance with AC breakdown or cooling failures." } },
          { "@type": "Question", name: "What AC problems are common in Pratapgunj?", acceptedAnswer: { "@type": "Answer", text: "Common issues include gas leakage, water dripping, reduced cooling from dust, and electrical tripping. Regular maintenance prevents most issues." } },
          { "@type": "Question", name: "Do you offer AMC for customers in Pratapgunj?", acceptedAnswer: { "@type": "Answer", text: "Yes, AMC plans available from ₹1,999/year. Includes 2-4 free services, priority support, and discounted repairs." } },
          { "@type": "Question", name: "Can you install new AC in Pratapgunj?", acceptedAnswer: { "@type": "Answer", text: "Yes, professional AC installation available for all AC types — split, window, cassette, ductable. Includes copper piping and testing." } },
          { "@type": "Question", name: "Do you service office ACs in Pratapgunj?", acceptedAnswer: { "@type": "Answer", text: "Yes, we service commercial ACs in offices, shops, showrooms. We handle all types including VRF systems and ducted ACs." } },
          { "@type": "Question", name: "Is service available on weekends in Pratapgunj?", acceptedAnswer: { "@type": "Answer", text: "Yes, AC service available 7 days a week including Saturdays and Sundays. Book online or call +91 97272 57141." } }
        ]
      }) }} />

{/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Book Service Service Now</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Professional service, genuine parts, certified technicians. Contact us today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919727257141" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"><Phone size={22} /> Call +91 97272 57141</a>
            <a href="https://wa.me/919727257141" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
