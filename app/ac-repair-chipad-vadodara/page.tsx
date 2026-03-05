import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Chipad, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Chipad, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Chipad.",
  keywords: [
    "AC repair Chipad",
    "AC service Chipad",
    "AC repair Chipad Vadodara",
    "AC service near Chipad",
    "AC installation Chipad",
    "split AC repair Chipad",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-chipad-vadodara",
  },
};

export default function ChipadAreaPage() {
  return (
    <AreaPageTemplate
      area="chipad"
      areaDisplay="Chipad"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
