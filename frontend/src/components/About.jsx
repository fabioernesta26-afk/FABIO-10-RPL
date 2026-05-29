import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="container" style={{ alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', maxWidth: '800px' }}
      >
        <div className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
          <motion.div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle at center, rgba(0, 212, 255, 0.1) 0%, transparent 50%)',
              zIndex: 0,
              pointerEvents: 'none'
            }}
            animate={{
              x: ['-10%', '10%', '-10%'],
              y: ['-10%', '10%', '-10%'],
            }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            />

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Me</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
              Siswa SMK jurusan Rekayasa Perangkat Lunak dengan minat besar pada matematika dan pengembangan perangkat lunak. Fokus pada logika berpikir yang kuat untuk membangun aplikasi yang efektif.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
