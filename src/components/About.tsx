import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function About() {
  return <section id="about" className="about-section section-space" aria-labelledby="about-title"><div className="page-container">
    <Reveal><p className="eyebrow">03 / A little about me</p><div className="about-layout">
      <div><h2 id="about-title">Thoughtful by design.<br /><span className="serif">Practical by nature.</span></h2><a className="text-link" href="#contact">Let’s talk <ArrowUpRight size={17} aria-hidden="true" /></a></div>
      <div className="about-copy"><p>I’m Ishamya, a Computer Science undergraduate who enjoys turning an idea into something people can use.</p><p>My work spans web applications, mobile tools and intelligent systems. I care as much about how the parts fit together as how the interface feels.</p><div className="education"><span className="eyebrow">Currently studying</span><strong>BSc (Hons) Computer Science</strong><span>Informatics Institute of Technology</span><span className="education-year">Expected 2027</span></div></div>
    </div></Reveal>
  </div></section>;
}
