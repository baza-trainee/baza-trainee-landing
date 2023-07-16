'use client';
import { sidebarSectionsList } from '@/components/AdminPage/SideBar/sidebarSectionsList';
import { useRouter } from 'next/navigation';

const AdminMainPage = () => {
  const { push } = useRouter();
  const id = sidebarSectionsList[0].id;
  push(`/admin/${id}`);
  return null;
};

export default AdminMainPage;
