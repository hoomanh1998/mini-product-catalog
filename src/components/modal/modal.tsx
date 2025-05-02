'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialog_ref = useRef<HTMLDialogElement>(null);

  function close_modal(event: React.MouseEvent<HTMLDialogElement, MouseEvent>) {
    if (event.target === dialog_ref.current) {
      router.back();
    }
  }

  useEffect(() => {
    if (dialog_ref.current) {
      dialog_ref.current.showModal();
    }
  }, []);

  return (
    <dialog
      ref={dialog_ref}
      onClick={close_modal}
      onClose={router.back}
      className="flex items-center m-auto justify-center focus:outline-0 rounded-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm backdrop:flex backdrop:items-center text-3xl"
    >
      <div className="max-h-[90vh] w-full max-w-2xl p-10 bg-[var(--secondary)] overflow-y-auto">
        {children}
      </div>
    </dialog>
  );
}
