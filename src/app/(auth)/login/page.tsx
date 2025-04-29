import { redirect } from 'next/navigation';
import { Routes } from 'constants/routes.constant';
import { get_user } from '@/services/auth/loaders';
import { Metadata } from 'next';
import Input from '@/ui/input';
import HeaderTitle from '@/ui/header-title';
import LoginButton from '@/components/login-button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login',
};

export default async function LoginPage() {
  const user = await get_user();

  if (user) {
    redirect(Routes.Dashboard);
  }

  return (
    <div className="flex items-center w-full justify-center min-h-screen bg-yellow dark:bg-night">
      <div className="w-full max-w-md p-8 space-y-6 bg-[var(--secondary)] rounded-2xl">
        <HeaderTitle title="login" />

        <form className="space-y-4">
          <Input
            id="email"
            name="email"
            type="email"
            label="email address"
            required
          />
          <Input
            type="password"
            id="password"
            name="password"
            label="password"
            required
          />

          <div className="flex flex-col gap-y-3 mt-5">
            <LoginButton />
          </div>

          <p className="text-center text-sm">
            Don&apos;t have an account?
            <Link href={Routes.SignUp} className="text-blue-400 underline ml-1">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
