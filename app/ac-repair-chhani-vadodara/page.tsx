import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Chhani, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Chhani, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Chhani.",
  keywords: [
    "AC repair Chhani",
    "AC service Chhani",
    "AC repair Chhani Vadodara",
    "AC service near Chhani",
    "AC installation Chhani",
    "split AC repair Chhani",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-chhani-vadodara",
  },
};

export default function ChhaniAreaPage() {
  return (
    <AreaPageTemplate
      area="chhani"
      areaDisplay="Chhani"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
