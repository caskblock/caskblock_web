import LandingPage from "@/components/LandingPage.jsx";
import type { Metadata } from "next";

import "@/styles.css"

export const metadata: Metadata = {
  title: "PWX Marketplace",
  description: "Portuguese Whisky Exchange Marketplace",
};

export default function Landing() {
  return (
    <main className="px-2 sm:px-8 md:px-24 py-12">
      <LandingPage />
    </main>
  );
}
