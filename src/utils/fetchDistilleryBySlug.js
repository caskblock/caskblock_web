export const fetchDistilleryBySlug = async (distillerySlug) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/distilleries/${distillerySlug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const parsedResponse = await response.json();
    return parsedResponse;
  }