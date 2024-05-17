import type { Metadata } from "next";

import "@/styles.css"
import DistilleriesPage from "@/components/DistilleriesPage";

export const metadata: Metadata = {
  title: "PWX Marketplace",
  description: "Portuguese Whisky Exchange Marketplace",
};

export default function Distilleries() {
  return (
    <main className="px-2 sm:px-8 md:px-24 py-12">
      <DistilleriesPage />
    </main>
  );
}
