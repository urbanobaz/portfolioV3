import Navbar from '@/components/navbar/Navbar';
import '../globals.css';
import { Quicksand } from 'next/font/google';
import Footer from '@/components/footer/Footer';

const quicksand = Quicksand({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={quicksand.className}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
