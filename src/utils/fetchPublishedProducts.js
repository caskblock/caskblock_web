export const fetchPublishedProducts = async (distillerySlug) => {
  const publishedProducts = await fetchPublishedProductsData(distillerySlug);
  const productsWithIssuedAmount = await fetchIssuedAmount(publishedProducts);

  // const outOfStockProducts = productsWithIssuedAmount.filter((product) => product.issuedCount >= product.copies);
  // const filteredProducts = productsWithIssuedAmount.filter((product) => !outOfStockProducts.includes(product));

  return productsWithIssuedAmount;
};

const fetchPublishedProductsData = async (distillerySlug) => {
  const params = distillerySlug ? `/${distillerySlug}` : "";
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/products${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const parsedResponse = await response.json();
  return parsedResponse;
};

const fetchIssuedAmount = async (publishedProducts) => {
  const contractNfts = await fetchContractNfts();
  const issuedCount = getIssuedCount(contractNfts);

  for (const product of publishedProducts) {
    product.issuedCount = issuedCount[product.title] || 0;
  }

  return publishedProducts;
};

const fetchContractNfts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "mb-api-key": process.env.NEXT_PUBLIC_MB_API_KEY,
    },
    body: JSON.stringify({
      query: `query MyQuery {
          mb_views_nft_tokens(
            where: {_and: [{nft_contract_id: {_eq: "${process.env.NEXT_PUBLIC_PWX_STORE}"}}]}
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

const getIssuedCount = (contractNfts) => {
  const nfts = contractNfts.data.mb_views_nft_tokens;
  const titleCounts = {};

  nfts.forEach(nft => {
      const { title } = nft;
      if (titleCounts[title]) {
          titleCounts[title]++;
      } else {
          titleCounts[title] = 1;
      }
  });

  return titleCounts
};
