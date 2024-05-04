import { useMbWallet } from "@mintbase-js/react";

import Minter from "./Minter";

 const AvailableNft = ({metadataId, price}) => {

  const { isConnected, connect } = useMbWallet();

  if (!isConnected) connect();

  return (
    <>
      {!isConnected && (
        <button onClick={() => connect()} className="primary-button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  bg-primary text-neutral-50 flex-1 focus:outline-none">Connect NEAR Wallet</button>
      )}
      {isConnected && (
        <Minter metadataId={metadataId} price={price} />
      )}
    </>
  );
};

export default AvailableNft;