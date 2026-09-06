import PhotoStack from '@/components/PhotoStack';

type Program = {
  id: string;
  date: string;
  title: string;
  quote: string;
  dotColor: string;
  photos: { src: string; caption?: string }[];
  paragraphs: string[];
};

const PROGRAMS: Program[] = [
  {
    id: 'learning-centre',
    date: 'NOVEMBER 2019',
    title: 'MVF Learning Centre',
    quote: '"There is no scarcity of talent in our country."',
    dotColor: 'var(--green-300)',
    photos: [
      { src: '/images/our-work/learning-1.jpg' },
      { src: '/images/our-work/learning-2.jpg' },
    ],
    paragraphs: [
      `MVF Learning Centre is a platform for children who have either dropped out of school, or who are school students unable to afford extra classes. We don't offer "extra classes" in the ordinary sense; we started this because many children from farming or daily-wage families are asked to work alongside their parents or look after siblings, and as a result can't attend school regularly and fall behind.`,
      `There is no scarcity of talent in our country. But circumstances like these obstruct a child's holistic growth, and MVF exists to support these children so they can grow and blossom. Because the organization is currently entirely dependent on individual donations, with no funding partner, we are limited in how many children the Centre can support at once. Teachers at the Centre don't just teach academics, but also pass on important life skills.`,
    ],
  },
  {
    id: 'horticulture',
    date: 'FEBRUARY 2020',
    title: 'MVF Horticulture',
    quote: '"Women are the foundation of any society."',
    dotColor: '#fac775',
    photos: [
      { src: '/images/our-work/horticulture-1.jpg' },
      { src: '/images/our-work/horticulture-2.jpg' },
      { src: '/images/our-work/horticulture-3.jpg' },
    ],
    paragraphs: [
      `We started MVF Horticulture in February 2020, with the women of our community in mind, specifically those without financial independence of their own. Women are the foundation of any society; a strong foundation makes for a strong building. Members of the Foundation shared a common belief in the importance of women's financial empowerment, and from that came the idea of horticulture; specifically, marigold cultivation.`,
      `It's worth acknowledging that it was the women of the community themselves who stepped forward to support this project, contributing their own labour voluntarily. Profit from the marigold cultivation doesn't only support these women; it also goes toward strengthening the Learning Centre and starting other projects that push back against the odds our community faces.`,
    ],
  },
  {
    id: 'skill-development',
    date: 'FEBRUARY 2021',
    title: 'MVF Skill Development Centre',
    quote: '"Working toward self-sustenance."',
    dotColor: '#f0997b',
    photos: [
      { src: '/images/our-work/skill-1.jpg' },
      { src: '/images/our-work/skill-2.jpg' },
    ],
    paragraphs: [
      `Mandar Vikas Foundation works toward self-sustenance for underprivileged sections of society. In line with that goal, MVF started the Skill Development Centre in February 2021, beginning with a free Basic Tailoring Course for women. The course runs over three months, split into six fifteen-day terms.`,
      `Once the Basic course is complete, participants can go on to the Advance Tailoring Course (also three months long) which teaches more refined, professional stitching techniques. On successful completion (assessed internally by the Centre), participants receive a Certificate of Appreciation.`,
    ],
  },
];

export const metadata = {
  title: 'Our Other Work | Mandar Vikas Foundation',
};

export default function OurWorkPage() {
  return (
    <>
      <div className="container" style={{ padding: '30px 0 6px' }}>
        <div className="eyebrow">Home / Our Other Work</div>
        <h1 className="section-heading" style={{ fontSize: 42, margin: '8px 0 0' }}>
          Our Other Work
        </h1>
        <p style={{ fontSize: 14, color: 'var(--ink-muted)', marginTop: 2 }}>
          Beyond Mandar&apos;s Pride, the Foundation runs community programs
          focused on children&apos;s education and women&apos;s financial
          independence.
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
                {program.date}
              </div>
              <div style={{ display: 'flex', gap: 22, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ flexShrink: 0, marginTop: 26 }}>
                  {/* Same interactive photo-stack component used on Home
                      and Mandar's Pride — click the front photo to cycle
                      through the pile. */}
                  <PhotoStack photos={program.photos} />
                </div>
                <div style={{ flex: 1, minWidth: 260 }}>
                  <h2 className="section-heading" style={{ fontSize: 22 }}>
                    {program.title}
                  </h2>
                  <div
                    className="brand-script"
                    style={{ fontSize: 17, color: 'var(--saffron-600)', margin: '6px 0 10px' }}
                  >
                    {program.quote}
                  </div>
                  {program.paragraphs.map((p, pi) => (
                    <p key={pi} style={{ fontSize: 13, lineHeight: 1.75, textAlign: 'justify', marginBottom: 10 }}>
                      {p}
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
