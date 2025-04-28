import {
  ProductCardCompact,
  ProductCardDefault,
} from "@/components/product-card-type";
import { ProductModel } from "@/models/product.model";

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
