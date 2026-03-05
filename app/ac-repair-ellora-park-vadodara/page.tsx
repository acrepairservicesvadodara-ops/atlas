import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Ellora Park, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Ellora Park, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Ellora Park.",
  keywords: [
    "AC repair Ellora Park",
    "AC service Ellora Park",
    "AC repair Ellora Park Vadodara",
    "AC service near Ellora Park",
    "AC installation Ellora Park",
    "split AC repair Ellora Park",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-ellora-park-vadodara",
  },
};

export default function ElloraParkAreaPage() {
  return (
    <AreaPageTemplate
      area="ellora-park"
      areaDisplay="Ellora Park"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
