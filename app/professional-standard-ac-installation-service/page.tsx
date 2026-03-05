import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Star, Shield, Award, Clock, MapPin, ArrowRight, Wrench } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Professional Standard AC Installation Service &raquo; 9328953665 [2026 Updated] | Hitech Aircool Engineers Gujarat",
  description: "body { font-family: 'Inter...",
  alternates: { canonical: "https://hitechairconditioning.in/professional-standard-ac-installation-service" },
  openGraph: {
    title: "Professional Standard AC Installation Service &raquo; 9328953665 [2026 Updated] | Hitech Aircool Engineers",
    description: "body { font-family: 'Inter...",
    url: "https://hitechairconditioning.in/professional-standard-ac-installation-service",
    type: "website",
    images: ["/images/products/Professional-AC-Maintenance-Services.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Professional Standard AC Installation Service &raquo; 9328953665 [2026 Updated]",
  provider: {
    "@type": "LocalBusiness",
    name: "Hitech Aircool Engineers",
    telephone: "+919328953665",
    address: { "@type": "PostalAddress", addressLocality: "Vadodara", addressRegion: "Gujarat", postalCode: "390005", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "5000" },
  },
  areaServed: { "@type": "City", name: "Vadodara" },
};

export default function Pageprofessionalstandardacinstallationservic() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Professional Standard AC Installation Service &amp;raquo; 9328953665 [2026 Updated]</h1>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">body &#123; font-family: &apos;Inter...</p>
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
            <p className="text-gray-600 mb-4">body &#123; font-family: &apos;Inter...</p>
          </div>
        </div>
      </section>


      {/* Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Work Gallery</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <img src="/images/products/Professional-AC-Maintenance-Services.webp" alt="Professional Standard AC Installation Service &raquo; 9328953665 [2026 Updated]" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/atlas-aircon-logo.webp" alt="Professional Standard AC Installation Service &raquo; 9328953665 [2026 Updated]" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
              <img src="/images/Installation-Process-of-Window-Air-conditioner-by-Atlas-Aircon-AC-Repair-Serivce-Vadodara.webp" alt="Professional Standard AC Installation Service &raquo; 9328953665 [2026 Updated]" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
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
              { q: "What is included in AC installation?", a: "AC installation includes site inspection, bracket/stand fitting, copper piping up to 3m, electrical wiring, drain pipe, gas charging, vacuum testing, and final testing." },
              { q: "How much does AC installation cost in Vadodara?", a: "AC installation costs vary: Split AC from ₹1,500, Window AC from ₹800, Cassette AC from ₹3,500. Additional piping charged at ₹150/meter." },
              { q: "How long does AC installation take?", a: "Standard AC installation takes 2-3 hours for split AC, 1-2 hours for window AC. Complex installations with long piping may take 4-5 hours." },
              { q: "Do you provide AC installation warranty?", a: "Hitech Aircool Engineers provides 1-year warranty on installation workmanship. Any installation-related issues within this period are fixed free of charge." },
              { q: "Can you relocate my existing AC?", a: "Yes, AC relocation includes uninstallation, transport, reinstallation, gas top-up, and testing. Charges vary by distance and AC type." },
              { q: "What type of copper piping do you use?", a: "We use premium quality copper pipes (0.8mm thickness) with proper insulation. Quality piping prevents gas leaks and maintains AC efficiency." },
              { q: "Is electrical work included in installation?", a: "Basic electrical work is included. MCB installation, dedicated wiring, or major modifications are charged separately after inspection." },
              { q: "Can you install AC on higher floors?", a: "Yes, installation available for all floor levels. For high-rise buildings, we coordinate with society for outdoor unit placement." },
              { q: "Do you provide demo after AC installation?", a: "Yes, our technician provides demo of AC operation, remote control features, and basic maintenance tips after installation." },
              { q: "What should I prepare before AC installation?", a: "Ensure installation area is accessible and clear. For split AC, decide outdoor unit placement. Electrical point should be within 2 meters." }
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
          { "@type": "Question", name: "What is included in AC installation?", acceptedAnswer: { "@type": "Answer", text: "AC installation includes site inspection, bracket/stand fitting, copper piping up to 3m, electrical wiring, drain pipe, gas charging, vacuum testing, and final testing." } },
          { "@type": "Question", name: "How much does AC installation cost in Vadodara?", acceptedAnswer: { "@type": "Answer", text: "AC installation costs vary: Split AC from ₹1,500, Window AC from ₹800, Cassette AC from ₹3,500. Additional piping charged at ₹150/meter." } },
          { "@type": "Question", name: "How long does AC installation take?", acceptedAnswer: { "@type": "Answer", text: "Standard AC installation takes 2-3 hours for split AC, 1-2 hours for window AC. Complex installations with long piping may take 4-5 hours." } },
          { "@type": "Question", name: "Do you provide AC installation warranty?", acceptedAnswer: { "@type": "Answer", text: "Hitech Aircool Engineers provides 1-year warranty on installation workmanship. Any installation-related issues within this period are fixed free of charge." } },
          { "@type": "Question", name: "Can you relocate my existing AC?", acceptedAnswer: { "@type": "Answer", text: "Yes, AC relocation includes uninstallation, transport, reinstallation, gas top-up, and testing. Charges vary by distance and AC type." } },
          { "@type": "Question", name: "What type of copper piping do you use?", acceptedAnswer: { "@type": "Answer", text: "We use premium quality copper pipes (0.8mm thickness) with proper insulation. Quality piping prevents gas leaks and maintains AC efficiency." } },
          { "@type": "Question", name: "Is electrical work included in installation?", acceptedAnswer: { "@type": "Answer", text: "Basic electrical work is included. MCB installation, dedicated wiring, or major modifications are charged separately after inspection." } },
          { "@type": "Question", name: "Can you install AC on higher floors?", acceptedAnswer: { "@type": "Answer", text: "Yes, installation available for all floor levels. For high-rise buildings, we coordinate with society for outdoor unit placement." } },
          { "@type": "Question", name: "Do you provide demo after AC installation?", acceptedAnswer: { "@type": "Answer", text: "Yes, our technician provides demo of AC operation, remote control features, and basic maintenance tips after installation." } },
          { "@type": "Question", name: "What should I prepare before AC installation?", acceptedAnswer: { "@type": "Answer", text: "Ensure installation area is accessible and clear. For split AC, decide outdoor unit placement. Electrical point should be within 2 meters." } }
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
