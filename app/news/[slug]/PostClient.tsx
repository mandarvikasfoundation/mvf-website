'use client';

import Link from 'next/link';
import { useT } from '@/lib/LanguageContext';

const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MONTHS_HI = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'];

function formatDate(isoDate: string, hi: boolean) {
  const d = new Date(isoDate + 'T00:00:00');
  const months = hi ? MONTHS_HI : MONTHS_EN;
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

const TAG_LABELS_HI: Record<string, string> = {
  "Mandar's Pride": "Mandar's Pride",
  Community: 'समुदाय',
  Events: 'आयोजन',
  Other: 'अन्य',
};

type Post = {
  slug: string;
  post_date: string;
  title_en: string;
  title_hi: string;
  body_en: string;
  body_hi: string;
  thumb_url: string | null;
  image_urls: string[];
  tags: string[];
};

export default function PostClient({ post }: { post: Post }) {
  const t = useT();
  const date = formatDate(post.post_date, false);
  const dateHi = formatDate(post.post_date, true);
  const body = t(post.body_en, post.body_hi);
  const paragraphs = body.split(/\n\s*\n/).filter(Boolean);

  return (
    <article className="container" style={{ padding: '36px 0 60px', maxWidth: 720 }}>
      <Link
        href="/news"
        style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)' }}
      >
        {t('\u2190 back to News & Updates', '\u2190 समाचार एवं अपडेट पर वापस जाएं')}
      </Link>

      <div style={{ marginTop: 16 }}>
        {post.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--saffron-600)',
              background: 'var(--card-bg)',
              padding: '3px 10px',
              borderRadius: 12,
              marginRight: 6,
            }}
          >
            {t(tag, TAG_LABELS_HI[tag] ?? tag)}
          </span>
        ))}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--label-grey)',
            marginTop: 10,
          }}
        >
          {t(date, dateHi)}
        </div>
        <h1 className="section-heading" style={{ fontSize: 28, marginTop: 6 }}>
          {t(post.title_en, post.title_hi)}
        </h1>
      </div>

      {post.thumb_url && (
        <img
          src={post.thumb_url}
          alt={t(post.title_en, post.title_hi)}
          style={{
            width: '100%',
            borderRadius: 6,
            marginTop: 20,
            maxHeight: 480,
            objectFit: 'cover',
          }}
        />
      )}

      <div style={{ fontSize: 16, lineHeight: 1.85, marginTop: 26 }}>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {post.image_urls.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: 10,
            marginTop: 20,
          }}
        >
          {post.image_urls.map((url) => (
            <img
              key={url}
              src={url}
              alt=""
              loading="lazy"
              style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 6 }}
            />
          ))}
        </div>
      )}
    </article>
  );
}
