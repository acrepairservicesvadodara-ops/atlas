import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Savli, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Savli, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Savli.",
  keywords: [
    "AC repair Savli",
    "AC service Savli",
    "AC repair Savli Vadodara",
    "AC service near Savli",
    "AC installation Savli",
    "split AC repair Savli",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-savli-vadodara",
  },
};

export default function SavliAreaPage() {
  return (
    <AreaPageTemplate
      area="savli"
      areaDisplay="Savli"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
