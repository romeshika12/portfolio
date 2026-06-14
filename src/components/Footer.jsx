import React from 'react';

const Footer = () => (
  <footer style={{
    borderTop: '1px solid #1a1a1a', padding: '32px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  }}>
    <span style={{ fontFamily: 'inherit', fontWeight: 800, color: '#e8ff47' }}>
      Romeshika.
    </span>
    <span style={{ fontSize: '13px', color: '#444' }}>
      © 2024 — Designed & Built by Chathu with ❤️
    </span>
    <a href="#home" style={{
      fontSize: '13px', color: '#555',
      transition: 'color 0.2s',
    }}
      onMouseEnter={e => e.target.style.color = '#e8ff47'}
      onMouseLeave={e => e.target.style.color = '#555'}
    >Back to top ↑</a>
  </footer>
);

export default Footer;