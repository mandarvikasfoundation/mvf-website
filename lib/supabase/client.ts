import { createBrowserClient } from '@supabase/ssr';

// Used inside 'use client' components (e.g. admin forms, the public
// Contact/Volunteer/Partner/Admissions forms that insert into
// form_submissions). The anon key is safe to expose in the browser bundle;
// Row Level Security on each table is what actually enforces access.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
