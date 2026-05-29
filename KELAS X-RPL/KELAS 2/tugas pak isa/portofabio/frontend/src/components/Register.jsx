import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, CheckCircle, AlertCircle, UserPlus } from 'lucide-react';

/* ── Input Field Component ── */
const InputField = ({ id, label, type = 'text', value, onChange, placeholder, icon: Icon, iconColor, suffix, required }) => {
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
        {suffix && (
          <span style={{ position: 'absolute', right: '14px', color: 'rgba(197,198,199,0.5)' }}>
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
};

/* ── Password Strength Bar ── */
const StrengthBar = ({ password }) => {
  const calc = () => {
    let s = 0;
    if (password.length >= 8) s++;
    if (/[A-Z]/.test(password)) s++;
    if (/[0-9]/.test(password)) s++;
    if (/[^A-Za-z0-9]/.test(password)) s++;
    return s;
  };
  const strength = calc();
  const labels = ['', 'Lemah', 'Cukup', 'Kuat', 'Sangat Kuat'];
  const colors = ['', '#ef4444', '#f59e0b', '#66fcf1', '#06d6a0'];
  if (!password) return null;
  return (
    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} style={{ marginTop: '4px' }}>
      <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} style={{
            flex: 1, height: '3px', borderRadius: '2px',
            background: i <= strength ? colors[strength] : 'rgba(255,255,255,0.08)',
            transition: 'background 0.3s',
          }} />
        ))}
      </div>
      <span style={{ fontSize: '0.75rem', color: colors[strength] }}>
        Kekuatan: {labels[strength]}
      </span>
    </motion.div>
  );
};

/* ── Main Component ── */
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [agreed, setAgreed] = useState(false);

  const passwordStrength = () => {
    let s = 0;
    if (password.length >= 8) s++;
    if (/[A-Z]/.test(password)) s++;
    if (/[0-9]/.test(password)) s++;
    if (/[^A-Za-z0-9]/.test(password)) s++;
    return s;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) { setError('Password dan konfirmasi tidak sama.'); return; }
    if (passwordStrength() < 2) { setError('Password terlalu lemah. Gunakan huruf besar, angka, atau simbol.'); return; }
    if (!agreed) { setError('Kamu harus menyetujui Syarat & Ketentuan terlebih dahulu.'); return; }
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsLoading(false);
    setSuccess(true);
    // TODO: Replace with real register API call
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
        className="login-left-panel"
        style={{
          flex: '1 0 42%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4rem 3rem',
          background: 'linear-gradient(145deg, rgba(102,252,241,0.05) 0%, rgba(157,78,221,0.08) 100%)',
          borderRight: '1px solid rgba(255,255,255,0.05)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <motion.div animate={{ x: [0,15,0], y: [0,-20,0] }} transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
          style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,252,241,0.07), transparent 70%)', top: '-80px', right: '-80px', pointerEvents: 'none' }} />
        <motion.div animate={{ x: [0,-12,0], y: [0,15,0] }} transition={{ repeat: Infinity, duration: 11, ease: 'easeInOut' }}
          style={{ position: 'absolute', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(157,78,221,0.08), transparent 70%)', bottom: '-50px', left: '-50px', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '350px' }}>
          <motion.div
            initial={{ scale: 0, rotate: 10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 120 }}
            style={{
              width: '80px', height: '80px', borderRadius: '22px',
              background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 2rem',
              boxShadow: '0 8px 32px rgba(102,252,241,0.25), 0 0 0 1px rgba(102,252,241,0.15)',
            }}
          >
            <UserPlus size={36} color="#0b0c10" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.75rem', fontFamily: "'Space Grotesk', sans-serif" }}
            className="gradient-text"
          >
            Bergabung Sekarang
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ color: 'var(--text-main)', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '2.5rem' }}
          >
            Buat akun dan mulai perjalananmu sebagai web developer profesional.
          </motion.p>

          {[
            { emoji: '⚡', text: 'Setup dalam hitungan detik' },
            { emoji: '🎨', text: 'Kelola portofolio dengan mudah' },
            { emoji: '🌐', text: 'Bagikan ke seluruh dunia' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85 + i * 0.15 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '10px 16px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                marginBottom: '10px', textAlign: 'left',
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{item.emoji}</span>
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
          flex: '1 0 58%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4rem 3rem',
          overflowY: 'auto',
        }}
      >
        <div style={{ width: '100%', maxWidth: '420px' }}>

          <AnimatePresence mode="wait">
            {success ? (
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
                  transition={{ delay: 0.1, type: 'spring', stiffness: 150 }}
                  style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}
                >
                  <div style={{
                    width: '90px', height: '90px', borderRadius: '50%',
                    background: 'rgba(6,214,160,0.1)',
                    border: '2px solid rgba(6,214,160,0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <CheckCircle size={48} color="#06d6a0" strokeWidth={1.5} />
                  </div>
                </motion.div>

                <h2 style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-highlight)' }}>
                  Akun Berhasil Dibuat!
                </h2>
                <p style={{ color: 'var(--text-main)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                  Halo, <strong style={{ color: 'var(--text-highlight)' }}>{name}</strong>! Akunmu sudah siap.
                </p>
                <div style={{
                  padding: '10px 20px', borderRadius: '10px',
                  background: 'rgba(6,214,160,0.07)',
                  border: '1px solid rgba(6,214,160,0.2)',
                  marginBottom: '2rem', display: 'inline-block',
                }}>
                  <span style={{ color: '#06d6a0', fontWeight: 600, fontSize: '0.9rem' }}>{email}</span>
                </div>

                <Link to="/login" style={{ textDecoration: 'none', display: 'block' }}>
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(102,252,241,0.25)' }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: '100%', padding: '14px', borderRadius: '11px', border: 'none',
                      background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))',
                      color: '#0b0c10', fontWeight: 700, fontSize: '1rem',
                      cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.3px',
                    }}
                  >
                    Masuk ke Akun
                  </motion.button>
                </Link>
              </motion.div>
            ) : (
              /* ── FORM STATE ── */
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '6px', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-highlight)' }}>
                  Buat Akun Baru
                </h2>
                <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                  Sudah punya akun?{' '}
                  <Link to="/login" style={{ color: 'var(--neon-blue)', textDecoration: 'none', fontWeight: 600 }}>
                    Masuk di sini
                  </Link>
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

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Full Name */}
                  <InputField
                    id="reg-name"
                    label="NAMA LENGKAP"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama kamu"
                    icon={User}
                    iconColor="var(--neon-blue)"
                    required
                  />

                  {/* Email */}
                  <InputField
                    id="reg-email"
                    label="ALAMAT EMAIL"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    icon={Mail}
                    iconColor="var(--neon-purple)"
                    required
                  />

                  {/* Password */}
                  <div>
                    <InputField
                      id="reg-password"
                      label="PASSWORD"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Min. 8 karakter"
                      icon={Lock}
                      iconColor="var(--neon-blue)"
                      required
                      suffix={
                        <button type="button" onClick={() => setShowPassword((v) => !v)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', display: 'flex', alignItems: 'center', padding: 0 }}
                          aria-label="Toggle password visibility">
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      }
                    />
                    <StrengthBar password={password} />
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <InputField
                      id="reg-confirm"
                      label="KONFIRMASI PASSWORD"
                      type={showConfirm ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Ulangi password"
                      icon={Lock}
                      iconColor="var(--neon-purple)"
                      required
                      suffix={
                        <button type="button" onClick={() => setShowConfirm((v) => !v)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', display: 'flex', alignItems: 'center', padding: 0 }}
                          aria-label="Toggle confirm password visibility">
                          {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      }
                    />
                    <AnimatePresence>
                      {confirmPassword && confirmPassword !== password && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                          style={{ fontSize: '0.78rem', color: '#ef4444', marginTop: '5px' }}>
                          Password tidak cocok
                        </motion.p>
                      )}
                      {confirmPassword && confirmPassword === password && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                          style={{ fontSize: '0.78rem', color: '#06d6a0', marginTop: '5px' }}>
                          ✓ Password cocok
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Terms agreement */}
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', userSelect: 'none', marginTop: '4px' }}>
                    <div
                      onClick={() => setAgreed((v) => !v)}
                      style={{
                        width: '18px', height: '18px', borderRadius: '5px', flexShrink: 0, marginTop: '1px',
                        border: `2px solid ${agreed ? 'var(--neon-blue)' : 'rgba(255,255,255,0.15)'}`,
                        background: agreed ? 'var(--neon-blue)' : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.2s', cursor: 'pointer',
                      }}
                    >
                      {agreed && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#0b0c10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span style={{ fontSize: '0.83rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                      Saya setuju dengan{' '}
                      <span style={{ color: 'var(--neon-blue)', fontWeight: 600 }}>Syarat Penggunaan</span>
                      {' '}dan{' '}
                      <span style={{ color: 'var(--neon-blue)', fontWeight: 600 }}>Kebijakan Privasi</span>
                    </span>
                  </label>

                  {/* Submit */}
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
                        Membuat akun...
                      </>
                    ) : (
                      'Daftar Sekarang'
                    )}
                  </motion.button>
                </form>
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

export default Register;
