import CreateProductForm from "@/components/create-product-form";
import { Modal } from "@/components/modal";

export default async function EditProductPageModal() {
  return (
    <Modal>
      <CreateProductForm />
    </Modal>
  );
}
