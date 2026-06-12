import { useState } from 'react'
import { storyMilestones } from '../data/content'
import type { StoryMilestone } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useUnlock } from '../context/UnlockContext'
import GardenDecor from './GardenDecor'
import StoryModal from './StoryModal'
import styles from './StorySection.module.css'

function TimelineItem({ 
  milestone, 
  index,
  onClick 
}: { 
  milestone: StoryMilestone
  index: number
  onClick: (milestone: StoryMilestone) => void
}) {
  const ref = useScrollReveal<HTMLButtonElement>()

  return (
    <div className={styles.item}>
      <div className={styles.marker}>
        <span className={styles.dot} />
      </div>
      <button
        ref={ref}
        className={`${styles.card} reveal`}
        style={{ transitionDelay: `${index * 0.12}s` }}
        onClick={() => onClick(milestone)}
      >
        <time className={styles.date}>{milestone.date}</time>
        <h3 className={styles.itemTitle}>{milestone.title}</h3>
        <p className={styles.description}>{milestone.description}</p>
        <span className={styles.readMore}>
          Ver mais →
        </span>
      </button>
    </div>
  )
}

export default function StorySection() {
  const headerRef = useScrollReveal<HTMLDivElement>()
  const [activeMilestone, setActiveMilestone] = useState<StoryMilestone | null>(null)
  const { phase, startTicTacToe } = useUnlock()

  return (
    <section id="historia" className={styles.section}>
      <GardenDecor variant="story" />
      <div className="section-container">
        <div ref={headerRef} className="reveal">
          <h2 className="section-title">Nossa História</h2>
          <p className="section-subtitle">
            Cada capítulo escrito com carinho, como páginas de um jardim que floresce
          </p>
        </div>

        <div className={styles.timeline}>
          {storyMilestones.map((milestone, index) => (
            <TimelineItem 
              key={milestone.id} 
              milestone={milestone} 
              index={index}
              onClick={setActiveMilestone}
            />
          ))}
        </div>

        {phase === 'story_unlocked' && (
          <div className={styles.nextChallenge}>
            <p className={styles.challengeText}>
              Você chegou até aqui. Está preparada para o próximo desafio?
            </p>
            <button className={styles.challengeBtn} onClick={startTicTacToe}>
              Aceitar desafio
            </button>
          </div>
        )}
      </div>

      <StoryModal
        milestone={activeMilestone}
        onClose={() => setActiveMilestone(null)}
      />
    </section>
  )
}
