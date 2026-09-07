import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileQuickBar from './components/MobileQuickBar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Support from './pages/Support';
import Contact from './pages/Contact';

function usePath() {
  const getCleanPath = () => {
    if (typeof window === 'undefined') return '/';
    const hash = window.location.hash.replace('#', '') || '/';
    // If hash contains a secondary anchor like /services#network-audit
    const primaryPath = hash.split('#')[0] || '/';
    return primaryPath;
  };

  const [path, setPath] = useState(getCleanPath);

  useEffect(() => {
    const handleHashChange = () => {
      const p = getCleanPath();
      setPath(p);

      // Handle sub-anchor scroll if present
      const fullHash = window.location.hash;
      const parts = fullHash.split('#');
      if (parts.length > 2) {
        const subId = parts[2];
        setTimeout(() => {
          const el = document.getElementById(subId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return path;
}

export default function App() {
  const path = usePath();

  let content = <Home />;
  if (path === '/about') {
    content = <About />;
  } else if (path === '/services') {
    content = <Services />;
  } else if (path === '/solutions') {
    content = <Solutions />;
  } else if (path === '/support') {
    content = <Support />;
  } else if (path === '/contact') {
    content = <Contact />;
  }

  return (
    <div className="appRoot">
      <Header currentPath={path} />
      {content}
      <Footer />
      {/* Mobile Fixed Quick Action Bar */}
      <MobileQuickBar />
    </div>
  );
}
