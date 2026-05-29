const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

// Mock Data
const profile = {
  name: "Fabio Ernesta",
  role: "Web Developer",
  bio: "Halo! Saya adalah seorang pengembang web yang antusias menciptakan aplikasi modern, interaktif, dan futuristik. Saya senang mengeksplorasi teknologi baru dan membangun pengalaman digital yang luar biasa.",
};

const projects = [
  {
    id: 1,
    title: "Neon Nexus",
    description: "A cyberpunk-themed social network built with React and Three.js.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    title: "Quantum E-Commerce",
    description: "Next-generation shopping experience with zero-gravity product previews.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    title: "Holo Dashboard",
    description: "An analytics dashboard featuring glassmorphism and real-time 3D charts.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
  }
];

const education = [
  {
    id: 1,
    institution: "Universitas Teknologi Masa Depan",
    degree: "S1 Teknik Informatika",
    year: "2020 - 2024",
    description: "Lulus dengan predikat Cum Laude. Fokus pada pengembangan sistem terdistribusi dan UI/UX interaktif."
  },
  {
    id: 2,
    institution: "SMK Negeri 1 Inovasi",
    degree: "Rekayasa Perangkat Lunak",
    year: "2017 - 2020",
    description: "Mempelajari dasar-dasar pemrograman web, basis data, dan desain antarmuka pengguna."
  }
];

const skills = [
  { name: 'React', iconName: 'Monitor', level: 90 },
  { name: 'Node.js / Express', iconName: 'Server', level: 85 },
  { name: 'MySQL / PostgreSQL', iconName: 'Database', level: 80 },
  { name: 'React Native', iconName: 'Smartphone', level: 75 },
  { name: 'UI/UX Design', iconName: 'Layout', level: 85 },
  { name: 'System Architecture', iconName: 'Cpu', level: 70 },
];

const github = {
  username: "fabioernesta",
  url: "https://github.com/fabioernesta",
  reposCount: 42,
  followers: 120,
  topRepos: [
    { name: "neon-nexus", url: "https://github.com/fabioernesta/neon-nexus", stars: 45 },
    { name: "quantum-ecommerce", url: "https://github.com/fabioernesta/quantum-ecommerce", stars: 32 }
  ]
};

// Routes
app.get('/api/profile', (req, res) => {
  res.json(profile);
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/education', (req, res) => {
  res.json(education);
});

app.get('/api/skills', (req, res) => {
  res.json(skills);
});

app.get('/api/github', (req, res) => {
  res.json(github);
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
