'use client';

import { useState } from 'react';

export default function GetInvolvedPage() {
  return (
    <>
      <div className="container" style={{ padding: '30px 0 6px', textAlign: 'left' }}>
        <div className="eyebrow">Home / Get Involved</div>
        <h1 className="section-heading" style={{ fontSize: 42, margin: '8px 0 0' }}>
          Get Involved
        </h1>
        <p style={{ fontSize: 14, color: 'var(--ink-muted)', marginTop: 2, maxWidth: 620 }}>
          Every part of Mandar Vikas Foundation&apos;s work, from Mandar&apos;s
          Pride to our community programs, runs on the support of people who
          believe in it. Whatever you can offer, there&apos;s a way to help.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 20, justifyContent: 'center' }}>
          <a href="#donate" className="btn" style={{ background: 'var(--saffron-600)', color: '#FDF2E7', borderRadius: 16, boxShadow: '0 3px 8px rgba(198,99,31,0.35)' }}>
            Donate
          </a>
          <a href="#volunteer" className="btn" style={{ background: 'var(--saffron-600)', color: '#FDF2E7', borderRadius: 16, boxShadow: '0 3px 8px rgba(198,99,31,0.35)' }}>
            Volunteer
          </a>
          <a href="#partner" className="btn" style={{ background: 'var(--saffron-600)', color: '#FDF2E7', borderRadius: 16, boxShadow: '0 3px 8px rgba(198,99,31,0.35)' }}>
            Partner
          </a>
        </div>
      </div>

      {/* DONATE */}
      <section id="donate" style={{ padding: '32px 0 30px', scrollMarginTop: 90 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div
            className="card"
            style={{
              maxWidth: 880,
              margin: '0 auto',
              padding: '26px 34px 30px',
            }}
          >
            <h2 className="section-heading" style={{ fontSize: 34, margin: '0 0 10px' }}>
              Donate
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 560, margin: '0 auto 28px' }}>
              School fees help fund Mandar&apos;s Pride, but they don&apos;t
              cover everything. Since the school is only one part of what we
              do, your donation helps us keep every program running.
            </p>

            <div
              style={{
                display: 'flex',
                gap: 32,
                alignItems: 'center',
                flexWrap: 'wrap',
                textAlign: 'left',
              }}
            >
              <div style={{ flex: '0 0 200px', textAlign: 'center' }}>
                <div
                  style={{
                    width: 190,
                    height: 190,
                    margin: '0 auto',
                    background: 'var(--paper)',
                    border: '1px dashed var(--rule)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--label-grey)',
                    textAlign: 'center',
                  }}
                >
                  UPI QR code
                  <br />
                  (add real QR image)
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 280, borderLeft: '1px solid var(--paper-line)', paddingLeft: 28 }}>
                <CopyRow label="UPI ID" value="mandarvikas@upi" />
                <CopyRow label="Phone (UPI)" value="9289928091" />
                <div style={{ marginTop: 6, paddingTop: 6, borderTop: '0.5px dashed var(--paper-line)' }} />
                <PlainRow label="Account Holder" value="Mandar Vikas Foundation" />
                <PlainRow label="Bank" value="State Bank of India" />
                <PlainRow label="Branch" value="Baunsi" />
                <CopyRow label="A/C No." value="39921339380" />
                <CopyRow label="IFSC" value="SBIN0012530" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER — text left, form right (mirrored by Partner below) */}
      <section id="volunteer" style={{ padding: '10px 0 44px', scrollMarginTop: 90 }}>
        <div className="container" style={{ display: 'flex', gap: 30, alignItems: 'center', flexWrap: 'wrap', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 26, top: 0, bottom: 0, width: 1, background: 'var(--margin-red)', opacity: 0.3 }} />
          <div style={{ flex: '0 0 300px', paddingLeft: 26 }}>
            <h2 className="section-heading" style={{ fontSize: 34, marginBottom: 10 }}>
              Volunteer
            </h2>
            <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.7, textAlign: 'justify' }}>
              Whether it&apos;s teaching at Mandar&apos;s Pride, helping with
              day-to-day tasks around the school, supporting an event, or
              lending a specific skill, there&apos;s likely a way to help.
            </p>
          </div>
          <form
            className="card"
            style={{ flex: 1, minWidth: 320, padding: 30 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <FormRow2>
              <input className="field-input" placeholder="Full name" />
              <input className="field-input" placeholder="Phone or email" />
            </FormRow2>
            <FormRow2>
              <input className="field-input" placeholder="Area of interest / skills" />
              <input className="field-input" placeholder="Availability" />
            </FormRow2>
            <div style={{ marginBottom: 18 }}>
              <textarea className="field-input" placeholder="Message (optional)" rows={3} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <button type="submit" className="btn btn-primary">
                Become a volunteer
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* PARTNER — mirror of Volunteer: form left, text right */}
      <section
        id="partner"
        className="ridge-divider"
        style={{ background: 'var(--navy-900)', padding: '44px 0', scrollMarginTop: 90 }}
      >
        <div className="container" style={{ display: 'flex', gap: 30, alignItems: 'center', flexWrap: 'wrap-reverse', position: 'relative' }}>
          <div style={{ position: 'absolute', right: 26, top: 0, bottom: 0, width: 1, background: 'var(--saffron-300)', opacity: 0.3 }} />
          <form
            style={{
              flex: '1 1 260px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 4,
              padding: 28,
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <FormRow2>
              <input className="field-input" style={{ color: 'white', borderBottomColor: 'rgba(255,255,255,0.3)' }} placeholder="Name" />
              <input className="field-input" style={{ color: 'white', borderBottomColor: 'rgba(255,255,255,0.3)' }} placeholder="Organization / business (if any)" />
            </FormRow2>
            <FormRow2>
              <input className="field-input" style={{ color: 'white', borderBottomColor: 'rgba(255,255,255,0.3)' }} placeholder="Phone or email" />
              <div style={{ position: 'relative' }}>
                <select
                  className="field-input"
                  style={{ color: 'white', borderBottomColor: 'rgba(255,255,255,0.3)', appearance: 'none', width: '100%', paddingRight: 20 }}
                >
                  <option style={{ color: 'var(--ink)' }}>Type of support</option>
                  <option style={{ color: 'var(--ink)' }}>Funding</option>
                  <option style={{ color: 'var(--ink)' }}>In-kind support</option>
                  <option style={{ color: 'var(--ink)' }}>Materials</option>
                  <option style={{ color: 'var(--ink)' }}>Collaboration</option>
                  <option style={{ color: 'var(--ink)' }}>Other</option>
                </select>
                <span
                  style={{
                    position: 'absolute',
                    right: 2,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: 18,
                  }}
                >
                  &#9662;
                </span>
              </div>
            </FormRow2>
            <div style={{ marginBottom: 18 }}>
              <textarea className="field-input" style={{ color: 'white', borderBottomColor: 'rgba(255,255,255,0.3)' }} placeholder="Message" rows={3} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                className="btn"
                style={{ background: 'var(--saffron-300)', color: 'var(--navy-900)', fontWeight: 700 }}
              >
                Partner with us
              </button>
            </div>
          </form>
          <div style={{ flex: '0 0 340px', paddingRight: 26, textAlign: 'right' }}>
            <h2 className="section-heading" style={{ fontSize: 32, color: 'white', marginBottom: 8 }}>
              Partner With Us
            </h2>
            <div style={{ fontSize: 20, color: 'var(--saffron-300)', marginBottom: 10 }}>
              Individuals, businesses, and organizations, we welcome you.
            </div>
            <p style={{ fontSize: 15, color: 'var(--sky-200)', lineHeight: 1.7, textAlign: 'right' }}>
              We welcome support from individuals, local businesses, other
              organizations, and institutions, whether through funding,
              in-kind support, materials, or collaboration on a specific
              initiative.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function FormRow2({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 16 }}>
      {children}
    </div>
  );
}

function PlainRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.9 }}>
      {label}: <b>{value}</b>
    </div>
  );
}

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard API unavailable; silently ignore
    }
  }

  return (
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.9 }}>
      {label}: <b>{value}</b>{' '}
      <button
        onClick={handleCopy}
        style={{
          border: 'none',
          background: 'transparent',
          color: 'var(--saffron-600)',
          cursor: 'pointer',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          padding: 0,
        }}
      >
        {copied ? 'copied!' : '[copy]'}
      </button>
    </div>
  );
}
