"use client";
export const apiService = async (
  endpoint: string,
  headerOptions?: HeadersInit
) => {
  // temp hard code base url
  // const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL as string;
  const baseURL = "https://api.dalan.capital/v1";
  const token =
    typeof window !== "undefined"
      ? `Bearer ${
          JSON.parse(localStorage.getItem("user") as string).access_token
        }`
      : "";

  return await fetch(baseURL + endpoint, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    ...headerOptions,
  }).then(async (response) => {
    if (response.ok) {
      return await response.json();
    } else {
      const res = await response.json();
      throw new Error(res.message);
    }
  });
};
