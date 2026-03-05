import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Bill Road, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Bill Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Bill Road.",
  keywords: [
    "AC repair Bill Road",
    "AC service Bill Road",
    "AC repair Bill Road Vadodara",
    "AC service near Bill Road",
    "AC installation Bill Road",
    "split AC repair Bill Road",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-bill-road-vadodara",
  },
};

export default function BillRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="bill-road"
      areaDisplay="Bill Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
