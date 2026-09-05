'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/mandars-pride', label: "Mandar's Pride", isBrand: true },
  { href: '/our-work', label: 'Our Work' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/news', label: 'News' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--paper)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 26px',
        borderBottom: '1px solid var(--rule)',
        gap: 12,
        flexWrap: 'wrap',
      }}
    >
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', gap: 10 }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          {/* Replace with the real MVF logo image */}
          <img src="/images/mvf-logo.png" alt="Mandar Vikas Foundation logo" />
        </div>
        <div>
          <div
            className="brand-script"
            style={{ fontSize: 25, color: 'var(--navy-700)', lineHeight: 1 }}
          >
            Mandar Vikas Foundation
          </div>
          <div
            className="brand-script"
            style={{
              fontSize: 14,
              color: 'var(--saffron-600)',
              fontStyle: 'italic',
            }}
          >
            Step Towards Change
          </div>
        </div>
      </Link>

      <nav
        style={{
          display: 'flex',
          gap: 22,
          alignItems: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          color: 'var(--ink-muted)',
        }}
      >
        {NAV_LINKS.map((link) => {
          const isActive = pathname?.startsWith(link.href);
          if (link.isBrand) {
            return (
              <Link
                key={link.href}
                href={link.href}
                className="brand-script"
                style={{
                  fontSize: 14,
                  color: isActive ? 'var(--navy-700)' : 'var(--ink-muted)',
                  fontWeight: 700,
                  borderBottom: isActive
                    ? '1.5px solid var(--saffron-600)'
                    : '1.5px solid transparent',
                  paddingBottom: 2,
                  whiteSpace: 'nowrap',
                }}
              >
                {link.label}
              </Link>
            );
          }
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: isActive ? 'var(--navy-700)' : 'var(--ink-muted)',
                fontWeight: 700,
                borderBottom: isActive
                  ? '1.5px solid var(--saffron-600)'
                  : '1.5px solid transparent',
                paddingBottom: 2,
                whiteSpace: 'nowrap',
                textTransform: 'uppercase',
              }}
            >
              {link.label}
            </Link>
          );
        })}
        <button
          style={{
            border: '0.5px solid var(--label-grey)',
            borderRadius: 12,
            padding: '3px 9px',
            fontSize: 10,
            background: 'transparent',
            fontFamily: 'var(--font-mono)',
            cursor: 'pointer',
          }}
        >
          EN / हिं
        </button>
      </nav>
    </header>
  );
}
