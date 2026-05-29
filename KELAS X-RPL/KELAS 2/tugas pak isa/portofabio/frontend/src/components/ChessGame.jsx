import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Piece definitions
const PIECES = {
  wK: '♔', wQ: '♕', wR: '♖', wB: '♗', wN: '♘', wP: '♙',
  bK: '♚', bQ: '♛', bR: '♜', bB: '♝', bN: '♞', bP: '♟',
};

const initialBoard = () => [
  ['bR','bN','bB','bQ','bK','bB','bN','bR'],
  ['bP','bP','bP','bP','bP','bP','bP','bP'],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  ['wP','wP','wP','wP','wP','wP','wP','wP'],
  ['wR','wN','wB','wQ','wK','wB','wN','wR'],
];

const getColor = (piece) => piece ? piece[0] : null;

const isValidMove = (board, fromR, fromC, toR, toC, piece) => {
  const color = getColor(piece);
  const target = board[toR][toC];
  
  // Can't capture own piece
  if (target && getColor(target) === color) return false;
  
  const type = piece[1];
  const dr = toR - fromR;
  const dc = toC - fromC;
  const absDr = Math.abs(dr);
  const absDc = Math.abs(dc);

  switch (type) {
    case 'P': {
      const dir = color === 'w' ? -1 : 1;
      const startRow = color === 'w' ? 6 : 1;
      // Move forward
      if (dc === 0 && !target) {
        if (dr === dir) return true;
        if (fromR === startRow && dr === 2 * dir && !board[fromR + dir][fromC]) return true;
      }
      // Capture diagonal
      if (absDc === 1 && dr === dir && target) return true;
      return false;
    }
    case 'R': {
      if (dr !== 0 && dc !== 0) return false;
      return isPathClear(board, fromR, fromC, toR, toC);
    }
    case 'N': {
      return (absDr === 2 && absDc === 1) || (absDr === 1 && absDc === 2);
    }
    case 'B': {
      if (absDr !== absDc) return false;
      return isPathClear(board, fromR, fromC, toR, toC);
    }
    case 'Q': {
      if (dr !== 0 && dc !== 0 && absDr !== absDc) return false;
      return isPathClear(board, fromR, fromC, toR, toC);
    }
    case 'K': {
      return absDr <= 1 && absDc <= 1;
    }
    default:
      return false;
  }
};

const isPathClear = (board, fromR, fromC, toR, toC) => {
  const stepR = toR === fromR ? 0 : (toR > fromR ? 1 : -1);
  const stepC = toC === fromC ? 0 : (toC > fromC ? 1 : -1);
  let r = fromR + stepR;
  let c = fromC + stepC;
  while (r !== toR || c !== toC) {
    if (board[r][c]) return false;
    r += stepR;
    c += stepC;
  }
  return true;
};

const ChessGame = () => {
  const navigate = useNavigate();
  const [board, setBoard] = useState(initialBoard);
  const [selected, setSelected] = useState(null);
  const [turn, setTurn] = useState('w');
  const [captured, setCaptured] = useState({ w: [], b: [] });
  const [moveHistory, setMoveHistory] = useState([]);
  const [validMoves, setValidMoves] = useState([]);

  const getValidMovesForPiece = useCallback((board, r, c, piece) => {
    const moves = [];
    for (let tr = 0; tr < 8; tr++) {
      for (let tc = 0; tc < 8; tc++) {
        if (isValidMove(board, r, c, tr, tc, piece)) {
          moves.push([tr, tc]);
        }
      }
    }
    return moves;
  }, []);

  const handleClick = (r, c) => {
    const piece = board[r][c];

    if (selected) {
      const [sr, sc] = selected;
      const selectedPiece = board[sr][sc];

      if (sr === r && sc === c) {
        setSelected(null);
        setValidMoves([]);
        return;
      }

      // If clicking another own piece, select that instead
      if (piece && getColor(piece) === turn) {
        setSelected([r, c]);
        setValidMoves(getValidMovesForPiece(board, r, c, piece));
        return;
      }

      if (isValidMove(board, sr, sc, r, c, selectedPiece)) {
        const newBoard = board.map(row => [...row]);
        const capturedPiece = newBoard[r][c];
        newBoard[r][c] = selectedPiece;
        newBoard[sr][sc] = null;
        setBoard(newBoard);
        setSelected(null);
        setValidMoves([]);

        if (capturedPiece) {
          setCaptured(prev => ({
            ...prev,
            [getColor(capturedPiece)]: [...prev[getColor(capturedPiece)], capturedPiece]
          }));
        }

        const colLetters = 'abcdefgh';
        const moveStr = `${PIECES[selectedPiece]} ${colLetters[sc]}${8-sr} → ${colLetters[c]}${8-r}`;
        setMoveHistory(prev => [...prev, moveStr]);
        setTurn(turn === 'w' ? 'b' : 'w');
      }
    } else {
      if (piece && getColor(piece) === turn) {
        setSelected([r, c]);
        setValidMoves(getValidMovesForPiece(board, r, c, piece));
      }
    }
  };

  const resetGame = () => {
    setBoard(initialBoard());
    setSelected(null);
    setTurn('w');
    setCaptured({ w: [], b: [] });
    setMoveHistory([]);
    setValidMoves([]);
  };

  const isValidTarget = (r, c) => validMoves.some(([vr, vc]) => vr === r && vc === c);

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
        style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}
      >
        ♚ Permainan Catur
      </motion.h1>

      {/* Turn indicator */}
      <motion.div
        key={turn}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{
          padding: '0.5rem 1.5rem',
          borderRadius: '30px',
          background: turn === 'w' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.5)',
          border: `1px solid ${turn === 'w' ? 'var(--neon-blue)' : 'var(--neon-purple)'}`,
          color: turn === 'w' ? 'var(--neon-blue)' : 'var(--neon-purple)',
          fontWeight: 600,
          marginBottom: '1.5rem',
          fontSize: '1.1rem',
        }}
      >
        Giliran: {turn === 'w' ? '⬜ Putih' : '⬛ Hitam'}
      </motion.div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Board */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card"
          style={{ padding: '1rem', borderRadius: '16px' }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(8, 1fr)',
            gap: 0,
            border: '2px solid var(--glass-border)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}>
            {board.map((row, r) =>
              row.map((piece, c) => {
                const isLight = (r + c) % 2 === 0;
                const isSelected = selected && selected[0] === r && selected[1] === c;
                const isValid = isValidTarget(r, c);
                const isCapture = isValid && piece;

                return (
                  <motion.div
                    key={`${r}-${c}`}
                    onClick={() => handleClick(r, c)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.2rem',
                      cursor: 'pointer',
                      background: isSelected
                        ? 'rgba(102, 252, 241, 0.4)'
                        : isCapture
                        ? 'rgba(255, 0, 80, 0.3)'
                        : isValid
                        ? 'rgba(102, 252, 241, 0.15)'
                        : isLight
                        ? 'rgba(255, 255, 255, 0.08)'
                        : 'rgba(0, 0, 0, 0.3)',
                      position: 'relative',
                      transition: 'background 0.2s',
                      userSelect: 'none',
                    }}
                  >
                    {isValid && !piece && (
                      <div style={{
                        position: 'absolute',
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        background: 'rgba(102, 252, 241, 0.5)',
                      }} />
                    )}
                    {piece && (
                      <span style={{
                        filter: getColor(piece) === 'w'
                          ? 'drop-shadow(0 0 6px rgba(255,255,255,0.6))'
                          : 'drop-shadow(0 0 6px rgba(157, 78, 221, 0.6))',
                        position: 'relative',
                        zIndex: 1,
                      }}>
                        {PIECES[piece]}
                      </span>
                    )}
                  </motion.div>
                );
              })
            )}
          </div>
        </motion.div>

        {/* Side panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '220px' }}>
          {/* Captured pieces */}
          <div className="glass-card" style={{ padding: '1.2rem' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.8rem', color: 'var(--neon-blue)' }}>Bidak Tertangkap</h4>
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>Hitam: </span>
              <span style={{ fontSize: '1.3rem', letterSpacing: '2px' }}>
                {captured.b.map(p => PIECES[p]).join(' ') || '—'}
              </span>
            </div>
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>Putih: </span>
              <span style={{ fontSize: '1.3rem', letterSpacing: '2px' }}>
                {captured.w.map(p => PIECES[p]).join(' ') || '—'}
              </span>
            </div>
          </div>

          {/* Move history */}
          <div className="glass-card" style={{ padding: '1.2rem', maxHeight: '250px', overflowY: 'auto' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.8rem', color: 'var(--neon-purple)' }}>Riwayat</h4>
            {moveHistory.length === 0 ? (
              <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', opacity: 0.5 }}>Belum ada langkah</p>
            ) : (
              moveHistory.map((move, i) => (
                <div key={i} style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-main)',
                  padding: '0.2rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}>
                  {i + 1}. {move}
                </div>
              ))
            )}
          </div>

          {/* Reset button */}
          <motion.button
            onClick={resetGame}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(157, 78, 221, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '0.8rem 1.5rem',
              background: 'linear-gradient(90deg, var(--neon-blue), var(--neon-purple))',
              border: 'none',
              borderRadius: '12px',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            🔄 Reset Game
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ChessGame;
