'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Routes } from '@/constants/routes.constant';
import SignOutButton from '../auth/signout-button/signout-button';

type SidebarClientProps = {
  is_authenticated: boolean;
};

const links = [
  {
    label: 'home',
    href: Routes.Home,
    is_active: (pathname: string) => pathname === Routes.Home,
  },
  {
    label: 'dashboard',
    href: Routes.Dashboard,
    is_active: (pathname: string) => pathname.includes(Routes.Dashboard),
  },
];

export default function SidebarClient({
  is_authenticated,
}: SidebarClientProps) {
  const pathname = usePathname();
  const show_sidebar = pathname !== Routes.Login && pathname !== Routes.SignUp;

  if (!show_sidebar) return null;

  return (
    <nav className="flex shrink-0 sticky top-0 flex-col w-64 h-screen bg-yellow dark:bg-night gap-y-2 p-5">
      <section className="flex flex-col w-full gap-y-2 mt-3">
        {links.map(({ label, href, is_active }) => (
          <Link
            key={label}
            href={href}
            className={clsx(
              'w-full capitalize font-semibold transition-colors hover:bg-[var(--secondary)] py-2 px-5 rounded-xl',
              is_active(pathname) && 'text-foreground bg-[var(--secondary)]',
            )}
          >
            {label}
          </Link>
        ))}

        {is_authenticated && <SignOutButton />}
      </section>
    </nav>
  );
}
