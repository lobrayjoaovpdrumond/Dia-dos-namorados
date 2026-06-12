import styles from './GardenDecor.module.css'

interface GardenDecorProps {
  variant?: 'hero' | 'feelings' | 'story' | 'future'
}

export default function GardenDecor({ variant = 'hero' }: GardenDecorProps) {
  return (
    <div className={`${styles.decor} ${styles[variant]}`} aria-hidden="true">
      <svg className={styles.sunflowerLeft} viewBox="0 0 120 200" fill="none">
        <path d="M60 120 Q58 160 60 200" stroke="#5A8F6B" strokeWidth="3" fill="none" />
        <ellipse cx="45" cy="175" rx="18" ry="8" fill="#5A8F6B" opacity="0.6" transform="rotate(-30 45 175)" />
        <ellipse cx="75" cy="185" rx="16" ry="7" fill="#5A8F6B" opacity="0.5" transform="rotate(25 75 185)" />
        <circle cx="60" cy="55" r="28" fill="#E8B84A" opacity="0.9" />
        <circle cx="60" cy="55" r="14" fill="#C99A2E" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <ellipse
            key={angle}
            cx="60"
            cy="20"
            rx="10"
            ry="22"
            fill="#F5D78E"
            opacity="0.85"
            transform={`rotate(${angle} 60 55)`}
          />
        ))}
      </svg>

      <svg className={styles.sunflowerRight} viewBox="0 0 100 160" fill="none">
        <path d="M50 95 Q48 130 50 160" stroke="#5A8F6B" strokeWidth="2.5" fill="none" />
        <circle cx="50" cy="42" r="22" fill="#E8B84A" opacity="0.8" />
        <circle cx="50" cy="42" r="11" fill="#C99A2E" />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <ellipse
            key={angle}
            cx="50"
            cy="18"
            rx="8"
            ry="18"
            fill="#F5D78E"
            opacity="0.8"
            transform={`rotate(${angle} 50 42)`}
          />
        ))}
      </svg>

      <svg className={styles.roseTop} viewBox="0 0 80 100" fill="none">
        <path d="M40 60 Q38 80 40 100" stroke="#3D6B4F" strokeWidth="2" fill="none" />
        <ellipse cx="30" cy="78" rx="10" ry="5" fill="#5A8F6B" opacity="0.6" transform="rotate(-20 30 78)" />
        <circle cx="40" cy="35" r="18" fill="#C96B6B" opacity="0.85" />
        <circle cx="32" cy="28" r="10" fill="#E8A0A0" opacity="0.7" />
        <circle cx="48" cy="30" r="9" fill="#A84F4F" opacity="0.6" />
        <circle cx="40" cy="22" r="8" fill="#C96B6B" />
      </svg>

      <svg className={styles.roseBottom} viewBox="0 0 60 80" fill="none">
        <path d="M30 48 Q28 65 30 80" stroke="#3D6B4F" strokeWidth="1.5" fill="none" />
        <circle cx="30" cy="28" r="14" fill="#C96B6B" opacity="0.75" />
        <circle cx="24" cy="22" r="8" fill="#E8A0A0" opacity="0.65" />
        <circle cx="36" cy="24" r="7" fill="#A84F4F" opacity="0.55" />
      </svg>

      <div className={styles.sunGlow} />
    </div>
  )
}
