import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in New VIP Road, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in New VIP Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in New VIP Road.",
  keywords: [
    "AC repair New VIP Road",
    "AC service New VIP Road",
    "AC repair New VIP Road Vadodara",
    "AC service near New VIP Road",
    "AC installation New VIP Road",
    "split AC repair New VIP Road",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-new-vip-road-vadodara",
  },
};

export default function NewVIPRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="new-vip-road"
      areaDisplay="New VIP Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
