import { motion } from 'framer-motion';
import { Monitor, Server, Database, Smartphone, Layout, Cpu } from 'lucide-react';

const skillsData = [
  { name: 'Pemecahan masalah', iconName: 'Cpu', level: 90 },
  { name: 'Kerjasama tim', iconName: 'Server', level: 85 },
  { name: 'Disiplin & tepat waktu', iconName: 'Layout', level: 80 },
];

const getIcon = (iconName) => {
  switch (iconName) {
    case 'Monitor': return <Monitor size={40} color="var(--neon-blue)" />;
    case 'Server': return <Server size={40} color="var(--neon-purple)" />;
    case 'Database': return <Database size={40} color="#ffb703" />;
    case 'Smartphone': return <Smartphone size={40} color="#00d4ff" />;
    case 'Layout': return <Layout size={40} color="#ff006e" />;
    case 'Cpu': return <Cpu size={40} color="#06d6a0" />;
    default: return <Monitor size={40} color="var(--neon-blue)" />;
  }
};

const Skills = () => {
  return (
    <section id="skills" className="container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h2 style={{ fontSize: '3rem' }}>My Skills</h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="glass-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)' }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
          >
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '1.5rem',
              borderRadius: '50%',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
            }}>
              {getIcon(skill.iconName)}
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-highlight)' }}>{skill.name}</h3>

            <div style={{ width: '100%', background: 'rgba(255,255,255,0.1)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--neon-blue), var(--neon-purple))',
                  boxShadow: '0 0 10px var(--neon-blue)'
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
