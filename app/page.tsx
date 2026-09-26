'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import PhotoStack from '@/components/PhotoStack';
import { useT } from '@/lib/LanguageContext';
import { createClient } from '@/lib/supabase/client';

const STACK_PHOTOS = [
  { src: '/images/mandars-pride/gate-evening.jpg', caption: "Mandar's Pride gate" },
  { src: '/images/mandars-pride/admissions-event.jpg' }, // captions are optional
  { src: '/images/mandars-pride/classroom.jpg', caption: 'classroom' },
];

// These are shown immediately (no layout shift on load) and replaced the
// moment the real values come back from site_settings, which is what the
// admin panel's "Homepage Stats" page edits.
const DEFAULT_STATS = { founded_year: '2019', students_count: '20+', women_trained_count: '100+' };

export default function HomePage() {
  const t = useT();
  const [stats, setStats] = useState(DEFAULT_STATS);

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from('site_settings')
      .select('founded_year, students_count, women_trained_count')
      .eq('id', 1)
      .single()
      .then(({ data }) => {
        if (data) setStats(data);
      });
  }, []);

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
          fetchPriority="high"
        />
        <div
          className="hero-cta"
          style={{
            position: 'absolute',
            left: '5%',
            top: '12%',
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
            {t('Support us', 'हमारा साथ दें')}
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
            {t("Meet Mandar's Pride", "Mandar's Pride से मिलें")}
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
          <StatCard value={stats.founded_year} label={t('founded in Bihar', 'बिहार में स्थापित')} color="var(--navy-700)" />
          <StatCard
            value={stats.students_count}
            label={t("students at Mandar's Pride", "Mandar's Pride में छात्र")}
            color="var(--saffron-600)"
          />
          <StatCard value={stats.women_trained_count} label={t('women trained', 'प्रशिक्षित महिलाएं')} color="var(--green-700)" />
        </div>
      </section>

      {/* THIS IS MVF — shares the same 3-column grid as the stats row above,
          so the heading occupies the same width as the first stat card, and
          the description's right edge lines up exactly with the right edge
          of the third (rightmost) stat card. */}
      <section className="container" style={{ paddingBottom: 40 }}>
        <div
          className="this-is-mvf-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 14,
            alignItems: 'center',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div className="section-heading" style={{ fontSize: 42 }}>
              {t('This Is', 'यह है')}
            </div>
            <div className="section-heading" style={{ fontSize: 65 }}>
              MVF
            </div>
          </div>
          <div className="this-is-mvf-text" style={{ gridColumn: '2 / span 2' }}>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, textAlign: 'justify' }}>
              {t(
                "Since 2019, Mandar Vikas Foundation has worked in Bhaga, Bounsi, Banka district of Bihar, supporting children's education and women's financial independence. We believe talent is never scarce in our community; opportunity is.",
                'सन 2019 से, मंदार विकास फाउंडेशन बिहार के बांका जिले के बौंसी स्थित भागा में बच्चों की शिक्षा और महिलाओं की आर्थिक आत्मनिर्भरता के लिए कार्यरत है। हमारा मानना है कि हमारे समुदाय में प्रतिभा की कभी कमी नहीं रही, कमी सिर्फ अवसर की रही है।'
              )}
            </p>
            <Link
              href="/about"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--saffron-600)',
              }}
            >
              {t('\u2192 learn more about us', '\u2192 हमारे बारे में और जानें')}
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
          className="container spotlight-container"
          style={{ display: 'flex', gap: 30, alignItems: 'center', flexWrap: 'wrap' }}
        >
          <PhotoStack photos={STACK_PHOTOS} />
          <div className="spotlight-text" style={{ flex: 1, minWidth: 260 }}>
            <div className="eyebrow" style={{ color: 'var(--saffron-300)' }}>
              {t('Our Flagship Initiative', 'हमारी प्रमुख पहल')}
            </div>
            <div
              className="brand-script"
              style={{ fontSize: 34, color: 'white', margin: '6px 0 4px' }}
            >
              Mandar&apos;s Pride
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--sky-200)' }}>
              {t(
                "Mandar's Pride is a co-educational school for imparting quality and inclusive education for blossoming children, enabling them to add values to society including earning respectable livelihood, once they grow up.",
                'Mandar\'s Pride एक सह-शिक्षा विद्यालय है, जो पल्लवित होते बच्चों को गुणवत्तापूर्ण एवं समावेशी शिक्षा प्रदान करता है, ताकि बड़े होकर वे समाज में योगदान दे सकें और सम्मानजनक आजीविका अर्जित कर सकें।'
              )}
            </p>
            <div className="spotlight-buttons" style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
              <Link
                href="/mandars-pride"
                className="btn"
                style={{ background: 'var(--saffron-300)', color: 'var(--navy-900)', fontWeight: 700 }}
              >
                {t("Explore Mandar's Pride", "Mandar's Pride के बारे में जानें")}
              </Link>
              <Link href="/mandars-pride/admissions" className="btn btn-outline-dark">
                {t('Enroll your child', 'अपने बच्चे का दाखिला कराएं')}
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
          {t('Our Works', 'हमारे कार्य')}
        </h2>
        <div
          className="eyebrow"
          style={{ textAlign: 'center', marginBottom: 20 }}
        >
          {t('three community programs', 'तीन सामुदायिक कार्यक्रम')}
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
            title={t('MVF Learning Centre', 'MVF लर्निंग सेंटर')}
            blurb={t(
              "Support for children who've dropped out of school or can't afford extra classes from balancing work or family duties at home.",
              'उन बच्चों के लिए सहयोग जो स्कूल छोड़ चुके हैं या घर के काम व पारिवारिक जिम्मेदारियों के कारण अतिरिक्त कक्षाएं नहीं ले पाते।'
            )}
          />
          <WorkCard
            href="/our-work#horticulture"
            color="#fac775"
            title={t('MVF Horticulture', 'MVF बागवानी')}
            blurb={t(
              'Marigold cultivation led by the women of our community, building financial independence one harvest at a time.',
              'हमारे समुदाय की महिलाओं द्वारा संचालित गेंदा फूल की खेती, जो हर फसल के साथ आर्थिक आत्मनिर्भरता का निर्माण करती है।'
            )}
          />
          <WorkCard
            href="/our-work#skill-development"
            color="#f0997b"
            title={t('MVF Skill Development', 'MVF कौशल विकास')}
            blurb={t(
              'Free tailoring courses giving women a practical path toward self-sustenance and a trade of their own.',
              'निःशुल्क सिलाई प्रशिक्षण, जो महिलाओं को आत्मनिर्भरता और अपना खुद का हुनर पाने का व्यावहारिक मार्ग देता है।'
            )}
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
                {t('Support Us', 'सहयोग करें')}
              </h2>
              <p
                style={{
                  fontSize: 13,
                  color: 'var(--sky-200)',
                  marginTop: 6,
                }}
              >
                {t(
                  "Fees don't cover everything, your support keeps every program running.",
                  'फीस से सब कुछ पूरा नहीं होता, आपका सहयोग हर कार्यक्रम को चलाए रखता है।'
                )}
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'nowrap' }}>
              <Link href="/get-involved#donate" className="btn btn-primary">
                {t('Donate now', 'अभी दान करें')}
              </Link>
              <Link href="/get-involved#volunteer" className="btn btn-outline-dark">
                {t('Become a volunteer', 'स्वयंसेवक बनें')}
              </Link>
              <Link href="/get-involved#partner" className="btn btn-outline-dark">
                {t('Partner with us', 'हमारे साथ साझेदारी करें')}
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
            {t('News & Updates', 'समाचार एवं अपडेट')}
          </div>
          <Link
            href="/news"
            style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--sky-300)' }}
          >
            {t('see all \u2192', 'सभी देखें \u2192')}
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
                loading="lazy"
              />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--saffron-300)' }}>
                {t('15 August 2026', '15 अगस्त 2026')}
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: 'white', marginTop: 3 }}>
                {t("Independence Day at Mandar's Pride campus", "Mandar's Pride परिसर में स्वतंत्रता दिवस")}
              </div>
              <div style={{ fontSize: 13, color: 'var(--sky-200)', marginTop: 3 }}>
                {t('Flag hoisting and festivities with students and staff.', 'छात्रों एवं स्टाफ के साथ ध्वजारोहण एवं उत्सव।')}
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
                {t('NEXT', 'आगे')}
              </div>
              <div style={{ fontSize: 15, color: 'var(--sky-200)', marginTop: 4 }}>
                {t('More stories coming soon', 'जल्द ही और कहानियां आ रही हैं')}
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
      <div style={{ fontSize: 12.5, color: 'var(--ink-muted)', marginTop: 6, lineHeight: 1.55 }}>
        {blurb}
      </div>
    </Link>
  );
}
