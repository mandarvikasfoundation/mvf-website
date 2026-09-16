import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Independence Day at Mandar's Pride Campus",
};

export default function IndependenceDayPost() {
  return (
    <article className="container" style={{ padding: '36px 0 60px', maxWidth: 720 }}>
      <Link
        href="/news"
        style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)' }}
      >
        &larr; back to News &amp; Updates
      </Link>

      <div style={{ marginTop: 16 }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--saffron-600)',
            background: 'var(--card-bg)',
            padding: '3px 10px',
            borderRadius: 12,
          }}
        >
          Community
        </span>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--label-grey)',
            marginTop: 10,
          }}
        >
          15 August 2026
        </div>
        <h1 className="section-heading" style={{ fontSize: 28, marginTop: 6 }}>
          Independence Day at Mandar&apos;s Pride Campus
        </h1>
      </div>

      <img
        src="/images/news/independence-day-2026-flag-hoisting.png"
        alt="Flag hoisting ceremony at Mandar's Pride, students holding small tricolour flags"
        style={{
          width: '100%',
          borderRadius: 6,
          marginTop: 20,
          maxHeight: 480,
          objectFit: 'cover',
        }}
      />

      <div style={{ fontSize: 15, lineHeight: 1.85, marginTop: 26 }}>
        <p>
          On the morning of 15th August, students and staff at Mandar Vikas
          Foundation&apos;s campus came together to mark India&apos;s
          Independence Day. The celebration opened with the flag hoisting
          ceremony, as the tricolour was raised while children stood
          together waving small flags and singing the national anthem.
        </p>
        <p>
          Following the ceremony, students took part in a series of short
          cultural performances, including patriotic songs and recitations
          they had prepared in the days leading up to the celebration.
          Teachers and staff joined in throughout the morning, and the day
          closed with flowers and sweets shared among everyone present.
        </p>
        <p>
          Moments like these are a reminder of the values Mandar&apos;s
          Pride hopes to instill in its students: pride in their community,
          in their learning, and in the country they are growing up in.
        </p>
      </div>
    </article>
  );
}
