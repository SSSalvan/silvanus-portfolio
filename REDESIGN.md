# Silvanus Alvan — Portfolio Redesign ("Ink & Mist")

## Setup
```bash
bun install        # or npm install
bun run dev        # http://localhost:8080
bun run test       # vitest: routing + content rules
bun run build      # production build (Cloudflare Worker target via TanStack Start)
```
Place your résumé at `public/resume.pdf` (the download links point to `/resume.pdf`).

## What changed
- **Stack**: the hand-written HTML/CSS/JS site (7 stylesheets, 2 scripts) is rebuilt as a single TanStack Start + React page. All copy, 27 projects, both publications, experience, email, GitHub and résumé links are preserved; content now lives in one file: `src/content/portfolio.ts`.
- **Design system** (`src/styles.css`): near-black ink, muted jade, rice-paper off-white, one cinnabar seal accent. Cormorant Garamond display, Hanken Grotesk body, JetBrains Mono labels, Ma Shan Zheng calligraphy.
- **Chapters**: hero (ink-wash mountains + dragon, drifting mist, brush-stroke underline), manifesto strip, Selected Works (sticky filter bar, four featured "plates" with category glyphs 識 器 戲 己, then an editorial ledger that unfolds details on hover / always open on touch), Research on a paper scroll with sumi-e dragon, About ledger, Experience, Contact.
- **Motion**: once-per-session blade intro (kept from the original; skip with any key/tap, `?intro` replays, disabled for reduced motion), line-mask headline reveals, blur-in on scroll, hero parallax, chapter rail (壹–伍) tracking the active section.
- **Accessibility**: skip link, semantic landmarks, `aria-pressed` filters, live project count, focus rings, reduced-motion support.
- **Artwork**: two new generated ink paintings in `src/assets/`.

## Verified
- `vitest run`: 5/5 tests pass (route match, 27 projects, ML filter, GitHub link format, contact + publications).
- Playwright at 1440×900 and 390×844: no console/runtime errors, no horizontal overflow, filters work (Games → 4 / 27).
- GitHub links checked publicly: 12 respond 200.

## Known issues
- Project screenshots, demo films (`brag.mp4`), `profile.webp` and `resume.pdf` were not included in the upload, so cards use typographic plates instead of screenshots, the film modal was removed, and `/resume.pdf` 404s until you add the file.
- These repo links return 404 publicly (probably private or renamed): CumGraphics, Housing-Price-Clustering-Analysis, ManagemenApplication_V1, Real-Time-IoT-Data-Pipeline, SDF-GS-Refine, WebsiteAVSI, finance-dashboard, OutfitSync (Android/Web/Backend).
- Publications have no links yet (same as before).
