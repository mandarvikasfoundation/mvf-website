'use client';

import { useState } from 'react';
import { useT } from '@/lib/LanguageContext';

export default function GetInvolvedClient() {
  const t = useT();

  return (
    <>
      <div className="container" style={{ padding: '30px 0 6px', textAlign: 'left' }}>
        <div className="eyebrow">{t('Home / Get Involved', 'होम / जुड़ें')}</div>
        <h1 className="section-heading" style={{ fontSize: 42, margin: '8px 0 0' }}>
          {t('Get Involved', 'जुड़ें')}
        </h1>
        <p style={{ fontSize: 14, color: 'var(--ink-muted)', marginTop: 2, maxWidth: 620 }}>
          {t(
            "Every part of Mandar Vikas Foundation's work, from Mandar's Pride to our community programs, runs on the support of people who believe in it. Whatever you can offer, there's a way to help.",
            "मंदार विकास फाउंडेशन के कार्य का हर हिस्सा, Mandar's Pride से लेकर हमारे सामुदायिक कार्यक्रमों तक, उन लोगों के सहयोग पर चलता है जो इसमें विश्वास रखते हैं। आप जो भी दे सकें, मदद करने का एक तरीका जरूर है।"
          )}
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 20, justifyContent: 'center' }}>
          <a href="#donate" className="btn" style={{ background: 'var(--saffron-600)', color: '#FDF2E7', borderRadius: 16, boxShadow: '0 3px 8px rgba(198,99,31,0.35)' }}>
            {t('Donate', 'दान करें')}
          </a>
          <a href="#volunteer" className="btn" style={{ background: 'var(--saffron-600)', color: '#FDF2E7', borderRadius: 16, boxShadow: '0 3px 8px rgba(198,99,31,0.35)' }}>
            {t('Volunteer', 'स्वयंसेवा')}
          </a>
          <a href="#partner" className="btn" style={{ background: 'var(--saffron-600)', color: '#FDF2E7', borderRadius: 16, boxShadow: '0 3px 8px rgba(198,99,31,0.35)' }}>
            {t('Partner', 'साझेदारी')}
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
              {t('Donate', 'दान करें')}
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 560, margin: '0 auto 28px' }}>
              {t(
                "School fees help fund Mandar's Pride, but they don't cover everything. Since the school is only one part of what we do, your donation helps us keep every program running.",
                "स्कूल की फीस Mandar's Pride को चलाने में मदद करती है, लेकिन इससे सब कुछ पूरा नहीं होता। चूंकि स्कूल हमारे कार्य का केवल एक हिस्सा है, आपका दान हमें हर कार्यक्रम को चलाए रखने में मदद करता है।"
              )}
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
                  {t('UPI QR code', 'UPI क्यूआर कोड')}
                  <br />
                  {t('(add real QR image)', '(असली क्यूआर छवि जोड़ें)')}
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 280, borderLeft: '1px solid var(--paper-line)', paddingLeft: 28 }}>
                <CopyRow label={t('UPI ID', 'UPI आईडी')} value="mandarvikas@upi" copiedLabel={t('copied!', 'कॉपी हो गया!')} />
                <CopyRow label={t('Phone (UPI)', 'फोन (UPI)')} value="9289928091" copiedLabel={t('copied!', 'कॉपी हो गया!')} />
                <div style={{ marginTop: 6, paddingTop: 6, borderTop: '0.5px dashed var(--paper-line)' }} />
                <PlainRow label={t('Account Holder', 'खाताधारक')} value="Mandar Vikas Foundation" />
                <PlainRow label={t('Bank', 'बैंक')} value="State Bank of India" />
                <PlainRow label={t('Branch', 'शाखा')} value="Baunsi" />
                <CopyRow label={t('A/C No.', 'खाता सं.')} value="39921339380" copiedLabel={t('copied!', 'कॉपी हो गया!')} />
                <CopyRow label="IFSC" value="SBIN0012530" copiedLabel={t('copied!', 'कॉपी हो गया!')} />
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
              {t('Volunteer', 'स्वयंसेवा')}
            </h2>
            <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.7, textAlign: 'justify' }}>
              {t(
                "Whether it's teaching at Mandar's Pride, helping with day-to-day tasks around the school, supporting an event, or lending a specific skill, there's likely a way to help.",
                "चाहे वह Mandar's Pride में पढ़ाना हो, स्कूल के रोजमर्रा के कामों में मदद करना हो, किसी आयोजन में सहयोग देना हो, या अपना कोई खास हुनर देना हो, मदद करने का कोई न कोई तरीका जरूर मिलेगा।"
              )}
            </p>
          </div>
          <form
            className="card"
            style={{ flex: 1, minWidth: 320, padding: 30 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <FormRow2>
              <div>
                <label htmlFor="vol-name" className="sr-only">Full name</label>
                <input id="vol-name" name="fullName" className="field-input" placeholder={t('Full name', 'पूरा नाम')} />
              </div>
              <div>
                <label htmlFor="vol-contact" className="sr-only">Phone or email</label>
                <input id="vol-contact" name="contact" className="field-input" placeholder={t('Phone or email', 'फोन या ईमेल')} />
              </div>
            </FormRow2>
            <FormRow2>
              <div>
                <label htmlFor="vol-interest" className="sr-only">Area of interest / skills</label>
                <input id="vol-interest" name="interest" className="field-input" placeholder={t('Area of interest / skills', 'रुचि का क्षेत्र / हुनर')} />
              </div>
              <div>
                <label htmlFor="vol-availability" className="sr-only">Availability</label>
                <input id="vol-availability" name="availability" className="field-input" placeholder={t('Availability', 'उपलब्धता')} />
              </div>
            </FormRow2>
            <div style={{ marginBottom: 18 }}>
              <label htmlFor="vol-message" className="sr-only">Message (optional)</label>
              <textarea id="vol-message" name="message" className="field-input" placeholder={t('Message (optional)', 'संदेश (वैकल्पिक)')} rows={3} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <button type="submit" className="btn btn-primary">
                {t('Become a volunteer', 'स्वयंसेवक बनें')}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* PARTNER — mirror of Volunteer: form left, text right */}
      <section
        id="partner"
        className="ridge-band"
        style={{ background: 'var(--navy-900)', padding: '54px 0', scrollMarginTop: 90 }}
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
              <div>
                <label htmlFor="partner-name" className="sr-only">Name</label>
                <input id="partner-name" name="name" className="field-input" style={{ color: 'white', borderBottomColor: 'rgba(255,255,255,0.3)' }} placeholder={t('Name', 'नाम')} />
              </div>
              <div>
                <label htmlFor="partner-org" className="sr-only">Organization / business (if any)</label>
                <input id="partner-org" name="organization" className="field-input" style={{ color: 'white', borderBottomColor: 'rgba(255,255,255,0.3)' }} placeholder={t('Organization / business (if any)', 'संस्था / व्यवसाय (यदि कोई हो)')} />
              </div>
            </FormRow2>
            <FormRow2>
              <div>
                <label htmlFor="partner-contact" className="sr-only">Phone or email</label>
                <input id="partner-contact" name="contact" className="field-input" style={{ color: 'white', borderBottomColor: 'rgba(255,255,255,0.3)' }} placeholder={t('Phone or email', 'फोन या ईमेल')} />
              </div>
              <div style={{ position: 'relative' }}>
                <label htmlFor="partner-support-type" className="sr-only">Type of support</label>
                <select
                  id="partner-support-type"
                  name="supportType"
                  className="field-input"
                  style={{ color: 'white', borderBottomColor: 'rgba(255,255,255,0.3)', appearance: 'none', width: '100%', paddingRight: 20 }}
                >
                  <option style={{ color: 'var(--ink)' }}>{t('Type of support', 'सहयोग का प्रकार')}</option>
                  <option style={{ color: 'var(--ink)' }}>{t('Funding', 'वित्तीय सहयोग')}</option>
                  <option style={{ color: 'var(--ink)' }}>{t('In-kind support', 'वस्तु रूप में सहयोग')}</option>
                  <option style={{ color: 'var(--ink)' }}>{t('Materials', 'सामग्री')}</option>
                  <option style={{ color: 'var(--ink)' }}>{t('Collaboration', 'सहयोग / साझेदारी')}</option>
                  <option style={{ color: 'var(--ink)' }}>{t('Other', 'अन्य')}</option>
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
              <label htmlFor="partner-message" className="sr-only">Message</label>
              <textarea id="partner-message" name="message" className="field-input" style={{ color: 'white', borderBottomColor: 'rgba(255,255,255,0.3)' }} placeholder={t('Message', 'संदेश')} rows={3} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                className="btn"
                style={{ background: 'var(--saffron-300)', color: 'var(--navy-900)', fontWeight: 700 }}
              >
                {t('Partner with us', 'हमारे साथ साझेदारी करें')}
              </button>
            </div>
          </form>
          <div style={{ flex: '0 0 340px', paddingRight: 26, textAlign: 'right' }}>
            <h2 className="section-heading" style={{ fontSize: 32, color: 'white', marginBottom: 8 }}>
              {t('Partner With Us', 'हमारे साथ साझेदारी करें')}
            </h2>
            <div style={{ fontSize: 20, color: 'var(--saffron-300)', marginBottom: 10 }}>
              {t('Individuals, businesses, and organizations, we welcome you.', 'व्यक्ति, व्यवसाय एवं संस्थाएं, हम आपका स्वागत करते हैं।')}
            </div>
            <p style={{ fontSize: 15, color: 'var(--sky-200)', lineHeight: 1.7, textAlign: 'right' }}>
              {t(
                'We welcome support from individuals, local businesses, other organizations, and institutions, whether through funding, in-kind support, materials, or collaboration on a specific initiative.',
                'हम व्यक्तियों, स्थानीय व्यवसायों, अन्य संस्थाओं एवं संगठनों से सहयोग का स्वागत करते हैं, चाहे वह वित्तीय सहयोग हो, वस्तु रूप में सहयोग हो, सामग्री हो, या किसी विशेष पहल पर साझेदारी हो।'
              )}
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

function CopyRow({ label, value, copiedLabel }: { label: string; value: string; copiedLabel: string }) {
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
        {copied ? copiedLabel : '[copy]'}
      </button>
    </div>
  );
}
