import { Inter, Exo_2 } from 'next/font/google';

const exo2 = Exo_2({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export { exo2, inter };
