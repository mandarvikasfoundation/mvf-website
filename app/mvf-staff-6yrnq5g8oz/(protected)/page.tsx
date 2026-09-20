import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

const TYPE_LABELS: Record<string, string> = {
  contact: 'Contact',
  volunteer: 'Volunteer',
  partner: 'Partner',
  admissions: "Mandar's Pride Admissions",
};

const TYPE_COLORS: Record<string, string> = {
  contact: 'var(--navy-700)',
  volunteer: 'var(--green-700)',
  partner: 'var(--saffron-600)',
  admissions: '#9333ea',
};

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [{ count: unreadCount }, { count: newsCount }, { count: photoCount }, { data: recentSubmissions }] = await Promise.all([
    supabase.from('form_submissions').select('*', { count: 'exact', head: true }).eq('is_read', false),
    supabase.from('news_posts').select('*', { count: 'exact', head: true }),
    supabase.from('gallery_photos').select('*', { count: 'exact', head: true }),
    supabase.from('form_submissions').select('id, form_type, data, is_read, created_at').order('created_at', { ascending: false }).limit(5),
  ]);

  const today = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <div>
      <div className="eyebrow">{today}</div>
      <h1 className="section-heading" style={{ fontSize: 30, margin: '4px 0 4px' }}>Dashboard</h1>
      <p style={{ fontSize: 14, color: 'var(--ink-muted)', marginBottom: 28 }}>
        A quick overview of what's happening on the site.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 32 }}>
        <StatCard
          icon="✉"
          label="Unread submissions"
          value={unreadCount ?? 0}
          href="/mvf-staff-6yrnq5g8oz/submissions"
          highlight={(unreadCount ?? 0) > 0}
        />
        <StatCard icon="📰" label="News posts" value={newsCount ?? 0} href="/mvf-staff-6yrnq5g8oz/news" />
        <StatCard icon="🖼" label="Gallery photos" value={photoCount ?? 0} href="/mvf-staff-6yrnq5g8oz/gallery" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 20, alignItems: 'start' }}>
        <div className="card" style={{ padding: 22 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div className="section-heading" style={{ fontSize: 16 }}>Recent Activity</div>
            <Link href="/mvf-staff-6yrnq5g8oz/submissions" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--saffron-600)' }}>
              View all &rarr;
            </Link>
          </div>

          {!recentSubmissions || recentSubmissions.length === 0 ? (
            <div style={{ fontSize: 13, color: 'var(--ink-muted)', padding: '14px 0' }}>No submissions yet.</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {recentSubmissions.map((s) => {
                const data = s.data as Record<string, string>;
                const name = data.name || data.fullName || data.parentName || 'Someone';
                return (
                  <div
                    key={s.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '10px 4px',
                      borderBottom: '1px solid var(--paper-line)',
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: TYPE_COLORS[s.form_type] ?? 'var(--label-grey)',
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <span style={{ fontSize: 13, fontWeight: s.is_read ? 400 : 700, color: 'var(--navy-700)' }}>{name}</span>
                      <span style={{ fontSize: 11.5, color: 'var(--ink-muted)' }}> &middot; {TYPE_LABELS[s.form_type] ?? s.form_type}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--label-grey)', whiteSpace: 'nowrap' }}>
                      {new Date(s.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                    </div>
                    {!s.is_read && (
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--saffron-600)', flexShrink: 0 }} />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="card" style={{ padding: 22 }}>
          <div className="section-heading" style={{ fontSize: 16, marginBottom: 12 }}>Quick Links</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <QuickLink href="/mvf-staff-6yrnq5g8oz/news" icon="+" label="Add a News post" />
            <QuickLink href="/mvf-staff-6yrnq5g8oz/gallery" icon="+" label="Upload Gallery photos" />
            <QuickLink href="/mvf-staff-6yrnq5g8oz/settings" icon="✎" label="Edit Homepage stats" />
            <QuickLink href="/" icon="↗" label="View live site" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  href,
  highlight,
}: {
  icon: string;
  label: string;
  value: number;
  href: string;
  highlight?: boolean;
}) {
  return (
    <Link
      href={href}
      className="card admin-card-link"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '16px 20px',
        border: highlight ? '1.5px solid var(--saffron-300)' : '1.5px solid transparent',
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          background: highlight ? 'var(--saffron-600)' : 'var(--navy-900)',
          color: '#fdf2e7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 17,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 24, fontWeight: 700, fontFamily: 'var(--font-mono)', color: highlight ? 'var(--saffron-600)' : 'var(--navy-700)', lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 4 }}>{label}</div>
      </div>
    </Link>
  );
}

function QuickLink({ href, icon, label }: { href: string; icon: string; label: string }) {
  return (
    <Link
      href={href}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '9px 10px',
        borderRadius: 6,
        background: 'var(--paper)',
        fontSize: 13,
        color: 'var(--navy-700)',
        fontWeight: 600,
      }}
    >
      <span style={{ color: 'var(--saffron-600)', fontWeight: 700 }}>{icon}</span>
      {label}
    </Link>
  );
}
