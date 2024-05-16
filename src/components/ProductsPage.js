"use client";

import { useEffect, useState } from "react";

import BuyModal from "./BuyModal";
import Items from "./Items";
import { fetchPublishedProducts } from "@/utils/fetchPublishedProducts";

const ProductsPage = ({ id = "" }) => {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [nftsData, setNftsData] = useState([]);
  const [distilleries, setDistilleries] = useState([]);
  const [distillerySlug, setDistillerySlug] = useState(id);

  const handleOpenBuyModal = (item) => {
    setSelectedItem(item);
    setShowBuyModal(true);
  };

  const handleCloseBuyModal = () => {
    setSelectedItem({});
    setShowBuyModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {

        if (distillerySlug === "" && window.location.pathname.includes("distilleries")) {
          window.history.replaceState(null, "", "/products");
        } 

        const products = await fetchPublishedProducts(distillerySlug);
        
        setNftsData(products);
        if (products.length > 0) setDistilleries([...new Set(products.map((item) => item.distillerySlug))]);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    };

    fetchData();
  }, [distillerySlug]);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-6 lg:space-y-0 lg:space-x-2 ">
        <nav
          className="nc-Nav relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar"
          data-nc-id="Nav"
        >
          <ul className="flex  sm:space-x-2">
            <li className="relative" id="distilleryNavItem">
              <button
                className={`${
                  distillerySlug === "" ? "selected" : ""
                } block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full focus:outline-none`}
                onClick={() => setDistillerySlug("")}
              >
                All Distilleries
              </button>
            </li>
            {distilleries.map((distillery, index) => (
              <li key={index} className="relative" id="distilleryNavItem">
                <button
                  className={`${
                    distillerySlug === distillery ? "selected" : ""
                  } block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full focus:outline-none`}
                  onClick={() => setDistillerySlug(distillery)}
                >
                  {distillery}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex w-full">
        <Items data={nftsData} showModal={handleOpenBuyModal} />
      </div>

      <div className="mx-24 mt-4">
        {!!showBuyModal && (
          <BuyModal
            closeModal={handleCloseBuyModal}
            metadataId={selectedItem?.metadataId}
            price={selectedItem?.price}
          />
        )}
      </div>
    </>
  );
};

export default ProductsPage;
