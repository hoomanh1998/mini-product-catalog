"use client";

import Button from "@/ui/button";
import { useRouter } from "next/navigation";

export default function AddNewProductButton() {
  const router = useRouter();

  return (
    <Button
      className="mt-5 mr-auto"
      onClick={() => router.push("?show_modal=add")}
    >
      Add new product
    </Button>
  );
}
