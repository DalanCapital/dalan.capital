"use client";
export const apiService = async (endpoint: string, payload?: any) => {
  // temp hard code base url
  // const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL as string;
  const baseURL = "https://api.dalan.capital/v1";

  return await fetch(baseURL + endpoint, payload).then(async (response) => {
    if (response.ok) {
      return await response.json();
    } else {
      const res = await response.json();
      throw new Error(res.message);
    }
  });
};
