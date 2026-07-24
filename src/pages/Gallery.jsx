import React, { useState } from 'react';
import { Phone, Eye } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import useScrollReveal from '../hooks/useScrollReveal';

import exteriorImg from '../assets/images/exterior.jpg';
import interiorImg from '../assets/images/interior.jpg';

export default function Gallery() {
  useScrollReveal();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      url: exteriorImg,
      title: 'Højby Salon Facade & Indgang',
      category: 'Salonen Udefra',
      desc: 'Salonen udefra på Svendborgvej 321 i Odense S med prisskilte, åbningstider og klassiske barberstænger.'
    },
    {
      id: 2,
      url: interiorImg,
      title: 'Højby Salon Interiør & Barberstol',
      category: 'Salonen Indendørs',
      desc: 'Det hyggelige klippeområde med rå stentapet, stort spejl, klassisk læder-barberstol og trætæller.'
    },
    {
      id: 3,
      url: exteriorImg,
      title: 'Prisskilte & Åbningstider',
      category: 'Facade & Skilte',
      desc: 'Tydelig skiltning foran salonen med priser (Herre 200,- | Børn 150,- | Pensionist 150,-) og Tlf 20 18 89 03.'
    },
    {
      id: 4,
      url: interiorImg,
      title: 'Klippestation & Stemning',
      category: 'Klippeområde',
      desc: 'Komfortable rammer med professionelle trimmere, saks og udstyr klar til dit besøg.'
    }
  ];

  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-dark)', color: '#FFFFFF', padding: '4.5rem 0 3.5rem', textAlign: 'center' }}>
        <div className="container animate-fade-in">
          <span className="badge badge-dark mb-2">Billedgalleri</span>
          <h1 style={{ fontSize: '3.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>Billeder af Højby Salon</h1>
          <p style={{ fontSize: '1.15rem', color: '#D3D7DC', maxWidth: '650px', margin: '0 auto' }}>
            Se vores salon både udefra og indendørs på Svendborgvej 321, 5260 Odense. Klik på et billede for at forstørre det.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '2rem' }}>
            {galleryItems.map((item, idx) => (
              <div 
                key={item.id} 
                className={`glass-card reveal delay-${(idx % 2) + 1}`} 
                style={{ padding: '0', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => setSelectedImage(item)}
              >
                <div style={{ position: 'relative', height: '360px', overflow: 'hidden', backgroundColor: '#1A1D20' }}>
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} 
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(28,32,36,0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    <div style={{ background: 'rgba(0,0,0,0.5)', padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
                      <Eye size={18} />
                      <span>Klik for at forstørre</span>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                    {item.category}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />

      {/* CTA */}
      <section className="section section-dark text-center">
        <div className="container reveal">
          <h2 style={{ fontSize: '2.75rem', color: '#FFFFFF', marginBottom: '1rem' }}>Besøg Højby Salon</h2>
          <p style={{ color: '#D3D7DC', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Svendborgvej 321, 5260 Odense (Højby) — Ring på 20 18 89 03 eller kom forbi i åbningstiden.
          </p>
          <a href="tel:+4520188903" className="btn btn-primary btn-lg btn-call-pulse">
            <Phone size={22} />
            <span>RING PÅ TLF 20 18 89 03</span>
          </a>
        </div>
      </section>
    </div>
  );
}
