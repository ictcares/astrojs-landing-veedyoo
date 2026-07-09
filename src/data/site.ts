export const site = {
  name: "Veedyoo",
  baseUrl: import.meta.env.PUBLIC_SITE_URL || "https://veedyoo.com",
  appUrl: import.meta.env.PUBLIC_APP_URL || "https://app.veedyoo.com",
  signupUrl: import.meta.env.PUBLIC_SIGNUP_URL || "https://app.veedyoo.com/login",
  description:
    "Veedyoo helps solo faceless creators turn a raw topic into a documentary-style production plan without losing the story, style, or scene logic.",
  nav: [
    { label: "Templates", href: "/templates/" },
    { label: "Use cases", href: "/use-cases/" },
    { label: "Pricing", href: "/pricing/" },
    { label: "Blog", href: "/blog/" }
  ],
  footerNav: [
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
    { label: "Privacy", href: "/privacy/" },
    { label: "Terms", href: "/terms/" }
  ]
};

export function absoluteUrl(path = "/") {
  return new URL(path, site.baseUrl).toString();
}
