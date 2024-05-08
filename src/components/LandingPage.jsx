"use client";

import { useEffect, useState } from "react";

import BuyModal from "./BuyModal";
import Items from "./Items";
import { fetchProducts } from "@/utils/fetchProducts";
import HowTo from "./HowTo";

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

      <div className="flex flex-col lg:flex-row lg:items-center bg-[url('/banner.jpg')] bg-no-repeat bg-cover bg-center w-full px-6 py-6 lg:px-24 lg:py-24 rounded-3xl">
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

      <HowTo />

      <div className="w-full bg-neutral-100/70 lg:py-32 py-20 px-12 mt-24 rounded-3xl">
        <div class="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-14">
          <div class="flex flex-col items-center text-center w-full max-w-2xl mx-auto">
            <h2 class="flex items-center flex-wrap justify-center text-3xl md:text-4xl 2xl:text-5xl font-semibold">
              Top List of Whiskies
            </h2>
          </div>
        </div>

        <div className="flex w-full">
          <Items nftsData={nftsData} showModal={handleOpenBuyModal}/>
        </div>
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
