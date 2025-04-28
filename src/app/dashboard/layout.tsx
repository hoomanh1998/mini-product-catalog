import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Routes } from "@/constants/routes.constant";

export default async function DashboardLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect(Routes.Login);
  }

  return (
    <main className="w-full max-w-5xl p-10 mx-auto">
      {children}
      {modal}
    </main>
  );
}
