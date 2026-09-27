# GDC — Gaming Development Club

Cinematic single-page site for the club, built with React + Vite + TypeScript + Tailwind + Framer Motion.

## Local setup

```bash
npm install
npm run dev
```

Open the printed `localhost` URL. Any file you edit hot-reloads instantly.

## Production build

```bash
npm run build
npm run preview
```

`npm run build` outputs static files to `dist/` — that folder is what gets deployed.
`npm run preview` serves that build locally so you can sanity-check it before deploying.

## Deploying to Netlify

**Option A — drag and drop**
1. Run `npm run build`.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the `dist/` folder in.

**Option B — connect the repo (recommended)**
1. Push this project to a GitHub repo.
2. In Netlify: *Add new site → Import an existing project → pick the repo.*
3. Build command: `npm run build`. Publish directory: `dist`.
   (Already set in `netlify.toml`, so Netlify should detect these automatically.)
4. Deploy. Netlify gives you a URL — put that URL in your poster's QR code.

## Files you'll want to replace

| What | Where | Notes |
|---|---|---|
| Club logo / favicon | `public/logo/favicon.svg` | Swap for a real mark; keep it square. |
| Member photos | `public/members/member-01.jpg` … `member-08.jpg` | Any image works — cards fall back gracefully if a file is missing. |
| Member names, roles, bios | `src/data/members.ts` | Add/remove entries freely; the UI generates cards automatically. |
| Event photos | `public/events/*.jpg` | Same fallback behavior as member photos. |
| Event details | `src/data/events.ts` | Add/remove events freely. |
| Social links | `src/components/Footer.tsx` (top of file) and `src/data/members.ts` | Replace the placeholder URLs. |
| "Join GDC" link | `src/sections/ClosingCTA.tsx` | Currently points to a placeholder Discord invite. |

Photos are lazy-loaded (`loading="lazy"`), so add as many as you like without hurting performance.

## Project structure

```
src/
  components/   shared UI: nav, footer, cursor, modal, HUD chrome, magnetic button
  sections/     one file per page section (Hero, About, WhatWeDo, ...)
  data/         members.ts and events.ts — edit content here, not in components
  hooks/        small utility hooks (reduced motion, pointer type)
  App.tsx       assembles the page
  index.css     global styles, grain texture, focus states
```

## Notes

- The custom cursor and heavier hover effects are automatically disabled on touch devices.
- `prefers-reduced-motion` is respected throughout — anyone with that OS setting sees a calmer version of every animation.
- The intro sequence plays once per browser session (`sessionStorage`), so repeat visits during testing skip straight to the hero. Clear site data or open a private window to see it again.
