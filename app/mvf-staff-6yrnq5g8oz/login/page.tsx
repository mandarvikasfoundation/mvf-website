'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resetStatus, setResetStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
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

  async function handleForgotPassword() {
    if (!email) {
      setError('Enter your email above first, then click "Forgot password?".');
      return;
    }
    setError(null);
    setResetStatus('sending');
    const supabase = createClient();
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/mvf-staff-6yrnq5g8oz/reset-password`,
    });
    setResetStatus(resetError ? 'error' : 'sent');
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--paper)',
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="card"
        style={{
          width: 360,
          padding: '36px 34px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            overflow: 'hidden',
            margin: '0 auto 14px',
          }}
        >
          <img src="/images/mvf-logo.png" alt="Mandar Vikas Foundation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="brand-script" style={{ fontSize: 22, color: 'var(--navy-700)', lineHeight: 1 }}>
          Mandar Vikas Foundation
        </div>
        <div className="eyebrow" style={{ marginTop: 6, marginBottom: 26 }}>
          Admin Sign In
        </div>

        <div style={{ textAlign: 'left', marginBottom: 16 }}>
          <label htmlFor="admin-email" style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)', marginBottom: 5, textTransform: 'uppercase', letterSpacing: 1 }}>
            Email
          </label>
          <input
            id="admin-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="field-input"
            style={{ fontSize: 14 }}
          />
        </div>

        <div style={{ textAlign: 'left', marginBottom: 8 }}>
          <label htmlFor="admin-password" style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)', marginBottom: 5, textTransform: 'uppercase', letterSpacing: 1 }}>
            Password
          </label>
          <div style={{ position: 'relative' }}>
            <input
              id="admin-password"
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="field-input"
              style={{ fontSize: 14, paddingRight: 46 }}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: 10.5,
                color: 'var(--saffron-600)',
                padding: '4px 2px',
              }}
            >
              {showPassword ? 'HIDE' : 'SHOW'}
            </button>
          </div>
        </div>

        <div style={{ textAlign: 'right', marginBottom: 20 }}>
          <button
            type="button"
            onClick={handleForgotPassword}
            disabled={resetStatus === 'sending'}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--navy-700)',
              padding: 0,
            }}
          >
            Forgot password?
          </button>
        </div>

        {resetStatus === 'sent' && (
          <div style={{ fontSize: 12, color: 'var(--green-700)', marginBottom: 16 }}>
            Password reset email sent &mdash; check your inbox.
          </div>
        )}
        {resetStatus === 'error' && (
          <div style={{ fontSize: 12, color: '#b91c1c', marginBottom: 16 }}>
            Couldn't send the reset email. Double-check the address and try again.
          </div>
        )}
        {error && <div style={{ fontSize: 12.5, color: '#b91c1c', marginBottom: 16 }}>{error}</div>}

        <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%' }}>
          {loading ? 'Signing in\u2026' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
