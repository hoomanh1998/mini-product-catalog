"use client";

import { usePathname } from "next/navigation";
import { Routes } from "constants/routes.constant";
import Sidebar from "./sidebar";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const show_header = pathname !== Routes.Login;

  return (
    <div className="flex flex-row w-full min-h-screen">
      {show_header && <Sidebar />}
      {children}
    </div>
  );
}
