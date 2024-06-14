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
  const [success, setSuccess] = useState(false);

  const { activeAccountId } = useMbWallet();

  const handleOpenBurnModal = (item) => {
    setSelectedItem(item);
    setShowBurnModal(true);
  };

  const handleCloseBurnModal = () => {
    setSelectedItem({});
    setShowBurnModal(false);
  };

  const handleSuccessfulBurn = async (transactionHashes) => {
    deleteQueryParams();

    const orderId = localStorage.getItem("orderId");
    cleanLocalStorage();

    if (orderId) {
      const transactionHx = transactionHashes;
      await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/orders/${orderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transactionHx }),
      });

      setShowBurnModal(true);
      setSuccess(true);
      deleteQueryParams();
      setTimeout(() => window.location.reload(), 5000);
    }

  };

  const deleteQueryParams = () => {
    window.history.replaceState({}, "", `${window.location.pathname}`);
  };

  const cleanLocalStorage = () => {
    localStorage.removeItem("orderId");
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

  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const transactionHashes = params.get('transactionHashes');
      if (transactionHashes) handleSuccessfulBurn(transactionHashes);
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-start gap-4 py-12 px-12 rounded-3xl bg-neutral-100">
      <div className="flex w-full">
        <Items data={nftsData} showModal={handleOpenBurnModal}/>
      </div>

      <div className="mx-24 mt-4">
        {!!showBurnModal && (
          <BurnModal closeModal={handleCloseBurnModal} tokenId={selectedItem?.token_id} success={success} />
        )}
      </div>
    </div>
  );
};

export default WalletPage;