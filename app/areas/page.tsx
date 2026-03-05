import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "AC Repair Service Areas in Vadodara | All Localities Covered",
  description: "Hitech Aircool Engineers serves all areas of Vadodara for AC repair & service. Alkapuri, Gotri, Manjalpur, Akota, Fatehgunj, Karelibaug, and 40+ more areas. Same-day service available.",
  alternates: {
    canonical: "https://hitechairconditioning.in/areas",
  },
};

const vadodaraAreas = [
  { name: "Alkapuri", slug: "alkapuri", popular: true },
  { name: "Gotri", slug: "gotri", popular: true },
  { name: "Manjalpur", slug: "manjalpur", popular: true },
  { name: "Akota", slug: "akota", popular: true },
  { name: "Fatehgunj", slug: "fatehgunj", popular: true },
  { name: "Karelibaug", slug: "karelibaug", popular: true },
  { name: "Sayajigunj", slug: "sayajigunj", popular: true },
  { name: "Waghodia", slug: "waghodia", popular: true },
  { name: "Harni", slug: "harni" },
  { name: "Vasna", slug: "vasna" },
  { name: "Sama", slug: "sama" },
  { name: "Tandalja", slug: "tandalja" },
  { name: "Subhanpura", slug: "subhanpura" },
  { name: "Gorwa", slug: "gorwa" },
  { name: "Nizampura", slug: "nizampura" },
  { name: "Atladara", slug: "atladara" },
  { name: "Chhani", slug: "chhani" },
  { name: "Tarsali", slug: "tarsali" },
  { name: "Makarpura", slug: "makarpura" },
  { name: "Ajwa Road", slug: "ajwa-road" },
  { name: "Vadsar", slug: "vadsar" },
  { name: "Sevasi", slug: "sevasi" },
  { name: "Sama Savli Road", slug: "sama-savli-road" },
  { name: "New VIP Road", slug: "new-vip-road" },
  { name: "Old Padra Road", slug: "old-padra-road" },
  { name: "New Sama Road", slug: "new-sama-road" },
  { name: "Race Course", slug: "race-course" },
  { name: "Ellora Park", slug: "ellora-park" },
  { name: "GIDC Makarpura", slug: "gidc-makarpura" },
  { name: "Nandesari", slug: "nandesari" },
  { name: "Savli", slug: "savli" },
  { name: "Dabhoi Road", slug: "dabhoi-road" },
  { name: "Karjan", slug: "karjan" },
  { name: "Padra", slug: "padra" },
];

const nearbyCities = [
  { name: "Ahmedabad", slug: "ahmedabad", distance: "110 km" },
  { name: "Surat", slug: "surat", distance: "160 km" },
  { name: "Bharuch", slug: "bharuch", distance: "72 km" },
  { name: "Anand", slug: "anand", distance: "40 km" },
  { name: "Gandhinagar", slug: "gandhinagar", distance: "130 km" },
  { name: "Godhra", slug: "godhra", distance: "60 km" },
  { name: "Halol", slug: "halol", distance: "40 km" },
  { name: "Ankleshwar", slug: "ankleshwar", distance: "90 km" },
  { name: "Nadiad", slug: "nadiad", distance: "55 km" },
  { name: "Dahod", slug: "dahod", distance: "110 km" },
  { name: "Rajkot", slug: "rajkot", distance: "220 km" },
  { name: "Dahej", slug: "dahej", distance: "95 km" },
];

export default function AreasPage() {
  const popularAreas = vadodaraAreas.filter((a) => a.popular);
  const otherAreas = vadodaraAreas.filter((a) => !a.popular);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AC Service Areas in <span className="text-yellow-400">Vadodara</span>
              </h1>
              <p className="text-xl text-teal-100">
                We provide AC repair & service across all areas of Vadodara and nearby cities. 
                Same-day service available in most locations.
              </p>
            </div>
            <div className="hidden md:block">
              <BookingForm title="Book AC Service Now" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Popular Service Areas</h2>
          <p className="text-gray-600 text-center mb-12">Most requested locations in Vadodara</p>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {popularAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/ac-repair-${area.slug}-vadodara`}
                className="bg-teal-50 hover:bg-teal-100 p-6 rounded-xl border-2 border-teal-200 hover:border-blue-400 transition group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600">
                    {area.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">AC Repair & Service</p>
                <div className="mt-3 text-teal-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">All Vadodara Areas</h2>
          <p className="text-gray-600 text-center mb-12">Complete coverage across Vadodara</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {vadodaraAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/ac-repair-${area.slug}-vadodara`}
                className="flex items-center gap-2 bg-white hover:bg-teal-50 border border-gray-200 hover:border-blue-300 p-3 rounded-lg transition"
              >
                <MapPin size={14} className="text-teal-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Cities We Serve</h2>
          <p className="text-gray-600 text-center mb-12">
            AC service available in major Gujarat cities
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {nearbyCities.map((city) => (
              <Link
                key={city.slug}
                href={`/ac-repair-${city.slug}`}
                className="bg-gray-50 hover:bg-teal-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 mb-1">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-500">{city.distance} from Vadodara</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Industrial Areas</h2>
          <p className="text-gray-600 text-center mb-12">
            Commercial & Industrial AC service for GIDC and factory hubs
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">GIDC Makarpura</h3>
              <p className="text-gray-600 text-sm">Industrial chiller, HVAC, panel AC service</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Nandesari GIDC</h3>
              <p className="text-gray-600 text-sm">Factory AC, chiller repair, maintenance</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Savli Industrial</h3>
              <p className="text-gray-600 text-sm">VRF, central AC, industrial cooling</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Halol Industrial</h3>
              <p className="text-gray-600 text-sm">Commercial AC, chiller service</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Dahej SEZ</h3>
              <p className="text-gray-600 text-sm">Industrial HVAC, precision AC</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Ankleshwar GIDC</h3>
              <p className="text-gray-600 text-sm">Chemical plant cooling, chillers</p>
            </div>
          </div>
        </div>
      </section>

      
      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "What areass does Hitech Aircool Engineers provide?", a: "Hitech Aircool Engineers provides areas, service, installation, AMC, gas refilling, and maintenance for all brands and types in Vadodara." },
              { q: "How do I book areas?", a: "Call +91 93289 53665, WhatsApp us, or book online. Same-day service available across Vadodara." },
              { q: "What is your service charge?", a: "Inspection charge is ₹299 (adjusted against repairs). Basic service from ₹499, deep cleaning from ₹799, gas refilling from ₹1,500." },
              { q: "Do you provide warranty?", a: "Yes, 30-90 days warranty on repairs, 1 year on installation. Spare parts carry manufacturer warranty." },
              { q: "Which brands do you service?", a: "We service all brands: Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Panasonic, Godrej, and more." },
              { q: "Is emergency service available?", a: "Yes, 24/7 emergency areas available. Call +91 93289 53665 for immediate assistance." },
              { q: "What payment methods do you accept?", a: "Cash, UPI (GPay, PhonePe), bank transfer, and cards. Payment after service completion." },
              { q: "Do you offer AMC?", a: "Yes, AMC from ₹1,999/year includes free services, priority support, and repair discounts." },
              { q: "Where are you located?", a: "Hitech Aircool Engineers is based in Sayajigunj, Vadodara. We serve all areas across Vadodara and Gujarat." },
              { q: "What are your working hours?", a: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM. 24/7 emergency service available." }
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
          { "@type": "Question", name: "What areass does Hitech Aircool Engineers provide?", acceptedAnswer: { "@type": "Answer", text: "Hitech Aircool Engineers provides areas, service, installation, AMC, gas refilling, and maintenance for all brands and types in Vadodara." } },
          { "@type": "Question", name: "How do I book areas?", acceptedAnswer: { "@type": "Answer", text: "Call +91 93289 53665, WhatsApp us, or book online. Same-day service available across Vadodara." } },
          { "@type": "Question", name: "What is your service charge?", acceptedAnswer: { "@type": "Answer", text: "Inspection charge is ₹299 (adjusted against repairs). Basic service from ₹499, deep cleaning from ₹799, gas refilling from ₹1,500." } },
          { "@type": "Question", name: "Do you provide warranty?", acceptedAnswer: { "@type": "Answer", text: "Yes, 30-90 days warranty on repairs, 1 year on installation. Spare parts carry manufacturer warranty." } },
          { "@type": "Question", name: "Which brands do you service?", acceptedAnswer: { "@type": "Answer", text: "We service all brands: Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Panasonic, Godrej, and more." } },
          { "@type": "Question", name: "Is emergency service available?", acceptedAnswer: { "@type": "Answer", text: "Yes, 24/7 emergency areas available. Call +91 93289 53665 for immediate assistance." } },
          { "@type": "Question", name: "What payment methods do you accept?", acceptedAnswer: { "@type": "Answer", text: "Cash, UPI (GPay, PhonePe), bank transfer, and cards. Payment after service completion." } },
          { "@type": "Question", name: "Do you offer AMC?", acceptedAnswer: { "@type": "Answer", text: "Yes, AMC from ₹1,999/year includes free services, priority support, and repair discounts." } },
          { "@type": "Question", name: "Where are you located?", acceptedAnswer: { "@type": "Answer", text: "Hitech Aircool Engineers is based in Sayajigunj, Vadodara. We serve all areas across Vadodara and Gujarat." } },
          { "@type": "Question", name: "What are your working hours?", acceptedAnswer: { "@type": "Answer", text: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM. 24/7 emergency service available." } }
        ]
      }) }} />

{/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find Your Area?</h2>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
            We serve all areas in and around Vadodara. Call us to check service availability 
            in your location. Same-day service in most areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919328953665"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition"
            >
              <Phone size={22} />
              +91 93289 53665
            </a>
            <a
              href="https://wa.me/919328953665"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
