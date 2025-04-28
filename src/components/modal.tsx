"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialog_ref = useRef<HTMLDialogElement>(null);

  function close_modal(event: React.MouseEvent<HTMLDialogElement, MouseEvent>) {
    event.target === dialog_ref.current && router.back();
  }

  useEffect(() => {
    dialog_ref.current?.showModal();
  }, []);

  return (
    <dialog
      ref={dialog_ref}
      onClick={close_modal}
      onClose={router.back}
      className="flex items-center justify-center m-auto outline-0 rounded-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm backdrop:flex backdrop:items-center text-3xl"
    >
      {children}
    </dialog>
  );
}
