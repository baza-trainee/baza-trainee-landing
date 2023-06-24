import Sidebar from '@/components/Admin/Sidebar';
import styles from './styles.module.scss';

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
      <body className={styles.main}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
