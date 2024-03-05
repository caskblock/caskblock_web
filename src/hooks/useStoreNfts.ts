/*

useStoreNfts Hook
Description: This hook calls storeNfts method from @mintbase-js/data to get store nfts to render on Items.

*/

import { ParsedDataReturn, storeNfts } from "@mintbase-js/data";
import { StoreNftsResult } from "@mintbase-js/data/lib/api/storeNfts/storeNfts.types";
import { useQuery } from "react-query";
import { Network } from "@mintbase-js/sdk";

const mapStoreNfts = (data: ParsedDataReturn<StoreNftsResult>) => ({
  nftsData: data?.data?.mb_views_nft_metadata_unburned,
});

const useStoreNfts = (store?: string) => {

  const defaultStores = store || process?.env?.NEXT_PUBLIC_STORES as string;
  const formatedStores = defaultStores.split(/[ ,]+/);

  const { isLoading, error, data } = useQuery(
    ["storeNfts", store],
    () =>
      storeNfts(
        formatedStores,
        true,
        undefined,
        (process?.env?.NEXT_PUBLIC_NETWORK as Network) || "testnet"
      ),
    {
      retry: false,
      refetchOnWindowFocus: false,
      select: mapStoreNfts,
    }
  );

  return { ...data, error, loading: isLoading };
};

export { useStoreNfts };
