import './globals.css';
import { Quicksand } from 'next/font/google';
import headshot from '../public/finalheadshotedit.png';
import Head from 'next/head';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata = {
  title: "Urbano's Portfolio",
  description: 'Learn more about Urbano',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <meta property="og:image" content="../public/finalheadshotedit.png" />
        <meta property="og:title" content="Urbano's Portfolio" />
      </Head>
      <html lang="en">
        <body className={quicksand.className}>{children}</body>
      </html>
    </>
  );
}
