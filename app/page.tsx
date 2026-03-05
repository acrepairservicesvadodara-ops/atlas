import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  CheckCircle, 
  Star, 
  Clock, 
  Shield, 
  Award, 
  Users, 
  Wrench,
  ThermometerSnowflake,
  Fan,
  Settings,
  Zap,
  MapPin,
  ArrowRight,
  BadgeCheck,
  Droplets,
  CircuitBoard,
  Gauge,
  Building2,
  Factory,
  Snowflake,
} from "lucide-react";
import BookingForm from "@/components/BookingForm";

const services = [
  {
    icon: Wrench,
    title: "AC Repair",
    description: "Expert repair for all AC brands — split, window, cassette, tower, ductable & central AC. Same-day service in Vadodara.",
    href: "/ac-repair-vadodara",
    image: "/images/common-ac-problems.webp",
  },
  {
    icon: Settings,
    title: "AC Service & Deep Cleaning",
    description: "Complete AC servicing with jet cleaning, gas check, filter wash, coil cleaning & performance tune-up for window and split ACs.",
    href: "/ac-service-vadodara",
    image: "/images/Window-AC-Installation-and-Repairing.webp",
  },
  {
    icon: ThermometerSnowflake,
    title: "AC Installation",
    description: "Professional AC installation with copper piping, bracket fitting, electrical wiring & gas charging. All AC types covered.",
    href: "/ac-installation-vadodara",
    image: "/images/ac-installation-process.webp",
  },
  {
    icon: Shield,
    title: "AC AMC Plans",
    description: "Annual maintenance contracts with priority service, free visits, genuine spare parts & discounts on repairs.",
    href: "/ac-amc-vadodara",
    image: "/images/hvac-service.webp",
  },
  {
    icon: Zap,
    title: "AC Gas Refilling",
    description: "AC gas top-up and complete refilling with genuine R22, R32, R410A and R134A refrigerant gases. Leak detection included.",
    href: "/ac-gas-refilling-vadodara",
    image: "/images/air-conditioning.webp",
  },
  {
    icon: Fan,
    title: "Chiller & HVAC Repair",
    description: "Industrial chiller repair, cooling tower maintenance, AHU service & VRF/VRV system installation for commercial and industrial buildings.",
    href: "/chiller-repair-vadodara",
    image: "/images/hvac-commercial.webp",
  },
];

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "8000+", label: "Happy Customers" },
  { number: "35+", label: "Expert Technicians" },
  { number: "4.8★", label: "Google Rating" },
];

const acTypes = [
  { name: "Split AC Repair", href: "/split-ac-repair-vadodara" },
  { name: "Window AC Repair", href: "/window-ac-repair-vadodara" },
  { name: "Central AC Repair", href: "/central-ac-repair-vadodara" },
  { name: "Cassette AC Repair", href: "/cassette-ac-repair-vadodara" },
  { name: "Ductable AC Repair", href: "/ductable-ac-repair-vadodara" },
  { name: "Tower AC Service", href: "/tower-ac-repair-vadodara" },
  { name: "Panel AC Service", href: "/panel-ac-repair-vadodara" },
  { name: "VRF/VRV System", href: "/vrf-vrv-system-vadodara" },
  { name: "Inverter AC Repair", href: "/inverter-ac-repair-vadodara" },
  { name: "Portable AC Repair", href: "/portable-ac-repair-vadodara" },
  { name: "Package AC", href: "/package-ac-vadodara" },
  { name: "Cold Room / Walk-in Freezer", href: "/cold-room-service-vadodara" },
];

const brands = [
  { name: "Daikin", href: "/daikin-ac-service-vadodara" },
  { name: "Voltas", href: "/voltas-ac-service-vadodara" },
  { name: "Blue Star", href: "/blue-star-ac-service-vadodara" },
  { name: "Carrier", href: "/carrier-ac-service-vadodara" },
  { name: "LG", href: "/lg-ac-service-vadodara" },
  { name: "Samsung", href: "/samsung-ac-service-vadodara" },
  { name: "Hitachi", href: "/hitachi-ac-service-vadodara" },
  { name: "O General", href: "/o-general-ac-service-vadodara" },
  { name: "Mitsubishi", href: "/mitsubishi-ac-service-vadodara" },
  { name: "Panasonic", href: "/panasonic-ac-service-vadodara" },
  { name: "Whirlpool", href: "/whirlpool-ac-service-vadodara" },
  { name: "Godrej", href: "/godrej-ac-service-vadodara" },
  { name: "Croma", href: "/croma-ac-service-vadodara" },
  { name: "Cruise", href: "/cruise-ac-service-vadodara" },
  { name: "Toshiba", href: "/toshiba-ac-service-vadodara" },
  { name: "Haier", href: "/haier-ac-service-vadodara" },
];

const vadodaraAreas = [
  "Alkapuri", "Gotri", "Manjalpur", "Akota", "Fatehgunj", "Karelibaug", "Sayajigunj",
  "Waghodia Road", "Subhanpura", "Nizampura", "Harni", "Tarsali", "Makarpura", "Gorwa",
  "Nandesari", "Tandalja", "Vasna", "Sama", "Bhayli", "Chhani", "Ajwa Road", "Gotri Road",
  "VIP Road", "Diwalipura", "Ellora Park", "Race Course", "Pratapgunj", "Lalbaug", "Raopura",
  "Dabhoi Road", "Padra Road", "Sevasi", "Atladara", "Manjusar", "Soma Talav", "Jetalpur Road",
  "Sun Pharma Road", "GIDC Makarpura", "Productivity Road", "Ranoli", "Sindhrot",
  "Danteshwar", "Baranpura", "Panigate", "Wadi", "Kalali", "Jambuva", "Undera",
  "Vemali", "Karachiya", "Sardar Estate", "TP-13", "Fertilizer Nagar", "EME",
  "Siddharth Nagar", "Vasant Vihar", "Punit Nagar", "Ekta Nagar", "Gorwa BIDC",
];

const testimonials = [
  {
    name: "Vikram Sharma",
    location: "Alkapuri, Vadodara",
    rating: 5,
    text: "Outstanding AC repair service! Hitech Aircool Engineers technician arrived promptly and resolved my split AC cooling issue. Professional service at competitive rates.",
  },
  {
    name: "Sneha Patel",
    location: "Gotri, Vadodara",
    rating: 5,
    text: "Exceptional AC installation experience in Vadodara. They set up my new Carrier 1.5 ton split AC with quality copper piping. Excellent workmanship and fair pricing.",
  },
  {
    name: "Rakesh Modi",
    location: "Akota, Vadodara",
    rating: 5,
    text: "Trusted their AC AMC plan for 4 years now. Consistent maintenance, rapid emergency response, and authentic spare parts. Hitech Aircool Engineers is highly recommended.",
  },
  {
    name: "Dr. Meena Joshi",
    location: "GIDC Makarpura",
    rating: 5,
    text: "Industrial chiller repaired within hours. Their commercial HVAC expertise is unmatched. Hitech Aircool Engineers delivers top-notch service for factory AC systems in Gujarat.",
  },
];

const faqs = [
  {
    question: "What is the AC repair service charge in Vadodara?",
    answer: "Hitech Aircool Engineers charges ₹249 visiting fee which is adjusted against repairs. AC gas refilling starts at ₹1,499, basic servicing from ₹449, and deep jet cleaning from ₹749. We offer transparent pricing with no hidden charges for all AC repair and service work in Vadodara.",
  },
  {
    question: "How quickly can you come for AC repair in my area?",
    answer: "We provide same-day AC repair service throughout Vadodara including Alkapuri, Gotri, Manjalpur, Akota, Subhanpura, and 200+ localities. Our certified technician typically arrives within 60 minutes to 2 hours of booking confirmation.",
  },
  {
    question: "Do you provide warranty on AC repairs?",
    answer: "Yes, Hitech Aircool Engineers offers 30 to 90 days warranty on all AC repairs depending on the service type. Spare parts including compressors, fan motors, and PCBs carry manufacturer warranty. AMC customers receive extended warranty benefits and priority support.",
  },
  {
    question: "Which AC brands do you repair and service?",
    answer: "We service all leading AC brands — Daikin, Voltas, Blue Star, Carrier, LG, Samsung, Hitachi, O General, Mitsubishi, Panasonic, Whirlpool, Godrej, Croma, Toshiba, Haier, and more. Our technicians are trained for multi-brand AC repair.",
  },
  {
    question: "Do you service commercial and industrial HVAC systems?",
    answer: "Absolutely. Hitech Aircool Engineers specializes in commercial HVAC, industrial chiller repair, VRF/VRV system installation, cold room maintenance, panel AC service, AHU repair, and cooling tower service across GIDC Makarpura, Nandesari, Savli, Dahej, and other industrial areas in Gujarat.",
  },
  {
    question: "What types of AC problems can you fix?",
    answer: "We resolve all AC issues — AC not cooling, gas leaks, water leakage, compressor failure, PCB board repair, fan motor replacement, thermostat issues, remote control problems, bad smell, ice formation, unusual noise, and high electricity bills. 24x7 emergency AC repair is available.",
  },
];

const commonProblems = [
  { icon: ThermometerSnowflake, title: "AC Not Cooling", desc: "Gas leak, dirty filter, faulty compressor or thermostat issue — we diagnose and fix all cooling problems.", href: "/ac-not-cooling-vadodara" },
  { icon: Droplets, title: "Water Leakage", desc: "Blocked drain pipe, frozen evaporator, or improper installation causing water dripping from AC unit.", href: "/ac-water-leakage-repair-vadodara" },
  { icon: CircuitBoard, title: "PCB Board Repair", desc: "Inverter PCB, main board, and outdoor unit PCB repair and replacement for all AC brands.", href: "/ac-pcb-repair-vadodara" },
  { icon: Gauge, title: "Gas Refilling", desc: "R22, R32, R410A, R134A refrigerant gas charging with leak detection and pressure testing.", href: "/ac-gas-refilling-vadodara" },
  { icon: Zap, title: "Compressor Issues", desc: "Compressor noise, not starting, overheating — repair or replacement with genuine OEM parts.", href: "/ac-compressor-vadodara" },
  { icon: Fan, title: "Fan Motor Problems", desc: "Indoor/outdoor fan motor not spinning, making noise, or running slow — quick replacement service.", href: "/ac-fan-motor-vadodara" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hvac-industrial.webp')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>Rated 4.8/5 by 8000+ customers in Vadodara</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Expert AC Repair &amp; HVAC Service in{" "}
                <span className="text-yellow-400">Vadodara</span>
              </h1>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                Hitech Aircool Engineers is Vadodara&apos;s premier AC repair, service &amp; installation company.
                Certified technicians with 15+ years expertise. Same-day service for split AC, window AC, 
                cassette AC, ductable AC, chiller &amp; VRF/VRV systems. All brands serviced.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+919328953665"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"
                >
                  <Phone size={22} />
                  Call: +91 93289 53665
                </a>
                <a
                  href="https://wa.me/919328953665"
                  className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition border border-green-400"
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Same Day Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>90 Days Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Genuine Parts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>₹249 Visit Charge</span>
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
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal-600">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section — SEO content block 1 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src="/images/Atlas-Aircon-Ac-Service-in-vadodara-2.webp"
                alt="Hitech Aircool Engineers AC Service Team in Vadodara"
                className="rounded-2xl shadow-lg w-full h-auto"
                width={600}
                height={400}
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Hitech Aircool Engineers — Vadodara&apos;s Trusted AC &amp; HVAC Experts Since 2008
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Hitech Aircool Engineers is a premier air conditioning repair, service, and installation company 
                headquartered in Vadodara, Gujarat. With over 15 years of hands-on experience in HVAC engineering, 
                we have established ourselves as one of the most reliable names for AC repair in Vadodara and throughout Gujarat.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Whether you require emergency AC repair for your residence in Alkapuri, a commercial VRF installation 
                at your Gotri office, or industrial chiller maintenance at GIDC Makarpura — Hitech Aircool Engineers delivers 
                precision cooling solutions with same-day service and transparent pricing. We handle all air conditioner types 
                including split AC, window AC, cassette AC, ductable AC, tower AC, panel AC, and package AC units from every major brand.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team of 35+ certified technicians is trained to service Daikin, Voltas, Blue Star, 
                Carrier, LG, Samsung, Hitachi, O General, Mitsubishi, Panasonic, Whirlpool, Godrej, and more. 
                With 8000+ satisfied customers and a 4.8-star Google rating, Hitech Aircool Engineers is a top choice 
                for AC service in Vadodara.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <BadgeCheck className="w-5 h-5 text-teal-600" /> Certified HVAC Technicians
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5 text-teal-600" /> 60-Minute Response
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Shield className="w-5 h-5 text-teal-600" /> 90 Days Warranty
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Award className="w-5 h-5 text-teal-600" /> 15+ Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AC &amp; HVAC Services in Vadodara
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From residential split AC repair to industrial chiller plant maintenance — we provide 
              comprehensive air conditioning solutions across Vadodara and Gujarat with genuine parts and warranty.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition group border border-gray-100 overflow-hidden"
              >
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title + " Vadodara - Hitech Aircool Engineers"}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition">
                      <service.icon className="w-5 h-5 text-teal-600 group-hover:text-white transition" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                  <div className="mt-4 text-teal-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
                    Learn More <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Common AC Problems — SEO content block 2 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common AC Problems We Fix in Vadodara
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Is your AC not cooling, leaking water, making noise, or tripping the MCB? 
              Our expert technicians diagnose and fix every AC problem with guaranteed results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonProblems.map((problem) => (
              <Link key={problem.href} href={problem.href} className="bg-gray-50 hover:bg-teal-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition group">
                <problem.icon className="w-10 h-10 text-teal-600 mb-4 group-hover:text-teal-700" />
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-700">{problem.title}</h3>
                <p className="text-gray-600 text-sm">{problem.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed SEO Content — main keyword-rich content block */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Best AC Repair &amp; Service Company in Vadodara, Gujarat
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <img
                src="/images/emergency-ac-repairing.webp"
                alt="Emergency AC Repair Service in Vadodara by Hitech Aircool Engineers"
                className="rounded-xl shadow-md w-full h-auto"
                loading="lazy"
              />
              <img
                src="/images/emergency-24hrs-ac-repairing.webp"
                alt="24 Hour AC Repair Service Vadodara - Hitech Aircool Engineers Emergency Team"
                className="rounded-xl shadow-md w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Looking for <strong>AC repair in Vadodara</strong>? Hitech Aircool Engineers is the city&apos;s most trusted 
                air conditioning service provider with over two decades of experience in residential, commercial, 
                and industrial cooling solutions. Our comprehensive <strong>AC service in Vadodara</strong> covers 
                everything from routine maintenance and deep jet cleaning to complex compressor replacements, 
                PCB board repairs, and complete <strong>AC gas refilling</strong> with R22, R32, R410A, and R134A 
                refrigerant gases.
              </p>
              <p>
                We specialize in all types of air conditioners including <strong>split AC, window AC, cassette AC, 
                ductable AC, tower AC, central AC, panel AC, portable AC</strong>, and large-scale <strong>VRF/VRV systems</strong>. 
                Whether your AC is not cooling properly, leaking water, making strange noises, forming ice on the coils, 
                or consuming excessive electricity — our certified technicians can diagnose and resolve the issue on the 
                spot with genuine spare parts and up to 90 days repair warranty.
              </p>
              <p>
                For businesses and factories in Vadodara&apos;s industrial corridors, we offer specialized 
                <strong> industrial HVAC services</strong> including <strong>chiller plant repair</strong>, 
                <strong> cooling tower maintenance</strong>, <strong>AHU (Air Handling Unit) service</strong>, 
                cold room installation, walk-in freezer repair, and panel AC servicing. Our industrial clients 
                across <strong>GIDC Makarpura, Nandesari GIDC, Savli-Manjusar GIDC, Waghodia GIDC, Dabhoi GIDC</strong>, 
                and other industrial hubs trust us for mission-critical cooling system repairs.
              </p>
              <p>
                Hitech Aircool Engineers provides multi-brand AC service for all leading manufacturers — <strong>Daikin, Voltas, 
                Blue Star, Carrier, LG, Samsung, Hitachi, O General, Mitsubishi, Panasonic, Whirlpool, Godrej, 
                Toshiba, Haier, Croma, Lloyd</strong>, and more. Our factory-trained technicians carry brand-specific 
                diagnostic tools and genuine OEM spare parts to ensure your air conditioner performs at peak efficiency 
                after every service.
              </p>
              <p>
                We proudly serve every corner of Vadodara with our <strong>same-day AC repair</strong> guarantee — 
                from <strong>Alkapuri, Gotri, Manjalpur, Akota, Fatehgunj, Karelibaug, Sayajigunj, Subhanpura, 
                Nizampura</strong> to <strong>Harni, Tarsali, Makarpura, Gorwa, Nandesari, Tandalja, Vasna, Sama, 
                Bhayli, Chhani, Ajwa Road, VIP Road, Ellora Park, Race Course, Pratapgunj</strong>, and 200+ more 
                localities. We also extend our commercial and industrial AC services to <strong>Ahmedabad, Surat, 
                Bharuch, Anand, Ankleshwar, Gandhinagar, Rajkot</strong>, and major cities across Gujarat.
              </p>
              <p>
                Our <strong>AC AMC (Annual Maintenance Contract)</strong> plans are designed for hassle-free air 
                conditioning maintenance. Starting from just ₹1,999 per year, each AMC plan includes scheduled 
                preventive maintenance visits, priority emergency service, discounted repair rates, and complimentary 
                filter and coil cleaning — ensuring your AC runs efficiently throughout the scorching Gujarat summers 
                and reduces electricity bills by up to 30%.
              </p>
              <p>
                Choose Hitech Aircool Engineers for reliable, affordable, and professional AC repair and service in Vadodara. 
                With a ₹299 visiting charge (adjusted against repairs), transparent pricing, GST-compliant invoicing, 
                and a commitment to customer satisfaction backed by our 4.9-star Google rating — you can trust us 
                to keep your home, office, or factory cool all year round. <strong>Call +91 93289 53665</strong> now 
                or book online for same-day AC service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AC Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All AC Types Repaired &amp; Serviced
            </h2>
            <p className="text-gray-600">Expert service for every type of air conditioner in Vadodara</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {acTypes.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="bg-gray-50 hover:bg-teal-50 border border-gray-200 hover:border-blue-300 p-4 rounded-lg text-center transition group"
              >
                <span className="text-gray-800 group-hover:text-teal-600 font-medium">
                  {type.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AC Brands We Repair &amp; Service in Vadodara
            </h2>
            <p className="text-gray-600">Factory-trained technicians for all major air conditioner brands</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {brands.map((brand) => (
              <Link
                key={brand.href}
                href={brand.href}
                className="bg-white hover:bg-teal-50 border border-gray-200 hover:border-blue-300 p-4 rounded-lg text-center transition group"
              >
                <span className="text-gray-800 group-hover:text-teal-600 font-semibold text-sm">
                  {brand.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Installation / Service / Repair Detail Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AC Installation, Service &amp; Repair in Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete AC solutions for homes, offices, showrooms, factories, and industrial establishments
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-green-300 hover:shadow-xl transition">
              <img src="/images/ac-installation-process.webp" alt="AC Installation Service Vadodara" className="w-full h-40 object-cover rounded-lg mb-4" loading="lazy" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">AC Installation</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Professional AC installation with site inspection, quality copper piping, proper electrical 
                wiring, bracket &amp; stand fitting, vacuum pump gas charging, and testing. We install split AC, 
                window AC, cassette AC, ductable AC, central AC, and VRF/VRV systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> Site inspection &amp; consultation</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> Quality copper piping work</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> Gas charging &amp; vacuum testing</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> 1-year installation warranty</li>
              </ul>
              <Link href="/ac-installation-vadodara" className="text-green-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all text-sm">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-blue-300 hover:shadow-xl transition">
              <img src="/images/Window-AC-Installation-and-Repairing.webp" alt="AC Deep Cleaning Service Vadodara" className="w-full h-40 object-cover rounded-lg mb-4" loading="lazy" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">AC Service &amp; Deep Cleaning</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Regular AC maintenance with power jet deep cleaning, filter wash, evaporator &amp; condenser coil cleaning, 
                drain pipe flush, gas pressure check, anti-rust coating, and electrical inspection.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Filter &amp; coil deep cleaning</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Gas pressure check</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Drain pipe clearing</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Performance tune-up</li>
              </ul>
              <Link href="/ac-service-vadodara" className="text-teal-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all text-sm">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-red-300 hover:shadow-xl transition">
              <img src="/images/common-ac-problems.webp" alt="AC Repair Service Vadodara" className="w-full h-40 object-cover rounded-lg mb-4" loading="lazy" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">AC Repair</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Expert AC repair for all problems — not cooling, gas leak, water leakage, compressor failure, 
                PCB repair, fan motor replacement, thermostat issues, and electrical faults.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0" /> All-brand AC repair</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0" /> Genuine OEM spare parts</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0" /> 90 days repair warranty</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0" /> Same-day service guarantee</li>
              </ul>
              <Link href="/ac-repair-vadodara" className="text-red-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all text-sm">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Hitech Aircool Engineers for AC Repair in Vadodara?
            </h2>
            <p className="text-teal-100 max-w-2xl mx-auto">
              Trusted by 5000+ residential and commercial customers across Vadodara and Gujarat
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">90-Min Response</h3>
              <p className="text-teal-100">Quick response across Vadodara. Emergency 24/7 AC repair available.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">20+ Years Experience</h3>
              <p className="text-teal-100">Serving Vadodara since 2004. Gujarat&apos;s trusted HVAC experts.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">50+ Certified Techs</h3>
              <p className="text-teal-100">Factory-trained professionals for multi-brand AC repair.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">90 Days Warranty</h3>
              <p className="text-teal-100">Guaranteed repairs with genuine OEM spare parts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial & Commercial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industrial &amp; Commercial HVAC Services in Gujarat
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Hitech Aircool Engineers provides enterprise-grade HVAC solutions for factories, warehouses, 
                offices, hospitals, hotels, and commercial establishments across Gujarat. Our industrial 
                service portfolio includes chiller plant repair, cooling tower maintenance, AHU servicing, 
                cold room installations, and walk-in freezer repairs.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Link href="/chiller-repair-vadodara" className="flex items-center gap-2 text-gray-700 hover:text-teal-600 transition">
                  <Building2 className="w-5 h-5 text-teal-600" /> Chiller Plant Repair
                </Link>
                <Link href="/vrf-vrv-system-vadodara" className="flex items-center gap-2 text-gray-700 hover:text-teal-600 transition">
                  <Factory className="w-5 h-5 text-teal-600" /> VRF/VRV Installation
                </Link>
                <Link href="/cold-room-service-vadodara" className="flex items-center gap-2 text-gray-700 hover:text-teal-600 transition">
                  <Snowflake className="w-5 h-5 text-teal-600" /> Cold Room Service
                </Link>
                <Link href="/ahu-repair-vadodara" className="flex items-center gap-2 text-gray-700 hover:text-teal-600 transition">
                  <Settings className="w-5 h-5 text-teal-600" /> AHU Repair
                </Link>
              </div>
              <a href="tel:+919328953665" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold transition">
                <Phone size={18} /> Call for Industrial HVAC
              </a>
            </div>
            <div>
              <img
                src="/images/hvac-service.webp"
                alt="Industrial HVAC Chiller Repair Service in Gujarat - Hitech Aircool Engineers"
                className="rounded-2xl shadow-lg w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AC Repair Service Areas in Vadodara
            </h2>
            <p className="text-gray-600">Serving 200+ areas across Vadodara with same-day AC service</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {vadodaraAreas.map((area) => (
              <Link
                key={area}
                href={`/ac-service-in-${area.toLowerCase().replace(/ /g, "-").replace(/\//g, "-")}`}
                className="flex items-center gap-1.5 bg-white hover:bg-teal-50 border border-gray-200 hover:border-blue-300 px-3 py-2 rounded-lg transition group"
              >
                <MapPin size={14} className="text-teal-600 flex-shrink-0" />
                <span className="text-gray-700 group-hover:text-teal-600 text-xs font-medium truncate">
                  {area}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              View All 200+ Areas
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say About Hitech Aircool Engineers
            </h2>
            <p className="text-gray-600">Trusted by 5000+ happy customers in Vadodara and Gujarat</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm italic">&quot;{t.text}&quot;</p>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs with Schema */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions — AC Repair &amp; Service Vadodara
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg group border border-gray-200">
                <summary className="p-4 cursor-pointer font-semibold text-gray-900 flex justify-between items-center">
                  {faq.question}
                  <span className="text-teal-600 group-open:rotate-180 transition-transform ml-4 flex-shrink-0">▼</span>
                </summary>
                <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need AC Repair or Service in Vadodara?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Get professional AC repair, installation &amp; maintenance from Vadodara&apos;s #1 rated AC company. 
            Same-day service. ₹299 visiting charge. 90-day warranty.
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
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form */}
      <section className="py-12 bg-gray-50 md:hidden">
        <div className="container mx-auto px-4">
          <BookingForm title="Book AC Service" />
        </div>
      </section>
    </>
  );
}
