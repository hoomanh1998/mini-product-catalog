"use client";

import ProductCardTypeContainerButton from "./product-card-type-container-button";
import { use_product_card_type_store } from "@/store/product-card-type.store";
import { ProductCardType } from "@/models/product.model";

export default function ProductCardTypeContainer() {
  const { product_card_type, set_product_card_type } =
    use_product_card_type_store();

  return (
    <div className="flex flex-row rounded-xl border border-foreground/10 w-fit">
      <ProductCardTypeContainerButton
        label={ProductCardType.Default}
        product_type={product_card_type}
        onClick={() => set_product_card_type(ProductCardType.Default)}
        className="rounded-l-xl"
      />
      <ProductCardTypeContainerButton
        label={ProductCardType.Compact}
        product_type={product_card_type}
        onClick={() => set_product_card_type(ProductCardType.Compact)}
        className="rounded-r-xl border-l border-foreground/10"
      />
    </div>
  );
}
