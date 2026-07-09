import { site } from "@/data/site";

export function GET() {
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: ${site.baseUrl.replace(/\/$/, "")}/sitemap-index.xml\n`,
    {
      headers: {
        "content-type": "text/plain; charset=utf-8"
      }
    }
  );
}
