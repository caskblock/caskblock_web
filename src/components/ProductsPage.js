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
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div id="products-list" className="flex w-full py-12 px-12 rounded-3xl">
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
