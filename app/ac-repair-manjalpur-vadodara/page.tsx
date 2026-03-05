import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Manjalpur, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Manjalpur, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Manjalpur.",
  keywords: [
    "AC repair Manjalpur",
    "AC service Manjalpur",
    "AC repair Manjalpur Vadodara",
    "AC service near Manjalpur",
    "AC installation Manjalpur",
    "split AC repair Manjalpur",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-manjalpur-vadodara",
  },
};

export default function ManjalpurAreaPage() {
  return (
    <AreaPageTemplate
      area="manjalpur"
      areaDisplay="Manjalpur"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
