import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Karjan | Installation, Service & Repair | Hitech Aircool Engineers",
  description: "Professional AC repair, service & installation in Karjan, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 93289 53665",
  keywords: [
    "AC repair Karjan",
    "AC service Karjan",
    "AC installation Karjan",
    "HVAC service Karjan",
    "chiller repair Karjan",
    "commercial AC Karjan",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-karjan",
  },
};

export default function KarjanCityPage() {
  return (
    <CityPageTemplate
      city="karjan"
      cityDisplay="Karjan"
      distance="25 km"
      state="Gujarat"
    />
  );
}
