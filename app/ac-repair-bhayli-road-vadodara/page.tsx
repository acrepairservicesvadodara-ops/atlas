import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Bhayli Road, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Bhayli Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Bhayli Road.",
  keywords: [
    "AC repair Bhayli Road",
    "AC service Bhayli Road",
    "AC repair Bhayli Road Vadodara",
    "AC service near Bhayli Road",
    "AC installation Bhayli Road",
    "split AC repair Bhayli Road",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-bhayli-road-vadodara",
  },
};

export default function BhayliRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="bhayli-road"
      areaDisplay="Bhayli Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
