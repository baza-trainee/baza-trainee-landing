import { StoreProvider } from '@/store/globalContext';
import { exo2, inter } from './fonts';

import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
        <body className={`${inter.variable} ${exo2.className}`}>
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
