import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Dabhoi | Installation, Service & Repair | Hitech Aircool Engineers",
  description: "Professional AC repair, service & installation in Dabhoi, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 93289 53665",
  keywords: [
    "AC repair Dabhoi",
    "AC service Dabhoi",
    "AC installation Dabhoi",
    "HVAC service Dabhoi",
    "chiller repair Dabhoi",
    "commercial AC Dabhoi",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-dabhoi",
  },
};

export default function DabhoiCityPage() {
  return (
    <CityPageTemplate
      city="dabhoi"
      cityDisplay="Dabhoi"
      distance="30 km"
      state="Gujarat"
    />
  );
}
