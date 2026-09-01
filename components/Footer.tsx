export default function Footer() {
  return (
    <footer
      style={{
        padding: '22px 26px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
        flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--label-grey)',
          lineHeight: 1.8,
        }}
      >
        <div style={{ color: 'var(--ink)', fontWeight: 700 }}>
          Mandar Vikas Foundation
        </div>
        <div>
          Dam Road, Bhaga, P.O. &amp; P.S. Bounsi, District Banka, Bihar,
          PIN 813104
        </div>
        <div>
          <b>Phone:</b> 9289928091
        </div>
        <div>
          <b>Email:</b> mandarvikasfoundation@gmail.com
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
          {/* Social icons: hyperlink these once real accounts exist */}
          <span aria-hidden>FB</span>
          <span aria-hidden>IG</span>
        </div>
      </div>

      <div
        style={{
          flexShrink: 0,
          width: 200,
          height: 120,
          background: 'var(--sky-200)',
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: '#3b77ad',
          textAlign: 'center',
        }}
      >
        {/* Replace with a real embedded map (exact campus location) */}
        Map embed
        <br />
        (exact campus location)
      </div>
    </footer>
  );
}
