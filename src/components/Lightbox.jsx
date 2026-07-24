import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="lightbox-modal" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Luk billede">
          <X size={32} />
        </button>
        <img 
          src={image.url} 
          alt={image.title || 'Galleri Billede'} 
          style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-md)', maxHeight: '80vh', objectFit: 'contain' }}
        />
        {image.title && (
          <div style={{ color: '#FFFFFF', textAlign: 'center', marginTop: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>
            {image.title}
          </div>
        )}
      </div>
    </div>
  );
}
