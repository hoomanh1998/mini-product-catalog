import { get_user } from '@/services/auth/loaders';
import SidebarClient from './sidebar-client';

export default async function Sidebar() {
  const user = await get_user();
  return <SidebarClient is_authenticated={Boolean(user)} />;
}
