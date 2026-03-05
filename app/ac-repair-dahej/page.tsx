import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Dahej | Installation, Service & Repair | Hitech Aircool Engineers",
  description: "Professional AC repair, service & installation in Dahej, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 93289 53665",
  keywords: [
    "AC repair Dahej",
    "AC service Dahej",
    "AC installation Dahej",
    "HVAC service Dahej",
    "chiller repair Dahej",
    "commercial AC Dahej",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-dahej",
  },
};

export default function DahejCityPage() {
  return (
    <CityPageTemplate
      city="dahej"
      cityDisplay="Dahej"
      distance="90 km"
      state="Gujarat"
    />
  );
}
