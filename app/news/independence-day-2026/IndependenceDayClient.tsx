'use client';

import Link from 'next/link';
import { useT } from '@/lib/LanguageContext';

export default function IndependenceDayClient() {
  const t = useT();

  return (
    <article className="container" style={{ padding: '36px 0 60px', maxWidth: 720 }}>
      <Link
        href="/news"
        style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)' }}
      >
        {t('\u2190 back to News & Updates', '\u2190 समाचार एवं अपडेट पर वापस जाएं')}
      </Link>

      <div style={{ marginTop: 16 }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--saffron-600)',
            background: 'var(--card-bg)',
            padding: '3px 10px',
            borderRadius: 12,
          }}
        >
          {t('Community', 'समुदाय')}
        </span>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--label-grey)',
            marginTop: 10,
          }}
        >
          {t('15 August 2026', '15 अगस्त 2026')}
        </div>
        <h1 className="section-heading" style={{ fontSize: 28, marginTop: 6 }}>
          {t("Independence Day at Mandar's Pride Campus", "Mandar's Pride परिसर में स्वतंत्रता दिवस")}
        </h1>
      </div>

      <img
        src="/images/news/independence-day-2026-flag-hoisting.png"
        alt={t(
          "Flag hoisting ceremony at Mandar's Pride, students holding small tricolour flags",
          "Mandar's Pride में ध्वजारोहण समारोह, छात्र छोटे तिरंगे झंडे लिए हुए"
        )}
        style={{
          width: '100%',
          borderRadius: 6,
          marginTop: 20,
          maxHeight: 480,
          objectFit: 'cover',
        }}
      />

      <div style={{ fontSize: 15, lineHeight: 1.85, marginTop: 26 }}>
        <p>
          {t(
            "On the morning of 15th August, students and staff at Mandar Vikas Foundation's campus came together to mark India's Independence Day. The celebration opened with the flag hoisting ceremony, as the tricolour was raised while children stood together waving small flags and singing the national anthem.",
            '15 अगस्त की सुबह, मंदार विकास फाउंडेशन के परिसर में छात्र एवं स्टाफ भारत के स्वतंत्रता दिवस को मनाने के लिए एकत्र हुए। समारोह की शुरुआत ध्वजारोहण से हुई, जिसमें तिरंगा फहराया गया जबकि बच्चे छोटे झंडे लहराते और राष्ट्रगान गाते हुए एक साथ खड़े थे।'
          )}
        </p>
        <p>
          {t(
            'Following the ceremony, students took part in a series of short cultural performances, including patriotic songs and recitations they had prepared in the days leading up to the celebration. Teachers and staff joined in throughout the morning, and the day closed with flowers and sweets shared among everyone present.',
            'समारोह के बाद, छात्रों ने कई छोटे सांस्कृतिक कार्यक्रमों में भाग लिया, जिनमें देशभक्ति गीत एवं कविता-पाठ शामिल थे जो उन्होंने समारोह से पहले के दिनों में तैयार किए थे। शिक्षक एवं स्टाफ पूरी सुबह इसमें शामिल रहे, और दिन का समापन सभी उपस्थित लोगों के बीच फूल एवं मिठाइयां बांटकर हुआ।'
          )}
        </p>
        <p>
          {t(
            "Moments like these are a reminder of the values Mandar's Pride hopes to instill in its students: pride in their community, in their learning, and in the country they are growing up in.",
            "ऐसे पल इस बात की याद दिलाते हैं कि Mandar's Pride अपने छात्रों में किन मूल्यों को स्थापित करना चाहता है: अपने समुदाय पर गर्व, अपनी शिक्षा पर गर्व, और जिस देश में वे बड़े हो रहे हैं उस पर गर्व।"
          )}
        </p>
      </div>
    </article>
  );
}
