export const fetchDistilleries = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/distilleries`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const parsedResponse = await response.json();
  return parsedResponse;
};