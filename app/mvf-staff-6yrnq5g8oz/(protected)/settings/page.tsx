'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

type Settings = {
  founded_year: string;
  students_count: string;
  women_trained_count: string;
};

export default function SettingsAdminPage() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const supabase = createClient();
    const { data, error: fetchError } = await supabase.from('site_settings').select('*').eq('id', 1).single();
    if (fetchError) {
      setError(fetchError.message);
      return;
    }
    setSettings(data as Settings);
  }

  async function handleSave() {
    if (!settings) return;
    setSaving(true);
    setSaved(false);
    setError(null);
    const supabase = createClient();
    const { error: saveError } = await supabase.from('site_settings').update(settings).eq('id', 1);
    setSaving(false);
    if (saveError) {
      setError(saveError.message);
      return;
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  if (!settings) {
    return <div style={{ fontSize: 13, color: 'var(--ink-muted)' }}>{error ?? 'Loading\u2026'}</div>;
  }

  return (
    <div>
      <h1 className="section-heading" style={{ fontSize: 28, margin: "4px 0 4px" }}>Homepage Stats</h1>
      <p style={{ fontSize: 13.5, color: 'var(--ink-muted)', marginBottom: 24 }}>
        The three numbers shown near the top of the Home page.
      </p>

      <div style={{ background: 'var(--card-bg)', borderRadius: 8, padding: 24, maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Field label="Founded year">
          <input value={settings.founded_year} onChange={(e) => setSettings({ ...settings, founded_year: e.target.value })} style={inputStyle} />
        </Field>
        <Field label="Students at Mandar's Pride">
          <input value={settings.students_count} onChange={(e) => setSettings({ ...settings, students_count: e.target.value })} style={inputStyle} />
        </Field>
        <Field label="Women trained">
          <input value={settings.women_trained_count} onChange={(e) => setSettings({ ...settings, women_trained_count: e.target.value })} style={inputStyle} />
        </Field>

        {error && <div style={{ fontSize: 12.5, color: '#b91c1c' }}>{error}</div>}

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={handleSave} disabled={saving} style={primaryBtnStyle}>
            {saving ? 'Saving\u2026' : 'Save'}
          </button>
          {saved && <span style={{ fontSize: 12.5, color: 'var(--green-700)' }}>Saved</span>}
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--ink)', marginBottom: 5 }}>{label}</label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px 10px',
  fontSize: 13.5,
  border: '1px solid var(--paper-line)',
  borderRadius: 5,
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};

const primaryBtnStyle: React.CSSProperties = {
  padding: '9px 18px',
  fontSize: 13,
  fontWeight: 700,
  color: 'white',
  background: 'var(--navy-700)',
  border: 'none',
  borderRadius: 5,
  cursor: 'pointer',
};
