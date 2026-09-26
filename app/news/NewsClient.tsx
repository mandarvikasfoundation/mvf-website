'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/LanguageContext';
import { createClient } from '@/lib/supabase/client';

const TAGS = ['All', "Mandar's Pride", 'Community', 'Events', 'Other'];

const TAG_LABELS_HI: Record<string, string> = {
  All: 'सभी',
  "Mandar's Pride": "Mandar's Pride",
  Community: 'समुदाय',
  Events: 'आयोजन',
  Other: 'अन्य',
};

const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MONTHS_HI = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'];

function formatDate(isoDate: string, hi: boolean) {
  const d = new Date(isoDate + 'T00:00:00');
  const months = hi ? MONTHS_HI : MONTHS_EN;
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

type Post = {
  id: string;
  slug: string;
  post_date: string;
  title_en: string;
  title_hi: string;
  teaser_en: string;
  teaser_hi: string;
  thumb_url: string | null;
  tags: string[];
  featured: boolean;
};

export default function NewsClient() {
  const [selected, setSelected] = useState<string[]>(['All']);
  const [posts, setPosts] = useState<Post[] | null>(null);
  const t = useT();

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from('news_posts')
      .select('id, slug, post_date, title_en, title_hi, teaser_en, teaser_hi, thumb_url, tags, featured')
      .eq('published', true)
      .order('post_date', { ascending: false })
      .then(({ data }) => {
        if (data) setPosts(data as Post[]);
      });
  }, []);

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

  const visiblePosts = !posts
    ? []
    : selected.includes('All')
    ? posts
    : posts.filter((post) => post.tags.some((tg) => selected.includes(tg)));

  const featured = visiblePosts.find((p) => p.featured);
  const rest = visiblePosts.filter((p) => !p.featured);

  return (
    <>
      <div className="container" style={{ paddingTop: 30, paddingBottom: 20 }}>
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
        {posts === null && (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--label-grey)' }}>
            {t('Loading\u2026', 'लोड हो रहा है\u2026')}
          </div>
        )}

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
              {featured.thumb_url && (
                <img
                  src={featured.thumb_url}
                  alt={t(featured.title_en, featured.title_hi)}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                />
              )}
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
                {formatDate(featured.post_date, false).toUpperCase()} &middot;{' '}
                {featured.tags.map((tg) => t(tg, TAG_LABELS_HI[tg] ?? tg)).join(', ').toUpperCase()}
              </div>
              <h2 className="section-heading" style={{ fontSize: 22, marginTop: 6 }}>
                {t(featured.title_en, featured.title_hi)}
              </h2>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, marginTop: 10, color: 'var(--ink-muted)' }}>
                {t(featured.teaser_en, featured.teaser_hi)}
              </p>
            </div>
          </Link>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {rest.map((post) => (
            <Link key={post.id} href={`/news/${post.slug}`} className="card" style={{ padding: 18, display: 'flex', gap: 14 }}>
              <div style={{ width: 56, height: 56, borderRadius: 4, overflow: 'hidden', flexShrink: 0, background: 'var(--paper)' }}>
                {post.thumb_url && (
                  <img src={post.thumb_url} alt={t(post.title_en, post.title_hi)} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                )}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--label-grey)' }}>
                  {formatDate(post.post_date, false).toUpperCase()} &middot;{' '}
                  {post.tags.map((tg) => t(tg, TAG_LABELS_HI[tg] ?? tg)).join(', ').toUpperCase()}
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--navy-700)', marginTop: 3 }}>
                  {t(post.title_en, post.title_hi)}
                </div>
                <div style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 3, lineHeight: 1.5 }}>
                  {t(post.teaser_en, post.teaser_hi)}
                </div>
              </div>
            </Link>
          ))}

          {/* Placeholder slot for the next update, shown only when "All" is
              selected so it doesn't look like a real filtered result. */}
          {posts !== null && selected.includes('All') && (
            <div className="card" style={{ padding: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 88 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)', textAlign: 'center' }}>
                {t('More stories coming soon', 'जल्द ही और कहानियां आ रही हैं')}
              </div>
            </div>
          )}

          {posts !== null && !selected.includes('All') && visiblePosts.length === 0 && (
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--label-grey)', gridColumn: '1 / -1' }}>
              {t('No posts under this tag yet.', 'इस टैग में अभी कोई पोस्ट नहीं है।')}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
