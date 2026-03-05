import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Maneja, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Maneja, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Maneja.",
  keywords: [
    "AC repair Maneja",
    "AC service Maneja",
    "AC repair Maneja Vadodara",
    "AC service near Maneja",
    "AC installation Maneja",
    "split AC repair Maneja",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-maneja-vadodara",
  },
};

export default function ManejaAreaPage() {
  return (
    <AreaPageTemplate
      area="maneja"
      areaDisplay="Maneja"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
