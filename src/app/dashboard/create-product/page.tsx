import { Metadata } from "next";
import CreateProductForm from "@/components/create-product-form";

export const metadata: Metadata = {
  title: "Dashboard - Add New Product",
};

export default function CreateProductPage() {
  return <CreateProductForm />;
}
