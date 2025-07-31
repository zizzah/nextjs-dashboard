# Next.js Dashboard Agent Guide

## Commands
- `npm run dev` / `pnpm dev` - Start development server with turbopack
- `npm run build` / `pnpm build` - Build for production
- `npm run start` / `pnpm start` - Start production server
- `npm run lint` / `pnpm lint` - Run ESLint
- TypeScript check: `npx tsc --noEmit`

## Architecture
- Next.js 15 App Router with TypeScript
- PostgreSQL database with raw SQL queries using `postgres` package
- NextAuth.js v5 for authentication with Credentials provider
- TailwindCSS for styling with custom global styles
- Zod for validation schemas
- Key directories: `app/lib/` (data, types, utils), `app/ui/` (components), `app/dashboard/` (protected routes)

## Code Style
- Use TypeScript with strict mode enabled
- Import paths: `@/*` maps to project root
- Type definitions in `app/lib/definitions.ts`
- Utility functions in `app/lib/utils.ts`
- Named exports preferred over default exports (except for pages/components)
- Use `clsx` for conditional classes
- Database types manually defined (not generated)
