import { useState, useEffect, useRef } from 'react';
import type { KeyboardEvent } from 'react';
import { ArrowDown, ArrowUpRight, X } from 'lucide-react';
import { featuredProjects, featuredImage } from '../data/featuredProjects';
import { assetUrl } from '../utils';
import type { Project } from '../data/projects';
import { caseStudies } from '../data/caseStudies';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';

const chapters = [ ['brief','Project brief'], ['work','Engineering work'], ['architecture','System design'], ['decisions','Decisions & trade-offs'], ['verification','Evidence & limits'], ['media','Project screens'], ['explore','Explore'] ];

export function ProjectGrid() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeChapter, setActiveChapter] = useState('brief');
  const dialog = useRef<HTMLDialogElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const story = selected ? caseStudies[selected.id] : null;
  const preview = selected ? featuredProjects.find(item => item.project.id === selected.id) : null;

  useEffect(() => {
    if (!selected) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    if (element && !element.open) element.showModal();
    element?.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    let frame = 0;
    const updateChapter = () => {
      frame = 0;
      if (!element) return;
      if (element.scrollHeight - element.scrollTop - element.clientHeight <= 2) { setActiveChapter('explore'); return; }
      const threshold = element.getBoundingClientRect().top + 180;
      let current = 'brief';
      element.querySelectorAll<HTMLElement>('.case-section').forEach(section => {
        if (section.getBoundingClientRect().top <= threshold) current = section.id.replace('case-', '');
      });
      setActiveChapter(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(updateChapter); };
    element?.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      element?.removeEventListener('scroll', onScroll);
      if (element?.open) element.close();
      document.body.style.overflow = previousOverflow;
      lastFocus.current?.focus();
    };
  }, [selected]);

  function open(project: Project) { lastFocus.current = document.activeElement as HTMLElement; setActiveChapter('brief'); setSelected(project); }
  function close() { setSelected(null); }
  function handleDialogKeys(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== 'Tab') return;
    const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], select, summary, [tabindex="0"]')).filter(element => element.getClientRects().length > 0);
    const first = controls[0], last = controls[controls.length - 1];
    if (first && ((event.shiftKey && document.activeElement === first) || (!event.shiftKey && document.activeElement === last) || !event.currentTarget.contains(document.activeElement))) {
      event.preventDefault(); (event.shiftKey ? last : first).focus();
    }
  }
  function goToChapter(id: string) {
    const target = dialog.current?.querySelector<HTMLElement>(`#case-${id}`);
    target?.focus({ preventScroll: true });
    target?.scrollIntoView({ block: 'start', behavior: 'instant' });
    setActiveChapter(id);
  }
  return <>
    <section id="work" className="selected-work" aria-labelledby="work-title">
      <div className="page-container">
        <Reveal><div className="section-heading work-heading"><div><p className="eyebrow">01 / Selected work</p><h2 id="work-title">Ideas, made <span className="serif">real.</span></h2></div><p>A closer look at the interfaces<br/>and the engineering behind them.</p></div></Reveal>
        <div className="editorial-project-grid">{featuredProjects.map((item, index) => <ProjectCard key={item.project.id} item={item} index={index} onOpen={open}/>)}</div>
        <aside className="movie-attribution" aria-label="Movie imagery attribution"><a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer"><img src={assetUrl('images/featured/tmdb-logo.svg')} width={100} height={13} alt="TMDB (opens in a new tab)"/></a><p>WatchNext posters and metadata: TMDB. This product uses the TMDB API but is not endorsed or certified by TMDB.</p></aside>
      </div>
    </section>
    <dialog ref={dialog} onKeyDown={handleDialogKeys} onCancel={event => { event.preventDefault(); close(); }} onClose={close} onClick={event => { if (event.target === dialog.current) close(); }} className="project-dialog" aria-labelledby="project-dialog-title" aria-describedby="project-dialog-overview">
      {selected && !story && preview && <div className="project-preview">
        <div className="preview-top"><span>Project preview</span><button type="button" className="icon-button" autoFocus onClick={close} aria-label="Close project"><X size={22} aria-hidden="true"/></button></div>
        <h2 id="project-dialog-title">{preview.name}</h2>
        <p id="project-dialog-overview">{selected.description}</p>
        <img src={featuredImage(preview.slug)} alt={preview.alt} width={1600} height={1120}/>
        <p className="preview-status">{selected.status}</p>
        <p>{selected.id === '05' ? 'Dashboard captured locally with synthetic data. Authentication, messaging and payments are mocked.' : 'Genuine iOS Simulator capture. No public App Store release is claimed.'}</p>
        <p>A detailed engineering case study is not yet available.</p>
        <button type="button" className="button button-dark" onClick={close}>Back to selected work <ArrowUpRight size={16} aria-hidden="true"/></button>
      </div>}
      {selected && story && <div className="dialog-inner">
        <div className="dialog-top"><span className="eyebrow">{selected.title} / ENGINEERING CASE STUDY</span><button className="icon-button case-close" autoFocus onClick={close} aria-label="Close project"><span>CLOSE</span><X aria-hidden="true" size={20}/></button></div>
        <div className="case-heading"><span className="eyebrow accent">[ {selected.id} ] / {selected.category}</span><h2 id="project-dialog-title">{selected.title}</h2><p id="project-dialog-overview">{story.focus}</p>
          <div className="case-facts"><div><span className="eyebrow muted">PROJECT STATUS</span><span className="project-status">{story.label}</span></div><div><span className="eyebrow muted">REVIEW EVIDENCE</span><span>{story.proof}</span></div></div>
          <p className="case-boundary"><strong>Scope of verification</strong>{story.limitation}</p>
          <div className="case-stack"><span className="eyebrow muted">BUILT WITH</span><ul className="tags" aria-label="Technology stack">{selected.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
        </div>
        <div className="case-mobile-index"><label htmlFor="case-chapter">JUMP TO A SECTION</label><select id="case-chapter" value={activeChapter} onChange={event => goToChapter(event.target.value)}>{chapters.map(([id, title], index) => <option key={id} value={id}>{String(index + 1).padStart(2,'0')} / {title}</option>)}</select></div>
        <div className="case-layout"><nav className="case-nav" aria-label="Case study chapters"><span className="eyebrow muted">IN THIS CASE STUDY</span>{chapters.map(([id, title], index) => <button key={id} aria-current={activeChapter === id ? 'location' : undefined} onClick={() => goToChapter(id)}><span>{String(index + 1).padStart(2,'0')}</span>{title}</button>)}</nav>
          <div className="dialog-content">
            <section id="case-brief" className="case-section" tabIndex={-1} aria-labelledby="case-brief-title"><h3 id="case-brief-title">01 / PROJECT BRIEF</h3><p className="case-lead">{selected.description}</p><div className="case-brief-grid"><div><h4>The problem</h4><p>{selected.problem}</p></div><div><h4>The solution</h4><p>{selected.detail}</p></div></div><details className="feature-disclosure"><summary>Implemented feature scope</summary><ul className="project-features">{selected.features.map(feature => <li key={feature}>{feature}</li>)}</ul></details></section>
            <section id="case-work" className="case-section" tabIndex={-1} aria-labelledby="case-work-title"><h3 id="case-work-title">02 / ENGINEERING WORK</h3><ul className="engineering-work">{story.work.map(item => <li key={item}>{item}</li>)}</ul></section>
            <section id="case-architecture" className="case-section" tabIndex={-1} aria-labelledby="case-architecture-title"><h3 id="case-architecture-title">03 / SYSTEM DESIGN</h3><ol className="architecture-flow" aria-label="Major system components and their connections">{story.architecture.map((item, i) => <li key={item}><div className="architecture-node"><span className="eyebrow accent">0{i+1}</span><strong>{item}</strong></div>{i < story.architecture.length - 1 && <span className="architecture-connection"><ArrowDown aria-hidden="true" size={16}/>{story.connections[i]}</span>}</li>)}</ol><p>{story.architectureNote}</p></section>
            <section id="case-decisions" className="case-section" tabIndex={-1} aria-labelledby="case-decisions-title"><h3 id="case-decisions-title">04 / DECISIONS & TRADE-OFFS</h3><div className="decision-list">{story.decisions.map((decision, index) => <div key={decision.title}><span className="decision-number" aria-hidden="true">0{index+1}</span><div><h4>{decision.title}</h4><p>{decision.text}</p></div></div>)}</div><aside className="case-tradeoff" aria-label="Technical challenge and remaining trade-offs"><h4>The constraint & the compromise</h4><p>{story.tradeoff}</p></aside></section>
            <section id="case-verification" className="case-section" tabIndex={-1} aria-labelledby="case-verification-title"><h3 id="case-verification-title">05 / EVIDENCE & LIMITS</h3><p>{story.verification}</p><div className="case-status"><span className="eyebrow accent">CURRENT STATUS</span><p>{selected.status}</p></div></section>
            <section id="case-media" className="case-section" tabIndex={-1} aria-labelledby="case-media-title"><h3 id="case-media-title">06 / PROJECT SCREENS</h3>{story.media.length ? <div className="case-gallery">{story.media.map((media, index) => <figure key={media.src}><div className="gallery-label"><span className="eyebrow muted">SCREEN {String(index + 1).padStart(2,'0')}</span><span className="eyebrow muted">OPEN IMAGE ↗</span></div><a href={media.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full screenshot: ${media.alt} (new tab)`}><img src={media.src} alt={media.alt} loading="lazy" width={media.width} height={media.height}/></a><figcaption>{media.caption}</figcaption></figure>)}</div> : <p className="media-note">Additional project screenshots are not available.</p>}</section>
            <section id="case-explore" className="case-section" tabIndex={-1} aria-labelledby="case-explore-title"><h3 id="case-explore-title">07 / EXPLORE</h3><div className="dialog-actions">{selected.demoUrl && <a className="primary-button" href={selected.demoUrl} target="_blank" rel="noopener noreferrer">VISIT LIVE STOREFRONT <ArrowUpRight aria-hidden="true" size={16}/><span className="sr-only">(opens in a new tab)</span></a>}{selected.githubUrl && <a className="primary-button" href={selected.githubUrl} target="_blank" rel="noopener noreferrer">SOURCE REPOSITORY <ArrowUpRight aria-hidden="true" size={16}/><span className="sr-only">(opens in a new tab)</span></a>}<button className="case-close-link" onClick={close}>BACK TO SELECTED WORK <ArrowUpRight aria-hidden="true" size={16}/></button></div>{!selected.githubUrl && <p className="media-note">Source link omitted until public access is verified.{!selected.demoUrl && ' Public demo not verified.'}</p>}</section>
          </div>
        </div>
      </div>}
    </dialog>
  </>;
}
