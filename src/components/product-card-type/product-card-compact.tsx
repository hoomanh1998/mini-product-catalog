'use client';

import { ProductModel } from '@/models/product.model';
import Image from 'next/image';

interface ProductCardCompactProps {
  product: ProductModel;
}

export default function ProductCardCompact({
  product,
}: ProductCardCompactProps) {
  return (
    <div className="flex flex-row gap-x-3 items-start bg-background dark:bg-night border border-foreground/10 rounded-2xl p-5">
      <Image
        src={product.image_url}
        width={120}
        height={120}
        alt={`${product.name} image`}
        className="rounded-2xl mb-auto"
      />

      <div className="flex flex-col h-full w-2/3 gap-y-2 pl-3">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>

        <p className="font-medium line-clamp-2 text-sm text-gray-700 dark:text-gray-400">
          {product.description}
        </p>

        <span className="inline-block font-semibold text-gray-900 dark:text-white">
          {product.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </span>
      </div>
    </div>
  );
}
