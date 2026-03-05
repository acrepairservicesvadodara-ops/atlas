import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Harinagar, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Harinagar, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Harinagar.",
  keywords: [
    "AC repair Harinagar",
    "AC service Harinagar",
    "AC repair Harinagar Vadodara",
    "AC service near Harinagar",
    "AC installation Harinagar",
    "split AC repair Harinagar",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-harinagar-vadodara",
  },
};

export default function HarinagarAreaPage() {
  return (
    <AreaPageTemplate
      area="harinagar"
      areaDisplay="Harinagar"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
