'use server';

import Sidebar from './sidebar';

export default async function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row w-full min-h-screen">
      <Sidebar />
      {children}
    </div>
  );
}
