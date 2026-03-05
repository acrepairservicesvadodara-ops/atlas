import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Kalali Road, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Kalali Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Kalali Road.",
  keywords: [
    "AC repair Kalali Road",
    "AC service Kalali Road",
    "AC repair Kalali Road Vadodara",
    "AC service near Kalali Road",
    "AC installation Kalali Road",
    "split AC repair Kalali Road",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-kalali-road-vadodara",
  },
};

export default function KalaliRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="kalali-road"
      areaDisplay="Kalali Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
