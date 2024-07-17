import type { Metadata } from "next";

import "@/styles.css"
import AboutPage from "@/components/AboutPage";

export default function Distilleries() {
  return (
    <main className="px-2 sm:px-8 md:px-24 py-12">
      <AboutPage />
    </main>
  );
}
