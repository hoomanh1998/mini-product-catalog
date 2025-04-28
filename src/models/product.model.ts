import { Database } from "@/utils/supabase/supabase";

export type ProductModel = Database["public"]["Tables"]["Products"]["Row"];
