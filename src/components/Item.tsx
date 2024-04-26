import { bigToNear } from "@/utils/numbers";
import { StoreNftsData } from "@mintbase-js/data/lib/api/storeNfts/storeNfts.types";
import { parseMedia } from "../utils";
import { getCachedImage } from "../utils/getCachedImages";


function Item({
  item,
  showModal,
}: {
  item: StoreNftsData;
  showModal: (item: StoreNftsData) => void;
}): JSX.Element {


  if (!item) {
    return <></>;
  }

  const { base_uri, media, price, title } = item;
  const { mediaUrl } = parseMedia(media, base_uri);

  return (
    <div 
      className="relative flex flex-col group !border-0 hover:bg-white hover:border-neutral-200 hover:shadow-md rounded-3xl"
      onClick={() => showModal(item)}
    >
      <div className="relative rounded-3xl w-full h-64 overflow-hidden">
          <img
            src={mediaUrl ? getCachedImage(mediaUrl) : ""}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
          />
      </div>
      <div className="p-4 py-5 space-y-3">
        <h2 className="text-lg font-medium">{title}</h2>
        <div className="w-2d4 w-full border-b border-neutral-100"></div>
        <div className="flex justify-between items-end">
          <div className="pt-3">
            <div className="flex items-baseline border-2 border-green-500 rounded-lg relative py-1.5 md:py-2 px-2.5 md:px-3.5 text-sm sm:text-base font-semibold">
              <span className="block absolute font-normal bottom-full translate-y-1 p-1 -mx-1 text-xs text-neutral-500 bg-white ">
                Price
              </span>
              <span className="text-green-500 !leading-none">
                {bigToNear(price?.toString() || "0")} NEAR
              </span>
            </div>
          </div>
          <div className="bg-black/50  flex items-center justify-center rounded-full text-white absolute bottom-6 right-4 !w-9 !h-9">
            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none">
              <path d="M12.53 20.4201H6.21C3.05 20.4201 2 18.3201 2 16.2101V7.79008C2 4.63008 3.05 3.58008 6.21 3.58008H12.53C15.69 3.58008 16.74 4.63008 16.74 7.79008V16.2101C16.74 19.3701 15.68 20.4201 12.53 20.4201Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19.52 17.0999L16.74 15.1499V8.83989L19.52 6.88989C20.88 5.93989 22 6.51989 22 8.18989V15.8099C22 17.4799 20.88 18.0599 19.52 17.0999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              </path>
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}

export { Item };
