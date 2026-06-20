import { useState } from 'react'
import type { UnlockPhase } from '../context/UnlockContext'
import { useUnlock } from '../context/UnlockContext'
import { lockedNavItems, publicNavItems } from '../data/content'
import styles from './Navbar.module.css'

interface NavbarProps {
  activeId: string
  phase: UnlockPhase
  onNavClick: (id: string) => void
}

export default function Navbar({ activeId, phase, onNavClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { unlockAll } = useUnlock()
  const isUnlocked = phase === 'sentiments_unlocked' || phase === 'story_unlocked' || phase === 'future_unlocked'
  const showStoryUnlocked = phase === 'story_unlocked' || phase === 'future_unlocked'
  const showFutureUnlocked = phase === 'future_unlocked'
  const isNavBlocked = phase === 'video' || phase === 'game' || phase === 'videos_finished' || phase === 'memory_game' || phase === 'tic_tac_toe'

  const handleNavClick = (id: string) => {
    if (isNavBlocked) return
    setMenuOpen(false)
    onNavClick(id)
  }

  const visibleItems = isUnlocked
    ? publicNavItems
    : publicNavItems.filter((item) => item.id === 'inicio')

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navegação principal">
        <a
          href="#inicio"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('inicio')
          }}
        >
          <span className={styles.logoIcon} aria-hidden="true">♥</span>
          <span className={styles.logoText}>Nosso Jardim</span>
        </a>

        <button
          className={styles.unlockAllBtn}
          onClick={unlockAll}
          title="Liberar tudo sem fazer os jogos"
        >
          Liberar Tudo
        </button>

        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          disabled={isNavBlocked}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="nav-menu" className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          {visibleItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`${styles.link} ${activeId === item.id ? styles.linkActive : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id)
                }}
                aria-current={activeId === item.id ? 'page' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}

          {isUnlocked &&
            lockedNavItems.map((item) => {
              const isStoryItem = item.id === 'historia'
              const isFutureItem = item.id === 'futuro'
              const isItemUnlocked = (isStoryItem && showStoryUnlocked) || (isFutureItem && showFutureUnlocked)
              
              return (
                <li key={item.id}>
                  {isItemUnlocked ? (
                    <a
                      href={`#${item.id}`}
                      className={`${styles.link} ${activeId === item.id ? styles.linkActive : ''}`}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.id)
                      }}
                      aria-current={activeId === item.id ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className={`${styles.link} ${styles.linkLocked}`} aria-disabled="true">
                      <svg className={styles.lockIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2a5 5 0 0 1 5 5v2h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h1V7a5 5 0 0 1 5-5zm3 7V7a3 3 0 1 0-6 0v2h6z" />
                      </svg>
                      {item.label}
                    </span>
                  )}
                </li>
              )
            })}
        </ul>
      </nav>
    </header>
  )
}
