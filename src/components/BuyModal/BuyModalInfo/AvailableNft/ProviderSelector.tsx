import { useMbWallet } from "@mintbase-js/react";
import { FinalExecutionOutcome, mintOnMetadata, execute, } from "@mintbase-js/sdk";
import { nearToYocto } from "@/utils/numbers";

export function ProviderSelector({
  onProviderChange,
}: {
  onProviderChange: (provider: string) => void;
}): JSX.Element {

  const { selector, activeAccountId } = useMbWallet();

  const handleMintOnMetadata = async (): Promise<void> => {
    const wallet = await selector.wallet();
    
    const executionOutcome = await execute(
      { wallet }, 
      mintOnMetadata({
        contractAddress: 'secondmintbasev2.mintspace3.testnet',
        metadataId: "0",
        ownerId: activeAccountId || "finalmintbase.testnet",
        price: 1,
        ftAddress: "usdc.fakes.testnet"
      })
    );

    console.log("executionOutcome", executionOutcome)
  }

  return (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
      <button onClick={() => onProviderChange('near')} className="primary-button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  bg-primary text-neutral-50 flex-1 focus:outline-none">Buy with NEAR</button>
      <button onClick={() => onProviderChange('stripe')} className="secondary-button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 border bg-white border-neutral-200 text-neutral-700 flex-1 focus:outline-none">Buy with credit card </button>
      <button onClick={handleMintOnMetadata} className="secondary-button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 border bg-white border-neutral-200 text-neutral-700 flex-1 focus:outline-none">Mint</button>
    </div>
  );
};