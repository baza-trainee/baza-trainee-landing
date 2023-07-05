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
    <html lang="uk">
      <body>
        <Sidebar />

        {children}
      </body>
    </html>
  );
}
