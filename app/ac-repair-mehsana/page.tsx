import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Mehsana | Installation, Service & Repair | Hitech Aircool Engineers",
  description: "Professional AC repair, service & installation in Mehsana, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 93289 53665",
  keywords: [
    "AC repair Mehsana",
    "AC service Mehsana",
    "AC installation Mehsana",
    "HVAC service Mehsana",
    "chiller repair Mehsana",
    "commercial AC Mehsana",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-mehsana",
  },
};

export default function MehsanaCityPage() {
  return (
    <CityPageTemplate
      city="mehsana"
      cityDisplay="Mehsana"
      distance="150 km"
      state="Gujarat"
    />
  );
}
