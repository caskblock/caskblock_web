export const fetchProducts = async () => {
    return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/products`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  };