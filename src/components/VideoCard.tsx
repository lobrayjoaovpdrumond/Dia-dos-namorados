import type { Feeling } from '../data/content'
import styles from './VideoCard.module.css'

interface VideoCardProps {
  feeling: Feeling
  onPlay: (feeling: Feeling) => void
  isIntro?: boolean
  onIntroClick?: () => void
}

export default function VideoCard({ feeling, onPlay, isIntro = false, onIntroClick }: VideoCardProps) {
  const handleClick = () => {
    if (isIntro && onIntroClick) {
      onIntroClick()
    } else {
      onPlay(feeling)
    }
  }

  return (
    <button
      className={`${styles.card} ${styles[feeling.accent]}`}
      onClick={handleClick}
      aria-label={isIntro ? "Ver mensagem especial" : `Assistir vídeo: ${feeling.title}`}
    >
      <div className={styles.thumbnail}>
        {isIntro ? (
          <img 
            src="/images/feelings-intro.png" 
            alt="Mensagem especial" 
            className={styles.introImage}
          />
        ) : (
          <>
            <FloralAccent accent={feeling.accent} />
            <span className={styles.playIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{feeling.title}</h3>
        <p className={styles.description}>{feeling.description}</p>
        <span className={styles.watchBtn}>
          Assistir
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </button>
  )
}

function FloralAccent({ accent }: { accent: Feeling['accent'] }) {
  const colors = {
    gold: { petal: '#F5D78E', center: '#E8B84A', core: '#C99A2E' },
    rose: { petal: '#E8A0A0', center: '#C96B6B', core: '#A84F4F' },
    green: { petal: '#8BB89A', center: '#5A8F6B', core: '#3D6B4F' },
  }
  const c = colors[accent]

  return (
    <svg viewBox="0 0 80 80" className={styles.floral} aria-hidden="true">
      <circle cx="40" cy="40" r="14" fill={c.center} />
      <circle cx="40" cy="40" r="7" fill={c.core} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse
          key={angle}
          cx="40"
          cy="18"
          rx="9"
          ry="18"
          fill={c.petal}
          opacity="0.85"
          transform={`rotate(${angle} 40 40)`}
        />
      ))}
    </svg>
  )
}
