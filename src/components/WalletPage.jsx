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
        const data = await fetchNftsInWallet(activeAccountId);
        setNftsData(data);
      }
    };
  
    fetchData();
  }, [activeAccountId]);

  return (
    <div className="w-full flex flex-col items-start gap-4 py-12 px-12 rounded-3xl bg-neutral-100">
      <div className="flex w-full">
        <Items data={nftsData} showModal={handleOpenBurnModal}/>
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