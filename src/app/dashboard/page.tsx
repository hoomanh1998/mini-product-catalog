import AddNewProductButton from "@/components/add-new-product-button";
import ProductsListTable from "@/components/products-list-table";
import EmptyProudctList from "@/ui/empty-products-list";
import HeaderTitle from "@/ui/header-title";
import { get_products_list } from "@/services/products/loaders";
import { Metadata } from "next";
import EditProductForm from "@/components/edit-product-form";
import CreateProductForm from "@/components/create-product-form";
import { Modal } from "@/components/modal";

export const metadata: Metadata = {
  title: "Dashboard",
};

type DashboardPageProps = {
  searchParams: Promise<Record<string, string>> | undefined;
};

export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  const products_list = await get_products_list();
  const show_modal = (await searchParams)?.show_modal;
  const product_id = (await searchParams)?.product_id;

  return (
    <>
      <HeaderTitle title="dashboard" />

      {products_list && products_list.length === 0 && (
        <EmptyProudctList
          message="No products found. Please add a new product."
          className="mt-5"
        />
      )}

      {products_list && products_list.length > 0 && (
        <section>
          <ProductsListTable products={products_list} />
        </section>
      )}

      {show_modal === "edit" && (
        <Modal>
          <EditProductForm product_id={product_id ?? ""} />
        </Modal>
      )}

      {show_modal === "add" && (
        <Modal>
          <CreateProductForm />
        </Modal>
      )}

      <AddNewProductButton />
    </>
  );
}
