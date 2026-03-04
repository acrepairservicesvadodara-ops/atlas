import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, ShoppingCart, Truck, FileText, Shield, Star, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Emergency On-Site Repair | Hitech Aircool Engineers | Buy Online | Atlas Aircon Gujarat",
  description: "Blower motor failure can halt heating or cooling. Our emergency on-site repair service dispatches a technician immediately. We carry common motors and p...",
  keywords: ["emergency on-site repair | hitech aircool engineers", "hitech aircool engineers", "hvac parts vadodara", "ac spare parts gujarat", "emergency services"],
  alternates: { canonical: "https://atlasaircons.com/emergency-on-site-repair-hitech-aircool-engineers" },
  openGraph: {
    title: "Emergency On-Site Repair | Hitech Aircool Engineers",
    description: "Blower motor failure can halt heating or cooling. Our emergency on-site repair service dispatches a technician immediately. We carry common motors and p...",
    url: "https://atlasaircons.com/emergency-on-site-repair-hitech-aircool-engineers",
    type: "website",
    images: ["/images/products/fan-motor-4-6953aa7c77f18.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Emergency On-Site Repair | Hitech Aircool Engineers",
  description: "Blower motor failure can halt heating or cooling. Our emergency on-site repair service dispatches a technician immediately. We carry common motors and parts to diagnose and repair or replace the faulty motor on the spot, minimizing downtime and restoring comfort to your home or business as soon as p",
  image: "/images/products/fan-motor-4-6953aa7c77f18.webp",
  brand: { "@type": "Brand", name: "Hitech Aircool Engineers" },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "299",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Atlas Aircon" },
  },
  category: "Emergency Services",
  
};

export default function Pageemergencyonsiterepairhitechaircoolengine() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Product Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 md:p-8">
              <div className="space-y-4">
                <img
                  src="/images/products/fan-motor-4-6953aa7c77f18.webp"
                  alt="Emergency On-Site Repair | Hitech Aircool Engineers"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="eager"
                />

                <img
                  src="/images/products/fan-motor-3-6953aa7c6eeed.webp"
                  alt="Emergency On-Site Repair | Hitech Aircool Engineers - Image 2"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="lazy"
                />

                <img
                  src="/images/products/fan-motor-2-6953aa7acffe9.webp"
                  alt="Emergency On-Site Repair | Hitech Aircool Engineers - Image 3"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="lazy"
                />

                <img
                  src="/images/products/fan-motor-6953aa7ad3ba4.webp"
                  alt="Emergency On-Site Repair | Hitech Aircool Engineers - Image 4"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold">IN STOCK</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">Emergency Services</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Emergency On-Site Repair | Hitech Aircool Engineers</h1>
              <div className="flex items-center gap-2 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                <span className="text-gray-300 text-sm ml-2">(35+ reviews)</span>
              </div>
              <p className="text-3xl font-bold text-yellow-400 mb-6">₹299</p>
              <p className="text-gray-300 mb-6 leading-relaxed">Blower motor failure can halt heating or cooling. Our emergency on-site repair service dispatches a technician immediately. We carry common motors and</p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a href="tel:+919727257141" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition">
                  <Phone className="w-5 h-5" /> Order Now
                </a>
                <a href="https://wa.me/919727257141?text=I%20want%20to%20order%3A%20Emergency%20On-Site%20Repair%20%7C%20Hitech%20Aircool%20Engineers" className="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition">
                  WhatsApp Order
                </a>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-gray-300"><Truck className="w-4 h-4 text-blue-400" /> GIDC Delivery</div>
                <div className="flex items-center gap-1.5 text-gray-300"><FileText className="w-4 h-4 text-blue-400" /> GST Invoice</div>
                <div className="flex items-center gap-1.5 text-gray-300"><Shield className="w-4 h-4 text-blue-400" /> Genuine Parts</div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">AMC</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Critical System Failure</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Data Centers</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Emergency On-Site Repair</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Gujarat</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Hospitals</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Minimize downtime</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Other</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Description</h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>Blower motor failure can halt heating or cooling. Our emergency on-site repair service dispatches a technician immediately. We carry common motors and parts to diagnose and repair or replace the faulty motor on the spot, minimizing downtime and restoring comfort to your home or business as soon as possible.</p>
            </div>
            
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Product Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">Category</span><span className="font-medium">Emergency Services</span></div>
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">Brand</span><span className="font-medium">Hitech Aircool Engineers</span></div>
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">Availability</span><span className="font-medium text-green-600">In Stock</span></div>
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">Delivery</span><span className="font-medium">All Gujarat &amp; GIDC Zones</span></div>
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">Invoice</span><span className="font-medium">GST Invoice Provided</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Related Products</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[{"url":"https://www.atlasaircons.com/unheated-air-curtains-hitech-aircool-engineers/","title":"Unheated Air Curtains | Hitech Aircool Engineers","price":""},{"url":"https://www.atlasaircons.com/24x7-humidifier-emergency-service-hitech-aircool-engineers/","title":"24X7 Humidifier Emergency Service | Hitech Aircool Engineers","price":""}].map((p: { url: string; title: string; price: string }) => (
              <a key={p.url} href={p.url.replace("https://www.atlasaircons.com/", "/").replace("https://atlasaircons.com/", "/").replace(/\/$/, "")} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition block">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2">{p.title}</h3>
                <p className="text-blue-600 font-bold">{p.price}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* Why Buy From Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Why Buy From Atlas Aircon?</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, t: "100% Genuine", d: "All parts sourced directly from authorized distributors" },
              { icon: Truck, t: "Fast Delivery", d: "Same-day dispatch to Vadodara, next-day across Gujarat" },
              { icon: FileText, t: "GST Invoice", d: "Proper tax invoice with every order for business claims" },
              { icon: Star, t: "Expert Support", d: "Technical guidance from 20+ years experienced engineers" },
            ].map(item => (
              <div key={item.t} className="bg-gray-50 p-6 rounded-xl text-center border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">{item.t}</h3>
                <p className="text-gray-600 text-sm">{item.d}</p>
              </div>
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
              { q: "What is the cost of Emergency On Site Repair Hitech Aircool Engineers in Vadodara?", a: "Emergency On Site Repair Hitech Aircool Engineers cost starts from ₹299 for inspection. Gas refilling from ₹1,500, PCB repair from ₹1,200, compressor repair from ₹3,500. Atlas Aircon provides upfront pricing with no hidden charges." },
              { q: "How quickly can you come for Emergency On Site Repair Hitech Aircool Engineers?", a: "Atlas Aircon offers same-day Emergency On Site Repair Hitech Aircool Engineers across Vadodara. Our certified technician reaches within 90 minutes to 3 hours of booking. For emergencies, call +91 97272 57141." },
              { q: "Do you provide warranty on Emergency On Site Repair Hitech Aircool Engineerss?", a: "Yes, Atlas Aircon provides 30 to 90 days warranty on Emergency On Site Repair Hitech Aircool Engineerss depending on the work performed. Spare parts like compressors, PCBs, and motors come with manufacturer warranty." },
              { q: "Which AC brands do you repair?", a: "We repair all major brands — Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Mitsubishi, Panasonic, Whirlpool, Godrej, Croma, Toshiba, Haier, and more." },
              { q: "Is emergency Emergency On Site Repair Hitech Aircool Engineers available on holidays?", a: "Yes, Atlas Aircon provides Emergency On Site Repair Hitech Aircool Engineers 7 days a week including Sundays and public holidays. Our 24/7 emergency service is available at +91 97272 57141." },
              { q: "How long does Emergency On Site Repair Hitech Aircool Engineers take?", a: "Most Emergency On Site Repair Hitech Aircool Engineerss are completed within 1-2 hours. Complex repairs involving compressor replacement or major parts may take 3-4 hours. Our technician provides estimated time upfront." },
              { q: "Can you repair older AC models?", a: "Yes, Atlas Aircon specializes in repairing all AC models including older units. We maintain inventory of spare parts for discontinued models and can source parts for most brands." },
              { q: "What payment methods do you accept?", a: "We accept cash, UPI (GPay, PhonePe, Paytm), bank transfer, and cards. Payment is collected only after repair is completed to your satisfaction." },
              { q: "Do you provide AMC for regular AC maintenance?", a: "Yes, our Annual Maintenance Contract (AMC) starts from ₹1,999/year. AMC customers get priority service, free visits, discounted repairs, and scheduled maintenance." },
              { q: "What if the AC problem returns after repair?", a: "If the same issue recurs within the warranty period, we fix it free of charge. Simply call us at +91 97272 57141 and reference your previous service." }
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
          { "@type": "Question", name: "What is the cost of Emergency On Site Repair Hitech Aircool Engineers in Vadodara?", acceptedAnswer: { "@type": "Answer", text: "Emergency On Site Repair Hitech Aircool Engineers cost starts from ₹299 for inspection. Gas refilling from ₹1,500, PCB repair from ₹1,200, compressor repair from ₹3,500. Atlas Aircon provides upfront pricing with no hidden charges." } },
          { "@type": "Question", name: "How quickly can you come for Emergency On Site Repair Hitech Aircool Engineers?", acceptedAnswer: { "@type": "Answer", text: "Atlas Aircon offers same-day Emergency On Site Repair Hitech Aircool Engineers across Vadodara. Our certified technician reaches within 90 minutes to 3 hours of booking. For emergencies, call +91 97272 57141." } },
          { "@type": "Question", name: "Do you provide warranty on Emergency On Site Repair Hitech Aircool Engineerss?", acceptedAnswer: { "@type": "Answer", text: "Yes, Atlas Aircon provides 30 to 90 days warranty on Emergency On Site Repair Hitech Aircool Engineerss depending on the work performed. Spare parts like compressors, PCBs, and motors come with manufacturer warranty." } },
          { "@type": "Question", name: "Which AC brands do you repair?", acceptedAnswer: { "@type": "Answer", text: "We repair all major brands — Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Mitsubishi, Panasonic, Whirlpool, Godrej, Croma, Toshiba, Haier, and more." } },
          { "@type": "Question", name: "Is emergency Emergency On Site Repair Hitech Aircool Engineers available on holidays?", acceptedAnswer: { "@type": "Answer", text: "Yes, Atlas Aircon provides Emergency On Site Repair Hitech Aircool Engineers 7 days a week including Sundays and public holidays. Our 24/7 emergency service is available at +91 97272 57141." } },
          { "@type": "Question", name: "How long does Emergency On Site Repair Hitech Aircool Engineers take?", acceptedAnswer: { "@type": "Answer", text: "Most Emergency On Site Repair Hitech Aircool Engineerss are completed within 1-2 hours. Complex repairs involving compressor replacement or major parts may take 3-4 hours. Our technician provides estimated time upfront." } },
          { "@type": "Question", name: "Can you repair older AC models?", acceptedAnswer: { "@type": "Answer", text: "Yes, Atlas Aircon specializes in repairing all AC models including older units. We maintain inventory of spare parts for discontinued models and can source parts for most brands." } },
          { "@type": "Question", name: "What payment methods do you accept?", acceptedAnswer: { "@type": "Answer", text: "We accept cash, UPI (GPay, PhonePe, Paytm), bank transfer, and cards. Payment is collected only after repair is completed to your satisfaction." } },
          { "@type": "Question", name: "Do you provide AMC for regular AC maintenance?", acceptedAnswer: { "@type": "Answer", text: "Yes, our Annual Maintenance Contract (AMC) starts from ₹1,999/year. AMC customers get priority service, free visits, discounted repairs, and scheduled maintenance." } },
          { "@type": "Question", name: "What if the AC problem returns after repair?", acceptedAnswer: { "@type": "Answer", text: "If the same issue recurs within the warranty period, we fix it free of charge. Simply call us at +91 97272 57141 and reference your previous service." } }
        ]
      }) }} />

{/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need This Product?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Contact us for bulk orders, custom specs, or technical queries. Our HVAC engineers are ready to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919727257141" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition">
              <Phone className="w-5 h-5" /> Call +91 97272 57141
            </a>
            <a href="https://wa.me/919727257141" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition">
              WhatsApp Order
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
