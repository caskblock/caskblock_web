"use client";

import { useEffect, useState } from "react";

import BuyModal from "./BuyModal";
import Items from "./Items";
import { fetchPublishedProducts } from "@/utils/fetchPublishedProducts";

const ProductsPage = ({ distillerySlug = "" }) => {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [nftsData, setNftsData] = useState([]);

  const handleOpenBuyModal = (item) => {
    setSelectedItem(item);
    setShowBuyModal(true);
  };

  const handleCloseBuyModal = () => {
    setSelectedItem({});
    setShowBuyModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {

        if (distillerySlug === "" && window.location.pathname.includes("distilleries")) {
          window.history.replaceState(null, "", "/products");
        } 

        const products = await fetchPublishedProducts(distillerySlug);
        
        setNftsData(products);
        if (products.length > 0) setDistilleries([...new Set(products.map((item) => item.distillerySlug))]);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex w-full">
        <Items data={nftsData} showModal={handleOpenBuyModal} />
      </div>

      <div className="mx-24 mt-4">
        {!!showBuyModal && (
          <BuyModal
            closeModal={handleCloseBuyModal}
            metadataId={selectedItem?.metadataId}
            price={selectedItem?.price}
          />
        )}
      </div>
    </>
  );
};

export default ProductsPage;
