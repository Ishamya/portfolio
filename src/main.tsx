import React from 'react';
import ReactDOM from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import { Header } from './components/Header';
import { Hero, Marquee } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { ProjectGrid } from './components/ProjectGrid';
import { Capabilities } from './components/Capabilities';
import { Archive } from './components/Archive';
import { Footer } from './components/Footer';
import './styles.css';
function App(){return <MotionConfig reducedMotion="user"><a href="#main" className="skip-link">Skip to content</a><Header/><main id="main"><Hero/><Marquee/><StatsBar/><ProjectGrid/><Capabilities/><Archive/></main><Footer/></MotionConfig>}
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
