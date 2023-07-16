import { Sidebar } from '@/components/AdminPage/SideBar';
import { WithAuth } from '@/components/AdminPage/withAuth';

export const metadata = {
  title: 'Baza-Trainee',
};

function AdminPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <WithAuth>
      <main className="flex bg-base-dark">
        <Sidebar /> {children}
      </main>
    </WithAuth>
  );
}

export default AdminPageLayout;
