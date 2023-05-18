"use client";
export const apiService = async (endpoint: string, payload?: any) => {
  // temp hard code base url
  // const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL as string;
  const baseURL = "https://api.dalan.capital/v1";

  const res = await fetch(baseURL + endpoint, payload);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log(res);
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
