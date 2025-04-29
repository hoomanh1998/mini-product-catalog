'use server';

import { createClient } from '@/utils/supabase/server';

export async function get_user(): Promise<unknown> {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  return data.user;
}
