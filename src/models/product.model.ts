import { Database } from "@/utils/supabase/supabase";

export type ProductModel = Database["public"]["Tables"]["Products"]["Row"];

export enum ProductCardType {
  Default = "default",
  Compact = "compact",
}
