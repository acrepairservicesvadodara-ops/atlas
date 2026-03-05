import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Tandalja, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Tandalja, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Tandalja.",
  keywords: [
    "AC repair Tandalja",
    "AC service Tandalja",
    "AC repair Tandalja Vadodara",
    "AC service near Tandalja",
    "AC installation Tandalja",
    "split AC repair Tandalja",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-tandalja-vadodara",
  },
};

export default function TandaljaAreaPage() {
  return (
    <AreaPageTemplate
      area="tandalja"
      areaDisplay="Tandalja"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
