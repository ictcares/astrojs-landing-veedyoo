export const templates = [
  {
    slug: "vox-editorial",
    name: "Vox Editorial",
    pack: "Editorial",
    tone: "Analytical, visual, curious",
    promise: "Break a big topic into a sharp thesis, clean chapters, maps, timelines, and argument-led visuals.",
    bestFor: "Explainers about policy, cities, technology shifts, history, and culture.",
    motifs: ["Chapter maps", "Stat frames", "Clean timeline beats"],
    accent: "coral"
  },
  {
    slug: "wsj-business",
    name: "WSJ Business",
    pack: "Business",
    tone: "Confident, evidence-led, market-aware",
    promise: "Turn companies, markets, and strategic moves into a crisp business documentary arc.",
    bestFor: "Startup breakdowns, founder stories, industry shifts, and business model analysis.",
    motifs: ["Market cards", "Comparison panels", "Quote callouts"],
    accent: "sand"
  },
  {
    slug: "faceless-documentary",
    name: "Faceless Documentary",
    pack: "Documentary",
    tone: "Cinematic, grounded, narrative",
    promise: "Structure a faceless story around tension, evidence, recurring motifs, and scene continuity.",
    bestFor: "History, mystery, biographies, failures, disasters, and long-form YouTube essays.",
    motifs: ["Opening hook", "Evidence wall", "Closing reflection"],
    accent: "cyan"
  },
  {
    slug: "coldfusion-tech",
    name: "ColdFusion Tech",
    pack: "Technology",
    tone: "Calm, technical, reflective",
    promise: "Explain technical change without losing the human story behind the invention or collapse.",
    bestFor: "AI, consumer electronics, software companies, hardware history, and innovation timelines.",
    motifs: ["Product timeline", "System diagram", "Founder quote"],
    accent: "teal"
  },
  {
    slug: "polymatter-minimal",
    name: "PolyMatter Minimal",
    pack: "Systems",
    tone: "Minimal, structural, precise",
    promise: "Use restrained visuals and tight narration to make complex systems easy to follow.",
    bestFor: "Geopolitics, logistics, urban systems, policy decisions, and maps.",
    motifs: ["Flat diagrams", "Map movement", "Constraint cards"],
    accent: "amber"
  },
  {
    slug: "wendover-systems",
    name: "Wendover Systems",
    pack: "Systems",
    tone: "Operational, clear, energetic",
    promise: "Show how a system works across geography, incentives, timelines, and bottlenecks.",
    bestFor: "Transport, aviation, supply chains, logistics, infrastructure, and travel systems.",
    motifs: ["Route maps", "Bottleneck visuals", "Operational timelines"],
    accent: "coral"
  }
] as const;

export type Template = (typeof templates)[number];

export function getTemplate(slug: string) {
  return templates.find((template) => template.slug === slug);
}
