import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Borsad | Installation, Service & Repair | Hitech Aircool Engineers",
  description: "Professional AC repair, service & installation in Borsad, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 93289 53665",
  keywords: [
    "AC repair Borsad",
    "AC service Borsad",
    "AC installation Borsad",
    "HVAC service Borsad",
    "chiller repair Borsad",
    "commercial AC Borsad",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-borsad",
  },
};

export default function BorsadCityPage() {
  return (
    <CityPageTemplate
      city="borsad"
      cityDisplay="Borsad"
      distance="55 km"
      state="Gujarat"
    />
  );
}
