/*

useStoreData Hook
Description: This hook calls storeData method from @mintbase-js/data to get store data to render on Items.

*/

import { ParsedDataReturn, storeData } from "@mintbase-js/data";
import { StoreDataResults } from "@mintbase-js/data/lib/api/storeData/storeData.types";
import { Network } from "@mintbase-js/sdk";
import { useQuery } from "react-query";

const mapStoreData = (data: ParsedDataReturn<StoreDataResults>) => ({
  stores: data?.data?.nft_contracts,
});

const useStoreData = () => {
    
    const defaultStores = process?.env?.NEXT_PUBLIC_STORES as string;
    const formatedStores = defaultStores.split(/[ ,]+/);


    const { isLoading, error, data } = useQuery(
    "storeData",
    () =>
      storeData(
        formatedStores,
        (process?.env?.NEXT_PUBLIC_NETWORK as Network)
      ),
    {
      retry: false,
      refetchOnWindowFocus: false,
      select: mapStoreData,
    }
  );

  return {
    ...data,
    error,
    loading: isLoading,
  };
};

export { useStoreData };
