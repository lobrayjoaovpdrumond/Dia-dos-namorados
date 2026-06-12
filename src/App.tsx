import { useEffect, useMemo, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeelingsSection from './components/FeelingsSection'
import StorySection from './components/StorySection'
import FutureSection from './components/FutureSection'
import IntroVideoModal from './components/IntroVideoModal'
import GameGate from './components/GameGate'
import TransitionMessage from './components/TransitionMessage'
import MemoryGame from './components/MemoryGame'
import TicTacToe from './components/TicTacToe'
import { useUnlock } from './context/UnlockContext'
import { useActiveSection } from './hooks/useActiveSection'
import { useBodyScrollLock } from './hooks/useBodyScrollLock'

export default function App() {
  const { phase, isScrollLocked } = useUnlock()
  const hasScrolledRef = useRef(false)

  useBodyScrollLock(isScrollLocked)

  const sectionIds = useMemo(() => {
    const ids: string[] = ['inicio']
    if (phase === 'sentiments_unlocked' || phase === 'story_unlocked' || phase === 'future_unlocked') {
      ids.push('sentimentos')
    }
    if (phase === 'story_unlocked' || phase === 'future_unlocked') {
      ids.push('historia')
    }
    if (phase === 'future_unlocked') {
      ids.push('futuro')
    }
    return ids
  }, [phase])

  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    if (phase === 'sentiments_unlocked' && !hasScrolledRef.current) {
      hasScrolledRef.current = true
      const timer = setTimeout(() => {
        document.getElementById('sentimentos')?.scrollIntoView({ behavior: 'smooth' })
      }, 400)
      return () => clearTimeout(timer)
    }
    
    if (phase === 'story_unlocked') {
      const timer = setTimeout(() => {
        document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })
      }, 400)
      return () => clearTimeout(timer)
    }

    if (phase === 'future_unlocked') {
      const timer = setTimeout(() => {
        document.getElementById('futuro')?.scrollIntoView({ behavior: 'smooth' })
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [phase])

  const handleNavClick = (id: string) => {
    if (phase === 'video' || phase === 'game' || phase === 'videos_finished' || phase === 'memory_game' || phase === 'tic_tac_toe') return
    if (id === 'sentimentos' && phase !== 'sentiments_unlocked' && phase !== 'story_unlocked' && phase !== 'future_unlocked') return
    if (id === 'historia' && phase !== 'story_unlocked' && phase !== 'future_unlocked') return
    if (id === 'futuro' && phase !== 'future_unlocked') return
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar activeId={activeId} phase={phase} onNavClick={handleNavClick} />
      <main>
        <Hero />
        {(phase === 'sentiments_unlocked' || phase === 'story_unlocked' || phase === 'future_unlocked') && <FeelingsSection />}
        {(phase === 'story_unlocked' || phase === 'future_unlocked') && <StorySection />}
        {phase === 'future_unlocked' && <FutureSection />}
      </main>
      <IntroVideoModal />
      <GameGate />
      <TransitionMessage />
      <MemoryGame />
      <TicTacToe />
    </>
  )
}
