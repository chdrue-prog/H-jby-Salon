import React, { useState, useEffect } from 'react';
import { Phone, Scissors, Menu, X, Clock, MapPin } from 'lucide-react';

export default function Header({ activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Forside' },
    { id: 'about', label: 'Om os' },
    { id: 'services', label: 'Ydelser & Priser' },
    { id: 'gallery', label: 'Galleri' },
    { id: 'reviews', label: 'Anmeldelser' },
    { id: 'contact', label: 'Kontakt' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = id;
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top info bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span className="top-bar-item">
              <Clock size={13} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
              <span>Tir-Fre: 10–17:30 | Lør-Søn: 10–15</span>
            </span>
            <span className="top-bar-item">
              <MapPin size={13} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
              <span>Svendborgvej 321, 5260 Odense</span>
            </span>
          </div>
          <a href="tel:+4520188903" className="top-bar-item" style={{ color: '#F3E5AB', fontWeight: 600 }}>
            <Phone size={13} />
            <span>Tlf: 20 18 89 03</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container main-nav">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="logo">
          <div className="logo-icon">
            <Scissors size={20} />
          </div>
          <div>
            <div style={{ lineHeight: 1.1 }}>Højby Salon</div>
            <div style={{ fontSize: '0.625rem', fontFamily: 'var(--font-sans)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
              Odense S
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="nav-links-desktop">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Right Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a href="tel:+4520188903" className="btn btn-primary btn-sm btn-call-pulse" style={{ display: 'inline-flex' }}>
            <Phone size={16} />
            <span>Ring 20 18 89 03</span>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Åbn menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="logo" style={{ color: '#FFFFFF' }}>
            <div className="logo-icon">
              <Scissors size={20} />
            </div>
            <span>Højby Salon</span>
          </div>
          <button onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFFFFF', padding: '0.5rem', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={30} />
          </button>
        </div>

        <div style={{ marginBottom: '1.75rem', padding: '1rem', background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-md)' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '0.25rem' }}>
            MED & UDEN TIDSBESTILLING
          </div>
          <p style={{ fontSize: '0.875rem', color: '#D6D3D1' }}>
            Svendborgvej 321, 5260 Odense (Højby)<br />
            Ring direkte for tidsbestilling eller drop-in.
          </p>
        </div>

        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`mobile-nav-link ${activePage === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', paddingTop: '1.75rem' }}>
          <a href="tel:+4520188903" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
            <Phone size={20} />
            <span>Ring Nu: 20 18 89 03</span>
          </a>
        </div>
      </div>
    </header>
  );
}
