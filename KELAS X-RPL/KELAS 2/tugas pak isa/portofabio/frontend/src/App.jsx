import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GithubSection from './components/GithubSection';
import Footer from './components/Footer';
import ChessGame from './components/ChessGame';
import Calculator from './components/Calculator';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <GithubSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-overlay" />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/chess" element={<ChessGame />} />
        <Route path="/project/calculator" element={<Calculator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
