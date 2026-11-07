import { projects, archiveProjects } from './projects';
import type { Project } from './projects';
import { assetUrl } from '../utils';

export type FeaturedProject = {
  project: Project;
  name: string;
  category: string;
  slug: string;
  alt: string;
};

// These two previews reuse existing, owner-reviewed archive content.
// They deliberately do not create full engineering case studies ahead of Phase 4.
function archivePreview(title: string, id: string): Project {
  const entry = archiveProjects.find(project => project.title === title)!;
  return { ...entry, id, art: 'mono', detail: entry.description, purpose: entry.description,
    problem: '', features: [], engineering: '' };
}

export const featuredProjects: FeaturedProject[] = [
  { project: projects[0], name: 'Glyder', category: 'E-commerce', slug: 'glyder', alt: 'Glyder women’s shoe catalogue with genuine product photography and shopping filters' },
  { project: projects[1], name: 'GrabYourTicket', category: 'Ticketing platform', slug: 'grabyourticket', alt: 'GrabYourTicket event discovery interface with explicitly labeled demo events' },
  { project: projects[2], name: 'WatchNext', category: 'Movie recommendations', slug: 'watchnext', alt: 'WatchNext Toy Story recommendations with corresponding TMDB movie posters and attribution' },
  { project: projects[3], name: 'SlowBrew', category: 'Café platform', slug: 'slowbrew', alt: 'SlowBrew café storefront with coffee photography and menu navigation' },
  { project: archivePreview('CLASSLEAF', '05'), name: 'Classleaf', category: 'Learning management', slug: 'classleaf', alt: 'Classleaf teacher dashboard with synthetic demo students, fees and attendance' },
  { project: archivePreview('SEEMYMESSAGE', '06'), name: 'SeeMyMessage', category: 'iOS LED display', slug: 'seemymessage', alt: 'Genuine SeeMyMessage iOS Simulator display showing HELLO in red LED dots' },
];

export function featuredImage(slug: string, size: 'featured' | 'thumbnails' = 'featured') {
  return assetUrl(`images/featured/${size}/${slug}.webp`);
}
