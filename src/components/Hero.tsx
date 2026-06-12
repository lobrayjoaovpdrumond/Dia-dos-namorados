import { heroContent } from '../data/content'
import { useUnlock } from '../context/UnlockContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Hero.module.css'

export default function Hero() {
  const contentRef = useScrollReveal<HTMLDivElement>()
  const { phase, startVideo } = useUnlock()

  const handleCta = () => {
    if (phase === 'sentiments_unlocked') {
      document.getElementById('sentimentos')?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    startVideo()
  }

  return (
    <section id="inicio" className={styles.hero}>
      <div
        className={styles.heroImage}
        role="img"
        aria-label="Campo de girassóis e rosas ao pôr do sol"
      />
      <div className={styles.heroOverlay} aria-hidden="true" />

      <div ref={contentRef} className={`${styles.content} reveal`}>
        <p className={styles.eyebrow}>Dia dos Namorados</p>
        <h1 className={styles.title}>{heroContent.greeting}</h1>
        <p className={styles.subtitle}>{heroContent.subtitle}</p>
        <blockquote className={styles.highlight}>
          &ldquo;{heroContent.highlight}&rdquo;
        </blockquote>
        <button className={styles.cta} onClick={handleCta}>
          {heroContent.cta}
          <span className={styles.ctaIcon} aria-hidden="true">
            {phase === 'sentiments_unlocked' ? '↓' : '▶'}
          </span>
        </button>
      </div>
    </section>
  )
}
