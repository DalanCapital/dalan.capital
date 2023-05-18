"use client";
import { werify } from "@werify/id-ts";

export const authService = async () => {
  // temp hard code base url
  // const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL as string;
  const baseURL = "https://api.dalan.capital/v1";

  const auth = werify();
  auth.config.baseURL = baseURL;
  return { auth };
};
