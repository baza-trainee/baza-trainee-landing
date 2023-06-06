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
      <body>{children}</body>
    </html>
  );
}
