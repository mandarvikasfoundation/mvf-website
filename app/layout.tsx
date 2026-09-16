import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  // TODO: once the site has a real domain (after Vercel deploy), set
  // metadataBase: new URL('https://your-real-domain.org') here so social
  // previews resolve the og:image URL correctly instead of relatively.
  title: {
    default: 'Mandar Vikas Foundation | Step Towards Change',
    template: '%s | MVF',
  },
  description:
    'Mandar Vikas Foundation is a grassroots NGO in Bhaga, Bounsi, Banka district, Bihar, working since 2019 on children\u2019s education, women\u2019s financial independence, and community upliftment, including our school Mandar\u2019s Pride.',
  openGraph: {
    title: 'Mandar Vikas Foundation | Step Towards Change',
    description:
      'A grassroots NGO in Bhaga, Bounsi, Banka district, Bihar, working since 2019 on children\u2019s education, women\u2019s financial independence, and community upliftment.',
    siteName: 'Mandar Vikas Foundation',
    images: [{ url: '/images/campus-gate.jpg', width: 1200, height: 900 }],
    locale: 'en_IN',
    type: 'website',
  },
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
