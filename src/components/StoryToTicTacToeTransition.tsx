import { useUnlock } from '../context/UnlockContext'
import styles from './StoryToTicTacToeTransition.module.css'

export default function StoryToTicTacToeTransition() {
  const { phase } = useUnlock()

  if (phase !== 'tic_tac_toe') return null

  return null // O TicTacToe aparece direto após completar StorySection
}
