import { bigToNear, parseYactoToNear } from "@/utils/numbers";
import { StoreNftsData } from "@mintbase-js/data/lib/api/storeNfts/storeNfts.types";
import { SelectedNft } from "../types/types";
import { parseMedia } from "../utils";
import { getCachedImage } from "../utils/getCachedImages";
import { useState } from "react";
import { useMbWallet, useNearPrice } from "@mintbase-js/react";
import { mint } from "@mintbase-js/sdk";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CreditCardForm from "./CreditCardForm";

function Item({
  item,
  showModal,
}: {
  item: StoreNftsData;
  showModal: (item: SelectedNft) => void;
}): JSX.Element {
  const [clientSecret, setClientSecret] = useState("");
  const { activeAccountId } = useMbWallet();
  const nearPrice = useNearPrice();

  if (!item) {
    return <></>;
  }

  const { base_uri, media, metadata_id, price, title, nft_contract_id } = item;
  const { mediaUrl } = parseMedia(media, base_uri);

  const handleStripeBuy = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    e.stopPropagation();

    const nearPriceValue: number = Number(nearPrice.nearPrice);
    const itemPriceValue: number = Number(parseYactoToNear(Number(item.price)));
    const usdPrice = Number(nearPriceValue * itemPriceValue).toFixed(2);

    const resp = await fetch(
      "https://stripe2near-z3w7d7dnea-ew.a.run.app/payment-intent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceUsd: Number(usdPrice) * 1000 ,
          action: mint({
            metadata: {
              reference: metadata_id,
              media: media,
            },
            ownerId: activeAccountId!,
            contractAddress: nft_contract_id,
          }),
        }),
      }
    );
    if (resp.ok) {
      const json = await resp.json();
      setClientSecret(json.clientSecret);
    }
  };

  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw 'Did you forget to add a ".env.local" file?';
  }

  const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  return (
    <div
      className="p-2 bg-black bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 rounded-xl shadow-xl cursor-pointer"
      onClick={() => showModal({ metadataId: metadata_id })}
    >
      <div className="w-full relative">
        {mediaUrl ? (
          <img
            src={getCachedImage(mediaUrl)}
            alt={title}
            className="rounded-md w-full h-64 object-cover"
          />
        ) : (
          <div className="w-full h-64 flex justify-center items-center">
            No Nft Media Available
          </div>
        )}
      </div>
      <div className="flex flex-col mt-2">
        <div className="font-semibold text-md">{title}</div>
        <div className="text-xs">{bigToNear(price?.toString() || "0")} N</div>
      </div>
      {!clientSecret ? (
        <button
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg disabled:bg-gray-400 disabled:opacity-50"
          onClick={(e) => handleStripeBuy(e)}
          disabled={!activeAccountId}
        >
          Buy with credit card
        </button>
      ) : (
        <Elements
          options={{
            clientSecret,
            appearance: { theme: "night" },
          }}
          stripe={stripe}
        >
          <CreditCardForm />
        </Elements>
      )}
    </div>
  );
}

export { Item };
