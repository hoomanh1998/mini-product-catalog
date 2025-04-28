"use client";

import clsx from "clsx";
import { ProductCardType } from "@/models/product.model";

interface ProductCardTypeContainerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  product_type: ProductCardType;
}

export default function ProductCardTypeContainerButton({
  label,
  product_type,
  className,
  ...props
}: ProductCardTypeContainerButtonProps) {
  const is_button_active = product_type === label;

  const button_classes = clsx(
    "px-8 py-2 capitalize font-semibold transition-colors cursor-pointer",
    className,
    {
      "bg-yellow dark:bg-night text-white": is_button_active,
    }
  );

  return (
    <button className={button_classes} {...props}>
      {label}
    </button>
  );
}
