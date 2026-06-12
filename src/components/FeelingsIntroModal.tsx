import { useEffect, useRef } from 'react'
import { useUnlock } from '../context/UnlockContext'
import styles from './FeelingsIntroModal.module.css'

interface FeelingsIntroModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function FeelingsIntroModal({ isOpen, onClose }: FeelingsIntroModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const { startMemoryGame } = useUnlock()

  useEffect(() => {
    if (!isOpen) return

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
  }, [isOpen, onClose])

  const handleContinue = () => {
    onClose()
    startMemoryGame()
  }

  if (!isOpen) return null

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
            src="/images/feelings-intro.png"
            alt="Para você"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>Meu amor,</h2>
          
          <p className={styles.text}>
            Antes de qualquer foto, lembrança ou surpresa deste site, existe algo que eu preciso te dizer.
          </p>

          <p className={styles.text}>
            Você entrou na minha vida de uma forma que eu nunca imaginei. Aos poucos, sem perceber, você se tornou alguém que eu penso todos os dias, alguém que faz parte dos meus planos, dos meus sonhos e do futuro que eu quero construir.
          </p>

          <p className={styles.text}>
            O que eu sinto por você vai muito além de palavras bonitas. É carinho, admiração, cuidado e a vontade sincera de ver você feliz. É sentir saudade da sua presença, mesmo quando estamos longe. É querer compartilhar as conquistas, os momentos simples e até os dias difíceis ao seu lado.
          </p>

          <p className={styles.text}>
            Você me ensinou que o amor não está apenas nos grandes momentos, mas também nas pequenas conversas, nos sorrisos inesperados, nas brincadeiras e na companhia de todos os dias.
          </p>

          <p className={styles.text}>
            Talvez eu não consiga demonstrar tudo perfeitamente. Talvez eu erre às vezes. Mas quero que você saiba que cada parte deste site foi feita pensando em você, porque você é alguém muito especial para mim.
          </p>

          <p className={styles.text}>
            E enquanto você continua essa jornada por essas páginas, quero que carregue uma certeza no coração:
          </p>

          <p className={styles.highlight}>
            Você é amada. Você é importante. E ocupa um lugar único dentro de mim.
          </p>

          <p className={styles.closing}>
            Agora continue... porque nossa história está apenas começando. ❤️
          </p>

          <button className={styles.continueBtn} onClick={handleContinue}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  )
}
