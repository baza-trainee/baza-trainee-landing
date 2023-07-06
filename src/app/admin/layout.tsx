import Sidebar from '@/components/Admin/Sidebar';

export const metadata = {
  title: 'Baza-Trainee',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-full bg-base-dark">
      <Sidebar />

      {children}
    </main>
  );
}
