import { useEffect, useState } from 'react'
import { useUnlock } from '../context/UnlockContext'
import styles from './TicTacToe.module.css'

type Player = 'sunflower' | 'sun' | null
type Board = Player[]

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
  [0, 4, 8], [2, 4, 6], // diagonais
]

export default function TicTacToe() {
  const { phase, unlockFuture } = useUnlock()
  const [board, setBoard] = useState<Board>(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState<'sunflower' | 'sun'>('sunflower')
  const [winner, setWinner] = useState<Player>(null)
  const [winningLine, setWinningLine] = useState<number[]>([])
  const [isDraw, setIsDraw] = useState(false)
  const [drawCount, setDrawCount] = useState(0)
  const [gameWon, setGameWon] = useState(false)

  const checkWinner = (board: Board): { winner: Player; line: number[] } => {
    for (const combo of WINNING_COMBINATIONS) {
      const [a, b, c] = combo
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a], line: combo }
      }
    }
    return { winner: null, line: [] }
  }

  const getComputerMove = (board: Board): number => {
    // Minimax algorithm para jogo perfeito
    const minimax = (board: Board, depth: number, isMaximizing: boolean): number => {
      const { winner } = checkWinner(board)
      
      if (winner === 'sun') return 10 - depth
      if (winner === 'sunflower') return depth - 10
      if (board.every(cell => cell !== null)) return 0

      if (isMaximizing) {
        let bestScore = -Infinity
        for (let i = 0; i < 9; i++) {
          if (!board[i]) {
            board[i] = 'sun'
            const score = minimax(board, depth + 1, false)
            board[i] = null
            bestScore = Math.max(score, bestScore)
          }
        }
        return bestScore
      } else {
        let bestScore = Infinity
        for (let i = 0; i < 9; i++) {
          if (!board[i]) {
            board[i] = 'sunflower'
            const score = minimax(board, depth + 1, true)
            board[i] = null
            bestScore = Math.min(score, bestScore)
          }
        }
        return bestScore
      }
    }

    let bestScore = -Infinity
    let bestMove = -1
    const boardCopy = [...board]

    for (let i = 0; i < 9; i++) {
      if (!boardCopy[i]) {
        boardCopy[i] = 'sun'
        const score = minimax(boardCopy, 0, false)
        boardCopy[i] = null
        if (score > bestScore) {
          bestScore = score
          bestMove = i
        }
      }
    }

    return bestMove
  }

  useEffect(() => {
    if (currentPlayer === 'sun' && !winner && !isDraw) {
      const timer = setTimeout(() => {
        const move = getComputerMove(board)
        if (move !== undefined) {
          const newBoard = [...board]
          newBoard[move] = 'sun'
          setBoard(newBoard)

          const { winner: gameWinner, line } = checkWinner(newBoard)
          if (gameWinner) {
            setWinner(gameWinner)
            setWinningLine(line)
            return
          }

          if (newBoard.every(cell => cell !== null)) {
            setIsDraw(true)
            return
          }

          setCurrentPlayer('sunflower')
        }
      }, 800)

      return () => clearTimeout(timer)
    }
  }, [currentPlayer, board, winner, isDraw])

  const handleClick = (index: number) => {
    if (board[index] || winner || isDraw) return

    const newBoard = [...board]
    newBoard[index] = currentPlayer
    setBoard(newBoard)

    const { winner: gameWinner, line } = checkWinner(newBoard)
    if (gameWinner) {
      setWinner(gameWinner)
      setWinningLine(line)
      
      // Se ela perder, reseta os empates
      if (gameWinner === 'sun') {
        setDrawCount(0)
      }
      return
    }

    if (newBoard.every(cell => cell !== null)) {
      setIsDraw(true)
      const newDrawCount = drawCount + 1
      setDrawCount(newDrawCount)
      
      if (newDrawCount >= 3) {
        setGameWon(true)
        setTimeout(() => {
          unlockFuture()
        }, 2000)
      }
      return
    }

    setCurrentPlayer(currentPlayer === 'sunflower' ? 'sun' : 'sunflower')
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setCurrentPlayer('sunflower')
    setWinner(null)
    setWinningLine([])
    setIsDraw(false)
  }

  if (phase !== 'tic_tac_toe') return null

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h2 className={styles.title}>Jogo da Velha do Amor</h2>
        <p className={styles.subtitle}>
          Você é o Girassol 🌻 • O Sol é imbatível ☀️
        </p>

        <div className={styles.progress}>
          <p className={styles.progressText}>
            Empates consecutivos: {drawCount} / 3
          </p>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${(drawCount / 3) * 100}%` }}
            />
          </div>
        </div>

        <div className={styles.board}>
          {board.map((cell, index) => (
            <button
              key={index}
              className={`${styles.cell} ${
                cell ? styles[cell] : ''
              } ${winningLine.includes(index) ? styles.winning : ''}`}
              onClick={() => handleClick(index)}
              disabled={!!cell || !!winner || isDraw}
            >
              {cell === 'sunflower' && <span className={styles.icon}>🌻</span>}
              {cell === 'sun' && <span className={styles.icon}>☀️</span>}
            </button>
          ))}
        </div>

        {gameWon && (
          <div className={styles.message}>
            <p className={styles.winText}>Você conseguiu! 🎉</p>
            <p className={styles.winSubtext}>
              3 empates contra o invencível Sol!<br />
              Desbloqueando Nosso Futuro...
            </p>
          </div>
        )}

        {winner && !gameWon && (
          <div className={styles.message}>
            {winner === 'sun' ? (
              <>
                <p className={styles.loseText}>O Sol venceu desta vez!</p>
                <p className={styles.resetWarning}>
                  ❌ Seu progresso foi resetado. Comece novamente!
                </p>
                <p className={styles.hint}>Você precisa de 3 empates consecutivos 💪</p>
                <button className={styles.restartBtn} onClick={resetGame}>
                  Tentar novamente
                </button>
              </>
            ) : null}
          </div>
        )}

        {isDraw && !gameWon && (
          <div className={styles.message}>
            <p className={styles.drawText}>Empatou! 🤝</p>
            <p className={styles.drawProgress}>
              {drawCount < 3 
                ? `Faltam ${3 - drawCount} empate${3 - drawCount === 1 ? '' : 's'} para vencer!`
                : 'Você conseguiu!'
              }
            </p>
            <button className={styles.restartBtn} onClick={resetGame}>
              {drawCount < 3 ? 'Continuar jogando' : 'Jogar novamente'}
            </button>
          </div>
        )}

        {!winner && !isDraw && !gameWon && (
          <p className={styles.turn}>
            {currentPlayer === 'sunflower' ? 'Sua vez 🌻' : 'Vez do Sol ☀️'}
          </p>
        )}
      </div>
    </div>
  )
}
