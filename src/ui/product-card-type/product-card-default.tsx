import { ProductModel } from "app/products/product.model";
import Image from "next/image";

interface ProductCardDefaultProps {
  product: ProductModel;
}

export default function ProductCardDefault({
  product,
}: ProductCardDefaultProps) {
  return (
    <div className="flex flex-col gap-y-3 items-center max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 p-3 cursor-pointer">
      <Image
        src={product.image_url}
        width={300}
        height={300}
        priority
        alt={`${product.name} image`}
        className="rounded-2xl"
      />

      <div className="flex flex-col w-full p-1.5 mt-auto">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>

        <p className="mb-3 font-medium text-sm text-gray-700 dark:text-gray-400">
          {product.description}
        </p>

        <span className="font-semibold text-gray-900 dark:text-white ml-auto">
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </div>
    </div>
  );
}
