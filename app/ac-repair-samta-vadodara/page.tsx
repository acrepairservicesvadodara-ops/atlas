import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Samta, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Samta, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Samta.",
  keywords: [
    "AC repair Samta",
    "AC service Samta",
    "AC repair Samta Vadodara",
    "AC service near Samta",
    "AC installation Samta",
    "split AC repair Samta",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-samta-vadodara",
  },
};

export default function SamtaAreaPage() {
  return (
    <AreaPageTemplate
      area="samta"
      areaDisplay="Samta"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
