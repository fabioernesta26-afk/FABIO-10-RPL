import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Mail, ArrowLeft, CheckCircle, AlertCircle, KeyRound } from 'lucide-react';

/* ── Input Field Component ── */
const InputField = ({ id, label, type = 'text', value, onChange, placeholder, icon: Icon, iconColor, required }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label htmlFor={id} style={{
        fontSize: '0.82rem', fontWeight: 600,
        color: focused ? iconColor : '#9a9b9c',
        letterSpacing: '0.5px', transition: 'color 0.2s',
      }}>
        {label}
      </label>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <span style={{
          position: 'absolute', left: '14px', display: 'flex', alignItems: 'center',
          color: focused ? iconColor : 'rgba(197,198,199,0.4)',
          transition: 'color 0.2s', pointerEvents: 'none', zIndex: 1,
        }}>
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
      </div>
    </div>
  );
};

/* ── Main Component ── */
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email) { setError('Masukkan alamat email kamu.'); return; }
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setIsLoading(false);
    setSubmitted(true);
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

      {/* ── LEFT PANEL: Visual ── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="login-left-panel"
        style={{
          flex: '1 0 45%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4rem 3rem',
          background: 'linear-gradient(145deg, rgba(157,78,221,0.07) 0%, rgba(102,252,241,0.05) 100%)',
          borderRight: '1px solid rgba(255,255,255,0.05)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow blobs */}
        <motion.div animate={{ x: [0,20,0], y: [0,-15,0] }} transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(157,78,221,0.1), transparent 70%)', top: '-60px', right: '-60px', pointerEvents: 'none' }} />
        <motion.div animate={{ x: [0,-15,0], y: [0,20,0] }} transition={{ repeat: Infinity, duration: 13, ease: 'easeInOut' }}
          style={{ position: 'absolute', width: '250px', height: '250px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,252,241,0.08), transparent 70%)', bottom: '-40px', left: '-40px', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '360px' }}>
          {/* Animated key icon */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 120 }}
            style={{
              width: '80px', height: '80px', borderRadius: '22px',
              background: 'linear-gradient(135deg, var(--neon-purple), var(--neon-blue))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 2rem',
              boxShadow: '0 8px 32px rgba(157,78,221,0.3), 0 0 0 1px rgba(157,78,221,0.2)',
            }}
          >
            <KeyRound size={36} color="#0b0c10" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.75rem', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-highlight)' }}
          >
            Lupa Password?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ color: 'var(--text-main)', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '2.5rem' }}
          >
            Jangan khawatir! Masukkan email kamu dan kami akan kirimkan link untuk mereset password.
          </motion.p>

          {/* Steps */}
          {[
            { step: '01', text: 'Masukkan alamat email kamu' },
            { step: '02', text: 'Cek inbox atau folder spam' },
            { step: '03', text: 'Klik link dan buat password baru' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                padding: '10px 16px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                marginBottom: '10px', textAlign: 'left',
              }}
            >
              <span style={{
                fontSize: '0.7rem', fontWeight: 800, color: 'var(--neon-purple)',
                background: 'rgba(157,78,221,0.15)', padding: '3px 8px', borderRadius: '6px',
                letterSpacing: '0.5px', flexShrink: 0,
              }}>
                {item.step}
              </span>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-main)' }}>{item.text}</span>
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

          {/* Back to login */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <Link
              to="/login"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '0.85rem', color: 'var(--text-main)', textDecoration: 'none',
                marginBottom: '2.5rem', transition: 'color 0.2s',
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--neon-blue)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-main)'}
            >
              <ArrowLeft size={15} />
              Kembali ke Login
            </Link>
          </motion.div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              /* ── FORM STATE ── */
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 style={{
                  fontSize: '1.9rem', fontWeight: 700, marginBottom: '6px',
                  fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-highlight)',
                }}>
                  Reset Password
                </h2>
                <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                  Kami akan kirim link reset ke email kamu.
                </p>

                {/* Error */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      key="err"
                      initial={{ opacity: 0, y: -8, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        padding: '12px 16px', borderRadius: '10px', marginBottom: '1.25rem',
                        background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
                        color: '#fca5a5', fontSize: '0.88rem',
                      }}
                    >
                      <AlertCircle size={15} style={{ flexShrink: 0 }} />
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <InputField
                    id="fp-email"
                    label="ALAMAT EMAIL"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    icon={Mail}
                    iconColor="var(--neon-blue)"
                    required
                  />

                  <motion.button
                    whileHover={!isLoading ? { scale: 1.02, boxShadow: '0 8px 30px rgba(157,78,221,0.3)' } : {}}
                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                    type="submit"
                    disabled={isLoading}
                    style={{
                      marginTop: '0.5rem',
                      padding: '14px',
                      borderRadius: '11px',
                      border: 'none',
                      background: isLoading
                        ? 'rgba(157,78,221,0.25)'
                        : 'linear-gradient(135deg, var(--neon-purple) 0%, var(--neon-blue) 100%)',
                      color: isLoading ? 'var(--text-main)' : '#0b0c10',
                      fontWeight: 700,
                      fontSize: '1rem',
                      cursor: isLoading ? 'not-allowed' : 'pointer',
                      fontFamily: 'inherit',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'background 0.3s',
                      letterSpacing: '0.3px',
                    }}
                  >
                    {isLoading ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.75, ease: 'linear' }}
                          style={{ display: 'inline-block', width: '18px', height: '18px', border: '2.5px solid rgba(197,198,199,0.3)', borderTopColor: 'var(--text-highlight)', borderRadius: '50%' }}
                        />
                        Mengirim...
                      </>
                    ) : (
                      'Kirim Link Reset'
                    )}
                  </motion.button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                  Ingat password?{' '}
                  <Link to="/login" style={{ color: 'var(--neon-purple)', textDecoration: 'none', fontWeight: 600 }}>
                    Masuk sekarang
                  </Link>
                </p>
              </motion.div>
            ) : (
              /* ── SUCCESS STATE ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
                style={{ textAlign: 'center' }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: 'spring', stiffness: 150 }}
                  style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}
                >
                  <div style={{
                    width: '80px', height: '80px', borderRadius: '50%',
                    background: 'rgba(102,252,241,0.1)',
                    border: '2px solid rgba(102,252,241,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <CheckCircle size={42} color="var(--neon-blue)" strokeWidth={1.5} />
                  </div>
                </motion.div>

                <h2 style={{
                  fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.75rem',
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: 'var(--text-highlight)',
                }}>
                  Email Terkirim!
                </h2>

                <p style={{ color: 'var(--text-main)', lineHeight: 1.75, marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                  Kami telah mengirim link reset password ke:
                </p>
                <div style={{
                  padding: '10px 20px', borderRadius: '10px',
                  background: 'rgba(102,252,241,0.06)',
                  border: '1px solid rgba(102,252,241,0.2)',
                  marginBottom: '2rem', display: 'inline-block',
                }}>
                  <span style={{ color: 'var(--neon-blue)', fontWeight: 600, fontSize: '0.95rem' }}>{email}</span>
                </div>

                <p style={{ color: 'rgba(197,198,199,0.55)', fontSize: '0.82rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                  Cek inbox dan folder spam kamu. Link akan kadaluarsa dalam <strong style={{ color: 'var(--text-main)' }}>15 menit</strong>.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => { setSubmitted(false); setEmail(''); }}
                    style={{
                      padding: '13px',
                      borderRadius: '11px',
                      border: '1.5px solid rgba(255,255,255,0.1)',
                      background: 'rgba(255,255,255,0.04)',
                      color: 'var(--text-main)',
                      fontFamily: 'inherit',
                      fontSize: '0.92rem',
                      cursor: 'pointer',
                      fontWeight: 500,
                      transition: 'border-color 0.2s',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
                    onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  >
                    Coba email lain
                  </motion.button>

                  <Link to="/login" style={{ textDecoration: 'none' }}>
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(102,252,241,0.25)' }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        width: '100%',
                        padding: '13px',
                        borderRadius: '11px',
                        border: 'none',
                        background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))',
                        color: '#0b0c10',
                        fontFamily: 'inherit',
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        fontWeight: 700,
                        transition: 'all 0.2s',
                      }}
                    >
                      Kembali ke Login
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .login-left-panel { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default ForgotPassword;
