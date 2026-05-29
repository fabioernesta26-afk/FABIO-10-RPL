import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        textAlign: 'center',
        padding: '3rem 2rem',
        borderTop: '1px solid var(--glass-border)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.p
          className="gradient-text"
          style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Fabio Ernesta
        </motion.p>
        <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          Web Developer · Sidoarjo, Indonesia
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {['#hero', '#about', '#education', '#skills', '#projects', '#github'].map((href) => (
            <a
              key={href}
              href={href}
              style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s', textTransform: 'capitalize' }}
              onMouseOver={(e) => (e.target.style.color = 'var(--neon-blue)')}
              onMouseOut={(e) => (e.target.style.color = 'var(--text-main)')}
            >
              {href.replace('#', '')}
            </a>
          ))}
        </div>

        <div style={{ height: '1px', background: 'var(--glass-border)', marginBottom: '1.5rem' }} />

        <p style={{ fontSize: '0.82rem', color: 'rgba(197,198,199,0.5)' }}>
          © {currentYear} Fabio Ernesta. Dibuat dengan ❤️ menggunakan React & Framer Motion.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
