'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

type Submission = {
  id: string;
  form_type: 'contact' | 'volunteer' | 'partner' | 'admissions';
  data: Record<string, string>;
  is_read: boolean;
  created_at: string;
};

const TYPE_LABELS: Record<Submission['form_type'], string> = {
  contact: 'Contact',
  volunteer: 'Volunteer',
  partner: 'Partner',
  admissions: "Mandar's Pride Admissions",
};

const TYPE_COLORS: Record<Submission['form_type'], string> = {
  contact: '#1b3a5c',
  volunteer: '#3b6d11',
  partner: '#c6631f',
  admissions: '#9333ea',
};

// Field key -> display label, per form type. Anything not listed here still
// shows up (fallback: the raw key), so a new field added to a form later
// doesn't silently disappear from the inbox.
const FIELD_LABELS: Record<string, string> = {
  reason: 'Reason',
  name: 'Name',
  emailOrPhone: 'Email / phone',
  message: 'Message',
  fullName: 'Full name',
  contact: 'Contact',
  interest: 'Area of interest',
  availability: 'Availability',
  organization: 'Organization',
  supportType: 'Type of support',
  parentName: "Parent's name",
  childName: "Child's name",
  parentContact: 'Parent contact',
  question: 'Question',
};

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[] | null>(null);
  const [filter, setFilter] = useState<'all' | Submission['form_type']>('all');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const supabase = createClient();
    const { data, error: fetchError } = await supabase
      .from('form_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (fetchError) {
      setError(fetchError.message);
      return;
    }
    setSubmissions(data as Submission[]);
  }

  async function toggleRead(id: string, current: boolean) {
    const supabase = createClient();
    setSubmissions((prev) => prev?.map((s) => (s.id === id ? { ...s, is_read: !current } : s)) ?? null);
    await supabase.from('form_submissions').update({ is_read: !current }).eq('id', id);
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this submission? This cannot be undone.')) return;
    const supabase = createClient();
    setSubmissions((prev) => prev?.filter((s) => s.id !== id) ?? null);
    await supabase.from('form_submissions').delete().eq('id', id);
  }

  const visible = submissions?.filter((s) => filter === 'all' || s.form_type === filter) ?? [];

  return (
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1b2430', marginBottom: 4 }}>Form Submissions</h1>
      <p style={{ fontSize: 13.5, color: '#6b7280', marginBottom: 20 }}>
        Everyone who has reached out through Contact, Volunteer, Partner, or the Mandar's Pride admissions form.
      </p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {(['all', 'contact', 'volunteer', 'partner', 'admissions'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              fontSize: 12.5,
              padding: '6px 14px',
              borderRadius: 14,
              border: filter === f ? '1px solid #1b2430' : '1px solid #d1d5db',
              background: filter === f ? '#1b2430' : 'white',
              color: filter === f ? 'white' : '#374151',
              cursor: 'pointer',
            }}
          >
            {f === 'all' ? 'All' : TYPE_LABELS[f]}
          </button>
        ))}
      </div>

      {error && <div style={{ fontSize: 13, color: '#b91c1c', marginBottom: 16 }}>{error}</div>}

      {submissions === null && !error && (
        <div style={{ fontSize: 13, color: '#6b7280' }}>Loading\u2026</div>
      )}

      {submissions !== null && visible.length === 0 && (
        <div style={{ fontSize: 13, color: '#6b7280' }}>No submissions here yet.</div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {visible.map((s) => (
          <div
            key={s.id}
            style={{
              background: 'white',
              borderRadius: 8,
              padding: '16px 20px',
              borderLeft: `4px solid ${TYPE_COLORS[s.form_type]}`,
              opacity: s.is_read ? 0.68 : 1,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
              <div>
                <span
                  style={{
                    fontSize: 10.5,
                    fontWeight: 700,
                    color: TYPE_COLORS[s.form_type],
                    textTransform: 'uppercase',
                    letterSpacing: 0.3,
                  }}
                >
                  {TYPE_LABELS[s.form_type]}
                </span>
                {!s.is_read && (
                  <span
                    style={{
                      marginLeft: 8,
                      fontSize: 9.5,
                      fontWeight: 700,
                      color: 'white',
                      background: '#c6631f',
                      padding: '1px 7px',
                      borderRadius: 8,
                    }}
                  >
                    NEW
                  </span>
                )}
                <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 3 }}>
                  {new Date(s.created_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => toggleRead(s.id, s.is_read)} style={actionBtnStyle}>
                  {s.is_read ? 'Mark unread' : 'Mark read'}
                </button>
                <button onClick={() => handleDelete(s.id)} style={{ ...actionBtnStyle, color: '#b91c1c' }}>
                  Delete
                </button>
              </div>
            </div>

            <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4px 24px' }}>
              {Object.entries(s.data)
                .filter(([, value]) => value)
                .map(([key, value]) => (
                  <div key={key} style={{ fontSize: 12.5 }}>
                    <span style={{ color: '#6b7280' }}>{FIELD_LABELS[key] ?? key}:</span>{' '}
                    <span style={{ color: '#1b2430' }}>{value}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const actionBtnStyle: React.CSSProperties = {
  fontSize: 11.5,
  padding: '5px 11px',
  border: '1px solid #d1d5db',
  borderRadius: 5,
  background: 'white',
  color: '#374151',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
};
