// Template styles = the app's genre presets, presented as creative packages.
// Each carries a real sample film (rendered by the app, streamed from the CDN).
export type Template = {
  slug: string;
  name: string;
  pack: string;
  tone: string;
  promise: string;
  bestFor: string;
  motifs: readonly string[];
  accent: "coral" | "sand" | "cyan" | "teal" | "amber";
  sample?: {
    title: string;
    video: string;
    poster: string;
    meta: string;
    duration?: string;
    uploadDate?: string;
  };
};

export const templates: Template[] = [
  {
    slug: "editorial-explainer",
    name: "Editorial Explainer",
    pack: "Editorial",
    tone: "Analytical, visual, curious",
    promise: "Break a big idea into a sharp thesis, clean chapters, maps, timelines, and argument-led visuals.",
    bestFor: "Science, policy, cities, technology shifts, and big-question explainers.",
    motifs: ["Chapter maps", "Stat frames", "Clean timeline beats"],
    accent: "coral",
    sample: {
      title: "Voyager 1: Still Calling Home From Interstellar Space",
      video: "https://cdn.veedyoo.com/projects/cmrrhxfk4000001nmgc4mexzz/renders/cmrri5rk6001h01nmrqekepez.mp4",
      poster: "https://cdn.veedyoo.com/projects/cmrrhxfk4000001nmgc4mexzz/img/s04-imageUrl.png",
      meta: "SPACE & SCIENCE · PRODUCED FOR $1.29 · UNEDITED",
      duration: "PT2M35S",
      uploadDate: "2026-07-19"
    }
  },
  {
    slug: "business-desk",
    name: "Business Desk",
    pack: "Business",
    tone: "Confident, evidence-led, market-aware",
    promise: "Turn companies, markets, and strategic moves into a crisp business documentary arc.",
    bestFor: "Startup breakdowns, founder stories, industry shifts, and business model analysis.",
    motifs: ["Market cards", "Comparison panels", "Quote callouts"],
    accent: "sand",
    sample: {
      title: "Blockbuster: The Late Fee That Built Netflix and Killed an Empire",
      video: "https://cdn.veedyoo.com/projects/cmrriouh9002j01nmfcnhjixj/renders/cmrrj3ihw001v01po2hbnavsp.mp4",
      poster: "https://cdn.veedyoo.com/projects/cmrriouh9002j01nmfcnhjixj/img/s03-bgImageUrl.png",
      meta: "BUSINESS DRAMA · PRODUCED FOR $1.32 · UNEDITED",
      duration: "PT2M25S",
      uploadDate: "2026-07-19"
    }
  },
  {
    slug: "faceless-documentary",
    name: "Faceless Documentary",
    pack: "Documentary",
    tone: "Cinematic, grounded, narrative",
    promise: "Structure a faceless story around tension, evidence, recurring motifs, and scene continuity.",
    bestFor: "History, mystery, biographies, failures, disasters, and long-form YouTube essays.",
    motifs: ["Opening hook", "Evidence wall", "Closing reflection"],
    accent: "cyan",
    sample: {
      title: "D.B. Cooper: The Man Who Vanished at Ten Thousand Feet",
      video: "https://cdn.veedyoo.com/projects/cmrrhy06z000101nm9b2gjojr/renders/cmrri5v9h001i01nmy377ns5w.mp4",
      poster: "https://cdn.veedyoo.com/projects/cmrrhy06z000101nm9b2gjojr/img/s02-imageUrl.png",
      meta: "MYSTERY · PRODUCED FOR $1.08 · UNEDITED",
      duration: "PT2M36S",
      uploadDate: "2026-07-19"
    }
  },
  {
    slug: "tech-chronicle",
    name: "Tech Chronicle",
    pack: "Technology",
    tone: "Calm, technical, reflective",
    promise: "Explain technical change without losing the human story behind the invention or collapse.",
    bestFor: "AI, consumer electronics, software companies, hardware history, and innovation timelines.",
    motifs: ["Product timeline", "System diagram", "Founder quote"],
    accent: "teal",
    sample: {
      title: "The Floppy Disk: How 1.44 Megabytes Ruled the World",
      video: "https://cdn.veedyoo.com/projects/cmrri5xw3001j01nmkal37foe/renders/cmrric11o002f01nm7cn5yfe5.mp4",
      poster: "https://cdn.veedyoo.com/projects/cmrri5xw3001j01nmkal37foe/img/s02-imageUrl.png",
      meta: "TECH HISTORY · PRODUCED FOR $1.29 · UNEDITED",
      duration: "PT2M26S",
      uploadDate: "2026-07-19"
    }
  },
  {
    slug: "minimal-systems",
    name: "Minimal Systems",
    pack: "Systems",
    tone: "Minimal, structural, precise",
    promise: "Use restrained visuals and tight narration to make complex systems easy to follow.",
    bestFor: "Geopolitics, logistics, urban systems, policy decisions, and maps.",
    motifs: ["Flat diagrams", "Map movement", "Constraint cards"],
    accent: "amber",
    sample: {
      title: "The Panama Canal Is Running Out of Water",
      video: "https://cdn.veedyoo.com/projects/cmrrip14u002k01nmqx7eg8vk/renders/cmrrj7joh002p01pog69nsz32.mp4",
      poster: "https://cdn.veedyoo.com/projects/cmrrip14u002k01nmqx7eg8vk/img/s03-imageUrl.png",
      meta: "GEOPOLITICS · PRODUCED FOR $1.59 · UNEDITED",
      duration: "PT2M25S",
      uploadDate: "2026-07-19"
    }
  },
  {
    slug: "routes-and-logistics",
    name: "Routes & Logistics",
    pack: "Systems",
    tone: "Operational, clear, energetic",
    promise: "Show how a system works across geography, incentives, timelines, and bottlenecks.",
    bestFor: "Transport, aviation, supply chains, logistics, infrastructure, and travel systems.",
    motifs: ["Route maps", "Bottleneck visuals", "Operational timelines"],
    accent: "coral",
    sample: {
      title: "The Midnight Machine: How Overnight Shipping Actually Works",
      video: "https://cdn.veedyoo.com/projects/cmrrip7tu002l01nmfynfdoyp/renders/cmrrj3lw9001w01pouwj803r9.mp4",
      poster: "https://cdn.veedyoo.com/projects/cmrrip7tu002l01nmfynfdoyp/img/s02-imageUrl.png",
      meta: "LOGISTICS · PRODUCED FOR $1.33 · UNEDITED",
      duration: "PT2M32S",
      uploadDate: "2026-07-19"
    }
  },
  {
    slug: "wild-earth",
    name: "Wild Earth",
    pack: "Nature",
    tone: "Intimate, observational, awed",
    promise: "Move from one creature's story to planetary stakes with natural-history pacing and warmth.",
    bestFor: "Wildlife, ecosystems, climate, oceans, and science-of-nature explainers.",
    motifs: ["Golden-hour frames", "Scale numbers", "Somber turns"],
    accent: "cyan",
    sample: {
      title: "Honeybees: The Tiny Workforce Feeding the World",
      video: "https://cdn.veedyoo.com/projects/cmrrj042t000d01pokqwts28d/renders/cmrrj7nsv002q01poh2zhu8qn.mp4",
      poster: "https://cdn.veedyoo.com/projects/cmrrj042t000d01pokqwts28d/img/s02-imageUrl.png",
      meta: "NATURE & ENVIRONMENT · PRODUCED FOR $0.67 · UNEDITED",
      duration: "PT2M18S",
      uploadDate: "2026-07-19"
    }
  }
];

export function getTemplate(slug: string) {
  return templates.find((template) => template.slug === slug);
}
