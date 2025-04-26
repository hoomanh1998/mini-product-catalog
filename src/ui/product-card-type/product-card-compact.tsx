import { ProductModel } from "app/products/product.model";
import Image from "next/image";

interface ProductCardCompactProps {
  product: ProductModel;
}

export default function ProductCardCompact({
  product,
}: ProductCardCompactProps) {
  return (
    <div className="flex flex-row gap-x-3 items-center max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 p-3 cursor-pointer">
      <Image
        src={product.image_url}
        width={300}
        height={300}
        alt={`${product.name} image`}
        className="w-1/3 rounded-2xl mb-auto"
      />

      <div className="w-2/3 border-l border-gray-200 pl-5">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>

        <p className="mb-3 font-medium text-sm text-gray-700 dark:text-gray-400">
          {product.description}
        </p>

        <span className="font-semibold text-gray-900 dark:text-white">
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </div>
    </div>
  );
}
