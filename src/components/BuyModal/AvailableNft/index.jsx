import { useMbWallet } from "@mintbase-js/react";

import Minter from "./Minter";
import { useState } from "react";

 const AvailableNft = ({metadataId, price}) => {
  const { isConnected, connect } = useMbWallet();

  const [step, setStep] = useState(0);

  if (!isConnected) connect();

  return (
    <>
      {(step === 0 && !isConnected) && (
        <>
          <div>You need to connect your NEAR wallet to proceed.</div><br/>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button onClick={() => connect()} className="primary-button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  bg-primary text-neutral-50 flex-1 focus:outline-none">Connect & Buy</button>
          </div>
        </>
      )}

      {(step === 0  && isConnected) && (
        <Minter metadataId={metadataId} price={price} onStepChange={setStep} /> )}

      {step === 1 &&
        <div className="text-center">Transaction was successfull. Thank you for your purchase. 🎉</div>}
    </>
  );
};

export default AvailableNft;
