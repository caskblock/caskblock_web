"use client";

import { useEffect, useState } from "react";
import Items from "./Items";
import { useMbWallet } from "@mintbase-js/react";
import { ownedNftsByStore } from '@mintbase-js/data';
import BurnModal from "./BurnModal";

const WalletPage = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [nftsData, setNftsData] = useState([]);
  const [showBurnModal, setShowBurnModal] = useState(false);

  const { activeAccountId } = useMbWallet();

  const handleOpenBurnModal = (item) => {
    setSelectedItem(item);
    setShowBurnModal(true);
  };

  const handleCloseBurnModal = () => {
    setSelectedItem({});
    setShowBurnModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!activeAccountId) {
        return [];
      } else { 
        const { data, error } = await ownedNftsByStore(activeAccountId, 'jinkanfts.mintspace3.testnet', { limit: 10, offset: 0 }, 'testnet');
    
        if (error) {console.log('error', error)}
    
        console.log(data?.token);
        setNftsData(data?.token || []);
      }
    };
  
    fetchData();
  }, [activeAccountId]);

  return (
    <div className="w-full flex flex-col items-start gap-4">
      <div className="flex w-full">
        <Items nftsData={nftsData} showModal={handleOpenBurnModal}/>
      </div>

      <div className="mx-24 mt-4">
        {!!showBurnModal && (
          <BurnModal closeModal={handleCloseBurnModal} tokenId={selectedItem?.tokenId} />
        )}
      </div>
    </div>
  );
};

export default WalletPage;