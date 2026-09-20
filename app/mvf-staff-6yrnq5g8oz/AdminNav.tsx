'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

const BASE = '/mvf-staff-6yrnq5g8oz';

const LINKS = [
  { href: BASE, label: 'Dashboard', exact: true },
  { href: `${BASE}/submissions`, label: 'Form Submissions' },
  { href: `${BASE}/news`, label: 'News & Updates' },
  { href: `${BASE}/gallery`, label: 'Gallery' },
  { href: `${BASE}/settings`, label: 'Homepage Stats' },
];

export default function AdminNav({ userEmail }: { userEmail: string }) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push(`${BASE}/login`);
    router.refresh();
  }

  return (
    <nav
      style={{
        width: 246,
        flexShrink: 0,
        background: 'var(--navy-900)',
        color: 'var(--sky-200)',
        display: 'flex',
        flexDirection: 'column',
        padding: '26px 0',
      }}
    >
      <div style={{ padding: '0 22px 20px', borderBottom: '1px solid rgba(255,255,255,0.12)', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 38, height: 38, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
          <img src="/images/mvf-logo.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="brand-script" style={{ color: 'white', fontWeight: 700, fontSize: 18, lineHeight: 1 }}>
            MVF Admin
          </div>
          <div
            title={userEmail}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--sky-300)',
              marginTop: 4,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {userEmail}
          </div>
        </div>
      </div>

      {LINKS.map((link) => {
        const active = link.exact ? pathname === link.href : pathname?.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className="admin-nav-link"
            style={{
              padding: '12px 22px',
              fontFamily: 'var(--font-mono)',
              fontSize: 12.5,
              color: active ? 'white' : 'var(--sky-200)',
              background: active ? 'rgba(255,255,255,0.08)' : 'transparent',
              borderLeft: active ? '3px solid var(--saffron-300)' : '3px solid transparent',
              fontWeight: 700,
            }}
          >
            {link.label}
          </Link>
        );
      })}

      <div style={{ marginTop: 'auto', padding: '16px 22px 0' }}>
        <Link
          href="/"
          style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--sky-300)', marginBottom: 14 }}
        >
          &larr; View live site
        </Link>
        <button onClick={handleSignOut} className="btn btn-primary" style={{ width: '100%', fontSize: 12.5 }}>
          Sign out
        </button>
      </div>
    </nav>
  );
}
