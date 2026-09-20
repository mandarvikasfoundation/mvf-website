import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

// IMPORTANT: this exact string must match the admin route folder name
// (app/<ADMIN_BASE>/...). It's intentionally an unguessable, unlisted path
// rather than something like "/admin" — nothing on the public site links
// to it. Changing this value means renaming the app/<ADMIN_BASE> folder
// too, or the routes and this guard will disagree.
const ADMIN_BASE = 'mvf-staff-6yrnq5g8oz';

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;
  const isAdminRoute = pathname.startsWith(`/${ADMIN_BASE}`);
  const isLoginPage = pathname === `/${ADMIN_BASE}/login`;
  const isResetPasswordPage = pathname === `/${ADMIN_BASE}/reset-password`;

  if (isAdminRoute && !isLoginPage && !isResetPasswordPage && !user) {
    const loginUrl = new URL(`/${ADMIN_BASE}/login`, request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Already logged in and sitting on the login page — send them to the
  // dashboard instead of showing the form again.
  if (isLoginPage && user) {
    const dashboardUrl = new URL(`/${ADMIN_BASE}`, request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Only run this middleware for the admin section, so every other
     * public page skips the session-check overhead entirely.
     */
    '/mvf-staff-6yrnq5g8oz/:path*',
  ],
};
