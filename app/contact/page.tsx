import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Atlas Aircon | AC Repair Service Vadodara | +91 97272 57141",
  description: "Contact Atlas Aircon for AC repair & service in Vadodara. Call +91 97272 57141 or email atlasaircon1@gmail.com. Same-day service available.",
  alternates: {
    canonical: "https://atlasaircons.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-yellow-400">Atlas Aircon</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch for AC repair, service, or installation. 
            We're here to help 7 days a week.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <a
              href="tel:+919727257141"
              className="bg-blue-50 hover:bg-blue-100 p-6 rounded-xl text-center transition group"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
              <p className="text-blue-600 font-medium">+91 97272 57141</p>
            </a>
            
            <a
              href="https://wa.me/919727257141"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-50 hover:bg-green-100 p-6 rounded-xl text-center transition group"
            >
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
              <p className="text-green-600 font-medium">Chat with us</p>
            </a>
            
            <a
              href="mailto:atlasaircon1@gmail.com"
              className="bg-orange-50 hover:bg-orange-100 p-6 rounded-xl text-center transition group"
            >
              <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
              <p className="text-orange-600 font-medium text-sm">atlasaircon1@gmail.com</p>
            </a>
            
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
              <p className="text-purple-700 text-sm">Mon-Sat: 9AM-8PM</p>
              <p className="text-purple-600 text-sm">Sun: 10AM-6PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ac-repair">AC Repair</option>
                    <option value="ac-service">AC Service</option>
                    <option value="ac-installation">AC Installation</option>
                    <option value="ac-amc">AC AMC</option>
                    <option value="gas-refilling">Gas Refilling</option>
                    <option value="chiller-repair">Chiller Repair</option>
                    <option value="hvac">HVAC Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Area/Location
                  </label>
                  <input
                    type="text"
                    id="area"
                    name="area"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="E.g., Alkapuri, Vadodara"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Describe Your Issue
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your AC problem or service requirement..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold text-lg transition"
                >
                  Submit Request
                </button>
              </form>
            </div>

            {/* Office Info & Map */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Office</h2>
              
              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Atlas Aircon</h3>
                    <p className="text-gray-600">Sayajigunj, Vadodara</p>
                    <p className="text-gray-600">Gujarat 390005, India</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-gray-600">+91 97272 57141</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-gray-600">atlasaircon1@gmail.com</p>
                    <p className="text-gray-600">service@atlasaircons.com</p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="bg-gray-200 rounded-xl overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.169558279991!2d73.1812!3d22.3072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzI2LjAiTiA3M8KwMTAnNTIuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Atlas Aircon Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">We Serve All Areas of Vadodara</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Alkapuri, Gotri, Manjalpur, Akota, Fatehgunj, Karelibaug, Sayajigunj, Waghodia, 
            Harni, Vasna, Sama, Tandalja, Subhanpura, Gorwa, Nizampura, and 40+ more areas.
          </p>
          <p className="text-gray-600">
            Also serving: Ahmedabad, Surat, Bharuch, Anand, Gandhinagar, and nearby cities.
          </p>
        </div>
      </section>

      {/* Quick CTA */}
      
      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "What contacts does Atlas Aircon provide?", a: "Atlas Aircon provides contact, service, installation, AMC, gas refilling, and maintenance for all brands and types in Vadodara." },
              { q: "How do I book contact?", a: "Call +91 97272 57141, WhatsApp us, or book online. Same-day service available across Vadodara." },
              { q: "What is your service charge?", a: "Inspection charge is ₹299 (adjusted against repairs). Basic service from ₹499, deep cleaning from ₹799, gas refilling from ₹1,500." },
              { q: "Do you provide warranty?", a: "Yes, 30-90 days warranty on repairs, 1 year on installation. Spare parts carry manufacturer warranty." },
              { q: "Which brands do you service?", a: "We service all brands: Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Panasonic, Godrej, and more." },
              { q: "Is emergency service available?", a: "Yes, 24/7 emergency contact available. Call +91 97272 57141 for immediate assistance." },
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
          { "@type": "Question", name: "What contacts does Atlas Aircon provide?", acceptedAnswer: { "@type": "Answer", text: "Atlas Aircon provides contact, service, installation, AMC, gas refilling, and maintenance for all brands and types in Vadodara." } },
          { "@type": "Question", name: "How do I book contact?", acceptedAnswer: { "@type": "Answer", text: "Call +91 97272 57141, WhatsApp us, or book online. Same-day service available across Vadodara." } },
          { "@type": "Question", name: "What is your service charge?", acceptedAnswer: { "@type": "Answer", text: "Inspection charge is ₹299 (adjusted against repairs). Basic service from ₹499, deep cleaning from ₹799, gas refilling from ₹1,500." } },
          { "@type": "Question", name: "Do you provide warranty?", acceptedAnswer: { "@type": "Answer", text: "Yes, 30-90 days warranty on repairs, 1 year on installation. Spare parts carry manufacturer warranty." } },
          { "@type": "Question", name: "Which brands do you service?", acceptedAnswer: { "@type": "Answer", text: "We service all brands: Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Panasonic, Godrej, and more." } },
          { "@type": "Question", name: "Is emergency service available?", acceptedAnswer: { "@type": "Answer", text: "Yes, 24/7 emergency contact available. Call +91 97272 57141 for immediate assistance." } },
          { "@type": "Question", name: "What payment methods do you accept?", acceptedAnswer: { "@type": "Answer", text: "Cash, UPI (GPay, PhonePe), bank transfer, and cards. Payment after service completion." } },
          { "@type": "Question", name: "Do you offer AMC?", acceptedAnswer: { "@type": "Answer", text: "Yes, AMC from ₹1,999/year includes free services, priority support, and repair discounts." } },
          { "@type": "Question", name: "Where are you located?", acceptedAnswer: { "@type": "Answer", text: "Atlas Aircon is based in Sayajigunj, Vadodara. We serve all areas across Vadodara and Gujarat." } },
          { "@type": "Question", name: "What are your working hours?", acceptedAnswer: { "@type": "Answer", text: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM. 24/7 emergency service available." } }
        ]
      }) }} />

<section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Urgent AC Repair?</h2>
          <p className="text-blue-100 mb-6">Call now for same-day service in Vadodara!</p>
          <a
            href="tel:+919727257141"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"
          >
            <Phone size={22} />
            +91 97272 57141
          </a>
        </div>
      </section>
    </>
  );
}
