"use client";
import ProductsPage from "@/components/ProductsPage";
import { fetchDistilleryBySlug } from "@/utils/fetchDistilleryBySlug";
import { useEffect, useState } from "react";

export default function Distillery({ params }) {
  const [distilleryData, setDistilleryData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const distillery = await fetchDistilleryBySlug(params.slug);
        setDistilleryData(distillery);
      } catch (error) {
        console.error("Error fetching Distilleries:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="px-2 sm:px-8 md:px-24">
      <div className="p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-xl flex flex-col md:flex-row items-center bg-neutral-100 mb-8">
        <img
          alt="/logo.png"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          src={distilleryData?.media || "/logo.png"}
          style={{ borderRadius: "20px", inset: "0px", color: "transparent", maxHeight: "200px", objectFit: "contain" }}
        />
        <div className="pt-5 md:pt-1 md:ml-6 xl:ml-14 flex-grow">
          <div className="max-w-screen-sm ">
            <h2 className="inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-semibold">
              {distilleryData?.title}
            </h2>
            <span class="block mt-4 text-sm text-neutral-500">
              {distilleryData?.description}
            </span>
          </div>
        </div>
      </div>
      <ProductsPage distillerySlug={params.slug} />
    </main>
  );
}
