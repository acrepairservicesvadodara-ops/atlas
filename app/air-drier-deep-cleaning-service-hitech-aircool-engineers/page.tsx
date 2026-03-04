import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, ShoppingCart, Truck, FileText, Shield, Star, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Air Drier Deep Cleaning Service | Hitech Aircool Engineers | Buy Online | Atlas Aircon Gujarat",
  description: "We deep clean compressed air dryers by cleaning or replacing pre-filters, cleaning the heat exchanger fins (air-cooled) or inspecting tubes (water-coole...",
  keywords: ["air drier deep cleaning service | hitech aircool engineers", "hitech aircool engineers", "hvac parts vadodara", "ac spare parts gujarat", "cleaning"],
  alternates: { canonical: "https://atlasaircons.com/air-drier-deep-cleaning-service-hitech-aircool-engineers" },
  openGraph: {
    title: "Air Drier Deep Cleaning Service | Hitech Aircool Engineers",
    description: "We deep clean compressed air dryers by cleaning or replacing pre-filters, cleaning the heat exchanger fins (air-cooled) or inspecting tubes (water-coole...",
    url: "https://atlasaircons.com/air-drier-deep-cleaning-service-hitech-aircool-engineers",
    type: "website",
    images: ["/images/products/Powerjet-ac-service-vadodara.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Air Drier Deep Cleaning Service | Hitech Aircool Engineers",
  description: "We deep clean compressed air dryers by cleaning or replacing pre-filters, cleaning the heat exchanger fins (air-cooled) or inspecting tubes (water-cooled), cleaning the evaporator coil, and checking/cleaning the auto-drain mechanism. Ensures dry, clean compressed air and efficient dryer operation.",
  image: "/images/products/Powerjet-ac-service-vadodara.webp",
  brand: { "@type": "Brand", name: "Hitech Aircool Engineers" },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "299",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Atlas Aircon" },
  },
  category: "Cleaning",
  
};

export default function Pageairdrierdeepcleaningservicehitechaircool() {
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
                  alt="Air Drier Deep Cleaning Service | Hitech Aircool Engineers"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="eager"
                />

                <img
                  src="/images/products/ac-chemical-service.webp"
                  alt="Air Drier Deep Cleaning Service | Hitech Aircool Engineers - Image 2"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="lazy"
                />

                <img
                  src="/images/products/central-ac-repair-service-diagram.webp"
                  alt="Air Drier Deep Cleaning Service | Hitech Aircool Engineers - Image 3"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="lazy"
                />

                <img
                  src="/images/products/ac-repair-service.webp"
                  alt="Air Drier Deep Cleaning Service | Hitech Aircool Engineers - Image 4"
                  className="w-full h-auto rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold">IN STOCK</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">Cleaning</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Air Drier Deep Cleaning Service | Hitech Aircool Engineers</h1>
              <div className="flex items-center gap-2 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                <span className="text-gray-300 text-sm ml-2">(35+ reviews)</span>
              </div>
              <p className="text-3xl font-bold text-yellow-400 mb-6">₹299</p>
              <p className="text-gray-300 mb-6 leading-relaxed">We deep clean compressed air dryers by cleaning or replacing pre-filters, cleaning the heat exchanger fins (air-cooled) or inspecting tubes (water-coo</p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a href="tel:+919727257141" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition">
                  <Phone className="w-5 h-5" /> Order Now
                </a>
                <a href="https://wa.me/919727257141?text=I%20want%20to%20order%3A%20Air%20Drier%20Deep%20Cleaning%20Service%20%7C%20Hitech%20Aircool%20Engineers" className="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition">
                  WhatsApp Order
                </a>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-gray-300"><Truck className="w-4 h-4 text-blue-400" /> GIDC Delivery</div>
                <div className="flex items-center gap-1.5 text-gray-300"><FileText className="w-4 h-4 text-blue-400" /> GST Invoice</div>
                <div className="flex items-center gap-1.5 text-gray-300"><Shield className="w-4 h-4 text-blue-400" /> Genuine Parts</div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Air Drier Deep Cleaning Service</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">All HVACR Equipment</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">All Industries</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">AMC</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Complete System Cleaning</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Gujarat</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Other</span>
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
              <p>We deep clean compressed air dryers by cleaning or replacing pre-filters, cleaning the heat exchanger fins (air-cooled) or inspecting tubes (water-cooled), cleaning the evaporator coil, and checking/cleaning the auto-drain mechanism. Ensures dry, clean compressed air and efficient dryer operation.</p>
            </div>
            
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Product Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                
                <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-500">Category</span><span className="font-medium">Cleaning</span></div>
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
            {[{"url":"https://www.atlasaircons.com/24x7-panel-acs-emergency-service-hitech-aircool-engineers/","title":"24X7 Panel Acs Emergency Service | Hitech Aircool Engineers","price":""},{"url":"https://www.atlasaircons.com/24x7-ahus-emergency-service-hitech-aircool-engineers/","title":"24X7 Ahus Emergency Service | Hitech Aircool Engineers","price":""}].map((p: { url: string; title: string; price: string }) => (
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
              { q: "What does Air Drier Deep Cleaning Service Hitech Aircool Engineers include?", a: "Air Drier Deep Cleaning Service Hitech Aircool Engineers includes filter cleaning, coil jet wash, drain pipe clearing, gas pressure check, electrical inspection, fan motor check, and performance testing." },
              { q: "How much does Air Drier Deep Cleaning Service Hitech Aircool Engineers cost?", a: "Air Drier Deep Cleaning Service Hitech Aircool Engineers starts from ₹499 for basic service. Deep jet cleaning is ₹799 for split AC, ₹599 for window AC. Chemical wash starts from ₹999." },
              { q: "How often should AC be serviced?", a: "AC should be serviced at least twice a year — before summer and after monsoon. Heavy use environments may need quarterly servicing." },
              { q: "Will Air Drier Deep Cleaning Service Hitech Aircool Engineers improve cooling?", a: "Yes, proper Air Drier Deep Cleaning Service Hitech Aircool Engineers can improve cooling efficiency by 20-30%. Dirty filters and coils reduce airflow and heat exchange." },
              { q: "Does Air Drier Deep Cleaning Service Hitech Aircool Engineers reduce electricity bills?", a: "Regular Air Drier Deep Cleaning Service Hitech Aircool Engineers can reduce electricity consumption by 15-25%. A well-maintained AC runs more efficiently, saving power." },
              { q: "How long does Air Drier Deep Cleaning Service Hitech Aircool Engineers take?", a: "Basic Air Drier Deep Cleaning Service Hitech Aircool Engineers takes 30-45 minutes. Deep cleaning with jet wash takes 1-1.5 hours. Chemical foam cleaning takes about 2 hours." },
              { q: "Can Air Drier Deep Cleaning Service Hitech Aircool Engineers remove bad smell?", a: "Yes, Air Drier Deep Cleaning Service Hitech Aircool Engineers includes cleaning of filters, coils, and drain pan which removes bacteria and mold causing odors. Anti-bacterial spray applied." },
              { q: "Is gas top-up included in Air Drier Deep Cleaning Service Hitech Aircool Engineers?", a: "Basic service includes gas pressure check. If gas is low, top-up is charged separately — R22 from ₹1,500, R32/R410A from ₹2,000." },
              { q: "Do you clean outdoor AC unit?", a: "Yes, complete service includes outdoor unit cleaning. Condenser coil cleaning is essential for proper heat rejection." },
              { q: "What's the difference between service and deep cleaning?", a: "Basic service is dry cleaning and inspection. Deep cleaning uses high-pressure jet wash. Chemical wash uses foam for thorough cleaning." }
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
          { "@type": "Question", name: "What does Air Drier Deep Cleaning Service Hitech Aircool Engineers include?", acceptedAnswer: { "@type": "Answer", text: "Air Drier Deep Cleaning Service Hitech Aircool Engineers includes filter cleaning, coil jet wash, drain pipe clearing, gas pressure check, electrical inspection, fan motor check, and performance testing." } },
          { "@type": "Question", name: "How much does Air Drier Deep Cleaning Service Hitech Aircool Engineers cost?", acceptedAnswer: { "@type": "Answer", text: "Air Drier Deep Cleaning Service Hitech Aircool Engineers starts from ₹499 for basic service. Deep jet cleaning is ₹799 for split AC, ₹599 for window AC. Chemical wash starts from ₹999." } },
          { "@type": "Question", name: "How often should AC be serviced?", acceptedAnswer: { "@type": "Answer", text: "AC should be serviced at least twice a year — before summer and after monsoon. Heavy use environments may need quarterly servicing." } },
          { "@type": "Question", name: "Will Air Drier Deep Cleaning Service Hitech Aircool Engineers improve cooling?", acceptedAnswer: { "@type": "Answer", text: "Yes, proper Air Drier Deep Cleaning Service Hitech Aircool Engineers can improve cooling efficiency by 20-30%. Dirty filters and coils reduce airflow and heat exchange." } },
          { "@type": "Question", name: "Does Air Drier Deep Cleaning Service Hitech Aircool Engineers reduce electricity bills?", acceptedAnswer: { "@type": "Answer", text: "Regular Air Drier Deep Cleaning Service Hitech Aircool Engineers can reduce electricity consumption by 15-25%. A well-maintained AC runs more efficiently, saving power." } },
          { "@type": "Question", name: "How long does Air Drier Deep Cleaning Service Hitech Aircool Engineers take?", acceptedAnswer: { "@type": "Answer", text: "Basic Air Drier Deep Cleaning Service Hitech Aircool Engineers takes 30-45 minutes. Deep cleaning with jet wash takes 1-1.5 hours. Chemical foam cleaning takes about 2 hours." } },
          { "@type": "Question", name: "Can Air Drier Deep Cleaning Service Hitech Aircool Engineers remove bad smell?", acceptedAnswer: { "@type": "Answer", text: "Yes, Air Drier Deep Cleaning Service Hitech Aircool Engineers includes cleaning of filters, coils, and drain pan which removes bacteria and mold causing odors. Anti-bacterial spray applied." } },
          { "@type": "Question", name: "Is gas top-up included in Air Drier Deep Cleaning Service Hitech Aircool Engineers?", acceptedAnswer: { "@type": "Answer", text: "Basic service includes gas pressure check. If gas is low, top-up is charged separately — R22 from ₹1,500, R32/R410A from ₹2,000." } },
          { "@type": "Question", name: "Do you clean outdoor AC unit?", acceptedAnswer: { "@type": "Answer", text: "Yes, complete service includes outdoor unit cleaning. Condenser coil cleaning is essential for proper heat rejection." } },
          { "@type": "Question", name: "What's the difference between service and deep cleaning?", acceptedAnswer: { "@type": "Answer", text: "Basic service is dry cleaning and inspection. Deep cleaning uses high-pressure jet wash. Chemical wash uses foam for thorough cleaning." } }
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
