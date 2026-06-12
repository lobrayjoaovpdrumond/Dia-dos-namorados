import { useEffect, useState } from 'react'
import type { FutureChapter } from '../data/content'
import styles from './FutureChapterCard.module.css'

interface FutureChapterCardProps {
  chapter: FutureChapter
  index: number
  onOpen: (chapter: FutureChapter) => void
}

interface TimeRemaining {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function FutureChapterCard({ chapter, index, onOpen }: FutureChapterCardProps) {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining | null>(null)

  useEffect(() => {
    const checkUnlock = () => {
      const now = new Date()
      const unlockDate = new Date(chapter.year, chapter.month - 1, 20, 0, 0, 0)
      
      // Converter para timezone de Brasília
      const brasiliaOffset = -3 * 60 // UTC-3
      const localOffset = now.getTimezoneOffset()
      const offsetDiff = (localOffset + brasiliaOffset) * 60 * 1000
      
      const nowBrasilia = new Date(now.getTime() - offsetDiff)
      
      if (nowBrasilia >= unlockDate) {
        setIsUnlocked(true)
        setTimeRemaining(null)
      } else {
        setIsUnlocked(false)
        const diff = unlockDate.getTime() - nowBrasilia.getTime()
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)
        
        setTimeRemaining({ days, hours, minutes, seconds })
      }
    }

    checkUnlock()
    const interval = setInterval(checkUnlock, 1000)
    
    return () => clearInterval(interval)
  }, [chapter])

  const unlockDateStr = new Date(chapter.year, chapter.month - 1, 20).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  return (
    <div 
      className={`${styles.card} ${isUnlocked ? styles.unlocked : styles.locked}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {isUnlocked ? (
        <button className={styles.cardButton} onClick={() => onOpen(chapter)}>
          <div className={styles.number}>{chapter.id}</div>
          <h3 className={styles.title}>{chapter.title}</h3>
          <p className={styles.teaser}>{chapter.teaser}</p>
          <span className={styles.openBtn}>Abrir capítulo →</span>
        </button>
      ) : (
        <div className={styles.lockedContent}>
          <div className={styles.lockIcon}>🔒</div>
          <div className={styles.number}>{chapter.id}</div>
          <h3 className={styles.title}>{chapter.title}</h3>
          <p className={styles.unlockDate}>
            Será aberto em<br />
            <strong>{unlockDateStr}</strong>
          </p>
          {timeRemaining && (
            <div className={styles.countdown}>
              <div className={styles.countdownItem}>
                <span className={styles.countdownValue}>{timeRemaining.days}</span>
                <span className={styles.countdownLabel}>dias</span>
              </div>
              <div className={styles.countdownItem}>
                <span className={styles.countdownValue}>{timeRemaining.hours}</span>
                <span className={styles.countdownLabel}>horas</span>
              </div>
              <div className={styles.countdownItem}>
                <span className={styles.countdownValue}>{timeRemaining.minutes}</span>
                <span className={styles.countdownLabel}>min</span>
              </div>
              <div className={styles.countdownItem}>
                <span className={styles.countdownValue}>{timeRemaining.seconds}</span>
                <span className={styles.countdownLabel}>seg</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
