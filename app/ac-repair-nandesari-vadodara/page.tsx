import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Nandesari, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Nandesari, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Nandesari.",
  keywords: [
    "AC repair Nandesari",
    "AC service Nandesari",
    "AC repair Nandesari Vadodara",
    "AC service near Nandesari",
    "AC installation Nandesari",
    "split AC repair Nandesari",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-nandesari-vadodara",
  },
};

export default function NandesariAreaPage() {
  return (
    <AreaPageTemplate
      area="nandesari"
      areaDisplay="Nandesari"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
