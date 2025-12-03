# Repository Guidelines

## Project Structure & Module Organization
- `src/app/[locale]/` holds App Router entries; `layout.tsx` wires `I18nProvider`, `page.tsx` renders the localized shell. Keep locale-specific UI here, and add routes as new folders under this segment.
- `src/components/` contains shared React components (e.g., `Test.tsx` shows server translation usage).
- `src/lib/i18n/` centralizes localization (`server.ts` for cached server translations, `client.ts` + `provider.tsx` for client hydration, `constants.ts` for `LocaleEnum`/`LocaleList`).
- `src/locales/*.json` are the translation dictionaries; keep keys consistent across files.
- `public/` stores static assets; root configs include `biome.json`, `tsconfig.json`, `next.config.ts`.

## Build, Test, and Development Commands
- `pnpm dev` — start the Next.js 16 dev server on port 3000.
- `pnpm build` — production build; ensure it passes before release.
- `pnpm start` — run the built app locally.
- `pnpm lint` — Biome check using Next/React recommended rules.
- `pnpm format` — Biome auto-format with project conventions. Use `pnpm` (lockfile provided) for dependency consistency.

## Coding Style & Naming Conventions
- Biome enforces 2-space indentation, single quotes, and semicolons only when needed (`biome.json`). Run `pnpm format` before commits.
- TypeScript is strict with `@/*` path aliases from `tsconfig.json`; prefer typed props and async/await over callbacks.
- Components in PascalCase, hooks/utilities in camelCase; keep files small and colocate helpers near usage.
- Localization keys should be short, lowercase, and reused across `src/locales/en.json` and `zh.json`.

## Testing Guidelines
- No automated tests are present yet. Add `*.test.ts[x]` alongside source or under a `__tests__` folder when introducing features; align with React Testing Library or Vitest if added.
- Until a harness exists, validate changes with `pnpm lint`, a local `pnpm dev` smoke check, and manual i18n coverage for each locale touched.

## Commit & Pull Request Guidelines
- Recent history uses Conventional Commit prefixes (`feat: init i18n`); follow `<type>(scope?): <summary>` (`feat`, `fix`, `chore`, etc.).
- PRs should include: a concise summary, linked issue (if any), screenshots/GIFs for UI updates, notes on i18n keys added/changed, and confirmation that `pnpm lint`/`pnpm build` ran when relevant.
- Keep PRs focused; prefer small, atomic changes that map cleanly to reviewable commits.

## Localization Tips
- Add new locales by updating `LocaleEnum`/`LocaleList` in `src/lib/i18n/constants.ts` and creating a matching JSON file in `src/locales/`.
- When reading translations server-side, prefer `getServerTranslation(locale)` with the route parameter to avoid hardcoded languages; keep keys identical across locale files to prevent runtime fallbacks.
