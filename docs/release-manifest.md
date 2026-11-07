# Proposed public release manifest

Audit date: 7 November 2026. **No files staged. This task performed no commit, push, deployment, visibility or settings change.**

The approved local selection is resolved: **56 INCLUDE working-tree paths + 2 KEEP HEAD paths = 58 files in the proposed source tree; all 93 original EXCLUDE paths remain outside it.** Relative paths below belong to the nested portfolio-site repository. This is a source-tree proposal, not the current index. The tracked hosting manifest is still present locally and in the actual index.

Proposed commit versus HEAD `7dbf99919b97e8563f11daa6700ccb8857d79473`: **36 additions, 19 modifications, 1 index-only deletion; 3 retained unchanged files** (tsconfig and the two legacy components). No unresolved REVIEW items. All entries have regular-file Git mode 100644. Node 22.23.4 / npm 10.9.9 clean locked install, TypeScript and Vite 6.4.5 build pass; full dependency audit reports zero vulnerabilities.

Final read-only GitHub metadata reports public/main, superseding the earlier private observation; this task did not change visibility. Pages settings still require authenticated verification.

The current bold dark/cobalt/graphite design and application behavior are preserved. No gallery redesign or mobile-app addition was made.

Rename continuation: target **https://ishamya.github.io/portfolio/**; approved origin is **https://github.com/Ishamya/portfolio.git**. No selected file paths changed: 58 source files and the same 93 exclusions. Current checkout directory name is retained. All selected deployed-path references were updated; excluded historical records remain intact. Clean Node 22 / Vite 6.4.5 validation and fresh zero-vulnerability audit passed again.

## INCLUDE — current working-tree bytes

| Path | Current local state | Proposed commit action | Reason / source |
| --- | --- | --- | --- |
| `.github/workflows/deploy.yml` | untracked/new | ADD | Node 22 locked-install/build and GitHub Pages artifact/deployment workflow. |
| `.gitignore` | tracked, modified locally | MODIFY | Approved QA, .env*, log, coverage, test-output and .openai guards applied; existing public assets remain visible. |
| `README.md` | tracked, modified locally | MODIFY | Current public overview, project disclosures, development and release instructions. |
| `docs/release-manifest.md` | untracked/new | ADD | Exact public-source selection proposal; does not authorize staging. |
| `docs/release-readiness-report.md` | untracked/new | ADD | Sanitized audit results, verification gaps and approval boundaries. |
| `index.html` | tracked, modified locally | MODIFY | Application entry point, public metadata, share-image references and font loading. |
| `package-lock.json` | tracked, modified locally | MODIFY | Only root Vite declaration and Vite package version, resolved URL and integrity changed; all other package entries preserved. |
| `package.json` | tracked, modified locally | MODIFY | Only Vite pinned to 6.4.5; all other declarations preserved. |
| `public/favicon.svg` | untracked/new | ADD | Browser favicon referenced by the entry HTML. |
| `public/images/featured/featured/classleaf.webp` | untracked/new | ADD | Authentic 1600×1120 featured project screenshot; used by full-size gallery/preview sources. |
| `public/images/featured/featured/glyder.webp` | untracked/new | ADD | Authentic 1600×1120 featured project screenshot; used by full-size gallery/preview sources. |
| `public/images/featured/featured/grabyourticket.webp` | untracked/new | ADD | Authentic 1600×1120 featured project screenshot; used by full-size gallery/preview sources. |
| `public/images/featured/featured/seemymessage.webp` | untracked/new | ADD | Authentic 1600×1120 featured project screenshot; used by full-size gallery/preview sources. |
| `public/images/featured/featured/slowbrew.webp` | untracked/new | ADD | Authentic 1600×1120 featured project screenshot; used by full-size gallery/preview sources. |
| `public/images/featured/featured/watchnext.webp` | untracked/new | ADD | Authentic 1600×1120 featured project screenshot; used by full-size gallery/preview sources. |
| `public/images/featured/thumbnails/classleaf.webp` | untracked/new | ADD | Authentic 800×560 srcset derivative; required for responsive gallery image selection. |
| `public/images/featured/thumbnails/glyder.webp` | untracked/new | ADD | Authentic 800×560 srcset derivative; required for responsive gallery image selection. |
| `public/images/featured/thumbnails/grabyourticket.webp` | untracked/new | ADD | Authentic 800×560 srcset derivative; required for responsive gallery image selection. |
| `public/images/featured/thumbnails/seemymessage.webp` | untracked/new | ADD | Authentic 800×560 srcset derivative; required for responsive gallery image selection. |
| `public/images/featured/thumbnails/slowbrew.webp` | untracked/new | ADD | Authentic 800×560 srcset derivative; required for responsive gallery image selection. |
| `public/images/featured/thumbnails/watchnext.webp` | untracked/new | ADD | Authentic 800×560 srcset derivative; required for responsive gallery image selection. |
| `public/images/featured/tmdb-logo.svg` | untracked/new | ADD | Required TMDB attribution logo beside the API disclaimer. |
| `public/images/projects/bankvault-account-demo.webp` | untracked/new | ADD | Reviewed derivative referenced by original case-study or retained project/archive data; preserves media functionality. |
| `public/images/projects/classleaf-introduction.webp` | untracked/new | ADD | Reviewed derivative referenced by original case-study or retained project/archive data; preserves media functionality. |
| `public/images/projects/glyder-catalogue.webp` | untracked/new | ADD | Reviewed derivative referenced by original case-study or retained project/archive data; preserves media functionality. |
| `public/images/projects/glyder-detail.webp` | untracked/new | ADD | Reviewed derivative referenced by original case-study or retained project/archive data; preserves media functionality. |
| `public/images/projects/glyder-home.webp` | untracked/new | ADD | Reviewed derivative referenced by original case-study or retained project/archive data; preserves media functionality. |
| `public/images/projects/slowbrew-home.webp` | untracked/new | ADD | Reviewed derivative referenced by original case-study or retained project/archive data; preserves media functionality. |
| `public/images/projects/slowbrew-menu.webp` | untracked/new | ADD | Reviewed derivative referenced by original case-study or retained project/archive data; preserves media functionality. |
| `public/images/projects/watchnext-detail.webp` | untracked/new | ADD | Reviewed derivative referenced by original case-study or retained project/archive data; preserves media functionality. |
| `public/images/projects/watchnext-home.webp` | untracked/new | ADD | Reviewed derivative referenced by original case-study or retained project/archive data; preserves media functionality. |
| `public/images/projects/watchnext-results.webp` | untracked/new | ADD | Reviewed derivative referenced by original case-study or retained project/archive data; preserves media functionality. |
| `public/robots.txt` | untracked/new | ADD | Project-level crawler guidance and intended sitemap reference. |
| `public/sitemap.xml` | untracked/new | ADD | Single-page sitemap for the intended public URL. |
| `public/social-card.png` | untracked/new | ADD | Required social metadata image, now genuine 1200×630 PNG with identical decoded pixels and updated /portfolio/ social URLs; verified in the Node 22 build. |
| `src/components/About.tsx` | untracked/new | ADD | Current personal/education section. |
| `src/components/Archive.tsx` | tracked, modified locally | MODIFY | Four archive disclosure rows, retaining underlying featured-preview data. |
| `src/components/Capabilities.tsx` | tracked, modified locally | MODIFY | Evidence-grounded expertise section. |
| `src/components/Footer.tsx` | tracked, modified locally | MODIFY | Approved contact/social destinations, email-copy feedback and footer. |
| `src/components/Header.tsx` | tracked, modified locally | MODIFY | Sticky navigation and accessible mobile disclosure/focus handling. |
| `src/components/Hero.tsx` | tracked, modified locally | MODIFY | Approved Building real products hero and navigation actions. |
| `src/components/MotionPreferences.tsx` | untracked/new | ADD | Framer Motion configuration and reduced-motion context. |
| `src/components/ProjectCard.tsx` | tracked, modified locally | MODIFY | Featured image card rendering and project-detail activation. |
| `src/components/ProjectGrid.tsx` | tracked, modified locally | MODIFY | Six-project order, attribution, original case studies and two previews. |
| `src/components/Reveal.tsx` | tracked, modified locally | MODIFY | Restrained shared entrance behavior without initially hiding content. |
| `src/data/caseStudies.ts` | untracked/new | ADD | Four technical case studies, verification limits and media references. |
| `src/data/featuredProjects.ts` | untracked/new | ADD | Six featured project mappings, image paths and image descriptions. |
| `src/data/profile.ts` | tracked, modified locally | MODIFY | Owner-approved public contact destinations and source-link visibility guard. |
| `src/data/projects.ts` | tracked, modified locally | MODIFY | Underlying project/archive data, honest statuses and retained preview functionality. |
| `src/homepage.css` | untracked/new | ADD | Current approved homepage presentation, responsive grid and cobalt/graphite refinements. |
| `src/main.tsx` | tracked, modified locally | MODIFY | Current application composition, stylesheet imports and React entry point. |
| `src/styles.css` | tracked, modified locally | MODIFY | Shared dark design, case-study presentation and accessibility styling. |
| `src/utils.ts` | tracked, modified locally | MODIFY | BASE_URL-aware public asset URLs and shared utility export. |
| `src/vite-env.d.ts` | untracked/new | ADD | Vite import.meta.env typing required by the application sources. |
| `tsconfig.json` | tracked, unchanged | UNCHANGED | Strict TypeScript build configuration; unchanged. |
| `vite.config.ts` | tracked, modified locally | MODIFY | React/Tailwind build integration and required /portfolio/ base. |

## KEEP HEAD — preserve edited local working files

| Path | Current local state | Proposed commit action | Reason / source |
| --- | --- | --- | --- |
| `src/components/Artwork.tsx` | tracked, modified locally | UNCHANGED | Use current HEAD bytes in proposed tree; preserve local edited working copy and backup. Do not stage or restore this path. |
| `src/components/StatsBar.tsx` | tracked, modified locally | UNCHANGED | Use current HEAD bytes in proposed tree; preserve local edited working copy and backup. Do not stage or restore this path. |

## EXCLUDE — preserve locally, omit from proposed tree

| Path | Current local state | Proposed commit action | Reason / source |
| --- | --- | --- | --- |
| `.openai/hosting.json` | tracked, unchanged | REMOVE FROM INDEX ONLY | Omit from proposed tree via future index-only removal. Working copy and ignored backup preserved; still tracked today. |
| `docs/complete-redesign-2026-11-07.md` | untracked/new | OMIT; never stage | Historical implementation/QA report; superseded, potentially internal-path-bearing, and unnecessary for the initial public source release. Preserve locally. |
| `docs/content-refinement.md` | untracked/new | OMIT; never stage | Historical implementation/QA report; superseded, potentially internal-path-bearing, and unnecessary for the initial public source release. Preserve locally. |
| `docs/development-phase1.md` | untracked/new | OMIT; never stage | Historical implementation/QA report; superseded, potentially internal-path-bearing, and unnecessary for the initial public source release. Preserve locally. |
| `docs/phase4-polish.md` | untracked/new | OMIT; never stage | Historical implementation/QA report; superseded, potentially internal-path-bearing, and unnecessary for the initial public source release. Preserve locally. |
| `docs/premium-redesign.md` | untracked/new | OMIT; never stage | Historical implementation/QA report; superseded, potentially internal-path-bearing, and unnecessary for the initial public source release. Preserve locally. |
| `docs/screenshot-review.md` | untracked/new | OMIT; never stage | Historical implementation/QA report; superseded, potentially internal-path-bearing, and unnecessary for the initial public source release. Preserve locally. |
| `docs/verification.md` | untracked/new | OMIT; never stage | Historical implementation/QA report; superseded, potentially internal-path-bearing, and unnecessary for the initial public source release. Preserve locally. |
| `public/images/projects/slowbrew-home.png` | untracked/new | OMIT; never stage | Untracked, unreferenced original PNG; equivalent required WebP remains included. No deletion made. |
| `qa-evidence/complete-redesign-2026-11-07/case-results.json` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/case-study-glyder-1440.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/changed-files.json` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/console-results.json` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/desktop-first-pass.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/desktop-homepage-1440.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/desktop-preview.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/featured-gallery-1440.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/final-lower-desktop-homepage-1440.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/final-lower-mobile-homepage-390.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/final-lower-viewport-1024.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/final-lower-viewport-1920.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/final-lower-viewport-320.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/final-lower-viewport-375.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/final-lower-viewport-768.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/final-top-desktop-homepage-1440.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/final-top-mobile-homepage-390.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/final-top-viewport-1024.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/final-top-viewport-1920.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/final-top-viewport-320.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/final-top-viewport-375.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/final-top-viewport-768.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/gallery-bounds.json` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/git-status.txt` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/grabyourticket-verified-screenshot.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/interaction-results.json` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/media-Glyder.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/media-GrabYourTicket.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/media-SlowBrew.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/media-WatchNext.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/media-results.json` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/mobile-case-study-glyder-390.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/mobile-first-pass.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/mobile-homepage-390.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/mobile-navigation-390.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/narrow-dialog-results.json` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/preview-classleaf-1440.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/review-1024-lower.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/review-1024-top.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/review-320-lower.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/review-320-top.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/review-375-lower.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/review-375-top.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/review-768-lower.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/review-768-top.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/viewport-1024.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/viewport-1920.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/viewport-320.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/viewport-375.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/viewport-768.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/complete-redesign-2026-11-07/viewport-results.json` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/01-desktop-homepage-1440.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/02-desktop-gallery-1440.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/03-mobile-homepage-390.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/04-mobile-navigation-open-390.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/05-original-case-study-glyder-1440.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/06-new-preview-classleaf-1440.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/REPORT.md` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/case-Classleaf.txt` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/case-GrabYourTicket.txt` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/case-SeeMyMessage.txt` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/case-SlowBrew.txt` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/case-WatchNext.txt` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/case-results.json` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/comparison-desktop.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/comparison-mobile.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/figma-desktop-5-2.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/figma-mobile-5-74.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/grabyourticket-stale-evidence-copy.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/inspect-1024-top.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/inspect-320-top.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/inspect-375-top.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/inspect-768-top.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/mobile-case-results.json` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/mobile-glyder.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/mobile-seemymessage.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/navigation-results.json` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/viewport-1024.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/viewport-1440.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/viewport-320.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/viewport-375.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/viewport-390.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/viewport-768.png` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |
| `qa-evidence/phase1-2026-11-07/viewport-results.json` | ignored, untracked | OMIT; never stage | Local browser evidence/report/export; not public application source or a required deployed asset. |

## Ignored material and local backups

All screenshot-staging originals, node_modules, dist, .sites-runtime, TypeScript build state and OS metadata remain excluded. The newly approved ignore rules cover qa-evidence/, .env*, *.log, coverage/, test-results/, playwright-report/ and .openai/. A placeholder-only .env.example is excepted but absent; any future example needs review. Required public images, TMDB logo and social card are not ignored.

Three new ignored backups are at `screenshot-staging/release-prep-backup-2026-11-07/.openai/hosting.json`, `screenshot-staging/release-prep-backup-2026-11-07/src/components/Artwork.tsx` and `screenshot-staging/release-prep-backup-2026-11-07/src/components/StatsBar.tsx`. Each matches its preserved working copy. These backups supplement the original 187 staging files and are outside the original 151-path classification. No working original was removed. Ignoring an already tracked file does not remove it from Git.

## Required references and media

All 56 INCLUDE paths were rechecked in an isolated candidate with the two HEAD components. Twelve featured WebPs (six 1600×1120 and six 800×560), full case-study/preview/archive derivatives, static TMDB SVG/disclosure and the genuine 1200×630 PNG social card remain included. All literal assetUrl references resolve; required public files survive the ignore rules. The unused SlowBrew PNG is excluded; its WebP is retained. Social metadata URLs now use /portfolio/; image bytes and intended appearance are unchanged.

## Exact current working-tree inventory

The lists below are the expanded Git inventory after the approved ignore changes: **21 modified tracked files, 44 nonignored untracked files**. The 84 original QA paths are now ignored and remain individually listed in EXCLUDE above. No deletion or staged change exists.

Modified tracked paths:

- `.gitignore`
- `README.md`
- `index.html`
- `package-lock.json`
- `package.json`
- `src/components/Archive.tsx`
- `src/components/Artwork.tsx`
- `src/components/Capabilities.tsx`
- `src/components/Footer.tsx`
- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `src/components/ProjectCard.tsx`
- `src/components/ProjectGrid.tsx`
- `src/components/Reveal.tsx`
- `src/components/StatsBar.tsx`
- `src/data/profile.ts`
- `src/data/projects.ts`
- `src/main.tsx`
- `src/styles.css`
- `src/utils.ts`
- `vite.config.ts`

Nonignored untracked paths:

- `.github/workflows/deploy.yml`
- `docs/complete-redesign-2026-11-07.md`
- `docs/content-refinement.md`
- `docs/development-phase1.md`
- `docs/phase4-polish.md`
- `docs/premium-redesign.md`
- `docs/release-manifest.md`
- `docs/release-readiness-report.md`
- `docs/screenshot-review.md`
- `docs/verification.md`
- `public/favicon.svg`
- `public/images/featured/featured/classleaf.webp`
- `public/images/featured/featured/glyder.webp`
- `public/images/featured/featured/grabyourticket.webp`
- `public/images/featured/featured/seemymessage.webp`
- `public/images/featured/featured/slowbrew.webp`
- `public/images/featured/featured/watchnext.webp`
- `public/images/featured/thumbnails/classleaf.webp`
- `public/images/featured/thumbnails/glyder.webp`
- `public/images/featured/thumbnails/grabyourticket.webp`
- `public/images/featured/thumbnails/seemymessage.webp`
- `public/images/featured/thumbnails/slowbrew.webp`
- `public/images/featured/thumbnails/watchnext.webp`
- `public/images/featured/tmdb-logo.svg`
- `public/images/projects/bankvault-account-demo.webp`
- `public/images/projects/classleaf-introduction.webp`
- `public/images/projects/glyder-catalogue.webp`
- `public/images/projects/glyder-detail.webp`
- `public/images/projects/glyder-home.webp`
- `public/images/projects/slowbrew-home.png`
- `public/images/projects/slowbrew-home.webp`
- `public/images/projects/slowbrew-menu.webp`
- `public/images/projects/watchnext-detail.webp`
- `public/images/projects/watchnext-home.webp`
- `public/images/projects/watchnext-results.webp`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/social-card.png`
- `src/components/About.tsx`
- `src/components/MotionPreferences.tsx`
- `src/data/caseStudies.ts`
- `src/data/featuredProjects.ts`
- `src/homepage.css`
- `src/vite-env.d.ts`

## Safe selective staging strategy — documentation only, not executed

1. Obtain separate staging authorization; confirm HEAD is still the recorded commit and the index is empty. Recheck hashes of the protected local files, backup copies and all approved candidate bytes. Rebuild the explicit 56-path NUL-delimited allowlist from the INCLUDE table; do not derive it from all untracked files.
2. Only after authorization, `git add --pathspec-from-file=<reviewed-include-paths.nul> --pathspec-file-nul` selects the 56 INCLUDE paths. Unchanged tsconfig produces no diff. Do not add Artwork.tsx or StatsBar.tsx: the existing index already retains their HEAD blobs; never restore or overwrite their working copies.
3. Only after authorization, `git update-index --force-remove -- .openai/hosting.json` prepares its index-only deletion. This preserves the working file and ignored backup; do not use an ordinary working-tree deletion. The .openai ignore rule prevents accidental later addition but is not the tracked-removal mechanism.
4. Review `git diff --cached --name-status`, `git diff --cached --check` and the complete resulting index list. Require exactly 36 ADD, 19 MODIFY and 1 DELETE; verify the two protected index blobs equal HEAD, the hosting manifest is absent, and every original EXCLUDE path is absent. Compare resulting source blobs to the reviewed candidate. Recheck protected working-file hashes afterward.
5. Stop before committing or publishing. No blanket git add, restore, reset, clean or working-tree removal is part of this strategy. Staging would still need separate explicit approval.

The prepared allowlist and independently computed Git-compatible blob/tree inventory live only in the temporary validation folder identified in the readiness report. No alternate index, Git object write or staging command was used to prepare the candidate. The actual index stays unchanged.
