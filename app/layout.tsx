import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mandar Vikas Foundation | Step Towards Change',
  description:
    'Mandar Vikas Foundation is a grassroots NGO in Bhaga, Bounsi, Banka district, Bihar, working since 2019 on children\u2019s education, women\u2019s financial independence, and community upliftment, including our school Mandar\u2019s Pride.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
