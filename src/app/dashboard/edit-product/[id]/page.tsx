import { Metadata } from "next";
import EditProductForm from "@/components/edit-product-form";

export const metadata: Metadata = {
  title: "Dashboard - Edit Product",
};

type EditProductPageProps = {
  searchParams: Promise<Record<string, string>> | undefined;
};

export default async function EditProductPage({
  searchParams,
}: EditProductPageProps) {
  const product_id = (await searchParams)?.product_id;

  return <EditProductForm product_id={product_id ?? ""} />;
}
