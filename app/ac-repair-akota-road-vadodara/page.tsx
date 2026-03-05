import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Akota Road, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Akota Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Akota Road.",
  keywords: [
    "AC repair Akota Road",
    "AC service Akota Road",
    "AC repair Akota Road Vadodara",
    "AC service near Akota Road",
    "AC installation Akota Road",
    "split AC repair Akota Road",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-akota-road-vadodara",
  },
};

export default function AkotaRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="akota-road"
      areaDisplay="Akota Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
