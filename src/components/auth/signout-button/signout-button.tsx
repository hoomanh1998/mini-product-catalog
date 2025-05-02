'use client';

import { signout } from '@/services/auth/actions';
import { useFormStatus } from 'react-dom';
import Button from '@/ui/button/button';

export default function SignOutButton() {
  const { pending } = useFormStatus();

  return (
    <form>
      <Button
        type="submit"
        formAction={signout}
        disabled={pending}
        color="red"
        className="w-full mt-2"
      >
        {pending ? 'Loading...' : 'Sign Out'}
      </Button>
    </form>
  );
}
