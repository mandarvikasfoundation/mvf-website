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
      <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1b2430', marginBottom: 4 }}>Dashboard</h1>
      <p style={{ fontSize: 13.5, color: '#6b7280', marginBottom: 28 }}>
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

      <div style={{ background: 'white', borderRadius: 8, padding: 24 }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: '#1b2430', marginBottom: 10 }}>Quick links</div>
        <ul style={{ fontSize: 13.5, lineHeight: 2.2, paddingLeft: 18, margin: 0, color: '#374151' }}>
          <li><Link href="/mvf-staff-6yrnq5g8oz/submissions">Read new Contact / Volunteer / Partner / Admissions inquiries</Link></li>
          <li><Link href="/mvf-staff-6yrnq5g8oz/news">Add or edit a News & Updates post</Link></li>
          <li><Link href="/mvf-staff-6yrnq5g8oz/gallery">Upload or manage Gallery photos</Link></li>
          <li><Link href="/mvf-staff-6yrnq5g8oz/settings">Update the Home page stats (students, women trained, etc.)</Link></li>
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
      style={{
        display: 'block',
        background: 'white',
        borderRadius: 8,
        padding: '18px 20px',
        border: highlight ? '1.5px solid #f0a85b' : '1.5px solid transparent',
      }}
    >
      <div style={{ fontSize: 26, fontWeight: 700, color: highlight ? '#c6631f' : '#1b2430' }}>{value}</div>
      <div style={{ fontSize: 12.5, color: '#6b7280', marginTop: 2 }}>{label}</div>
    </Link>
  );
}
