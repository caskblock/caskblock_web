"use client";

import { shippingData } from "./shippingData";
import ShippingSection from "./ShippingSection";

const Shipping = () => {
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-3xl font-bold mb-8">Shipping Information</h2>


      <div className="page-section mb-8">
      <h3 className="text-xl mb-4 font-bold">Overview</h3>
      Your order may be subject to local taxes and duties upon arrival in your country, which are levied once the package reaches your country. Any additional charges for customs clearance must be borne by you; we have no control over these charges and cannot predict what they may be. Customs policies vary widely from country to country, so you will need to contact your local customs office if you require further information.
      </div>

      { shippingData.map((item, index) => (
        <ShippingSection key={index} title={item.title} shipsTo={item.shipsTo} open={item.open}/>
      )) }


    </div>
  );
};

export default Shipping;
