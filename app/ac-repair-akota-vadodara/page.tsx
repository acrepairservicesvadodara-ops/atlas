import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Akota, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Akota, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Akota.",
  keywords: [
    "AC repair Akota",
    "AC service Akota",
    "AC repair Akota Vadodara",
    "AC service near Akota",
    "AC installation Akota",
    "split AC repair Akota",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-akota-vadodara",
  },
};

export default function AkotaAreaPage() {
  return (
    <AreaPageTemplate
      area="akota"
      areaDisplay="Akota"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
