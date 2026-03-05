import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Raopura, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Raopura, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Raopura.",
  keywords: [
    "AC repair Raopura",
    "AC service Raopura",
    "AC repair Raopura Vadodara",
    "AC service near Raopura",
    "AC installation Raopura",
    "split AC repair Raopura",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-raopura-vadodara",
  },
};

export default function RaopuraAreaPage() {
  return (
    <AreaPageTemplate
      area="raopura"
      areaDisplay="Raopura"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
