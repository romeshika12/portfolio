import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const data = {
      access_key: '27d8d9ec-cef4-4fa2-9fad-d6eeafdc46c7',
      subject: 'New Portfolio Contact Message',
      name: form.name,
      email: form.email,
      message: form.message,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setSent(true);
        setForm({
          name: '',
          email: '',
          message: '',
        });

        setTimeout(() => {
          setSent(false);
        }, 4000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }

    setSending(false);
  };

  const inputStyle = {
    width: '100%',
    background: '#111',
    border: '1px solid #222',
    borderRadius: '12px',
    padding: '16px 20px',
    color: '#f0f0f0',
    fontSize: '15px',
    fontFamily: 'DM Sans, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  const socialLinkStyle = {
    fontSize: '14px',
    color: '#555',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  };

  return (
    <section
      id="contact"
      style={{
        padding: '100px 0',
        background: '#0d0d0d',
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <span className="section-label">Contact</span>

          <h2
            className="section-title"
            style={{
              marginBottom: '16px',
            }}
          >
            Let's Build Something Together
          </h2>

          <p
            style={{
              color: '#666',
              marginBottom: '56px',
              fontSize: '16px',
              lineHeight: '1.8',
            }}
          >
            Have a project in mind? I'd love to hear about it. Send me a
            message and let's talk.
          </p>

          <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                marginBottom: '16px',
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = '#e8ff47')}
                onBlur={(e) => (e.target.style.borderColor = '#222')}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = '#e8ff47')}
                onBlur={(e) => (e.target.style.borderColor = '#222')}
              />
            </div>

            <textarea
              name="message"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              required
              style={{
                ...inputStyle,
                minHeight: '160px',
                resize: 'vertical',
                marginBottom: '24px',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#e8ff47')}
              onBlur={(e) => (e.target.style.borderColor = '#222')}
            />

            <button
              type="submit"
              disabled={sending}
              style={{
                width: '100%',
                background: sent ? '#161616' : '#e8ff47',
                color: sent ? '#e8ff47' : '#0a0a0a',
                padding: '18px',
                borderRadius: '12px',
                border: sent ? '1px solid #e8ff47' : 'none',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                cursor: sending ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s',
                opacity: sending ? 0.7 : 1,
              }}
            >
              {sending
                ? 'Sending...'
                : sent
                ? '✓ Message Sent!'
                : 'Send Message →'}
            </button>
          </form>

          {/* Social Links */}
          <div
            style={{
              marginTop: '56px',
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://wa.me/94766835090"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = '#e8ff47')}
              onMouseLeave={(e) => (e.target.style.color = '#555')}
            >
              WhatsApp
            </a>

            <a
              href="https://www.behance.net/romeshichathur"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = '#e8ff47')}
              onMouseLeave={(e) => (e.target.style.color = '#555')}
            >
              Behance
            </a>

            <a
              href="https://www.linkedin.com/in/romeshika-abeygunarathna-a77a3a222"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = '#e8ff47')}
              onMouseLeave={(e) => (e.target.style.color = '#555')}
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/romeshika12"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = '#e8ff47')}
              onMouseLeave={(e) => (e.target.style.color = '#555')}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;