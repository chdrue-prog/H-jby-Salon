import React from 'react';
import { Phone, MapPin, Clock, Scissors, ShieldCheck } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div className="logo" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
              <div className="logo-icon">
                <Scissors size={20} />
              </div>
              <span>Højby Salon</span>
            </div>
            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.6, maxWidth: '320px' }}>
              Din hyggelige lokale frisør i Højby (Odense). Vi tilbyder herreklip, børneklip, pensionistklip og skægtrimning med god service og fair priser.
            </p>
            <div className="badge badge-dark">
              <ShieldCheck size={14} />
              <span>Med & Uden Tidsbestilling</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><button className="footer-link" onClick={() => handleNav('home')}>Forside</button></li>
              <li><button className="footer-link" onClick={() => handleNav('about')}>Om salonen</button></li>
              <li><button className="footer-link" onClick={() => handleNav('services')}>Ydelser & Priser</button></li>
              <li><button className="footer-link" onClick={() => handleNav('gallery')}>Galleri</button></li>
              <li><button className="footer-link" onClick={() => handleNav('reviews')}>Anmeldelser</button></li>
              <li><button className="footer-link" onClick={() => handleNav('contact')}>Kontakt & Åbningstider</button></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="footer-title">Åbningstider</h4>
            <ul className="footer-links" style={{ fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', color: '#E7E5E4' }}>
                <span>Mandag</span>
                <span style={{ color: '#EF4444', fontWeight: 600 }}>Lukket</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', color: '#E7E5E4' }}>
                <span>Tirsdag - Fredag</span>
                <span style={{ color: 'var(--accent-gold)' }}>10:00 – 17:30</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', color: '#E7E5E4' }}>
                <span>Lørdag - Søndag</span>
                <span style={{ color: 'var(--accent-gold)' }}>10:00 – 15:00</span>
              </li>
            </ul>
            <div style={{ marginTop: '1rem', fontSize: '0.825rem', color: 'var(--text-light)', fontStyle: 'italic' }}>
              * Drop-in er altid velkommen!
            </div>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="footer-title">Adresse & Telefon</h4>
            <div style={{ marginBottom: '1.25rem', color: '#E2E8F0', fontSize: '0.95rem', lineHeight: 1.5 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <MapPin size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                <span>Svendborgvej 321<br />5260 Odense (Højby)</span>
              </div>
            </div>
            <a 
              href="tel:+4520188903" 
              className="btn btn-primary" 
              style={{ width: '100%', padding: '0.85rem 1.2rem' }}
            >
              <Phone size={18} />
              <span>Ring 20 18 89 03</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Højby Salon — Svendborgvej 321, 5260 Odense.
          </div>
          <div>
            <span>Frisør & Grooming med hyggelig atmosfære</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
