import { fetchBurnWindows } from "./fetchBurnWindows";

export const fetchNftsInWallet = async (activeAccountId) => {
  const nftsInWallet = await getNftsInWallet(activeAccountId);
  const nftsInWalletWithBurnWindows = await getBurnWindows(nftsInWallet);
  
  return nftsInWalletWithBurnWindows;
};

const getNftsInWallet = async (activeAccountId) => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "mb-api-key": process.env.NEXT_PUBLIC_MB_API_KEY,
    },
    body: JSON.stringify({
      query: `query MyQuery {
        mb_views_nft_tokens(
          where: {_and: [{burned_timestamp: {_is_null: true}}, {owner: {_eq: "${activeAccountId}"}}, 
          {nft_contract_id: {_eq: "${process.env.NEXT_PUBLIC_PWX_STORE}"}}, {metadata_id: {_is_null: false}}]}
          limit: 30
          order_by: {last_transfer_timestamp: desc}
        ) {
          token_id
          nft_contract_id
          title
          description
          media
          last_transfer_receipt_id
        }
      }`,
    })
  });

  const parsedResponse = await response.json();  
  return parsedResponse?.data?.mb_views_nft_tokens || [];
};

const getBurnWindows = async (nftsInWallet) => {

  const tokenIds = nftsInWallet.map((nft) => nft.token_id);
  const metadataIds = [...new Set(tokenIds.map(item => parseInt(item.split(':')[0])))];
  
  const allProducts = await fetchBurnWindows(metadataIds);

  if (allProducts && allProducts.length > 0) {
    nftsInWallet.forEach(nft => {
      const nftMetadataId = parseInt(nft.token_id.split('.')[0]);
      const product = allProducts.find(product => parseInt(product.metadataId) === nftMetadataId);
      
      if (product) {
        nft.burnWindowStart = product.burnWindowStart;
        nft.burnWindowEnd = product.burnWindowEnd;
      }
    });
  }

  return nftsInWallet;
}