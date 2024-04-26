"use client";

import Items from "./Items";
import { useEffect, useState } from "react";
import { StoreNftsData } from "@mintbase-js/data/lib/api/storeNfts/storeNfts.types";
import BuyModal from "./BuyModal";
import { FinalExecutionOutcome, JsonRpcProvider } from "near-api-js/lib/providers";

import { Account, KeyPair, InMemorySigner } from 'near-api-js';
import { InMemoryKeyStore } from "near-api-js/lib/key_stores";

import { execute, mint } from '@mintbase-js/sdk';
import BN from "bn.js";
import { useMbWallet } from "@mintbase-js/react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { resetUrlParams } from "@/utils/resetUrlParams";
import { MbButton } from "mintbase-ui";

const LandingPage = () => {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({} as StoreNftsData);
  const [metadataId, setMetadataId] = useState("");

  const handleOpenBuyModal = (item: StoreNftsData) => {
    setMetadataId("");
    setSelectedItem(item);
    setShowBuyModal(true);
  };

  const handleCloseBuyModal = () => {
    resetUrlParams();
    setMetadataId("");
    setSelectedItem({} as StoreNftsData);
    setShowBuyModal(false);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setMetadataId(params.get("metadata_id") || "")
  }, []);

  return (
    <div className="w-full flex flex-col items-start gap-4">
            
      <div className="flex w-full">
        <Items showModal={handleOpenBuyModal} metadataId={metadataId}/>
      </div>
      
      <div className="mx-24 mt-4">
        {!!showBuyModal && (
          <BuyModal closeModal={handleCloseBuyModal} item={selectedItem} />
        )}
      </div>

      
    </div>
  );
};

export default LandingPage;
