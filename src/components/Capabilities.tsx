import { Reveal } from './Reveal';

// Each discipline is grounded in the projects, not a proficiency rating.
const capabilities = [
  { name: 'Frontend engineering', text: 'Interfaces that make complex workflows feel clear.', tags: 'React · Next.js · TypeScript' },
  { name: 'Backend & APIs', text: 'The services and workflows behind the screen.', tags: 'NestJS · Express · REST APIs' },
  { name: 'Mobile development', text: 'Useful tools, built for the way people move.', tags: 'Flutter · Kotlin · SwiftUI' },
  { name: 'Databases & cloud', text: 'Data models that connect an application’s parts.', tags: 'PostgreSQL · Firebase · Room' },
  { name: 'AI & machine learning', text: 'Exploring discovery through hybrid recommendations.', tags: 'Python · scikit-learn · MovieLens' },
  { name: 'Engineering practices', text: 'Care in the details, from source to browser.', tags: 'Git · Testing · Debugging' },
];
export function Capabilities() {
  return <section id="expertise" className="expertise section-space" aria-labelledby="expertise-title"><div className="page-container expertise-layout">
    <Reveal className="section-introduction"><p className="eyebrow">02 / Expertise</p><h2 id="expertise-title">Across the<br /><span className="serif">whole stack.</span></h2><p className="section-note">Different tools.<br />One considered experience.</p></Reveal>
    <div className="expertise-grid">{capabilities.map((item, index) => <Reveal className="expertise-item" key={item.name} delay={(index % 3) * 0.04}><span className="item-number" aria-hidden="true">0{index + 1}</span><h3>{item.name}</h3><p>{item.text}</p><span className="technology-line">{item.tags}</span></Reveal>)}</div>
  </div></section>;
}
