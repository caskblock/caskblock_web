"use client";

import { useEffect, useState } from "react";

import Items from "./Items";

import { fetchDistilleries } from "@/utils/fetchDistilleries";

const DistilleriesPage = () => {
  const [distilleriesData, setDistilleriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const distilleries = await fetchDistilleries();
        setDistilleriesData(distilleries);
      } catch (error) {
        console.error("Error fetching Distilleries:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full py-12 px-12 rounded-3xl bg-beige">
        <Items data={distilleriesData} idDistilleries={true} />
    </div>
  );
};

export default DistilleriesPage;
