import { useEffect, useRef, useState } from 'react'
import type { FutureChapter } from '../data/content'
import styles from './FutureChapterModal.module.css'

interface FutureChapterModalProps {
  chapter: FutureChapter | null
  onClose: () => void
}

export default function FutureChapterModal({ chapter, onClose }: FutureChapterModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    if (!chapter) return

    setCurrentPage(0)
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && currentPage < chapter.pages.length - 1) {
        setCurrentPage(p => p + 1)
      }
      if (e.key === 'ArrowLeft' && currentPage > 0) {
        setCurrentPage(p => p - 1)
      }
    }
    document.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKey)
    }
  }, [chapter, onClose, currentPage])

  if (!chapter) return null

  const currentPageData = chapter.pages[currentPage]
  const hasNextPage = currentPage < chapter.pages.length - 1
  const hasPrevPage = currentPage > 0

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  const goToNextPage = () => {
    if (hasNextPage) setCurrentPage(p => p + 1)
  }

  const goToPrevPage = () => {
    if (hasPrevPage) setCurrentPage(p => p - 1)
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
            src={currentPageData.imageSrc}
            alt={chapter.title}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.number}>Capítulo {chapter.id}</div>
          <h2 className={styles.title}>{chapter.title}</h2>
          <div className={styles.text}>
            {currentPageData.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} style={{ marginBottom: '1rem' }}>
                {paragraph}
              </p>
            ))}
          </div>

          {(hasPrevPage || hasNextPage) && (
            <div className={styles.navigation}>
              {hasPrevPage && (
                <button className={styles.navBtn} onClick={goToPrevPage}>
                  ← Anterior
                </button>
              )}
              {!hasPrevPage && hasNextPage && <div />}
              {hasNextPage && (
                <button className={styles.navBtn} onClick={goToNextPage}>
                  Próximo →
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
