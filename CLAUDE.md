# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is a single-page personal portfolio site (React + TypeScript + Vite + MUI) for Afkar Fasehudeen, deployed as a static site to GitHub Pages (`mfmafkar.github.io`) via GitHub Actions on every push to `main`.

## Commands

- `npm run dev` — start the Vite dev server with HMR.
- `npm run build` — type-check (`tsc`) then production-build with Vite into `dist/`.
- `npm run postbuild` — runs automatically after `build`; copies `sitemap.xml` and `robots.txt` into `dist/`.
- `npm run lint` — ESLint over `.ts`/`.tsx` files, zero warnings allowed (`--max-warnings 0`).
- `npm run preview` — serve the production build locally.

There is no test suite/runner configured in this repo.

## Architecture

The entire app is one route, one page, composed of section components stacked vertically and navigated via in-page anchor scrolling (no router).

- [src/main.tsx](src/main.tsx) mounts [src/App.tsx](src/App.tsx), which just wraps everything in a single MUI `ThemeProvider` (custom theme defined inline in `App.tsx`) and renders `Home`.
- [src/components/Home.tsx](src/components/Home.tsx) is the composition root **and** the content/data source in one file: it hardcodes all portfolio content as typed arrays (`skills: Skill[]`, `projects: Project[]`, experiences, certifications, blogs) directly in the component body, then passes them as props to the presentational section components (`Skills`, `Projects`, `Blogs`, `ProfessionalExperience`, `Certifications`). It also sets `document.title`/meta description on mount for SEO, and renders `Navbar`, `Profile`, and `ScrollToTop`.
- **To edit portfolio content (skills, projects, work experience, certifications, blog links), edit the data arrays in `Home.tsx`** — the section components themselves are purely presentational and just render whatever props they're given.
- Section components each own an `id` (e.g. `id="skills"`, `id="projects"`) used both for anchor scrolling (`Navbar` calls `scrollIntoView`) and for `Navbar`'s `IntersectionObserver`-based active-link highlighting — when adding/renaming a section, keep the `id` on the section `Box` in `Home.tsx` in sync with the corresponding entry in `NAV_ITEMS` in [src/components/Navbar.tsx](src/components/Navbar.tsx).
- [src/components/Skills.tsx](src/components/Skills.tsx) further buckets the flat `skills` prop into display categories (Programming Languages, Frontend, Backend, Cloud & DevOps, Database, AI & ML, AI Coding Tools) via hardcoded string-array allowlists per category — a skill added to `Home.tsx`'s `skills` array won't appear in a category card unless its title is also added to the matching allowlist here (it will still show up in the "All Technologies" chip list, which just renders every skill).
- Types for each content shape live in [src/types/](src/types/) (`SkillType.ts`, `ProjectType.ts`, `ProfessionalExperienceType.ts`, `CertificationType.ts`, `BlogType.ts`) — each is a single `type X = {...}; export default X;`.
- [src/utils/utils.ts](src/utils/utils.ts) has `getTenure(startDate)`, used to compute a human-readable "Month Year to Present (X years and Y months)" string for experience entries.
- Styling is done entirely via MUI's `sx` prop and the theme object in `App.tsx`; there is no separate CSS/SCSS system.
