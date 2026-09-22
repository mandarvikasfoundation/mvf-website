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
    <div className="admin-shell">
      <AdminNav userEmail={user.email ?? ''} />
      <main className="admin-main">{children}</main>
    </div>
  );
}
