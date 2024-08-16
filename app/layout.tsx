import './globals.css';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata = {
  title: "Urbano's Portfolio",
  description: 'Learn more about Urbano',
  openGraph: {
    title: "Urbano's Portfolio",
    description: 'Learn more about Urbano',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
