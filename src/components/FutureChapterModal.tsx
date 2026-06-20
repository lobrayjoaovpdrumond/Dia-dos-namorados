import { useEffect, useRef } from 'react'
import type { FutureChapter } from '../data/content'
import styles from './FutureChapterModal.module.css'

interface FutureChapterModalProps {
  chapter: FutureChapter | null
  onClose: () => void
}

export default function FutureChapterModal({ chapter, onClose }: FutureChapterModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!chapter) return

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
  }, [chapter, onClose])

  if (!chapter) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className={styles.overlay}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
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
            src={chapter.imageSrc}
            alt={chapter.title}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.number}>Capítulo {chapter.id}</div>
          <h2 className={styles.title}>{chapter.title}</h2>
          <div className={styles.text}>
            {chapter.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} style={{ marginBottom: '1rem' }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
