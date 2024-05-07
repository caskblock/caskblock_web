import { useMbWallet } from "@mintbase-js/react";
import { mintOnMetadata, execute } from "@mintbase-js/sdk";

const Minter = ({metadataId, price, onStepChange}) => {

  const { selector, activeAccountId } = useMbWallet();

  const handleMintOnMetadata = async () => {
    const wallet = await selector.wallet();

    const response = await execute(
      { wallet }, 
      mintOnMetadata({
        contractAddress: process.env.NEXT_PUBLIC_PWX_STORE,
        metadataId: metadataId,
        ownerId: activeAccountId,
        price: price,
        ftAddress: process.env.NEXT_PUBLIC_FT_ADDRESS,
        ftDecimals: process.env.NEXT_PUBLIC_FT_DECIMALS,
      })
    );

    if (response?.length == 2 && response[1]?.status?.SuccessValue !== "") {
      onStepChange(1);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
      <button onClick={handleMintOnMetadata} className="secondary-button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 border bg-white border-neutral-200 text-neutral-700 flex-1 focus:outline-none">Mint</button>
    </div>
  );
};

export default Minter;