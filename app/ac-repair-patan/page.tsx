import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Patan | Installation, Service & Repair | Hitech Aircool Engineers",
  description: "Professional AC repair, service & installation in Patan, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 93289 53665",
  keywords: [
    "AC repair Patan",
    "AC service Patan",
    "AC installation Patan",
    "HVAC service Patan",
    "chiller repair Patan",
    "commercial AC Patan",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-patan",
  },
};

export default function PatanCityPage() {
  return (
    <CityPageTemplate
      city="patan"
      cityDisplay="Patan"
      distance="170 km"
      state="Gujarat"
    />
  );
}
