import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { createServer } from "node:http";

const root = join(process.cwd(), "dist");
const host = process.env.HOST || "0.0.0.0";
const port = Number.parseInt(process.env.PORT || "3000", 10);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".xml": "application/xml; charset=utf-8"
};

function resolveFile(urlPath) {
  const safePath = normalize(decodeURIComponent(urlPath)).replace(/^(\.\.(\/|\\|$))+/, "");
  const direct = join(root, safePath);
  const index = join(root, safePath, "index.html");

  if (existsSync(direct) && statSync(direct).isFile()) return direct;
  if (existsSync(index) && statSync(index).isFile()) return index;
  return join(root, "404.html");
}

createServer((request, response) => {
  if (request.url === "/health") {
    response.writeHead(200, { "content-type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ status: "ok" }));
    return;
  }

  const url = new URL(request.url || "/", "http://localhost");
  const file = resolveFile(url.pathname);
  const status = file.endsWith("404.html") && url.pathname !== "/404.html" ? 404 : 200;
  const contentType = types[extname(file)] || "application/octet-stream";

  response.writeHead(status, {
    "content-type": contentType,
    "x-content-type-options": "nosniff",
    "referrer-policy": "strict-origin-when-cross-origin",
    "x-frame-options": "DENY"
  });
  createReadStream(file).pipe(response);
}).listen(port, host, () => {
  console.log(`Veedyoo landing listening on ${host}:${port}`);
});
