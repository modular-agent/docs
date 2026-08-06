# modular-agent-doc

Documentation site for [Modular Agent](https://github.com/modular-agent), built with [Astro Starlight](https://starlight.astro.build/).

[日本語](README_ja.md)

## Development

```bash
npm install
npm run dev    # dev server at http://localhost:4321/docs/
```

The dev server serves every locale at once: English at `/docs/` and Japanese at `/docs/ja/`.

## Build

```bash
npm run build      # static site into dist/ (all locales)
npm run preview    # preview the production build
```

Full-text search (Pagefind) only runs against a production build, so check it with
`npm run build && npm run preview` rather than in the dev server.

## Structure

- `src/content/docs/` — Documentation pages (Markdown, English is the source of truth)
  - `ja/` — Japanese translations, mirroring the English tree
- `src/content.config.ts` — Content collection definition
- `src/assets/` — Logo, screenshots (processed by Astro's asset pipeline)
- `src/styles/custom.css` — Theme colors
- `src/components/Footer.astro` — Footer override with the repository link columns
- `public/` — Files copied verbatim to the site root (favicon, `.nojekyll`)
- `astro.config.mjs` — Site configuration, locales, sidebar

## Translations

When you update a page under `src/content/docs/`, update the matching file under
`src/content/docs/ja/` by hand — nothing detects drift.

Starlight ships Japanese translations for its built-in UI strings, so only the page
content and the sidebar category labels in `astro.config.mjs` (`translations: { ja: … }`)
need maintaining.
