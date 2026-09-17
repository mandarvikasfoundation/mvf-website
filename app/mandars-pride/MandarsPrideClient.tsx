'use client';

import { useState } from 'react';
import Link from 'next/link';
import PhotoStack from '@/components/PhotoStack';
import { useT } from '@/lib/LanguageContext';

const TABS = ['Overview', 'Admissions', 'Academics', 'Facilities & Safety', 'Gallery', 'FAQ'] as const;
type Tab = (typeof TABS)[number];

const TAB_LABELS_HI: Record<Tab, string> = {
  Overview: 'अवलोकन',
  Admissions: 'प्रवेश',
  Academics: 'शिक्षा',
  'Facilities & Safety': 'सुविधाएं एवं सुरक्षा',
  Gallery: 'गैलरी',
  FAQ: 'सामान्य प्रश्न',
};

const STACK_PHOTOS = [
  { src: '/images/mandars-pride/gate-evening.jpg', caption: "Mandar's Pride gate" },
  { src: '/images/mandars-pride/admissions-event.jpg' }, // captions are optional
  { src: '/images/mandars-pride/classroom.jpg', caption: 'classroom' },
];

const GALLERY_PHOTOS: { src: string; caption?: string; captionHi?: string }[] = [
  { src: '/images/campus-gate.jpg', caption: 'The campus gate', captionHi: 'परिसर का प्रवेश द्वार' },
  { src: '/images/mandars-pride/gate-evening.jpg' },
  { src: '/images/mandars-pride/admissions-event.jpg', caption: 'Admissions day', captionHi: 'प्रवेश दिवस' },
  { src: '/images/mandars-pride/classroom.jpg' },
];

const FAQS = [
  {
    q: 'Is admission open all year?',
    qHi: 'क्या प्रवेश पूरे वर्ष खुला रहता है?',
    a: "Yes, Mandar's Pride accepts admissions year-round; there's no fixed enrollment window.",
    aHi: "हां, Mandar's Pride पूरे वर्ष प्रवेश स्वीकार करता है; कोई निश्चित नामांकन अवधि नहीं है।",
  },
  {
    q: 'Is there an admission test?',
    qHi: 'क्या कोई प्रवेश परीक्षा होती है?',
    a: 'No formal test. Admission is based on an informal interaction between the child, parents, and our Principal and Teachers.',
    aHi: 'कोई औपचारिक परीक्षा नहीं है। प्रवेश बच्चे, माता-पिता एवं हमारे प्राचार्य व शिक्षकों के बीच एक अनौपचारिक बातचीत पर आधारित है।',
  },
  {
    q: 'What age is my child for each class?',
    qHi: 'प्रत्येक कक्षा के लिए मेरे बच्चे की उम्र क्या होनी चाहिए?',
    a: 'As a general guide (common across most schools in the region): Nursery ~3 to 4 years, Class 1 ~6 to 7 years, Class 2 ~7 to 8 years. Exact cutoffs may vary, feel free to reach out to confirm your child\u2019s eligibility.',
    aHi: 'एक सामान्य मार्गदर्शिका के रूप में (क्षेत्र के अधिकांश स्कूलों में सामान्य): नर्सरी ~3 से 4 वर्ष, कक्षा 1 ~6 से 7 वर्ष, कक्षा 2 ~7 से 8 वर्ष। सटीक सीमाएं भिन्न हो सकती हैं, अपने बच्चे की पात्रता की पुष्टि के लिए बेझिझक हमसे संपर्क करें।',
  },
  {
    q: 'Which board do you follow?',
    qHi: 'आप किस बोर्ड का पालन करते हैं?',
    a: "Mandar's Pride isn't affiliated with any education board. We design our own curriculum, focused on holistic learning.",
    aHi: "Mandar's Pride किसी भी शिक्षा बोर्ड से संबद्ध नहीं है। हम अपना खुद का पाठ्यक्रम बनाते हैं, जो समग्र शिक्षा पर केंद्रित है।",
  },
  {
    q: 'What language is used for teaching?',
    qHi: 'शिक्षण के लिए किस भाषा का उपयोग किया जाता है?',
    a: 'All textbooks are in English. Teachers may explain concepts in Hindi when it helps students understand better.',
    aHi: 'सभी पाठ्यपुस्तकें अंग्रेजी में हैं। शिक्षक जब छात्रों को बेहतर समझने में मदद मिले तो हिंदी में अवधारणाएं समझा सकते हैं।',
  },
  {
    q: 'Is transport available?',
    qHi: 'क्या परिवहन सुविधा उपलब्ध है?',
    a: 'We encourage parents to drop off and pick up their children personally. Where needed, transport is provided on a merit basis, subject to availability.',
    aHi: 'हम अभिभावकों को अपने बच्चों को स्वयं छोड़ने एवं लेने के लिए प्रोत्साहित करते हैं। जहां आवश्यक हो, उपलब्धता के अधीन योग्यता के आधार पर परिवहन प्रदान किया जाता है।',
  },
];

export default function MandarsPrideClient() {
  const [activeTab, setActiveTab] = useState<Tab>('Overview');
  const [lightbox, setLightbox] = useState<{ src: string; caption?: string; captionHi?: string } | null>(null);
  const t = useT();

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
          <div className="eyebrow">{t("Home / Mandar's Pride", "होम / Mandar's Pride")}</div>
          <h1 className="brand-script" style={{ fontWeight: 700, fontSize: 32, color: 'var(--navy-700)', lineHeight: 1, marginTop: 10 }}>
            Mandar&apos;s Pride
          </h1>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--label-grey)', fontStyle: 'italic', marginTop: 2 }}>
            {t('an educational initiative of Mandar Vikas Foundation', 'मंदार विकास फाउंडेशन की एक शैक्षणिक पहल')}
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
              {t(tab, TAB_LABELS_HI[tab])}
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
                {t(
                  "Mandar Vikas Foundation, a non-profit social organisation established in 2019, introduced Mandar's Pride as its educational initiative, a co-educational school for imparting quality, inclusive education to help children blossom, add value to society, and grow toward a respectable livelihood.",
                  "मंदार विकास फाउंडेशन, 2019 में स्थापित एक गैर-लाभकारी सामाजिक संस्था, ने Mandar's Pride को अपनी शैक्षणिक पहल के रूप में शुरू किया, जो एक सह-शिक्षा विद्यालय है, जो बच्चों को पल्लवित होने, समाज में योगदान देने एवं सम्मानजनक आजीविका की ओर बढ़ने में मदद करने के लिए गुणवत्तापूर्ण, समावेशी शिक्षा प्रदान करता है।"
                )}
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
                {t('Nursery \u00b7 Class 1 \u00b7 Class 2, and growing', 'नर्सरी \u00b7 कक्षा 1 \u00b7 कक्षा 2, और बढ़ रहा है')}
              </div>
            </div>
          </div>

          <div className="container" style={{ paddingBottom: 40, display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 20 }}>
            <div className="card" style={{ padding: 20 }}>
              <div className="section-heading" style={{ fontSize: 19, marginBottom: 10 }}>{t('Vision', 'दृष्टि')}</div>
              <ul style={{ fontSize: 13, lineHeight: 1.8, paddingLeft: 16, margin: 0, textAlign: 'justify' }}>
                <li>
                  {t(
                    'To motivate and promote the best in every child through a holistic education and inspiring environment.',
                    'समग्र शिक्षा एवं प्रेरणादायक वातावरण के माध्यम से हर बच्चे में सर्वश्रेष्ठ को प्रेरित एवं प्रोत्साहित करना।'
                  )}
                </li>
                <li>
                  {t(
                    'To nurture a generation of compassionate, knowledgeable, resilient leaders who drive positive change in their communities, celebrating diversity, fostering inclusivity, and embracing lifelong learning.',
                    'एक ऐसी पीढ़ी तैयार करना जो दयालु, ज्ञानवान एवं दृढ़ नेता हों, जो अपने समुदायों में सकारात्मक बदलाव लाएं, विविधता का सम्मान करें, समावेशिता को बढ़ावा दें, और आजीवन सीखने को अपनाएं।'
                  )}
                </li>
              </ul>
            </div>
            <div className="card" style={{ padding: 20 }}>
              <div className="section-heading" style={{ fontSize: 19, marginBottom: 10 }}>{t('Mission', 'मिशन')}</div>
              <ul style={{ fontSize: 13, lineHeight: 1.8, paddingLeft: 16, margin: 0, textAlign: 'justify' }}>
                <li>
                  {t(
                    'Creating an environment for diverse learning strategies, motivation, and self-discipline, inculcating moral values and strength-based resilience through best practices.',
                    'विविध शिक्षण रणनीतियों, प्रेरणा एवं आत्म-अनुशासन के लिए एक वातावरण बनाना, तथा सर्वोत्तम प्रथाओं के माध्यम से नैतिक मूल्यों एवं सशक्त दृढ़ता का विकास करना।'
                  )}
                </li>
                <li>
                  {t(
                    'Developing life skills, leadership qualities, and a sense of integrity in every student by creating real opportunities.',
                    'वास्तविक अवसर उपलब्ध कराकर हर छात्र में जीवन-कौशल, नेतृत्व गुण एवं सत्यनिष्ठा की भावना विकसित करना।'
                  )}
                </li>
                <li>
                  {t(
                    'Providing a holistic, high-quality education that blends academic excellence, cultural values, and practical skills, in a safe, nurturing environment where every student feels valued and supported.',
                    'एक सुरक्षित, पोषण देने वाले वातावरण में समग्र, उच्च-गुणवत्ता वाली शिक्षा प्रदान करना जो शैक्षणिक उत्कृष्टता, सांस्कृतिक मूल्यों एवं व्यावहारिक कौशल का समन्वय करे, जहां हर छात्र को महत्व एवं सहयोग मिले।'
                  )}
                </li>
              </ul>
            </div>
          </div>
        </>
      )}

      {/* ADMISSIONS */}
      {activeTab === 'Admissions' && (
        <div className="container" style={{ padding: '30px 0 50px' }}>
          <div className="section-heading" style={{ fontSize: 26, marginBottom: 6 }}>{t('Admissions', 'प्रवेश')}</div>
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
            {t('Open year-round, no fixed enrollment window', 'पूरे वर्ष खुला, कोई निश्चित नामांकन अवधि नहीं')}
          </div>

          <div style={{ background: 'var(--navy-900)', borderRadius: 8, padding: '28px 30px', marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <div>
              <div className="section-heading" style={{ fontSize: 17, color: 'white', marginBottom: 12 }}>{t('How to Apply', 'आवेदन कैसे करें')}</div>
              <div style={{ fontSize: 13, lineHeight: 1.85, color: 'var(--sky-200)' }}>
                <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
                  <span style={{ color: 'var(--saffron-300)', fontWeight: 700 }}>1.</span>
                  {t(
                    'Visit the school and submit a duly filled Registration-cum-Admission Form, along with the relevant documents and prescribed fees.',
                    'स्कूल आएं और संबंधित दस्तावेजों एवं निर्धारित शुल्क के साथ विधिवत भरा हुआ पंजीकरण-सह-प्रवेश फॉर्म जमा करें।'
                  )}
                </div>
                <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
                  <span style={{ color: 'var(--saffron-300)', fontWeight: 700 }}>2.</span>
                  {t(
                    'Admission proceeds through an informal interaction between the child, the parents, and our Principal and Teachers. The date and time will be shared with parents in advance.',
                    'प्रवेश बच्चे, माता-पिता एवं हमारे प्राचार्य व शिक्षकों के बीच एक अनौपचारिक बातचीत के माध्यम से होता है। तिथि एवं समय अभिभावकों को पहले से बता दिया जाएगा।'
                  )}
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <span style={{ color: 'var(--saffron-300)', fontWeight: 700 }}>3.</span>
                  {t(
                    'The school management reserves the right to make all final admission decisions.',
                    'स्कूल प्रबंधन के पास सभी अंतिम प्रवेश निर्णय लेने का अधिकार सुरक्षित है।'
                  )}
                </div>
              </div>
            </div>
            <div className="card" style={{ padding: 22, alignSelf: 'start' }}>
              <div className="section-heading" style={{ fontSize: 15, marginBottom: 10 }}>{t('Documents Required', 'आवश्यक दस्तावेज')}</div>
              <ul style={{ fontSize: 12.5, lineHeight: 1.8, paddingLeft: 16, margin: 0 }}>
                <li>{t('Self-attested copy of the birth certificate or an affidavit', 'जन्म प्रमाण पत्र की स्व-प्रमाणित प्रति या एक शपथ पत्र')}</li>
                <li>{t('Proof of residence (passport, electricity bill, ration card, voter ID, or any other legally applicable proof)', 'निवास प्रमाण (पासपोर्ट, बिजली बिल, राशन कार्ड, वोटर आईडी, या कोई अन्य कानूनी रूप से मान्य प्रमाण)')}</li>
                <li>{t('Passport or stamp-size photograph of the child', 'बच्चे की पासपोर्ट या स्टाम्प साइज फोटो')}</li>
                <li>{t('Latest report card from the last school attended, if applicable', 'पिछले स्कूल की नवीनतम रिपोर्ट कार्ड, यदि लागू हो')}</li>
              </ul>
            </div>
          </div>

          <div className="card" style={{ marginTop: 30, padding: '22px 26px' }}>
            <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 220px' }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--navy-700)' }}>{t('Ready to apply, or have a question first?', 'आवेदन के लिए तैयार हैं, या पहले कोई प्रश्न है?')}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--ink-muted)', marginTop: 8, lineHeight: 1.8 }}>
                  {t('Phone:', 'फ़ोन:')} 9289928091
                  <br />
                  {t('Email:', 'ईमेल:')} mandarspride@gmail.com
                </div>
              </div>
              <form onSubmit={(e) => e.preventDefault()} style={{ flex: '1 1 320px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                  <div>
                    <label htmlFor="admissions-parent-name" className="sr-only">Parent&apos;s name</label>
                    <input id="admissions-parent-name" name="parentName" className="field-input" placeholder={t("Parent's name", 'अभिभावक का नाम')} />
                  </div>
                  <div>
                    <label htmlFor="admissions-child-name" className="sr-only">Child&apos;s name</label>
                    <input id="admissions-child-name" name="childName" className="field-input" placeholder={t("Child's name", 'बच्चे का नाम')} />
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label htmlFor="admissions-parent-contact" className="sr-only">Parent contact</label>
                    <input id="admissions-parent-contact" name="parentContact" className="field-input" placeholder={t('Your phone or email', 'आपका फोन या ईमेल')} />
                  </div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="admissions-question" className="sr-only">Your question (optional)</label>
                  <textarea
                    id="admissions-question"
                    name="question"
                    className="field-input"
                    placeholder={t(
                      "Your question (optional): ages accepted, timings, fees, anything you'd like to ask",
                      'आपका प्रश्न (वैकल्पिक): स्वीकृत आयु, समय, फीस, या जो भी पूछना चाहें'
                    )}
                    rows={2}
                    style={{ fontFamily: 'var(--font-serif)', resize: 'vertical' }}
                  />
                </div>
                <button type="submit" className="btn btn-primary">{t('Start an inquiry', 'पूछताछ शुरू करें')}</button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ACADEMICS */}
      {activeTab === 'Academics' && (
        <div className="container" style={{ padding: '30px 0 50px' }}>
          <div className="section-heading" style={{ fontSize: 26, marginBottom: 16 }}>{t('Academics', 'शिक्षा')}</div>

          <p style={{ fontSize: 12.5, lineHeight: 1.85, textAlign: 'justify' }}>
            {t(
              "Mandar's Pride is not affiliated with any education board. We design our own curriculum, focused on giving children a strong, holistic foundation rather than following a fixed external syllabus. All textbooks are in English, though teachers may explain concepts in Hindi whenever it helps students understand better.",
              "Mandar's Pride किसी भी शिक्षा बोर्ड से संबद्ध नहीं है। हम अपना खुद का पाठ्यक्रम बनाते हैं, जो किसी निश्चित बाहरी पाठ्यक्रम का पालन करने के बजाय बच्चों को एक मजबूत, समग्र आधार देने पर केंद्रित है। सभी पाठ्यपुस्तकें अंग्रेजी में हैं, हालांकि शिक्षक जब भी छात्रों को समझने में मदद मिले, हिंदी में अवधारणाएं समझा सकते हैं।"
            )}
          </p>

          <div className="section-heading" style={{ fontSize: 15, marginTop: 24, marginBottom: 8 }}>{t('School Timings', 'स्कूल का समय')}</div>
          <p style={{ fontSize: 12.5, lineHeight: 1.85 }}>
            {t(
              'School hours run six days a week, Monday to Saturday, starting at 8:10 AM, with dismissal shifting slightly between seasons:',
              'स्कूल सप्ताह में छह दिन, सोमवार से शनिवार तक, सुबह 8:10 बजे से शुरू होता है, और छुट्टी का समय मौसम के अनुसार थोड़ा बदलता है:'
            )}
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 16, flexWrap: 'wrap' }}>
            <div className="card" style={{ flex: 1, minWidth: 180, padding: 18, textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)', letterSpacing: 1 }}>
                {t('SUMMER (MAR\u2013OCT)', '\u0917\u0930\u094d\u092e\u0940 (\u092e\u093e\u0930\u094d\u091a\u2013\u0905\u0915\u094d\u091f\u0942\u092c\u0930)')}
              </div>
              <div className="section-heading" style={{ fontSize: 18, marginTop: 6 }}>8:10 AM &ndash; 1:15 PM</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)', marginTop: 4 }}>{t('Monday to Saturday', 'सोमवार से शनिवार')}</div>
            </div>
            <div className="card" style={{ flex: 1, minWidth: 180, padding: 18, textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)', letterSpacing: 1 }}>
                {t('WINTER (NOV\u2013FEB)', '\u0938\u0930\u094d\u0926\u0940 (\u0928\u0935\u0902\u092c\u0930\u2013\u092b\u0930\u0935\u0930\u0940)')}
              </div>
              <div className="section-heading" style={{ fontSize: 18, marginTop: 6 }}>8:10 AM &ndash; 1:30 PM</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)', marginTop: 4 }}>{t('Monday to Saturday', 'सोमवार से शनिवार')}</div>
            </div>
          </div>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: 'var(--ink-muted)', marginTop: 12 }}>
            {t(
              'Each day includes prayer, exercise, yoga, and meditation before classes begin, and a lunch break around midday.',
              'हर दिन कक्षाएं शुरू होने से पहले प्रार्थना, व्यायाम, योग एवं ध्यान शामिल हैं, और दोपहर के आसपास भोजन अवकाश होता है।'
            )}
          </p>
          <p style={{ fontSize: 12.5, lineHeight: 1.85, color: 'var(--ink-muted)', marginTop: 4 }}>
            {t(
              'The exact classes offered may change each academic year; this reflects the general daily structure, not a fixed class list.',
              'प्रस्तावित कक्षाएं प्रत्येक शैक्षणिक वर्ष बदल सकती हैं; यह सामान्य दैनिक संरचना को दर्शाता है, न कि कक्षाओं की एक निश्चित सूची।'
            )}
          </p>

          <div style={{ marginTop: 26, background: 'var(--navy-900)', borderRadius: 6, padding: '22px 26px' }}>
            <div className="eyebrow" style={{ color: 'var(--saffron-300)', marginBottom: 8 }}>{t('Moral & Spiritual Education', 'नैतिक एवं आध्यात्मिक शिक्षा')}</div>
            <p style={{ fontSize: 12, color: 'var(--sky-200)', lineHeight: 1.75, textAlign: 'justify', margin: 0 }}>
              {t(
                "Mandar's Pride also intends to impart moral and spiritual education to its children, for the holistic growth of their personality and their ability to make a positive change in society.",
                "Mandar's Pride अपने बच्चों को नैतिक एवं आध्यात्मिक शिक्षा भी प्रदान करना चाहता है, ताकि उनके व्यक्तित्व का समग्र विकास हो सके और वे समाज में सकारात्मक बदलाव लाने में सक्षम बन सकें।"
              )}
            </p>
          </div>
        </div>
      )}

      {/* FACILITIES & SAFETY */}
      {activeTab === 'Facilities & Safety' && (
        <div className="container" style={{ padding: '30px 0 50px' }}>
          <div className="section-heading" style={{ fontSize: 26, marginBottom: 18 }}>{t('Facilities & Safety', 'सुविधाएं एवं सुरक्षा')}</div>

          <div className="card" style={{ padding: '22px 24px' }}>
            <div className="section-heading" style={{ fontSize: 15, marginBottom: 10 }}>{t('Safety & Security', 'सुरक्षा')}</div>
            <p style={{ fontSize: 12, lineHeight: 1.8, marginBottom: 16 }}>
              {t(
                'The safety and security of our students is of paramount importance to us. Measures we practice include:',
                'हमारे छात्रों की सुरक्षा हमारे लिए सर्वोपरि महत्व रखती है। हम निम्नलिखित उपाय अपनाते हैं:'
              )}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
              {[
                {
                  en: '24\u00d77 CCTV camera coverage across various areas of the school',
                  hi: 'स्कूल के विभिन्न क्षेत्रों में 24\u00d77 सीसीटीवी कैमरा निगरानी',
                },
                {
                  en: 'A high boundary wall to restrict any infiltration',
                  hi: 'किसी भी अनधिकृत प्रवेश को रोकने के लिए एक ऊंची सीमा दीवार',
                },
                {
                  en: 'All washrooms supervised by lady attendants, with teachers taking frequent rounds',
                  hi: 'सभी वॉशरूम महिला अटेंडेंट की निगरानी में हैं, और शिक्षक नियमित रूप से दौरा करते हैं',
                },
                {
                  en: 'Careful, teacher-managed dispersal of students at the end of the day',
                  hi: 'दिन के अंत में छात्रों का शिक्षकों की निगरानी में सावधानीपूर्वक विसर्जन',
                },
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
                  <div style={{ fontSize: 12, lineHeight: 1.6 }}>{t(point.en, point.hi)}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 16, background: 'var(--navy-900)', borderRadius: 4, padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div className="section-heading" style={{ fontSize: 18, color: 'white', flexShrink: 0 }}>{t('Transport', 'परिवहन')}</div>
            <p style={{ fontSize: 14, color: 'var(--sky-200)', lineHeight: 1.7, margin: 0 }}>
              {t(
                'We encourage parents to drop off and pick up their children personally. Where needed, transport is provided on a merit basis, subject to availability.',
                'हम अभिभावकों को अपने बच्चों को स्वयं छोड़ने एवं लेने के लिए प्रोत्साहित करते हैं। जहां आवश्यक हो, उपलब्धता के अधीन योग्यता के आधार पर परिवहन प्रदान किया जाता है।'
              )}
            </p>
          </div>
        </div>
      )}

      {/* GALLERY */}
      {activeTab === 'Gallery' && (
        <div className="container" style={{ padding: '30px 0 50px' }}>
          <div className="section-heading" style={{ fontSize: 26, marginBottom: 6 }}>{t('Gallery', 'गैलरी')}</div>
          <p style={{ fontSize: 12, color: 'var(--ink-muted)', marginBottom: 20 }}>{t("Photos from life at Mandar's Pride.", "Mandar's Pride में जीवन की तस्वीरें।")}</p>
          <div style={{ columnCount: 3, columnGap: 12 }}>
            {GALLERY_PHOTOS.map((photo) => {
              const caption = t(photo.caption ?? '', photo.captionHi ?? photo.caption ?? '');
              return (
                <button
                  key={photo.src}
                  onClick={() => setLightbox(photo)}
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
                  <img src={photo.src} alt={caption} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  {photo.caption && (
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(15,42,74,0.75)', color: 'white', fontFamily: 'var(--font-mono)', fontSize: 10, padding: '6px 8px' }}>
                      {caption}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* FAQ */}
      {activeTab === 'FAQ' && (
        <div className="container" style={{ padding: '30px 0 50px' }}>
          <div className="section-heading" style={{ fontSize: 26, marginBottom: 18 }}>{t('Frequently Asked Questions', 'सामान्य प्रश्न')}</div>
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
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--navy-700)' }}>{t(f.q, f.qHi)}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-muted)', marginTop: 6, lineHeight: 1.7 }}>{t(f.a, f.aHi)}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 28, background: 'var(--navy-900)', borderRadius: 6, padding: '22px 26px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
            <div>
              <div className="section-heading" style={{ fontSize: 15, color: 'white' }}>{t('Still have a question?', 'अभी भी कोई प्रश्न है?')}</div>
              <div style={{ fontSize: 11, color: 'var(--sky-200)', marginTop: 4 }}>
                {t("Reach out through our Contact page and we'll get back to you.", 'हमारे संपर्क पृष्ठ के माध्यम से हमसे संपर्क करें, हम आपसे जल्द संपर्क करेंगे।')}
              </div>
            </div>
            <Link href="/contact" className="btn" style={{ background: 'var(--saffron-300)', color: 'var(--navy-900)', fontWeight: 700 }}>
              {t('Contact us', 'हमसे संपर्क करें')}
            </Link>
          </div>
        </div>
      )}

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(15,42,74,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: 24, cursor: 'zoom-out' }}
        >
          <img
            src={lightbox.src}
            alt={t(lightbox.caption ?? '', lightbox.captionHi ?? lightbox.caption ?? '')}
            style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: 4 }}
          />
        </div>
      )}
    </>
  );
}
