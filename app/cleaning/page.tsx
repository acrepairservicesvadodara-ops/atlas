import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ShoppingCart,
  Sparkles,
  Search,
  Filter,
  Star,
  Shield,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Droplets,
  Wind,
  Snowflake,
  ThermometerSnowflake,
  Refrigerator,
  WashingMachine,
  Waves,
  Flame,
} from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title:
    "Cleaning Services | AC, Chiller, HVAC Deep Cleaning & Chemical Wash | Atlas Aircon",
  description:
    "Professional cleaning services for AC, Chiller, HVAC, Refrigerator, Freezer, Coldroom, Duct, Panel AC, Humidifier, Geyser & Washing Machine. Chemical wash & deep cleaning in Vadodara, Gujarat. Starting ₹20.",
  keywords: [
    "AC cleaning service Vadodara",
    "AC deep cleaning",
    "AC chemical wash",
    "chiller cleaning service",
    "HVAC cleaning Vadodara",
    "duct cleaning service",
    "refrigerator deep cleaning",
    "panel AC cleaning",
    "coldroom cleaning",
    "washing machine cleaning",
    "air cooler cleaning",
    "Atlas Aircon cleaning",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/cleaning",
  },
};

interface CleaningService {
  id: number;
  name: string;
  shortName: string;
  price: number;
  priceFormatted: string;
  slug: string;
  image: string;
  category: "chemical-wash" | "deep-cleaning";
  equipment: string;
  description: string;
}

const cleaningServices: CleaningService[] = [
  {
    id: 1,
    name: "AHUs Chemical Wash Cleaning Service",
    shortName: "AHU Chemical Wash",
    price: 2999,
    priceFormatted: "₹2,999",
    slug: "ahus-chemical-wash-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/ac-chemical-service.webp",
    category: "chemical-wash",
    equipment: "AHU",
    description:
      "Complete chemical wash for Air Handling Units. Removes deep-seated dirt, mold, and bacteria from coils, filters, and drain pans.",
  },
  {
    id: 2,
    name: "AHUs Deep Cleaning Service",
    shortName: "AHU Deep Cleaning",
    price: 3999,
    priceFormatted: "₹3,999",
    slug: "ahus-deep-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/Powerjet-ac-service-vadodara.webp",
    category: "deep-cleaning",
    equipment: "AHU",
    description:
      "Thorough deep cleaning of AHUs including blower assembly, coil fins, drain pan sanitization, and complete system inspection.",
  },
  {
    id: 3,
    name: "Air Conditioner Chemical Wash Cleaning Service",
    shortName: "AC Chemical Wash",
    price: 999,
    priceFormatted: "₹999",
    slug: "air-conditioner-chemical-wash-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/ac-chemical-service.webp",
    category: "chemical-wash",
    equipment: "Air Conditioner",
    description:
      "Professional chemical wash for split and window ACs. Restores cooling efficiency by removing stubborn dirt and scale buildup.",
  },
  {
    id: 4,
    name: "Air Conditioner Deep Cleaning Service",
    shortName: "AC Deep Cleaning",
    price: 1299,
    priceFormatted: "₹1,299",
    slug: "air-conditioner-deep-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/Powerjet-ac-service-vadodara.webp",
    category: "deep-cleaning",
    equipment: "Air Conditioner",
    description:
      "Complete deep cleaning of indoor/outdoor units. Blower fan, evaporator coil, condenser coil, drain pan sanitization.",
  },
  {
    id: 5,
    name: "Air Cooler Chemical Wash Cleaning Service",
    shortName: "Air Cooler Chemical Wash",
    price: 699,
    priceFormatted: "₹699",
    slug: "air-cooler-chemical-wash-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/ac-chemical-service.webp",
    category: "chemical-wash",
    equipment: "Air Cooler",
    description:
      "Chemical treatment wash for air coolers. Removes mineral deposits, algae, and ensures clean airflow.",
  },
  {
    id: 6,
    name: "Air Cooler Deep Cleaning Service",
    shortName: "Air Cooler Deep Cleaning",
    price: 699,
    priceFormatted: "₹699",
    slug: "air-cooler-deep-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/Powerjet-ac-service-vadodara.webp",
    category: "deep-cleaning",
    equipment: "Air Cooler",
    description:
      "Full deep cleaning of air cooler pads, water tank, pump, and fan assembly. Eliminates bad odor and improves cooling.",
  },
  {
    id: 7,
    name: "Air Drier Chemical Wash Cleaning Service",
    shortName: "Air Drier Chemical Wash",
    price: 1700,
    priceFormatted: "₹1,700",
    slug: "air-drier-chemical-wash-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/ac-chemical-service.webp",
    category: "chemical-wash",
    equipment: "Air Drier",
    description:
      "Specialized chemical wash for industrial air driers. Restores drying efficiency and prevents moisture contamination.",
  },
  {
    id: 8,
    name: "Air Drier Deep Cleaning Service",
    shortName: "Air Drier Deep Cleaning",
    price: 1999,
    priceFormatted: "₹1,999",
    slug: "air-drier-deep-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/Powerjet-ac-service-vadodara.webp",
    category: "deep-cleaning",
    equipment: "Air Drier",
    description:
      "Comprehensive deep cleaning of air drier internals, filters, and coils for optimal moisture removal performance.",
  },
  {
    id: 9,
    name: "Chiller Chemical Wash Cleaning Service",
    shortName: "Chiller Chemical Wash",
    price: 4500,
    priceFormatted: "₹4,500",
    slug: "chiller-chemical-wash-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/ac-chemical-service.webp",
    category: "chemical-wash",
    equipment: "Chiller",
    description:
      "Industrial chiller chemical wash. Descaling of tubes, condenser cleaning, and complete chemical treatment for peak efficiency.",
  },
  {
    id: 10,
    name: "Chiller Deep Cleaning Service",
    shortName: "Chiller Deep Cleaning",
    price: 7200,
    priceFormatted: "₹7,200",
    slug: "chiller-deep-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/Powerjet-ac-service-vadodara.webp",
    category: "deep-cleaning",
    equipment: "Chiller",
    description:
      "Full deep cleaning of chiller systems including tube brushing, condenser coil cleaning, and evaporator maintenance.",
  },
  {
    id: 11,
    name: "Coldroom Chemical Wash Cleaning Service",
    shortName: "Coldroom Chemical Wash",
    price: 2999,
    priceFormatted: "₹2,999",
    slug: "coldroom-chemical-wash-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/ac-chemical-service.webp",
    category: "chemical-wash",
    equipment: "Coldroom",
    description:
      "Chemical wash for cold storage rooms. Sanitization of evaporator coils, walls, and drainage systems.",
  },
  {
    id: 12,
    name: "Coldroom Deep Cleaning Service",
    shortName: "Coldroom Deep Cleaning",
    price: 4500,
    priceFormatted: "₹4,500",
    slug: "coldroom-deep-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/Powerjet-ac-service-vadodara.webp",
    category: "deep-cleaning",
    equipment: "Coldroom",
    description:
      "Complete deep cleaning of cold rooms including panels, coils, fans, and floor drains. Ensures hygiene compliance.",
  },
  {
    id: 13,
    name: "Deep Cleaning Service",
    shortName: "General Deep Cleaning",
    price: 1500,
    priceFormatted: "₹1,500",
    slug: "deep-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/Powerjet-ac-service-vadodara.webp",
    category: "deep-cleaning",
    equipment: "General",
    description:
      "General HVAC equipment deep cleaning service. Covers any standard cooling or ventilation equipment.",
  },
  {
    id: 14,
    name: "Duct Cleaning Service",
    shortName: "Duct Cleaning",
    price: 20,
    priceFormatted: "₹20",
    slug: "duct-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/central-ac-repair-service-diagram.webp",
    category: "deep-cleaning",
    equipment: "Duct",
    description:
      "Professional duct cleaning per sq.ft. Removes dust, allergens, and microbial growth from AC ducts for clean air.",
  },
  {
    id: 15,
    name: "Freezers Chemical Wash Cleaning Service",
    shortName: "Freezer Chemical Wash",
    price: 1299,
    priceFormatted: "₹1,299",
    slug: "freezers-chemical-wash-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/ac-chemical-service.webp",
    category: "chemical-wash",
    equipment: "Freezer",
    description:
      "Chemical wash cleaning for commercial and domestic freezers. Removes ice buildup and sanitizes interior surfaces.",
  },
  {
    id: 16,
    name: "Freezers Deep Cleaning Service",
    shortName: "Freezer Deep Cleaning",
    price: 1600,
    priceFormatted: "₹1,600",
    slug: "freezers-deep-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/Powerjet-ac-service-vadodara.webp",
    category: "deep-cleaning",
    equipment: "Freezer",
    description:
      "Complete deep cleaning of freezer coils, shelves, gaskets, and drainage. Restores efficiency and hygiene.",
  },
  {
    id: 17,
    name: "Geyser Chemical Wash Cleaning Service",
    shortName: "Geyser Chemical Wash",
    price: 699,
    priceFormatted: "₹699",
    slug: "gyser-chemical-wash-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/ac-chemical-service.webp",
    category: "chemical-wash",
    equipment: "Geyser",
    description:
      "Chemical descaling of geyser tank and heating element. Removes limescale buildup for efficient water heating.",
  },
  {
    id: 18,
    name: "Geyser Deep Cleaning Service",
    shortName: "Geyser Deep Cleaning",
    price: 899,
    priceFormatted: "₹899",
    slug: "gyser-deep-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/Powerjet-ac-service-vadodara.webp",
    category: "deep-cleaning",
    equipment: "Geyser",
    description:
      "Full deep cleaning of geyser including tank flush, anode rod inspection, element cleaning, and sanitization.",
  },
  {
    id: 19,
    name: "Humidifier Chemical Wash Cleaning Service",
    shortName: "Humidifier Chemical Wash",
    price: 999,
    priceFormatted: "₹999",
    slug: "humidifier-chemical-wash-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/ac-chemical-service.webp",
    category: "chemical-wash",
    equipment: "Humidifier",
    description:
      "Chemical treatment for humidifiers. Removes mineral deposits and bacterial growth for clean moisture output.",
  },
  {
    id: 20,
    name: "Humidifier Deep Cleaning Service",
    shortName: "Humidifier Deep Cleaning",
    price: 1350,
    priceFormatted: "₹1,350",
    slug: "humidifier-deep-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/Powerjet-ac-service-vadodara.webp",
    category: "deep-cleaning",
    equipment: "Humidifier",
    description:
      "Thorough deep cleaning of humidifier tanks, nozzles, filters, and water distribution system.",
  },
  {
    id: 21,
    name: "HVAC Chemical Wash Cleaning Service",
    shortName: "HVAC Chemical Wash",
    price: 2100,
    priceFormatted: "₹2,100",
    slug: "hvac-chemical-wash-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/ac-chemical-service.webp",
    category: "chemical-wash",
    equipment: "HVAC",
    description:
      "Professional chemical wash for HVAC systems. Cleans coils, blowers, and heat exchangers for maximum efficiency.",
  },
  {
    id: 22,
    name: "HVAC Deep Cleaning Service",
    shortName: "HVAC Deep Cleaning",
    price: 2700,
    priceFormatted: "₹2,700",
    slug: "hvac-deep-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/Powerjet-ac-service-vadodara.webp",
    category: "deep-cleaning",
    equipment: "HVAC",
    description:
      "Comprehensive HVAC system deep cleaning including all coils, fans, dampers, and drainage systems.",
  },
  {
    id: 23,
    name: "Panel ACs Chemical Wash Cleaning Service",
    shortName: "Panel AC Chemical Wash",
    price: 1500,
    priceFormatted: "₹1,500",
    slug: "panel-acs-chemical-wash-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/ac-chemical-service.webp",
    category: "chemical-wash",
    equipment: "Panel AC",
    description:
      "Chemical wash for panel ACs used in electrical panels and server rooms. Ensures reliable cooling for equipment.",
  },
  {
    id: 24,
    name: "Panel ACs Deep Cleaning Service",
    shortName: "Panel AC Deep Cleaning",
    price: 1800,
    priceFormatted: "₹1,800",
    slug: "panel-acs-deep-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/Powerjet-ac-service-vadodara.webp",
    category: "deep-cleaning",
    equipment: "Panel AC",
    description:
      "Deep cleaning of panel AC filters, coils, and condensate system. Critical for industrial equipment cooling.",
  },
  {
    id: 25,
    name: "Refrigerator Chemical Wash Cleaning Service",
    shortName: "Refrigerator Chemical Wash",
    price: 799,
    priceFormatted: "₹799",
    slug: "refrigerator-chemical-wash-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/ac-chemical-service.webp",
    category: "chemical-wash",
    equipment: "Refrigerator",
    description:
      "Chemical cleaning for refrigerators. Removes odor, mold, and sanitizes interior for food safety.",
  },
  {
    id: 26,
    name: "Refrigerator Deep Cleaning Service",
    shortName: "Refrigerator Deep Cleaning",
    price: 1099,
    priceFormatted: "₹1,099",
    slug: "refrigerator-deep-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/Powerjet-ac-service-vadodara.webp",
    category: "deep-cleaning",
    equipment: "Refrigerator",
    description:
      "Full deep cleaning of refrigerator condenser coils, shelves, gaskets, drain hole, and compressor area.",
  },
  {
    id: 27,
    name: "Walk-in Chemical Wash Cleaning Service",
    shortName: "Walk-in Chemical Wash",
    price: 2500,
    priceFormatted: "₹2,500",
    slug: "walkin-chemical-wash-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/ac-chemical-service.webp",
    category: "chemical-wash",
    equipment: "Walk-in Cooler",
    description:
      "Chemical wash for walk-in coolers and freezers. Cleans evaporator coils, fans, and drainage for hygienic storage.",
  },
  {
    id: 28,
    name: "Walk-in Deep Cleaning Service",
    shortName: "Walk-in Deep Cleaning",
    price: 3500,
    priceFormatted: "₹3,500",
    slug: "walkin-deep-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/Powerjet-ac-service-vadodara.webp",
    category: "deep-cleaning",
    equipment: "Walk-in Cooler",
    description:
      "Complete deep cleaning of walk-in cooler including panels, floor, coils, fans, and door gaskets.",
  },
  {
    id: 29,
    name: "Washing Machine Chemical Wash Cleaning Service",
    shortName: "Washing Machine Chemical Wash",
    price: 899,
    priceFormatted: "₹899",
    slug: "washing-machine-chemical-wash-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/ac-chemical-service.webp",
    category: "chemical-wash",
    equipment: "Washing Machine",
    description:
      "Chemical wash for washing machines. Removes limescale, detergent buildup, and mold from drum and pipes.",
  },
  {
    id: 30,
    name: "Washing Machine Deep Cleaning Service",
    shortName: "Washing Machine Deep Cleaning",
    price: 999,
    priceFormatted: "₹999",
    slug: "washing-machine-deep-cleaning-service-hitech-aircool-engineers",
    image:
      "/images/products/Powerjet-ac-service-vadodara.webp",
    category: "deep-cleaning",
    equipment: "Washing Machine",
    description:
      "Full deep cleaning of washing machine drum, filter, rubber gasket, detergent dispenser, and drain pump.",
  },
];

const equipmentCategories = [
  "All",
  "Air Conditioner",
  "AHU",
  "Air Cooler",
  "Air Drier",
  "Chiller",
  "Coldroom",
  "Duct",
  "Freezer",
  "Geyser",
  "General",
  "Humidifier",
  "HVAC",
  "Panel AC",
  "Refrigerator",
  "Walk-in Cooler",
  "Washing Machine",
];

function getEquipmentIcon(equipment: string) {
  switch (equipment) {
    case "Air Conditioner":
    case "HVAC":
    case "AHU":
      return Snowflake;
    case "Chiller":
    case "Coldroom":
    case "Walk-in Cooler":
    case "Freezer":
      return ThermometerSnowflake;
    case "Air Cooler":
    case "Duct":
      return Wind;
    case "Geyser":
      return Flame;
    case "Humidifier":
      return Droplets;
    case "Panel AC":
      return Snowflake;
    case "Refrigerator":
      return ThermometerSnowflake;
    case "Washing Machine":
      return Waves;
    default:
      return Sparkles;
  }
}

function getCategoryBadgeColor(category: "chemical-wash" | "deep-cleaning") {
  return category === "chemical-wash"
    ? "bg-amber-100 text-amber-800 border-amber-200"
    : "bg-blue-100 text-blue-800 border-blue-200";
}

function getCategoryLabel(category: "chemical-wash" | "deep-cleaning") {
  return category === "chemical-wash" ? "Chemical Wash" : "Deep Cleaning";
}

export default function CleaningPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-900 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Professional Cleaning Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                HVAC & Appliance{" "}
                <span className="text-yellow-400">Cleaning Services</span>
              </h1>
              <p className="text-xl text-emerald-100 mb-6 leading-relaxed">
                Professional deep cleaning & chemical wash for all HVAC
                equipment, refrigeration units, and home appliances.{" "}
                <strong>30 specialized cleaning services</strong> starting from
                just ₹20.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/15 backdrop-blur px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  Chemical Wash
                </span>
                <span className="bg-white/15 backdrop-blur px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  Deep Cleaning
                </span>
                <span className="bg-white/15 backdrop-blur px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  All Equipment Types
                </span>
                <span className="bg-white/15 backdrop-blur px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  GST Invoice
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919727257141"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"
                >
                  <Phone size={22} />
                  +91 97272 57141
                </a>
                <a
                  href="https://wa.me/919727257141?text=I%20need%20a%20cleaning%20service%20quotation"
                  className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition"
                >
                  WhatsApp for Quote
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <BookingForm title="Book Cleaning Service" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div>
              <div className="text-2xl font-bold text-emerald-600">30</div>
              <div className="text-sm text-gray-500">Cleaning Services</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600">15+</div>
              <div className="text-sm text-gray-500">Equipment Types</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600">₹20</div>
              <div className="text-sm text-gray-500">Starting Price</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600">24/7</div>
              <div className="text-sm text-gray-500">Service Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600">Gujarat</div>
              <div className="text-sm text-gray-500">Wide Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Badges Bar */}
      <section className="bg-gray-900 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-xs md:text-sm font-mono tracking-wider uppercase">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              Genuine Parts
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" />
              GIDC Delivery
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-yellow-400" />
              GST Invoice
            </span>
          </div>
        </div>
      </section>

      {/* All Cleaning Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Cleaning Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showing all {cleaningServices.length} professional cleaning
              services. Chemical wash & deep cleaning for every HVAC and
              appliance type.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {cleaningServices.map((service) => {
              const EquipIcon = getEquipmentIcon(service.equipment);
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-52 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${getCategoryBadgeColor(service.category)}`}
                      >
                        {getCategoryLabel(service.category)}
                      </span>
                    </div>
                    {/* Equipment icon */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full p-2 shadow-sm">
                      <EquipIcon className="w-4 h-4 text-gray-700" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                        {service.equipment}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-1">
                      {service.description}
                    </p>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                      <div>
                        <span className="text-2xl font-bold text-emerald-600">
                          {service.priceFormatted}
                        </span>
                        {service.price > 100 && (
                          <span className="text-xs text-gray-400 ml-1">
                            onwards
                          </span>
                        )}
                        {service.price <= 100 && (
                          <span className="text-xs text-gray-400 ml-1">
                            /sq.ft
                          </span>
                        )}
                      </div>
                      <a
                        href={`https://wa.me/919727257141?text=I%20want%20to%20book%20${encodeURIComponent(service.name)}%20(${service.priceFormatted})`}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-1.5 transition shadow-sm hover:shadow-md"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chemical Wash vs Deep Cleaning Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Chemical Wash vs Deep Cleaning
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Understand the difference and choose the right service for your
            equipment
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Chemical Wash */}
            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <Droplets className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Chemical Wash
              </h3>
              <p className="text-gray-600 mb-4">
                Uses specialized chemical solutions to dissolve stubborn dirt,
                scale, mold, and mineral deposits from coils and internal
                components.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500" />
                  Removes deep-seated scale & deposits
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500" />
                  Kills mold & bacteria
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500" />
                  Restores heat exchange efficiency
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500" />
                  Recommended every 6-12 months
                </li>
              </ul>
            </div>
            {/* Deep Cleaning */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Deep Cleaning
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive physical cleaning with disassembly, high-pressure
                water jets, vacuuming, and manual scrubbing of all accessible
                parts.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  Complete unit disassembly & cleaning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  High-pressure jet washing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  Drain pan & filter sanitization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  Recommended every 3-6 months
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Cleaning Service Price List
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Transparent pricing with no hidden charges
          </p>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-emerald-600 text-white">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold">
                      Equipment
                    </th>
                    <th className="text-right py-4 px-6 font-semibold">
                      Chemical Wash
                    </th>
                    <th className="text-right py-4 px-6 font-semibold">
                      Deep Cleaning
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      equipment: "Air Conditioner",
                      chemWash: "₹999",
                      deepClean: "₹1,299",
                    },
                    {
                      equipment: "Air Cooler",
                      chemWash: "₹699",
                      deepClean: "₹699",
                    },
                    {
                      equipment: "AHU",
                      chemWash: "₹2,999",
                      deepClean: "₹3,999",
                    },
                    {
                      equipment: "Air Drier",
                      chemWash: "₹1,700",
                      deepClean: "₹1,999",
                    },
                    {
                      equipment: "Chiller",
                      chemWash: "₹4,500",
                      deepClean: "₹7,200",
                    },
                    {
                      equipment: "Coldroom",
                      chemWash: "₹2,999",
                      deepClean: "₹4,500",
                    },
                    {
                      equipment: "Duct",
                      chemWash: "—",
                      deepClean: "₹20/sq.ft",
                    },
                    {
                      equipment: "Freezer",
                      chemWash: "₹1,299",
                      deepClean: "₹1,600",
                    },
                    {
                      equipment: "Geyser",
                      chemWash: "₹699",
                      deepClean: "₹899",
                    },
                    {
                      equipment: "Humidifier",
                      chemWash: "₹999",
                      deepClean: "₹1,350",
                    },
                    {
                      equipment: "HVAC System",
                      chemWash: "₹2,100",
                      deepClean: "₹2,700",
                    },
                    {
                      equipment: "Panel AC",
                      chemWash: "₹1,500",
                      deepClean: "₹1,800",
                    },
                    {
                      equipment: "Refrigerator",
                      chemWash: "₹799",
                      deepClean: "₹1,099",
                    },
                    {
                      equipment: "Walk-in Cooler",
                      chemWash: "₹2,500",
                      deepClean: "₹3,500",
                    },
                    {
                      equipment: "Washing Machine",
                      chemWash: "₹899",
                      deepClean: "₹999",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.equipment}
                      className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-gray-50/50" : "bg-white"} hover:bg-emerald-50 transition`}
                    >
                      <td className="py-4 px-6 font-medium text-gray-900">
                        {row.equipment}
                      </td>
                      <td className="py-4 px-6 text-right font-semibold text-amber-600">
                        {row.chemWash}
                      </td>
                      <td className="py-4 px-6 text-right font-semibold text-blue-600">
                        {row.deepClean}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 px-6 py-3 text-xs text-gray-500 text-center">
              * Prices may vary based on equipment size and condition. Contact us
              for exact quotation.
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Atlas Aircon for Cleaning Services?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold mb-2">20+ Years Experience</h3>
              <p className="text-gray-600 text-sm">
                Trusted since 2004 in Gujarat
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold mb-2">Genuine Chemicals</h3>
              <p className="text-gray-600 text-sm">
                Professional-grade cleaning agents
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold mb-2">Same Day Service</h3>
              <p className="text-gray-600 text-sm">
                Quick response & deployment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold mb-2">5000+ Customers</h3>
              <p className="text-gray-600 text-sm">Across Gujarat industries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Territory */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg font-semibold mb-4 tracking-wide uppercase text-gray-400">
            Service Territory Matrix
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[
              "Vadodara",
              "Ahmedabad",
              "Surat",
              "Bharuch",
              "Anand",
              "Rajkot",
              "Gandhidham",
            ].map((city) => (
              <span
                key={city}
                className="bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium"
              >
                {city}
              </span>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            GIDC HUBS: Makarpura &bull; Nandesari &bull; Savli &bull; Dahej
            &bull; Ankleshwar &bull; Halol
          </p>
        </div>
      </section>

      {/* Bulk Procurement CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bulk Procurement?</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
            Factory Managers in Makarpura & Nandesari GIDC get special wholesale
            pricing on bulk cleaning service contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919727257141?text=I%20need%20a%20bulk%20quotation%20for%20cleaning%20services"
              className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition shadow-lg inline-flex items-center gap-2"
            >
              Request B2B Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+919727257141"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition"
            >
              <Phone size={22} />
              Call Sales
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form */}
      
      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "What does Cleaning include?", a: "Cleaning includes filter cleaning, coil jet wash, drain pipe clearing, gas pressure check, electrical inspection, fan motor check, and performance testing." },
              { q: "How much does Cleaning cost?", a: "Cleaning starts from ₹499 for basic service. Deep jet cleaning is ₹799 for split AC, ₹599 for window AC. Chemical wash starts from ₹999." },
              { q: "How often should AC be serviced?", a: "AC should be serviced at least twice a year — before summer and after monsoon. Heavy use environments may need quarterly servicing." },
              { q: "Will Cleaning improve cooling?", a: "Yes, proper Cleaning can improve cooling efficiency by 20-30%. Dirty filters and coils reduce airflow and heat exchange." },
              { q: "Does Cleaning reduce electricity bills?", a: "Regular Cleaning can reduce electricity consumption by 15-25%. A well-maintained AC runs more efficiently, saving power." },
              { q: "How long does Cleaning take?", a: "Basic Cleaning takes 30-45 minutes. Deep cleaning with jet wash takes 1-1.5 hours. Chemical foam cleaning takes about 2 hours." },
              { q: "Can Cleaning remove bad smell?", a: "Yes, Cleaning includes cleaning of filters, coils, and drain pan which removes bacteria and mold causing odors. Anti-bacterial spray applied." },
              { q: "Is gas top-up included in Cleaning?", a: "Basic service includes gas pressure check. If gas is low, top-up is charged separately — R22 from ₹1,500, R32/R410A from ₹2,000." },
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
          { "@type": "Question", name: "What does Cleaning include?", acceptedAnswer: { "@type": "Answer", text: "Cleaning includes filter cleaning, coil jet wash, drain pipe clearing, gas pressure check, electrical inspection, fan motor check, and performance testing." } },
          { "@type": "Question", name: "How much does Cleaning cost?", acceptedAnswer: { "@type": "Answer", text: "Cleaning starts from ₹499 for basic service. Deep jet cleaning is ₹799 for split AC, ₹599 for window AC. Chemical wash starts from ₹999." } },
          { "@type": "Question", name: "How often should AC be serviced?", acceptedAnswer: { "@type": "Answer", text: "AC should be serviced at least twice a year — before summer and after monsoon. Heavy use environments may need quarterly servicing." } },
          { "@type": "Question", name: "Will Cleaning improve cooling?", acceptedAnswer: { "@type": "Answer", text: "Yes, proper Cleaning can improve cooling efficiency by 20-30%. Dirty filters and coils reduce airflow and heat exchange." } },
          { "@type": "Question", name: "Does Cleaning reduce electricity bills?", acceptedAnswer: { "@type": "Answer", text: "Regular Cleaning can reduce electricity consumption by 15-25%. A well-maintained AC runs more efficiently, saving power." } },
          { "@type": "Question", name: "How long does Cleaning take?", acceptedAnswer: { "@type": "Answer", text: "Basic Cleaning takes 30-45 minutes. Deep cleaning with jet wash takes 1-1.5 hours. Chemical foam cleaning takes about 2 hours." } },
          { "@type": "Question", name: "Can Cleaning remove bad smell?", acceptedAnswer: { "@type": "Answer", text: "Yes, Cleaning includes cleaning of filters, coils, and drain pan which removes bacteria and mold causing odors. Anti-bacterial spray applied." } },
          { "@type": "Question", name: "Is gas top-up included in Cleaning?", acceptedAnswer: { "@type": "Answer", text: "Basic service includes gas pressure check. If gas is low, top-up is charged separately — R22 from ₹1,500, R32/R410A from ₹2,000." } },
          { "@type": "Question", name: "Do you clean outdoor AC unit?", acceptedAnswer: { "@type": "Answer", text: "Yes, complete service includes outdoor unit cleaning. Condenser coil cleaning is essential for proper heat rejection." } },
          { "@type": "Question", name: "What's the difference between service and deep cleaning?", acceptedAnswer: { "@type": "Answer", text: "Basic service is dry cleaning and inspection. Deep cleaning uses high-pressure jet wash. Chemical wash uses foam for thorough cleaning." } }
        ]
      }) }} />

<section className="py-16 bg-gray-50 md:hidden">
        <div className="container mx-auto px-4">
          <BookingForm title="Book Cleaning Service" />
        </div>
      </section>
    </>
  );
}
