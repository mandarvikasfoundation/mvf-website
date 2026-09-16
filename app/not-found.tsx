import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div
      className="container"
      style={{
        padding: '90px 0 110px',
        textAlign: 'center',
        maxWidth: 560,
      }}
    >
      <div
        className="eyebrow"
        style={{ color: 'var(--saffron-600)', marginBottom: 6 }}
      >
        404
      </div>
      <h1 className="section-heading" style={{ fontSize: 34, margin: '0 0 14px' }}>
        We couldn&apos;t find that page
      </h1>
      <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.7, marginBottom: 30 }}>
        The page you&apos;re looking for may have been moved or no longer
        exists. Let&apos;s get you back on track.
      </p>
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
        <Link href="/contact" className="btn btn-outline">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
