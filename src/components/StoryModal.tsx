import { useEffect, useRef } from 'react'
import type { StoryMilestone } from '../data/content'
import styles from './StoryModal.module.css'

interface StoryModalProps {
  milestone: StoryMilestone | null
  onClose: () => void
}

export default function StoryModal({ milestone, onClose }: StoryModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!milestone) return

    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKey)
    }
  }, [milestone, onClose])

  if (!milestone) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className={styles.overlay}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-modal-title"
    >
      <div className={styles.modal}>
        <button
          ref={closeBtnRef}
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Fechar"
        >
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</span>
        </button>

        <div className={styles.imageWrapper}>
          <img
            src={milestone.imageSrc}
            alt={milestone.title}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <time className={styles.date}>{milestone.date}</time>
          <h2 id="story-modal-title" className={styles.title}>
            {milestone.title}
          </h2>
          <p className={styles.text}>{milestone.detailedText}</p>
        </div>
      </div>
    </div>
  )
}
