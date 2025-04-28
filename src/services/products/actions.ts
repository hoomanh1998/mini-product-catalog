"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Routes } from "@/constants/routes.constant";

export async function create_product(formData: FormData) {
  const supabase = await createClient();

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const image_url = await upload_image(formData);

  if (!name || !description || isNaN(price) || !image_url) {
    throw new Error("Invalid form data");
  }

  const { error } = await supabase.from("Products").insert([
    {
      name,
      description,
      price,
      image_url,
    },
  ]);

  if (error) {
    throw new Error(error.message);
  }

  console.log("Product created successfully!");

  revalidatePath(Routes.Dashboard);
  redirect(Routes.Dashboard);
}

export async function delete_product(product_id: number) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("Products")
    .delete()
    .eq("id", product_id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath(Routes.Dashboard);
}

export async function update_product(formData: FormData) {
  const supabase = await createClient();

  const product_id = parseInt(formData.get("id") as string);
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const image = formData.get("image_url") as File;
  let image_url: File | string | undefined = undefined;

  const { data: product } = await supabase
    .from("Products")
    .select("image_url")
    .eq("id", product_id)
    .single();

  console.log("image", image);

  if (image && image.size > 0) {
    image_url = await upload_image(formData);
  } else {
    image_url = product?.image_url;
  }

  if (!product_id || !name || !description || isNaN(price)) {
    throw new Error("Invalid form data");
  }

  console.log("data", {
    name,
    description,
    price,
    image_url,
  });

  const { error } = await supabase
    .from("Products")
    .update({
      name,
      description,
      price,
      image_url,
    })
    .eq("id", product_id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath(Routes.Dashboard);
  redirect(Routes.Dashboard);
}

export async function upload_image(formData: FormData) {
  const image_file = formData.get("image_url") as File;
  if (!image_file) throw new Error("No image_file provided");

  const supabase = await createClient();

  const image_file_ext = image_file.name.split(".").pop();
  const image_file_name = `${Date.now()}.${image_file_ext}`;
  const image_file_path = `public/${image_file_name}`;

  const { error } = await supabase.storage
    .from("product-images")
    .upload(image_file_path, image_file, {
      contentType: image_file.type,
    });

  if (error) {
    throw new Error(error.message);
  }

  const { data } = supabase.storage
    .from("product-images")
    .getPublicUrl(image_file_path);

  return data.publicUrl;
}
