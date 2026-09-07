# Handoff marketing site: agent guide

Marketing site for Handoff, a fictional same-day delivery company for local
shops in Toronto. **Static content only: no database, no auth, no external
services.** The contact form is a Qwik City server action that validates and
logs; it does not send email.

## Stack

| Concern         | Choice                                               | Where                                           |
| --------------- | ---------------------------------------------------- | ----------------------------------------------- |
| Framework       | Qwik City 1.x (SSR, Vite 7)                          | `src/routes/`, `src/root.tsx`, `vite.config.ts` |
| Routing         | File-based, trailing slashes                         | `src/routes/<page>/index.tsx`                   |
| Styling         | Tailwind CSS v4 with theme tokens                    | `src/global.css` (`@theme` block)               |
| Fonts           | Bricolage Grotesque (display), Hanken Grotesk (body) | `src/root.tsx`                                  |
| Content         | Plain TS module                                      | `src/data/site.ts`                              |
| Lint and format | ESLint 9, Prettier                                   | `eslint.config.js`                              |

## Commands

```sh
npm install
npm run dev      # dev server on :3100
npm run build    # tsc + client + SSR build
npm run lint
npm run fmt
```

## Rules

- **Content is data.** Headlines, steps, zones, prices, FAQs, and contact
  options live in `src/data/site.ts`. Edit copy there, not in components.
- **Routes are folders.** `src/routes/pricing/index.tsx` is `/pricing/`. Add a
  page by creating a folder with an `index.tsx`, exporting a default component
  and a `head`. Add it to `nav` in `src/data/site.ts`; the header and footer
  both read that list.
- **Use `<Link href>`** from `@builder.io/qwik-city` for internal links, with a
  trailing slash. Plain `<a>` is for mailto and external links only.
- **Design tokens** are Tailwind colors: `paper`, `sheet`, `ink`, `moss`,
  `moss-deep`, `marigold`, `mist`, `smoke`. Type and button classes live in
  `src/global.css` under `@layer components` (`h-display`, `h-section`,
  `h-sub`, `lead`, `btn`, `btn-primary`, `btn-secondary`, `link`, `field`,
  `sheet`). Reuse them rather than inventing sizes.
- **Marigold is an accent**, used as a fill on the brand mark, the current
  stop, and the dark CTA button. Never use it as text on the paper background;
  the contrast fails.
- **Motion:** the route sheet's progress line is the only unprompted animation.
  Keep it that way, and respect `prefers-reduced-motion`.
- Shared pieces live in `src/components/`: `site-header`, `site-footer`,
  `brand-mark`, `route-sheet`, `page-intro`, `cta-band`, `faq`.
- Run `npm run build` before considering a change done. It type checks first.

## Runtime

`gently/apps.yml` declares the single `web` app on port 3100 with `npm run dev`.
The Vite server reads `VITE_ALLOWED_HOSTS` for the sandbox hostname. Qwik's image
dev tools are disabled in `vite.config.ts` because they draw red layout-shift
outlines in dev; the Alt click-to-source overlay is still on.
