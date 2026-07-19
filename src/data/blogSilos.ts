export const BLOG_SILO_SLUGS = [
  "ai-documentary-production",
  "faceless-youtube",
  "ai-video-tools"
] as const;

export type BlogSiloSlug = (typeof BLOG_SILO_SLUGS)[number];

export const BLOG_SILOS: Record<
  BlogSiloSlug,
  {
    label: string;
    eyebrow: string;
    title: string;
    description: string;
    summary: string;
    pillarHref: string;
    pillarLabel: string;
  }
> = {
  "ai-documentary-production": {
    label: "AI documentary production",
    eyebrow: "Production guides",
    title: "Plan and produce an AI documentary",
    description:
      "Practical guides for turning research and narration into a storyboard, purposeful scenes, and an editable documentary.",
    summary:
      "Start here when the production itself is the problem: structuring the story, choosing scene types, planning visuals, and keeping the final cut coherent.",
    pillarHref: "/documentary-video-maker/",
    pillarLabel: "Explore the documentary video maker"
  },
  "faceless-youtube": {
    label: "Faceless YouTube",
    eyebrow: "Channel workflow",
    title: "Build a stronger faceless YouTube workflow",
    description:
      "Topic selection, repeatable production systems, monetization policy, and story frameworks for documentary-style faceless channels.",
    summary:
      "Use this hub to move from a channel idea to an original, reviewable production process without treating automation as a substitute for editorial judgment.",
    pillarHref: "/faceless-video-maker/",
    pillarLabel: "Explore the faceless video maker"
  },
  "ai-video-tools": {
    label: "AI video tools",
    eyebrow: "Tools and costs",
    title: "Choose an AI documentary video tool",
    description:
      "Evidence-led comparisons of AI documentary platforms, pricing models, production responsibilities, and the workflows they fit.",
    summary:
      "Start here when you are comparing products or budgets. The guides separate documented capabilities from assumptions and explain who carries each production cost.",
    pillarHref: "/pricing/",
    pillarLabel: "See Veedyoo pricing"
  }
};

export const BLOG_SILO_ORDER: BlogSiloSlug[] = [
  "ai-documentary-production",
  "faceless-youtube",
  "ai-video-tools"
];
