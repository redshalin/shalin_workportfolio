import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: '20px 0',
      background: 'rgba(10, 25, 47, 0.85)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      borderBottom: '1px solid rgba(0, 210, 255, 0.1)'
    }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr auto 1fr', 
        alignItems: 'center',
        padding: '0 20px'
      }}>
        <a href="#hero" style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--white)', letterSpacing: '-1px', textDecoration: 'none' }}>
          Shalin<span style={{ color: 'var(--primary)' }}>.</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="mobile-hidden" style={{ display: 'flex', gap: '35px', alignItems: 'center' }}>
          <a href="#about" className="nav-link" style={{ fontSize: '14px', color: 'var(--text-main)', fontWeight: '500' }}>About</a>
          <a href="#skills" className="nav-link" style={{ fontSize: '14px', color: 'var(--text-main)', fontWeight: '500' }}>Skills</a>
          <a href="#experience" className="nav-link" style={{ fontSize: '14px', color: 'var(--text-main)', fontWeight: '500' }}>Experience</a>
          <a href="#projects" className="nav-link" style={{ fontSize: '14px', color: 'var(--text-main)', fontWeight: '500' }}>Projects</a>
        </div>

        {/* Desktop Resume Button */}
        <div className="mobile-hidden" style={{ textAlign: 'right' }}>
          <a href="#contact" className="glow-btn" style={{ padding: '8px 24px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="desktop-hidden" style={{ gridColumn: '3', textAlign: 'right' }}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer' }}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop & Overlay */}
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <div 
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(2, 12, 27, 0.7)',
              backdropFilter: 'blur(4px)',
              zIndex: 998
            }}
          />
          
          {/* Mobile Menu Sidebar */}
          <div style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: 'min(300px, 100vw)',
            height: '100vh',
            background: 'var(--bg-darker)',
            padding: '80px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            boxShadow: '-10px 0 30px rgba(2, 12, 27, 0.5)',
            zIndex: 999
          }}>
            <a href="#about" onClick={() => setIsOpen(false)} style={{ color: 'var(--primary)', fontSize: '18px' }}>About</a>
            <a href="#skills" onClick={() => setIsOpen(false)} style={{ color: 'var(--primary)', fontSize: '18px' }}>Skills</a>
            <a href="#experience" onClick={() => setIsOpen(false)} style={{ color: 'var(--primary)', fontSize: '18px' }}>Experience</a>
            <a href="#projects" onClick={() => setIsOpen(false)} style={{ color: 'var(--primary)', fontSize: '18px' }}>Projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="glow-btn" style={{ textAlign: 'center' }}>Resume</a>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
