import { TokenListData } from "../../../types/types";
import { AvailableNftComponent} from "./AvailableNft/AvailableNftComponent";
import { UnavailableNft } from "./UnavailableNft";
import { StoreNftsData } from "@mintbase-js/data/lib/api/storeNfts/storeNfts.types";

export function BuyModalInfo({
  data,
  item,
}: {
  data: Partial<TokenListData>,
  item: StoreNftsData;
}): JSX.Element {

  const isUnavailable = !(data?.amountAvailable && data?.amountAvailable > 0);

  return (
    <>
      {isUnavailable ? <UnavailableNft /> : <AvailableNftComponent data={data} item={item}/>}
    </>
  );
};
