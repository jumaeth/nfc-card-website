import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_SLUG, LOCALE_SLUGS, isLocaleSlug } from "@/lib/locale";

const COOKIE_KEY = "taplino-locale";

// Pick a locale: a previously chosen one (cookie) wins, then the browser's
// Accept-Language, then the default (de).
function detectLocale(request: NextRequest): string {
  const cookie = request.cookies.get(COOKIE_KEY)?.value;
  if (cookie && isLocaleSlug(cookie)) return cookie;

  const header = request.headers.get("accept-language");
  if (header) {
    for (const part of header.split(",")) {
      const code = part.split(";")[0].trim().slice(0, 2).toLowerCase();
      if (isLocaleSlug(code)) return code;
    }
  }
  return DEFAULT_SLUG;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALE_SLUGS.some(
    (slug) => pathname === `/${slug}` || pathname.startsWith(`/${slug}/`),
  );
  if (hasLocale) return;

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Run on everything except Next internals and files with an extension
  // (robots.txt, sitemap.xml, llms.txt, favicon.ico, icon.svg, assets…).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
