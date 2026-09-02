function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M17 3H14.5C13.1 3 11.9 3.6 11 4.5C10.1 5.4 9.5 6.6 9.5 8V11H7V14.5H9.5V21H13V14.5H15.5L16.5 11H13V8.3C13 7.6 13.6 7 14.3 7H16.5V3.5L17 3Z"
        stroke="var(--label-grey)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="var(--label-grey)" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4" stroke="var(--label-grey)" strokeWidth="1.4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="var(--label-grey)" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        padding: '20px 26px',
        display: 'flex',
        alignItems: 'stretch',
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}
      >
        <div>
          <div style={{ color: 'var(--ink)', fontWeight: 700, fontSize: 14 }}>
            Mandar Vikas Foundation
          </div>
          <div style={{ whiteSpace: 'nowrap' }}>
            Dam Road, Bhaga, P.O. &amp; P.S. Bounsi, District Banka, Bihar,
            PIN 813104
          </div>
          <div>
            <b>Phone:</b> 9289928091 &nbsp; <b>Email:</b> mandarvikasfoundation@gmail.com
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
          {/* Update these href values once MVF's real social accounts exist */}
          <a href="#" aria-label="Mandar Vikas Foundation on Facebook">
            <FacebookIcon />
          </a>
          <a href="#" aria-label="Mandar Vikas Foundation on Instagram">
            <InstagramIcon />
          </a>
        </div>
      </div>

      {/* Real embedded map — Mandar's Pride campus, from the coordinates
          24°47'35.1"N 86°59'37.7"E (24.793083, 86.993806) */}
      <iframe
        title="Mandar Vikas Foundation campus location"
        src="https://www.google.com/maps?q=24.793083,86.993806&z=16&output=embed"
        style={{
          flex: '1 1 260px',
          border: 0,
          borderRadius: 4,
          minHeight: 90,
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </footer>
  );
}
