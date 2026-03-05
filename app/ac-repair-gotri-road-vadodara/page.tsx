import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Gotri Road, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Gotri Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Gotri Road.",
  keywords: [
    "AC repair Gotri Road",
    "AC service Gotri Road",
    "AC repair Gotri Road Vadodara",
    "AC service near Gotri Road",
    "AC installation Gotri Road",
    "split AC repair Gotri Road",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-gotri-road-vadodara",
  },
};

export default function GotriRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="gotri-road"
      areaDisplay="Gotri Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
