import Footer from '@/components/footer/Footer';
import './globals.css';
import { Quicksand } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata = {
  title: "Urbano's",
  description: 'Learn more about Urbano',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
