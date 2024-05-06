"use client";

import { useEffect, useState } from "react";

import BuyModal from "./BuyModal";
import Items from "./Items";

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
    const fetchMetadata = async () => {
      try {
        
        const response = await fetch('http://localhost:8080/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        const parsedResponse = await response.json();

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
