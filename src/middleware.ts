import createMiddleware from "next-intl/middleware";

const intlMiddleware =
  createMiddleware({
    locales: ["ar", "en"],

    defaultLocale: "ar",
  });

export default intlMiddleware;

export const config = {
  matcher: [
    "/((?!api|_next|.*\\..*).*)",
  ],
};