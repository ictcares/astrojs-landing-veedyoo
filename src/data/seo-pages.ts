export const seoPages = [
  {
    slug: "faceless-video-maker",
    title: "Faceless Video Maker",
    metaTitle: "Faceless Video Maker for Documentary YouTube Workflows | Veedyoo",
    description:
      "Plan faceless YouTube documentaries with topic angles, continuity, scripts, storyboard scenes, previews, and render-ready structure.",
    h1: "A faceless video maker for creators who plan before they render",
    intro:
      "Veedyoo is for creators who want more than a script box. Start with a topic, shape the angle, build a continuity bible, plan scenes, preview the motion, and move toward export without losing the story.",
    sections: [
      {
        heading: "Turn one idea into a usable production plan",
        body: "A strong faceless video needs structure before assets. Veedyoo keeps the brief, angle, narration, visual motifs, scene plan, and render decisions together so the video feels intentional from the first hook to the last line."
      },
      {
        heading: "Made for long-form consistency",
        body: "Long videos drift when every scene is generated in isolation. Veedyoo uses project-level continuity notes for tone, palette, camera language, motifs, and forbidden drift so each scene can follow the same creative direction."
      }
    ]
  },
  {
    slug: "documentary-video-maker",
    title: "Documentary Video Maker",
    metaTitle: "AI Documentary Video Maker for Faceless Creators | Veedyoo",
    description:
      "Create documentary-style video workflows from a topic brief, with narrative angles, scene planning, storyboard direction, and export-ready structure.",
    h1: "Turn a topic into a documentary plan before you render",
    intro:
      "Veedyoo helps solo creators shape a documentary argument before they render. The workflow is built around thesis, evidence, pacing, visual language, and scene-by-scene continuity.",
    sections: [
      {
        heading: "Narrative first, visuals second",
        body: "Documentary quality comes from the argument. Veedyoo helps you define the thesis, choose the angle, and map the scenes before generating expensive visual assets."
      },
      {
        heading: "Preview the story before export",
        body: "Use the studio preview to check structure and pacing before committing to final render. That keeps paid provider calls focused on scenes that already make sense."
      }
    ]
  },
  {
    slug: "youtube-script-generator",
    title: "YouTube Script Generator",
    metaTitle: "YouTube Script Generator for Faceless Documentary Videos | Veedyoo",
    description:
      "Generate and refine YouTube scripts inside a production workflow with topic angles, scene timing, storyboard prompts, and narration structure.",
    h1: "A YouTube script generator that stays connected to the video plan",
    intro:
      "A script is only useful when it matches the video plan. Veedyoo connects narration, chapter structure, scene visuals, timing, and continuity so the script can become a renderable project.",
    sections: [
      {
        heading: "Write around scenes, not loose paragraphs",
        body: "Each narration block belongs to a scene with duration, visual type, asset direction, and production notes. That makes script review closer to editing a real video plan."
      },
      {
        heading: "Keep the voice consistent",
        body: "Tone, audience, pacing, and project-level style rules stay visible across the workflow, reducing the common drift between outline, script, storyboard, and final preview."
      }
    ]
  },
  {
    slug: "storyboard-generator",
    title: "Storyboard Generator",
    metaTitle: "Storyboard Generator for AI Explainer and Documentary Videos | Veedyoo",
    description:
      "Plan storyboard scenes for faceless explainer videos with visual prompts, scene timing, asset direction, continuity notes, and motion preview.",
    h1: "Storyboard faceless videos before you pay for final renders",
    intro:
      "Veedyoo gives creators a place to plan scene visuals, timing, asset prompts, and continuity before exporting. The goal is simple: see the video logic before paying for high-cost generation.",
    sections: [
      {
        heading: "Scene cards with production intent",
        body: "Storyboard entries can carry narration, visual prompts, layout direction, duration, and continuity notes. That makes each scene easier to review and easier to repair."
      },
      {
        heading: "Preview and then commit",
        body: "The browser preview and final render path are designed around the same video document, so the storyboard is not just planning text. It is the source for the final video workflow."
      }
    ]
  }
] as const;

export type SeoPage = (typeof seoPages)[number];
