import { ProductCardCompact, ProductCardDefault } from "@/ui/product-card-type";
import { ProductModel } from "app/products/product.model";

interface ProductCardProps {
  product: ProductModel;
  card_type?: "default" | "compact";
}

export default function ProductCard({ product, card_type }: ProductCardProps) {
  return card_type === "compact" ? (
    <ProductCardCompact product={product} />
  ) : (
    <ProductCardDefault product={product} />
  );
}
