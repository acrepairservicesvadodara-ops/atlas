import { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair & Service in Chhota Udaipur | Installation, Service & Repair | Hitech Aircool Engineers",
  description: "Professional AC repair, service & installation in Chhota Udaipur, Gujarat. Industrial & commercial AC service. 20+ years experience, 90-day warranty. Call +91 93289 53665",
  keywords: [
    "AC repair Chhota Udaipur",
    "AC service Chhota Udaipur",
    "AC installation Chhota Udaipur",
    "HVAC service Chhota Udaipur",
    "chiller repair Chhota Udaipur",
    "commercial AC Chhota Udaipur",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-chhota-udaipur",
  },
};

export default function ChhotaUdaipurCityPage() {
  return (
    <CityPageTemplate
      city="chhota-udaipur"
      cityDisplay="Chhota Udaipur"
      distance="90 km"
      state="Gujarat"
    />
  );
}
