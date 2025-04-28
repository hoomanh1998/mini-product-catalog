"use client";

import { ProductModel } from "@/models/product.model";
import Image from "next/image";

interface ProductCardDefaultProps {
  product: ProductModel;
}

export default function ProductCardDefault({
  product,
}: ProductCardDefaultProps) {
  return (
    <div className="flex flex-col gap-y-3 items-center bg-background dark:bg-night border border-foreground/10 rounded-2xl p-5">
      <Image
        src={product.image_url}
        width={250}
        height={250}
        priority
        alt={`${product.name} image`}
        className="aspect-square object-fill rounded-2xl"
      />

      <div className="flex flex-col h-full w-full gap-y-2 p-1.5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>

        <p className="font-medium line-clamp-3 text-sm text-gray-700 dark:text-gray-400">
          {product.description}
        </p>

        <span className="font-semibold text-gray-900 dark:text-white ml-auto mt-auto">
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </div>
    </div>
  );
}
