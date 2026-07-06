# Deploying to Cloudflare Workers (Free plan) & leaving Vercel

This project runs on **Cloudflare Workers** via [OpenNext](https://opennext.js.org/cloudflare)
(`@opennextjs/cloudflare`). Everything below fits the **Workers Free plan**.

The plan: let **Cloudflare Workers Builds** (Cloudflare's native GitHub integration) build and
deploy on every push to `main` — no GitHub Actions, no API tokens, no Vercel.

---

## What already changed in the repo

These were done in code so the dashboard steps below are all that's left for you:

- ✅ Removed `vercel.json` and the `@vercel/analytics` / `@vercel/speed-insights` packages + code.
- ✅ Hardened the build-time GitHub-contributions fetch so a third-party API outage can't fail a deploy.
- ✅ `wrangler.jsonc`, `open-next.config.ts`, and the `cf-build` / `deploy` npm scripts are ready.
- ✅ `next.config.ts` sets `images.unoptimized: true` (free-plan safe — see [Images](#images)).

Build command used by CI: **`npx opennextjs-cloudflare build`** → deploy with **`npx wrangler deploy`**.

---

## Part A — Stop Vercel from deploying

1. **Vercel dashboard** → your project → **Settings → Git → Disconnect** (or **Settings → Delete Project**).
   Either one stops Vercel from building on every push. Disconnecting Git is enough and reversible.
2. *(Optional)* Remove Vercel's access to the repo: **GitHub → Settings → Integrations → Applications →
   Vercel → Configure →** remove the repo (or revoke). Not required, just tidy.
3. **DNS (do NOT change yet):** in **Cloudflare → your domain → DNS**, note the record currently pointing
   to Vercel — usually a `CNAME` to `cname.vercel-dns.com` or an `A` record to `76.76.21.21`.
   You'll replace it in Part C after the Worker is live.

## Part B — Connect the repo to Cloudflare Workers Builds

> First push the current branch to GitHub so Cloudflare can see the latest code.

1. **Cloudflare dashboard → Workers & Pages → Create → Workers → Import a repository**
   (a.k.a. "Connect to Git").
2. Authorize the **Cloudflare GitHub app** and select this repository.
3. Set the **build configuration**:
   | Field | Value |
   |---|---|
   | Project name | `my-portfolio` (this becomes the `*.workers.dev` subdomain) |
   | Production branch | `main` |
   | Build command | `npx opennextjs-cloudflare build` |
   | Deploy command | `npx wrangler deploy` |
   | Root directory | *(leave as `/`)* |

   > ⚠️ **Critical:** the Build command MUST be `npx opennextjs-cloudflare build`, **not** `npm run build`.
   > Cloudflare's generic Next.js preset defaults to `npm run build` (plain `next build`), which does NOT
   > produce the `.open-next/` output the deploy needs — you'll get
   > `ERROR Could not find compiled Open Next config, did you run the build command?` at the deploy step.
4. Add a **build variable** so CI uses the right Node version:
   - `NODE_VERSION = 22.20.0` (matches `.nvmrc`). The repo's `.npmrc` already sets `legacy-peer-deps=true`,
     so the default `npm install` works.
5. **Save and Deploy.** Cloudflare builds on its **Linux** runners (this avoids the local
   "OpenNext is not fully compatible with Windows" issue) and deploys the Worker.
6. When it finishes, open the `https://my-portfolio.<your-subdomain>.workers.dev` URL and click around.
   - 👀 **In the deploy log, find `Total Upload: … / gzip: …`.** This project's runtime Worker is
     **~0.6 MiB gzipped** (the blog is statically pre-rendered, so Shiki syntax highlighting runs at
     *build* time and never ships to the Worker), so it sits **comfortably under the 3 MiB Free limit**.
     In the unlikely event it ever reports *"exceeded the size limit of 3 MiB"*, see
     [Troubleshooting](#troubleshooting).

## Part C — Point your domain at the Worker

Your domain is already in Cloudflare, so this is quick:

1. **Worker → Settings → Domains & Routes → Add → Custom Domain.** Enter your hostname(s), e.g.
   `yourdomain.com` and `www.yourdomain.com`.
2. Cloudflare **creates/updates the proxied DNS record automatically**, replacing the old Vercel target.
   If an old Vercel `CNAME`/`A` record is still there afterward, delete it in the **DNS** tab.
3. Wait for the certificate (usually < 1 minute), then load your domain. Done.

## Part D — *(optional)* Cloudflare Web Analytics — replaces Vercel Analytics

**Analytics & Logs → Web Analytics → Add a site.** Because your domain is proxied through Cloudflare,
enable the **automatic setup** — no code changes, free, privacy-friendly. (Or copy the beacon snippet if
you prefer manual.)

---

## Ongoing workflow

- **Push to `main` → Cloudflare rebuilds & deploys automatically.** That's the whole loop.
- Enable **preview deployments** for non-production branches in the Workers Builds settings if you want per-PR URLs.
- Local dev is unchanged: `npm run dev`.
- To preview the actual Worker locally (`npm run preview`) you need **Linux or WSL** — OpenNext's bundler
  isn't fully Windows-compatible. CI (Linux) handles real builds, so this only matters for local testing.

## Images

`images.unoptimized: true` is set because the Workers **Free** plan has no built-in Next.js image
optimizer, and Cloudflare **Image Transformations** (`/cdn-cgi/image/…`) is a **paid** feature.
Originals are served directly — fine for a portfolio. To enable optimization later: turn on Image
Transformations (paid) and switch to a custom loader per
<https://opennext.js.org/cloudflare/howtos/image>.

## Troubleshooting

**"Could not find compiled Open Next config, did you run the build command?" (at the deploy step):**
Your **Build command** is `npm run build` (plain `next build`) instead of `npx opennextjs-cloudflare build`,
so `.open-next/` was never produced. Fix: Worker → **Settings → Build → Build command** →
`npx opennextjs-cloudflare build`, then redeploy.

**"Your Worker exceeded the size limit of 3 MiB" (Free plan):** — not expected for this app (runtime
Worker ≈ 0.6 MiB gzipped), but if you add large runtime dependencies later:
- Analyze the bundle: after `npx opennextjs-cloudflare build`, inspect
  `.open-next/server-functions/default/handler.mjs.meta.json` with an esbuild bundle analyzer to see
  what's biggest.
- If you make the blog render **dynamically** (drop `generateStaticParams` / add runtime MDX), Shiki
  would then ship to the Worker — restrict it to the languages you use in `src/components/mdx.tsx` via
  a fine-grained `shiki/core` highlighter.
- Or upgrade to **Workers Paid ($5/mo)** → 10 MiB limit.

**Build fails on an external `fetch`:** the GitHub-contributions call is already wrapped in try/catch.
If you add other build-time fetches, wrap them the same way so a flaky API can't break deploys.

**Persistent ISR/fetch cache (optional):** not needed for this site. If you ever want it, create an R2
bucket and uncomment the R2 binding in `wrangler.jsonc` + `incrementalCache` in `open-next.config.ts`
(R2 has its own free tier).
