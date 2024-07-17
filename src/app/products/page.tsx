import type { Metadata } from "next";

import "@/styles.css"
import ProductsPage from "@/components/ProductsPage";

export default function Products() {
  return (
    <main className="px-2 sm:px-8 md:px-24 py-12 relative">
      <ProductsPage collectionHeader />
    </main>
  );
}
