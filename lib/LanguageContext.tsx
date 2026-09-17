'use client';

import { createContext, useContext, useEffect, useState, useMemo } from 'react';

export type Lang = 'en' | 'hi';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'mvf-lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  // Restore the visitor's last choice on load.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'hi') setLangState(saved);
    } catch {
      // localStorage unavailable (e.g. private browsing) — default to English
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang(lang === 'en' ? 'hi' : 'en'),
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}

// Small helper for components that just need to pick between two strings:
// const t = useT(); ... {t('Hello', 'नमस्ते')}
export function useT() {
  const { lang } = useLanguage();
  return (en: string, hi: string) => (lang === 'hi' ? hi : en);
}
