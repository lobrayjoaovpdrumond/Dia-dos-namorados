import { useEffect, useState } from 'react'
import { useUnlock } from '../context/UnlockContext'
import styles from './MemoryGame.module.css'

interface Card {
  id: number
  imageUrl: string
  isFlipped: boolean
  isMatched: boolean
}

const cardImages = [
  '/images/cards/card-1.png',
  '/images/cards/card-2.png',
  '/images/cards/card-3.png',
  '/images/cards/card-4.png',
  '/images/cards/card-5.png',
  '/images/cards/card-6.png',
  '/images/cards/card-7.png',
  '/images/cards/card-8.png',
]

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function MemoryGame() {
  const { phase, completeMemoryGame } = useUnlock()
  const [cards, setCards] = useState<Card[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [canFlip, setCanFlip] = useState(true)

  useEffect(() => {
    if (phase !== 'memory_game') return

    const doubledImages = [...cardImages, ...cardImages]
    const shuffled = shuffleArray(doubledImages)
    const initialCards = shuffled.map((imageUrl, index) => ({
      id: index,
      imageUrl,
      isFlipped: false,
      isMatched: false,
    }))
    setCards(initialCards)
    setFlippedCards([])
    setCanFlip(true)
  }, [phase])

  useEffect(() => {
    if (flippedCards.length !== 2) return

    const [first, second] = flippedCards
    const firstCard = cards[first]
    const secondCard = cards[second]

    if (firstCard.imageUrl === secondCard.imageUrl) {
      setCards(prev =>
        prev.map(card =>
          card.id === first || card.id === second
            ? { ...card, isMatched: true }
            : card
        )
      )
      setFlippedCards([])
      setCanFlip(true)
    } else {
      setCanFlip(false)
      setTimeout(() => {
        setCards(prev =>
          prev.map(card =>
            card.id === first || card.id === second
              ? { ...card, isFlipped: false }
              : card
          )
        )
        setFlippedCards([])
        setCanFlip(true)
      }, 1000)
    }
  }, [flippedCards, cards])

  useEffect(() => {
    if (cards.length === 0) return
    if (cards.every(card => card.isMatched)) {
      setTimeout(() => {
        completeMemoryGame()
      }, 800)
    }
  }, [cards, completeMemoryGame])

  const handleCardClick = (id: number) => {
    if (!canFlip || flippedCards.length >= 2) return
    const card = cards[id]
    if (card.isFlipped || card.isMatched) return

    setCards(prev =>
      prev.map(c => (c.id === id ? { ...c, isFlipped: true } : c))
    )
    setFlippedCards(prev => [...prev, id])
  }

  if (phase !== 'memory_game') return null

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h2 className={styles.title}>Jogo da Memória</h2>
        <p className={styles.subtitle}>
          Encontre todos os pares de imagens do nosso jardim 🌻
        </p>

        <div className={styles.grid}>
          {cards.map(card => (
            <button
              key={card.id}
              className={`${styles.card} ${
                card.isFlipped || card.isMatched ? styles.flipped : ''
              } ${card.isMatched ? styles.matched : ''}`}
              onClick={() => handleCardClick(card.id)}
              disabled={!canFlip || card.isFlipped || card.isMatched}
              aria-label={`Carta ${card.id + 1}`}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <span className={styles.flowerIcon}>🌸</span>
                </div>
                <div className={styles.cardBack}>
                  <img src={card.imageUrl} alt="" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
