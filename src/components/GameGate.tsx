import { useCallback, useEffect, useState } from 'react'
import { useUnlock } from '../context/UnlockContext'
import styles from './GameGate.module.css'

const GRID_SIZE = 9
const MAX_ATTEMPTS = 3

function randomHeartIndex(): number {
  return Math.floor(Math.random() * GRID_SIZE)
}

export default function GameGate() {
  const { phase, winGame } = useUnlock()
  const [heartIndex, setHeartIndex] = useState(randomHeartIndex)
  const [attempts, setAttempts] = useState(MAX_ATTEMPTS)
  const [picked, setPicked] = useState<number | null>(null)
  const [won, setWon] = useState(false)
  const [wrongFlash, setWrongFlash] = useState(false)

  const resetRound = useCallback(() => {
    setHeartIndex(randomHeartIndex())
    setPicked(null)
    setWrongFlash(false)
  }, [])

  useEffect(() => {
    if (phase !== 'game') return
    resetRound()
    setAttempts(MAX_ATTEMPTS)
    setWon(false)
  }, [phase, resetRound])

  useEffect(() => {
    if (!won) return
    const timer = setTimeout(winGame, 1800)
    return () => clearTimeout(timer)
  }, [won, winGame])

  if (phase !== 'game') return null

  const handlePick = (index: number) => {
    if (won || picked !== null) return

    setPicked(index)

    if (index === heartIndex) {
      setWon(true)
      return
    }

    setWrongFlash(true)
    const remaining = attempts - 1

    setTimeout(() => {
      if (remaining <= 0) {
        setAttempts(MAX_ATTEMPTS)
        resetRound()
      } else {
        setAttempts(remaining)
        setPicked(null)
        setWrongFlash(false)
      }
    }, 900)
  }

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Mini-jogo: ache o coração"
    >
      <div className={styles.panel}>
        {won ? (
          <div className={styles.victory}>
            <span className={styles.victoryHeart} aria-hidden="true">♥</span>
            <h2 className={styles.victoryTitle}>Você encontrou meu coração!</h2>
            <p className={styles.victoryText}>Abrindo o que eu sinto por você...</p>
          </div>
        ) : (
          <>
            <h2 className={styles.title}>Ache o coração entre as flores</h2>
            <p className={styles.subtitle}>
              Um coração está escondido no jardim. Toque na flor certa para continuar.
            </p>
            <p className={styles.attempts}>
              Tentativas restantes: {attempts}
            </p>

            <div className={`${styles.grid} ${wrongFlash ? styles.gridShake : ''}`}>
              {Array.from({ length: GRID_SIZE }, (_, i) => {
                const isHeart = i === heartIndex
                const isPicked = picked === i
                const showHeart = isPicked && isHeart
                const showWrong = isPicked && !isHeart

                return (
                  <button
                    key={i}
                    className={`${styles.tile} ${showHeart ? styles.tileHeart : ''} ${showWrong ? styles.tileWrong : ''}`}
                    onClick={() => handlePick(i)}
                    aria-label={`Flor ${i + 1}`}
                    disabled={picked !== null}
                  >
                    {showHeart ? (
                      <span className={styles.heartIcon}>♥</span>
                    ) : (
                      <svg viewBox="0 0 40 40" className={styles.flowerIcon} aria-hidden="true">
                        <circle cx="20" cy="20" r="6" fill="#C99A2E" />
                        {[0, 60, 120, 180, 240, 300].map((a) => (
                          <ellipse
                            key={a}
                            cx="20"
                            cy="8"
                            rx="5"
                            ry="11"
                            fill="#F5D78E"
                            transform={`rotate(${a} 20 20)`}
                          />
                        ))}
                      </svg>
                    )}
                  </button>
                )
              })}
            </div>

            {wrongFlash && (
              <p className={styles.feedback} role="alert">
                Quase! Tente outra flor...
              </p>
            )}
          </>
        )}
      </div>
    </div>
  )
}
