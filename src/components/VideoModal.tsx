import { useEffect, useRef, useState } from 'react'
import { feelings } from '../data/content'
import type { Feeling } from '../data/content'
import { useUnlock } from '../context/UnlockContext'
import styles from './VideoModal.module.css'

interface VideoModalProps {
  feeling: Feeling | null
  onClose: () => void
}

export default function VideoModal({ feeling, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { finishVideos } = useUnlock()

  useEffect(() => {
    if (!feeling) return

    const index = feelings.findIndex(f => f.id === feeling.id)
    if (index !== -1) setCurrentIndex(index)

    setHasError(false)
    setIsLoading(true)
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    document.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKey)
      videoRef.current?.pause()
    }
  }, [feeling, onClose])

  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : feelings.length - 1))
    setHasError(false)
    setIsLoading(true)
    videoRef.current?.load()
  }

  const handleNext = () => {
    if (currentIndex === feelings.length - 1) {
      onClose()
      finishVideos()
      return
    }
    setCurrentIndex(prev => (prev < feelings.length - 1 ? prev + 1 : 0))
    setHasError(false)
    setIsLoading(true)
    videoRef.current?.load()
  }

  if (!feeling) return null

  const currentFeeling = feelings[currentIndex]
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className={styles.overlay}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.modal}>
        <button
          ref={closeBtnRef}
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Fechar vídeo"
        >
          ×
        </button>

        <div className={styles.videoWrapper}>
          {isLoading && !hasError && (
            <p className={styles.status} role="status">Carregando vídeo...</p>
          )}

          {hasError ? (
            <div className={styles.fallback}>
              <p>Vídeo não encontrado.</p>
              <p className={styles.fallbackHint}>
                Adicione o arquivo <code>{currentFeeling.videoSrc}</code> na pasta{' '}
                <code>public/videos/</code>
              </p>
            </div>
          ) : (
            <video
              ref={videoRef}
              className={styles.video}
              src={currentFeeling.videoSrc}
              controls
              preload="metadata"
              playsInline
              onLoadedData={() => setIsLoading(false)}
              onCanPlay={() => setIsLoading(false)}
              onError={() => {
                setHasError(true)
                setIsLoading(false)
              }}
            />
          )}
        </div>

        <div className={styles.navigation}>
          <button
            className={styles.navBtn}
            onClick={handlePrev}
            aria-label="Vídeo anterior"
          >
            ← Anterior
          </button>
          <span className={styles.counter}>
            {currentIndex + 1} de {feelings.length}
          </span>
          <button
            className={styles.navBtn}
            onClick={handleNext}
            aria-label="Próximo vídeo"
          >
            Próximo →
          </button>
        </div>
      </div>
    </div>
  )
}
