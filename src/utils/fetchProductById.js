export const fetchProductById = async (id) => {

    const product = await fetchProduct(id);
    const productWithIssuedAmount = await fetchIssuedAmount(product);

    return productWithIssuedAmount
  };

  const fetchProduct = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/product/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const parsedResponse = await response.json();
    return parsedResponse;
  }

  const fetchIssuedAmount = async (product) => {
    const contractNfts = await fetchContractNfts(product);
    const issuedCount = contractNfts.data.mb_views_nft_tokens.length;

    product.issuedCount = issuedCount || 0;

    return product;
  }

  const fetchContractNfts = async (product) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "mb-api-key": process.env.NEXT_PUBLIC_MB_API_KEY,
      },
      body: JSON.stringify({
        query: `query MyQuery {
            mb_views_nft_tokens(
              where:
              {_and:
                [
                  {nft_contract_id: {_eq: "${process.env.NEXT_PUBLIC_PWX_STORE}"}},
                  {title: {_eq: "${product.title}"}}
                ]
              }
              order_by: {metadata_id: desc}
            ) {
              title
            }
          }`,
      }),
    });

    const parsedResponse = await response.json();
    return parsedResponse;
  };
