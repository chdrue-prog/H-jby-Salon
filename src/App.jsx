import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileCallBar from './components/MobileCallBar';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'services', 'gallery', 'reviews', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <About setActivePage={setActivePage} />;
      case 'services':
        return <Services setActivePage={setActivePage} />;
      case 'gallery':
        return <Gallery setActivePage={setActivePage} />;
      case 'reviews':
        return <Reviews setActivePage={setActivePage} />;
      case 'contact':
        return <Contact setActivePage={setActivePage} />;
      case 'home':
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>
      <Footer setActivePage={setActivePage} />
      <MobileCallBar />
    </div>
  );
}
