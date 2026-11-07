import React from 'react';
import ReactDOM from 'react-dom/client';
import { MotionPreferences } from './components/MotionPreferences';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { Capabilities } from './components/Capabilities';
import { About } from './components/About';
import { Archive } from './components/Archive';
import { Footer } from './components/Footer';
import './styles.css';
import './homepage.css';

function App() {
  return <MotionPreferences>
    <a href="#main" className="skip-link">Skip to content</a>
    <Header />
    <main id="main" tabIndex={-1}>
      <Hero /><ProjectGrid /><Capabilities /><About /><Archive />
    </main>
    <Footer />
  </MotionPreferences>;
}
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
