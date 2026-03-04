import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Award,
  MapPin,
  ArrowRight,
  Wrench,
  AlertTriangle,
  Zap,
  ThermometerSnowflake,
  Settings,
  Factory,
  XCircle,
  Building2,
} from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title:
    "Blue Star AC Service Center Vadodara | Out-of-Warranty Repair | Atlas Aircon",
  description:
    "Independent Blue Star AC service center in Vadodara. Expert out-of-warranty repair, gas charging, PCB repair, deep cleaning. Same-day service, 90-day warranty. Call +91 97272 57141.",
  keywords: [
    "blue star ac service center vadodara",
    "blue star ac repair vadodara",
    "blue star ac service vadodara",
    "blue star split ac repair vadodara",
    "blue star ac gas charging vadodara",
    "blue star ac PCB repair vadodara",
    "blue star ac installation vadodara",
    "blue star ac deep cleaning vadodara",
    "blue star ac out of warranty repair",
  ],
  alternates: {
    canonical:
      "https://atlasaircons.com/blue-star-ac-service-center-vadodara",
  },
  openGraph: {
    title: "Blue Star AC Service Center Vadodara | Atlas Aircon",
    description:
      "Independent out-of-warranty repair specialist for Blue Star AC in Vadodara. Same-day service with 90-day guarantee.",
    url: "https://atlasaircons.com/blue-star-ac-service-center-vadodara",
    type: "website",
    images: [
      {
        url: "/images/products/ac-repair-service.webp",
        width: 1200,
        height: 630,
        alt: "Blue Star AC Service Center Vadodara - Out of Warranty Repair",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Blue Star AC Service Center Vadodara",
  provider: {
    "@type": "LocalBusiness",
    name: "Atlas Aircon",
    telephone: "+919727257141",
    email: "atlasaircon1@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sayajigunj",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390005",
      addressCountry: "IN",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Vadodara",
  },
  serviceType: "AC Repair Service",
  description:
    "Independent, out-of-warranty Blue Star AC repair, maintenance and installation service in Vadodara.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Atlas Aircon an authorized Blue Star service center?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Atlas Aircon is an independent and unauthorized service provider. We specialize in high-quality out-of-warranty repair works. If your AC is under official warranty, contact Blue Star's official support.",
      },
    },
    {
      "@type": "Question",
      name: "Will using your service void my official warranty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your unit is still within Blue Star's official warranty period, having it serviced by us (or any independent provider) may void that warranty. We advise you to verify your warranty status before booking.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Atlas Aircon Service Guarantee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All repairs are backed by our exclusive Atlas Aircon Service Guarantee — if a part we replace fails within the specified period, we fix it for free. This includes a 90-day warranty on labor and 90-day warranty on replaced parts.",
      },
    },
  ],
};

export default function BlueStarServiceCenterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <Wrench className="w-4 h-4" />
                <span>Independent Service Provider</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-yellow-400">Blue Star AC Service Center</span>{" "}
                Vadodara
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Expert independent repair solutions for all cooling systems. We
                specialize in providing high-quality, out-of-warranty service and
                maintenance with a full satisfaction guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+919727257141"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"
                >
                  <Phone size={22} />
                  +91 97272 57141
                </a>
                <a
                  href="https://wa.me/919727257141"
                  className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition"
                >
                  Book Expert AC Repair
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>90-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Transparent Pricing</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <BookingForm title="Book Blue Star AC Service" />
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-800 mb-1">
                Service Disclaimer &amp; Warranty Policy
              </h3>
              <p className="text-sm text-amber-700">
                Atlas Aircon is an <strong>Independent and Unauthorized Service Provider</strong>.
                We are NOT affiliated with any brand&apos;s official service network. Our
                expertise lies in providing high-quality out-of-warranty repair works.
                If your AC is still under the manufacturer&apos;s official warranty, we strongly
                advise contacting their official support to preserve your warranty rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premier Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              The Premier Blue Star AC Service Center Vadodara for Out-of-Warranty Care
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600 space-y-4">
              <p>
                At Atlas Aircon, we recognize that once a machine&apos;s official warranty
                expires, owners often face challenges finding reliable, prompt, and
                affordable technical support. As a specialized Blue Star AC service center
                in Vadodara, we fill this gap by offering elite repair services that focus on
                extending the life of your equipment. We are independent experts who understand
                the intricate engineering of modern cooling systems.
              </p>
              <p>
                With the extreme temperatures often seen in Gujarat, waiting days for an
                appointment is not an option. Our independent status allows us to maintain a
                large fleet of technicians who can reach Alkapuri, Makarpura, or Savli GIDC
                within hours. We specialize in deep-level troubleshooting — from resolving
                complex PCB errors to performing precision gas charging — that official channels
                might sometimes overlook or charge excessively for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Independent Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Choose Our Independent Out-of-Warranty Service?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            For units that are 3 to 10 years old, official centers may push for complete
            replacements. Our technicians are trained in component-level repair, saving you thousands.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" /> Pros of Our Service
              </h3>
              <ul className="space-y-3">
                {[
                  "Specialized focus on out-of-warranty units that official centers might ignore.",
                  "Same-day emergency response in almost all residential and industrial areas.",
                  "100% transparent pricing — you only pay for what is actually fixed.",
                  "Our own service guarantee on every repair, ensuring long-term reliability.",
                  "Component-level PCB and compressor repair to save you replacement costs.",
                  "Expert knowledge of Vadodara's specific environmental impact on cooling.",
                  "Flexible scheduling including weekends and late-evening emergency calls.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl border border-red-200">
              <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6" /> Common DIY Pitfalls
              </h3>
              <ul className="space-y-3">
                {[
                  "High risk of electrical shorts when bypassing safety sensors manually.",
                  "Improper refrigerant mix leading to permanent compressor burnout.",
                  "Damaging fragile evaporator fins during unprofessional jet cleaning.",
                  "Incorrect wiring on the motherboard leading to total system failure.",
                  "Using low-quality spare parts that increase monthly electricity consumption.",
                  "Structural cracks in AC mountings causing excessive noise and vibration.",
                  "Missing subtle gas leaks that cause the system to fail within weeks.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Repair & Maintenance Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive Repair &amp; Maintenance Types
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-300 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <ThermometerSnowflake className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Residential Split &amp; Window
              </h3>
              <p className="text-gray-600 mb-4">
                Fast repair for home units including gas charging and sensor
                replacement. Specialized in older model overhauling.
              </p>
              <Link
                href="/split-ac-service-vadodara"
                className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-1"
              >
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-green-300 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Office Central AC
              </h3>
              <p className="text-gray-600 mb-4">
                Ductable, Cassette, and Package unit repairs for corporate
                offices. We specialize in precision AHU maintenance.
              </p>
              <Link
                href="/central-ac-repair-services-vadodara"
                className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-1"
              >
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-red-300 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Factory className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Industrial Chiller Plants
              </h3>
              <p className="text-gray-600 mb-4">
                Heavy-duty cooling plant maintenance for Vadodara&apos;s
                manufacturing sector. Expert condenser cleaning.
              </p>
              <Link
                href="/chiller-repair-services-vadodara"
                className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-1"
              >
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Atlas Aircon Price List for Out-of-Warranty Service
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Transparent pricing with no hidden charges
          </p>
          <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="text-left py-4 px-6">Service</th>
                  <th className="text-right py-4 px-6">Price</th>
                  <th className="text-right py-4 px-6 hidden md:table-cell">
                    Guarantee
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    service: "General Split AC Service",
                    price: "₹599",
                    guarantee: "30 Days Peace of Mind",
                  },
                  {
                    service: "Deep Chemical Jet Wash",
                    price: "₹999",
                    guarantee: "60 Days Satisfaction",
                  },
                  {
                    service: "AC Gas Charging (Full Fill)",
                    price: "₹2,500 Onwards",
                    guarantee: "90 Days Leak Guarantee",
                  },
                  {
                    service: "Window AC Installation",
                    price: "₹800",
                    guarantee: "1 Year Fitting Guarantee",
                  },
                  {
                    service: "Split AC Installation",
                    price: "₹1,500",
                    guarantee: "1 Year Fitting Guarantee",
                  },
                  {
                    service: "PCB Repair (Component Level)",
                    price: "₹1,200 - ₹3,500",
                    guarantee: "90 Days Part Guarantee",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.service}
                    className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                  >
                    <td className="py-4 px-6">{row.service}</td>
                    <td className="py-4 px-6 text-right font-semibold text-blue-600">
                      {row.price}
                    </td>
                    <td className="py-4 px-6 text-right text-gray-500 text-sm hidden md:table-cell">
                      {row.guarantee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-gray-500 p-4 italic">
              *Prices are for out-of-warranty services and include our independent
              labor and part guarantee.{" "}
              <Link
                href="/ac-repair-service-price-list-air-conditioner-repair-service-cost-in-vadodara-gujarat"
                className="text-blue-600 hover:underline"
              >
                View detailed pricing
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Common Error Codes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common AC Error Codes We Solve
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-gray-50 rounded-xl overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="text-left py-4 px-6">Error Code</th>
                  <th className="text-left py-4 px-6">Meaning</th>
                  <th className="text-left py-4 px-6 hidden md:table-cell">
                    Our Fix
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  {
                    code: "E1 / F1",
                    meaning: "Indoor Sensor Failure",
                    fix: "Resistance checking and sensor replacement.",
                  },
                  {
                    code: "E3 / F3",
                    meaning: "Coil Sensor Fault",
                    fix: "Cleaning coil blockages and replacing sensor.",
                  },
                  {
                    code: "H3",
                    meaning: "High Pressure / Overload",
                    fix: "Condenser cleaning and voltage stabilizer check.",
                  },
                  {
                    code: "E5",
                    meaning: "Low Voltage Protection",
                    fix: "Capacitor replacement and PCB diagnostic.",
                  },
                  {
                    code: "F5",
                    meaning: "Outdoor Fan Motor Error",
                    fix: "Motor rewinding or replacement of fan motor.",
                  },
                ].map((row) => (
                  <tr
                    key={row.code}
                    className="border-b border-gray-200 hover:bg-white"
                  >
                    <td className="py-4 px-6 font-bold text-red-600">
                      {row.code}
                    </td>
                    <td className="py-4 px-6 text-gray-700">{row.meaning}</td>
                    <td className="py-4 px-6 text-gray-600 hidden md:table-cell">
                      {row.fix}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Industrial Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Specialized Industrial &amp; GIDC Solutions
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Industries in Vadodara cannot afford cooling failures. From the chemical hubs
            of Nandesari to the engineering units of Makarpura, our team handles systems
            that official channels often struggle with due to their age or complexity.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                Panel AC Maintenance
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Keep your industrial automation running. We service Rittal and other
                industrial panel coolers.
              </p>
              <Link
                href="/panel-ac-service-vadodara"
                className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-1"
              >
                Service Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                Cold Storage &amp; Freezers
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Precise temperature maintenance for food and pharma industries.
                Emergency repair available.
              </p>
              <Link
                href="/cold-room-repair-services-vadodara"
                className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-1"
              >
                View Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                Industrial AHU/HVAC
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Duct cleaning, filter replacement, and motor alignment for large
                manufacturing plants.
              </p>
              <Link
                href="/hvac-repair-services-vadodara"
                className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-1"
              >
                Get Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Brands We Expertly Service
          </h2>
          <p className="text-gray-600 text-center mb-8 text-sm max-w-3xl mx-auto">
            While we specialize as a Blue Star AC service center in Vadodara, our
            independent technical team is equally proficient in repairing products from all
            major brands. <em>We use these brand names solely to denote our repair
            expertise — we are an independent service center specializing in out-of-warranty
            works only.</em>
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Blue Star", "Carrier", "Voltas", "Daikin", "Mitsubishi", "LG",
              "Samsung", "Panasonic", "Hitachi", "Haier", "Godrej", "Lloyd",
              "Whirlpool", "O General", "Onida", "Toshiba", "York",
            ].map((brand) => (
              <span
                key={brand}
                className="bg-gray-100 text-gray-700 px-5 py-3 rounded-full font-medium text-sm hover:bg-blue-100 hover:text-blue-700 transition"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Areas Covered in Vadodara
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" /> Residential Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Alkapuri", "Akota", "Sayajigunj", "Raopura", "Mandvi",
                  "Pratapgunj", "Fatehgunj", "Nizampura", "Chhani", "Sama",
                  "Karelibaug", "Warasiya", "Harni", "Ajwa Road", "Tarsali",
                  "Makarpura", "Maneja", "Manjalpur", "Bhayli", "Gotri",
                  "Subhanpura", "Ellora Park", "Race Course", "Gorwa",
                ].map((area) => (
                  <span
                    key={area}
                    className="bg-blue-50 text-blue-700 text-xs px-3 py-1.5 rounded-full border border-blue-100"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                <Factory className="w-5 h-5" /> Industrial &amp; GIDC Zones
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Makarpura GIDC", "Nandesari GIDC", "Waghodia GIDC",
                  "Por GIDC", "Ramangamdi GIDC", "Savli GIDC", "Manjusar GIDC",
                  "Ranoli GIDC", "Gorwa BIDC", "Halol GIDC", "Kalol GIDC",
                ].map((area) => (
                  <span
                    key={area}
                    className="bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-full border border-green-100"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atlas vs Aggregators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Atlas Aircon vs. Aggregators
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-gray-50 rounded-xl overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="text-left py-4 px-6">Feature</th>
                  <th className="text-center py-4 px-6">Atlas Aircon</th>
                  <th className="text-center py-4 px-6">Urban Company</th>
                  <th className="text-center py-4 px-6">Local Market</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  {
                    feature: "ISO 9001:2015 Certified",
                    atlas: "✅",
                    urban: "❌",
                    local: "❌",
                  },
                  {
                    feature: "Heavy VRF & Chiller Capable",
                    atlas: "✅",
                    urban: "Splits Only",
                    local: "❌",
                  },
                  {
                    feature: "Spares & Gas Authenticity",
                    atlas: "100% Genuine OEM",
                    urban: "Unverified Mix",
                    local: "High Risk",
                  },
                  {
                    feature: "Service Work Guarantee",
                    atlas: "90 Days",
                    urban: "30 Days",
                    local: "None",
                  },
                  {
                    feature: "Emergency Dispatch Time",
                    atlas: "45-60 Mins",
                    urban: "24-48 Hours",
                    local: "Unpredictable",
                  },
                ].map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-gray-200 hover:bg-white"
                  >
                    <td className="py-4 px-6 font-semibold">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-green-700 font-semibold">
                      {row.atlas}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-500">
                      {row.urban}
                    </td>
                    <td className="py-4 px-6 text-center text-red-500">
                      {row.local}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Service Queries (FAQs)
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Is Atlas Aircon an authorized Blue Star service center?",
                a: "No. Atlas Aircon is an independent and unauthorized service provider. We specialize in high-quality out-of-warranty repair works. If your AC is under official warranty, contact Blue Star's official support.",
              },
              {
                q: "Will using your service void my official warranty?",
                a: "If your unit is still within Blue Star's official warranty period, having it serviced by us (or any independent provider) may void that warranty. We advise you to verify your warranty status before booking.",
              },
              {
                q: "What is the Atlas Aircon Service Guarantee?",
                a: "All repairs are backed by our exclusive Atlas Aircon Service Guarantee — if a part we replace fails within the specified period, we fix it for free. This includes a 90-day warranty on labor and 90-day warranty on replaced parts.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-xl border border-gray-200"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 group-open:border-b group-open:border-gray-200">
                  {faq.q}
                  <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="p-6 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Blue Star AC Repair in Vadodara?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Expert independent repair for all Blue Star AC models. Same-day service,
            transparent pricing, 90-day guarantee. Call now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919727257141"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"
            >
              <Phone size={22} />
              Call +91 97272 57141
            </a>
            <a
              href="https://wa.me/919727257141"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition"
            >
              WhatsApp for Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
