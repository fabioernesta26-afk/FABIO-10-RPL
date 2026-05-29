import { motion } from 'framer-motion';

const educationData = [
  {
    id: 1,
    institution: "MTsN 1 sIDOARJO",
    degree: "DINIYAH",
    year: "2022 - 2026",
    description: "Mempelajari dasar-dasar agama dan bahasa Arab Dan kitab-kitab"
  },
  {
    id: 2,
    institution: "SMK Negeri 2 Buduran",
    degree: "Rekayasa Perangkat Lunak",
    year: "2025 - 2028",
    description: "Mempelajari dasar-dasar pemrograman web, basis data, dan desain antarmuka pengguna."
  }
];

const Education = () => {
  return (
    <section id="education" className="container" style={{ alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h2 style={{ fontSize: '3rem' }}>Education</h2>
      </motion.div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        maxWidth: '800px',
        width: '100%'
      }}>
        {educationData.map((item, index) => (
          <motion.div
            key={item.id}
            className="glass-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              borderLeft: '4px solid var(--neon-purple)',
              paddingLeft: '2rem'
            }}
          >
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-highlight)' }}>{item.degree}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', color: 'var(--neon-blue)', fontSize: '1.1rem', fontWeight: 'bold' }}>
              <span>{item.institution}</span>
              <span>{item.year}</span>
            </div>
            <p style={{ marginTop: '1rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
