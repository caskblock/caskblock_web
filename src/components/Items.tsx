import {
  MbDropdownMenu,
  MbMenuWrapper,
} from "mintbase-ui";
import { useState } from "react";
import { useStoreData } from "../hooks/useStoreData";
import { useStoreNfts } from "../hooks/useStoreNfts";
import { Store } from "../types/types";
import { LoadingItem } from "./LoadingItem";
import { StoreNftsData } from "@mintbase-js/data/lib/api/storeNfts/storeNfts.types";
import { Item } from "./Item";
import { resetUrlParams } from "@/utils/resetUrlParams";

function Items({
  showModal,
  metadataId,
}: {
  showModal: (item: StoreNftsData) => void;
  metadataId: string;
}): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState("");

  const { nftsData, loading } = useStoreNfts(selectedStore);
  const { stores } = useStoreData();

  // show store names in the dropdown menu
  const storeTabs = stores?.map((store: Store) => ({
    content: <span>{store.name}</span>,
    onClick: () => setSelectedStore(store.id),
  }));

  // add 'all stores' to the beginning of the dropdown menu
  storeTabs?.unshift({
    content: <span>All Stores</span>,
    onClick: () => setSelectedStore(""),
  });

  if (metadataId) {
    const item = nftsData?.find((item: StoreNftsData) => item.metadata_id === metadataId);
    if (item) {
      showModal(item);
      resetUrlParams();
    }
  }

  return (
    <div className="w-full items-center">
      <div className="flex w-full gap-4 items-center justify-end">
        <MbMenuWrapper setIsOpen={setMenuOpen}>
          <div className="blocktext-right">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              onKeyDown={() => setMenuOpen(!menuOpen)}
              className="dropdown-button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium pl-4 py-2.5 sm:pl-6 primary-button bg-primary text-neutral-50 w-auto !pr-16">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 mr-2" viewBox="0 0 24 24" fill="none">
                  <path d="M14.3201 19.07C14.3201 19.68 13.92 20.48 13.41 20.79L12.0001 21.7C10.6901 22.51 8.87006 21.6 8.87006 19.98V14.63C8.87006 13.92 8.47006 13.01 8.06006 12.51L4.22003 8.47C3.71003 7.96 3.31006 7.06001 3.31006 6.45001V4.13C3.31006 2.92 4.22008 2.01001 5.33008 2.01001H18.67C19.78 2.01001 20.6901 2.92 20.6901 4.03V6.25C20.6901 7.06 20.1801 8.07001 19.6801 8.57001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.07 16.52C17.8373 16.52 19.27 15.0873 19.27 13.32C19.27 11.5527 17.8373 10.12 16.07 10.12C14.3027 10.12 12.87 11.5527 12.87 13.32C12.87 15.0873 14.3027 16.52 16.07 16.52Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19.87 17.12L18.87 16.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                {selectedStore === ""
                  ? "All Stores"
                  : stores?.find(
                      (store: Store) => store.id === selectedStore
                    )?.name}
                  <span className="absolute top-1/2 -translate-y-1/2 right-5">
                    {menuOpen ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5 rotate-180">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>}
                  </span> 
            </button>
          </div>
              
          <MbDropdownMenu
            className="dropdown-menu"
            items={storeTabs || []}
            isOpen={menuOpen}
          />
        </MbMenuWrapper>
      </div>

      {/** grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10  mt-8 lg:mt-10">
        {loading ? (
          <LoadingItem />
        ) : (
          nftsData?.map((nft: StoreNftsData) => (
            <Item key={nft.metadata_id} item={nft} showModal={showModal} />
          ))
        )}
      </div>
    </div>
  );
}

export default Items;
