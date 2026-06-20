import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type UnlockPhase = 'locked' | 'video' | 'game' | 'sentiments_unlocked' | 'videos_finished' | 'memory_game' | 'story_unlocked' | 'tic_tac_toe' | 'future_unlocked'

const STORAGE_KEY = 'namorados-unlock-phase'

const VALID_PHASES: UnlockPhase[] = [
  'locked',
  'video',
  'game',
  'sentiments_unlocked',
  'videos_finished',
  'memory_game',
  'story_unlocked',
  'tic_tac_toe',
  'future_unlocked',
]

interface UnlockContextValue {
  phase: UnlockPhase
  startVideo: () => void
  finishVideo: () => void
  winGame: () => void
  finishVideos: () => void
  startMemoryGame: () => void
  completeMemoryGame: () => void
  startTicTacToe: () => void
  unlockFuture: () => void
  unlockAll: () => void
  isScrollLocked: boolean
}

const UnlockContext = createContext<UnlockContextValue | null>(null)

function loadPhase(): UnlockPhase {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored && VALID_PHASES.includes(stored as UnlockPhase)) {
      return stored as UnlockPhase
    }
  } catch {
    /* sessionStorage indisponível */
  }
  return 'locked'
}

export function UnlockProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<UnlockPhase>(loadPhase)

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, phase)
    } catch {
      /* ignore */
    }
  }, [phase])

  const startVideo = useCallback(() => setPhase('video'), [])
  const finishVideo = useCallback(() => setPhase('game'), [])
  const winGame = useCallback(() => setPhase('sentiments_unlocked'), [])
  const finishVideos = useCallback(() => setPhase('videos_finished'), [])
  const startMemoryGame = useCallback(() => setPhase('memory_game'), [])
  const completeMemoryGame = useCallback(() => setPhase('story_unlocked'), [])
  const startTicTacToe = useCallback(() => setPhase('tic_tac_toe'), [])
  const unlockFuture = useCallback(() => setPhase('future_unlocked'), [])
  const unlockAll = useCallback(() => setPhase('future_unlocked'), [])

  const isScrollLocked = phase !== 'sentiments_unlocked' && phase !== 'story_unlocked' && phase !== 'future_unlocked'

  return (
    <UnlockContext.Provider
      value={{ phase, startVideo, finishVideo, winGame, finishVideos, startMemoryGame, completeMemoryGame, startTicTacToe, unlockFuture, unlockAll, isScrollLocked }}
    >
      {children}
    </UnlockContext.Provider>
  )
}

export function useUnlock() {
  const ctx = useContext(UnlockContext)
  if (!ctx) {
    throw new Error('useUnlock deve ser usado dentro de UnlockProvider')
  }
  return ctx
}
