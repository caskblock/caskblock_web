import About from "@/components/pages/About";
import Faqs from "@/components/pages/Faqs";
import Shipping from "@/components/pages/Shipping";
import Terms from "@/components/pages/Terms";

const pages = {
  "about": About,
  "terms-and-conditions": Terms,
  "shipping": Shipping,
  "faqs": Faqs
};

export default function Product({ params }) {
  const Page = pages[params.id];

  return (
    <main className="px-2 sm:px-8 md:px-24 py-12">
      <Page />
    </main>
  );
};
