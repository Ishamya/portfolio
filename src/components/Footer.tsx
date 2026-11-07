import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowUp, Copy, Check } from 'lucide-react';
import { profile } from '../data/profile';
import { Reveal } from './Reveal';

export function Footer() {
  const [feedback, setFeedback] = useState('');
  const feedbackTimer = useRef<ReturnType<typeof window.setTimeout> | null>(null);
  useEffect(() => () => { if (feedbackTimer.current !== null) window.clearTimeout(feedbackTimer.current); }, []);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setFeedback('Email copied to clipboard.'); }
    catch { setFeedback('Copy unavailable. Select the email address or use the email link.'); }
    if (feedbackTimer.current !== null) window.clearTimeout(feedbackTimer.current);
    feedbackTimer.current = window.setTimeout(() => setFeedback(''), 4000);
  }
  return <footer id="contact" className="contact-section" aria-labelledby="contact-title"><div className="page-container">
    <Reveal><div className="contact-top"><p className="eyebrow">05 / What’s next?</p><p>Engineering opportunities<br />& freelance projects</p></div>
      <div className="contact-composition"><h2 id="contact-title">Let’s build<br /><span className="serif">something useful.</span></h2><div className="contact-invitation"><p>Have a role, a project,<br />or a good starting point?</p><a className="text-link" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={20} aria-hidden="true" /></a></div></div>
      <div className="contact-details"><div className="email-actions"><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={20} aria-hidden="true" /></a><button type="button" className="copy-email icon-button" onClick={copyEmail} aria-label="Copy email address">{feedback.startsWith('Email copied') ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}</button></div><div className="social-links"><a href={profile.socials.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a><a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></div></div>
    </Reveal>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Ishamya Fernando</span><span>Considered design. Purposeful engineering.</span><a href="#home">Back to top <ArrowUp size={14} aria-hidden="true" /></a></div>
  </div><div className="toast" role="status" aria-live="polite" data-visible={Boolean(feedback)}>{feedback}</div></footer>;
}
