import { createClient } from "@/utils/supabase/server";
import { login, signup } from "./actions";
import { redirect } from "next/navigation";
import { ROUTES } from "constants/routes.constant";
import Button from "@/ui/button";
import Input from "@/ui/input";

export default async function LoginPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  if (data.user) {
    redirect(ROUTES.Admin);
  }

  return (
    <div className="flex items-center w-full justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-[var(--secondary)] rounded-2xl">
        <form method="POST" className="space-y-4">
          <Input id="email" name="email" type="email" label="email address" />
          <Input
            type="password"
            id="password"
            name="password"
            label="password"
          />
          <div className="flex flex-col gap-y-3 mt-5">
            <Button formAction={login} type="submit" className="w-full">
              Login
            </Button>

            <Button
              formAction={signup}
              type="submit"
              className="w-full"
              color="green"
            >
              SignUp
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
