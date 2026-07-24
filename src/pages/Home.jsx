import React from 'react';
import { Phone, Clock, Shield, Star, Scissors, CheckCircle, ArrowRight, Sparkles, MapPin } from 'lucide-react';

import heroImg from '../assets/images/hero.jpg';
import interiorImg from '../assets/images/interior.jpg';

export default function Home({ setActivePage }) {
  const popularServices = [
    { title: 'Herreklip', price: '200,- kr.', desc: 'Klassisk eller moderne herreklip tilpasset din stil inklusive vask & let styling.' },
    { title: 'Børneklip', price: '150,- kr.', desc: 'Tålmodig og venlig klipning til børn i trygge og hyggelige rammer.' },
    { title: 'Pensionistklip', price: '150,- kr.', desc: 'Ekstra skarp pris til vores seniorer — altid med højt humør og god betjening.' },
    { title: 'Skægtrimning', price: '120,- kr.', desc: 'Præcis trimning, knivskarp konturering og plejende skægolie.' },
  ];

  const testimonials = [
    { name: 'Peter M.', role: 'Lokal kunde i Odense', text: 'Superskarp klipning hver eneste gang! God stemning, altid god tid og fantastiske priser.', rating: 5 },
    { name: 'Christian K.', role: 'Fast kunde i 3 år', text: 'Højby Salon er den bedste frisør i området. Skægtrimningen sidder lige i skabet.', rating: 5 },
    { name: 'Søren N.', role: 'Drop-in kunde', text: 'Dejligt nemt at kigge forbi på Svendborgvej uden tidsbestilling. Flot arbejde!', rating: 5 },
  ];

  return (
    <div>
      {/* Warm Salon Interior Hero Section */}
      <section className="hero-wrapper">
        <div className="hero-bg">
          <img src={heroImg} alt="Højby Salon Interiør Stemning" />
        </div>
        <div className="hero-overlay"></div>

        <div className="container hero-content animate-fade-in">
          <div className="badge badge-dark mb-4">
            <Sparkles size={14} style={{ color: 'var(--accent-gold)' }} />
            <span>Med & Uden Tidsbestilling</span>
          </div>

          <h1 className="hero-title">
            Klassisk håndværk & hyggelig stemning i Højby
          </h1>

          <p className="hero-subtitle">
            Velkommen til <strong>Højby Salon</strong> på Svendborgvej 321, 5260 Odense. Din lokale frisør med herreklip, børneklip, pensionistklip og skægtrimning i uformelle og velkendte rammer.
          </p>

          <div className="hero-actions">
            <a href="tel:+4520188903" className="btn btn-primary btn-lg btn-call-pulse">
              <Phone size={22} />
              <span>Ring & Book Tid — 20 18 89 03</span>
            </a>
            
            <button 
              onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="btn btn-outline-gold btn-lg"
            >
              <span>Se Ydelser & Priser</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Key Stats Pill */}
          <div style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: '1.75rem' }}>
            <div>
              <div style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', fontWeight: 700 }}>200,- kr.</div>
              <div style={{ fontSize: '0.85rem', color: '#D3D7DC' }}>Herreklip</div>
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', fontWeight: 700 }}>150,- kr.</div>
              <div style={{ fontSize: '0.85rem', color: '#D3D7DC' }}>Børn & Pensionister</div>
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', fontWeight: 700 }}>Drop-in</div>
              <div style={{ fontSize: '0.85rem', color: '#D3D7DC' }}>Eller ring 20 18 89 03</div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Highlights Bar */}
      <section style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--accent-border)', padding: '1.75rem 0' }}>
        <div className="container">
          <div className="grid-4" style={{ alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(192,138,62,0.15)', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: 'var(--accent-gold)' }}>
                <Phone size={22} style={{ margin: 'auto' }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem' }}>20 18 89 03</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Klik for at ringe direkte</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(192,138,62,0.15)', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: 'var(--accent-gold)' }}>
                <MapPin size={22} style={{ margin: 'auto' }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem' }}>Svendborgvej 321</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>5260 Odense S (Højby)</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(192,138,62,0.15)', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: 'var(--accent-gold)' }}>
                <Clock size={22} style={{ margin: 'auto' }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem' }}>Tir - Søn Åbent</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Man lukket | Weekend 10-15</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(192,138,62,0.15)', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: 'var(--accent-gold)' }}>
                <Shield size={22} style={{ margin: 'auto' }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem' }}>Ingen Online Booking</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Ring eller kig forbi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro using Real Interior Photo */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="badge mb-2">Velkommen i Salonen</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>
                En hyggelig frisørsalon med sans for god betjening
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.1rem', lineHeight: 1.65 }}>
                Hos Højby Salon på Svendborgvej 321 i Odense S får du en god klipning i afslappede og uformelle rammer. Vores salon er indrettet med varme stenmaterialer, rå mursten og behagelige frisørstole, hvor du kan sætte dig godt til rette.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.75rem', lineHeight: 1.65 }}>
                Uanset om du ønsker en skarp herreklip, børneklip til ungerne eller en pensionistklip til god pris, garanterer vi et pænt og veludført resultat.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600 }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-gold)' }} />
                  <span>Fair priser: Herreklip 200,- | Børn 150,- | Pensionist 150,-</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600 }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-gold)' }} />
                  <span>Telefonisk tidsbestilling på 20 18 89 03 eller drop-in</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600 }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-gold)' }} />
                  <span>Gratis parkering lige uden for døren</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="tel:+4520188903" className="btn btn-primary">
                  <Phone size={18} />
                  <span>Ring på 20 18 89 03</span>
                </a>
                <button onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn btn-outline">
                  <span>Læs mere om os</span>
                </button>
              </div>
            </div>

            <div>
              <img 
                src={interiorImg} 
                alt="Højby Salon Interiør på Svendborgvej 321" 
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '640px', margin: '0 auto 3.5rem' }}>
            <span className="badge mb-2">Vores Ydelser</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.85rem' }}>Gennemskuelige priser</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              Hos Højby Salon har vi enkle og gennemskuelige priser uden overraskelser.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {popularServices.map((service, idx) => (
              <div key={idx} className="price-card">
                <div>
                  <div className="price-card-header">
                    <h3 className="price-card-title">{service.title}</h3>
                    <span className="price-card-price">{service.price}</span>
                  </div>
                  <p className="price-card-desc">{service.desc}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                    Med & uden tidsbestilling
                  </span>
                  <a href="tel:+4520188903" className="btn btn-outline-gold btn-sm" style={{ color: 'var(--text-main)', borderColor: 'var(--accent-border)' }}>
                    <Phone size={14} />
                    <span>Bestil tid</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button 
              onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className="btn btn-dark btn-lg"
            >
              <span>Se alle ydelser & fuld prisliste</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Customer Reviews Highlight */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '640px', margin: '0 auto 3.5rem' }}>
            <span className="badge mb-2">Anmeldelser</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.85rem' }}>Det siger vores kunder</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              Glade kunder er salonens største stolthed.
            </p>
          </div>

          <div className="grid-3">
            {testimonials.map((t, idx) => (
              <div key={idx} className="glass-card">
                <div style={{ display: 'flex', gap: '0.25rem', color: '#F59E0B', marginBottom: '1rem' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#F59E0B" />
                  ))}
                </div>
                <p style={{ fontStyle: 'italic', color: 'var(--text-main)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  "{t.text}"
                </p>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Call CTA Banner */}
      <section className="section section-dark text-center" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="badge badge-dark mb-4">Ring For Tidsbestilling</span>
          <h2 style={{ fontSize: '2.75rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            Klar til at blive klippede?
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#D3D7DC', maxWidth: '600px', margin: '0 auto 2.25rem' }}>
            Giv os et kald på <strong>20 18 89 03</strong> eller kig direkte forbi salonen på Svendborgvej 321 i Odense S.
          </p>

          <a href="tel:+4520188903" className="btn btn-primary btn-lg btn-call-pulse">
            <Phone size={24} />
            <span>RING PÅ TLF 20 18 89 03</span>
          </a>
        </div>
      </section>
    </div>
  );
}
