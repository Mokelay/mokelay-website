# Deploy to Vercel + Neon

This project is a Nuxt 4 SSR/Nitro application with PostgreSQL-backed auth. The recommended low-maintenance production setup is Vercel for the app and Neon for Postgres.

## 1. Create Neon

1. Create a Neon project.
2. Copy the **pooled** connection string.
3. Keep `sslmode=require` in the URL.

Example:

```env
DATABASE_URL=postgres://USER:PASSWORD@HOST.neon.tech/DBNAME?sslmode=require
```

## 2. Configure Vercel

Import the GitHub repository into Vercel.

Project settings:

```text
Framework Preset: Nuxt.js
Install Command: npm ci
Build Command: npm run build
```

Environment variables:

```env
NODE_ENV=production
NITRO_PRESET=vercel
NUXT_SESSION_PASSWORD=use-a-strong-random-string-at-least-32-chars
DATABASE_URL=your-neon-pooled-connection-string
NUXT_PUBLIC_SITE_URL=https://www.mokelay.com
NUXT_PUBLIC_PRODUCT_APP_URL=/dashboard
STRIPE_WEBHOOK_SECRET=
```

Generate a session password locally:

```bash
openssl rand -base64 48
```

## 3. Run Database Migrations

Run migrations against Neon before production signups:

```bash
DATABASE_URL="your-neon-pooled-connection-string" npm run db:migrate
```

If you prefer using the Vercel environment locally:

```bash
vercel env pull .env.production.local
DATABASE_URL="$(grep '^DATABASE_URL=' .env.production.local | cut -d= -f2-)" npm run db:migrate
```

## 4. Bind the Domain

1. Add `www.mokelay.com` in Vercel project domains.
2. Add the DNS record requested by Vercel, usually a `CNAME` for `www`.
3. Wait for Vercel to issue HTTPS automatically.

Optional: redirect the apex domain `mokelay.com` to `www.mokelay.com` in Vercel.

## 5. Verify

```bash
npm run deploy:check
```

After deployment:

- Open `https://www.mokelay.com`.
- Visit `/pricing`, `/login`, `/register`, and `/dashboard`.
- Register a user and confirm the record appears in Neon `users`.
- Check Vercel Function logs for database or session errors.
