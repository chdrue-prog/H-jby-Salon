import React, { useState } from 'react';
import { Phone, Eye, Camera } from 'lucide-react';
import Lightbox from '../components/Lightbox';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      url: '/images/exterior.jpg',
      title: 'Højby Salon Facade & Indgang',
      desc: 'Salonen udefra på hovedgaden i Højby med prisskilte, åbningstider og barberstænger.'
    },
    {
      id: 2,
      url: '/images/interior.jpg',
      title: 'Højby Salon Interiør & Barberstol',
      desc: 'Det hyggelige klippeområde med klassisk barberstol, rå stentapet, store spejle og trætæller.'
    }
  ];

  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-dark)', color: '#FFFFFF', padding: '5rem 0 4rem', textAlign: 'center' }}>
        <div className="container">
          <span className="badge badge-dark mb-2">Billedgalleri</span>
          <h1 style={{ fontSize: '3.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>Billeder af Højby Salon</h1>
          <p style={{ fontSize: '1.2rem', color: '#D6D3D1', maxWidth: '650px', margin: '0 auto' }}>
            Se vores salon både udefra og indendørs. Klik på et billede for at forstørre det.
          </p>
        </div>
      </section>

      {/* Gallery Grid featuring only real user photos */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '2.5rem' }}>
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className="glass-card" 
                style={{ padding: '0', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => setSelectedImage(item)}
              >
                <div style={{ position: 'relative', height: '380px', overflow: 'hidden' }}>
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(20,20,22,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    color: '#FFFFFF'
                  }}
                  className="gallery-overlay"
                  >
                    <Eye size={42} />
                  </div>
                </div>

                <div style={{ padding: '1.75rem' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.975rem', color: 'var(--text-muted)' }}>{item.desc}</p>
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
        <div className="container">
          <h2 style={{ fontSize: '2.75rem', color: '#FFFFFF', marginBottom: '1rem' }}>Besøg Højby Salon</h2>
          <p style={{ color: '#D6D3D1', fontSize: '1.1rem', marginBottom: '2rem' }}>Ring på 20 18 89 03 eller kom forbi i åbningstiden.</p>
          <a href="tel:+4520188903" className="btn btn-primary btn-lg btn-call-pulse">
            <Phone size={22} />
            <span>RING PÅ TLF 20 18 89 03</span>
          </a>
        </div>
      </section>
    </div>
  );
}
