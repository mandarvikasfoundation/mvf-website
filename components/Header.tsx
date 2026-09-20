'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';

const NAV_LINKS = [
  { href: '/about', label: 'About', labelHi: 'हमारे बारे में' },
  { href: '/mandars-pride', label: "Mandar's Pride", labelHi: "Mandar's Pride", isBrand: true },
  { href: '/our-work', label: 'Our Works', labelHi: 'हमारे कार्य' },
  { href: '/get-involved', label: 'Get Involved', labelHi: 'जुड़ें' },
  { href: '/news', label: 'News', labelHi: 'समाचार' },
  { href: '/gallery', label: 'Gallery', labelHi: 'गैलरी' },
  { href: '/contact', label: 'Contact Us', labelHi: 'संपर्क करें' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle } = useLanguage();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--paper)',
        borderBottom: '1px solid var(--rule)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 26px',
          gap: 12,
        }}
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
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
              {lang === 'hi' ? 'मंदार विकास फाउंडेशन' : 'Mandar Vikas Foundation'}
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
          className="nav-desktop"
          style={{
            display: 'flex',
            gap: 32,
            alignItems: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            color: 'var(--ink-muted)',
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname?.startsWith(link.href);
            const label = lang === 'hi' ? link.labelHi : link.label;
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
                  {label}
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
                  textTransform: lang === 'hi' ? 'none' : 'uppercase',
                }}
              >
                {label}
              </Link>
            );
          })}

          <button
            onClick={toggle}
            aria-label={lang === 'hi' ? 'Switch to English' : 'हिंदी में बदलें'}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              fontWeight: 700,
              color: 'var(--navy-700)',
              background: 'var(--card-bg)',
              border: '1px solid var(--rule)',
              borderRadius: 14,
              padding: '5px 12px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {lang === 'hi' ? 'EN / हिं' : 'EN / हिं'}
          </button>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 6,
            flexDirection: 'column',
            gap: 5,
          }}
        >
          <span style={{ width: 26, height: 2, background: 'var(--navy-700)', display: 'block' }} />
          <span style={{ width: 26, height: 2, background: 'var(--navy-700)', display: 'block' }} />
          <span style={{ width: 26, height: 2, background: 'var(--navy-700)', display: 'block' }} />
        </button>
      </div>

      {menuOpen && (
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid var(--rule)',
            padding: '10px 26px 18px',
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname?.startsWith(link.href);
            const label = lang === 'hi' ? link.labelHi : link.label;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={link.isBrand ? 'brand-script' : undefined}
                style={{
                  padding: '12px 0',
                  borderBottom: '1px solid var(--paper-line)',
                  color: isActive ? 'var(--navy-700)' : 'var(--ink)',
                  fontWeight: 700,
                  fontSize: link.isBrand ? 16 : 14,
                  textTransform: link.isBrand || lang === 'hi' ? 'none' : 'uppercase',
                }}
              >
                {label}
              </Link>
            );
          })}
          <button
            onClick={toggle}
            style={{
              marginTop: 10,
              alignSelf: 'flex-start',
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              fontWeight: 700,
              color: 'var(--navy-700)',
              background: 'var(--card-bg)',
              border: '1px solid var(--rule)',
              borderRadius: 14,
              padding: '6px 14px',
              cursor: 'pointer',
            }}
          >
            EN / हिं
          </button>
        </nav>
      )}
    </header>
  );
}
