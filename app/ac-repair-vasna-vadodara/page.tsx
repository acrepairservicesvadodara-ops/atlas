import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Vasna, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Vasna, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Vasna.",
  keywords: [
    "AC repair Vasna",
    "AC service Vasna",
    "AC repair Vasna Vadodara",
    "AC service near Vasna",
    "AC installation Vasna",
    "split AC repair Vasna",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-vasna-vadodara",
  },
};

export default function VasnaAreaPage() {
  return (
    <AreaPageTemplate
      area="vasna"
      areaDisplay="Vasna"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
