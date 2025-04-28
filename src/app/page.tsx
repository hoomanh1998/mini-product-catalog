import ProductCard from "@/components/product-card";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: products } = await supabase.from("Products").select("*");

  return (
    <div className="flex flex-col w-4xl p-10 mx-auto">
      <h1 className="text-2xl font-bold mr-auto">Products List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} card_type="compact" />
        ))}
      </div>
    </div>
  );
}
