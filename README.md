# Ishamya Fernando — Portfolio

A responsive editorial portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Run locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. Deploy that directory to any static host, including Vercel, Netlify, or Cloudflare Pages. No backend or API keys are required.

## Personalize

- `src/data/profile.ts`: name, email address, and social profile URLs. Set `emailIsPlaceholder` to `false` after replacing the email.
- `src/data/projects.ts`: project titles, descriptions, technologies, and concept detail content.
- `src/components/StatsBar.tsx`: illustrative metrics; replace with verified numbers and remove the illustrative label when appropriate.
- `src/components/Archive.tsx`: concept experiment log.
- `src/styles.css`: theme, responsive layout, and CSS artwork.

All projects and statistics are illustrative. Social buttons show configuration guidance until their URLs are added. The copy-email button currently copies a placeholder address.

Features include native modal dialogs with focus restoration and Escape dismissal, animated project artwork with palette switching, a mobile navigation menu, expandable archive rows, clipboard feedback, skip navigation, keyboard focus styles, and reduced-motion support. Google Fonts has local sans-serif and monospace fallbacks.
