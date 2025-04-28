"use client";

import { ProductCardType } from "@/models/product.model";
import { create } from "zustand";

type ProductCardTypeStoreStates = {
  product_card_type: ProductCardType;
  set_product_card_type: (type: ProductCardType) => void;
};

export const use_product_card_type_store = create<ProductCardTypeStoreStates>(
  (set) => ({
    product_card_type: ProductCardType.Default,
    set_product_card_type: (type) => set(() => ({ product_card_type: type })),
  })
);
