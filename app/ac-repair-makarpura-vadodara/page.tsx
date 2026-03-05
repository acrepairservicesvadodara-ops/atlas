import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Makarpura, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Makarpura, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Makarpura.",
  keywords: [
    "AC repair Makarpura",
    "AC service Makarpura",
    "AC repair Makarpura Vadodara",
    "AC service near Makarpura",
    "AC installation Makarpura",
    "split AC repair Makarpura",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-makarpura-vadodara",
  },
};

export default function MakarpuraAreaPage() {
  return (
    <AreaPageTemplate
      area="makarpura"
      areaDisplay="Makarpura"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
