import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Manjusar, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Manjusar, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Manjusar.",
  keywords: [
    "AC repair Manjusar",
    "AC service Manjusar",
    "AC repair Manjusar Vadodara",
    "AC service near Manjusar",
    "AC installation Manjusar",
    "split AC repair Manjusar",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-manjusar-vadodara",
  },
};

export default function ManjusarAreaPage() {
  return (
    <AreaPageTemplate
      area="manjusar"
      areaDisplay="Manjusar"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
