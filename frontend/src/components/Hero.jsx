import { motion } from 'framer-motion';

// Floating particles config
const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 6 + 5,
  delay: Math.random() * 4,
  color: i % 2 === 0 ? 'rgba(102,252,241,0.5)' : 'rgba(157,78,221,0.5)',
}));

const Hero = () => {
  return (
    <section id="hero" className="container" style={{ alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.h2
          className="gradient-text"
          style={{ fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '4px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          ✦ PORTOFOLIO ✦
        </motion.h2>

        <motion.h1
          style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        >
          Fabio Ernesta
        </motion.h1>

        <motion.p
          style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: 'var(--neon-blue)', marginBottom: '0.5rem' }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Web Developer
        </motion.p>

        <motion.p
          style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '3rem', letterSpacing: '1px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Siswa RPL · SMK Negeri 2 Buduran
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(157, 78, 221, 0.6)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '1rem 2.5rem',
              background: 'transparent',
              border: '2px solid var(--neon-purple)',
              color: 'var(--text-highlight)',
              textDecoration: 'none',
              borderRadius: '30px',
              fontSize: '1.05rem',
              fontWeight: 600,
              boxShadow: '0 0 15px rgba(157, 78, 221, 0.3)',
              display: 'inline-block',
              transition: 'all 0.3s',
            }}
          >
            Explore →
          </motion.a>

          <motion.a
            href="https://github.com/fabioernesta26-afk"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(102, 252, 241, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '1rem 2.5rem',
              background: 'rgba(102,252,241,0.08)',
              border: '2px solid var(--neon-blue)',
              color: 'var(--neon-blue)',
              textDecoration: 'none',
              borderRadius: '30px',
              fontSize: '1.05rem',
              fontWeight: 600,
              display: 'inline-block',
              transition: 'all 0.3s',
            }}
          >
            GitHub ↗
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 1 }}
      >
        <span style={{ fontSize: '0.75rem', color: 'var(--text-main)', letterSpacing: '2px' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{ width: '24px', height: '38px', border: '2px solid var(--glass-border)', borderRadius: '12px', display: 'flex', justifyContent: 'center', paddingTop: '6px' }}
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            style={{ width: '4px', height: '8px', borderRadius: '2px', background: 'var(--neon-blue)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
