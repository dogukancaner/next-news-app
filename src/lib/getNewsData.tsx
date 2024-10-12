export const getNewsData = async () => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!url || !apiKey) {
    throw new Error("API URL or API key is missing");
  }

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store" as RequestCache,
  };

  const response = await fetch(
    `${url}?access_key=${apiKey}&countries=tr&language=tr`,
    options
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};
