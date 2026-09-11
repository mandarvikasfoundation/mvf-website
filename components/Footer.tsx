function FacebookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M17 3H14.5C13.1 3 11.9 3.6 11 4.5C10.1 5.4 9.5 6.6 9.5 8V11H7V14.5H9.5V21H13V14.5H15.5L16.5 11H13V8.3C13 7.6 13.6 7 14.3 7H16.5V3.5L17 3Z"
        stroke="var(--ink)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="var(--ink)" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4" stroke="var(--ink)" strokeWidth="1.4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="var(--ink)" />
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
        background: 'var(--card-bg)',
        borderTop: '1px solid var(--paper-line)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          color: 'var(--label-grey)',
          lineHeight: 1.8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}
      >
        <div>
          <div style={{ color: 'var(--ink)', fontWeight: 700, fontSize: 17 }}>
            Mandar Vikas Foundation
          </div>
          <div style={{ whiteSpace: 'nowrap' }}>
            Dam Road, Bhaga, P.O. &amp; P.S. Bounsi, District Banka, Bihar,{' '}
            <b>PIN</b> 813104
          </div>
          <div>
            <b>Phone:</b> 9289928091
          </div>
          <div>
            <b>Email:</b> mandarvikasfoundation@gmail.com
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

      {/* Real interactive embed, generated via Google Maps' Share -> Embed
          a map flow (full pan/zoom/pinch support). */}
      <iframe
        title="Mandar Vikas Foundation campus location"
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d28976.55380092436!2d86.993806!3d24.793083!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ3JzM1LjEiTiA4NsKwNTknMzcuNyJF!5e0!3m2!1sen!2sus!4v1788530637340!5m2!1sen!2sus"
        style={{
          flex: '1 1 320px',
          border: '1px solid var(--rule)',
          borderRadius: 4,
          height: 280,
        }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </footer>
  );
}
