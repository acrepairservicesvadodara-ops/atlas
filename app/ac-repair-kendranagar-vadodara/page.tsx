import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Kendranagar, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Kendranagar, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Kendranagar.",
  keywords: [
    "AC repair Kendranagar",
    "AC service Kendranagar",
    "AC repair Kendranagar Vadodara",
    "AC service near Kendranagar",
    "AC installation Kendranagar",
    "split AC repair Kendranagar",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-kendranagar-vadodara",
  },
};

export default function KendranagarAreaPage() {
  return (
    <AreaPageTemplate
      area="kendranagar"
      areaDisplay="Kendranagar"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
