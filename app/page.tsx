import Link from 'next/link';
import PhotoStack from '@/components/PhotoStack';

const STACK_PHOTOS = [
  { src: '/images/mandars-pride/gate-evening.jpg', caption: "Mandar's Pride gate" },
  { src: '/images/mandars-pride/admissions-event.jpg' }, // captions are optional
  { src: '/images/mandars-pride/classroom.jpg', caption: 'classroom' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — full photo, no crop, no color filter. Buttons sit directly
          on the photo (bottom-right, over open sky/ground, not the gate or
          school building) so we don't need a second bar below it. */}
      <section style={{ position: 'relative' }}>
        <img
          src="/images/campus-gate.jpg"
          alt="The main gate of the Mandar Vikas Foundation campus, with the school building visible beyond"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        <div
          style={{
            position: 'absolute',
            left: 70,
            top: 100,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <Link
            href="/get-involved"
            className="btn btn-primary"
            style={{ fontSize: 15, padding: '13px 26px', textAlign: 'center' }}
          >
            Support us
          </Link>
          <Link
            href="/mandars-pride"
            className="btn"
            style={{
              background: 'white',
              color: 'var(--navy-700)',
              border: '1.5px solid var(--navy-700)',
              fontSize: 15,
              padding: '13px 26px',
              textAlign: 'center',
            }}
          >
            Meet Mandar&apos;s Pride
          </Link>
        </div>
      </section>

      <div style={{ height: 18 }} />

      {/* STATS */}
      <section className="container" style={{ paddingBottom: 30 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 14,
          }}
        >
          <StatCard value="2019" label="founded in Bihar" color="var(--navy-700)" />
          {/* Replace with real numbers as MVF shares them */}
          <StatCard value="20+" label="students at Mandar's Pride" color="var(--saffron-600)" />
          <StatCard value="[ ]" label="women trained" color="var(--green-700)" />
        </div>
      </section>

      {/* THIS IS MVF — shares the same 3-column grid as the stats row above,
          so the heading occupies the same width as the first stat card, and
          the description's right edge lines up exactly with the right edge
          of the third (rightmost) stat card. */}
      <section className="container" style={{ paddingBottom: 40 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 14,
            alignItems: 'center',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div className="section-heading" style={{ fontSize: 42 }}>
              This Is
            </div>
            <div className="section-heading" style={{ fontSize: 65 }}>
              MVF
            </div>
          </div>
          <div style={{ gridColumn: '2 / span 2' }}>
            <p style={{ fontSize: 14, lineHeight: 1.8, textAlign: 'justify' }}>
              Since 2019, Mandar Vikas Foundation has worked in Bhaga, Bounsi,
              Banka district of Bihar, supporting children&apos;s education and
              women&apos;s financial independence. We believe talent is never
              scarce in our community; opportunity is.
            </p>
            <Link
              href="/about"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--saffron-600)',
              }}
            >
              &rarr; learn more about us
            </Link>
          </div>
        </div>
      </section>

      {/* MANDAR'S PRIDE SPOTLIGHT */}
      <section
        className="ridge-band"
        style={{ background: 'var(--navy-900)', padding: '52px 0' }}
      >
        <div
          className="container"
          style={{ display: 'flex', gap: 30, alignItems: 'center', flexWrap: 'wrap' }}
        >
          <PhotoStack photos={STACK_PHOTOS} />
          <div style={{ flex: 1, minWidth: 260 }}>
            <div className="eyebrow" style={{ color: 'var(--saffron-300)' }}>
              Our Flagship Initiative
            </div>
            <div
              className="brand-script"
              style={{ fontSize: 34, color: 'white', margin: '6px 0 4px' }}
            >
              Mandar&apos;s Pride
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--sky-200)' }}>
              Mandar&apos;s Pride is a co-educational school for imparting
              quality and inclusive education for blossoming children,
              enabling them to add values to society including earning
              respectable livelihood, once they grow up.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
              <Link
                href="/mandars-pride"
                className="btn"
                style={{ background: 'var(--saffron-300)', color: 'var(--navy-900)', fontWeight: 700 }}
              >
                Explore Mandar&apos;s Pride
              </Link>
              <Link href="/mandars-pride/admissions" className="btn btn-outline-dark">
                Enroll your child
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR OTHER WORK */}
      <section className="container" style={{ padding: '48px 0 20px' }}>
        <h2
          className="section-heading"
          style={{ fontSize: 36, textAlign: 'center', marginBottom: 2 }}
        >
          Our Other Work
        </h2>
        <div
          className="eyebrow"
          style={{ textAlign: 'center', marginBottom: 20 }}
        >
          three community programs
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 12,
          }}
        >
          <WorkCard
            href="/our-work#learning-centre"
            color="var(--green-300)"
            title="MVF Learning Centre"
            blurb="Support for children who've dropped out of school or can't afford extra classes from balancing work or family duties at home."
          />
          <WorkCard
            href="/our-work#horticulture"
            color="#fac775"
            title="MVF Horticulture"
            blurb="Marigold cultivation led by the women of our community, building financial independence one harvest at a time."
          />
          <WorkCard
            href="/our-work#skill-development"
            color="#f0997b"
            title="MVF Skill Development"
            blurb="Free tailoring courses giving women a practical path toward self-sustenance and a trade of their own."
          />
        </div>
      </section>

      {/* GET INVOLVED — the SECTION uses the normal light page background;
          the dark styling lives only on the card inside it, so it reads as
          a dark card sitting on the page, not a dark section on dark. */}
      <section style={{ padding: '20px 0 44px' }}>
        <div className="container">
          <div
            style={{
              background: 'var(--navy-900)',
              borderRadius: 6,
              padding: '26px 30px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <h2 className="section-heading" style={{ fontSize: 24, color: 'white' }}>
                Support Us
              </h2>
              <p
                style={{
                  fontSize: 13,
                  color: 'var(--sky-200)',
                  marginTop: 6,
                  whiteSpace: 'nowrap',
                }}
              >
                Fees don&apos;t cover everything, your support keeps every
                program running.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'nowrap' }}>
              <Link href="/get-involved#donate" className="btn btn-primary">
                Donate now
              </Link>
              <Link href="/get-involved#volunteer" className="btn btn-outline-dark">
                Become a volunteer
              </Link>
              <Link href="/get-involved#partner" className="btn btn-outline-dark">
                Partner with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS & UPDATES (full width) */}
      <section className="ridge-divider-reverse" style={{ background: 'var(--navy-900)', padding: '30px 0 0' }}>
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 14,
          }}
        >
          <div className="eyebrow" style={{ color: 'var(--saffron-300)', fontSize: 20 }}>
            News &amp; Updates
          </div>
          <Link
            href="/news"
            style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--sky-300)' }}
          >
            see all &rarr;
          </Link>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          }}
        >
          <Link
            href="/news/independence-day-2026"
            style={{
              padding: '20px 36px',
              background: 'var(--navy-600)',
              display: 'flex',
              gap: 14,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 4,
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <img
                src="/images/news/independence-day-2026-flag-hoisting.png"
                alt="Flag hoisting at the Independence Day celebration"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--saffron-300)' }}>
                15 August 2026
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: 'white', marginTop: 3 }}>
                Independence Day at Mandar&apos;s Pride campus
              </div>
              <div style={{ fontSize: 13, color: 'var(--sky-200)', marginTop: 3 }}>
                Flag hoisting and festivities with students and staff.
              </div>
            </div>
          </Link>
          <div
            style={{
              padding: '20px 36px',
              background: 'var(--navy-900)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--sky-300)' }}>
                NEXT
              </div>
              <div style={{ fontSize: 15, color: 'var(--sky-200)', marginTop: 4 }}>
                More stories coming soon
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: 8 }} />
      </section>
    </>
  );
}

function StatCard({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div
      className="card"
      style={{ flex: '1 1 140px', textAlign: 'center', padding: '16px 10px' }}
    >
      <div style={{ fontSize: 24, fontWeight: 700, color }}>{value}</div>
      <div className="eyebrow" style={{ marginTop: 4 }}>
        {label}
      </div>
    </div>
  );
}

function WorkCard({
  href,
  color,
  title,
  blurb,
}: {
  href: string;
  color: string;
  title: string;
  blurb: string;
}) {
  return (
    <Link
      href={href}
      className="card"
      style={{
        padding: '20px 18px',
        textAlign: 'center',
        display: 'block',
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 7,
          background: color,
          margin: '0 auto 10px',
        }}
      />
      <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--navy-700)' }}>{title}</div>
      <div style={{ fontSize: 11, color: 'var(--ink-muted)', marginTop: 6, lineHeight: 1.55 }}>
        {blurb}
      </div>
    </Link>
  );
}
