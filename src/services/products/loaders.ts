"use server";

import { createClient } from "@/utils/supabase/server";
import { ProductModel } from "@/models/product.model";

export async function get_products_list(): Promise<ProductModel[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("Products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error || !data) {
    throw new Error("Product not found");
  }

  return data;
}

export async function get_product_by_id(
  product_id: number
): Promise<ProductModel> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("Products")
    .select("*")
    .eq("id", product_id)
    .single();

  if (error || !data) {
    throw new Error("Product not found");
  }

  return data;
}
