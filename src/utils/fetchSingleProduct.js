export const fetchSingleProduct = async (id) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/product/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  };