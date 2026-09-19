'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

// The admin panel has its own separate nav (see AdminNav) and shouldn't be
// wrapped in the public Header/Footer. Checked by pathname rather than by
// restructuring the app into multiple root layouts, since that would mean
// moving every public page folder into a route group.
const ADMIN_BASE = '/mvf-staff-6yrnq5g8oz';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith(ADMIN_BASE);

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
