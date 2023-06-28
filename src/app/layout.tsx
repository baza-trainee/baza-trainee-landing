import { Exo_2 } from 'next/font/google';
import { StoreProvider } from '@/store/globalContext';
import './globals.css';

const exo2 = Exo_2({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

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
        <body className={exo2.className}>{children}</body>
      </StoreProvider>
    </html>
  );
}
