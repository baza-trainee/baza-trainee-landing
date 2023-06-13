import { AuthProvider } from '@/context/AuthContext';
import './globals.scss';

export const metadata = {
  title: 'Baza-Trainee',
  description: 'Baza-Trainee',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>{children}</body>
      </AuthProvider>
    </html>
  );
}
