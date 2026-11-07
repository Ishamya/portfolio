import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

const links = ['Work', 'Expertise', 'About', 'Archive'];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menu = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 951px)');
    const reset = () => setOpen(false);
    const onScroll = () => setScrolled(window.scrollY > 16);
    media.addEventListener('change', reset);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { media.removeEventListener('change', reset); window.removeEventListener('scroll', onScroll); };
  }, []);
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', outside);
    return () => document.removeEventListener('pointerdown', outside);
  }, [open]);
  function navigate(event: MouseEvent<HTMLAnchorElement>) {
    setOpen(false);
    const id = event.currentTarget.hash.slice(1);
    // Retain native fragment history, while moving keyboard context to the destination.
    requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (target) { target.tabIndex = -1; target.focus({ preventScroll: true }); }
    });
  }
  return <header ref={header} className={`site-navigation${scrolled ? ' is-scrolled' : ''}`} onKeyDown={event => {
    if (event.key === 'Escape' && open) { event.preventDefault(); setOpen(false); menu.current?.focus(); }
  }} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
  }}>
    <div className="page-container navigation-layout">
      <a className="brand-link" href="#home" aria-label={`${profile.name} home`} onClick={navigate}><span className="brand-monogram" aria-hidden="true">if.</span><span>{profile.name}</span></a>
      <button ref={menu} className="menu-toggle" type="button" aria-controls="homepage-navigation" aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(value => !value)}>{open ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}</button>
      <nav id="homepage-navigation" className={`main-navigation${open ? ' is-open' : ''}`} aria-label="Main navigation">
        <div className="navigation-links">{links.map(label => <a key={label} href={`#${label.toLowerCase()}`} onClick={navigate}>{label}</a>)}</div>
        <a className="navigation-contact" href="#contact" onClick={navigate}>Contact <ArrowUpRight aria-hidden="true" size={15} /></a>
      </nav>
    </div>
  </header>;
}
