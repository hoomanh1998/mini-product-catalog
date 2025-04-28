import { Metadata } from "next";
import HomePageClient from "./home-client";
import { get_products_list } from "@/services/products/loaders";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const products_list = await get_products_list();

  return <HomePageClient products_list={products_list} />;
}
