# ChinaReady

Single static page: WeChat Pay guide for foreigners + Giscus comments (GitHub Discussions).

No database. No Supabase. No login.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Giscus setup

1. Create a **public** GitHub repo (e.g. `your-username/chinaready`)
2. Enable **Discussions** (repo Settings → General → Features)
3. Open [giscus.app](https://giscus.app), select your repo, copy **Repository ID** and **Category ID**
4. Copy `.env.local.example` to `.env.local` and fill in the values

Or edit `src/lib/giscus-config.ts` directly.

Commenters need a GitHub account to post.

## Deploy (Vercel)

Push to GitHub → import on [vercel.com](https://vercel.com) → add the same `NEXT_PUBLIC_GISCUS_*` env vars → deploy.
