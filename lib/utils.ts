import { clsx, type ClassValue } from "clsx"
import { cache } from "react";
import { twMerge } from "tailwind-merge"
import { getProductFromServerById } from "./appwrite/actions/products-server";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const parseStringify = (value: unknown) => JSON.parse(JSON.stringify(value));


// categories
export const CATEGORIES: {
  [key: string]: string;
} = {
  electronics: 'لوازم الکترونیکی',
  clothing: 'پوشاک و مد',
  book: 'کتاب و لوازم تحریر',
  shoes: 'کفش',
}


// API functions
export const getProduct = cache(async (productId: string) => {
  const product = await getProductFromServerById(productId);

  return product;
})