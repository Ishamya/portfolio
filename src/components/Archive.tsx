import { Plus } from 'lucide-react';
import { archiveProjects } from '../data/projects';
import { Reveal } from './Reveal';

const featuredArchiveTitles = new Set(['CLASSLEAF', 'SEEMYMESSAGE']);
const displayNames: Record<string, string> = { BANKVAULT: 'BankVault', BOARDKEEP: 'BoardKeep', BILLBOX: 'BillBox', HUMM: 'Humm' };
export function Archive() {
  const archived = archiveProjects.filter(project => !featuredArchiveTitles.has(project.title));
  return <section id="archive" className="archive-section section-space" aria-labelledby="archive-title"><div className="page-container">
    <Reveal><div className="section-heading"><div><p className="eyebrow">04 / The archive</p><h2 id="archive-title">More to <span className="serif">explore.</span></h2></div><p>Smaller tools. Other explorations.<br />The same curiosity.</p></div>
      <div className="archive-list">{archived.map((project, index) => <details className="archive-row" key={project.id}><summary><span className="archive-number">0{index + 1}</span><h3>{displayNames[project.title] ?? project.title}</h3><span className="archive-type">{project.category.toLowerCase()}</span><span className="archive-year">{project.year}</span><Plus size={20} strokeWidth={1.4} aria-hidden="true" /></summary><div className="archive-detail"><p>{project.description}</p><span className="technology-line">{project.tags.join(' · ')}</span><p className="archive-status">{project.status}</p>{project.image && <figure><img src={project.image.src} alt={project.image.alt} loading="lazy" />{project.image.caption && <figcaption>{project.image.caption}</figcaption>}</figure>}</div></details>)}</div>
    </Reveal>
  </div></section>;
}
