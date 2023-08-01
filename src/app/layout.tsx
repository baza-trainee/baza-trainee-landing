import { StoreProvider } from '@/store/globalContext';
import { Exo_2 } from 'next/font/google';

import { AlertWindow } from '@/components/atomic';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './globals.css';

export const metadata = {
  title: 'Baza-Trainee',
  description:
    'Baza-Trainee Ukraine | Тренувальна платформа для українців, які опановують шлях в сферу ІТ, незалежно від віку і досвіду- трейні, джуніори, світчери, ментори.',
};

const exo2 = Exo_2({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
});

const IconLink = ({ theme }: { theme: 'light' | 'dark' }) => (
  <link
    rel="icon"
    href={`favicons/${theme}/icon.svg`}
    type="image/svg+xml"
    media={`(prefers-color-scheme: ${theme})`}
  />
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <IconLink theme="light" />
        <IconLink theme="dark" />
      </head>

      <StoreProvider>
        <body className={exo2.className + ' scrollbar'}>
          <AlertWindow />
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
