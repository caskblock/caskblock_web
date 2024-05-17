export const fetchBurnWindows = async (metadataIds) => {

  const queryParams = new URLSearchParams({ metadataIds }).toString();
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/products/burn_windows?${queryParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const parsedResponse = await response.json();
  return parsedResponse;
};