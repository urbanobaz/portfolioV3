import './globals.css';
import { Quicksand } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';

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
      <body className={quicksand.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
