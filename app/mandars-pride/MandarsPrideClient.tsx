'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import PhotoStack from '@/components/PhotoStack';
import { useT } from '@/lib/LanguageContext';
import { createClient } from '@/lib/supabase/client';

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

type GalleryPhoto = { id: string; src_url: string; caption_en: string | null; caption_hi: string | null };

const FAQS = [
  {
    q: 'Is admission open all year?',
    qHi: 'क्या प्रवेश पूरे वर्ष खुला रहता है?',
    a: 'Admissions are open until June of the respective academic year.',
    aHi: 'प्रवेश संबंधित शैक्षणिक वर्ष के जून माह तक खुले रहते हैं।',
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
    a: 'Nursery 3+, LKG 4+, UKG 5+, Std. I 6+, and so on.',
    aHi: 'नर्सरी 3+, एलकेजी 4+, यूकेजी 5+, कक्षा-1 6+, और इसी प्रकार आगे।',
  },
  {
    q: 'What language is used for teaching?',
    qHi: 'शिक्षण के लिए किस भाषा का उपयोग किया जाता है?',
    a: 'All textbooks are in English (except literature books). Teachers may explain concepts in Hindi when it helps students understand better.',
    aHi: 'सभी पाठ्यपुस्तकें अंग्रेजी में हैं (साहित्य की पुस्तकों को छोड़कर)। शिक्षक जब छात्रों को बेहतर समझने में मदद मिले तो हिंदी में अवधारणाएं समझा सकते हैं।',
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
  const [lightbox, setLightbox] = useState<GalleryPhoto | null>(null);
  const [galleryPhotos, setGalleryPhotos] = useState<GalleryPhoto[] | null>(null);
  const t = useT();

  useEffect(() => {
    if (activeTab !== 'Gallery' || galleryPhotos !== null) return;
    const supabase = createClient();
    supabase
      .from('gallery_photos')
      .select('id, src_url, caption_en, caption_hi')
      .contains('tags', ["Mandar's Pride"])
      .order('sort_order', { ascending: true })
      .then(({ data }) => {
        if (data) setGalleryPhotos(data as GalleryPhoto[]);
      });
  }, [activeTab, galleryPhotos]);

  return (
    <>
      {/* HEADER / BREADCRUMB */}
      <div className="container" style={{ padding: '26px 0 0', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
        <img
          src="/images/mandars-pride/logo.png"
          alt="Mandar's Pride logo"
          style={{
            width: 92,
            height: 92,
            flexShrink: 0,
            marginTop: 8,
            objectFit: 'contain',
          }}
        />
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
        <div
          className="tab-tray"
          style={{
            display: 'flex',
            gap: 8,
            overflowX: 'auto',
            background: 'var(--card-bg)',
            border: '1px solid var(--paper-line)',
            borderRadius: 10,
            padding: 8,
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                padding: '10px 18px',
                whiteSpace: 'nowrap',
                borderRadius: 7,
                border: activeTab === tab ? '1px solid var(--saffron-600)' : '1px solid transparent',
                background: activeTab === tab ? 'var(--saffron-600)' : 'transparent',
                color: activeTab === tab ? '#fdf2e7' : 'var(--navy-700)',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: activeTab === tab ? '0 2px 6px rgba(198,99,31,0.35)' : 'none',
              }}
            >
              {t(tab, TAB_LABELS_HI[tab])}
            </button>
          ))}
        </div>
      </div>

      <div style={{ height: 4 }} />

      {/* OVERVIEW */}
      {activeTab === 'Overview' && (
        <>
          <div className="container overview-intro" style={{ paddingTop: 30, paddingBottom: 30, display: 'flex', gap: 30, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <PhotoStack photos={STACK_PHOTOS} photoWidth={220} crop={false} />
            <div className="overview-intro-text" style={{ flex: 1, minWidth: 260 }}>
              <p style={{ fontSize: 14.5, lineHeight: 1.8, textAlign: 'justify' }}>
                {t(
                  "Mandar Vikas Foundation, a non-profit social organisation established in 2019, introduced Mandar's Pride as its educational initiative, a co-educational school for imparting quality and inclusive education to help children blossom, add value to society, and grow toward a respectable livelihood.",
                  "मंदार विकास फाउंडेशन, 2019 में स्थापित एक गैर-लाभकारी सामाजिक संस्था, ने Mandar's Pride को अपनी शैक्षणिक पहल के रूप में शुरू किया, जो एक सह-शिक्षा विद्यालय है, जो बच्चों को पल्लवित होने, समाज में योगदान देने एवं सम्मानजनक आजीविका की ओर बढ़ने में मदद करने के लिए गुणवत्तापूर्ण एवं समावेशी शिक्षा प्रदान करता है।"
                )}
              </p>
              <div
                className="admissions-badge"
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
                {t('Admissions for 2026-27 open for Nursery, LKG, UKG and Std. I', 'शैक्षणिक सत्र 2026-27 के लिए नर्सरी, एलकेजी, यूकेजी एवं कक्षा-1 में प्रवेश खुले हैं')}
              </div>
            </div>
          </div>

          <div className="container vision-mission-grid" style={{ paddingBottom: 40, gap: 20 }}>
            <div className="card" style={{ padding: 20 }}>
              <div className="section-heading card-heading-center" style={{ fontSize: 21, marginBottom: 10 }}>{t('Vision', 'विज़न')}</div>
              <ul style={{ fontSize: 14.5, lineHeight: 1.8, paddingLeft: 16, margin: 0, textAlign: 'justify' }}>
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
              <div className="section-heading card-heading-center" style={{ fontSize: 21, marginBottom: 10 }}>{t('Mission', 'मिशन')}</div>
              <ul style={{ fontSize: 14.5, lineHeight: 1.8, paddingLeft: 16, margin: 0, textAlign: 'justify' }}>
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
        <div className="container" style={{ paddingTop: 30, paddingBottom: 50 }}>
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
              <div className="section-heading" style={{ fontSize: 19, color: 'white', marginBottom: 12 }}>{t('How to Apply', 'आवेदन कैसे करें')}</div>
              <div style={{ fontSize: 14.5, lineHeight: 1.85, color: 'var(--sky-200)' }}>
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
                    'Admission proceeds through an informal interaction between the child, the parents, and our Principal and Teachers.',
                    'प्रवेश बच्चे, माता-पिता एवं हमारे प्राचार्य व शिक्षकों के बीच एक अनौपचारिक बातचीत के माध्यम से होता है।'
                  )}
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <span style={{ color: 'var(--saffron-300)', fontWeight: 700 }}>3.</span>
                  {t(
                    'The school management reserves the right to make all final admission decisions.',
                    'विद्यालय प्रबंधक के पास प्रवेश लेने का सभी अंतिम निर्णय का अधिकार है।'
                  )}
                </div>
              </div>
            </div>
            <div className="card" style={{ padding: 22, alignSelf: 'start' }}>
              <div className="section-heading" style={{ fontSize: 17, marginBottom: 10 }}>{t('Documents Required', 'आवश्यक दस्तावेज')}</div>
              <ul style={{ fontSize: 14, lineHeight: 1.8, paddingLeft: 16, margin: 0 }}>
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
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 15.5, color: 'var(--ink-muted)', marginTop: 8, lineHeight: 1.8 }}>
                  {t('Phone:', 'फ़ोन:')} 9289928091
                  <br />
                  {t('Email:', 'ईमेल:')} mandarspride@gmail.com
                </div>
              </div>
              <AdmissionsForm t={t} />
            </div>
          </div>
        </div>
      )}

      {/* ACADEMICS */}
      {activeTab === 'Academics' && (
        <div className="container" style={{ paddingTop: 30, paddingBottom: 50 }}>
          <div className="section-heading" style={{ fontSize: 26, marginBottom: 16 }}>{t('Academics', 'शिक्षा')}</div>

          <p style={{ fontSize: 14, lineHeight: 1.85, textAlign: 'justify' }}>
            {t(
              "We design our own curriculum, focused on giving children a strong, holistic foundation rather than following a fixed external syllabus. All textbooks are in English (except literature books), though teachers may explain concepts in Hindi whenever it helps students understand better.",
              "हम अपना खुद का पाठ्यक्रम बनाते हैं, जो किसी निश्चित बाहरी पाठ्यक्रम का पालन करने के बजाय बच्चों को एक मजबूत, समग्र आधार देने पर केंद्रित है। सभी पाठ्यपुस्तकें अंग्रेजी में हैं (साहित्य की पुस्तकों को छोड़कर), हालांकि शिक्षक जब भी छात्रों को समझने में मदद मिले, हिंदी में अवधारणाएं समझा सकते हैं।"
            )}
          </p>

          <div className="section-heading" style={{ fontSize: 19, marginTop: 24, marginBottom: 8 }}>{t('School Timings', 'स्कूल का समय')}</div>
          <p style={{ fontSize: 14, lineHeight: 1.85 }}>
            {t(
              'School hours run six days a week, Monday to Saturday:',
              'स्कूल का समय सप्ताह में छह दिन, सोमवार से शनिवार तक है:'
            )}
          </p>
          <div style={{ marginTop: 16 }}>
            <div className="card" style={{ maxWidth: 260, padding: 18, textAlign: 'center' }}>
              <div className="section-heading" style={{ fontSize: 20, marginTop: 6 }}>8:00 AM &ndash; 1:00 PM</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)', marginTop: 4 }}>{t('Monday to Saturday', 'सोमवार से शनिवार')}</div>
            </div>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--ink-muted)', marginTop: 12 }}>
            {t(
              'Each day includes prayer, exercise, yoga, and meditation before classes begin, and a lunch break around mid-time.',
              'हर दिन कक्षाएं शुरू होने से पहले प्रार्थना, व्यायाम, योग एवं ध्यान शामिल हैं, और बीच के समय के आसपास भोजन अवकाश होता है।'
            )}
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--ink-muted)', marginTop: 4 }}>
            {t(
              'The exact classes offered may change each academic year; this reflects the general daily structure, not a fixed class list.',
              'प्रस्तावित कक्षाएं प्रत्येक शैक्षणिक वर्ष बदल सकती हैं; यह सामान्य दैनिक संरचना को दर्शाता है, न कि कक्षाओं की एक निश्चित सूची।'
            )}
          </p>

          <div style={{ marginTop: 26, background: 'var(--navy-900)', borderRadius: 6, padding: '22px 26px' }}>
            <div className="eyebrow" style={{ color: 'var(--saffron-300)', marginBottom: 8 }}>{t('Moral & Spiritual Education', 'नैतिक एवं आध्यात्मिक शिक्षा')}</div>
            <p style={{ fontSize: 13.5, color: 'var(--sky-200)', lineHeight: 1.75, textAlign: 'justify', margin: 0 }}>
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
        <div className="container" style={{ paddingTop: 30, paddingBottom: 50 }}>
          <div className="section-heading" style={{ fontSize: 26, marginBottom: 18 }}>{t('Facilities & Safety', 'सुविधाएं एवं सुरक्षा')}</div>

          <div className="card" style={{ padding: '22px 24px' }}>
            <div className="section-heading" style={{ fontSize: 17, marginBottom: 10 }}>{t('Safety & Security', 'सुरक्षा')}</div>
            <p style={{ fontSize: 13.5, lineHeight: 1.8, marginBottom: 16 }}>
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
                  hi: 'किसी भी अनधिकृत प्रवेश को रोकने के लिए एक ऊंची चाहार दिवारी',
                },
                {
                  en: 'Washrooms supervised by attendants, with teachers taking frequent rounds',
                  hi: 'शौचालय परिचारक के निगरानी में रहता है, और शिक्षक निरक्षण करते हैं।',
                },
                {
                  en: 'Teacher-managed dispersal of students at the end of the day',
                  hi: 'दिन के अंत में छात्रों का शिक्षकों की निगरानी में विसर्जन',
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
                  <div style={{ fontSize: 13.5, lineHeight: 1.6 }}>{t(point.en, point.hi)}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 16, background: 'var(--navy-900)', borderRadius: 4, padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div className="section-heading" style={{ fontSize: 20, color: 'white', flexShrink: 0 }}>{t('Transport', 'परिवहन')}</div>
            <p style={{ fontSize: 15.5, color: 'var(--sky-200)', lineHeight: 1.7, margin: 0 }}>
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
        <div className="container" style={{ paddingTop: 30, paddingBottom: 50 }}>
          <div className="section-heading" style={{ fontSize: 26, marginBottom: 6 }}>{t('Gallery', 'गैलरी')}</div>
          <p style={{ fontSize: 12, color: 'var(--ink-muted)', marginBottom: 20 }}>{t("Photos from life at Mandar's Pride.", "Mandar's Pride में जीवन की तस्वीरें।")}</p>
          {galleryPhotos === null ? (
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--label-grey)' }}>
              {t('Loading\u2026', 'लोड हो रहा है\u2026')}
            </div>
          ) : galleryPhotos.length === 0 ? (
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--label-grey)' }}>
              {t('No photos yet.', 'अभी कोई फोटो नहीं है।')}
            </div>
          ) : (
            <div className="gallery-grid" style={{ columnCount: 3, columnGap: 12 }}>
              {galleryPhotos.map((photo) => {
                const caption = t(photo.caption_en ?? '', photo.caption_hi ?? photo.caption_en ?? '');
                return (
                  <button
                    key={photo.id}
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
                    <img src={photo.src_url} alt={caption} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    {photo.caption_en && (
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(15,42,74,0.75)', color: 'white', fontFamily: 'var(--font-mono)', fontSize: 10, padding: '6px 8px' }}>
                        {caption}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* FAQ */}
      {activeTab === 'FAQ' && (
        <div className="container" style={{ paddingTop: 30, paddingBottom: 50 }}>
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
                    <div style={{ fontSize: 14.5, color: 'var(--ink-muted)', marginTop: 6, lineHeight: 1.7 }}>{t(f.a, f.aHi)}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 28, background: 'var(--navy-900)', borderRadius: 6, padding: '22px 26px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
            <div>
              <div className="section-heading" style={{ fontSize: 17, color: 'white' }}>{t('Still have a question?', 'अभी भी कोई प्रश्न है?')}</div>
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
            src={lightbox.src_url}
            alt={t(lightbox.caption_en ?? '', lightbox.caption_hi ?? lightbox.caption_en ?? '')}
            style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: 4 }}
          />
        </div>
      )}
    </>
  );
}

type TFunc = (en: string, hi: string) => string;

function AdmissionsForm({ t }: { t: TFunc }) {
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [parentContact, setParentContact] = useState('');
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    const supabase = createClient();
    const { error } = await supabase.from('form_submissions').insert({
      form_type: 'admissions',
      data: { parentName, childName, parentContact, question },
    });
    if (error) {
      setStatus('error');
      return;
    }
    setStatus('sent');
    setParentName('');
    setChildName('');
    setParentContact('');
    setQuestion('');
  }

  if (status === 'sent') {
    return (
      <div style={{ flex: '1 1 320px', textAlign: 'center', paddingTop: 20, paddingBottom: 20 }}>
        <div style={{ fontSize: 14, color: 'var(--green-700)' }}>
          {t("Thank you! We'll be in touch soon.", 'धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।')}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ flex: '1 1 320px' }}>
      <div className="form-grid-2" style={{ gap: 14, marginBottom: 14 }}>
        <div>
          <label htmlFor="admissions-parent-name" className="sr-only">Parent&apos;s name</label>
          <input
            id="admissions-parent-name"
            name="parentName"
            className="field-input"
            placeholder={t("Parent's name", 'अभिभावक का नाम')}
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="admissions-child-name" className="sr-only">Child&apos;s name</label>
          <input
            id="admissions-child-name"
            name="childName"
            className="field-input"
            placeholder={t("Child's name", 'बच्चे का नाम')}
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            required
          />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label htmlFor="admissions-parent-contact" className="sr-only">Parent contact</label>
          <input
            id="admissions-parent-contact"
            name="parentContact"
            className="field-input"
            placeholder={t('Your phone or email', 'आपका फोन या ईमेल')}
            value={parentContact}
            onChange={(e) => setParentContact(e.target.value)}
            required
          />
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
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      {status === 'error' && (
        <div style={{ fontSize: 12, color: '#b91c1c', marginBottom: 10 }}>
          {t('Something went wrong. Please try again.', 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।')}
        </div>
      )}
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? t('Sending\u2026', 'भेजा जा रहा है\u2026') : t('Start an inquiry', 'पूछताछ शुरू करें')}
      </button>
    </form>
  );
}
