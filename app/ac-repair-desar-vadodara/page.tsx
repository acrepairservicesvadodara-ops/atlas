import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Desar, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Desar, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Desar.",
  keywords: [
    "AC repair Desar",
    "AC service Desar",
    "AC repair Desar Vadodara",
    "AC service near Desar",
    "AC installation Desar",
    "split AC repair Desar",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-desar-vadodara",
  },
};

export default function DesarAreaPage() {
  return (
    <AreaPageTemplate
      area="desar"
      areaDisplay="Desar"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
