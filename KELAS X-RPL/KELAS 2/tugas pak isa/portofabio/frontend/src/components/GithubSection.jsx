import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const GithubIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.5 5.5 0 0 0-.1 3.8 5.5 5.5 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const githubData = {
  username: "fabioernesta26-afk",
  url: "https://github.com/fabioernesta26-afk",
  reposCount: 1,
  followers: 9,
  topRepos: [
    { name: "FABIO-10-RPL", url: "https://github.com/fabioernesta26-afk/FABIO-10-RPL", stars: 2 }
  ]
};

const GithubSection = () => {
  return (
    <section id="github" className="container" style={{ alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h2 style={{ fontSize: '3rem' }}>My GitHub</h2>
      </motion.div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        maxWidth: '800px',
        width: '100%'
      }}>
        <motion.a
          href={githubData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)' }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            textDecoration: 'none',
            padding: '2rem 3rem',
            borderRadius: '20px'
          }}
        >
          <GithubIcon size={60} color="var(--text-highlight)" />
          <div>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-highlight)', margin: 0 }}>@{githubData.username}</h3>
            <p style={{ color: 'var(--neon-blue)', margin: '0.5rem 0 0 0', fontSize: '1.2rem' }}>
              {githubData.reposCount} Repositories • {githubData.followers} Followers
            </p>
          </div>
        </motion.a>

        {githubData.topRepos.length > 0 && (
          <div style={{ width: '100%', marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>Top Repositories</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {githubData.topRepos.map((repo, index) => (
                <motion.a
                  key={index}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <span style={{ fontSize: '1.2rem', color: 'var(--text-highlight)', fontWeight: 'bold' }}>{repo.name}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffb703' }}>
                    <Star size={20} fill="#ffb703" />
                    <span>{repo.stars}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GithubSection;
