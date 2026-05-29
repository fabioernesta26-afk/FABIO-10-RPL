import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const projectsData = [
  {
    id: 'chess',
    title: '♟ Permainan Catur',
    description: 'Permainan catur 2 pemain dengan logika gerakan lengkap. Mainkan langsung di browser!',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accentColor: 'var(--neon-blue)',
    icon: '♚',
  },
  {
    id: 'calculator',
    title: '🔢 Kalkulator',
    description: 'Kalkulator sederhana dengan desain futuristic. Hitung operasi matematika dasar dengan gaya!',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #1a0533 100%)',
    accentColor: 'var(--neon-purple)',
    icon: '⊞',
  }
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h2 style={{ fontSize: '3rem' }}>My Projects</h2>
        <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginTop: '1rem' }}>
          Klik untuk mencoba langsung!
        </p>
      </motion.div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '3rem',
        padding: '2rem 0'
      }}>
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
            whileHover={{ y: -12, scale: 1.03 }}
            onClick={() => navigate(`/project/${project.id}`)}
            className="glass-card"
            style={{
              cursor: 'pointer',
              overflow: 'hidden',
              position: 'relative',
              padding: 0,
            }}
          >
            {/* Card top gradient area with big icon */}
            <div style={{
              background: project.gradient,
              padding: '3rem 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Floating glow */}
              <motion.div
                style={{
                  position: 'absolute',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${project.accentColor}33, transparent 70%)`,
                  filter: 'blur(30px)',
                }}
                animate={{
                  x: ['-20px', '20px', '-20px'],
                  y: ['-10px', '10px', '-10px'],
                }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              />
              <span style={{ fontSize: '5rem', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 0 20px rgba(102, 252, 241, 0.5))' }}>
                {project.icon}
              </span>
            </div>

            {/* Card body */}
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: project.accentColor, marginBottom: '0.8rem' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {project.description}
              </p>
              <motion.span
                style={{
                  display: 'inline-block',
                  padding: '0.6rem 1.5rem',
                  border: `1px solid ${project.accentColor}`,
                  borderRadius: '30px',
                  color: project.accentColor,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                }}
                whileHover={{
                  background: project.accentColor,
                  color: '#0b0c10',
                }}
              >
                Mainkan →
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
