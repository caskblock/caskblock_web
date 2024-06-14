import React from "react";
import Attribute from "./Attribute";

const tokenWarrantLink = (productType) => {
  return productType === 'Cask'
    ? 'https://ipfs.io/ipfs/Qmdz89KUWPVPB4CiSq3za1dat6fEYc2CBvfRE3DWQrnJoA'
    : 'https://ipfs.io/ipfs/QmbJBxMKBaUhjN19dpey8hCR627mQhbaDQHz4GHbQ6W9F4';
}

const SingleItem = ({ data, onClick }) => {
  const {
    media, title, description, price, issuedCount, copies, distillerySlug,
    productType, country, brand, cask, style, alcohol, volume
  } = data;

  const availableAmount = issuedCount ? copies - issuedCount : copies;
  const isSoldOut = availableAmount <= 0;

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
      <div className="space-y-8 lg:space-y-10">
        <div className="overflow-hidden z-0">
          <img
            className="rounded-3xl"
            src={media}
            style={{
              objectFit: "cover",
              height: "auto",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
          <div className="w-full space-y-2.5 mt-4">
          { country && <Attribute label="Country" value={country} />}
          { brand && <Attribute label="Brand" value={brand} />}
          { cask && <Attribute label="Cask" value={cask} />}
          { style && <Attribute label="Style" value={style} />}
          { alcohol && <Attribute label="Alcohol" value={alcohol} />}
          { volume && <Attribute label="Volume" value={volume} />}
          </div>
        </div>
      </div>
      <div className="pb-9 space-y-5">
        { distillerySlug &&
        <div className="rounded-3xl overflow-hidden z-0">
          <div className="flex justify-between items-center">
            <a
              className="transition-colors hover:text-white duration-300 inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-green-800 bg-green-100 hover:bg-green-800"
              href={`/distilleries/${distillerySlug}`}
            >
              {distillerySlug}
            </a>
          </div>
        </div>
        }
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          {title}
        </h2>
        <div className="pb-9 pt-14">
          <div className="flex-1 flex items-center p-6 border-2 active-price-light rounded-xl relative">
            <div className="flex items-center w-full">
              <span className="absolute bottom-full translate-y-1 py-1 px-1.5 bg-white text-sm text-neutral-500 ">
                Price
              </span>
              <span className="text-3xl xl:text-4xl font-semibold">
                {price} USDC
              </span>
            </div>
            {copies && (
              <p className="text-sm text-neutral-500">
                {availableAmount}/{copies}
              </p>
            )}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button
              id="buy-button"
              className={"primary-button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 bg-primary text-neutral-50 flex-1 focus:outline-none" + (isSoldOut ? " disabled" : "")}
              onClick={onClick}
              disabled={isSoldOut}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M2.5 12.4101V7.8401C2.5 6.6501 3.23 5.59006 4.34 5.17006L12.28 2.17006C13.52 1.70006 14.85 2.62009 14.85 3.95009V7.75008"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7 12H14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="ml-2.5">Buy Now</span>
            </button>
          </div>

          <div class="mt-8 w-2d4 w-full border-b border-neutral-100"></div>

          <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            { description }

          </div>

          <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <a id="token-warrant" className="px-4 py-3 rounded-full text-sm text-neutral-500" href={tokenWarrantLink(productType)} target="_blank" rel="noreferrer">
              Token Warrant ↗
            </a>
          </div>


        </div>
      </div>
    </div>
  );
};

export default SingleItem;
