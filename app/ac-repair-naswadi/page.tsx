import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Naswadi | Installation, Service & Repair | Hitech Aircool Engineers",
  description: "Professional AC repair, service & installation in Naswadi, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 93289 53665",
  keywords: [
    "AC repair Naswadi",
    "AC service Naswadi",
    "AC installation Naswadi",
    "HVAC service Naswadi",
    "chiller repair Naswadi",
    "commercial AC Naswadi",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-naswadi",
  },
};

export default function NaswadiCityPage() {
  return (
    <CityPageTemplate
      city="naswadi"
      cityDisplay="Naswadi"
      distance="45 km"
      state="Gujarat"
    />
  );
}
