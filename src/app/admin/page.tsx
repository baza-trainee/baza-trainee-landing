'use client';
import { sidebarSectionsList } from '@/components/AdminPage/SideBar/sidebarSectionsList';
import { usePathname, useRouter } from 'next/navigation';

const AdminMainPage = () => {
  const { push } = useRouter();
  const path = usePathname();
  const id = sidebarSectionsList[0].id;
  push(`/admin/${id}`);
  console.log(path);
  return null;
};

export default AdminMainPage;
