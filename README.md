# Veedyoo Landing

Astro static landing and SEO site for `veedyoo.com`.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Dublyo

1. Push this repo to GitHub.
2. Open https://app.dublyo.com/dashboard/github and click "New build".
3. Pick this repo and branch. Dublyo detects env keys from `docker-compose.yml` and `.env.example`.
4. Set `PUBLIC_SITE_URL`, `PUBLIC_APP_URL`, and `PUBLIC_SIGNUP_URL`.
5. Pick your server and deploy. Tick Auto-deploy if every push to `main` should redeploy.

The included GitHub Actions workflow publishes to GHCR so Dublyo can copy the image quickly after CI completes.
