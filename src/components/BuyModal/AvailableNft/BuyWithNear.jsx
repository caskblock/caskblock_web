// import { useMbWallet } from "@mintbase-js/react";
// import { TransactionSuccessEnum, buy, execute, } from "@mintbase-js/sdk";
// import {
//   MbInfoCard,
//   MbText,
// } from "mintbase-ui";

// import { nearToYocto } from "@/utils/numbers";
// import { MAINNET_CONFIG } from "../../../config/constants";
// import { useNearPrice } from "../../../hooks/useNearPrice";
// import { useEffect, useState } from "react";

// const BuyWithNear = ({data}) => {

//   const {
//     amountAvailable,
//     marketId,
//     nftContractId,
//     price,
//     tokenId,
//     tokensTotal,
//   } = data;

//   const [ownedTokens, setOwnedTokens] = useState([]);
//   const { selector, activeAccountId } = useMbWallet();

//   useEffect(() => {
//     const fetchInitialOwnedNfts = async () => {
//       const tokens = await fetchOwnedNfts(activeAccountId || "", nftContractId || "");
//       setOwnedTokens(tokens);
//     };
//     fetchInitialOwnedNfts();
//   }, []);

//   const message = `${amountAvailable} of ${tokensTotal} Available`;
//   // state to check the price x amount according to user interaction

//   const nearPrice = useNearPrice();

//   const callback = {
//     type: TransactionSuccessEnum.MAKE_OFFER,
//     args: {
//       tokenId,
//       price: nearToYocto(price?.toString()),
//     },
//   };

//   const singleBuy = async () => {
//     const wallet = await selector.wallet();

//     if (tokenId) {
//       const executionOutcome = await execute(
//         { wallet, callbackArgs: callback },
//         {
//           ...buy({
//             contractAddress: nftContractId,
//             tokenId,
//             affiliateAccount:
//               process.env.NEXT_PUBLIC_AFFILIATE_ACCOUNT ||
//               MAINNET_CONFIG.affiliate,
//             marketId,
//             price: nearToYocto(price?.toString()) || "0",
//           }),
//         }
//       );

//       for (let i = 0; i < 10; i++) {
//         setTimeout(() => logResult(executionOutcome), i * 10000);
//       }

//       await fetchOwnedNfts(wallet.id, nftContractId || "");
        
//       return executionOutcome;
//     }
//   };

//   const logResult = (executionOutcome) => {
//     console.log(executionOutcome);
//   }

//   // const fetchOwnedNfts = async (ownerId: string, contractAddress: string) => {
  
//   //   const { data, error } = await ownedNftsByStore(ownerId, contractAddress, { limit: 10, offset: 0 }, 'testnet');
  
//   //   if (error) {
//   //     console.log('Error fetching owned NFTs:', error);
//   //     return [];
//   //   }
  
//   //   return data?.token || [];
//   // };

//     return (
//       <div className="mt-2">
//         <div className="bg-gray-50 py-4 text-center">
//           <MbText className="p-med-90 text-gray-700">
//             <span className="p-med-130 text-black">{message}</span>
//           </MbText>
//         </div>
//         <div className="py-2">
//           <div className="mb-8">
//             <MbInfoCard
//               boxInfo={{
//                 description: `${price?.toFixed(2)} N`,
//                 title: "Price",
//                 lowerLeftText: `~ ${(
//                   Number(nearPrice) * Number(price)
//                 ).toFixed(2)} USD`,
//               }}
//             />
//           </div>
//           <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
//             <button onClick={singleBuy} className="primary-button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  bg-primary text-neutral-50 flex-1 focus:outline-none">Buy with NEAR</button>
//           </div>
//         </div>
//       </div>
//     );
// }