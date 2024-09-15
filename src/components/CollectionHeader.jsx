"use client";

import Image from "next/image";

const labels = {
  collectionName: "Connect with Premium Distilleries",
  collectionDescription: "Discover and engage directly with the finest distilleries to find premium whisky casks and bottle collections.",
};

const CollectionHeader = ({ casks = [], bottles = [] }) => {

  const minCaskPrice = Math.min(...casks.map((item) => item.price));
  const minBottlePrice = Math.min(...bottles.map((item) => item.price));

  return (
    <div id="collection-header" className="w-full">
        <div className="relative w-full h-40 md:h-60 2xl:h-72">
          <div className="absolute inset-0">
            <Image
              className="object-cover"
              sizes="100vw"
              src={"/banner-collection.jpg"}
              fill
            />
          </div>
        </div>
        <div className="relative -mt-14 lg:-mt-20 px-2 sm:px-8 md:px-24">
          <div className=" bg-white border p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-xl flex flex-col md:flex-row lg:items-center">
            <div className="hidden flex flex-col sm:flex-row md:block sm:items-start sm:justify-between">
              <div className="w-40 sm:w-48 md:w-56 xl:w-60">
                <div className="aspect-w-1 aspect-h-1 relative rounded-3xl overflow-hidden z-0">
                  <Image
                    className="object-cover"
                    sizes="300px"
                    width={300}
                    height={300}
                    src={"/collection-nft.jpg"}
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:ml-8 xl:ml-14 flex-grow">
              <div className="max-w-screen-sm ">
                <h2 className="inline-block text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  { labels.collectionName }
                </h2>
                <span className="block mt-4 text-sm text-neutral-500 ">
                  { labels.collectionDescription }
                </span>
              </div>
              <div className="mt-6 xl:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 xl:gap-6">
                {/* ----- Cask floor price ----- */}
                <div className="bg-[#88D9C5] rounded-2xl flex flex-col items-center justify-center p-5 lg:p-6">
                  <span className="text-md text-[#5A2660]">
                    Cask floor price
                  </span>
                  <span className="font-large text-base font-bold mt-2 sm:text-xl sm:mt-2 text-[#5A2660]">
                    { minCaskPrice } USDC
                  </span>
                </div>
                {/* ----- Bottle floor price ----- */}
                <div className="bg-[#EFD6D3] rounded-2xl flex flex-col items-center justify-center p-5 lg:p-6">
                  <span className="text-md text-[#5A2660]">
                    Bottle floor price
                  </span>
                  <span className="font-large text-base font-bold mt-2 sm:text-xl sm:mt-2 text-[#5A2660]">
                    { minBottlePrice } USDC
                  </span>
                </div>
                {/* ----- Available bottles ----- */}
                <div className="bg-[#EE7C71] rounded-2xl flex flex-col items-center justify-center p-5 lg:p-6">
                  <span className="text-md text-[#EFD6D3]">
                    Available Bottles
                  </span>
                  <span className="font-large text-base font-bold mt-2 sm:text-xl sm:mt-2 text-[#EFD6D3]">
                    { bottles.length }
                  </span>
                </div>
                {/* ----- Available casks ----- */}
                <div className="bg-[#5A2660] rounded-2xl flex flex-col items-center justify-center p-5 lg:p-6">
                  <span className="text-md text-[#EFD6D3]">
                    Available Casks
                  </span>
                  <span className="font-large text-base font-bold mt-2 sm:text-xl sm:mt-2 text-[#EFD6D3]">
                    { casks.length }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default CollectionHeader;
