"use server";

import Input from "@/ui/input";
import UploadImageInput from "@/ui/upload-image-input";
import { update_product } from "@/services/products/actions";
import SubmitButton from "./submit-button";
import HeaderTitle from "@/ui/header-title";
import { get_product_by_id } from "@/services/products/loaders";

interface EditProductFormProps {
  product_id: string;
}

export default async function EditProductForm({
  product_id,
}: EditProductFormProps) {
  const product = await get_product_by_id(parseInt(product_id));

  return (
    <form
      action={update_product}
      className="flex flex-col bg-[var(--secondary)] text-foreground gap-4 w-md mx-auto"
    >
      <HeaderTitle title="edit product" />

      <div className="flex flex-col gap-y-3">
        <Input type="hidden" name="id" value={product.id} required />
        <Input
          id="name"
          name="name"
          type="text"
          label="name"
          defaultValue={product.name}
          required
        />
        <Input
          id="description"
          name="description"
          type="text"
          label="description"
          defaultValue={product.description}
          required
        />
        <Input
          id="price"
          name="price"
          type="number"
          label="price"
          step="any"
          defaultValue={product.price}
          required
        />
        <UploadImageInput
          id="image_url"
          name="image_url"
          defaultValue={product.image_url}
        />
      </div>

      <SubmitButton />
    </form>
  );
}
