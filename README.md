# Speakfun

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui (Radix UI, class-variance-authority, tailwind-merge)
- lucide-react icons
- next-themes
- Supabase (local dev via Supabase CLI)
- Tooling: ESLint, Prettier (with Tailwind plugin), Lefthook

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Start Supabase locally and set env vars:

```bash
pnpm supabase start
pnpm supabase status
```

Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-local-anon-key
```

If you are using a Supabase Cloud project, use the project URL and anon key from the dashboard instead of the local values.

3. Run the dev server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Scripts

- `pnpm dev` - start the dev server
- `pnpm build` - production build
- `pnpm start` - run the production server
- `pnpm lint` - run ESLint (auto-fix enabled)
- `pnpm format` - run Prettier
