export const site = {
  name: "Veedyoo",
  baseUrl: import.meta.env.PUBLIC_SITE_URL || "https://veedyoo.com",
  appUrl: import.meta.env.PUBLIC_APP_URL || "https://app.veedyoo.com",
  signupUrl: import.meta.env.PUBLIC_SIGNUP_URL || "https://app.veedyoo.com/login",
  description:
    "Veedyoo is an AI documentary video maker: type a topic and get a finished faceless documentary — script, narration, visuals, music and captions — then fine-tune it in a timeline editor and render in the cloud.",
  nav: [
    { label: "Templates", href: "/templates/" },
    { label: "Use cases", href: "/use-cases/" },
    { label: "Pricing", href: "/pricing/" },
    { label: "Blog", href: "/blog/" }
  ],
  footerNav: [
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
    { label: "Documentary maker", href: "/documentary-video-maker/" },
    { label: "Faceless videos", href: "/faceless-video-maker/" },
    { label: "Script generator", href: "/youtube-script-generator/" },
    { label: "Storyboard generator", href: "/storyboard-generator/" },
    { label: "Privacy", href: "/privacy/" },
    { label: "Terms", href: "/terms/" }
  ]
};

export function absoluteUrl(path = "/") {
  return new URL(path, site.baseUrl).toString();
}
