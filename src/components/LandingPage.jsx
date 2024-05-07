"use client";

import { useEffect, useState } from "react";

import BuyModal from "./BuyModal";
import Items from "./Items";
import { fetchProducts } from "@/utils/fetchProducts";

const LandingPage = () => {
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
        const response = await fetchProducts();
        const parsedResponse = await response.json();

        setNftsData(parsedResponse);
      } catch (error) {
        console.error('Error fetching NFTs:', error);
      };
    };
  
    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col items-start gap-4">
      
      <div className="flex flex-col lg:flex-row lg:items-center bg-[url('/banner.jpg')] bg-no-repeat bg-cover bg-center w-full px-6 py-6 lg:px-24 lg:py-24">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 lg:mr-10 xl:mr-0">
          <h2 class="font-semibold text-4xl md:text-5xl xl:text-6xl !leading-[114%] text-white">Buy and sell NFTs backed by real asset.</h2>
          <span class="text-base md:text-lg text-white">
            PWX cross the line between the digital and physical world. <br/>
            By purchasing our NFTs you have exclusive access to whiskey casks, whiskey bottles and other unique offers.<br/>
            You can invest to make some profit or just for the excitement of having your own whiskey.</span>
        </div>
        <div className="flex-grow">
          <img src="/logo.png" alt="banner" className="w-full " />
        </div>
      </div>

      <div className="flex w-full">
        <Items nftsData={nftsData} showModal={handleOpenBuyModal}/>
      </div>
      
      <div className="mx-24 mt-4">
        {!!showBuyModal && (
          <BuyModal closeModal={handleCloseBuyModal} metadataId={selectedItem?.metadataId} price={selectedItem?.price} />
        )}
      </div>
      
    </div>
  );
};

export default LandingPage;
