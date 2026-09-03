'use client';

import { useState } from 'react';
import Link from 'next/link';

const MANAGING_COMMITTEE = [
  { name: 'Ranjana Choudhary', role: 'President' },
  { name: 'Pritish Shankar', role: 'Secretary' },
  { name: 'Punam Kumari', role: 'Treasurer' },
  { name: 'Isha Kumari', role: 'Member' },
  { name: 'Praful Chandra Yadav', role: 'Member' },
  { name: 'Kunj Jha', role: 'Member' },
  { name: 'Shamlesh Kumar', role: 'Member' },
];

const GENERAL_BODY = [
  'Ranjana Choudhary',
  'Praful Chandra Yadav',
  'Pritish Shankar',
  'Kunj Jha',
  'Punam Kumari',
  'Shamlesh Kumar',
  'Isha Kumari',
  'Shreya Choudhary',
];

const PRESIDENTS_DESK_HI = `प्रिय मित्रों,

जैसा हम जानते हैं कि मंदार पर्वत बौंसी या बांका जिले का ही नहीं बल्कि समस्त बिहार या यूँ कहें कि भारत वर्ष का सांस्कृतिक और सामाजिक प्रतीक है। हमारी संस्था मंदार विकास फॉउण्डेशन अपने आप में सांस्कृतिक और सामाजिक धरोहर को सहेजने के साथ साथ समाज कल्याण की ओर अग्रसर होने की प्रेरणा देता है।

संस्था का उद्देश्य, "Step Towards Change" न सिर्फ सामाजिक विकास बल्कि आर्थिक, सांस्कृतिक एवं शैक्षणिक विकास की ओर हमें अग्रसर होने की प्रेरणा देता है। हमारा निरंतर प्रयास यही है कि जिस प्रकार मंदार पर्वत का उपयोग समुद्र को मंथन करने के लिए किया गया था, उसी प्रकार हमें MVF के माध्यम से हमारे क्षेत्र, जिला एवं समस्त भारत के पिछड़े एवं वंचित तबके के लोगों को आत्मनिर्भर बनाना है। मंदार विकास फाउंडेशन की स्थापना वर्ष 2019 में इन्हीं उद्देश्यों की पूर्ति के लिए की गई है और मैं मानती हूँ कि बांका जिले का एक छोटा सा क़स्बा बहुत जल्दी बहुउद्देशीय बदलाव का अगुवा बनेगा।

इन उद्देश्यों को ध्यान में रखते हुए संस्था के तत्वाधान में समय-समय पर कई परियोजनाएं शुरू की गई हैं, जो हमारे क्षेत्र के बच्चों की शिक्षा एवं सर्वांगीण विकास, और संस्था तथा समुदाय को आर्थिक रूप से आत्मनिर्भर बनाने के प्रयासों पर केंद्रित हैं। आप सभी इस बात से अवगत होंगे की हमारे क्षेत्र की बहुत सारी महिलाएं भी स्वयं-सेवक के रूप में संस्था से जुड़ी हैं। हमारा प्रयास है कि इन महिलाओं को संस्था के माध्यम से आर्थिक, सामाजिक एवं शैक्षणिक दृष्टिकोण से सबल बनाने के साथ ही आज जरूरत है कि देश की आधी आबादी यानि महिलाओं का हर क्षेत्र में सशक्तिकरण किया जाए जो देश के विकास का आधार बनेंगी।

भविष्य में संस्था के अंतर्गत और भी कई विकास उन्मुख परियोजनाएं शुरू करने की योजना है। मुझे विश्वास है कि आपके सहयोग से मंदार विकास फाउंडेशन शीघ्र ही नई ऊंचाइयों को छुएगा।

जय हिन्द! जय भारत!`;

const PRESIDENTS_DESK_EN = `Dear friends,

As we know, Mandar Mountain is not just a cultural and social symbol of Bounsi or Banka district, but of all of Bihar, indeed, of India itself. Our organization, Mandar Vikas Foundation, draws its inspiration from preserving this cultural and social heritage while moving forward in the service of society's welfare.

The organization's motto, "Step Towards Change," inspires us to move forward not only in social development but in economic, cultural, and educational development as well. Our continuous effort is this: just as Mandar Mountain was once used to churn the ocean, we too, through MVF, want to make the underprivileged and marginalized people of our region, our district, and all of India self-reliant. Mandar Vikas Foundation was established in 2019 to fulfil exactly these objectives, and I believe that this small town in Banka district will soon become a leader of far-reaching change.

With these objectives in mind, the Foundation has started several projects over time, focused on the education and all-round development of children in our area, and on efforts to make both the organization and our community financially self-reliant. Many women from our area are also connected with the organization as volunteers. Our effort is to strengthen these women economically, socially, and educationally through the organization, because today, there is a need to empower women, who make up half our country's population, in every field, as they will become the foundation of the nation's development.

In the future, we plan to start several more development-oriented projects under the organization. I believe that with your support, Mandar Vikas Foundation will soon reach new heights.

Jai Hind! Jai Bharat!`;

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'committee' | 'body'>('committee');
  const [deskLang, setDeskLang] = useState<'hi' | 'en'>('hi');

  return (
    <>
      {/* HEADER / INTRO */}
      <div className="container" style={{ padding: '30px 0 6px' }}>
        <div className="eyebrow">Home / About Us</div>
        <h1 className="section-heading" style={{ fontSize: 42, marginTop: 8 }}>
          About Mandar Vikas Foundation
        </h1>
        <p style={{ fontSize: 14, color: 'var(--ink-muted)', marginTop: 8 }}>
          Established in 2019, MVF works towards women&apos;s empowerment,
          the growth and education of children, and dignity for
          underprivileged people.
        </p>
      </div>

      {/* OUR ROOTS */}
      <section className="container" style={{ padding: '30px 0' }}>
        <div style={{ display: 'flex', gap: 26, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 260px' }}>
            <div className="section-heading" style={{ fontSize: 44, lineHeight: 1.02 }}>
              Our
              <br />
              Roots
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p style={{ fontSize: 13.5, lineHeight: 1.8, textAlign: 'justify' }}>
              Here at Mandar Vikas Foundation, we know that sometimes all it
              takes to change the world is a little support. Since our
              establishment in 2019, we have been determined to make an
              impact in our society. The core of our efforts is to bring our
              team&apos;s fresh ideas and passion to the range of activities
              we&apos;re involved in. Through all of our endeavors, we hope
              to display the conviction behind our beliefs.
            </p>
          </div>
        </div>
      </section>

      {/* OUR VISION */}
      <section style={{ padding: '34px 0' }}>
        <div className="container">
          <h2
            className="section-heading"
            style={{ fontSize: 44, textAlign: 'center', marginBottom: 22 }}
          >
            Our Vision
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 14,
            }}
          >
            <VisionCard n="01" text="Empowered and self-sufficient women living with dignity and contributing equally to a development of a respectable environment, free from violence and discrimination." />
            <VisionCard n="02" text="Well-nurtured children with full opportunities for their social, mental, and educational growth in a safe and protective environment." />
            <VisionCard n="03" text="Opportunity for the underprivileged sections of society, including the elderly, to live with dignity." />
          </div>
        </div>
      </section>

      {/* OUR MISSION — dark section, mirrored layout */}
      <section style={{ background: 'var(--navy-900)', padding: '34px 0' }}>
        <div
          className="container"
          style={{ display: 'flex', gap: 26, alignItems: 'center', flexWrap: 'wrap-reverse' }}
        >
          <div style={{ flex: 1, minWidth: 280 }}>
            <ul style={{ fontSize: 13, lineHeight: 1.85, color: 'var(--sky-200)', paddingLeft: 18, margin: 0 }}>
              <li>Promoting the financial and social empowerment of women through adaptable, cross-cutting programmes, building awareness of their rights and facilitating institutional support for their growth.</li>
              <li>Ensuring the care, protection, education, and all-round growth of children by extending access to health, nutrition, education, and awareness of their rights, with the involvement of the wider society.</li>
              <li>Giving underprivileged and in-need members of society access to the basic support that enables them to live with dignity.</li>
            </ul>
          </div>
          <div style={{ flex: '0 0 260px', textAlign: 'right' }}>
            <div className="section-heading" style={{ fontSize: 44, lineHeight: 1.02, color: 'white' }}>
              Our
              <br />
              Mission
            </div>
          </div>
        </div>
      </section>

      {/* MANAGING COMMITTEE / GENERAL BODY TABS */}
      <section className="container" style={{ padding: '34px 0' }}>
        <div style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
          <TabButton active={activeTab === 'committee'} onClick={() => setActiveTab('committee')}>
            Managing Committee
          </TabButton>
          <TabButton active={activeTab === 'body'} onClick={() => setActiveTab('body')}>
            General Body
          </TabButton>
        </div>

        <div style={{ marginTop: 24 }}>
          {activeTab === 'committee' ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10 }}>
              {MANAGING_COMMITTEE.map((m) => (
                <div key={m.name} className="card" style={{ padding: '14px 12px', textAlign: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--navy-700)' }}>{m.name}</div>
                  <div className="eyebrow" style={{ marginTop: 3 }}>{m.role}</div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10 }}>
              {GENERAL_BODY.map((name) => (
                <div key={name} className="card" style={{ padding: '14px 12px', textAlign: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--navy-700)' }}>{name}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PRESIDENT'S DESK */}
      <section
        className="ridge-divider"
        style={{ background: 'var(--navy-900)', padding: '34px 0' }}
      >
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
            <h2 className="section-heading" style={{ fontSize: 26, color: 'white' }}>
              President&apos;s Desk
            </h2>
            <div style={{ display: 'flex', gap: 6 }}>
              <LangPill active={deskLang === 'hi'} onClick={() => setDeskLang('hi')}>
                हिंदी
              </LangPill>
              <LangPill active={deskLang === 'en'} onClick={() => setDeskLang('en')}>
                English
              </LangPill>
            </div>
          </div>
          <div
            style={{
              fontSize: 13,
              lineHeight: 2,
              color: 'var(--sky-200)',
              maxWidth: 820,
              whiteSpace: 'pre-line',
              textAlign: 'justify',
            }}
          >
            {deskLang === 'hi' ? PRESIDENTS_DESK_HI : PRESIDENTS_DESK_EN}
          </div>
        </div>
      </section>

      {/* LEGAL & TRANSPARENCY */}
      <section className="container" style={{ padding: '34px 0 50px' }}>
        <h2 className="section-heading" style={{ fontSize: 22, marginBottom: 16 }}>
          Legal &amp; Transparency
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 620 }}>
          <LegalRow label="Registered Society" detail="Reg. No. S000218, 10 Dec 2019, Banka, Bihar" action="Download PDF" />
          <LegalRow label="NGO Darpan" detail="Unique ID BR/2021/0273689" action="View record →" />
          <LegalRow label="12A Registration" detail="Provisional, granted 14 Sept 2025" action="Download PDF" />
        </div>
        <p style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 16 }}>
          For any questions about our registration or finances, feel free to
          reach out via our{' '}
          <Link href="/contact" style={{ color: 'var(--saffron-600)' }}>
            Contact page
          </Link>
          .
        </p>
      </section>
    </>
  );
}

function VisionCard({ n, text }: { n: string; text: string }) {
  return (
    <div className="card" style={{ padding: 18 }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 20, color: 'var(--saffron-600)', marginBottom: 8 }}>
        {n}
      </div>
      <div style={{ fontSize: 12, lineHeight: 1.7, textAlign: 'justify' }}>{text}</div>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 15,
        padding: '10px 16px',
        background: 'transparent',
        border: 'none',
        borderBottom: active ? '2px solid var(--saffron-600)' : '2px solid transparent',
        color: active ? 'var(--navy-700)' : 'var(--label-grey)',
        fontWeight: active ? 700 : 400,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}

function LangPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        padding: '4px 12px',
        borderRadius: 12,
        border: active ? '1px solid var(--saffron-300)' : '1px solid rgba(255,255,255,0.3)',
        background: active ? 'var(--saffron-300)' : 'transparent',
        color: active ? 'var(--navy-900)' : 'white',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}

function LegalRow({ label, detail, action }: { label: string; detail: string; action: string }) {
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 14,
        padding: '12px 16px',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ fontSize: 12.5 }}>
        <b>{label}:</b> {detail}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--saffron-600)', whiteSpace: 'nowrap' }}>
        {action}
      </div>
    </div>
  );
}
