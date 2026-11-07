import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function Hero() {
  return <section id="home" className="editorial-hero" aria-labelledby="hero-title">
    <div className="page-container">
      <Reveal>
        <div className="hero-intro"><p className="eyebrow">Ishamya Fernando / Software developer</p><span className="hero-disciplines">Web. Mobile. Intelligent systems.</span></div>
        <div className="hero-composition">
          <h1 id="hero-title">Building<br /><span>real products.</span></h1>
          <div className="hero-aside"><span className="small-rule" aria-hidden="true" /><p>From the first interaction<br className="desktop-break" /> to the systems behind it.</p><p className="hero-description">I’m a software developer building thoughtful web, mobile and intelligent applications.</p></div>
        </div>
        <div className="hero-bottom"><div className="hero-actions"><a className="button button-dark" href="#work">Explore Work <ArrowDown size={16} aria-hidden="true" /></a><a className="text-link" href="#contact">Get in Touch <ArrowUpRight size={16} aria-hidden="true" /></a></div><p className="hero-footnote">Interfaces with intention.<br />Engineering with substance.</p></div>
      </Reveal>
    </div>
  </section>;
}
