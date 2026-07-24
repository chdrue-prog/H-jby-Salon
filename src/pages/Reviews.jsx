import React from 'react';
import { Star, Phone, ThumbsUp } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Reviews() {
  useScrollReveal();

  const reviews = [
    {
      name: 'Michael Poulsen',
      date: 'For 2 uger siden',
      rating: 5,
      text: 'Altid en fantastisk oplevelse i Højby Salon! Man bliver budt velkommen med et smil, og klipningen er 100% i orden hver gang. 200,- kr. for en herreklip af den kvalitet er virkelig en god pris.',
      tag: 'Herreklip'
    },
    {
      name: 'Jens Erik M.',
      date: 'For 1 måned siden',
      rating: 5,
      text: 'Super dygtig frisør. Jeg er kommet her i lang tid til både pensionistklip og skægtrimning på Svendborgvej. De tager sig altid god tid til kunden.',
      tag: 'Pensionistklip & Skæg'
    },
    {
      name: 'Kasper & Emil (8 år)',
      date: 'For 3 uger siden',
      rating: 5,
      text: 'Tog min 8-årige søn med til børneklip uden tidsbestilling. De var utroligt søde mod ham og klippede super flot. Vi kommer stensikkert igen!',
      tag: 'Børneklip'
    },
    {
      name: 'Thomas Bendtsen',
      date: 'For 2 måneder siden',
      rating: 5,
      text: 'Fik både herreklip og skægtrimning. Skægkonturerne blev knivskarpe, og stemningen i salonen er rigtig behagelig. Kan varmt anbefales!',
      tag: 'Kombi Klip & Skæg'
    },
    {
      name: 'Rasmus H.',
      date: 'For nylig',
      rating: 5,
      text: 'Dejligt befriende at man bare kan ringe direkte på 20 18 89 03 eller svinge forbi uden et kompliceret bookingsystem på nettet. Altid god service!',
      tag: 'Drop-in & Tlf booking'
    }
  ];

  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-dark)', color: '#FFFFFF', padding: '4.5rem 0 3.5rem', textAlign: 'center' }}>
        <div className="container animate-fade-in">
          <span className="badge badge-dark mb-2">Kundeudtalelser</span>
          <h1 style={{ fontSize: '3.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>Anmeldelser</h1>
          <p style={{ fontSize: '1.15rem', color: '#D3D7DC', maxWidth: '650px', margin: '0 auto' }}>
            Se hvad vores kunder siger om atmosfæren, betjeningen og kvaliteten i Højby Salon.
          </p>
        </div>
      </section>

      {/* Score Rating Card */}
      <section style={{ backgroundColor: 'var(--bg-card)', padding: '2.5rem 0', borderBottom: '1px solid var(--accent-border)' }}>
        <div className="container">
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
            <div className="text-center">
              <div style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent-gold)' }}>4.9 / 5.0</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', color: '#F59E0B', margin: '0.5rem 0' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={22} fill="#F59E0B" />
                ))}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Baseret på kundetilbagemeldinger</div>
            </div>

            <div style={{ maxWidth: '450px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Glade kunder er vores bedste anbefaling</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Vi bestræber os hver dag på at levere en personlig og nærværende oplevelse for alle, der sætter sig i frisørstolen hos Højby Salon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '2rem' }}>
            {reviews.map((r, idx) => (
              <div key={idx} className={`glass-card reveal delay-${(idx % 2) + 1}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{r.name}</h3>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{r.date}</div>
                  </div>
                  <span className="badge" style={{ fontSize: '0.75rem' }}>{r.tag}</span>
                </div>

                <div style={{ display: 'flex', gap: '0.25rem', color: '#F59E0B', marginBottom: '1rem' }}>
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" />
                  ))}
                </div>

                <p style={{ color: 'var(--text-main)', fontSize: '0.975rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                  "{r.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark text-center">
        <div className="container reveal">
          <h2 style={{ fontSize: '2.75rem', color: '#FFFFFF', marginBottom: '1rem' }}>Bliv vores næste tilfredse kunde</h2>
          <p style={{ color: '#D3D7DC', fontSize: '1.1rem', marginBottom: '2rem' }}>Ring på 20 18 89 03 og få en god oplevelse i frisørstolen.</p>
          <a href="tel:+4520188903" className="btn btn-primary btn-lg btn-call-pulse">
            <Phone size={22} />
            <span>RING OG BOOK TID PÅ 20 18 89 03</span>
          </a>
        </div>
      </section>
    </div>
  );
}
