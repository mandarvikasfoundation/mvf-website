'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'saving' | 'done'>('idle');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError('Password should be at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords don\u2019t match.');
      return;
    }

    setStatus('saving');
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setStatus('idle');

    if (updateError) {
      setError('Couldn\u2019t update your password. The reset link may have expired \u2014 request a new one from the sign-in page.');
      return;
    }

    setStatus('done');
    setTimeout(() => {
      router.push('/mvf-staff-6yrnq5g8oz');
      router.refresh();
    }, 1500);
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
      <form onSubmit={handleSubmit} className="card" style={{ width: 360, padding: '36px 34px', textAlign: 'center' }}>
        <div className="brand-script" style={{ fontSize: 22, color: 'var(--navy-700)', lineHeight: 1 }}>
          Mandar Vikas Foundation
        </div>
        <div className="eyebrow" style={{ marginTop: 6, marginBottom: 26 }}>
          Set a New Password
        </div>

        {status === 'done' ? (
          <div style={{ fontSize: 13.5, color: 'var(--green-700)' }}>
            Password updated. Taking you to the dashboard&hellip;
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'left', marginBottom: 16 }}>
              <label htmlFor="new-password" style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)', marginBottom: 5, textTransform: 'uppercase', letterSpacing: 1 }}>
                New Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="new-password"
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

            <div style={{ textAlign: 'left', marginBottom: 20 }}>
              <label htmlFor="confirm-password" style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--label-grey)', marginBottom: 5, textTransform: 'uppercase', letterSpacing: 1 }}>
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type={showPassword ? 'text' : 'password'}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="field-input"
                style={{ fontSize: 14 }}
              />
            </div>

            {error && <div style={{ fontSize: 12.5, color: '#b91c1c', marginBottom: 16 }}>{error}</div>}

            <button type="submit" className="btn btn-primary" disabled={status === 'saving'} style={{ width: '100%' }}>
              {status === 'saving' ? 'Saving\u2026' : 'Update password'}
            </button>
          </>
        )}
      </form>
    </div>
  );
}
