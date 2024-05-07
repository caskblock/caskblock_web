export const fetchNftsInWallet = async (activeAccountId) => {
    return fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
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
  };