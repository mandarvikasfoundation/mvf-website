'use client';

import PhotoStack from '@/components/PhotoStack';
import { useT } from '@/lib/LanguageContext';

type Program = {
  id: string;
  date: string;
  dateHi: string;
  title: string;
  titleHi: string;
  quote: string;
  quoteHi: string;
  dotColor: string;
  photos: { src: string; caption?: string }[];
  paragraphs: { en: string; hi: string }[];
};

const PROGRAMS: Program[] = [
  {
    id: 'learning-centre',
    date: 'NOVEMBER 2019',
    dateHi: 'नवंबर 2019',
    title: 'MVF Learning Centre',
    titleHi: 'MVF लर्निंग सेंटर',
    quote: '"There is no scarcity of talent in our country."',
    quoteHi: '"हमारे देश में प्रतिभा की कोई कमी नहीं है।"',
    dotColor: 'var(--green-300)',
    photos: [
      { src: '/images/our-work/learning-1.jpg' },
      { src: '/images/our-work/learning-2.jpg' },
      { src: '/images/our-work/learning-3.jpg' },
    ],
    paragraphs: [
      {
        en: `MVF Learning Centre is a platform for children who have either dropped out of school, or who are school students unable to afford extra classes. We don't offer "extra classes" in the ordinary sense; we started this because many children from farming or daily-wage families are asked to work alongside their parents or look after siblings, and as a result can't attend school regularly and fall behind.`,
        hi: `MVF लर्निंग सेंटर उन बच्चों के लिए एक मंच है जो या तो स्कूल छोड़ चुके हैं, या स्कूली छात्र होते हुए भी अतिरिक्त कक्षाओं का खर्च वहन नहीं कर सकते। हम सामान्य अर्थों में "अतिरिक्त कक्षाएं" नहीं देते; हमने इसे इसलिए शुरू किया क्योंकि किसान या दिहाड़ी मजदूर परिवारों के कई बच्चों को अपने माता-पिता के साथ काम करने या भाई-बहनों की देखभाल करने के लिए कहा जाता है, जिसके कारण वे नियमित रूप से स्कूल नहीं जा पाते और पिछड़ जाते हैं।`,
      },
      {
        en: `There is no scarcity of talent in our country. But circumstances like these obstruct a child's holistic growth, and MVF exists to support these children so they can grow and blossom. Because the organization is currently entirely dependent on individual donations, with no funding partner, we are limited in how many children the Centre can support at once. Teachers at the Centre don't just teach academics, but also pass on important life skills.`,
        hi: `हमारे देश में प्रतिभा की कोई कमी नहीं है। लेकिन ऐसी परिस्थितियां बच्चे के सर्वांगीण विकास में बाधा डालती हैं, और MVF इन बच्चों को सहयोग देने के लिए है ताकि वे बढ़ सकें और पल्लवित हो सकें। चूंकि संस्था वर्तमान में पूरी तरह से व्यक्तिगत दान पर निर्भर है और कोई फंडिंग पार्टनर नहीं है, इसलिए सेंटर एक समय में कितने बच्चों को सहयोग दे सकता है, यह सीमित है। सेंटर के शिक्षक केवल पढ़ाई ही नहीं, बल्कि महत्वपूर्ण जीवन-कौशल भी सिखाते हैं।`,
      },
    ],
  },
  {
    id: 'horticulture',
    date: 'FEBRUARY 2020',
    dateHi: 'फरवरी 2020',
    title: 'MVF Horticulture',
    titleHi: 'MVF बागवानी',
    quote: '"Women are the foundation of any society."',
    quoteHi: '"महिलाएं किसी भी समाज की नींव होती हैं।"',
    dotColor: '#fac775',
    photos: [
      { src: '/images/our-work/horticulture-1.jpg' },
      { src: '/images/our-work/horticulture-2.jpg' },
      { src: '/images/our-work/horticulture-3.jpg' },
    ],
    paragraphs: [
      {
        en: `We started MVF Horticulture in February 2020, with the women of our community in mind, specifically those without financial independence of their own. Women are the foundation of any society; a strong foundation makes for a strong building. Members of the Foundation shared a common belief in the importance of women's financial empowerment, and from that came the idea of horticulture; specifically, marigold cultivation.`,
        hi: `हमने फरवरी 2020 में MVF बागवानी की शुरुआत की, जिसका उद्देश्य हमारे समुदाय की उन महिलाओं को ध्यान में रखना था जिनकी अपनी कोई आर्थिक आत्मनिर्भरता नहीं थी। महिलाएं किसी भी समाज की नींव होती हैं; एक मजबूत नींव ही एक मजबूत इमारत बनाती है। फाउंडेशन के सदस्यों का साझा विश्वास था कि महिलाओं का आर्थिक सशक्तिकरण महत्वपूर्ण है, और इसी से बागवानी, विशेष रूप से गेंदा फूल की खेती का विचार आया।`,
      },
      {
        en: `It's worth acknowledging that it was the women of the community themselves who stepped forward to support this project, contributing their own labour voluntarily. Profit from the marigold cultivation doesn't only support these women; it also goes toward strengthening the Learning Centre and starting other projects that push back against the odds our community faces.`,
        hi: `यह उल्लेखनीय है कि समुदाय की महिलाओं ने स्वयं आगे आकर इस परियोजना का समर्थन किया, अपनी मेहनत स्वेच्छा से दी। गेंदा फूल की खेती से हुआ मुनाफा केवल इन महिलाओं को ही सहयोग नहीं देता; यह लर्निंग सेंटर को मजबूत करने और हमारे समुदाय के सामने आने वाली चुनौतियों का सामना करने वाली अन्य परियोजनाएं शुरू करने में भी लगता है।`,
      },
    ],
  },
  {
    id: 'skill-development',
    date: 'FEBRUARY 2021',
    dateHi: 'फरवरी 2021',
    title: 'MVF Skill Development Centre',
    titleHi: 'MVF कौशल विकास केंद्र',
    quote: '"Working toward self-sustenance."',
    quoteHi: '"आत्मनिर्भरता की दिशा में एक प्रयास।"',
    dotColor: '#f0997b',
    photos: [
      { src: '/images/our-work/skill-1.jpg' },
      { src: '/images/our-work/skill-2.jpg' },
      { src: '/images/our-work/skill-3.jpg' },
    ],
    paragraphs: [
      {
        en: `Mandar Vikas Foundation works toward self-sustenance for underprivileged sections of society. In line with that goal, MVF started the Skill Development Centre in February 2021, beginning with a free Basic Tailoring Course for women. The course runs over three months, split into six fifteen-day terms.`,
        hi: `मंदार विकास फाउंडेशन समाज के वंचित वर्गों की आत्मनिर्भरता की दिशा में कार्य करता है। इसी लक्ष्य के अनुरूप, MVF ने फरवरी 2021 में कौशल विकास केंद्र की शुरुआत की, जिसकी शुरुआत महिलाओं के लिए एक निःशुल्क बुनियादी सिलाई पाठ्यक्रम से हुई। यह पाठ्यक्रम तीन महीनों तक चलता है, जिसे छह पंद्रह-दिवसीय सत्रों में बांटा गया है।`,
      },
      {
        en: `Once the Basic course is complete, participants can go on to the Advance Tailoring Course (also three months long) which teaches more refined, professional stitching techniques. On successful completion (assessed internally by the Centre), participants receive a Certificate of Appreciation.`,
        hi: `बुनियादी पाठ्यक्रम पूरा होने के बाद, प्रतिभागी उन्नत सिलाई पाठ्यक्रम (जो भी तीन महीने का है) में आगे बढ़ सकते हैं, जिसमें अधिक परिष्कृत, पेशेवर सिलाई तकनीकें सिखाई जाती हैं। सफलतापूर्वक पूरा करने पर (केंद्र द्वारा आंतरिक रूप से मूल्यांकित), प्रतिभागियों को एक प्रशंसा प्रमाण पत्र दिया जाता है।`,
      },
    ],
  },
];

export default function OurWorkClient() {
  const t = useT();

  return (
    <>
      <div className="container" style={{ padding: '30px 0 6px' }}>
        <div className="eyebrow">{t('Home / Our Works', 'होम / हमारे कार्य')}</div>
        <h1 className="section-heading" style={{ fontSize: 42, margin: '8px 0 0' }}>
          {t('Our Works', 'हमारे कार्य')}
        </h1>
        <p style={{ fontSize: 14, color: 'var(--ink-muted)', marginTop: 2 }}>
          {t(
            "Beyond Mandar's Pride, the Foundation runs community programs focused on children's education and social & financial empowerment of women.",
            "Mandar's Pride के अलावा, फाउंडेशन बच्चों की शिक्षा एवं महिलाओं के सामाजिक व आर्थिक सशक्तिकरण पर केंद्रित सामुदायिक कार्यक्रम भी चलाता है।"
          )}
        </p>
      </div>

      <div className="container" style={{ padding: '20px 0 50px', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            left: 36,
            top: 20,
            bottom: 20,
            width: 2,
            backgroundImage:
              'repeating-linear-gradient(to bottom, var(--saffron-600) 0, var(--saffron-600) 6px, transparent 6px, transparent 12px)',
          }}
        />

        {PROGRAMS.map((program, i) => (
          <div
            key={program.id}
            id={program.id}
            style={{
              display: 'flex',
              gap: 22,
              marginBottom: i < PROGRAMS.length - 1 ? 56 : 0,
              position: 'relative',
              scrollMarginTop: 90,
            }}
          >
            <div style={{ flex: '0 0 24px', display: 'flex', justifyContent: 'center', paddingTop: 4 }}>
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: program.dotColor,
                  border: '3px solid var(--paper)',
                  boxShadow: '0 0 0 1.5px var(--saffron-600)',
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: 'inline-block',
                  background: 'var(--navy-900)',
                  color: 'var(--saffron-300)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  padding: '3px 10px',
                  borderRadius: 10,
                  marginBottom: 12,
                }}
              >
                {t(program.date, program.dateHi)}
              </div>
              <div style={{ display: 'flex', gap: 22, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ flexShrink: 0, marginTop: 26 }}>
                  {/* Same interactive photo-stack component used on Home
                      and Mandar's Pride, but here each photo keeps its own
                      natural aspect ratio (no cropping), and sized bigger. */}
                  <PhotoStack photos={program.photos} photoWidth={220} crop={false} />
                </div>
                <div style={{ flex: 1, minWidth: 260 }}>
                  <h2 className="section-heading" style={{ fontSize: 22 }}>
                    {t(program.title, program.titleHi)}
                  </h2>
                  <div
                    className="brand-script"
                    style={{ fontSize: 17, color: 'var(--saffron-600)', margin: '6px 0 10px' }}
                  >
                    {t(program.quote, program.quoteHi)}
                  </div>
                  {program.paragraphs.map((p, pi) => (
                    <p key={pi} style={{ fontSize: 14.5, lineHeight: 1.75, textAlign: 'justify', marginBottom: 10 }}>
                      {t(p.en, p.hi)}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
