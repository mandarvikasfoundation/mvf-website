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
        width: 220,
        flexShrink: 0,
        background: '#1b2430',
        color: '#c8cdd6',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 0',
      }}
    >
      <div style={{ padding: '0 20px 20px', borderBottom: '1px solid #2c3644', marginBottom: 12 }}>
        <div style={{ color: 'white', fontWeight: 700, fontSize: 15 }}>MVF Admin</div>
        <div style={{ fontSize: 11, color: '#8a93a3', marginTop: 4, wordBreak: 'break-all' }}>{userEmail}</div>
      </div>

      {LINKS.map((link) => {
        const active = link.exact ? pathname === link.href : pathname?.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            style={{
              padding: '11px 20px',
              fontSize: 13.5,
              color: active ? 'white' : '#c8cdd6',
              background: active ? '#2c3644' : 'transparent',
              borderLeft: active ? '3px solid #f0a85b' : '3px solid transparent',
              fontWeight: active ? 700 : 400,
            }}
          >
            {link.label}
          </Link>
        );
      })}

      <div style={{ marginTop: 'auto', padding: '16px 20px 0' }}>
        <Link
          href="/"
          style={{ display: 'block', fontSize: 12, color: '#8a93a3', marginBottom: 14 }}
        >
          &larr; View live site
        </Link>
        <button
          onClick={handleSignOut}
          style={{
            width: '100%',
            padding: '9px 0',
            fontSize: 13,
            fontWeight: 700,
            color: '#1b2430',
            background: '#c8cdd6',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Sign out
        </button>
      </div>
    </nav>
  );
}
