"use client";

import { use_drawer_store } from "@/store/drawer.store";
import Drawer from "@/ui/drawer";
import MenuIcon from "@/ui/icons/menu-icon";

export default function Header() {
  const open_drawer = use_drawer_store((state) => state.open_drawer);

  return (
    <header className="sticky top-0 h-16 flex items-center justify-between p-4 bg-gray-800 text-white">
      <button onClick={open_drawer} className="ml-auto p-1 cursor-pointer">
        <MenuIcon width={24} height={24} />
      </button>

      <Drawer />
    </header>
  );
}
