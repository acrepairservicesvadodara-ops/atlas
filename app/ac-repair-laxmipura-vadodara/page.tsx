import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Laxmipura, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Laxmipura, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Laxmipura.",
  keywords: [
    "AC repair Laxmipura",
    "AC service Laxmipura",
    "AC repair Laxmipura Vadodara",
    "AC service near Laxmipura",
    "AC installation Laxmipura",
    "split AC repair Laxmipura",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-laxmipura-vadodara",
  },
};

export default function LaxmipuraAreaPage() {
  return (
    <AreaPageTemplate
      area="laxmipura"
      areaDisplay="Laxmipura"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
