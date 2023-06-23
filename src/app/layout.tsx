import { StoreProvider } from '@/store/globalContext';
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
      <StoreProvider>
        <body>{children}</body>
      </StoreProvider>
    </html>
  );
}
