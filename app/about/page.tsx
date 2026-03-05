import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, CheckCircle, Award, Users, Star, Shield } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "About Hitech Aircool Engineers | Best AC Repair Company in Vadodara",
  description: "Hitech Aircool Engineers - Vadodara's trusted AC repair & service company since 2004. 20+ years experience, 5000+ happy customers, 50+ expert technicians. Owner Mehfuz Shahid.",
  alternates: {
    canonical: "https://hitechairconditioning.in/about",
  },
};

export default function AboutPage() {
  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "5000+", label: "Happy Customers" },
    { number: "50+", label: "Expert Technicians" },
    { number: "4.9", label: "Google Rating" },
  ];

  const values = [
    { title: "Quality Service", description: "We never compromise on quality. Every service is performed to the highest standards.", icon: Award },
    { title: "Customer First", description: "Your satisfaction is our priority. We listen, understand, and deliver.", icon: Users },
    { title: "Transparency", description: "No hidden charges. Clear communication and upfront pricing.", icon: CheckCircle },
    { title: "Reliability", description: "We show up on time, every time. Dependable service you can count on.", icon: Shield },
  ];

  const milestones = [
    { year: "2004", event: "Started AC service operations in Vadodara" },
    { year: "2008", event: "Expanded to commercial AC services" },
    { year: "2012", event: "Launched industrial chiller and HVAC services" },
    { year: "2015", event: "Reached 2000+ happy customers milestone" },
    { year: "2018", event: "Expanded service to 10+ cities in Gujarat" },
    { year: "2020", event: "Digital transformation with online booking" },
    { year: "2023", event: "5000+ happy customers achieved" },
    { year: "2024", event: "Celebrating 20 years of excellence" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-yellow-400">Hitech Aircool Engineers</span>
              </h1>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                Vadodara's most trusted AC repair & service company since 2004. 
                We've been keeping Gujarat cool for over 20 years with expert service and genuine care.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold">MS</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Mehfuz Shahid</h2>
                  <p className="text-teal-200">Founder & Managing Director</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <BookingForm title="Book AC Service Now" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-teal-600">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="prose prose-lg mx-auto">
              <p>
                Hitech Aircool Engineers was founded in 2004 by <strong>Mehfuz Shahid</strong> with a simple mission: 
                to provide honest, reliable, and professional AC repair services to the people of Vadodara.
              </p>
              <p>
                What started as a small service operation has grown into one of Gujarat's most trusted 
                AC service companies. Over the past two decades, we've helped thousands of families and 
                businesses stay cool and comfortable.
              </p>
              <p>
                Today, Hitech Aircool Engineers serves not just Vadodara, but extends our expertise to Ahmedabad, 
                Surat, Bharuch, Anand, and many other cities across Gujarat. We've built a team of 50+ 
                certified technicians who share our commitment to excellence.
              </p>
              <p>
                Our growth has been driven by one principle: <strong>treating every customer's AC like our own</strong>. 
                This philosophy has earned us a 4.9-star Google rating and the trust of over 5,000 happy customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, idx) => (
              <div key={milestone.year} className="flex gap-4 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                    {milestone.year.slice(2)}
                  </div>
                  {idx < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-teal-200 my-2"></div>
                  )}
                </div>
                <div className="pt-2">
                  <div className="font-semibold text-teal-600">{milestone.year}</div>
                  <div className="text-gray-700">{milestone.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Team</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            50+ certified technicians trained in the latest AC technologies, 
            ready to serve you with expertise and professionalism.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Service Team</h3>
              <p className="text-gray-600">35+ field technicians serving across Gujarat</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Technical Experts</h3>
              <p className="text-gray-600">10+ senior technicians for complex repairs</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support Team</h3>
              <p className="text-gray-600">Dedicated support for bookings and queries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="w-10 h-10 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <a href="tel:+919328953665" className="text-teal-100 hover:text-white">
                +91 93289 53665
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-10 h-10 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <a href="mailto:hitechairconditioning@gmail.com" className="text-teal-100 hover:text-white">
                hitechairconditioning@gmail.com
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-10 h-10 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-teal-100">Sayajigunj, Vadodara, Gujarat 390005</p>
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
              { q: "What abouts does Hitech Aircool Engineers provide?", a: "Hitech Aircool Engineers provides about, service, installation, AMC, gas refilling, and maintenance for all brands and types in Vadodara." },
              { q: "How do I book about?", a: "Call +91 93289 53665, WhatsApp us, or book online. Same-day service available across Vadodara." },
              { q: "What is your service charge?", a: "Inspection charge is ₹299 (adjusted against repairs). Basic service from ₹499, deep cleaning from ₹799, gas refilling from ₹1,500." },
              { q: "Do you provide warranty?", a: "Yes, 30-90 days warranty on repairs, 1 year on installation. Spare parts carry manufacturer warranty." },
              { q: "Which brands do you service?", a: "We service all brands: Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Panasonic, Godrej, and more." },
              { q: "Is emergency service available?", a: "Yes, 24/7 emergency about available. Call +91 93289 53665 for immediate assistance." },
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
          { "@type": "Question", name: "What abouts does Hitech Aircool Engineers provide?", acceptedAnswer: { "@type": "Answer", text: "Hitech Aircool Engineers provides about, service, installation, AMC, gas refilling, and maintenance for all brands and types in Vadodara." } },
          { "@type": "Question", name: "How do I book about?", acceptedAnswer: { "@type": "Answer", text: "Call +91 93289 53665, WhatsApp us, or book online. Same-day service available across Vadodara." } },
          { "@type": "Question", name: "What is your service charge?", acceptedAnswer: { "@type": "Answer", text: "Inspection charge is ₹299 (adjusted against repairs). Basic service from ₹499, deep cleaning from ₹799, gas refilling from ₹1,500." } },
          { "@type": "Question", name: "Do you provide warranty?", acceptedAnswer: { "@type": "Answer", text: "Yes, 30-90 days warranty on repairs, 1 year on installation. Spare parts carry manufacturer warranty." } },
          { "@type": "Question", name: "Which brands do you service?", acceptedAnswer: { "@type": "Answer", text: "We service all brands: Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Panasonic, Godrej, and more." } },
          { "@type": "Question", name: "Is emergency service available?", acceptedAnswer: { "@type": "Answer", text: "Yes, 24/7 emergency about available. Call +91 93289 53665 for immediate assistance." } },
          { "@type": "Question", name: "What payment methods do you accept?", acceptedAnswer: { "@type": "Answer", text: "Cash, UPI (GPay, PhonePe), bank transfer, and cards. Payment after service completion." } },
          { "@type": "Question", name: "Do you offer AMC?", acceptedAnswer: { "@type": "Answer", text: "Yes, AMC from ₹1,999/year includes free services, priority support, and repair discounts." } },
          { "@type": "Question", name: "Where are you located?", acceptedAnswer: { "@type": "Answer", text: "Hitech Aircool Engineers is based in Sayajigunj, Vadodara. We serve all areas across Vadodara and Gujarat." } },
          { "@type": "Question", name: "What are your working hours?", acceptedAnswer: { "@type": "Answer", text: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM. 24/7 emergency service available." } }
        ]
      }) }} />

{/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Atlas Difference?</h2>
          <p className="text-gray-600 mb-8">
            Book your AC service today and join 5000+ happy customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919328953665"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition"
            >
              <Phone size={22} />
              Call Now
            </a>
            <Link
              href="/contact"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
