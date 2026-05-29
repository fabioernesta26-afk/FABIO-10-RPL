import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Calculator = () => {
  const navigate = useNavigate();
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [history, setHistory] = useState([]);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const toggleSign = () => {
    setDisplay(String(-parseFloat(display)));
  };

  const inputPercent = () => {
    setDisplay(String(parseFloat(display) / 100));
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (prevValue == null) {
      setPrevValue(inputValue);
    } else if (operator) {
      const currentValue = prevValue;
      let result;

      switch (operator) {
        case '+': result = currentValue + inputValue; break;
        case '-': result = currentValue - inputValue; break;
        case '×': result = currentValue * inputValue; break;
        case '÷': result = inputValue !== 0 ? currentValue / inputValue : 'Error'; break;
        default: result = inputValue;
      }

      if (nextOperator === '=') {
        const expr = `${currentValue} ${operator} ${inputValue} = ${result}`;
        setHistory(prev => [expr, ...prev].slice(0, 10));
      }

      setPrevValue(typeof result === 'number' ? result : null);
      setDisplay(String(result));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator === '=' ? null : nextOperator);
  };

  const buttons = [
    { label: 'AC', type: 'fn', action: clear, color: '#ff6b6b' },
    { label: '±', type: 'fn', action: toggleSign, color: 'var(--neon-blue)' },
    { label: '%', type: 'fn', action: inputPercent, color: 'var(--neon-blue)' },
    { label: '÷', type: 'op', action: () => performOperation('÷'), color: 'var(--neon-purple)' },
    
    { label: '7', type: 'num', action: () => inputDigit(7) },
    { label: '8', type: 'num', action: () => inputDigit(8) },
    { label: '9', type: 'num', action: () => inputDigit(9) },
    { label: '×', type: 'op', action: () => performOperation('×'), color: 'var(--neon-purple)' },
    
    { label: '4', type: 'num', action: () => inputDigit(4) },
    { label: '5', type: 'num', action: () => inputDigit(5) },
    { label: '6', type: 'num', action: () => inputDigit(6) },
    { label: '-', type: 'op', action: () => performOperation('-'), color: 'var(--neon-purple)' },
    
    { label: '1', type: 'num', action: () => inputDigit(1) },
    { label: '2', type: 'num', action: () => inputDigit(2) },
    { label: '3', type: 'num', action: () => inputDigit(3) },
    { label: '+', type: 'op', action: () => performOperation('+'), color: 'var(--neon-purple)' },
    
    { label: '0', type: 'num', action: () => inputDigit(0), wide: true },
    { label: '.', type: 'num', action: inputDecimal },
    { label: '=', type: 'eq', action: () => performOperation('=') },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg-color)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '7rem',
      paddingBottom: '4rem',
      position: 'relative',
      zIndex: 10,
    }}>
      {/* Back button */}
      <motion.button
        onClick={() => navigate('/')}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        style={{
          position: 'fixed',
          top: '6rem',
          left: '2rem',
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          color: 'var(--neon-blue)',
          padding: '0.7rem 1.5rem',
          borderRadius: '30px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: 600,
          backdropFilter: 'blur(12px)',
          zIndex: 50,
        }}
      >
        ← Kembali
      </motion.button>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}
      >
        🔢 Kalkulator
      </motion.h1>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Calculator body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card"
          style={{
            padding: '1.5rem',
            borderRadius: '24px',
            width: '340px',
            boxShadow: '0 0 40px rgba(157, 78, 221, 0.15)',
          }}
        >
          {/* Display */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '16px',
            padding: '1.5rem',
            marginBottom: '1rem',
            textAlign: 'right',
            overflow: 'hidden',
            border: '1px solid rgba(102, 252, 241, 0.15)',
          }}>
            {operator && prevValue != null && (
              <div style={{
                fontSize: '0.9rem',
                color: 'var(--neon-purple)',
                marginBottom: '0.3rem',
                opacity: 0.7,
              }}>
                {prevValue} {operator}
              </div>
            )}
            <AnimatePresence mode="wait">
              <motion.div
                key={display}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                style={{
                  fontSize: display.length > 10 ? '1.8rem' : display.length > 7 ? '2.2rem' : '2.8rem',
                  fontWeight: 700,
                  color: 'var(--text-highlight)',
                  fontFamily: "'Space Grotesk', monospace",
                  textShadow: '0 0 20px rgba(102, 252, 241, 0.5)',
                  wordBreak: 'break-all',
                }}
              >
                {display}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Buttons grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px',
          }}>
            {buttons.map((btn) => (
              <motion.button
                key={btn.label}
                onClick={btn.action}
                whileHover={{ scale: 1.08, brightness: 1.2 }}
                whileTap={{ scale: 0.92 }}
                style={{
                  gridColumn: btn.wide ? 'span 2' : 'span 1',
                  padding: '1.1rem',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  border: 'none',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  ...(btn.type === 'eq' ? {
                    background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))',
                    color: '#fff',
                    boxShadow: '0 0 20px rgba(102, 252, 241, 0.3)',
                  } : btn.type === 'op' ? {
                    background: 'rgba(157, 78, 221, 0.2)',
                    color: btn.color,
                    border: `1px solid ${btn.color}44`,
                  } : btn.type === 'fn' ? {
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: btn.color,
                    border: '1px solid rgba(255,255,255,0.1)',
                  } : {
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'var(--text-highlight)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }),
                }}
              >
                {btn.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* History panel */}
        <div className="glass-card" style={{ padding: '1.2rem', minWidth: '220px', maxWidth: '280px' }}>
          <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--neon-purple)' }}>📋 Riwayat</h4>
          {history.length === 0 ? (
            <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', opacity: 0.5 }}>
              Belum ada perhitungan
            </p>
          ) : (
            history.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-main)',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  fontFamily: "'Space Grotesk', monospace",
                }}
              >
                {entry}
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
