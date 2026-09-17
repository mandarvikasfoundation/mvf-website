'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/LanguageContext';

const TAGS = ['All', "Mandar's Pride", 'Community', 'Events', 'Other'];

const TAG_LABELS_HI: Record<string, string> = {
  All: 'सभी',
  "Mandar's Pride": "Mandar's Pride",
  Community: 'समुदाय',
  Events: 'आयोजन',
  Other: 'अन्य',
};

type Post = {
  slug: string;
  date: string;
  dateHi: string;
  title: string;
  titleHi: string;
  teaser: string;
  teaserHi: string;
  thumb: string;
  tags: string[];
  featured?: boolean;
};

const POSTS: Post[] = [
  {
    slug: 'independence-day-2026',
    date: '15 August 2026',
    dateHi: '15 अगस्त 2026',
    title: "Independence Day at Mandar's Pride Campus",
    titleHi: "Mandar's Pride परिसर में स्वतंत्रता दिवस",
    teaser:
      'Students and staff came together to celebrate the 15th with flag hoisting and festivities on campus.',
    teaserHi: 'छात्रों एवं स्टाफ ने परिसर में ध्वजारोहण एवं उत्सव के साथ 15 अगस्त मनाया।',
    thumb: '/images/news/independence-day-2026-flag-hoisting.png',
    tags: ['Community'],
    featured: true,
  },
];

export default function NewsClient() {
  const [selected, setSelected] = useState<string[]>(['All']);
  const t = useT();

  function toggleTag(tag: string) {
    if (tag === 'All') {
      setSelected(['All']);
      return;
    }
    setSelected((prev) => {
      const withoutAll = prev.filter((tg) => tg !== 'All');
      const next = withoutAll.includes(tag)
        ? withoutAll.filter((tg) => tg !== tag)
        : [...withoutAll, tag];
      return next.length === 0 ? ['All'] : next;
    });
  }

  const visiblePosts = selected.includes('All')
    ? POSTS
    : POSTS.filter((post) => post.tags.some((tg) => selected.includes(tg)));

  const featured = visiblePosts.find((p) => p.featured);
  const rest = visiblePosts.filter((p) => !p.featured);

  return (
    <>
      <div className="container" style={{ padding: '30px 0 20px' }}>
        <div className="eyebrow">{t('Home / News & Updates', 'होम / समाचार एवं अपडेट')}</div>
        <h1 className="section-heading" style={{ fontSize: 42, margin: '8px 0 0' }}>
          {t('News & Updates', 'समाचार एवं अपडेट')}
        </h1>
        <p style={{ fontSize: 14, color: 'var(--ink-muted)', marginTop: 2 }}>
          {t('Stories, milestones, and moments from Mandar Vikas Foundation.', 'मंदार विकास फाउंडेशन की कहानियां, उपलब्धियां एवं यादगार पल।')}
        </p>

        <div style={{ display: 'flex', gap: 8, marginTop: 18, flexWrap: 'wrap' }}>
          {TAGS.map((tag) => {
            const active = selected.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  padding: '6px 14px',
                  borderRadius: 14,
                  border: active ? '1px solid var(--navy-700)' : '1px solid var(--rule)',
                  background: active ? 'var(--navy-700)' : 'transparent',
                  color: active ? 'white' : 'var(--ink-muted)',
                  cursor: 'pointer',
                }}
              >
                {t(tag, TAG_LABELS_HI[tag])}
              </button>
            );
          })}
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 20 }}>
        {featured && (
          <Link
            href={`/news/${featured.slug}`}
            className="card"
            style={{
              display: 'flex',
              overflow: 'hidden',
              minHeight: 200,
              marginBottom: 16,
            }}
          >
            <div style={{ flex: '0 0 40%', position: 'relative', minHeight: 200 }}>
              <img
                src={featured.thumb}
                alt={t(featured.title, featured.titleHi)}
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  background: 'var(--navy-900)',
                  color: 'var(--saffron-300)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9,
                  padding: '3px 9px',
                  borderRadius: 10,
                }}
              >
                {t('FEATURED', 'विशेष')}
              </div>
            </div>
            <div style={{ flex: 1, padding: '26px 28px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--saffron-600)' }}>
                {t(featured.date, featured.dateHi).toUpperCase()} &middot;{' '}
                {featured.tags.map((tg) => t(tg, TAG_LABELS_HI[tg])).join(', ').toUpperCase()}
              </div>
              <h2 className="section-heading" style={{ fontSize: 22, marginTop: 6 }}>
                {t(featured.title, featured.titleHi)}
              </h2>
              <p style={{ fontSize: 13, lineHeight: 1.7, marginTop: 10, color: 'var(--ink-muted)' }}>
                {t(featured.teaser, featured.teaserHi)}
              </p>
            </div>
          </Link>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {rest.map((post) => (
            <Link key={post.slug} href={`/news/${post.slug}`} className="card" style={{ padding: 18, display: 'flex', gap: 14 }}>
              <div style={{ width: 56, height: 56, borderRadius: 4, overflow: 'hidden', flexShrink: 0 }}>
                <img src={post.thumb} alt={t(post.title, post.titleHi)} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--label-grey)' }}>
                  {t(post.date, post.dateHi).toUpperCase()} &middot;{' '}
                  {post.tags.map((tg) => t(tg, TAG_LABELS_HI[tg])).join(', ').toUpperCase()}
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--navy-700)', marginTop: 3 }}>
                  {t(post.title, post.titleHi)}
                </div>
                <div style={{ fontSize: 10.5, color: 'var(--ink-muted)', marginTop: 3, lineHeight: 1.5 }}>
                  {t(post.teaser, post.teaserHi)}
                </div>
              </div>
            </Link>
          ))}

          {/* Placeholder slot for the next update, shown only when "All" is
              selected so it doesn't look like a real filtered result. */}
          {selected.includes('All') && (
            <div className="card" style={{ padding: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 88 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)', textAlign: 'center' }}>
                {t('More stories coming soon', 'जल्द ही और कहानियां आ रही हैं')}
              </div>
            </div>
          )}

          {!selected.includes('All') && visiblePosts.length === 0 && (
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--label-grey)', gridColumn: '1 / -1' }}>
              {t('No posts under this tag yet.', 'इस टैग में अभी कोई पोस्ट नहीं है।')}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
