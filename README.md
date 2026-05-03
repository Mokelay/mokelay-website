# Mokelay Website

Mokelay IDE static website, built with Nuxt 4, Vue 3, and TypeScript. Runtime API calls go to the standalone Mokelay API service.

## Features

- Static marketing home page with product sections, workflow preview, FAQ, and conversion CTAs.
- `/pricing` static pricing page for Free, Pro, Team, and Enterprise.
- `/login`, `/register`, and `/dashboard` client-side account flows.
- Auth and user data are served by `mokelay-server` at `https://api.mokelay.com`.

## Local Development

Run the API first:

```bash
cd ../mokelay-server
npm install
npm run dev
```

Then run the website:

```bash
npm install
cp .env.example .env
npm run dev
```

The website defaults to `NUXT_PUBLIC_API_BASE_URL=http://localhost:8787`.

## Testing

```bash
npm run typecheck
npm run test:unit
npm run test:e2e
```

Playwright starts the static website dev server. For auth E2E, keep `mokelay-server` running on `http://localhost:8787`.

## Deployment

Deploy the website as a static Nuxt output on Vercel:

```bash
npm run deploy:check
```

Production environment variables:

```env
NODE_ENV=production
NUXT_PUBLIC_SITE_URL=https://www.mokelay.com
NUXT_PUBLIC_PRODUCT_APP_URL=/dashboard
NUXT_PUBLIC_API_BASE_URL=https://api.mokelay.com
```

The API service is deployed separately from `mokelay-server` and bound to `api.mokelay.com`.

## Project Structure

- `app/pages`: static pages and client dashboard.
- `app/components`: marketing sections, pricing cards, auth form, and navigation.
- `app/composables`: app settings, API client, and auth session state.
- `app/utils`: small client-safe utilities.
- `tests/unit`: Vitest unit tests.
- `tests/e2e`: Playwright E2E tests.
