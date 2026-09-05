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
      <section id="donate" style={{ padding: '32px 0', scrollMarginTop: 90 }}>
        <div className="container">
          <div
            className="card"
            style={{
              maxWidth: 780,
              margin: '0 auto',
              padding: '30px 34px',
              display: 'flex',
              gap: 28,
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ flex: '0 0 28%', textAlign: 'center', minWidth: 160 }}>
              <div className="section-heading" style={{ fontSize: 26, marginBottom: 14 }}>
                Donate
              </div>
              <div
                style={{
                  width: 130,
                  height: 130,
                  margin: '0 auto',
                  background: 'var(--paper)',
                  border: '1px dashed var(--rule)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: 'var(--label-grey)',
                  textAlign: 'center',
                }}
              >
                UPI QR code
                <br />
                (add real QR image)
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 260, borderLeft: '1px solid var(--paper-line)', paddingLeft: 26 }}>
              <p style={{ fontSize: 12.5, lineHeight: 1.7, textAlign: 'justify', marginBottom: 14 }}>
                School fees help fund Mandar&apos;s Pride, but they don&apos;t
                cover everything. Since the school is only one part of what
                we do, your donation helps us keep every program running.
              </p>
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
      </section>

      {/* VOLUNTEER */}
      <section id="volunteer" style={{ padding: '36px 0', textAlign: 'center', scrollMarginTop: 90 }}>
        <div className="container">
          <h2 className="section-heading" style={{ fontSize: 34, marginBottom: 8 }}>
            Volunteer
          </h2>
          <p style={{ fontSize: 12, color: 'var(--ink-muted)', maxWidth: 480, margin: '0 auto 24px', lineHeight: 1.7 }}>
            Whether it&apos;s teaching at Mandar&apos;s Pride, helping with
            day-to-day tasks around the school, supporting an event, or
            lending a specific skill, there&apos;s likely a way to help.
          </p>
          <form
            className="card"
            style={{ maxWidth: 520, margin: '0 auto', padding: 26, textAlign: 'left' }}
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

      {/* PARTNER */}
      <section
        id="partner"
        className="ridge-divider"
        style={{ background: 'var(--navy-900)', padding: '44px 0', textAlign: 'center', scrollMarginTop: 90 }}
      >
        <div className="container">
          <h2 className="section-heading" style={{ fontSize: 32, color: 'white', marginBottom: 8 }}>
            Partner With Us
          </h2>
          <div style={{ fontSize: 16, color: 'var(--saffron-300)', maxWidth: 560, margin: '0 auto 10px' }}>
            Individuals, businesses, and organizations, we welcome you.
          </div>
          <p style={{ fontSize: 12, color: 'var(--sky-200)', maxWidth: 640, margin: '0 auto', lineHeight: 1.7 }}>
            We welcome support from individuals, local businesses, other
            organizations, and institutions, whether through funding,
            in-kind support, materials, or collaboration on a specific
            initiative.
          </p>

          <form
            style={{
              maxWidth: 540,
              margin: '26px auto 0',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 4,
              padding: 24,
              textAlign: 'left',
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <FormRow2>
              <input className="field-input" style={{ color: 'white', borderBottomColor: 'rgba(255,255,255,0.3)' }} placeholder="Name" />
              <input className="field-input" style={{ color: 'white', borderBottomColor: 'rgba(255,255,255,0.3)' }} placeholder="Organization / business (if any)" />
            </FormRow2>
            <FormRow2>
              <input className="field-input" style={{ color: 'white', borderBottomColor: 'rgba(255,255,255,0.3)' }} placeholder="Phone or email" />
              <select className="field-input" style={{ color: 'white', borderBottomColor: 'rgba(255,255,255,0.3)', appearance: 'none' }}>
                <option style={{ color: 'var(--ink)' }}>Type of support</option>
                <option style={{ color: 'var(--ink)' }}>Funding</option>
                <option style={{ color: 'var(--ink)' }}>In-kind support</option>
                <option style={{ color: 'var(--ink)' }}>Materials</option>
                <option style={{ color: 'var(--ink)' }}>Collaboration</option>
                <option style={{ color: 'var(--ink)' }}>Other</option>
              </select>
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
