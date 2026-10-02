# Wildflora

A home for plant lovers — a Next.js marketing site where people can learn plant care, browse a growing plant library, and read the Wildflora journal.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [GSAP](https://gsap.com) for scroll-triggered reveal animations
- [Embla Carousel](https://www.embla-carousel.com) for the journal carousel
- [lucide-react](https://lucide.dev) for icons

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site. The homepage lives at [src/app/page.tsx](src/app/page.tsx) and auto-updates as you edit.

## Scripts

| Command         | Description                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start the dev server with Turbopack |
| `npm run build` | Create a production build           |
| `npm run start` | Serve the production build          |
| `npm run lint`  | Run ESLint                          |

## Project Structure

```
src/
  app/                 App Router pages, layout, and global styles
    data/              Static content (journal entries, plant library)
  components/
    home/              Homepage sections (Banner, About, Journal, Library, Community)
    layout/             Header and Footer
  hooks/               Shared hooks (useGsapReveal for scroll animations)
  lib/                 Shared utilities (cn class-name helper)
  fonts/               Local Satoshi font files
public/
  images/              Static image assets
```

Import paths use the `@/*` alias for `src/*` (see [tsconfig.json](tsconfig.json)).

## Fonts

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load Geist and Gabriela (Google Fonts), plus a locally hosted Satoshi family.

## Deploy

The easiest way to deploy is with the [Vercel Platform](https://vercel.com/new). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.
