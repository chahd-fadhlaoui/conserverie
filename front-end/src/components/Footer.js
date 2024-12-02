import React from 'react';
import logo from '../../src/assests/cn.png'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#6FBD9F',borderBottomRightRadius:"40px",borderTopRightRadius:"40px", color: '#fff', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Contenu du Footer */}
      <div className="footer-content" style={{ fontSize: '1.1rem' }}>

      <img 
          src={logo} 
          alt="Conserverie des Repas Logo" 
          style={{ width: '80px', marginRight: '1rem' }} 
        />
        <p>
          &copy; 2024 Conserverie des Repas. Tous droits réservés.
        </p>
        <p>
          Notre mission est de vous offrir des repas traditionnels tunisiens de qualité, préparés avec soin et passion.
          Nous nous engageons à préserver l'authenticité de la cuisine tunisienne tout en offrant une solution pratique pour
          savourer des plats faits maison, même à distance.
        </p>
      </div>

      {/* Icônes Sociales */}
      <div className="social-icons" style={{ display: 'flex', gap: '1rem' }}>
        <a href="https://facebook.com" style={{ color: '#fff', fontSize: '1.3rem', transition: 'color 0.3s ease' }} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://instagram.com" style={{ color: '#fff', fontSize: '1.3rem', transition: 'color 0.3s ease' }} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </footer>
  );
}
