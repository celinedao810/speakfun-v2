# AGENTS.md

## Scope

These instructions apply to the entire repository unless a deeper `AGENTS.md` overrides them.

## Project Overview

- App: `Speakfun`
- Framework: Next.js 16 App Router with React 19 and TypeScript
- Styling: Tailwind CSS v4 with `shadcn/ui`
- Data/Auth: Supabase via `@supabase/ssr` and `@supabase/supabase-js`
- Package manager: `pnpm`
- Architecture: two logical apps served from one Next.js project (`/admin` and `/main`)

## Routing Architecture

- Domain-based routing is implemented with Next.js `rewrites` in `next.config.ts`.
- Requests with host matching `ADMIN_HOST` (default `admin.localhost`) are rewritten to `/admin/:path*`.
- All other hosts are rewritten to `/main/:path*`.
- Treat `admin` and `main` as separate app surfaces when making route or layout changes.

## Internationalization

- The project uses `next-intl` via `next-intl/plugin` configured in `next.config.ts` and `src/lib/i18n.ts`.
- Default messages live in `messages/*.json`.
- Organize keys by domain-first namespaces (for example: `common.branding`, `common.buttons`, `app.metadata`, `auth.login`).
- Keep nested sections stable by UI surface: `page`, `form`, `labels`, `placeholders`, `validation`, `success`, `error`.
- Use `camelCase` for key names and keep matching key paths across all locales.
- Keep `withNextIntl` setup in sync when adding translations or new namespaces, and avoid breaking the plugin’s expected exports.

## Repository Layout

- `src/app`: Next.js routes, layouts, and app-level UI
- `src/components`: shared UI components
- `src/modules`: feature-oriented application code
- `src/lib`: framework and shared utility code
- `src/hooks`: reusable React hooks
- `src/emails`: React Email templates and preview code
- `messages`: localization message files
- `public`: static assets
- `supabase`: local Supabase assets and templates

## Working Rules

- Prefer targeted changes that fit the existing architecture.
- Keep App Router patterns intact; do not reintroduce Pages Router conventions.
- Preserve host-based rewrite behavior unless the task explicitly changes routing strategy.
- Reuse existing utilities and components before adding new abstractions.
- Keep TypeScript types explicit when inference is unclear.
- Match existing naming and folder conventions when adding files.
- Do not commit secrets, local env files, Supabase keys, or build output.

## Commands

- Install dependencies: `pnpm install`
- Start app: `pnpm dev`
- Start email preview: `pnpm email`
- Build: `pnpm build`
- Start production server: `pnpm start`
- Lint: `pnpm lint`
- Format: `pnpm format`
- Start local Supabase: `pnpm supabase start`
- Inspect local Supabase status: `pnpm supabase status`

## Database Migrations

- Modify the Supabase database schema only through migration files.
- Create new migration files with `pnpm supabase migration new <migration_name>`.
- Apply migrations with `pnpm supabase migration up` in local environments only.
- Revert local migrations with `pnpm supabase migration down`.
- Production migrations are executed only in CI/CD, not from local machines.

## Code Style

- Follow the existing Prettier and ESLint configuration.
- Prefer server components by default; use client components only when needed.
- Keep UI work consistent with existing Tailwind and `shadcn/ui` patterns.
- Avoid large refactors unless the task explicitly requires them.
- Place feature-specific code in `src/modules` when it does not belong in shared folders.

## Validation

- For code changes, run the most targeted relevant check first.
- Common checks are `pnpm lint`.
- If a task touches Supabase behavior, validate against the local Supabase setup when possible.

## Notes

- `.env.local` is expected for local Supabase or hosted Supabase credentials.
- Ignore generated folders such as `.next` and dependency folders such as `node_modules`.
