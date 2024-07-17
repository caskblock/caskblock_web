import LandingPage from "@/components/LandingPage.jsx";
import type { Metadata } from "next";

import "@/styles.css"

export default function Landing() {
  return (
    <main className="px-2 sm:px-8 md:px-24 py-12">
      <LandingPage />
    </main>
  );
}
