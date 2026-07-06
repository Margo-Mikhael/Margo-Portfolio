# Deploying to Cloudflare (Free) — static site

This portfolio is a **fully static Next.js export** (`output: "export"` → `out/`). Cloudflare serves
`out/` as **Workers static assets** — there is **no server/Worker script**, so the 3 MiB Worker size
limit does not apply and it runs comfortably on the **Free plan**.

> Why static? A full Next.js server on Cloudflare (via OpenNext) bundled to ~3.8 MiB gzipped — over the
> 3 MiB Free-plan Worker limit. Since every route in this site is static/SSG, exporting to plain files
> sidesteps the limit entirely (the deployed "Worker" is ~0.4 KiB — just the asset router).

Build command: **`npx next build`** → deploy with **`npx wrangler deploy`** (serves `out/` per `wrangler.jsonc`).

---

## What already changed in the repo

- ✅ `next.config.ts` → `output: "export"` (+ `images.unoptimized`, required for export).
- ✅ Removed OpenNext (`@opennextjs/cloudflare`, `open-next.config.ts`); `wrangler.jsonc` now serves `out/`
  as static assets (`name: "margoportfolio"`, matching the repo).
- ✅ Removed Vercel (`vercel.json`, `@vercel/analytics`, `@vercel/speed-insights`).
- ✅ Added `export const dynamic = "force-static"` to the route handlers / metadata routes that needed it
  (robots, sitemap, manifest, rss, vcard, the `(llms)` text routes, `blog.mdx/[slug]`).
- ✅ Blog OG images are static (`USER.ogImage` / per-post frontmatter) instead of a runtime `next/og` route.
- ✅ Hardened the build-time GitHub-contributions fetch so a third-party API outage can't fail a build.

---

## Part A — Stop Vercel from deploying

1. **Vercel dashboard** → your project → **Settings → Git → Disconnect** (or **Delete Project**).
2. **DNS (do NOT change yet):** in **Cloudflare → your domain → DNS**, note the record pointing to Vercel
   (usually a `CNAME` to `cname.vercel-dns.com` or an `A` to `76.76.21.21`). You'll replace it in Part C.

## Part B — Point Cloudflare Workers Builds at the static export

You already connected the repo. You only need to **change the build command**:

1. Worker (`margoportfolio`) → **Settings → Build**:
   | Field | Value |
   |---|---|
   | **Build command** | `npx next build` |
   | **Deploy command** | `npx wrangler deploy` |
   | Production branch | `main` |
   | Node version (build var) | `NODE_VERSION = 22.20.0` |

   > The old build command was `npx opennextjs-cloudflare build` — change it to **`npx next build`**.
   > The updated `wrangler.jsonc` (committed) serves `out/` as static assets; `wrangler deploy` just uploads
   > those files. There is no Worker bundle to exceed any size limit.
2. **Save**, then **Retry deployment** (or push a commit). The deploy log should end with a small
   `Total Upload` and **succeed** — no more "exceeded the size limit of 3 MiB".

*(Alternative: you can instead create a **Cloudflare Pages** project on the same repo — framework preset
"Next.js (Static HTML Export)", output dir `out`. Same result; Pages is purpose-built for static sites.)*

## Part C — Point your domain at it

1. Worker → **Settings → Domains & Routes → Add → Custom Domain** → enter your hostname(s).
2. Cloudflare creates/updates the proxied DNS record, replacing the old Vercel target. Delete any leftover
   Vercel `CNAME`/`A` record in **DNS**.

## Part D — *(optional)* Cloudflare Web Analytics

**Analytics & Logs → Web Analytics → Add a site** → automatic setup (no code), free.

---

## Local development

- `npm run dev` → dev server at http://localhost:1408 (hot reload).
- `npm run build` → static export to `out/`.
- `npm run preview` → build + `wrangler dev` (serves `out/` locally the way Cloudflare will).
- `npm run deploy` → build + `wrangler deploy` (needs `wrangler login` once).

## Static-export trade-offs (all intentional)

- **Blog social cards** use a static image (`USER.ogImage`) instead of auto-generated per-title cards.
- **Homepage GitHub graph** refreshes on each build/deploy (no runtime ISR). Push, or set up a scheduled
  rebuild, to refresh it.
- **`/blog/:slug.mdx` rewrite** is gone (unsupported in export); the raw MDX is still at `/blog.mdx/<slug>`.

## Troubleshooting

- **"export const dynamic … not configured" at build:** a new route handler needs
  `export const dynamic = "force-static"` (static export can't run request-time handlers).
- **A page needs request-time data** (cookies/headers/live fetch per request): static export can't do that.
  Either make it build-time, or move that one piece to a small separate Worker / Pages Function.
