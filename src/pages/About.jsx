import React from 'react';
import { Phone, Award, Heart, Shield, Sparkles, Users } from 'lucide-react';

import exteriorImg from '../assets/images/exterior.jpg';
import interiorImg from '../assets/images/interior.jpg';

export default function About({ setActivePage }) {
  return (
    <div>
      {/* Header Banner */}
      <section style={{ backgroundColor: 'var(--bg-dark)', color: '#FFFFFF', padding: '4.5rem 0 3.5rem', textAlign: 'center' }}>
        <div className="container">
          <span className="badge badge-dark mb-2">Historie & Filosofi</span>
          <h1 style={{ fontSize: '3.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>Om Højby Salon</h1>
          <p style={{ fontSize: '1.15rem', color: '#D3D7DC', maxWidth: '650px', margin: '0 auto' }}>
            Traditionsrigt håndværk, personlig service og herreklip i et afslappet og venligt miljø på Svendborgvej 321.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="badge mb-2">Vores Filosofi</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>
                Skabt for dig der værdsætter en ordentlig klipning
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.1rem', lineHeight: 1.65 }}>
                Højby Salon er grundlagt med et simpelt formål: at tilbyde et sted i Højby (Odense S), hvor du kan træde ind ad døren, slappe af og få en klipning eller skægtrimning i topklasse til yderst rimelige priser (Herreklip 200,- | Børneklip 150,- | Pensionistklip 150,-).
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: 1.65 }}>
                Vi har bevidst fravalgt komplicerede online booking-systemer for at holde kontakten personlig og direkte. Hos os kan du enten ringe på <strong>20 18 89 03</strong> i forvejen eller svinge forbi salonen, når det passer i din kalender.
              </p>

              <div className="dark-card" style={{ marginTop: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <Award size={22} style={{ color: 'var(--accent-gold)' }} />
                  <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF' }}>Kvalitetsgaranti</h4>
                </div>
                <p style={{ fontSize: '0.925rem', color: '#D3D7DC' }}>
                  Vi lytter nøje til dine ønsker og rådgiver om den form og styling, der passer bedst til din stil.
                </p>
              </div>
            </div>

            <div>
              <img 
                src={interiorImg} 
                alt="Højby Salon Interiør" 
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Exterior Showcase */}
      <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <img 
                src={exteriorImg} 
                alt="Højby Salon Facade & Skilte" 
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }} 
              />
            </div>
            <div>
              <span className="badge mb-2">Centralt i Højby</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>
                Gode parkeringsforhold & nem adgang
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.1rem', lineHeight: 1.65 }}>
                Salonen er placeret på Svendborgvej 321, 5260 Odense S med god synlighed, klassiske barberstænger og gratis parkering lige foran indgangen.
              </p>
              <div style={{ padding: '1rem 1.25rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--accent-border)' }}>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--accent-gold)', marginBottom: '0.25rem' }}>
                  Med & Uden Tidsbestilling
                </div>
                <div style={{ fontSize: '0.925rem', color: 'var(--text-muted)' }}>
                  Tir-Fre: 10:00–17:30 | Lør-Søn: 10:00–15:00 | Man: Lukket<br />
                  Tlf: <strong>20 18 89 03</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Call Banner */}
      <section className="section text-center">
        <div className="container">
          <div className="glass-card" style={{ padding: '3.5rem 2rem', background: 'var(--bg-dark)', color: '#FFFFFF' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>Vil du booke en tid hos os?</h2>
            <p style={{ color: '#D3D7DC', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Du behøver intet login — ring direkte til os på <strong>20 18 89 03</strong>.
            </p>
            <a href="tel:+4520188903" className="btn btn-primary btn-lg btn-call-pulse">
              <Phone size={22} />
              <span>Ring til Højby Salon — 20 18 89 03</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
