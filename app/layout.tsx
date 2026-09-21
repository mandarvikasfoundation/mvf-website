import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import SiteChrome from '@/components/SiteChrome';

export const metadata: Metadata = {
  // Note: the old MVF website is still live on this domain right now;
  // this one takes over once it's finished and deployed.
  metadataBase: new URL('https://mandarvikasfoundation.com'),
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
        <LanguageProvider>
          <SiteChrome>{children}</SiteChrome>
        </LanguageProvider>
      </body>
    </html>
  );
}
