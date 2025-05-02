'use client';

import { login } from '@/services/auth/actions';
import { useFormStatus } from 'react-dom';
import Button from '@/ui/button/button';

export default function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      formAction={login}
      type="submit"
      className="w-full"
      disabled={pending}
    >
      {pending ? 'Loading...' : 'Login'}
    </Button>
  );
}
