import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [{ count: unreadCount }, { count: newsCount }, { count: photoCount }] = await Promise.all([
    supabase.from('form_submissions').select('*', { count: 'exact', head: true }).eq('is_read', false),
    supabase.from('news_posts').select('*', { count: 'exact', head: true }),
    supabase.from('gallery_photos').select('*', { count: 'exact', head: true }),
  ]);

  return (
    <div>
      <div className="eyebrow">Admin</div>
      <h1 className="section-heading" style={{ fontSize: 30, margin: '4px 0 4px' }}>Dashboard</h1>
      <p style={{ fontSize: 14, color: 'var(--ink-muted)', marginBottom: 28 }}>
        A quick overview of what's happening on the site.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 32 }}>
        <StatCard
          label="Unread submissions"
          value={unreadCount ?? 0}
          href="/mvf-staff-6yrnq5g8oz/submissions"
          highlight={(unreadCount ?? 0) > 0}
        />
        <StatCard label="News posts" value={newsCount ?? 0} href="/mvf-staff-6yrnq5g8oz/news" />
        <StatCard label="Gallery photos" value={photoCount ?? 0} href="/mvf-staff-6yrnq5g8oz/gallery" />
      </div>

      <div className="card" style={{ padding: 24 }}>
        <div className="section-heading" style={{ fontSize: 16, marginBottom: 12 }}>Quick links</div>
        <ul style={{ fontSize: 14, lineHeight: 2.2, paddingLeft: 18, margin: 0 }}>
          <li><Link href="/mvf-staff-6yrnq5g8oz/submissions" style={{ color: 'var(--saffron-600)' }}>Read new Contact / Volunteer / Partner / Admissions inquiries</Link></li>
          <li><Link href="/mvf-staff-6yrnq5g8oz/news" style={{ color: 'var(--saffron-600)' }}>Add or edit a News & Updates post</Link></li>
          <li><Link href="/mvf-staff-6yrnq5g8oz/gallery" style={{ color: 'var(--saffron-600)' }}>Upload or manage Gallery photos</Link></li>
          <li><Link href="/mvf-staff-6yrnq5g8oz/settings" style={{ color: 'var(--saffron-600)' }}>Update the Home page stats (students, women trained, etc.)</Link></li>
        </ul>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  href,
  highlight,
}: {
  label: string;
  value: number;
  href: string;
  highlight?: boolean;
}) {
  return (
    <Link
      href={href}
      className="card"
      style={{
        display: 'block',
        padding: '18px 20px',
        border: highlight ? '1.5px solid var(--saffron-300)' : '1.5px solid transparent',
      }}
    >
      <div style={{ fontSize: 28, fontWeight: 700, fontFamily: 'var(--font-mono)', color: highlight ? 'var(--saffron-600)' : 'var(--navy-700)' }}>{value}</div>
      <div style={{ fontSize: 12.5, color: 'var(--ink-muted)', marginTop: 4 }}>{label}</div>
    </Link>
  );
}
