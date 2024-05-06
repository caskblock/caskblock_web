"use client";

import { useEffect, useState } from "react";

import BuyModal from "./BuyModal";
import Items from "./Items";

import {resetUrlParams} from "../utils/resetUrlParams";

import axios from "axios";

const LandingPage = () => {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [nftsData, setNftsData] = useState([]);

  const handleOpenBuyModal = (item) => {
    setSelectedItem(item);
    setShowBuyModal(true);
    resetUrlParams();
  };

  const handleCloseBuyModal = () => {
    resetUrlParams();
    setSelectedItem({});
    setShowBuyModal(false);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const metadataId = params.get("metadata_id") || ""

    const fetchMetadata = async () => {
      try {
        
        const response = await fetch('http://localhost:8080/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        const parsedResponse = await response.json();

        // needed for stripe??
        if (metadataId) {
          const item = data.mb_views_nft_metadata_unburned?.find((item) => item.metadata_id === metadataId);
          if (item) { handleOpenBuyModal(item) };     
        };
    
        setNftsData(parsedResponse);
      } catch (error) {
        console.error('Error fetching NFTs:', error);
      };
    };
  
    fetchMetadata();
  }, []);

  return (
    <div className="w-full flex flex-col items-start gap-4">
            
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
