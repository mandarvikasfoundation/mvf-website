'use client';

import { useState } from 'react';
import Link from 'next/link';
import PhotoStack from '@/components/PhotoStack';

const TABS = ['Overview', 'Admissions', 'Academics', 'Facilities & Safety', 'Gallery', 'FAQ'] as const;
type Tab = (typeof TABS)[number];

const STACK_PHOTOS = [
  { src: '/images/mandars-pride/gate-evening.jpg', caption: "Mandar's Pride gate" },
  { src: '/images/mandars-pride/admissions-event.jpg' },
  { src: '/images/mandars-pride/classroom.jpg', caption: 'classroom' },
];

const GALLERY_PHOTOS = [
  { src: '/images/campus-gate.jpg', caption: 'The campus gate' },
  { src: '/images/mandars-pride/gate-evening.jpg' },
  { src: '/images/mandars-pride/admissions-event.jpg', caption: 'Admissions day' },
  { src: '/images/mandars-pride/classroom.jpg' },
];

const FAQS = [
  {
    q: 'Is admission open all year?',
    a: "Yes, Mandar's Pride accepts admissions year-round; there's no fixed enrollment window.",
  },
  {
    q: 'Is there an admission test?',
    a: 'No formal test. Admission is based on an informal interaction between the child, parents, and our Principal and Teachers.',
  },
  {
    q: 'What age is my child for each class?',
    a: 'As a general guide (common across most schools in the region): Nursery ~3 to 4 years, Class 1 ~6 to 7 years, Class 2 ~7 to 8 years. Exact cutoffs may vary, feel free to reach out to confirm your child\u2019s eligibility.',
  },
  {
    q: 'Which board do you follow?',
    a: "Mandar's Pride isn't affiliated with any education board. We design our own curriculum, focused on holistic learning.",
  },
  {
    q: 'What language is used for teaching?',
    a: 'All textbooks are in English. Teachers may explain concepts in Hindi when it helps students understand better.',
  },
  {
    q: 'Is transport available?',
    a: 'We encourage parents to drop off and pick up their children personally. Where needed, transport is provided on a merit basis, subject to availability.',
  },
];

export default function MandarsPridePage() {
  const [activeTab, setActiveTab] = useState<Tab>('Overview');
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      {/* HEADER / BREADCRUMB */}
      <div className="container" style={{ padding: '26px 0 0', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--sky-300), var(--navy-900))',
            flexShrink: 0,
            marginTop: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: 6,
            color: 'white',
            textAlign: 'center',
          }}
        >
          {/* Replace with Mandar's Pride's own logo/emblem image */}
          logo
        </div>
        <div>
          <div className="eyebrow">Home / Mandar&apos;s Pride</div>
          <div className="brand-script" style={{ fontWeight: 700, fontSize: 32, color: 'var(--navy-700)', lineHeight: 1, marginTop: 10 }}>
            Mandar&apos;s Pride
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--label-grey)', fontStyle: 'italic', marginTop: 2 }}>
            an educational initiative of Mandar Vikas Foundation
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="container" style={{ paddingTop: 20 }}>
        <div style={{ display: 'flex', gap: 2, borderBottom: '1px solid var(--paper-line)', overflowX: 'auto' }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                padding: '10px 14px',
                whiteSpace: 'nowrap',
                background: 'transparent',
                border: 'none',
                borderBottom: activeTab === tab ? '2px solid var(--saffron-600)' : '2px solid transparent',
                color: activeTab === tab ? 'var(--navy-700)' : 'var(--label-grey)',
                fontWeight: activeTab === tab ? 700 : 400,
                cursor: 'pointer',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* OVERVIEW */}
      {activeTab === 'Overview' && (
        <>
          <div className="container" style={{ padding: '30px 0', display: 'flex', gap: 30, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <PhotoStack photos={STACK_PHOTOS} photoWidth={220} crop={false} />
            <div style={{ flex: 1, minWidth: 260 }}>
              <p style={{ fontSize: 13, lineHeight: 1.8, textAlign: 'justify' }}>
                Mandar Vikas Foundation, a non-profit social organisation
                established in 2019, introduced Mandar&apos;s Pride as its
                educational initiative, a co-educational school for
                imparting quality, inclusive education to help children
                blossom, add value to society, and grow toward a
                respectable livelihood.
              </p>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--saffron-600)',
                  marginTop: 12,
                  background: 'var(--card-bg)',
                  display: 'inline-block',
                  padding: '6px 12px',
                  borderRadius: 12,
                }}
              >
                Nursery &middot; Class 1 &middot; Class 2, and growing
              </div>
            </div>
          </div>

          <div className="container" style={{ paddingBottom: 40, display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 20 }}>
            <div className="card" style={{ padding: 20 }}>
              <div className="section-heading" style={{ fontSize: 19, marginBottom: 10 }}>Vision</div>
              <ul style={{ fontSize: 13, lineHeight: 1.8, paddingLeft: 16, margin: 0, textAlign: 'justify' }}>
                <li>To motivate and promote the best in every child through a holistic education and inspiring environment.</li>
                <li>To nurture a generation of compassionate, knowledgeable, resilient leaders who drive positive change in their communities, celebrating diversity, fostering inclusivity, and embracing lifelong learning.</li>
              </ul>
            </div>
            <div className="card" style={{ padding: 20 }}>
              <div className="section-heading" style={{ fontSize: 19, marginBottom: 10 }}>Mission</div>
              <ul style={{ fontSize: 13, lineHeight: 1.8, paddingLeft: 16, margin: 0, textAlign: 'justify' }}>
                <li>Creating an environment for diverse learning strategies, motivation, and self-discipline, inculcating moral values and strength-based resilience through best practices.</li>
                <li>Developing life skills, leadership qualities, and a sense of integrity in every student by creating real opportunities.</li>
                <li>Providing a holistic, high-quality education that blends academic excellence, cultural values, and practical skills, in a safe, nurturing environment where every student feels valued and supported.</li>
              </ul>
            </div>
          </div>
        </>
      )}

      {/* ADMISSIONS */}
      {activeTab === 'Admissions' && (
        <div className="container" style={{ padding: '30px 0 50px' }}>
          <div className="section-heading" style={{ fontSize: 26, marginBottom: 6 }}>Admissions</div>
          <div
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--saffron-600)',
              background: 'var(--card-bg)',
              padding: '5px 12px',
              borderRadius: 12,
              marginBottom: 20,
            }}
          >
            Open year-round, no fixed enrollment window
          </div>

          <div style={{ background: 'var(--navy-900)', borderRadius: 8, padding: '28px 30px', marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <div>
              <div className="section-heading" style={{ fontSize: 17, color: 'white', marginBottom: 12 }}>How to Apply</div>
              <div style={{ fontSize: 13, lineHeight: 1.85, color: 'var(--sky-200)' }}>
                <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
                  <span style={{ color: 'var(--saffron-300)', fontWeight: 700 }}>1.</span>
                  Visit the school and submit a duly filled Registration-cum-Admission Form, along with the relevant documents and prescribed fees.
                </div>
                <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
                  <span style={{ color: 'var(--saffron-300)', fontWeight: 700 }}>2.</span>
                  Admission proceeds through an informal interaction between the child, the parents, and our Principal and Teachers. The date and time will be shared with parents in advance.
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <span style={{ color: 'var(--saffron-300)', fontWeight: 700 }}>3.</span>
                  The school management reserves the right to make all final admission decisions.
                </div>
              </div>
            </div>
            <div className="card" style={{ padding: 22, alignSelf: 'start' }}>
              <div className="section-heading" style={{ fontSize: 15, marginBottom: 10 }}>Documents Required</div>
              <ul style={{ fontSize: 12.5, lineHeight: 1.8, paddingLeft: 16, margin: 0 }}>
                <li>Self-attested copy of the birth certificate or an affidavit</li>
                <li>Proof of residence (passport, electricity bill, ration card, voter ID, or any other legally applicable proof)</li>
                <li>Passport or stamp-size photograph of the child</li>
                <li>Latest report card from the last school attended, if applicable</li>
              </ul>
            </div>
          </div>

          <div className="card" style={{ marginTop: 30, padding: '22px 26px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--navy-700)' }}>Ready to apply, or have a question first?</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-muted)', marginTop: 6 }}>
                Phone: 9289928091 &middot; Email: mandarspride@gmail.com
              </div>
            </div>
            <div>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <input className="field-input" placeholder="Child's name" style={{ width: 140 }} />
                <input className="field-input" placeholder="Parent contact" style={{ width: 140 }} />
                <button type="submit" className="btn btn-primary">Start an inquiry</button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ACADEMICS */}
      {activeTab === 'Academics' && (
        <div className="container" style={{ padding: '30px 0 50px' }}>
          <div className="section-heading" style={{ fontSize: 26, marginBottom: 16 }}>Academics</div>

          <p style={{ fontSize: 12.5, lineHeight: 1.85, textAlign: 'justify' }}>
            Mandar&apos;s Pride is not affiliated with any education board.
            We design our own curriculum, focused on giving children a
            strong, holistic foundation rather than following a fixed
            external syllabus. All textbooks are in English, though
            teachers may explain concepts in Hindi whenever it helps
            students understand better.
          </p>

          <div className="section-heading" style={{ fontSize: 15, marginTop: 24, marginBottom: 8 }}>School Timings</div>
          <p style={{ fontSize: 12.5, lineHeight: 1.85 }}>
            School hours run six days a week, Monday to Saturday, starting
            at 8:10 AM, with dismissal shifting slightly between seasons:
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 16, flexWrap: 'wrap' }}>
            <div className="card" style={{ flex: 1, minWidth: 180, padding: 18, textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)', letterSpacing: 1 }}>SUMMER (MAR&ndash;OCT)</div>
              <div className="section-heading" style={{ fontSize: 18, marginTop: 6 }}>8:10 AM &ndash; 1:15 PM</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)', marginTop: 4 }}>Monday to Saturday</div>
            </div>
            <div className="card" style={{ flex: 1, minWidth: 180, padding: 18, textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)', letterSpacing: 1 }}>WINTER (NOV&ndash;FEB)</div>
              <div className="section-heading" style={{ fontSize: 18, marginTop: 6 }}>8:10 AM &ndash; 1:30 PM</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)', marginTop: 4 }}>Monday to Saturday</div>
            </div>
          </div>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: 'var(--ink-muted)', marginTop: 12 }}>
            Each day includes prayer, exercise, yoga, and meditation before
            classes begin, and a lunch break around midday.
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: 'var(--ink-muted)', marginTop: 4 }}>
            The exact classes offered may change each academic year; this
            reflects the general daily structure, not a fixed class list.
          </p>

          <div style={{ marginTop: 26, background: 'var(--navy-900)', borderRadius: 6, padding: '22px 26px' }}>
            <div className="eyebrow" style={{ color: 'var(--saffron-300)', marginBottom: 8 }}>Moral &amp; Spiritual Education</div>
            <p style={{ fontSize: 12, color: 'var(--sky-200)', lineHeight: 1.75, textAlign: 'justify', margin: 0 }}>
              Mandar&apos;s Pride also intends to impart moral and spiritual
              education to its children, for the holistic growth of their
              personality and their ability to make a positive change in
              society.
            </p>
          </div>
        </div>
      )}

      {/* FACILITIES & SAFETY */}
      {activeTab === 'Facilities & Safety' && (
        <div className="container" style={{ padding: '30px 0 50px' }}>
          <div className="section-heading" style={{ fontSize: 26, marginBottom: 18 }}>Facilities &amp; Safety</div>

          <div className="card" style={{ padding: '22px 24px' }}>
            <div className="section-heading" style={{ fontSize: 15, marginBottom: 10 }}>Safety &amp; Security</div>
            <p style={{ fontSize: 12, lineHeight: 1.8, marginBottom: 16 }}>
              The safety and security of our students is of paramount
              importance to us. Measures we practice include:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
              {[
                '24\u00d77 CCTV camera coverage across various areas of the school',
                'A high boundary wall to restrict any infiltration',
                'All washrooms supervised by lady attendants, with teachers taking frequent rounds',
                'Careful, teacher-managed dispersal of students at the end of the day',
              ].map((point, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'flex-start',
                    background: 'var(--paper)',
                    border: '1px solid var(--paper-line)',
                    borderRadius: 6,
                    padding: '14px 16px',
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 26,
                      height: 26,
                      borderRadius: '50%',
                      background: 'var(--saffron-600)',
                      color: '#FDF2E7',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {i + 1}
                  </div>
                  <div style={{ fontSize: 12, lineHeight: 1.6 }}>{point}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 16, background: 'var(--navy-900)', borderRadius: 4, padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div className="section-heading" style={{ fontSize: 18, color: 'white', flexShrink: 0 }}>Transport</div>
            <p style={{ fontSize: 14, color: 'var(--sky-200)', lineHeight: 1.7, margin: 0 }}>
              We encourage parents to drop off and pick up their children
              personally. Where needed, transport is provided on a merit
              basis, subject to availability.
            </p>
          </div>
        </div>
      )}

      {/* GALLERY */}
      {activeTab === 'Gallery' && (
        <div className="container" style={{ padding: '30px 0 50px' }}>
          <div className="section-heading" style={{ fontSize: 26, marginBottom: 6 }}>Gallery</div>
          <p style={{ fontSize: 12, color: 'var(--ink-muted)', marginBottom: 20 }}>Photos from life at Mandar&apos;s Pride.</p>
          <div style={{ columnCount: 2, columnGap: 12 }}>
            {GALLERY_PHOTOS.map((photo) => (
              <button
                key={photo.src}
                onClick={() => setLightbox(photo.src)}
                style={{
                  position: 'relative',
                  display: 'block',
                  width: '100%',
                  border: 'none',
                  padding: 0,
                  marginBottom: 12,
                  cursor: 'pointer',
                  borderRadius: 4,
                  overflow: 'hidden',
                  breakInside: 'avoid',
                  background: 'var(--card-bg)',
                }}
              >
                <img src={photo.src} alt={photo.caption ?? ''} style={{ width: '100%', height: 'auto', display: 'block' }} />
                {photo.caption && (
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(15,42,74,0.75)', color: 'white', fontFamily: 'var(--font-mono)', fontSize: 10, padding: '6px 8px' }}>
                    {photo.caption}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* FAQ */}
      {activeTab === 'FAQ' && (
        <div className="container" style={{ padding: '30px 0 50px' }}>
          <div className="section-heading" style={{ fontSize: 26, marginBottom: 18 }}>Frequently Asked Questions</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {FAQS.map((f, i) => {
              const accents = ['var(--saffron-600)', 'var(--green-700)', 'var(--navy-700)'];
              const accent = accents[i % accents.length];
              return (
                <div
                  key={f.q}
                  className="card"
                  style={{
                    padding: '18px 20px',
                    borderLeft: `4px solid ${accent}`,
                    display: 'flex',
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: accent,
                      color: 'white',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 15,
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    Q
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--navy-700)' }}>{f.q}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-muted)', marginTop: 6, lineHeight: 1.7 }}>{f.a}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 28, background: 'var(--navy-900)', borderRadius: 6, padding: '22px 26px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
            <div>
              <div className="section-heading" style={{ fontSize: 15, color: 'white' }}>Still have a question?</div>
              <div style={{ fontSize: 11, color: 'var(--sky-200)', marginTop: 4 }}>Reach out through our Contact page and we&apos;ll get back to you.</div>
            </div>
            <Link href="/contact" className="btn" style={{ background: 'var(--saffron-300)', color: 'var(--navy-900)', fontWeight: 700 }}>
              Contact us
            </Link>
          </div>
        </div>
      )}

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(15,42,74,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: 24, cursor: 'zoom-out' }}
        >
          <img src={lightbox} alt="" style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: 4 }} />
        </div>
      )}
    </>
  );
}
