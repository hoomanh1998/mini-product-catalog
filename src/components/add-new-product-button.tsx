"use client";

import Button from "@/ui/button";
import { ROUTES } from "constants/routes.constant";
import { useRouter } from "next/navigation";

export default function AddNewProductButton() {
  const router = useRouter();

  return (
    <Button
      className="mt-5 mr-auto"
      onClick={() => router.push(ROUTES.AdminAddProduct)}
    >
      Add new product
    </Button>
  );
}
