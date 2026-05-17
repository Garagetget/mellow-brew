# Mellow Brew — Backlog

Single source of truth for tasks. See Notes at bottom for legend.

## In Progress

_None_

## Todo

_None_

## Done

- [x] **#1** Add mobile navigation menu to Navbar [size: M] [priority: P0] _(2026-05-17)_
  - Hamburger toggle below `md`, drop-down panel under header with the 3 anchor links
  - Closes on link tap, Escape key, or hamburger toggle
  - `aria-expanded` / `aria-controls` wired; panel colors follow `scrolled` state
  - Files: components/sections/Navbar.tsx

- [x] **#2** Wire up the Navbar Order button to `#menu` [size: S] [priority: P0] _(2026-05-17)_
  - `<Button asChild><a href="#menu">Order</a></Button>`
  - Files: components/sections/Navbar.tsx

- [x] **#3** Remove redundant className on Navbar Order button [size: S] [priority: P2] _(2026-05-17)_
  - Inline `bg-brown text-cream hover:bg-[#553620]` removed; default variant covers it
  - Files: components/sections/Navbar.tsx

- [x] **#4** Respect prefers-reduced-motion for smooth scroll [size: S] [priority: P1] _(2026-05-17)_
  - `html { scroll-behavior: smooth }` now wrapped in `@media (prefers-reduced-motion: no-preference)`
  - Files: app/globals.css

- [x] **#5** Make collapsed mobile-nav panel inert [size: S] [priority: P1] _(2026-05-17)_
  - Added `inert={!open}` and `aria-hidden={!open}` on the panel container so collapsed links are out of tab order and ARIA tree
  - Files: components/sections/Navbar.tsx

- [x] **#6** Dismiss mobile menu on backdrop tap [size: S] [priority: P2] _(2026-05-17)_
  - Transparent `<button>` backdrop at `z-40 md:hidden`, rendered only when `open=true`; tap closes menu and returns focus to trigger
  - Used `<button>` instead of `<div>` so the dismiss affordance carries an accessible name; `tabIndex={-1}` keeps it off keyboard tab path (Escape handles keyboard dismiss)
  - Files: components/sections/Navbar.tsx

- [x] **#7** Return focus to hamburger trigger on menu close [size: S] [priority: P2] _(2026-05-17)_
  - Added `triggerRef` on the hamburger button and a `dismiss()` helper that closes + refocuses; called from Escape handler and backdrop
  - Link taps inside the panel still call bare `setOpen(false)` so focus follows the anchor target
  - Files: components/sections/Navbar.tsx

- [x] **#8** Replace dead Unsplash photo in Gallery [size: S] [priority: P1] _(2026-05-17)_
  - `photo-1559496417-e7f25cb247cd` returned 404 from upstream (verified in dev server log)
  - Swapped to `photo-1494314671902-399b18174975` ("Pour-over coffee being brewed")
  - Files: components/sections/GallerySection.tsx
  - Source: dev server runtime error

- [x] **#9** Close mobile menu when Order CTA is tapped [size: S] [priority: P2] _(2026-05-17)_
  - On mobile with menu open, tapping Order used to scroll to `#menu` while drawer stayed visible
  - Added `onClick={() => setOpen(false)}` on the anchor inside the Order button (no refocus — user is navigating)
  - Files: components/sections/Navbar.tsx
  - Source: code review after #7

- [x] **#10** Polish: useCallback for `dismiss`, fix fragment indent [size: S] [priority: P3] _(2026-05-17)_
  - Wrapped `dismiss` in `useCallback([])` and added it to the Escape `useEffect` deps so the file stays clean under stricter react-hooks/exhaustive-deps configs
  - Re-indented `<header>` block after the fragment wrapper to match siblings
  - Files: components/sections/Navbar.tsx
  - Source: code review after #7

## Blocked

_None_

## Notes

- Priority: P0 = ship-blocker / broken UX, P1 = should ship this release, P2 = nice-to-have
- Size: S = under 30 min, M = 30 min to 2 hr, L = 2-6 hr, XL = split it
- IDs are sequential and never reused
- Mark Done only on explicit user confirmation; add completion date in italics when moving
