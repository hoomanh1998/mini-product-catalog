import Input from "@/ui/input";
import UploadImageInput from "@/ui/upload-image-input";
import SubmitButton from "@/components/submit-button";
import { update_product } from "../../actions";
import { get_product_by_id } from "app/admin/loaders";

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = await get_product_by_id(parseInt(id));

  return (
    <form
      action={update_product}
      className="flex flex-col bg-[var(--secondary)] text-foreground gap-4 w-md mx-auto"
    >
      <h1 className="text-2xl font-bold">Edit Product</h1>

      <input type="hidden" name="id" value={product.id} />

      <div className="flex flex-col gap-y-3 mt-2">
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
          step="any"
          label="price"
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
