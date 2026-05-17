# Mellow Brew — Cafe Landing Page

## What this project is
- One-page marketing site for a fictional cafe
- Portfolio piece for Fastwork freelance

## Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- shadcn/ui (components/ui/)
- Deploy target: Vercel

## Project structure
- app/page.tsx — main landing page (imports all sections)
- components/sections/ — page sections (Hero, About, Menu, etc.)
- components/ui/ — shadcn components (don't edit manually unless asked)

## Design system
- Palette (define as CSS vars in app/globals.css):
  - --cream: #FAF6F0
  - --brown: #6B4423
  - --terracotta: #C97B5C
  - --text: #2A1F1A
- Tone: minimal, warm, generous whitespace
- Border radius default: rounded-lg
- Typography: Geist Sans (Next.js default)

## Conventions specific to this project
- Component files: PascalCase (HeroSection.tsx)
- Use React Server Components by default; "use client" only when needed
- Section components are self-contained — no shared state across sections

## Don't (project-specific)
- No backend, API routes, or database — this is a static marketing site
- No image domains beyond images.unsplash.com without asking
- Don't add analytics, tracking, or third-party scripts without asking