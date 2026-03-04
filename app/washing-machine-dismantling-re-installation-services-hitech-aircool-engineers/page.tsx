import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, ShoppingCart, Truck, FileText, Shield, Star, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Washing Machine Dismantling & Re-Installation Services | Hitech Aircool Engineers | Buy Online | Atlas Aircon Gujarat",
  description: "We disconnect and cap water inlet and drain hoses, secure the drum for transport (especially for front-loaders), and move the machine. Re-installation i...",
  keywords: ["washing machine dismantling & re-installation services | hitech aircool engineers", "hitech aircool engineers", "hvac parts vadodara", "ac spare parts gujarat", "installation"],
  alternates: { canonical: "https://atlasaircons.com/washing-machine-dismantling-re-installation-services-hitech-aircool-engineers" },
  openGraph: {
    title: "Washing Machine Dismantling & Re-Installation Services | Hitech Aircool Engineers",
    description: "We disconnect and cap water inlet and drain hoses, secure the drum for transport (especially for front-loaders), and move the machine. Re-installation i...",
    url: "https://atlasaircons.com/washing-machine-dismantling-re-installation-services-hitech-aircool-engineers",
    type: "website",
    images: ["/images/products/Powerjet-ac-service-vadodara.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Washing Machine Dismantling & Re-Installation Services | Hitech Aircool Engineers",
  description: "We disconnect and cap water inlet and drain hoses, secure the drum for transport (especially for front-loaders), and move the machine. Re-installation involves leveling on a solid floor, reconnecting hoses, and running a test cycle to check for leaks and proper operation.",
  image: "/images/products/Powerjet-ac-service-vadodara.webp",
  brand: { "@type": "Brand", name: "Hitech Aircool Engineers" },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "299",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Atlas Aircon" },
  },
  category: "Installation",
  
};

export default function Pagewashingmachinedismantlingreinstallations() {
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
                  src="/images/products/Powerjet-ac-service-vadodara.webp"
                  alt="Washing Machine Dismantling & Re-Installation Services | Hitech Aircool Engineers"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="eager"
                />

                <img
                  src="/images/products/ac-chemical-service.webp"
                  alt="Washing Machine Dismantling & Re-Installation Services | Hitech Aircool Engineers - Image 2"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="lazy"
                />

                <img
                  src="/images/products/central-ac-repair-service-diagram.webp"
                  alt="Washing Machine Dismantling & Re-Installation Services | Hitech Aircool Engineers - Image 3"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="lazy"
                />

                <img
                  src="/images/products/ac-repair-service.webp"
                  alt="Washing Machine Dismantling & Re-Installation Services | Hitech Aircool Engineers - Image 4"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold">IN STOCK</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">Installation</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Washing Machine Dismantling &amp; Re-Installation Services | Hitech Aircool Engineers</h1>
              <div className="flex items-center gap-2 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                <span className="text-gray-300 text-sm ml-2">(35+ reviews)</span>
              </div>
              <p className="text-3xl font-bold text-yellow-400 mb-6">₹299</p>
              <p className="text-gray-300 mb-6 leading-relaxed">We disconnect and cap water inlet and drain hoses, secure the drum for transport (especially for front-loaders), and move the machine. Re-installation</p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a href="tel:+919727257141" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition">
                  <Phone className="w-5 h-5" /> Order Now
                </a>
                <a href="https://wa.me/919727257141?text=I%20want%20to%20order%3A%20Washing%20Machine%20Dismantling%20%26%20Re-Installation%20Services%20%7C%20Hitech%20Aircool%20Engineers" className="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition">
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
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Building Renovations</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Equipment relocation</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Gujarat</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Office Moves</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Other</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Renovations</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Repair</span>
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
              <p>We disconnect and cap water inlet and drain hoses, secure the drum for transport (especially for front-loaders), and move the machine. Re-installation involves leveling on a solid floor, reconnecting hoses, and running a test cycle to check for leaks and proper operation.</p>
            </div>
            
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Product Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">Category</span><span className="font-medium">Installation</span></div>
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
            {[{"url":"https://www.atlasaircons.com/24x7-gyser-emergency-service-hitech-aircool-engineers/","title":"24X7 Gyser Emergency Service | Hitech Aircool Engineers","price":""},{"url":"https://www.atlasaircons.com/heated-air-curtains-hitech-aircool-engineers/","title":"Heated Air Curtains | Hitech Aircool Engineers","price":""}].map((p: { url: string; title: string; price: string }) => (
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
              { q: "What is included in AC installation?", a: "AC installation includes site inspection, bracket/stand fitting, copper piping up to 3m, electrical wiring, drain pipe, gas charging, vacuum testing, and final testing." },
              { q: "How much does AC installation cost in Vadodara?", a: "AC installation costs vary: Split AC from ₹1,500, Window AC from ₹800, Cassette AC from ₹3,500. Additional piping charged at ₹150/meter." },
              { q: "How long does AC installation take?", a: "Standard AC installation takes 2-3 hours for split AC, 1-2 hours for window AC. Complex installations with long piping may take 4-5 hours." },
              { q: "Do you provide AC installation warranty?", a: "Atlas Aircon provides 1-year warranty on installation workmanship. Any installation-related issues within this period are fixed free of charge." },
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
          { "@type": "Question", name: "What is included in AC installation?", acceptedAnswer: { "@type": "Answer", text: "AC installation includes site inspection, bracket/stand fitting, copper piping up to 3m, electrical wiring, drain pipe, gas charging, vacuum testing, and final testing." } },
          { "@type": "Question", name: "How much does AC installation cost in Vadodara?", acceptedAnswer: { "@type": "Answer", text: "AC installation costs vary: Split AC from ₹1,500, Window AC from ₹800, Cassette AC from ₹3,500. Additional piping charged at ₹150/meter." } },
          { "@type": "Question", name: "How long does AC installation take?", acceptedAnswer: { "@type": "Answer", text: "Standard AC installation takes 2-3 hours for split AC, 1-2 hours for window AC. Complex installations with long piping may take 4-5 hours." } },
          { "@type": "Question", name: "Do you provide AC installation warranty?", acceptedAnswer: { "@type": "Answer", text: "Atlas Aircon provides 1-year warranty on installation workmanship. Any installation-related issues within this period are fixed free of charge." } },
          { "@type": "Question", name: "Can you relocate my existing AC?", acceptedAnswer: { "@type": "Answer", text: "Yes, AC relocation includes uninstallation, transport, reinstallation, gas top-up, and testing. Charges vary by distance and AC type." } },
          { "@type": "Question", name: "What type of copper piping do you use?", acceptedAnswer: { "@type": "Answer", text: "We use premium quality copper pipes (0.8mm thickness) with proper insulation. Quality piping prevents gas leaks and maintains AC efficiency." } },
          { "@type": "Question", name: "Is electrical work included in installation?", acceptedAnswer: { "@type": "Answer", text: "Basic electrical work is included. MCB installation, dedicated wiring, or major modifications are charged separately after inspection." } },
          { "@type": "Question", name: "Can you install AC on higher floors?", acceptedAnswer: { "@type": "Answer", text: "Yes, installation available for all floor levels. For high-rise buildings, we coordinate with society for outdoor unit placement." } },
          { "@type": "Question", name: "Do you provide demo after AC installation?", acceptedAnswer: { "@type": "Answer", text: "Yes, our technician provides demo of AC operation, remote control features, and basic maintenance tips after installation." } },
          { "@type": "Question", name: "What should I prepare before AC installation?", acceptedAnswer: { "@type": "Answer", text: "Ensure installation area is accessible and clear. For split AC, decide outdoor unit placement. Electrical point should be within 2 meters." } }
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
