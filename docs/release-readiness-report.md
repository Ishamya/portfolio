# Pre-commit release-readiness report

Audit date: 7 November 2026. Scope: approved local GitHub Pages release preparation.

**Final status: INCOMPLETE — REMOTE VERIFICATION.** The local candidate is prepared and passes the checks below. Authenticated GitHub Pages/Actions/environment settings remain unverified. Nothing has been staged or published.


## Rename continuation — current candidate

The GitHub connector confirms `Ishamya/portfolio`, public, default branch main. The original local origin still used the former repository name. After reporting that mismatch and receiving explicit approval, applied only `git remote set-url origin https://github.com/Ishamya/portfolio.git`; both fetch and push now match. No remote setting was changed.

Current target is **https://ishamya.github.io/portfolio/**. Updated Vite base, canonical/OG/social image URLs, robots/sitemap, profile repository URL and current release documentation. Local checkout directory remains portfolio-site; that filesystem name is not a deployed URL. Historical excluded reports and QA evidence retain historical references and unchanged bytes. No obsolete deployed path remains in selected application, metadata or current instructions. The repositoryIsPublic display flag remains unchanged to preserve existing functionality.

This rename continuation changes exactly eight existing working paths: `vite.config.ts`, `index.html`, `public/robots.txt`, `public/sitemap.xml`, `src/data/profile.ts`, `README.md`, `docs/release-readiness-report.md`, `docs/release-manifest.md`. Package declarations and lockfile remain byte-identical to the Vite 6.4.5 candidate; assets/styles/components/project data and all exclusions are preserved. Only local .git/config also changed for the expressly approved remote correction.

Clean Node 22 installation uses the existing lockfile and verified npm cache (89 packages); standalone TypeScript and production build pass. A fresh network dependency audit reports zero at every severity. No automated test suite is configured. All six browser widths, six case/preview branches, mobile menu, keyboard/focus restoration, fragment navigation/history, attribution and social metadata pass under /portfolio/. External project destinations are preserved and inspected as URLs; third-party uptime or transactions were not tested. Every one of the 30 generated static files returns HTTP 200 at /portfolio/ and matches its built bytes, including every image, social card, robots and sitemap. Built text contains no obsolete deployed base; no excluded source/evidence is present in dist. All four archive rows expand and the BankVault lazy image loads. The workflow remains unchanged: Node 22, npm ci, npm run build and upload dist with official Pages actions. A hosted workflow run remains pending publication approval.

## 1. Approved local changes and preservation

- Vite patched narrowly from locked 6.4.4 to exact 6.4.5 in package.json and package-lock.json. Only the root Vite declaration and the Vite entry's version/resolved/integrity changed; all other declarations and package entries are preserved. No unrelated upgrade or npm audit fix.
- .gitignore now guards qa-evidence/, .env* (except placeholder-only .env.example), *.log, coverage/, test-results/, playwright-report/ and .openai/, preserving existing exclusions and required public assets.
- Artwork.tsx and StatsBar.tsx retain every local edit. The proposed candidate uses their current HEAD versions; neither edited working file was overwritten, restored, deleted or staged.
- The tracked .openai/hosting.json remains intact locally and in the real index. It is omitted from the isolated proposed tree. An index-only removal strategy is documented for separate future staging approval; .gitignore alone cannot remove tracked content.
- Three matching local backups are under ignored screenshot-staging/release-prep-backup-2026-11-07/, preserving the original relative paths for .openai/hosting.json and both legacy components. The manifest names each backup. Original screenshot-staging material remains excluded.
- README and both release documents reflect the resolved local decisions. No redesign, unrelated functionality change or unrelated asset edit occurred.

The preceding Vite-patch continuation changed exactly six existing working paths: `.gitignore`, `package.json`, `package-lock.json`, `README.md`, `docs/release-readiness-report.md` and `docs/release-manifest.md`; plus the three ignored backups. Generated ignored validation output was rebuilt. Earlier authorized social-card correction is preserved unchanged.

## 2. Repository and precise proposed tree

Repository: ~/Projects/Portfolio/portfolio-site, branch main, HEAD `7dbf99919b97e8563f11daa6700ccb8857d79473`. Its parent Portfolio is a separate repository and was not changed. Origin is https://github.com/Ishamya/portfolio.git; the final read-only connector check reports public/main, superseding the previous private observation. This task did not change repository visibility. Intended future URL is https://ishamya.github.io/portfolio/, not a claim of publication.

The proposed source tree has **58 files: all 56 INCLUDE working-tree paths plus two KEEP HEAD components**. All **93 original EXCLUDE paths** are absent. Compared with HEAD: **36 added, 19 modified, 1 index-only deletion, 3 retained unchanged**. The complete 151-path decision table and exact current Git inventory are in [release-manifest.md](release-manifest.md). Current expanded status is **21 modified tracked + 44 nonignored untracked files**; 84 original QA paths are now ignored, not deleted. The protected legacy edits are among those 21 modifications but are not proposed commit changes.

HEAD and the real index remain unchanged, with no staged diff. No existing inventoried file was deleted. Original excluded paths, protected working files and their backups retain their starting hashes. The 58-path candidate is a filesystem copy, not an alternate Git index. Git-compatible blob and recursive tree identifiers are computed independently without writing Git objects; the temporary final inventory records source and proposed action for each entry. Documents do not embed their own tree hash because that would be self-referential.

Temporary validation root: `/var/folders/20/kt6h3jj95j3_9j_pzg241ql80000gn/T/portfolio-rename-release-9zdzomji/`; selected source is `candidate/`, final tree inventory `final-tree-inventory.json`, full audit `audit-full.json`, and browser evidence `qa/`. Temporary data is not release content. A reviewed 56-path NUL allowlist is prepared there; it has not been passed to git add.

## 3. Clean Node 22 and dependency validation

The owner approved the official temporary standalone runtime and isolated clean installation. Node **22.23.4**, npm **10.9.9**, darwin-arm64; archive SHA-256 `c9e1dbc748b33ed2d14f42445191ecaf14c56259c7a9a26d0042c49ec2b66428` matches the official Node manifest. The default Mac Node 26/npm 11, Homebrew, shell settings and workspace node_modules were not changed. Runtime resides under `/private/tmp/portfolio-node22/`.

| Check | Result |
| --- | --- |
| Fresh candidate npm ci --offline --no-audit --no-fund | PASS; 89 packages, updated reviewed lockfile |
| TypeScript --noEmit under Node 22 | PASS |
| npm run build (tsc -b then Vite 6.4.5) | PASS; static dist with /portfolio/ base |
| Full locked dependency audit | PASS; zero info/low/moderate/high/critical vulnerabilities |
| Unrelated dependency entries | Unchanged; no broad lockfile refresh retained |
| Applicable automated tests | No test script/configured automated suite; no suite success claimed |
| git diff --check | PASS |
| Protected files/index/HEAD | Preserved |

Restricted-network DNS failures are connectivity failures, not advisory results. The fresh network-enabled full registry audit completed successfully with zero vulnerabilities. The prior moderate Vite development-server advisory [GHSA-8g5g-mxqh-grgj](https://github.com/advisories/GHSA-8g5g-mxqh-grgj) is resolved by 6.4.5; no dependency remediation remains proposed. A zero audit is an advisory result, not proof of security. Pages serves static build output and runs no Vite server. Workspace dependencies remain untouched; release validation and preview use the patched isolated installation.

To reproduce with the approved Node 22 bin directory first in process-local PATH, run npm ci, TypeScript --noEmit, npm run build and npm audit --json in the selected source copy. Do not install into the preserved workspace implicitly. No version manager or system package was installed.

## 4. Browser, asset and security checks

The built-in in-app browser successfully loaded the renamed candidate at http://127.0.0.1:4173/portfolio/. Preview uses the isolated Node 22/Vite 6.4.5 installation on loopback port 4173. No permission workaround or alternate browser was used.

| Width | Candidate result |
| --- | --- |
| 320 | PASS; one column; no horizontal overflow |
| 375 | PASS; one column; no horizontal overflow |
| 390 | PASS; one column; no horizontal overflow |
| 768 | PASS; two columns; no horizontal overflow |
| 1024 | PASS; two columns; no horizontal overflow |
| 1440 | PASS; two columns; no horizontal overflow |

All six featured images and TMDB logo load, the project order remains Glyder/GrabYourTicket/WatchNext/SlowBrew/Classleaf/SeeMyMessage, and attribution remains present. The BankVault image inside its initially collapsed archive is lazy-loaded; an unloaded collapsed image is not a broken reference. Header/hero/gallery/footer screenshots retain the approved dark/cobalt design with no observed clipping/overlap. This is regression verification, not renewed Figma/design approval.

All four original case studies and both new previews open/close. Initial dialog focus is Close project and closing restores the originating card. Escape dismissal was checked. Mobile menu opens; Tab moves to Work; Escape closes and restores the toggle; outside click closes. Desktop Work/Expertise/About/Archive/Contact fragments navigate correctly, destination focus completes on the next animation frame, and back/forward traverses fragment history. No warning/error console entries were returned. Full screenshots for all six widths plus original case, new preview and mobile navigation are in the temporary qa directory; results.json records measurements. No external contact message or project transaction was sent.

The 56 INCLUDE files and the assembled 58-file tree were inspected for sensitive filenames, credential patterns, accidental private assets and missing references. All 23 locally reachable historical blobs were rechecked. No credential candidate was found. Scope excludes remote-only/unreachable history and dependency source auditing; no formal penetration test or guarantee of absence is claimed.

Required media: twelve featured WebPs at the expected 1600×1120/800×560 dimensions, full case/preview/archive derivatives, static TMDB artwork/disclosure, favicon and social image. Literal assetUrl references resolve in the proposed source. All public raster derivatives were previously visually reviewed and checked for EXIF; this continuation preserves their bytes. Screenshot-staging originals with private/unverified customer/student records remain excluded; no such original was copied to the candidate. Historical private/internal-path-bearing reports and all QA files remain outside the tree. No candidate file exceeds 1 MiB.

Social card is genuine PNG, 1200×630, 277,711 bytes, with unchanged decoded RGB hash `b1828bbce31f7c902922a5c4f655336299a5237422cdbac003822c70bedabee9`. Both og:image and twitter:image URLs now use /portfolio/social-card.png. The built copy matches source exactly. No image was changed this continuation.

## 5. GitHub Pages workflow assessment

| Requirement | Static inspection |
| --- | --- |
| Trigger branch | PASS — push to `main`, plus manual dispatch |
| Node version | PASS — setup-node requests `22` |
| Reproducible install | PASS — `npm ci` with committed lockfile proposed |
| Build | PASS — `npm run build` |
| Artifact | PASS — upload-pages-artifact@v4 uploads `dist/` |
| Deploy action | PASS — deploy-pages@v4, after `needs: build` |
| Permissions | PASS — build has contents:read; deploy has pages:write and id-token:write |
| Environment declaration | PASS in YAML — `github-pages`, with deployment URL output |
| Concurrency | PASS — `pages` group, cancel-in-progress:false; deployments serialize |
| Secrets | No custom credential secret required; official GitHub token/OIDC mechanism |
| Actions | Official checkout@v6, setup-node@v6, configure-pages@v5 and Pages actions |
| Remote Pages source / protections / HTTPS | UNVERIFIED |
| Actual hosted candidate run | NOT RUN; workflow is untracked locally and this candidate has not been committed/pushed |

No confirmed workflow behavior defect was found, so no workflow correction was applied or requested. The setup-node v6 `package-manager-cache:false` input was checked against its official action definition. Optional SHA pinning would be a separate hardening proposal, not a condition invented for this audit.

The final read-only GitHub connector check confirms public visibility and default branch main, with administrator permission available to the connector. This differs from the earlier private observation; no visibility mutation was performed by this task. The earlier supported browser settings check was signed out and returned a 404 while the repository was private. That historical result does not verify current settings. The connector exposes repository metadata but no Pages/settings endpoint here; remote Actions policy, Pages source, environment protections and HTTPS remain unverified.

GitHub Free supports public-repository Pages; supported paid plans also support private repositories. The now-public repository meets that visibility requirement; Pages enablement and policies still need verification. No visibility or settings change is authorized. See [GitHub Pages availability](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) and [custom workflow requirements](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages). The local workflow matches the documented artifact/permissions/environment structure; that does not establish remote configuration.

### Exact manual read-only GitHub checks

Use an account with administrator access to [Ishamya/portfolio](https://github.com/Ishamya/portfolio). Inspect and record values only; some controls save immediately, so do not select a different value, press Save, create an environment or dispatch a workflow during verification.

1. **Repository → Settings → Pages → Build and deployment → Source.** Record the current source and any private-plan restriction. The intended future source is **GitHub Actions**. If unavailable or different, record the required later change; do not enable it now. Inspect any displayed HTTPS status; if no site exists yet, mark it pending first publication rather than claiming it enabled.
2. **Settings → Actions → General → Actions permissions.** Confirm Actions is enabled and policy permits the exact official actions in deploy.yml. Record the workflow-permissions setting and any organization override. The YAML already declares its required permissions; do not broadly grant write access or enable pull-request creation just for this workflow.
3. **Settings → Environments → github-pages.** If it exists, record required reviewers, wait timers and deployment branch/tag rules; verify main is allowed. If missing, record that fact; do not create it during this audit.
4. **Settings → General → Danger Zone.** Observe and record current visibility; the final connector check reports public. Do not use Change visibility. Record any Pages eligibility message without changing the account or repository.
5. **Repository → Actions.** Inspect existing workflow runs, if any. This candidate workflow is still untracked locally, so an old successful run cannot validate the new candidate. Do not click Run workflow or push to trigger a run.

Record results in this report. Any needed setting change must be approved separately. These paths follow GitHub's [Pages source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [Actions settings documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository) and [deployment environment documentation](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments).


## 6. Remaining blockers and stop boundary

1. Complete authenticated read-only remote checks above: Pages source, Actions permissions/policy, github-pages environment branch/protection rules, private/public plan eligibility and HTTPS status. Do not change settings. Missing HTTPS before first publication is pending verification, not a claimed defect.
2. Obtain separate staging/commit/publication authorization only after remote findings and this precise candidate are reviewed. A push to main can trigger deployment; no push or workflow dispatch is part of this task. Actual hosted workflow success and live-site verification necessarily remain pending a later approved publication.

Local Node 22 validation, Vite advisory remediation, share image, ignores and file-selection decisions are resolved. No known local blocker remains from these checks. **Overall status remains INCOMPLETE — REMOTE VERIFICATION; not yet ready to deploy.** The manifest documents a safe future selective staging strategy that preserves both local legacy edits and the hosting working copy. No staging, commit, push, deployment, visibility change or GitHub settings mutation occurred.
