import ProductCard from "@/components/product-card";
import { createClient } from "@/utils/supabase/server";

export default async function Products() {
  const supabase = await createClient();
  const { data: products } = await supabase.from("Products").select("*");

  return (
    <div className="flex flex-col items-center max-w-3xl justify-center p-5 mx-auto">
      <h1 className="text-2xl font-bold mr-auto">Products List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} card_type="default" />
        ))}
      </div>
    </div>
  );
}
