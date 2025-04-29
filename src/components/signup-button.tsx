'use client';

import { signup } from '@/services/auth/actions';
import { useFormStatus } from 'react-dom';
import Button from '@/ui/button';

export default function SignupButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      formAction={signup}
      type="submit"
      className="w-full"
      color="green"
      disabled={pending}
    >
      {pending ? 'Loading...' : 'Sign Up'}
    </Button>
  );
}
