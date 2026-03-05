import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Dabhoi Road, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Dabhoi Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Dabhoi Road.",
  keywords: [
    "AC repair Dabhoi Road",
    "AC service Dabhoi Road",
    "AC repair Dabhoi Road Vadodara",
    "AC service near Dabhoi Road",
    "AC installation Dabhoi Road",
    "split AC repair Dabhoi Road",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-dabhoi-road-vadodara",
  },
};

export default function DabhoiRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="dabhoi-road"
      areaDisplay="Dabhoi Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
