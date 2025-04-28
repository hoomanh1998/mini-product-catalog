"use server";

import Input from "@/ui/input";
import UploadImageInput from "@/ui/upload-image-input";
import { create_product } from "app/admin/actions";
import SubmitButton from "./submit-button";

export default async function CreateProductForm() {
  return (
    <form
      action={create_product}
      className="flex flex-col bg-[var(--secondary)] text-foreground gap-4 p-10 w-md"
    >
      <h1 className="text-2xl font-bold">Create New Product</h1>

      <div className="flex flex-col gap-y-3 mt-2">
        <Input id="name" name="name" type="text" label="name" required />
        <Input
          id="description"
          name="description"
          type="text"
          label="description"
          required
        />
        <Input
          id="price"
          name="price"
          type="number"
          label="price"
          step="any"
          required
        />
        <UploadImageInput id="image_url" name="image_url" />
      </div>

      <SubmitButton />
    </form>
  );
}
