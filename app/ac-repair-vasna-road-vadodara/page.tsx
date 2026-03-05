import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Vasna Road, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Vasna Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Vasna Road.",
  keywords: [
    "AC repair Vasna Road",
    "AC service Vasna Road",
    "AC repair Vasna Road Vadodara",
    "AC service near Vasna Road",
    "AC installation Vasna Road",
    "split AC repair Vasna Road",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-vasna-road-vadodara",
  },
};

export default function VasnaRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="vasna-road"
      areaDisplay="Vasna Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
