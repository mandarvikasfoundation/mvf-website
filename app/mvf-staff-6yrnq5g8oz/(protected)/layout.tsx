import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import AdminNav from '../AdminNav';

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // The middleware already redirects unauthenticated visits to /login, but
  // this Server Component check means the admin UI itself never renders
  // without a confirmed session, however the request got here.
  if (!user) {
    redirect('/mvf-staff-6yrnq5g8oz/login');
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', background: '#f4f5f7' }}>
      <AdminNav userEmail={user.email ?? ''} />
      <main style={{ flex: 1, padding: '32px 40px', maxWidth: 1000 }}>{children}</main>
    </div>
  );
}
