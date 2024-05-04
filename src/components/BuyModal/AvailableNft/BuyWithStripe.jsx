// "use client";

// import { useMbWallet, useNearPrice } from "@mintbase-js/react";

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// import { useEffect, useState } from "react";
// import { mint } from "@mintbase-js/sdk";
// import CreditCardForm from "./CreditCardForm";
// import { LoadingSaleCard } from "../../LoadingSaleCard";


// const BuyWithStripe = ({item}) => {

//   const {media, nft_contract_id, price, reference} = item;

//   const [clientSecret, setClientSecret] = useState("");

//   const { activeAccountId } = useMbWallet();
//   const nearPrice = useNearPrice();

//   if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
//     throw 'Did you forget to add a ".env.local" file?';
//   }

//   const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  
//   const createPaymentIntent = async () => {

//     // const nearPriceValue: number = Number(nearPrice.nearPrice);
//     // const itemPriceValue: number = Number(parseYactoToNear(Number(price)));
//     // const usdPrice = Number(nearPriceValue * itemPriceValue).toFixed(2) * 1000;
//     const usdPrice = 600 * 1000;
    
//     try {
//       const resp = await fetch(
//         "https://stripe2near-z3w7d7dnea-ew.a.run.app/payment-intent",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             priceUsd: usdPrice,
//             action: mint({
//               metadata: {
//                 reference: "OphK0Eo8Dx1Z15RpiK6KP7-fQe9b7RLGNBtnCaGaP3k",
//                 media: media,
//               },
//               ownerId: activeAccountId,
//               contractAddress: nft_contract_id,
//             }),
//           }),
//         }
//       );
      
//       if (resp.ok) {
//         const json = await resp.json();
//         console.log(json.clientSecret)
//         setClientSecret(json.clientSecret);
//       }
//     } catch (error) {
//       console.log(error)
//     }

//   };

//   useEffect(() => {
//     createPaymentIntent()
//   }, []);

//     return (
//       <>
//         {clientSecret ?
//           <Elements
//             options={{
//               clientSecret,
//               appearance: { theme: "night" },
//             }}
//             stripe={stripe}
//           >
//             <CreditCardForm />
//           </Elements>
//           :
//           <LoadingSaleCard />
//         }
//       </>
//     );
// }

// export default BuyWithStripe;