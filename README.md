# Handoff marketing site

The public site for **Handoff**, a sample same-day delivery company for local
shops in Toronto. Handoff is a fictional business used to demo product
workflows; this repo is its marketing site.

Built with [Qwik City](https://qwik.dev/) and Tailwind CSS v4. Server-rendered,
no database, no third-party services.

## Pages

- `/` home: hero with a live route sheet, how a delivery day works, what is
  included, coverage zones, pricing teaser, FAQ
- `/merchants/` how Handoff works for shops
- `/couriers/` how driving works, sample route pay, requirements
- `/pricing/` per-stop prices by zone, volume rates, extras
- `/contact/` request form (server action, logs to the console)

## Develop

```sh
npm install
npm run dev        # http://localhost:3100
```

## Build

```sh
npm run build      # type check + client + SSR build
npm run preview    # serve the production build
npm run lint
npm run fmt
```

## Change the copy

All text, prices, zones, and FAQs live in [`src/data/site.ts`](src/data/site.ts).
Pages map over that data. See [AGENTS.md](AGENTS.md) for the structure and rules.
