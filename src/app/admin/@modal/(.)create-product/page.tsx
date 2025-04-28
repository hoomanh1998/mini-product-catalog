import CreateProductForm from "@/components/create-product-form";
import { Modal } from "@/components/modal";

export default async function CreateProductPageModal() {
  return (
    <Modal>
      <CreateProductForm />
    </Modal>
  );
}
