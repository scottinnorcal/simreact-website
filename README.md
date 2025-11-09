# SimReact — District-Specific Synthetic Audience Testing

Production-ready marketing site for SimReact, built with Astro + Tailwind CSS.

Clean, law-firm-style presentation for:
- Campaign and comms teams
- Synthetic audience testing (diagnostic, not polling)
- Fast, accessible, and SEO-optimized

## Stack

- Astro 4 (static output)
- Tailwind CSS
- Inter (body) + Source Serif 4 (headings)
- No backend (forms are wired as placeholders only)

## Getting Started

From the project root:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Deployment

You can deploy the generated static site (`dist/`) to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting

Typical setups:

- Vercel:
  - Framework Preset: Astro
  - Build command: `npm run build`
  - Output directory: `dist`

- Netlify:
  - Build command: `npm run build`
  - Publish directory: `dist`

## Where to customize

### Logo

- Current placeholder:
  - `src/components/NavBar.astro` (inline SR monogram + wordmark)
  - `src/components/Footer.astro`
  - `src/assets/placeholders/logo-simreact.svg`
- Replace with your production logo and adjust sizes as needed.

### Colors & Typography

- Configured in `tailwind.config.mjs`:
  - Primary ink: `#1C2B3A`
  - Accent / CTA: `#4C8DF6`
  - Neutral background: `#F7F9FC`
- Global styles: `src/styles/global.css`

### Forms

- Contact form: `src/pages/contact.astro`
- Currently:
  - Client-side validation via HTML5 `required`.
  - `onsubmit` uses a `mailto:contact@simreact.com` fallback and shows a success message.
- Integration points:
  - Look for `// FORM_HOOK` comments.
  - Replace with your preferred endpoint (e.g. API route, form provider).
  - Example:
    - Swap `onsubmit` handler for a `fetch` POST to your backend or a service like Formspree.

### Calendly / Scheduling

- `src/pages/contact.astro`
  - "Open Calendly (placeholder)" button.
  - Replace with your real Calendly link or embed.
  - Look for `// CALENDLY_HOOK`.

### Analytics

- SEO and head tags are defined in `src/layouts/SiteLayout.astro`.
- Google Analytics / GTAG placeholder:
  - Look for `// ANALYTICS_HOOK` in `SiteLayout.astro`.
  - Insert your real `G-XXXXXXX` key.

## SEO & Metadata

Implemented:

- Per-page:
  - `<title>` and meta description
- Open Graph / Twitter:
  - Uses `/og-default.jpg` (replace with a proper 1200x630 JPG)
- JSON-LD:
  - Organization schema with:
    - name: `SimReact`
    - url: `https://simreact.com`
    - email: `contact@simreact.com`

Update `astro.config.mjs` `site` if deploying to a different domain.

## Accessibility & UX

- WCAG 2.1 AA-conscious:
  - High-contrast palette
  - Focus-visible styles on all interactive elements
  - Semantic landmarks: `<header>`, `<main>`, `<footer>`
- Keyboard-accessible:
  - All links and CTAs are standard HTML elements.
  - Mobile nav toggle is a focusable button.
- Reduced motion:
  - Scroll reveal classes (`.reveal`) degrade gracefully using `prefers-reduced-motion`.

## Performance Guidelines

- Minimal client-side JavaScript:
  - Small scripts for:
    - Mobile nav toggle
    - Optional reveal-on-scroll enhancement
- Tailwind is tree-shaken via Astro build.
- To maintain Lighthouse ≥ 95:
  - Use optimized OG image.
  - Avoid large, unoptimized assets.
  - Keep added scripts minimal and async where applicable.

## Editing the Sample Table

- Component: `src/components/TableMini.astro`
- Reused on:
  - `/` (Home)
  - `/samples`
- To adjust:
  - Pass custom `rows` and `caption` props where used,
    or edit `defaultRows` if you want a new global default.

## QA Checklist

Before production:

- [ ] `npm run build` completes without warnings.
- [ ] Lighthouse (Home, Product, Pricing, Contact) scores ≥ 95 for Performance, Best Practices, and SEO.
- [ ] All navigation items and buttons are reachable and operable via keyboard.
- [ ] Contact form:
  - [ ] Required fields enforced.
  - [ ] On submit, success message appears.
  - [ ] Real form endpoint wired (replacing mailto) if desired.
- [ ] 404 page:
  - [ ] Renders with link back to `/`.
- [ ] Responsive:
  - [ ] 360px (mobile)
  - [ ] 768px (tablet)
  - [ ] 1024px (small desktop)
  - [ ] 1440px (large desktop)
- [ ] Replace:
  - [ ] `/public/og-default.jpg` with final OG image.
  - [ ] `/public/assets/sample.pdf` with anonymized sample.
  - [ ] Placeholder address/socials with real info.
  - [ ] Insert GA/GTAG and Calendly where indicated.
