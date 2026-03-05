import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Bodeli | Installation, Service & Repair | Hitech Aircool Engineers",
  description: "Professional AC repair, service & installation in Bodeli, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 93289 53665",
  keywords: [
    "AC repair Bodeli",
    "AC service Bodeli",
    "AC installation Bodeli",
    "HVAC service Bodeli",
    "chiller repair Bodeli",
    "commercial AC Bodeli",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-bodeli",
  },
};

export default function BodeliCityPage() {
  return (
    <CityPageTemplate
      city="bodeli"
      cityDisplay="Bodeli"
      distance="50 km"
      state="Gujarat"
    />
  );
}
