import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site } from "@/data/site";

export async function GET(context: { site: URL }) {
  const posts = await getCollection("blog");
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: "Veedyoo Blog",
    description: "Faceless YouTube workflow guides and documentary video planning frameworks.",
    site: context.site ?? new URL(site.baseUrl),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`
    }))
  });
}
