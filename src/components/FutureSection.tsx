import { useState } from 'react'
import { futureChapters } from '../data/content'
import type { FutureChapter } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import GardenDecor from './GardenDecor'
import FutureChapterCard from './FutureChapterCard'
import FutureChapterModal from './FutureChapterModal'
import styles from './FutureSection.module.css'

export default function FutureSection() {
  const headerRef = useScrollReveal<HTMLDivElement>()
  const [activeChapter, setActiveChapter] = useState<FutureChapter | null>(null)

  return (
    <section id="futuro" className={styles.section}>
      <GardenDecor variant="future" />
      <div className="section-container">
        <div ref={headerRef} className="reveal">
          <h2 className="section-title">Nosso Futuro</h2>
          <p className="section-subtitle">
            Os próximos capítulos da nossa história, esperando para serem vividos
          </p>
        </div>

        <div className={styles.grid}>
          {futureChapters.map((chapter, index) => (
            <FutureChapterCard
              key={chapter.id}
              chapter={chapter}
              index={index}
              onOpen={setActiveChapter}
            />
          ))}
        </div>
      </div>

      <FutureChapterModal
        chapter={activeChapter}
        onClose={() => setActiveChapter(null)}
      />
    </section>
  )
}
