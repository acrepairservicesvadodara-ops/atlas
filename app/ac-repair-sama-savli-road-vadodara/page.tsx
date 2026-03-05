import { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";

export const metadata: Metadata = {
  title: "AC Repair in Sama-Savli Road, Vadodara | Same Day Service | Hitech Aircool Engineers",
  description: "Best AC repair & service in Sama-Savli Road, Vadodara. Expert technicians for all brands. Same-day service, 90-day warranty. Call +91 93289 53665 for AC repair in Sama-Savli Road.",
  keywords: [
    "AC repair Sama-Savli Road",
    "AC service Sama-Savli Road",
    "AC repair Sama-Savli Road Vadodara",
    "AC service near Sama-Savli Road",
    "AC installation Sama-Savli Road",
    "split AC repair Sama-Savli Road",
  ],
  alternates: {
    canonical: "https://hitechairconditioning.in/ac-repair-sama-savli-road-vadodara",
  },
};

export default function SamaSavliRoadAreaPage() {
  return (
    <AreaPageTemplate
      area="sama-savli-road"
      areaDisplay="Sama-Savli Road"
      city="vadodara"
      cityDisplay="Vadodara"
    />
  );
}
