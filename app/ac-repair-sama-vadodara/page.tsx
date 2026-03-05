import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Sama, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Sama, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Sama.",
  keywords: [
    "AC repair Sama",
    "AC service Sama",
    "AC repair Sama Vadodara",
    "AC service near Sama",
    "AC installation Sama",
    "split AC repair Sama",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-sama-vadodara",
  },
};

export default function SamaAreaPage() {
  return (
    <AreaPageTemplate
      area="sama"
      areaDisplay="Sama"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
