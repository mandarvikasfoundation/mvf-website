'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (signInError) {
      setError('Incorrect email or password.');
      return;
    }

    router.push('/mvf-staff-6yrnq5g8oz');
    router.refresh();
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f4f5f7',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: 340,
          background: 'white',
          borderRadius: 8,
          padding: '32px 30px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 18, color: '#1b2430', marginBottom: 2 }}>
          MVF Admin
        </div>
        <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 24 }}>
          Sign in to manage the site.
        </div>

        <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: '#374151', marginBottom: 5 }}>
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '9px 11px',
            fontSize: 14,
            border: '1px solid #d1d5db',
            borderRadius: 5,
            marginBottom: 16,
            boxSizing: 'border-box',
          }}
        />

        <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: '#374151', marginBottom: 5 }}>
          Password
        </label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '9px 11px',
            fontSize: 14,
            border: '1px solid #d1d5db',
            borderRadius: 5,
            marginBottom: 20,
            boxSizing: 'border-box',
          }}
        />

        {error && (
          <div style={{ fontSize: 12.5, color: '#b91c1c', marginBottom: 16 }}>{error}</div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '10px 0',
            fontSize: 14,
            fontWeight: 700,
            color: 'white',
            background: loading ? '#93a4bd' : '#1b2430',
            border: 'none',
            borderRadius: 5,
            cursor: loading ? 'default' : 'pointer',
          }}
        >
          {loading ? 'Signing in\u2026' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
