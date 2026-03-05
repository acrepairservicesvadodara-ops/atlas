import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Fatehgunj, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Fatehgunj, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Fatehgunj.",
  keywords: [
    "AC repair Fatehgunj",
    "AC service Fatehgunj",
    "AC repair Fatehgunj Vadodara",
    "AC service near Fatehgunj",
    "AC installation Fatehgunj",
    "split AC repair Fatehgunj",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-fatehgunj-vadodara",
  },
};

export default function FatehgunjAreaPage() {
  return (
    <AreaPageTemplate
      area="fatehgunj"
      areaDisplay="Fatehgunj"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
