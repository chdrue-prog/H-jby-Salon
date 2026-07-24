import React from 'react';
import { Phone, Info, Clock, CheckCircle } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Services() {
  useScrollReveal();

  const serviceCategories = [
    {
      category: 'Klipning',
      badge: 'Populære Ydelser',
      items: [
        { title: 'Herreklip', price: '200,- kr.', duration: 'ca. 30 min', desc: 'Professionel herreklip tilpasset din personlige stil. Inkluderer grundig rådgivning og let finish styling.' },
        { title: 'Børneklip (u/ 12 år)', price: '150,- kr.', duration: 'ca. 25 min', desc: 'Tryg og venlig klipning af børnehår i afslappede rammer med tålmodige frisører.' },
        { title: 'Pensionistklip', price: '150,- kr.', duration: 'ca. 30 min', desc: 'Specialpris for vores ældre kunder. Flot og klassisk klipning med god tid til en hyggelig snak.' },
        { title: 'Maskineklip (Helhoved)', price: '140,- kr.', duration: 'ca. 20 min', desc: 'Hurtig og tæt maskineklip med ensartet længde over hele hovedet og skarpe kanter.' },
      ]
    },
    {
      category: 'Skæg & Grooming',
      badge: 'Skægbehandling',
      items: [
        { title: 'Skægtrimning', price: '120,- kr.', duration: 'ca. 20 min', desc: 'Trimning af skæglængde, tilpasning af overskæg samt skarpe linjer på hals og kinder.' },
        { title: 'Kombi: Herreklip + Skæg', price: '280,- kr.', duration: 'ca. 45 min', desc: 'Den ultimative samlede pakke: Fuld herreklip kombineret med præcis skægtrimning og skægolie.' },
      ]
    },
    {
      category: 'Ekstra Ydelser',
      badge: 'Pleje & Finish',
      items: [
        { title: 'Hårvask & Styling', price: '80,- kr.', duration: 'ca. 15 min', desc: 'Forfriskende hårvask med hovedbundsmassage samt finish med professionel voks eller pomade.' },
      ]
    }
  ];

  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-dark)', color: '#FFFFFF', padding: '4.5rem 0 3.5rem', textAlign: 'center' }}>
        <div className="container animate-fade-in">
          <span className="badge badge-dark mb-2">Prisliste</span>
          <h1 style={{ fontSize: '3.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>Ydelser & Priser</h1>
          <p style={{ fontSize: '1.15rem', color: '#D3D7DC', maxWidth: '650px', margin: '0 auto' }}>
            Transparente priser uden skjulte gebyrer på Svendborgvej 321. Både med og uden tidsbestilling.
          </p>
        </div>
      </section>

      {/* Info Notice Box */}
      <section style={{ backgroundColor: 'var(--bg-card)', padding: '2rem 0', borderBottom: '1px solid var(--accent-border)' }}>
        <div className="container">
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--accent-gold)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyCenter: 'center', flexShrink: 0 }}>
              <Info size={26} style={{ margin: 'auto' }} />
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Hvordan booker jeg tid?</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Vi har ingen online booking-systemer. For at bestille tid skal du blot ringe direkte på <strong>20 18 89 03</strong> — eller kigge forbi salonen i åbningstiden til en drop-in klipning.
              </p>
            </div>
            <a href="tel:+4520188903" className="btn btn-primary btn-call-pulse">
              <Phone size={18} />
              <span>Ring 20 18 89 03</span>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Sections */}
      <section className="section">
        <div className="container">
          {serviceCategories.map((cat, idx) => (
            <div key={idx} style={{ marginBottom: '3.5rem' }}>
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
                <h2 style={{ fontSize: '2.25rem' }}>{cat.category}</h2>
                <span className="badge">{cat.badge}</span>
              </div>

              <div className="grid-2" style={{ gap: '1.5rem' }}>
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className={`price-card reveal delay-${itemIdx + 1}`}>
                    <div>
                      <div className="price-card-header">
                        <div>
                          <h3 className="price-card-title">{item.title}</h3>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.25rem' }}>
                            <Clock size={12} />
                            <span>{item.duration}</span>
                          </div>
                        </div>
                        <span className="price-card-price">{item.price}</span>
                      </div>
                      <p className="price-card-desc">{item.desc}</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid var(--accent-border)' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        Drop-in eller tidsbestilling
                      </span>
                      <a href="tel:+4520188903" className="btn btn-outline-gold btn-sm" style={{ color: 'var(--text-main)', borderColor: 'var(--accent-border)' }}>
                        <Phone size={14} />
                        <span>Bestil over tlf</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Info Grid */}
      <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div className="text-center reveal" style={{ maxWidth: '640px', margin: '0 auto 3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>Praktisk Information</h2>
            <p style={{ color: 'var(--text-muted)' }}>Alt du behøver at vide inden dit besøg i Højby Salon</p>
          </div>

          <div className="grid-3">
            <div className="glass-card reveal delay-1">
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={20} style={{ color: 'var(--accent-gold)' }} />
                <span>Med & Uden Tidsbestilling</span>
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Du kan altid tage chancen og komme forbi salonen direkte (drop-in) eller ringe i forvejen på 20 18 89 03.
              </p>
            </div>

            <div className="glass-card reveal delay-2">
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={20} style={{ color: 'var(--accent-gold)' }} />
                <span>Betalingsformer</span>
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Vi modtager både MobilePay, kontanter samt de mest gængse betalingskort.
              </p>
            </div>

            <div className="glass-card reveal delay-3">
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={20} style={{ color: 'var(--accent-gold)' }} />
                <span>Parkering</span>
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Der er gratis og nem parkering lige foran salonen på Svendborgvej 321.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark text-center">
        <div className="container reveal">
          <h2 style={{ fontSize: '2.75rem', color: '#FFFFFF', marginBottom: '1rem' }}>Ring for at booke din næste klipning</h2>
          <p style={{ color: '#D3D7DC', fontSize: '1.1rem', marginBottom: '2rem' }}>Telefonen er åben i hele vores åbningstid.</p>
          <a href="tel:+4520188903" className="btn btn-primary btn-lg btn-call-pulse">
            <Phone size={22} />
            <span>RING 20 18 89 03</span>
          </a>
        </div>
      </section>
    </div>
  );
}
