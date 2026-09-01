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
        padding: '28px 26px',
        display: 'flex',
        alignItems: 'stretch',
        gap: 28,
        flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--label-grey)',
          lineHeight: 1.8,
          flex: '0 0 280px',
        }}
      >
        <div style={{ color: 'var(--ink)', fontWeight: 700, fontSize: 14 }}>
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
        <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
          {/* Update these href values once MVF's real social accounts exist */}
          <a href="#" aria-label="Mandar Vikas Foundation on Facebook">
            <FacebookIcon />
          </a>
          <a href="#" aria-label="Mandar Vikas Foundation on Instagram">
            <InstagramIcon />
          </a>
        </div>
      </div>

      {/*
        TO ADD THE REAL MAP (exact campus location):
        1. Open Google Maps, search/pin Mandar's Pride's exact location.
        2. Click "Share" -> "Embed a map" -> copy the <iframe> code shown.
        3. Replace the placeholder <div> below with that <iframe>, keeping
           width="100%" height="100%" so it fills this same space, e.g.:

        <iframe
          src="PASTE_THE_EMBED_URL_HERE"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: 4 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      */}
      <div
        style={{
          flex: '1 1 320px',
          minHeight: 220,
          background: 'var(--sky-200)',
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: '#3b77ad',
          textAlign: 'center',
        }}
      >
        Map embed
        <br />
        (exact campus location)
      </div>
    </footer>
  );
}
