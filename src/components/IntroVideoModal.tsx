import { useEffect, useRef, useState } from 'react'
import { introVideoSrc } from '../data/content'
import { useUnlock } from '../context/UnlockContext'
import styles from './IntroVideoModal.module.css'

export default function IntroVideoModal() {
  const { phase, finishVideo } = useUnlock()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (phase !== 'video') return

    setHasError(false)
    setIsLoading(true)

    const video = videoRef.current
    if (!video) return

    video.currentTime = 0
    video.load()

    const tryPlay = () => {
      video.play().catch(() => {
        /* usuário pode dar play pelos controles nativos */
      })
    }

    if (video.readyState >= 2) {
      tryPlay()
    } else {
      video.addEventListener('loadeddata', tryPlay, { once: true })
    }

    return () => {
      video.removeEventListener('loadeddata', tryPlay)
      video.pause()
    }
  }, [phase])

  if (phase !== 'video') return null

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Vídeo surpresa"
    >
      <div className={styles.container}>
        {isLoading && !hasError && (
          <p className={styles.status} role="status">Carregando vídeo...</p>
        )}

        {hasError ? (
          <div className={styles.fallback}>
            <p className={styles.fallbackTitle}>Vídeo não encontrado</p>
            <p>
              Coloque o arquivo <code>intro.mp4</code> na pasta:
            </p>
            <p className={styles.fallbackPath}>
              <code>public/videos/intro.mp4</code>
            </p>
            <p className={styles.fallbackHint}>
              O caminho esperado é <code>{introVideoSrc}</code>
            </p>
          </div>
        ) : (
          <video
            ref={videoRef}
            className={styles.video}
            src={introVideoSrc}
            controls
            playsInline
            preload="auto"
            onLoadedData={() => setIsLoading(false)}
            onCanPlay={() => setIsLoading(false)}
            onError={() => {
              setHasError(true)
              setIsLoading(false)
            }}
            onEnded={finishVideo}
          />
        )}
      </div>
    </div>
  )
}
