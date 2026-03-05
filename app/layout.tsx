import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CallButton from "@/components/CallButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hitechairconditioning.in"),
  title: {
    default: "Hitech Aircool Engineers - AC Repair & Service in Vadodara | HVAC Experts",
    template: "%s | Hitech Aircool Engineers Vadodara"
  },
  description: "Top-rated AC repair & HVAC service in Vadodara. Expert AC installation, AMC, gas refilling, chiller repair & maintenance. Certified technicians. Call +91 93289 53665 for emergency service.",
  keywords: [
    "AC repair Vadodara",
    "AC service Vadodara",
    "AC installation Vadodara",
    "AC AMC Vadodara",
    "chiller repair Vadodara",
    "HVAC service Vadodara",
    "split AC repair",
    "window AC service",
    "central AC maintenance",
    "AC gas refilling Vadodara",
    "panel AC service",
    "VRF VRV system",
    "Hitech Aircool Engineers"
  ],
  authors: [{ name: "Hitech Aircool Engineers" }],
  creator: "Hitech Aircool Engineers",
  publisher: "Hitech Aircool Engineers",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hitechairconditioning.in",
    siteName: "Hitech Aircool Engineers",
    title: "Hitech Aircool Engineers - Expert AC Repair & HVAC Service in Vadodara",
    description: "Professional AC repair, service & installation in Vadodara. Certified HVAC technicians, 8000+ satisfied customers. 24x7 emergency service available.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hitech Aircool Engineers - AC Repair Service Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hitech Aircool Engineers - AC Repair & HVAC Service Vadodara",
    description: "Expert AC repair, installation & maintenance in Vadodara. Call +91 93289 53665",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://hitechairconditioning.in",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://hitechairconditioning.in",
  name: "Hitech Aircool Engineers",
  image: "https://hitechairconditioning.in/logo.png",
  description: "Professional AC repair, HVAC service & installation company in Vadodara with certified technicians and 24x7 emergency support.",
  url: "https://hitechairconditioning.in",
  telephone: "+919328953665",
  email: "hitechairconditioning@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vadodara",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390001",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.3072,
    longitude: 73.1812
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "21:00"
    }
  ],
  priceRange: "₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "850",
    bestRating: "5",
    worstRating: "1"
  },
  areaServed: [
    { "@type": "City", name: "Vadodara" },
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "City", name: "Surat" },
    { "@type": "City", name: "Bharuch" },
    { "@type": "City", name: "Anand" },
    { "@type": "City", name: "Rajkot" }
  ],
  sameAs: [
    "https://www.facebook.com/hitechairconditioning",
    "https://www.instagram.com/hitechairconditioning"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AC Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AC Repair",
          description: "Professional AC repair services for all brands"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AC Installation",
          description: "Expert AC installation with warranty"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AC AMC",
          description: "Annual maintenance contracts for AC"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CallButton />
      </body>
    </html>
  );
}
