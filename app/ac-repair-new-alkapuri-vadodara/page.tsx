import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in New Alkapuri, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in New Alkapuri, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in New Alkapuri.",
  keywords: [
    "AC repair New Alkapuri",
    "AC service New Alkapuri",
    "AC repair New Alkapuri Vadodara",
    "AC service near New Alkapuri",
    "AC installation New Alkapuri",
    "split AC repair New Alkapuri",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-new-alkapuri-vadodara",
  },
};

export default function NewAlkapuriAreaPage() {
  return (
    <AreaPageTemplate
      area="new-alkapuri"
      areaDisplay="New Alkapuri"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
