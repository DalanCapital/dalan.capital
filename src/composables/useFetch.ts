"use client";
export const useFetch = async (endpoint: string, payload?: any) => {
  const baseUrl = process.env.API_BASE_URL;
  const res = await fetch(baseUrl + endpoint, payload);
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
