import React from 'react';
import { Phone, Clock, MapPin, Navigation, HelpCircle } from 'lucide-react';

export default function Contact() {
  const faqs = [
    {
      q: 'Skal man bestille tid i forvejen?',
      a: 'Nej, vi tilbyder både tidsbestilling via telefon (20 18 89 03) og drop-in uden aftale. Hvis du kigger forbi som drop-in, klipper vi dig så hurtigt som muligt.'
    },
    {
      q: 'Hvad koster en herreklip og børneklip?',
      a: 'Herreklip koster 200,- kr. Børneklip (op til 12 år) og Pensionistklip koster 150,- kr.'
    },
    {
      q: 'Hvilke betalingsmuligheder har I?',
      a: 'Vi modtager MobilePay, kontant betaling samt alle almindelige betalingskort (Visa, Mastercard, Dankort).'
    },
    {
      q: 'Hvor ligger salonen og er der parkering?',
      a: 'Salonen ligger på Svendborgvej 321, 5260 Odense (i Højby). Der er nem og gratis parkering lige foran døren.'
    }
  ];

  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-dark)', color: '#FFFFFF', padding: '4.5rem 0 3.5rem', textAlign: 'center' }}>
        <div className="container">
          <span className="badge badge-dark mb-2">Kontakt & Find Os</span>
          <h1 style={{ fontSize: '3.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>Kontakt Højby Salon</h1>
          <p style={{ fontSize: '1.15rem', color: '#D6D3D1', maxWidth: '650px', margin: '0 auto' }}>
            Vi glæder os til at høre fra dig eller byde dig velkommen i salonen på Svendborgvej.
          </p>
        </div>
      </section>

      {/* Main Call Banner */}
      <section style={{ marginTop: '-2rem', marginBottom: '3.5rem', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="dark-card text-center" style={{ background: 'linear-gradient(135deg, #2D3238 0%, #1C2024 100%)', border: '2px solid var(--accent-gold)', padding: '3rem 2rem', boxShadow: 'var(--shadow-md)' }}>
            <span className="badge badge-dark mb-2">Direkte Opkald</span>
            <h2 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>Ring for Tidsbestilling</h2>
            <p style={{ fontSize: '1.1rem', color: '#D6D3D1', maxWidth: '600px', margin: '0 auto 1.75rem' }}>
              Vi har ingen online booking-formular. Ring direkte til os på telefonen — det er hurtigt, nemt og personligt.
            </p>
            
            <a href="tel:+4520188903" className="btn btn-primary btn-lg btn-call-pulse" style={{ fontSize: '1.35rem', padding: '1.1rem 2.5rem' }}>
              <Phone size={26} />
              <span>TLF: 20 18 89 03</span>
            </a>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '2rem' }}>
            {/* Opening Hours Card */}
            <div className="glass-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-dark)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyCenter: 'center' }}>
                  <Clock size={24} style={{ margin: 'auto' }} />
                </div>
                <h3 style={{ fontSize: '1.75rem' }}>Åbningstider</h3>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '1.05rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.6rem', borderBottom: '1px solid var(--accent-border)' }}>
                  <span style={{ fontWeight: 600 }}>Tirsdag - Fredag</span>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>10:00 – 17:30</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.6rem', borderBottom: '1px solid var(--accent-border)' }}>
                  <span style={{ fontWeight: 600 }}>Lørdag - Søndag</span>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>10:00 – 15:00</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.6rem' }}>
                  <span style={{ fontWeight: 600 }}>Mandag</span>
                  <span style={{ color: '#EF4444', fontWeight: 700 }}>Lukket</span>
                </li>
              </ul>

              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--accent-soft)', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                💡 <strong>Drop-in:</strong> Du er altid velkommen til at kigge forbi i åbningstiden uden forudgående aftale!
              </div>
            </div>

            {/* Location & Address Card */}
            <div className="glass-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-dark)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyCenter: 'center' }}>
                  <MapPin size={24} style={{ margin: 'auto' }} />
                </div>
                <h3 style={{ fontSize: '1.75rem' }}>Adresse & Salon</h3>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.35rem', color: 'var(--text-main)', marginBottom: '0.35rem' }}>Højby Salon</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  Svendborgvej 321<br />
                  5260 Odense (Højby)
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>Telefonnummer:</div>
                <a href="tel:+4520188903" style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-gold)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={20} />
                  <span>20 18 89 03</span>
                </a>
              </div>

              <a 
                href="https://maps.google.com/?q=Svendborgvej+321,+5260+Odense" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline" 
                style={{ width: '100%' }}
              >
                <Navigation size={18} />
                <span>Åbn Svendborgvej 321 i Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-card)', padding: '3.5rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '640px', margin: '0 auto 2.5rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Placering på Svendborgvej 321</h2>
            <p style={{ color: 'var(--text-muted)' }}>Nem adgang og gratis parkering foran salonen i 5260 Odense (Højby)</p>
          </div>

          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid var(--accent-border)', height: '400px' }}>
            <iframe 
              title="Højby Salon Svendborgvej 321 Odense"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2268.5!2d10.435!3d55.335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ce00000000000%3A0x0!2zU3ZlbmRib3JndmVqIDMyMSwgNTI2MCBPZGVuc2U!5e0!3m2!1sda!2sdk!4v1700000000000!5m2!1sda!2sdk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="badge mb-2">Spørgsmål & Svar</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>Ofte Stillede Spørgsmål</h2>
            <p style={{ color: 'var(--text-muted)' }}>Har du spørgsmål inden dit besøg?</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass-card">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <HelpCircle size={20} style={{ color: 'var(--accent-gold)' }} />
                  <span>{faq.q}</span>
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.6, paddingLeft: '2.25rem' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
