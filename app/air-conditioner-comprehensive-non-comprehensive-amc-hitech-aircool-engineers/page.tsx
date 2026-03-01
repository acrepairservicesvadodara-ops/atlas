import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Star, Clock, Shield, Award, MapPin, ArrowRight, Wrench, AlertTriangle, Zap, ThermometerSnowflake, Settings } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "AC Comprehensive & Non-Comprehensive AMC in Vadodara | Atlas Aircon",
  description: "Best AC AMC plans in Vadodara - Comprehensive & Non-Comprehensive Annual Maintenance Contracts. Covers all brands. 20+ years experience. Call +91 97272 57141",
  keywords: [
    "AC AMC Vadodara",
    "comprehensive AMC Vadodara",
    "non-comprehensive AMC Vadodara",
    "air conditioner AMC",
    "AC annual maintenance contract",
    "AC maintenance plan Vadodara",
    "best AC AMC service Vadodara",
    "hitech aircool engineers",
    "Atlas Aircon AMC",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/air-conditioner-comprehensive-non-comprehensive-amc-hitech-aircool-engineers",
  },
};

export default function ComprehensiveNonComprehensiveAMCPage() {
  const comprehensiveFeatures = [
    "Unlimited breakdown visits",
    "All spare parts included (except compressor)",
    "Gas top-up included",
    "Filter cleaning every visit",
    "Coil cleaning & sanitization",
    "Electrical checks & tightening",
    "Drain pipe cleaning",
    "Performance optimization",
    "Priority response within 4 hours",
    "No extra charges for repairs",
  ];

  const nonComprehensiveFeatures = [
    "2-4 scheduled service visits per year",
    "Filter cleaning every visit",
    "Coil cleaning & sanitization",
    "Electrical checks & tightening",
    "Drain pipe cleaning",
    "Gas pressure check",
    "Performance check & report",
    "Spare parts at discounted rates",
    "Breakdown visits at reduced charges",
    "Annual performance certificate",
  ];

  const brands = [
    "Daikin", "Voltas", "Blue Star", "Carrier", "LG", "Samsung",
    "Hitachi", "O General", "Mitsubishi", "Panasonic", "Whirlpool", "Godrej",
    "Haier", "Lloyd", "Toshiba", "Midea",
  ];

  const acTypes = [
    "Split AC", "Window AC", "Cassette AC", "Ductable AC",
    "Tower AC", "Central AC", "VRF/VRV System", "Package AC",
  ];

  const faqs = [
    {
      question: "What is the difference between Comprehensive and Non-Comprehensive AMC?",
      answer: "Comprehensive AMC covers all repairs, spare parts, and gas refilling at no extra cost. Non-Comprehensive AMC covers only scheduled maintenance visits — spare parts and major repairs are charged separately at discounted rates.",
    },
    {
      question: "How many service visits are included in the AMC?",
      answer: "Comprehensive AMC includes unlimited breakdown visits plus 4 scheduled services. Non-Comprehensive AMC includes 2-4 scheduled service visits per year depending on the plan.",
    },
    {
      question: "What is the AMC cost for a split AC in Vadodara?",
      answer: "Non-Comprehensive AMC starts from ₹1,999/year and Comprehensive AMC starts from ₹3,499/year for a 1-1.5 ton split AC. Prices vary by AC type, tonnage, and brand.",
    },
    {
      question: "Is compressor replacement covered in Comprehensive AMC?",
      answer: "Compressor replacement is generally not covered in standard AMC plans. However, we offer premium plans that include compressor coverage at additional cost.",
    },
    {
      question: "Can I get AMC for a commercial or industrial AC?",
      answer: "Yes, we provide both Comprehensive and Non-Comprehensive AMC for commercial ACs, ductable units, VRF/VRV systems, chillers, and all industrial cooling equipment.",
    },
    {
      question: "Do you provide AMC for all AC brands?",
      answer: "Yes, we provide AMC for all major AC brands including Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Panasonic, Godrej, and more.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <Shield className="w-4 h-4" />
                <span>AMC Plans</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                AC <span className="text-yellow-400">Comprehensive & Non-Comprehensive AMC</span> in Vadodara
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Protect your air conditioner with our Annual Maintenance Contracts. 
                Choose from Comprehensive (all-inclusive) or Non-Comprehensive (scheduled service) AMC plans 
                for hassle-free AC performance year-round.
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
                  WhatsApp Us
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>All Brands Covered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Flexible Plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>20+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <BookingForm title="Get AMC Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* AMC Plans Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Choose Your AC AMC Plan
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Compare our Comprehensive and Non-Comprehensive AMC plans to find the best fit for your needs
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Comprehensive AMC */}
            <div className="relative bg-gradient-to-b from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-500 shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Comprehensive AMC</h3>
                <p className="text-gray-600">All-inclusive maintenance & repair</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-600">₹3,499</span>
                  <span className="text-gray-500">/year onwards</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {comprehensiveFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:+919727257141"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-center transition"
              >
                Get Comprehensive AMC
              </a>
            </div>

            {/* Non-Comprehensive AMC */}
            <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Non-Comprehensive AMC</h3>
                <p className="text-gray-600">Scheduled maintenance visits</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-800">₹1,999</span>
                  <span className="text-gray-500">/year onwards</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {nonComprehensiveFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:+919727257141"
                className="block w-full bg-gray-800 hover:bg-gray-900 text-white py-4 rounded-xl font-bold text-center transition"
              >
                Get Non-Comprehensive AMC
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Pricing Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            AC AMC Pricing in Vadodara
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Transparent pricing for all AC types and tonnages
          </p>
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="text-left py-4 px-6">AC Type / Tonnage</th>
                  <th className="text-center py-4 px-6">Non-Comprehensive</th>
                  <th className="text-center py-4 px-6">Comprehensive</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Split AC (1 - 1.5 Ton)</td>
                  <td className="py-4 px-6 text-center font-semibold text-gray-800">₹1,999</td>
                  <td className="py-4 px-6 text-center font-semibold text-blue-600">₹3,499</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-medium">Split AC (2 Ton)</td>
                  <td className="py-4 px-6 text-center font-semibold text-gray-800">₹2,499</td>
                  <td className="py-4 px-6 text-center font-semibold text-blue-600">₹4,499</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Window AC</td>
                  <td className="py-4 px-6 text-center font-semibold text-gray-800">₹1,799</td>
                  <td className="py-4 px-6 text-center font-semibold text-blue-600">₹2,999</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-medium">Cassette AC</td>
                  <td className="py-4 px-6 text-center font-semibold text-gray-800">₹3,499</td>
                  <td className="py-4 px-6 text-center font-semibold text-blue-600">₹5,999</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Ductable AC</td>
                  <td className="py-4 px-6 text-center font-semibold text-gray-800">₹4,999</td>
                  <td className="py-4 px-6 text-center font-semibold text-blue-600">₹8,999</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Central / VRF System</td>
                  <td className="py-4 px-6 text-center font-semibold text-gray-800">Custom</td>
                  <td className="py-4 px-6 text-center font-semibold text-blue-600">Custom</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">
            * Prices are indicative. Final pricing depends on AC brand, condition & location. GST extra.
          </p>
        </div>
      </section>

      {/* Why Choose Atlas Aircon AMC */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Atlas Aircon for AMC?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">20+ Years Experience</h3>
              <p className="text-gray-600 text-sm">Trusted since 2004 in Vadodara</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Certified Technicians</h3>
              <p className="text-gray-600 text-sm">Trained for all AC brands</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Priority Response</h3>
              <p className="text-gray-600 text-sm">AMC customers get priority service</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">5000+ Customers</h3>
              <p className="text-gray-600 text-sm">Serving Vadodara & Gujarat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Cover */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            AC Brands We Cover Under AMC
          </h2>
          <p className="text-gray-600 text-center mb-12">
            AMC available for all major air conditioner brands
          </p>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-5xl mx-auto">
            {brands.map((brand) => (
              <div
                key={brand}
                className="bg-white p-4 rounded-lg text-center border border-gray-200 hover:border-blue-300 hover:shadow-sm transition"
              >
                <span className="text-gray-800 font-medium text-sm">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AC Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            AMC for All AC Types
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Residential, commercial & industrial AC maintenance contracts
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {acTypes.map((type) => (
              <div
                key={type}
                className="bg-gray-50 p-5 rounded-xl text-center border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition"
              >
                <ThermometerSnowflake className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <span className="text-gray-800 font-semibold">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How AMC Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How Our AMC Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Choose Plan</h3>
              <p className="text-gray-600 text-sm">Select Comprehensive or Non-Comprehensive AMC based on your needs</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">AC Inspection</h3>
              <p className="text-gray-600 text-sm">Our technician inspects your AC and provides a health report</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Sign Contract</h3>
              <p className="text-gray-600 text-sm">Sign the AMC agreement with clear terms and pricing</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Enjoy Service</h3>
              <p className="text-gray-600 text-sm">Scheduled visits + priority breakdown support all year</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions - AC AMC
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-gray-50 rounded-lg group shadow-sm">
                <summary className="p-4 cursor-pointer font-semibold text-gray-900 flex justify-between items-center">
                  {faq.question}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/ac-amc-vadodara"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition group"
            >
              <Shield className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold group-hover:text-blue-600">AC AMC Vadodara</h3>
              <p className="text-gray-600 text-sm mt-2">Annual maintenance contracts for all AC types</p>
            </Link>
            <Link
              href="/ac-maintenance-vadodara"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition group"
            >
              <Settings className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold group-hover:text-blue-600">AC Maintenance</h3>
              <p className="text-gray-600 text-sm mt-2">Regular AC maintenance & tune-up service</p>
            </Link>
            <Link
              href="/ac-service-vadodara"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition group"
            >
              <Wrench className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold group-hover:text-blue-600">AC Service</h3>
              <p className="text-gray-600 text-sm mt-2">Complete AC servicing & cleaning</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Get Your AC AMC Plan Today
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Protect your air conditioner with Atlas Aircon&apos;s Comprehensive or Non-Comprehensive AMC. 
            Save money on repairs and keep your AC running efficiently all year.
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
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
