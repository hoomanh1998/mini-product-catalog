"use client";

import Image from "next/image";
import { PRODUCTS_LIST_TABLE_HEADERS } from "./products-list-table.constant";
import { ROUTES } from "constants/routes.constant";
import { ProductModel } from "@/models/product.model";
import DeleteIcon from "@/ui/icons/delete-icon";
import { delete_product } from "app/admin/actions";
import { useTransition } from "react";

export default function ProductsListTable({
  products,
}: {
  products: ProductModel[];
}) {
  const [is_pending, start_transition] = useTransition();

  const handle_delete_product = (product_id: number) => {
    start_transition(async () => {
      try {
        await delete_product(product_id);
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <div className="w-full overflow-x-auto rounded-xl mt-5">
      <table className="w-full bg-background shadow-md">
        <thead>
          <tr className="bg-yellow dark:bg-night">
            {PRODUCTS_LIST_TABLE_HEADERS.map((header) => (
              <th
                scope="col"
                key={header.key}
                className="whitespace-nowrap p-4 text-sm text-left font-semibold"
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="odd:bg-gray odd:dark:bg-background even:bg-background even:dark:bg-night"
            >
              <td className="py-3 px-4">{product.id}</td>
              <td className="py-3 px-4 font-semibold">{product.name}</td>
              <td className="py-3 px-4">{product.description}</td>
              <td className="py-3 px-4">${product.price}</td>
              <td className="py-3 px-4">
                <Image
                  src={product.image_url}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="object-cover rounded"
                />
              </td>
              <td className="py-3 px-4">
                {new Date(product.created_at).toLocaleDateString()}
              </td>
              <td className="px-6 py-4">
                <a
                  href={ROUTES.AdminEditProduct + `/${product.id}`}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handle_delete_product(product.id)}
                  className="ml-auto p-1 cursor-pointer"
                  disabled={is_pending}
                >
                  <DeleteIcon
                    width={24}
                    height={24}
                    className="stroke-red-400"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
