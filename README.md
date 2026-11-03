# Bunu Tech

Marketing site for **Bunu Tech Ltd**, a building and civil engineering contractor in Nigeria.
The design is a responsive recreation of the Capdal construction site, rebuilt with Astro and
Tailwind CSS and rewritten for the Bunu Tech brand.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Landing page: hero carousel, about, services, featured projects, contact call to action |
| `/about` | Company profile, vision, mission, values, HSE policy, awards, board, differentiators, history |
| `/contact` | Contact details, enquiry form and office map |

## Stack

- **Astro 5** — static site generation, zero framework runtime
- **Tailwind CSS 4** via `@tailwindcss/vite`
- **TypeScript** with Astro's strict config
- **@fontsource** — self-hosted Lato and Julius Sans One (no third-party font requests)
- **@astrojs/sitemap** — generated sitemap
- **Unsplash CDN** — responsive construction imagery
- **placehold.co** — board portrait placeholders

## Commands

```sh
npm install        # install dependencies
npm run dev        # dev server at http://localhost:4321
npm run build      # production build to ./dist
npm run preview    # preview the production build
```

## Project structure

```text
src/
├── components/
│   ├── CornerMarks.astro   # red corner accents used on image blocks
│   ├── Footer.astro
│   ├── Header.astro        # desktop nav, dropdowns, mobile menu
│   ├── Hero.astro          # accessible carousel with pause control
│   ├── Icon.astro          # inline SVG icon set
│   ├── Logo.astro
│   └── PageHero.astro      # inner-page banner + breadcrumb
├── data/site.ts            # site details, navigation, projects, people, copy
├── layouts/Layout.astro    # document head, SEO meta, JSON-LD, header/footer
├── pages/
│   ├── index.astro
│   ├── about.astro
│   └── contact.astro
└── styles/global.css       # Tailwind theme tokens and shared component classes
```

## Editing content

- Company details, navigation, services, projects, board members, awards and history live in
  `src/data/site.ts`.
- Page-specific copy lives in the page files under `src/pages/`.
- Brand colours and fonts are defined once in the `@theme` block in `src/styles/global.css`.
  The primary red is `#b80c26`.

## SEO

- Unique `<title>`, meta description, canonical URL, Open Graph and Twitter cards per page.
- `GeneralContractor`, `AboutPage`, `ContactPage`, `WebSite` and `BreadcrumbList` structured data.
- Semantic headings (one `h1` per page), descriptive image `alt` text and internal linking.
- `sitemap-index.xml` generated at build time and referenced from `public/robots.txt`.
- Update `site` in `astro.config.mjs` and `site.url` in `src/data/site.ts` before deploying to a
  different domain.

## Images and performance

- Full image URLs are stored directly in the data files and components, requested at the width each
  layout needs.
- The hero image is preloaded; every other image is lazy-loaded and decodes asynchronously.
- Explicit dimensions / aspect ratios avoid layout shift.
- Fonts are self-hosted WOFF2 files and limited to the weights in use.
- JavaScript is limited to the mobile menu, carousel and contact-form validation.

## Content placeholders

The company profile is modelled on the reference site, so some details are placeholders and should be
replaced with Bunu Tech's real information before launch:

- RC number in the footer (`src/components/Footer.astro`)
- Head-office address (`src/data/site.ts`)
- LinkedIn and Instagram URLs (`src/data/site.ts`)
- Board member names and portraits (`src/data/site.ts` / `src/pages/about.astro`)

## Contact form

The contact form is front-end only: it validates fields and shows a success state, but it does not
send email. Before launch, connect it to your provider of choice (Formspree, Netlify Forms, Resend,
your own API) by updating the `action`/`method` on the `<form>` in `src/pages/contact.astro` and
removing the `preventDefault()` in the form script once the endpoint is live.
