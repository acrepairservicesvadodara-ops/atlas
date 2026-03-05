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
  ThermometerSnowflake,
  Settings,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title:
    "AC Service & Repair in Manjalpur | Hitech Aircool Engineers Vadodara",
  description:
    "Best AC service in Manjalpur, Vadodara. Fast, reliable AC repair, installation & maintenance for all brands. 24/7 emergency support, 1-year warranty. Starting ₹499. Call +91 93289 53665.",
  keywords: [
    "ac service manjalpur",
    "ac repair manjalpur",
    "ac service in manjalpur vadodara",
    "ac installation manjalpur",
    "ac gas refilling manjalpur",
    "ac deep cleaning manjalpur",
    "split ac repair manjalpur",
    "window ac service manjalpur",
    "refrigerator repair manjalpur",
    "air cooler repair manjalpur",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-service-in-manjalpur",
  },
  openGraph: {
    title: "AC Service & Repair in Manjalpur | Hitech Aircool Engineers",
    description:
      "Expert AC repair, installation & maintenance in Manjalpur, Vadodara. 24/7 emergency service, 1-year warranty. Starting ₹499.",
    url: "https://hitechairconditioning.in/ac-service-in-manjalpur",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Service in Manjalpur",
  provider: {
    "@type": "LocalBusiness",
    name: "Hitech Aircool Engineers",
    telephone: "+919328953665",
    email: "hitechairconditioning@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sayajigunj",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390005",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "5000",
    },
  },
  areaServed: {
    "@type": "Place",
    name: "Manjalpur, Vadodara",
  },
  serviceType: "AC Repair and Maintenance",
  description:
    "Fast, reliable AC repair, installation and maintenance for all AC, Refrigerator and Air Cooler brands in Manjalpur, Vadodara.",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "249",
    highPrice: "5000",
    priceCurrency: "INR",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does AC service cost in Manjalpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost for a standard AC service in Manjalpur typically ranges from ₹499 to ₹799, depending on the type of AC (Window or Split). Our jet pump service starts at ₹499.",
      },
    },
    {
      "@type": "Question",
      name: "What are the visit charges for AC repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our standard visit charge for diagnosing an issue in Manjalpur is ₹299. This fee is adjusted against the final bill if you proceed with the repair.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide 24/7 emergency AC repair service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Hitech Aircool Engineers provides 24/7 emergency AC repair service across Manjalpur. We understand that AC issues can arise at any time, and our team is always ready.",
      },
    },
    {
      "@type": "Question",
      name: "Which AC brands do you service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We service all major AC brands including Voltas, LG, Samsung, Daikin, Hitachi, Blue Star, Carrier, O General, Lloyd, Panasonic, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a warranty on repairs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide a 1-year service warranty on all repairs and a 90-day warranty on spare parts.",
      },
    },
  ],
};

export default function ACServiceManjalpurPage() {
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
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <MapPin className="w-4 h-4" />
                <span>Manjalpur, Vadodara</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-yellow-400">AC Service &amp; Repair</span>{" "}
                in Manjalpur
              </h1>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                Your search for the best AC service in Manjalpur ends here. We provide fast,
                reliable, and affordable repair, installation, and maintenance for all AC,
                Refrigerator, and Air Cooler brands. Get cool air, fast!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+919328953665"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"
                >
                  <Phone size={22} />
                  Call Now for a Quote
                </a>
                <a
                  href="https://wa.me/919328953665"
                  className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Certified Technicians</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 Emergency</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>1-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.9/5 Star Rated</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <BookingForm title="Book AC Service in Manjalpur" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Services &amp; Transparent Pricelist
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            At Hitech Aircool Engineers, we believe in honest pricing. No hidden fees, just expert
            HVAC repair service in Manjalpur.
          </p>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="text-left py-4 px-6">Service</th>
                  <th className="text-left py-4 px-6 hidden md:table-cell">
                    Description
                  </th>
                  <th className="text-right py-4 px-6">Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    service: "AC Repair in Vadodara",
                    desc: "Diagnosis and fixing of non-functional AC units, including circuit repair.",
                    price: "₹299 (Visit Charges)",
                  },
                  {
                    service: "AC Jet Pump Service",
                    desc: "Deep cleaning of indoor and outdoor units with a high-pressure jet pump.",
                    price: "Starting from ₹499",
                  },
                  {
                    service: "AC Installation / Uninstallation",
                    desc: "Professional installation or AC removing from one place to another.",
                    price: "Starting from ₹799",
                  },
                  {
                    service: "AC Gas Refilling",
                    desc: "Leak detection and refilling of refrigerant gas for all AC types.",
                    price: "Starting from ₹1,500",
                  },
                  {
                    service: "Refrigerator Repair",
                    desc: "Expert repair for all fridge types, including gas charging and gasket repair.",
                    price: "₹249 (Visit Charges)",
                  },
                  {
                    service: "Air Cooler Repair Service",
                    desc: "Repair for all types of air coolers, including motor and pump issues.",
                    price: "₹199 (Visit Charges)",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.service}
                    className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-white" : ""}`}
                  >
                    <td className="py-4 px-6 font-medium">{row.service}</td>
                    <td className="py-4 px-6 text-gray-500 text-sm hidden md:table-cell">
                      {row.desc}
                    </td>
                    <td className="py-4 px-6 text-right font-semibold text-teal-600 whitespace-nowrap">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-gray-500 p-4 italic">
              *Final prices may vary based on the specific issue, model, and required
              spare parts.{" "}
              <Link
                href="/ac-service-charges-in-vadodara"
                className="text-teal-600 hover:underline"
              >
                View detailed AC repairing charges
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Hitech Aircool Engineers?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-white p-6 rounded-xl">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-semibold mb-2">Certified Technicians</h3>
              <p className="text-gray-600 text-sm">
                Highly skilled and verified technicians with years of experience
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Emergency Support</h3>
              <p className="text-gray-600 text-sm">
                AC broke down at midnight? No problem. Round-the-clock support.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">
                Upfront quotes and detailed invoices. No surprises.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-semibold mb-2">1-Year Service Warranty</h3>
              <p className="text-gray-600 text-sm">
                All services come with a 1-year warranty for complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pros and Cons of Professional AC Service
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-green-50 p-8 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center gap-2">
                <ThumbsUp className="w-6 h-6" /> Pros of Professional Service
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-600">
                  <strong className="text-gray-900">Expert Diagnosis:</strong> Certified
                  technicians can accurately identify issues, preventing further damage and
                  more costly repairs.
                </li>
                <li className="text-gray-600">
                  <strong className="text-gray-900">Safety Assured:</strong> Handling
                  electrical parts and refrigerants can be dangerous. Professionals ensure
                  safe AC repair.
                </li>
                <li className="text-gray-600">
                  <strong className="text-gray-900">Longevity &amp; Efficiency:</strong>{" "}
                  Regular professional AC service extends your unit&apos;s lifespan and ensures
                  peak efficiency, saving on electricity bills.
                </li>
                <li className="text-gray-600">
                  <strong className="text-gray-900">Warranty Protection:</strong> Our 1-year
                  service warranty gives you extra peace of mind.
                </li>
              </ul>
            </div>
            <div className="bg-red-50 p-8 rounded-xl border border-red-200">
              <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-2">
                <ThumbsDown className="w-6 h-6" /> Cons to Consider
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-600">
                  <strong className="text-gray-900">Higher Initial Cost:</strong>{" "}
                  Professional service has a higher upfront cost compared to DIY. However,
                  it often saves money long-term by avoiding bigger issues.
                </li>
                <li className="text-gray-600">
                  <strong className="text-gray-900">Scheduling Required:</strong> You need
                  to schedule an appointment. However, we offer 24/7 emergency support for
                  urgent needs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Simple 3-Step Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: 1,
                title: "Book Your Service",
                desc: "Call us or fill out our online form. Describe your issue and schedule a convenient time for our technician to visit.",
                icon: Phone,
              },
              {
                step: 2,
                title: "Expert Diagnosis & Repair",
                desc: "Our technician arrives, diagnoses the problem, provides a quote, and completes the repair using genuine parts.",
                icon: Wrench,
              },
              {
                step: 3,
                title: "Enjoy Cool Comfort",
                desc: "Your appliance is back to working perfectly. Enjoy the comfort and pay securely via cash, UPI, or card.",
                icon: ThermometerSnowflake,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition"
              >
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How much does AC service cost in Manjalpur?",
                a: "The cost for a standard AC service in Manjalpur typically ranges from ₹499 to ₹799, depending on the type of AC (Window or Split). Our jet pump service starts at ₹499.",
              },
              {
                q: "What are the visit charges for AC repair?",
                a: "Our standard visit charge for diagnosing an issue in Manjalpur is ₹299. This fee is adjusted against the final bill if you proceed with the repair.",
              },
              {
                q: "Do you provide 24/7 emergency AC repair service?",
                a: "Yes, Hitech Aircool Engineers provides 24/7 emergency AC repair service across Manjalpur. Our team is always ready to provide swift solutions to restore your comfort.",
              },
              {
                q: "How long does AC installation take?",
                a: "A standard split AC installation takes 2 to 4 hours, while a window AC installation is usually completed within 1 to 2 hours. Duration varies based on site complexity and piping requirements.",
              },
              {
                q: "Which AC brands do you service?",
                a: "We service all major brands including Voltas, LG, Samsung, Daikin, Hitachi, Blue Star, Carrier, O General, Lloyd, Panasonic, and more. Our technicians handle all models, from inverter to non-inverter ACs.",
              },
              {
                q: "What is included in a standard AC service?",
                a: "Standard AC service includes cleaning the indoor unit's filter, cooling coil, and blower, as well as the outdoor unit's condenser coil. We also check electrical components, refrigerant levels, and overall performance.",
              },
              {
                q: "How often should I get my AC serviced?",
                a: "For optimal performance, we recommend getting your AC serviced at least twice a year: once before summer starts and once after it ends. Regular servicing prevents major breakdowns.",
              },
              {
                q: "Do you repair refrigerators and air coolers too?",
                a: "Yes, we also offer professional refrigerator repair and air cooler repair services in Manjalpur. Whether it's a cooling issue, faulty compressor, or water pump problem, our team can fix it.",
              },
              {
                q: "What are the signs my AC needs gas refilling?",
                a: "Common signs include reduced cooling, ice formation on copper pipes, and the outdoor unit not releasing hot air. This usually indicates a leak which our technicians will find and fix.",
              },
              {
                q: "Do you offer a warranty on repairs?",
                a: "Yes! We provide a 1-year service warranty on all repairs and a 90-day warranty on spare parts. This ensures reliable service and complete peace of mind.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-gray-50 rounded-xl border border-gray-200"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 group-open:border-b group-open:border-gray-200">
                  {faq.q}
                  <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="p-6 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Serving All Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Serving All of Vadodara and Surrounding Areas
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We are proud to offer expert AC service across Vadodara. Find your
            locality below.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {[
              { name: "Akota", href: "/ac-service-in-akota" },
              { name: "Alkapuri", href: "/ac-service-in-alkapuri" },
              { name: "Atladara", href: "/ac-service-in-atladara" },
              { name: "Bhayli", href: "/ac-service-in-bhayli" },
              { name: "Chhani", href: "/ac-service-in-chhani" },
              { name: "Ellora Park", href: "/ac-service-in-ellora-park" },
              { name: "Fatehganj", href: "/ac-service-in-fatehganj" },
              { name: "Gorwa", href: "/ac-service-in-gorwa" },
              { name: "Gotri", href: "/ac-service-in-gotri" },
              { name: "Harni", href: "/ac-service-in-harni" },
              { name: "Karelibaug", href: "/ac-service-in-karelibaug" },
              { name: "Makarpura", href: "/ac-service-in-makarpura" },
              { name: "Maneja", href: "/ac-service-in-maneja" },
              { name: "Manjalpur", href: "/ac-service-in-manjalpur" },
              { name: "Nandesari", href: "/ac-service-in-nandesari" },
              { name: "Nizampura", href: "/ac-service-in-nizampura" },
              { name: "Padra", href: "/ac-service-in-padra" },
              { name: "Pratapgunj", href: "/ac-service-in-pratapgunj" },
              { name: "Race Course", href: "/ac-service-in-race-course" },
              { name: "Sama", href: "/ac-service-in-sama" },
              { name: "Sayajigunj", href: "/ac-service-in-sayajigunj" },
              { name: "Subhanpura", href: "/ac-service-in-subhanpura" },
              { name: "Tarsali", href: "/ac-service-in-tarsali" },
              { name: "Waghodia Road", href: "/ac-service-in-waghodia-road" },
              { name: "Warasiya", href: "/ac-service-in-warasiya" },
            ].map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="bg-white text-teal-700 px-4 py-2.5 rounded-full border border-teal-200 hover:bg-teal-50 hover:border-blue-400 transition text-sm font-medium"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Facing AC Trouble? Don&apos;t Sweat It!
          </h2>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
            Get instant, expert help for your Window or Split AC. Our team is
            ready to make your home cool and comfortable again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919328953665"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"
            >
              <Phone size={22} />
              Call +91 93289 53665
            </a>
            <a
              href="https://wa.me/919328953665"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
