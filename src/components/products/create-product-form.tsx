'use client';

import Input from '@/ui/input/input';
import UploadImageInput from '@/ui/upload-image-input';
import { create_product } from '@/services/products/actions';
import HeaderTitle from '@/ui/header-title/header-title';
import SubmitButton from '../submit-button/submit-button';

export default function CreateProductForm() {
  return (
    <form
      action={create_product}
      className="flex flex-col bg-[var(--secondary)] text-foreground gap-4 w-md mx-auto"
    >
      <HeaderTitle title="create new product" />

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
