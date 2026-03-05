import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Star, Shield, Award, Clock, ArrowRight, Wrench } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "York AC Service Center Rajpipla | Professional HVAC Service | Hitech Aircool Engineers",
  description: "York AC Service Center Rajpipla — Professional service service by Hitech Aircool Engineers. Certified technicians, genuine parts, warranty included. Serving Vadodara, Gujarat & all GIDC zones. Call +91 93289 53665.",
  keywords: ["york ac service center rajpipla", "service service", "hvac service vadodara", "hitech aircool engineers", "ac service gujarat"],
  alternates: { canonical: "https://hitechairconditioning.in/york-ac-service-center-rajpipla" },
  openGraph: { title: "York AC Service Center Rajpipla | Hitech Aircool Engineers", description: "Professional service service by Hitech Aircool Engineers Gujarat.", url: "https://hitechairconditioning.in/york-ac-service-center-rajpipla", type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "York AC Service Center Rajpipla",
  provider: { "@type": "LocalBusiness", name: "Hitech Aircool Engineers", telephone: "+919328953665" },
  areaServed: { "@type": "State", name: "Gujarat" },
  serviceType: "York AC Service Center Rajpipla",
};

export default function YorkACServiceCenterRajpiplaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <Wrench className="w-4 h-4" /><span>Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">York AC Service Center Rajpipla</h1>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                Professional service service by Hitech Aircool Engineers / Hitech Aircool Engineers. Our certified technicians deliver expert service solutions for all HVAC, refrigeration, and cooling equipment. Available across Vadodara, Gujarat &amp; all GIDC industrial zones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:+919328953665" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"><Phone size={22} /> +91 93289 53665</a>
                <a href="https://wa.me/919328953665" className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition">WhatsApp Us</a>
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
              York AC Service Center Rajpipla is one of the specialized services offered by Hitech Aircool Engineers / Hitech Aircool Engineers. With over 20 years of experience in the HVAC industry, we provide expert service solutions that extend equipment life, improve efficiency, and reduce operating costs. Our team serves residential, commercial, and industrial clients across Gujarat.
            </p>
            <p className="text-gray-600">
              Our certified technicians use professional-grade equipment and genuine parts for every job. Whether it&apos;s a routine service visit or an emergency call, we maintain the same high standards of quality and professionalism. All work is backed by our Hitech Aircool Engineers Service Guarantee for your complete peace of mind.
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
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Hitech Aircool Engineers</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Award, t: "20+ Years Experience", d: "Gujarat\u2019s most experienced HVAC team" },
              { icon: Clock, t: "Same-Day Service", d: "Fastest dispatch across Gujarat" },
              { icon: Shield, t: "Service Warranty", d: "Every job backed by warranty" },
              { icon: Star, t: "4.9/5 Rating", d: "5,000+ satisfied customers" },
            ].map(item => (
              <div key={item.t} className="text-center bg-white p-6 rounded-xl">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4"><item.icon className="w-8 h-8 text-teal-600" /></div>
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
              <Link key={area.href} href={area.href} className="bg-gray-50 text-teal-700 px-4 py-2.5 rounded-full border border-teal-200 hover:bg-teal-50 transition text-sm font-medium">{area.name}</Link>
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
              { q: "What does York Ac Service Center Rajpipla include?", a: "York Ac Service Center Rajpipla includes filter cleaning, coil jet wash, drain pipe clearing, gas pressure check, electrical inspection, fan motor check, and performance testing." },
              { q: "How much does York Ac Service Center Rajpipla cost?", a: "York Ac Service Center Rajpipla starts from ₹499 for basic service. Deep jet cleaning is ₹799 for split AC, ₹599 for window AC. Chemical wash starts from ₹999." },
              { q: "How often should AC be serviced?", a: "AC should be serviced at least twice a year — before summer and after monsoon. Heavy use environments may need quarterly servicing." },
              { q: "Will York Ac Service Center Rajpipla improve cooling?", a: "Yes, proper York Ac Service Center Rajpipla can improve cooling efficiency by 20-30%. Dirty filters and coils reduce airflow and heat exchange." },
              { q: "Does York Ac Service Center Rajpipla reduce electricity bills?", a: "Regular York Ac Service Center Rajpipla can reduce electricity consumption by 15-25%. A well-maintained AC runs more efficiently, saving power." },
              { q: "How long does York Ac Service Center Rajpipla take?", a: "Basic York Ac Service Center Rajpipla takes 30-45 minutes. Deep cleaning with jet wash takes 1-1.5 hours. Chemical foam cleaning takes about 2 hours." },
              { q: "Can York Ac Service Center Rajpipla remove bad smell?", a: "Yes, York Ac Service Center Rajpipla includes cleaning of filters, coils, and drain pan which removes bacteria and mold causing odors. Anti-bacterial spray applied." },
              { q: "Is gas top-up included in York Ac Service Center Rajpipla?", a: "Basic service includes gas pressure check. If gas is low, top-up is charged separately — R22 from ₹1,500, R32/R410A from ₹2,000." },
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
          { "@type": "Question", name: "What does York Ac Service Center Rajpipla include?", acceptedAnswer: { "@type": "Answer", text: "York Ac Service Center Rajpipla includes filter cleaning, coil jet wash, drain pipe clearing, gas pressure check, electrical inspection, fan motor check, and performance testing." } },
          { "@type": "Question", name: "How much does York Ac Service Center Rajpipla cost?", acceptedAnswer: { "@type": "Answer", text: "York Ac Service Center Rajpipla starts from ₹499 for basic service. Deep jet cleaning is ₹799 for split AC, ₹599 for window AC. Chemical wash starts from ₹999." } },
          { "@type": "Question", name: "How often should AC be serviced?", acceptedAnswer: { "@type": "Answer", text: "AC should be serviced at least twice a year — before summer and after monsoon. Heavy use environments may need quarterly servicing." } },
          { "@type": "Question", name: "Will York Ac Service Center Rajpipla improve cooling?", acceptedAnswer: { "@type": "Answer", text: "Yes, proper York Ac Service Center Rajpipla can improve cooling efficiency by 20-30%. Dirty filters and coils reduce airflow and heat exchange." } },
          { "@type": "Question", name: "Does York Ac Service Center Rajpipla reduce electricity bills?", acceptedAnswer: { "@type": "Answer", text: "Regular York Ac Service Center Rajpipla can reduce electricity consumption by 15-25%. A well-maintained AC runs more efficiently, saving power." } },
          { "@type": "Question", name: "How long does York Ac Service Center Rajpipla take?", acceptedAnswer: { "@type": "Answer", text: "Basic York Ac Service Center Rajpipla takes 30-45 minutes. Deep cleaning with jet wash takes 1-1.5 hours. Chemical foam cleaning takes about 2 hours." } },
          { "@type": "Question", name: "Can York Ac Service Center Rajpipla remove bad smell?", acceptedAnswer: { "@type": "Answer", text: "Yes, York Ac Service Center Rajpipla includes cleaning of filters, coils, and drain pan which removes bacteria and mold causing odors. Anti-bacterial spray applied." } },
          { "@type": "Question", name: "Is gas top-up included in York Ac Service Center Rajpipla?", acceptedAnswer: { "@type": "Answer", text: "Basic service includes gas pressure check. If gas is low, top-up is charged separately — R22 from ₹1,500, R32/R410A from ₹2,000." } },
          { "@type": "Question", name: "Do you clean outdoor AC unit?", acceptedAnswer: { "@type": "Answer", text: "Yes, complete service includes outdoor unit cleaning. Condenser coil cleaning is essential for proper heat rejection." } },
          { "@type": "Question", name: "What's the difference between service and deep cleaning?", acceptedAnswer: { "@type": "Answer", text: "Basic service is dry cleaning and inspection. Deep cleaning uses high-pressure jet wash. Chemical wash uses foam for thorough cleaning." } }
        ]
      }) }} />

{/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Book Service Service Now</h2>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto">Professional service, genuine parts, certified technicians. Contact us today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919328953665" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"><Phone size={22} /> Call +91 93289 53665</a>
            <a href="https://wa.me/919328953665" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
