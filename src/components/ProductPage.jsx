"use client";

import { useEffect, useState } from "react";

import BuyModal from "./BuyModal";

import SingleItem from "./SingleItem";
import { fetchSingleProduct } from "@/utils/fetchSingleProduct";

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
        const response = await fetchSingleProduct(id);
        const parsedResponse = await response.json();
        setData(parsedResponse);
        
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {Object.keys(data).length !== 0
        ? <SingleItem media={data.media} description={data.description} price={data.price} title={data.title} onClick={handleOpenBuyModal} />
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
