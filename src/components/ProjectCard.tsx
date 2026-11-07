import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';
import { featuredImage } from '../data/featuredProjects';
import type { FeaturedProject } from '../data/featuredProjects';
import { Reveal } from './Reveal';

export function ProjectCard({ item, onOpen, index }: { item: FeaturedProject; onOpen: (project: Project) => void; index: number }) {
  const hasCaseStudy = Number(item.project.id) <= 4;
  return <Reveal className="project-slot" delay={(index % 2) * 0.07}>
    <button type="button" className="work-card" onClick={() => onOpen(item.project)} aria-haspopup="dialog" aria-label={`Open ${item.name} ${hasCaseStudy ? 'case study' : 'project preview'}`}>
      <div className={`work-image work-image-${item.slug}`}><img src={featuredImage(item.slug)} srcSet={`${featuredImage(item.slug, 'thumbnails')} 800w, ${featuredImage(item.slug)} 1600w`} sizes="(min-width: 1440px) 624px, (min-width: 701px) 45vw, 92vw" alt={item.alt} width={1600} height={1120} loading="lazy" decoding="async" /></div>
      <div className="work-card-info"><div><span className="project-category">{item.category}</span><h3>{item.name}</h3></div><span className="project-open"><span>{hasCaseStudy ? 'Case study' : 'Project preview'}</span><ArrowUpRight size={21} strokeWidth={1.5} aria-hidden="true" /></span></div>
      <span className="project-index" aria-hidden="true">{String(index + 1).padStart(2, '0')} / 06</span>
    </button>
  </Reveal>;
}
