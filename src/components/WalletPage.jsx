"use client";

import { useEffect, useState } from "react";
import Items from "./Items";
import { useMbWallet } from "@mintbase-js/react";
import BurnModal from "./BurnModal";
import { fetchNftsInWallet } from "@/utils/fetchNftsInWallet";

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
        const response = await fetchNftsInWallet(activeAccountId);
        const parsedResponse = await response.json();
        setNftsData(parsedResponse?.data?.mb_views_nft_tokens || []);
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
          <BurnModal closeModal={handleCloseBurnModal} tokenId={selectedItem?.token_id} />
        )}
      </div>
    </div>
  );
};

export default WalletPage;