import { Sidebar } from '@/components/AdminPage/SideBar';

export const metadata = {
  title: 'Baza-Trainee',
};

export default function AdminPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex bg-base-dark">
      <Sidebar /> {children}
    </main>
  );
}
