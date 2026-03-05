import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Danteshwar, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Danteshwar, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Danteshwar.",
  keywords: [
    "AC repair Danteshwar",
    "AC service Danteshwar",
    "AC repair Danteshwar Vadodara",
    "AC service near Danteshwar",
    "AC installation Danteshwar",
    "split AC repair Danteshwar",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-danteshwar-vadodara",
  },
};

export default function DanteshwarAreaPage() {
  return (
    <AreaPageTemplate
      area="danteshwar"
      areaDisplay="Danteshwar"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
