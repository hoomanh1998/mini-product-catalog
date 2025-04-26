import { Database } from "@/utils/supabase/supabase-types";

export type ProductModel = Database["public"]["Tables"]["Products"]["Row"];
