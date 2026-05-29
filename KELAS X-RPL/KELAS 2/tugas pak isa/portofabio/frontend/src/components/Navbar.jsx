import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (!isHome) {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub', href: '#github' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: scrolled ? '1rem' : '2rem',
        transition: 'all 0.3s ease-in-out',
        background: scrolled ? 'rgba(11, 12, 16, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
      }}
    >
      <div className="glass-card" style={{
        display: 'flex',
        gap: '2rem',
        padding: '1rem 2.5rem',
        borderRadius: '50px',
        border: scrolled ? '1px solid var(--neon-purple)' : '1px solid var(--glass-border)',
      }}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            style={{
              textDecoration: 'none',
              color: 'var(--text-main)',
              fontSize: '1rem',
              fontWeight: 600,
              transition: 'color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.color = 'var(--neon-blue)')}
            onMouseOut={(e) => (e.target.style.color = 'var(--text-main)')}
          >
            {link.name}
          </a>
        ))}
        <div style={{ width: '1px', background: 'var(--glass-border)', margin: '0 0.5rem' }}></div>
        <Link
          to="/login"
          style={{
            textDecoration: 'none',
            color: 'var(--neon-purple)',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.color = 'var(--neon-blue)')}
          onMouseOut={(e) => (e.target.style.color = 'var(--neon-purple)')}
        >
          Login
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
