"use client";

import clsx from "clsx";
import { use_drawer_store } from "@/store/drawer.store";
import Link from "next/link";
import CloseIcon from "./icons/close-icon";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function Drawer() {
  const { drawer_open, close_drawer } = use_drawer_store();
  const pathname = usePathname();

  return (
    <div
      className={`fixed top-0 right-0 w-0 h-full ${clsx(
        drawer_open ? "w-full" : "w-0"
      )}`}
    >
      <div
        onClick={close_drawer}
        className={`absolute top-0 right-0 w-full h-full bg-black/60 transition-opacity ${clsx(
          drawer_open ? "opacity-100" : "opacity-0"
        )}`}
      />

      <nav
        className={`absolute top-0 right-0 w-xs bg-gray-700 flex flex-col items-start h-full p-4 z-10 transition-transform ${
          drawer_open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <button onClick={close_drawer} className="p-1 cursor-pointer ml-auto">
          <CloseIcon width={24} height={24} />
        </button>

        <div className="flex flex-col w-full gap-y-2 mt-3">
          <Link
            href="/admin"
            className={`w-full capitalize text-white transition-colors hover:bg-cyan-700 py-2 px-5 rounded-xl ${clsx(
              pathname === "/admin" && "bg-cyan-700"
            )}`}
          >
            admin
          </Link>

          <Link
            href="/products"
            className={`w-full capitalize text-white transition-colors hover:bg-cyan-700 py-2 px-5 rounded-xl ${clsx(
              pathname === "/products" && "bg-cyan-700"
            )}`}
          >
            produtcs list
          </Link>
        </div>
      </nav>
    </div>
  );
}
