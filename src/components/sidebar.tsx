"use client";

import clsx from "clsx";
import { ROUTES } from "constants/routes.constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex shrink-0 sticky top-0 flex-col w-64 h-screen bg-yellow dark:bg-night gap-y-2 p-5">
      <div className="flex flex-col w-full gap-y-2 mt-3">
        <Link
          href={ROUTES.Home}
          className={`w-full capitalize transition-colors hover:bg-[var(--secondary)] py-2 px-5 rounded-xl ${clsx(
            pathname === ROUTES.Home && "bg-[var(--secondary)]"
          )}`}
        >
          home
        </Link>

        <Link
          href={ROUTES.Admin}
          className={`w-full capitalize transition-colors hover:bg-[var(--secondary)] py-2 px-5 rounded-xl ${clsx(
            pathname.includes(ROUTES.Admin) && "bg-[var(--secondary)]"
          )}`}
        >
          admin
        </Link>

        <Link
          href={ROUTES.Admin}
          className={`w-full capitalize transition-colors hover:bg-[var(--secondary)] py-2 px-5 rounded-xl ${clsx(
            pathname === ROUTES.Login && "bg-[var(--secondary)]"
          )}`}
        >
          login
        </Link>
      </div>
    </div>
  );
}
