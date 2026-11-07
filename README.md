# Ishamya Fernando — Portfolio

A software-engineering portfolio built with React, TypeScript, Vite, Tailwind CSS and Framer Motion. The current design uses a bold dark theme, cobalt accents, a two-column project gallery and a graphite contact/footer section.

The site is a static presentation of independent projects. **Publishing this portfolio does not deploy the applications it showcases.**

## Projects

| Featured order | Project | Presentation |
| --- | --- | --- |
| 1 | Glyder | Full engineering case study |
| 2 | GrabYourTicket | Full engineering case study; development mock payments |
| 3 | WatchNext | Full engineering case study; research prototype |
| 4 | SlowBrew | Full engineering case study; public deployment not verified |
| 5 | Classleaf | Preview; authentication, messaging and payments are mocked |
| 6 | SeeMyMessage | Preview; genuine iOS Simulator capture, no public App Store release claimed |

The expandable archive contains BankVault, BoardKeep, BillBox and Humm. Their descriptions distinguish owner-confirmed functionality from public-release or device-verification status. Featuring a project is not a certification of production readiness, security or performance.

The gallery uses existing authentic WebP screenshots. WatchNext includes TMDB attribution and the non-endorsement disclosure. Original screenshot staging material is private local evidence and is not release content.

## Local development

The GitHub Actions workflow targets **Node 22** and npm. Check the active runtime before installing dependencies:

```sh
node --version  # must be 22.x for release validation
npm --version
npm ci
npm run dev
```

Open the `/portfolio/` path printed by Vite. Run commands from this repository, not its parent directory, which is a separate Git repository.

```sh
./node_modules/.bin/tsc --noEmit
npm run build
npm run preview
```

`npm run build` runs TypeScript project validation and Vite, producing `dist/`. No automated test script is currently configured. A clean locked install, TypeScript check and production build pass under Node 22.23.4 / npm 10.9.9 in an isolated validation copy. The default Mac runtime is unchanged. See the [release-readiness report](docs/release-readiness-report.md) for exact versions and limits.

No application environment secrets, backend, database or paid infrastructure are required. Google Fonts is an existing external font dependency with local font fallbacks. The site uses JavaScript to render the portfolio and provides a basic no-JavaScript contact fallback.

## GitHub Pages architecture

- Repository: [Ishamya/portfolio](https://github.com/Ishamya/portfolio), currently public (confirmed by the final read-only release-preparation check; this task did not change visibility).
- Intended production URL: [ishamya.github.io/portfolio/](https://ishamya.github.io/portfolio/). This is the target, not confirmation of publication.
- Production branch: `main`; Vite base: `/portfolio/`.
- Public asset paths use `import.meta.env.BASE_URL`.
- Navigation uses same-page fragments; project details use dialogs, so no history-router fallback is required.
- Workflow: `.github/workflows/deploy.yml`, triggered by pushes to `main` or manual dispatch.
- CI installs locked dependencies with `npm ci`, builds with Node 22 and uploads only `dist/` to GitHub Pages.
- Deployment uses the `github-pages` environment and GitHub-provided token/OIDC permissions, with no custom deployment secret.

A future approved release must verify Pages eligibility, inspect Pages source and environment rules, and successfully run the workflow. The workflow can deploy on a push to `main`; a release push is therefore consequential. Do not publish until the audit and exact file selection are approved.

## Contact

- Email: [ishamyafernando@gmail.com](mailto:ishamyafernando@gmail.com)
- GitHub: [Ishamya](https://github.com/Ishamya)
- LinkedIn: [Ishamya Fernando](https://www.linkedin.com/in/sithumfernando/)

The footer includes email copying. Project-source links remain omitted where public access has not been verified. No CV download, analytics or contact backend is included.

## Release status

**INCOMPLETE — REMOTE VERIFICATION.** The local candidate passes clean Node 22 validation with the approved narrow Vite 6.4.5 patch and zero reported dependency vulnerabilities. Share-image correction and release-file decisions are resolved. Authenticated Pages/Actions/environment verification remains pending. No staging, commit, push, deployment or visibility/settings change is authorized.

- [Release-readiness report](docs/release-readiness-report.md)
- [Exact proposed release manifest](docs/release-manifest.md)

Keep `qa-evidence/`, `screenshot-staging/`, build outputs, caches and private historical reports out of the public release. Preserve essential files under `public/`; do not use a blanket ignore or blanket staging command.
