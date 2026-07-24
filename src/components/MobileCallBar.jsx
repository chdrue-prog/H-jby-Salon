import React from 'react';
import { Phone } from 'lucide-react';

export default function MobileCallBar() {
  return (
    <div className="mobile-call-bar">
      <a href="tel:+4520188903" className="mobile-call-btn">
        <Phone size={20} className="text-gold" />
        <span>RING & BOOK TID — 20 18 89 03</span>
      </a>
    </div>
  );
}
