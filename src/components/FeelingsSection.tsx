import { useState } from 'react'
import { feelings } from '../data/content'
import type { Feeling } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import GardenDecor from './GardenDecor'
import VideoCard from './VideoCard'
import VideoModal from './VideoModal'
import FeelingsIntroModal from './FeelingsIntroModal'
import styles from './FeelingsSection.module.css'

export default function FeelingsSection() {
  const [activeFeeling, setActiveFeeling] = useState<Feeling | null>(null)
  const [showIntroModal, setShowIntroModal] = useState(false)
  const [hasSeenIntro, setHasSeenIntro] = useState(false)
  const [showAllCards, setShowAllCards] = useState(false)
  const headerRef = useScrollReveal<HTMLDivElement>()

  const handleCloseIntro = () => {
    setShowIntroModal(false)
    setHasSeenIntro(true)
  }

  const handleCardClick = () => {
    if (!hasSeenIntro) {
      setShowIntroModal(true)
    } else {
      setShowAllCards(true)
    }
  }

  return (
    <section id="sentimentos" className={styles.section}>
      <GardenDecor variant="feelings" />
      <div className="section-container">
        <div ref={headerRef} className="reveal">
          <h2 className="section-title">O que eu sinto por você</h2>
          <p className="section-subtitle">
            Toque em cada flor para ouvir o que meu coração quer dizer
          </p>
        </div>

        <div className={styles.grid}>
          {!showAllCards ? (
            <VideoCard
              feeling={feelings[0]}
              onPlay={setActiveFeeling}
              isIntro={!hasSeenIntro}
              onIntroClick={handleCardClick}
            />
          ) : (
            feelings.map((feeling) => (
              <VideoCard
                key={feeling.id}
                feeling={feeling}
                onPlay={setActiveFeeling}
              />
            ))
          )}
        </div>
      </div>

      <FeelingsIntroModal
        isOpen={showIntroModal}
        onClose={handleCloseIntro}
      />

      <VideoModal
        feeling={activeFeeling}
        onClose={() => setActiveFeeling(null)}
      />
    </section>
  )
}
