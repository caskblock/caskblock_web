import { burn, execute } from "@mintbase-js/sdk";
import { useMbWallet } from "@mintbase-js/react";

 const Burner = ({tokenId}) => {

  const { selector } = useMbWallet();

  const handleBurn = async () => {
    const wallet = await selector.wallet();

    const origin = window.location.origin;
    const pathname = window.location.pathname;
    const callbackUrl = `${origin}${pathname}`;

    await execute(
      {
        wallet,
        callbackUrl,
      },
      burn({ contractAddress: process.env.NEXT_PUBLIC_PWX_STORE, tokenIds: [tokenId] })
    );
  };

  return (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
      <button onClick={handleBurn} className="secondary-button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 border bg-white border-neutral-200 text-neutral-700 flex-1 focus:outline-none">Burn</button>
    </div>
  );
};

export default Burner;
