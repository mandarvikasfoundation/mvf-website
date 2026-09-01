import Link from 'next/link';
import PhotoStack from '@/components/PhotoStack';

const STACK_PHOTOS = [
  { src: '/images/placeholder-1.jpg', caption: 'class time' },
  { src: '/images/placeholder-2.jpg' }, // captions are optional
  { src: '/images/placeholder-3.jpg', caption: 'campus' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="ridge-divider"
        style={{
          position: 'relative',
          height: 340,
          display: 'flex',
          alignItems: 'flex-end',
          backgroundImage:
            'linear-gradient(100deg, rgba(10,30,58,0.65), rgba(10,30,58,0.2)), url(/images/campus-gate.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="container"
          style={{
            paddingBottom: 40,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              color: 'var(--saffron-300)',
            }}
          >
            Bhaga, Bounsi &middot; Banka District, Bihar
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <Link href="/get-involved" className="btn btn-primary">
              Support us
            </Link>
            <Link href="/mandars-pride" className="btn btn-outline-dark">
              Meet Mandar&apos;s Pride
            </Link>
          </div>
        </div>
      </section>

      <div style={{ height: 18 }} />

      {/* STATS */}
      <section className="container" style={{ paddingBottom: 30 }}>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <StatCard value="2019" label="founded in Bihar" color="var(--navy-700)" />
          {/* Replace with real numbers as MVF shares them */}
          <StatCard value="25" label="students at Mandar's Pride" color="var(--saffron-600)" />
          <StatCard value="—" label="women trained" color="var(--green-700)" />
        </div>
      </section>

      {/* THIS IS MVF */}
      <section className="container" style={{ paddingBottom: 40 }}>
        <div style={{ display: 'flex', gap: 30, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 320px' }}>
            <div className="section-heading" style={{ fontSize: 42 }}>
              This Is
            </div>
            <div className="section-heading" style={{ fontSize: 65 }}>
              MVF
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p style={{ fontSize: 14, lineHeight: 1.8, textAlign: 'justify', maxWidth: 460 }}>
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
        className="ridge-divider"
        style={{ background: 'var(--navy-900)', padding: '44px 0' }}
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
            <p style={{ fontSize: 13, color: 'var(--sky-200)', maxWidth: 280 }}>
              Currently teaching Nursery, Class 1, and Class 2, and growing.
              Admissions open year-round.
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
      <section className="container" style={{ padding: '40px 0 10px' }}>
        <h2
          className="section-heading"
          style={{ fontSize: 30, textAlign: 'center', marginBottom: 2 }}
        >
          Our other work
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 12,
          }}
        >
          <WorkCard
            color="var(--green-300)"
            title="Learning Centre"
            blurb="Support for children who fall behind due to work or family duties."
          />
          <WorkCard
            color="#fac775"
            title="Horticulture"
            blurb="Marigold cultivation led by women, building financial independence."
          />
          <WorkCard
            color="#f0997b"
            title="Skill Development"
            blurb="Free tailoring courses toward self-sustenance for women."
          />
        </div>
      </section>

      {/* GET INVOLVED */}
      <section
        className="ridge-divider"
        style={{ background: 'var(--navy-700)', padding: '40px 0 32px' }}
      >
        <div className="container">
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
            Fees don&apos;t cover everything, your support keeps every program
            running.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
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
      </section>

      {/* NEWS & UPDATES (full width) */}
      <section style={{ background: 'var(--navy-900)', padding: '26px 0 0' }}>
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 14,
          }}
        >
          <div className="eyebrow" style={{ color: 'var(--saffron-300)' }}>
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
                background: 'linear-gradient(135deg, var(--saffron-300), var(--saffron-600))',
                flexShrink: 0,
              }}
            />
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--saffron-300)' }}>
                15 August 2026
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'white', marginTop: 3 }}>
                Independence Day at MVF campus
              </div>
              <div style={{ fontSize: 11, color: 'var(--sky-200)', marginTop: 3 }}>
                Flag hoisting and festivities with students and staff.
              </div>
            </div>
          </Link>
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

function WorkCard({ color, title, blurb }: { color: string; title: string; blurb: string }) {
  return (
    <div className="card" style={{ padding: 16 }}>
      <div
        style={{
          width: 26,
          height: 26,
          borderRadius: 6,
          background: color,
          marginBottom: 8,
        }}
      />
      <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--navy-700)' }}>{title}</div>
      <div style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 4, lineHeight: 1.5 }}>
        {blurb}
      </div>
    </div>
  );
}
