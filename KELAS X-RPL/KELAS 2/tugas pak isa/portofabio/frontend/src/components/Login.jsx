import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, AlertCircle } from 'lucide-react';

/* ──────────────────────────────────────────
   Shared input wrapper component
────────────────────────────────────────── */
const InputField = ({ id, label, type = 'text', value, onChange, placeholder, icon: Icon, iconColor, suffix, required }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label htmlFor={id} style={{ fontSize: '0.82rem', fontWeight: 600, color: focused ? 'var(--neon-blue)' : '#9a9b9c', letterSpacing: '0.5px', transition: 'color 0.2s' }}>
        {label}
      </label>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {/* Left icon */}
        <span style={{ position: 'absolute', left: '14px', display: 'flex', alignItems: 'center', color: focused ? iconColor : 'rgba(197,198,199,0.4)', transition: 'color 0.2s', pointerEvents: 'none', zIndex: 1 }}>
          <Icon size={16} />
        </span>

        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            padding: '13px 14px 13px 42px',
            paddingRight: suffix ? '46px' : '14px',
            borderRadius: '10px',
            border: `1.5px solid ${focused ? iconColor : 'rgba(255,255,255,0.08)'}`,
            background: 'rgba(255,255,255,0.04)',
            color: 'var(--text-highlight)',
            fontFamily: 'inherit',
            fontSize: '0.95rem',
            outline: 'none',
            transition: 'border-color 0.2s, box-shadow 0.2s',
            boxShadow: focused ? `0 0 0 3px ${iconColor}22` : 'none',
          }}
        />

        {/* Right suffix (eye toggle) */}
        {suffix && (
          <span style={{ position: 'absolute', right: '14px', display: 'flex', alignItems: 'center', color: 'rgba(197,198,199,0.5)' }}>
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────
   Login Page
────────────────────────────────────────── */
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) { setError('Email dan password wajib diisi.'); return; }
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setIsLoading(false);
    // Simulate wrong credentials for demo
    setError('Email atau password salah. Silakan coba lagi.');
    // TODO: Replace with real API call
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'stretch',
      fontFamily: "'Outfit', sans-serif",
      background: 'var(--bg-color)',
    }}>

      {/* ── LEFT PANEL: Branding ── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          flex: '1 0 45%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4rem 3rem',
          background: 'linear-gradient(145deg, rgba(102,252,241,0.06) 0%, rgba(157,78,221,0.08) 100%)',
          borderRight: '1px solid rgba(255,255,255,0.05)',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="login-left-panel"
      >
        {/* Background glow blobs */}
        <motion.div animate={{ x: [0,20,0], y: [0,-15,0] }} transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
          style={{ position: 'absolute', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,252,241,0.07), transparent 70%)', top: '-80px', right: '-80px', pointerEvents: 'none' }} />
        <motion.div animate={{ x: [0,-15,0], y: [0,20,0] }} transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
          style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(157,78,221,0.08), transparent 70%)', bottom: '-60px', left: '-60px', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '380px' }}>
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 120 }}
            style={{
              width: '80px', height: '80px', borderRadius: '22px',
              background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 2rem',
              boxShadow: '0 8px 32px rgba(102,252,241,0.25), 0 0 0 1px rgba(102,252,241,0.15)',
              fontSize: '2.2rem',
            }}
          >
            F
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '0.75rem', fontFamily: "'Space Grotesk', sans-serif" }}
            className="gradient-text"
          >
            Fabio Ernesta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{ color: 'var(--text-main)', lineHeight: '1.75', fontSize: '1rem', marginBottom: '2.5rem' }}
          >
            Selamat datang kembali! Masuk untuk mengakses dashboard portofolio kamu.
          </motion.p>

          {/* Feature list */}
          {[
            { emoji: '🚀', text: 'Lihat statistik proyek' },
            { emoji: '📊', text: 'Kelola portofolio kamu' },
            { emoji: '🔐', text: 'Data aman & terenkripsi' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '10px 16px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                marginBottom: '10px', textAlign: 'left',
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{item.emoji}</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── RIGHT PANEL: Form ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          flex: '1 0 55%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4rem 3rem',
        }}
      >
        <div style={{ width: '100%', maxWidth: '400px' }}>

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '6px', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-highlight)' }}>
              Masuk ke Akun
            </h2>
            <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', marginBottom: '2rem' }}>
              Belum punya akun?{' '}
              <Link to="/register" style={{ color: 'var(--neon-purple)', textDecoration: 'none', fontWeight: 600 }}>
                Daftar sekarang
              </Link>
            </p>
          </motion.div>

          {/* Error alert */}
          <AnimatePresence>
            {error && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '12px 16px', borderRadius: '10px', marginBottom: '1.5rem',
                  background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
                  color: '#fca5a5', fontSize: '0.88rem',
                }}
              >
                <AlertCircle size={16} style={{ flexShrink: 0 }} />
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <InputField
              id="login-email"
              label="ALAMAT EMAIL"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              icon={Mail}
              iconColor="var(--neon-blue)"
              required
            />

            <InputField
              id="login-password"
              label="PASSWORD"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              icon={Lock}
              iconColor="var(--neon-purple)"
              required
              suffix={
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', display: 'flex', alignItems: 'center', padding: 0 }}
                  aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              }
            />

            {/* Remember me & Forgot password row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', userSelect: 'none' }}>
                <div
                  onClick={() => setRememberMe((v) => !v)}
                  style={{
                    width: '18px', height: '18px', borderRadius: '5px', flexShrink: 0,
                    border: `2px solid ${rememberMe ? 'var(--neon-blue)' : 'rgba(255,255,255,0.15)'}`,
                    background: rememberMe ? 'var(--neon-blue)' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s', cursor: 'pointer',
                  }}
                >
                  {rememberMe && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#0b0c10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>Ingat saya</span>
              </label>

              <Link
                to="/forgot-password"
                style={{ fontSize: '0.85rem', color: 'var(--neon-blue)', textDecoration: 'none', fontWeight: 500, transition: 'opacity 0.2s' }}
                onMouseOver={(e) => (e.target.style.opacity = '0.75')}
                onMouseOut={(e) => (e.target.style.opacity = '1')}
              >
                Lupa password?
              </Link>
            </div>

            {/* Submit button */}
            <motion.button
              whileHover={!isLoading ? { scale: 1.02, boxShadow: '0 8px 30px rgba(102,252,241,0.3)' } : {}}
              whileTap={!isLoading ? { scale: 0.98 } : {}}
              type="submit"
              disabled={isLoading}
              style={{
                marginTop: '0.75rem',
                padding: '14px',
                borderRadius: '11px',
                border: 'none',
                background: isLoading
                  ? 'rgba(102,252,241,0.25)'
                  : 'linear-gradient(135deg, var(--neon-blue) 0%, var(--neon-purple) 100%)',
                color: isLoading ? 'var(--text-main)' : '#0b0c10',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                fontFamily: 'inherit',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'background 0.3s, box-shadow 0.3s',
                letterSpacing: '0.3px',
              }}
            >
              {isLoading ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.75, ease: 'linear' }}
                    style={{ display: 'inline-block', width: '18px', height: '18px', border: '2.5px solid rgba(197,198,199,0.4)', borderTopColor: 'var(--text-highlight)', borderRadius: '50%' }}
                  />
                  Memproses...
                </>
              ) : (
                'Masuk Sekarang'
              )}
            </motion.button>
          </motion.form>

          {/* Register link */}
          <p style={{ textAlign: 'center', marginTop: '1.75rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
            Belum punya akun?{' '}
            <Link to="/register" style={{ color: 'var(--neon-purple)', textDecoration: 'none', fontWeight: 600 }}>
              Daftar sekarang
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Responsive style override */}
      <style>{`
        @media (max-width: 768px) {
          .login-left-panel { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Login;
