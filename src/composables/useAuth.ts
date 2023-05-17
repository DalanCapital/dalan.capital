"use client";
import { werify } from "@werify/id-ts";

export const useAuth = async () => {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

  const auth = werify();
  auth.config.baseURL = baseURL;
  return { auth };
};
