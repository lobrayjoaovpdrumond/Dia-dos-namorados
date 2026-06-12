import { useUnlock } from '../context/UnlockContext'
import styles from './TransitionMessage.module.css'

export default function TransitionMessage() {
  const { phase, startMemoryGame } = useUnlock()

  if (phase !== 'videos_finished') return null

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <div className={styles.flowerDecor} aria-hidden="true">
          🌻
        </div>
        <h2 className={styles.title}>Meu amor...</h2>
        <p className={styles.message}>
          Você acabou de ver um pedacinho do que meu coração guarda por você.
          Cada palavra, cada momento compartilhado, é parte do jardim que
          cultivamos juntos.
        </p>
        <p className={styles.message}>
          Mas nossa jornada ainda não terminou. Que tal um joguinho especial
          feito com carinho, só para você?
        </p>
        <p className={styles.question}>Você está preparada para continuar?</p>
        <button className={styles.btn} onClick={startMemoryGame}>
          Sim, quero continuar
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  )
}
