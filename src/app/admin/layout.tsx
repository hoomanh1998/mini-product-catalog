import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { ROUTES } from "constants/routes.constant";

export default async function AdminLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect(ROUTES.Login);
  }

  return (
    <div className="p-10 mx-auto">
      {children}
      {modal}
    </div>
  );
}
