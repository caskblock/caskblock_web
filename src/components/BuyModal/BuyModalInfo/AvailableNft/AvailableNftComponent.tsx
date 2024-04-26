import { useMbWallet } from "@mintbase-js/react";
import { StoreNftsData } from "@mintbase-js/data/lib/api/storeNfts/storeNfts.types";

/*
Buy Modal Info:
The component that handles the NFT Buy Information
*/

import { useState } from "react";
import { TokenListData } from "../../../../types/types";
import { BuyWithNear } from "./BuyWithNear";
import { BuyWithStripe } from "./BuyWithStripe";
import { ProviderSelector } from "./ProviderSelector";

export function AvailableNftComponent({
  data,
  item,
}: {
  data: Partial<TokenListData>;
  item: StoreNftsData;
}): JSX.Element {

  const { isConnected, connect } = useMbWallet();

  const [provider, setProvider] = useState('');

  const handleConnect = () => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('metadata_id', item.metadata_id);
    window.history.pushState({}, '', currentUrl.toString());

    connect();
  };

  if (!isConnected) handleConnect();

  const showConnectWalletButton = !isConnected;
  const showBuyWithNearButton = isConnected && provider === 'near';
  const showBuyWithStripeButton = isConnected && provider === 'stripe';
  const showProviderSelector = isConnected && !showBuyWithNearButton && !showBuyWithStripeButton;

  return (
    <>
      {showConnectWalletButton && (
        <button onClick={handleConnect} className="primary-button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  bg-primary text-neutral-50 flex-1 focus:outline-none">Connect NEAR Wallet</button>
      )}
      {showProviderSelector && (
        <ProviderSelector onProviderChange={setProvider} />
      )}
      {showBuyWithNearButton && (
        <BuyWithNear item={item} />
      )}
      {showBuyWithStripeButton && (
        <BuyWithStripe item={item}/>
      )}
      
    </>
  );
};