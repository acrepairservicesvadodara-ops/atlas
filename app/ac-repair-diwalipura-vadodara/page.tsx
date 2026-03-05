import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Diwalipura, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Diwalipura, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Diwalipura.",
  keywords: [
    "AC repair Diwalipura",
    "AC service Diwalipura",
    "AC repair Diwalipura Vadodara",
    "AC service near Diwalipura",
    "AC installation Diwalipura",
    "split AC repair Diwalipura",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-diwalipura-vadodara",
  },
};

export default function DiwalipuraAreaPage() {
  return (
    <AreaPageTemplate
      area="diwalipura"
      areaDisplay="Diwalipura"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
