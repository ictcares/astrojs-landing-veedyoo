// Shared schema.org JSON-LD builders. Every page passes its objects to
// BaseLayout's jsonLd prop (single object or array).
import { absoluteUrl, site } from "@/data/site";

export const ORG = {
  "@type": "Organization",
  name: "Veedyoo",
  url: site.baseUrl,
  logo: absoluteUrl("/brand/veedyoo-logo.png")
};

// The product itself — used on the homepage and feature (SEO) pages.
export function webApplication() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Veedyoo",
    url: site.appUrl,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires a modern web browser",
    description:
      "AI documentary video maker: type a topic and get a finished faceless documentary — script, narration, visuals, music and captions — with a timeline editor and cloud rendering.",
    offers: {
      "@type": "Offer",
      price: "5",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    },
    publisher: ORG
  };
}

export type VideoSample = {
  title: string;
  description?: string;
  video: string;
  poster: string;
  duration?: string; // ISO 8601, e.g. PT2M35S
  uploadDate?: string; // YYYY-MM-DD
};

export function videoObject(v: VideoSample) {
  return {
    "@type": "VideoObject",
    name: v.title,
    description:
      v.description ??
      `${v.title} — a documentary generated and cloud-rendered by Veedyoo from a one-sentence topic. Unedited output.`,
    thumbnailUrl: v.poster,
    contentUrl: v.video,
    duration: v.duration,
    uploadDate: v.uploadDate ?? "2026-07-19",
    publisher: ORG
  };
}

export function videoItemList(videos: VideoSample[], listName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    itemListElement: videos.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: videoObject(v)
    }))
  };
}
