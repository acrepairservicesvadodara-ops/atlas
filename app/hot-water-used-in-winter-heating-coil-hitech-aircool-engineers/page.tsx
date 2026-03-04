import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, ShoppingCart, Truck, FileText, Shield, Star, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Hot Water Used In Winter Heating Coil | Hitech Aircool Engineers | Buy Online | Atlas Aircon Gujarat",
  description: "A heating coil that uses hot water from a boiler to warm incoming air. Typically has wider fin spacing than cooling coils as air density changes. We sup...",
  keywords: ["hot water used in winter heating coil | hitech aircool engineers", "hitech aircool engineers", "hvac parts vadodara", "ac spare parts gujarat", "coils"],
  alternates: { canonical: "https://atlasaircons.com/hot-water-used-in-winter-heating-coil-hitech-aircool-engineers" },
  openGraph: {
    title: "Hot Water Used In Winter Heating Coil | Hitech Aircool Engineers",
    description: "A heating coil that uses hot water from a boiler to warm incoming air. Typically has wider fin spacing than cooling coils as air density changes. We sup...",
    url: "https://atlasaircons.com/hot-water-used-in-winter-heating-coil-hitech-aircool-engineers",
    type: "website",
    images: ["/images/products/AC-Copper-Coil-Repair.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Hot Water Used In Winter Heating Coil | Hitech Aircool Engineers",
  description: "A heating coil that uses hot water from a boiler to warm incoming air. Typically has wider fin spacing than cooling coils as air density changes. We supply coils with copper tubes and aluminum fins for efficiency, or all-copper for steam/high-temperature water.",
  image: "/images/products/AC-Copper-Coil-Repair.webp",
  brand: { "@type": "Brand", name: "Hitech Aircool Engineers" },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "299",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Atlas Aircon" },
  },
  category: "Coils",
  
};

export default function Pagehotwaterusedinwinterheatingcoilhitechair() {
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
                  src="/images/products/AC-Copper-Coil-Repair.webp"
                  alt="Hot Water Used In Winter Heating Coil | Hitech Aircool Engineers"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="eager"
                />

                <img
                  src="/images/products/AC-Copper-Coil-Repair3.webp"
                  alt="Hot Water Used In Winter Heating Coil | Hitech Aircool Engineers - Image 2"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="lazy"
                />

                <img
                  src="/images/products/AC-Copper-Coil-Repair6.webp"
                  alt="Hot Water Used In Winter Heating Coil | Hitech Aircool Engineers - Image 3"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="lazy"
                />

                <img
                  src="/images/products/air.webp"
                  alt="Hot Water Used In Winter Heating Coil | Hitech Aircool Engineers - Image 4"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold">IN STOCK</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">Coils</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Hot Water Used In Winter Heating Coil | Hitech Aircool Engineers</h1>
              <div className="flex items-center gap-2 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                <span className="text-gray-300 text-sm ml-2">(35+ reviews)</span>
              </div>
              <p className="text-3xl font-bold text-yellow-400 mb-6">₹299</p>
              <p className="text-gray-300 mb-6 leading-relaxed">A heating coil that uses hot water from a boiler to warm incoming air. Typically has wider fin spacing than cooling coils as air density changes. We s</p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a href="tel:+919727257141" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition">
                  <Phone className="w-5 h-5" /> Order Now
                </a>
                <a href="https://wa.me/919727257141?text=I%20want%20to%20order%3A%20Hot%20Water%20Used%20In%20Winter%20Heating%20Coil%20%7C%20Hitech%20Aircool%20Engineers" className="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition">
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
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Building Heating</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Gujarat</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Heating Systems</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Hot Water Used In Winter Heating Coil</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Other</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Repair</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Seasonal heating</span>
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
              <p>A heating coil that uses hot water from a boiler to warm incoming air. Typically has wider fin spacing than cooling coils as air density changes. We supply coils with copper tubes and aluminum fins for efficiency, or all-copper for steam/high-temperature water.</p>
            </div>
            
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Product Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">Category</span><span className="font-medium">Coils</span></div>
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
            {[{"url":"https://www.atlasaircons.com/24x7-refrigerator-emergency-service-hitech-aircool-engineers/","title":"24X7 Refrigerator Emergency Service | Hitech Aircool Engineers","price":""},{"url":"https://www.atlasaircons.com/refrigerated-cold-storage-air-curtains-hitech-aircool-engineers/","title":"Refrigerated/Cold Storage Air Curtains | Hitech Aircool Engineers","price":""}].map((p: { url: string; title: string; price: string }) => (
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
              { q: "What hot water used in winter heating coil hitech aircool engineerss does Atlas Aircon provide?", a: "Atlas Aircon provides hot water used in winter heating coil hitech aircool engineers, service, installation, AMC, gas refilling, and maintenance for all brands and types in Vadodara." },
              { q: "How do I book hot water used in winter heating coil hitech aircool engineers?", a: "Call +91 97272 57141, WhatsApp us, or book online. Same-day service available across Vadodara." },
              { q: "What is your service charge?", a: "Inspection charge is ₹299 (adjusted against repairs). Basic service from ₹499, deep cleaning from ₹799, gas refilling from ₹1,500." },
              { q: "Do you provide warranty?", a: "Yes, 30-90 days warranty on repairs, 1 year on installation. Spare parts carry manufacturer warranty." },
              { q: "Which brands do you service?", a: "We service all brands: Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Panasonic, Godrej, and more." },
              { q: "Is emergency service available?", a: "Yes, 24/7 emergency hot water used in winter heating coil hitech aircool engineers available. Call +91 97272 57141 for immediate assistance." },
              { q: "What payment methods do you accept?", a: "Cash, UPI (GPay, PhonePe), bank transfer, and cards. Payment after service completion." },
              { q: "Do you offer AMC?", a: "Yes, AMC from ₹1,999/year includes free services, priority support, and repair discounts." },
              { q: "Where are you located?", a: "Atlas Aircon is based in Sayajigunj, Vadodara. We serve all areas across Vadodara and Gujarat." },
              { q: "What are your working hours?", a: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM. 24/7 emergency service available." }
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
          { "@type": "Question", name: "What hot water used in winter heating coil hitech aircool engineerss does Atlas Aircon provide?", acceptedAnswer: { "@type": "Answer", text: "Atlas Aircon provides hot water used in winter heating coil hitech aircool engineers, service, installation, AMC, gas refilling, and maintenance for all brands and types in Vadodara." } },
          { "@type": "Question", name: "How do I book hot water used in winter heating coil hitech aircool engineers?", acceptedAnswer: { "@type": "Answer", text: "Call +91 97272 57141, WhatsApp us, or book online. Same-day service available across Vadodara." } },
          { "@type": "Question", name: "What is your service charge?", acceptedAnswer: { "@type": "Answer", text: "Inspection charge is ₹299 (adjusted against repairs). Basic service from ₹499, deep cleaning from ₹799, gas refilling from ₹1,500." } },
          { "@type": "Question", name: "Do you provide warranty?", acceptedAnswer: { "@type": "Answer", text: "Yes, 30-90 days warranty on repairs, 1 year on installation. Spare parts carry manufacturer warranty." } },
          { "@type": "Question", name: "Which brands do you service?", acceptedAnswer: { "@type": "Answer", text: "We service all brands: Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Panasonic, Godrej, and more." } },
          { "@type": "Question", name: "Is emergency service available?", acceptedAnswer: { "@type": "Answer", text: "Yes, 24/7 emergency hot water used in winter heating coil hitech aircool engineers available. Call +91 97272 57141 for immediate assistance." } },
          { "@type": "Question", name: "What payment methods do you accept?", acceptedAnswer: { "@type": "Answer", text: "Cash, UPI (GPay, PhonePe), bank transfer, and cards. Payment after service completion." } },
          { "@type": "Question", name: "Do you offer AMC?", acceptedAnswer: { "@type": "Answer", text: "Yes, AMC from ₹1,999/year includes free services, priority support, and repair discounts." } },
          { "@type": "Question", name: "Where are you located?", acceptedAnswer: { "@type": "Answer", text: "Atlas Aircon is based in Sayajigunj, Vadodara. We serve all areas across Vadodara and Gujarat." } },
          { "@type": "Question", name: "What are your working hours?", acceptedAnswer: { "@type": "Answer", text: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM. 24/7 emergency service available." } }
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
