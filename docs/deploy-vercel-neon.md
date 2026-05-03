# Deploy Static Website and API

`mokelay-website` is now a static Nuxt site. PostgreSQL, Drizzle migrations, auth, and billing webhooks live in `mokelay-server`.

## 1. Deploy API

Deploy `mokelay-server` to Vercel and bind `api.mokelay.com`.

API production variables:

```env
NODE_ENV=production
DATABASE_URL=your-neon-pooled-connection-string
SESSION_SECRET=use-a-strong-random-string-at-least-32-chars
COOKIE_DOMAIN=.mokelay.com
CORS_ORIGINS=https://www.mokelay.com,https://mokelay.com
STRIPE_WEBHOOK_SECRET=
```

Run database migrations from `mokelay-server` before production signups:

```bash
DATABASE_URL="your-neon-pooled-connection-string" npm run db:migrate
```

## 2. Deploy Website

Import `mokelay-website` into Vercel.

Project settings:

```text
Framework Preset: Nuxt.js
Install Command: npm ci
Build Command: npm run build
Output Directory: .output/public
```

Website production variables:

```env
NODE_ENV=production
NUXT_PUBLIC_SITE_URL=https://www.mokelay.com
NUXT_PUBLIC_PRODUCT_APP_URL=/dashboard
NUXT_PUBLIC_API_BASE_URL=https://api.mokelay.com
```

## 3. Bind Domains

1. Add `api.mokelay.com` to the API Vercel project.
2. Add `www.mokelay.com` to the website Vercel project.
3. Add the DNS records requested by Vercel and wait for HTTPS certificates.

Optional: redirect `mokelay.com` to `www.mokelay.com` in the website project.

## 4. Verify

- Open `https://www.mokelay.com`.
- Visit `/pricing`, `/login`, `/register`, and `/dashboard`.
- Register a user and confirm `api.mokelay.com` sets `mokelay_session`.
- Confirm the user appears in the production PostgreSQL `users` table.
- Check API Vercel logs for database, CORS, or session errors.
