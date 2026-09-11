'use client';

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: '30px 0 50px' }}>
      <div className="eyebrow">Home / Contact</div>
      <h1 className="section-heading" style={{ fontSize: 42, margin: '8px 0 0' }}>
        Contact
      </h1>
      <p style={{ fontSize: 14, color: 'var(--ink-muted)', marginTop: 2, whiteSpace: 'nowrap' }}>
        We&apos;d love to hear from you, whether you have a question, want
        to get involved, or anything else!
      </p>

      <div style={{ display: 'flex', gap: 32, marginTop: 30, flexWrap: 'wrap' }}>
        <div style={{ flex: '0 0 42%', minWidth: 280 }}>
          <h2 className="section-heading" style={{ fontSize: 30, margin: '0 0 14px', whiteSpace: 'nowrap' }}>
            Get In Touch
          </h2>
          <div style={{ fontSize: 13, lineHeight: 1.9 }}>
            <b>Mandar Vikas Foundation</b>
            <br />
            Dam Road, Bhaga, P.O. &amp; P.S. Bounsi
            <br />
            District Banka, Bihar, PIN 813104
            <br />
            <br />
            <b>Phone:</b> 9289928091
            <br />
            <b>Email:</b> mandarvikasfoundation@gmail.com
          </div>

          <iframe
            title="Mandar Vikas Foundation campus location"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d28976.55380092436!2d86.993806!3d24.793083!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ3JzM1LjEiTiA4NsKwNTknMzcuNyJF!5e0!3m2!1sen!2sus!4v1788530637340!5m2!1sen!2sus"
            style={{
              width: '100%',
              height: 260,
              border: '1px solid var(--rule)',
              borderRadius: 4,
              marginTop: 18,
            }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="card" style={{ flex: 1, minWidth: 300, padding: 28 }}>
          <div className="section-heading" style={{ fontSize: 20, textAlign: 'center', marginBottom: 18 }}>
            Send Us a Message
          </div>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', height: 340 }}>
            <div style={{ marginBottom: 20 }}>
              <select className="field-input" style={{ appearance: 'none' }} defaultValue="">
                <option value="" disabled>
                  What is this about?
                </option>
                <option>General inquiry</option>
                <option>Mandar&apos;s Pride admissions</option>
                <option>Donations</option>
                <option>Volunteering</option>
                <option>Partnership / CSR</option>
                <option>Other</option>
              </select>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 20 }}>
              <input className="field-input" placeholder="Name" />
              <input className="field-input" placeholder="Email or phone" />
            </div>
            <div style={{ flex: 1, marginBottom: 20 }}>
              <textarea
                className="field-input"
                placeholder="Message"
                style={{ height: '100%', resize: 'none', fontFamily: 'var(--font-serif)' }}
              />
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)', textAlign: 'center', marginBottom: 16 }}>
              Thank you for taking the time to reach out. We&apos;ll get
              back to you within 3 working days.
            </div>
            <div style={{ textAlign: 'center' }}>
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
