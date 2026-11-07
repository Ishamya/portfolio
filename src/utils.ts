import { twMerge } from 'tailwind-merge';
export const tailwindMerge = twMerge;

// Public assets must resolve beneath the GitHub Pages project path.
export const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
