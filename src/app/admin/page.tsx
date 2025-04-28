import AddNewProductButton from "@/components/add-new-product-button";
import ProductsListTable from "@/components/products-list-table";
import { createClient } from "@/utils/supabase/server";

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: products } = await supabase.from("Products").select("*");

  return (
    <div className="w-4xl mx-auto">
      <h1 className="text-2xl font-bold mr-auto">Products List</h1>

      {products?.length === 0 ? (
        <p className="w-full p-10 border border-foreground/30 text-sm rounded-2xl mt-5">
          No products found. Please add a new product.
        </p>
      ) : (
        <ProductsListTable products={products ?? []} />
      )}
      <AddNewProductButton />
    </div>
  );
}
