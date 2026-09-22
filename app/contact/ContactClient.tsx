'use client';

import { useState } from 'react';
import { useT } from '@/lib/LanguageContext';
import { createClient } from '@/lib/supabase/client';

export default function ContactClient() {
  const t = useT();
  const [reason, setReason] = useState('');
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    const supabase = createClient();
    const { error } = await supabase.from('form_submissions').insert({
      form_type: 'contact',
      data: { reason, name, emailOrPhone, message },
    });
    if (error) {
      setStatus('error');
      return;
    }
    setStatus('sent');
    setReason('');
    setName('');
    setEmailOrPhone('');
    setMessage('');
  }

  return (
    <div className="container" style={{ padding: '30px 0 50px' }}>
      <div className="eyebrow">{t('Home / Contact', 'होम / संपर्क')}</div>
      <h1 className="section-heading" style={{ fontSize: 42, margin: '8px 0 0' }}>
        {t('Contact Us', 'संपर्क करें')}
      </h1>
      <p style={{ fontSize: 14, color: 'var(--ink-muted)', marginTop: 2 }}>
        {t(
          "We'd love to hear from you, whether you have a question, want to get involved, or anything else!",
          'हमें आपसे सुनकर खुशी होगी, चाहे आपका कोई प्रश्न हो, आप जुड़ना चाहते हों, या कुछ और!'
        )}
      </p>

      <div style={{ display: 'flex', gap: 32, marginTop: 30, flexWrap: 'wrap' }}>
        <div style={{ flex: '0 0 42%', minWidth: 280 }}>
          <h2 className="section-heading" style={{ fontSize: 30, margin: '0 0 14px' }}>
            {t('Get In Touch', 'संपर्क में रहें')}
          </h2>
          <div style={{ fontSize: 14.5, lineHeight: 1.9 }}>
            <b style={{ fontSize: 16 }}>{t('Mandar Vikas Foundation', 'मंदार विकास फाउंडेशन')}</b>
            <br />
            {t('Dam Road, Bhaga, P.O. & P.S.- Bounsi', 'डैम रोड, भागा, पो. एवं पु. स्टे. बौंसी')}
            <br />
            {t('District- Banka, Bihar,', 'जिला बांका, बिहार,')} <b>{t('PIN', 'पिन')}</b> 813104
            <br />
            <br />
            <b>{t('Phone:', 'फ़ोन:')}</b> 9289928091
            <br />
            <b>{t('Email:', 'ईमेल:')}</b> mandarvikasfoundation@gmail.com
          </div>

          <iframe
            title="Mandar Vikas Foundation campus location"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d28976.55380092436!2d86.993806!3d24.793083!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ3JzM1LjEiTiA4NsKwNTknMzcuNyJF!5e0!3m2!1sen!2sus!4v1788530637340!5m2!1sen!2sus"
            style={{
              width: '100%',
              height: 260,
              border: '1px solid var(--rule)',
              borderRadius: 4,
              marginTop: 18,
            }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="card" style={{ flex: 1, minWidth: 300, padding: 28 }}>
          <div className="section-heading" style={{ fontSize: 20, textAlign: 'center', marginBottom: 18 }}>
            {t('Send Us a Message', 'हमें संदेश भेजें')}
          </div>

          {status === 'sent' ? (
            <div style={{ textAlign: 'center', padding: '40px 0', fontSize: 14, color: 'var(--green-700)' }}>
              {t(
                "Thank you! Your message has been sent. We'll get back to you within 3 working days.",
                'धन्यवाद! आपका संदेश भेज दिया गया है। हम 3 कार्यदिवसों के भीतर आपसे संपर्क करेंगे।'
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', height: 340 }}>
              <div style={{ marginBottom: 20 }}>
                <label htmlFor="contact-reason" className="sr-only">What is this about?</label>
                <select
                  id="contact-reason"
                  className="field-input"
                  style={{ appearance: 'none' }}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    {t('What is this about?', 'यह किस बारे में है?')}
                  </option>
                  <option>{t('General inquiry', 'सामान्य पूछताछ')}</option>
                  <option>{t("Mandar's Pride admissions", "Mandar's Pride में प्रवेश")}</option>
                  <option>{t('Donations', 'दान')}</option>
                  <option>{t('Volunteering', 'स्वयंसेवा')}</option>
                  <option>{t('Partnership / CSR', 'साझेदारी / सीएसआर')}</option>
                  <option>{t('Other', 'अन्य')}</option>
                </select>
              </div>
              <div className="form-grid-2" style={{ gap: 18, marginBottom: 20 }}>
                <div>
                  <label htmlFor="contact-name" className="sr-only">Name</label>
                  <input id="contact-name" name="name" className="field-input" placeholder={t('Name', 'नाम')} value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">Email or phone</label>
                  <input id="contact-email" name="emailOrPhone" className="field-input" placeholder={t('Email or phone', 'ईमेल या फोन')} value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)} required />
                </div>
              </div>
              <div style={{ flex: 1, marginBottom: 20 }}>
                <label htmlFor="contact-message" className="sr-only">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="field-input"
                  placeholder={t('Message', 'संदेश')}
                  style={{ height: '100%', resize: 'none', fontFamily: 'var(--font-serif)' }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              {status === 'error' && (
                <div style={{ fontSize: 12, color: '#b91c1c', textAlign: 'center', marginBottom: 10 }}>
                  {t('Something went wrong. Please try again.', 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।')}
                </div>
              )}
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)', textAlign: 'center', marginBottom: 16 }}>
                {t(
                  "Thank you for taking the time to reach out. We'll get back to you within 3 working days.",
                  'हमसे संपर्क करने के लिए धन्यवाद। हम 3 कार्यदिवसों के भीतर आपसे संपर्क करेंगे।'
                )}
              </div>
              <div style={{ textAlign: 'center' }}>
                <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? t('Sending\u2026', 'भेजा जा रहा है\u2026') : t('Send message', 'संदेश भेजें')}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
