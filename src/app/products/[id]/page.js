import ProductPage from "@/components/ProductPage";

export default function Product({ params }) {
  return (
    <main className="px-2 sm:px-8 md:px-24 py-12">
      <ProductPage id={params.id} />
    </main>
  );
};