import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '20px 32px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #222' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <a href="#home" style={{
        fontFamily: 'inherit', fontWeight: 800, fontSize: '20px',
        color: '#e8ff47',
      }}>
        Romeshika<span style={{ color: '#f0f0f0' }}>.</span>
      </a>

      {/* Desktop Links */}
      <ul style={{
        display: 'flex', gap: '40px', listStyle: 'none',
        '@media (max-width: 768px)': { display: 'none' }
      }} className="desktop-nav">
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} style={{
              fontSize: '14px', fontWeight: 500, color: '#888',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = '#f0f0f0'}
              onMouseLeave={e => e.target.style.color = '#888'}
            >{link}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" style={{
        background: '#e8ff47', color: '#0a0a0a',
        padding: '10px 24px', borderRadius: '40px',
        fontFamily: 'sans-serif', fontWeight: 700, fontSize: '14px',
        transition: 'transform 0.2s',
      }}
        onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
      >
        Hire Me
      </a>
    </nav>
  );
};

export default Navbar;