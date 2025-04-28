"use client";

import Button from "@/ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" color="green" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}
