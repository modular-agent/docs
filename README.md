# modular-agent-doc

Documentation site for [Modular Agent](https://github.com/modular-agent), built with [Docusaurus](https://docusaurus.io/).

[日本語](README_ja.md)

## Development

```bash
npm install
npm run start       # dev server at http://localhost:3000
npm run start:ja    # Japanese dev server at http://localhost:3000/ja/
```

`docusaurus start` serves a single locale at a time. `npm run start` serves English only — there are no `/ja/` routes. Use `npm run start:ja` to preview the Japanese pages in the dev server, or build and serve (below) to get both locales at once.

## Build

```bash
npm run build    # static site into build/ (all locales)
npm run serve    # preview the production build, serving / and /ja/
```

## Structure

- `docs/` — Documentation pages (Markdown, English is the source of truth)
- `i18n/ja/` — Japanese translations
  - `docusaurus-plugin-content-docs/current/` — translated copies of `docs/`
  - `docusaurus-theme-classic/` — navbar and footer strings
  - `docusaurus-plugin-content-docs/current.json` — sidebar category labels
  - `code.json` — built-in theme UI strings
- `sidebars.ts` — Sidebar structure
- `docusaurus.config.ts` — Site configuration
- `static/img/` — Logo, screenshots

## Translations

When you update a page under `docs/`, update the matching file under
`i18n/ja/docusaurus-plugin-content-docs/current/` by hand — nothing detects drift.

After adding or renaming navbar items or sidebar categories, regenerate the
translation scaffold (existing translations are preserved):

```bash
npm run write-translations -- --locale ja
```
