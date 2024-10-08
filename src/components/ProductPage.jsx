"use client";

import { useEffect, useState } from "react";

import BuyModal from "./BuyModal";
import SingleItem from "./SingleItem";

import { fetchProductById } from "@/utils/fetchProductById";

const ProductPage = ({ id }) => {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [data, setData] = useState({});

  const handleOpenBuyModal = () => {
    setShowBuyModal(true);
  };

  const handleCloseBuyModal = () => {
    setShowBuyModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await fetchProductById(id);
        setData(productData);

      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {Object.keys(data).length !== 0
        ? <SingleItem data={data} onClick={handleOpenBuyModal} />
        : <div className="w-full h-full bg-slate-900 animate-pulse rounded-xl shadow-xl" />
      }

      <div className="mx-24 mt-4">
        {!!showBuyModal && (
          <BuyModal
            closeModal={handleCloseBuyModal}
            metadataId={data?.metadataId}
            price={data?.price}
          />
        )}
      </div>
    </>
  );
};

export default ProductPage;
