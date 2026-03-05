import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Bhayli, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Bhayli, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Bhayli.",
  keywords: [
    "AC repair Bhayli",
    "AC service Bhayli",
    "AC repair Bhayli Vadodara",
    "AC service near Bhayli",
    "AC installation Bhayli",
    "split AC repair Bhayli",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-bhayli-vadodara",
  },
};

export default function BhayliAreaPage() {
  return (
    <AreaPageTemplate
      area="bhayli"
      areaDisplay="Bhayli"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
