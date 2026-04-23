import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CharacterCard({ name, korName, color, lightColor, description, trait, emoji, src }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="rounded-3xl overflow-hidden shadow-md bg-white flex flex-col"
    >
      <div
        className="flex items-center justify-center py-10 relative"
        style={{ backgroundColor: lightColor }}
      >
        {src && !imgError ? (
          <img
            src={src}
            alt={korName}
            onError={() => setImgError(true)}
            className="w-36 h-36 object-contain drop-shadow-lg"
          />
        ) : (
          <CharPlaceholder color={color} emoji={emoji} name={korName} size="large" />
        )}
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-jua text-2xl" style={{ color }}>
            {korName}
          </h3>
          <span className="text-xs font-body text-white font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: color }}>
            {name}
          </span>
        </div>
        <span
          className="inline-block self-start text-xs font-body font-semibold px-3 py-1 rounded-full"
          style={{ backgroundColor: lightColor, color }}
        >
          {trait}
        </span>
        <p className="text-sm font-body text-warm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export function CharPlaceholder({ color, emoji, name, size = 'medium' }) {
  const sizeMap = {
    small: { outer: 'w-16 h-16', text: 'text-2xl', nameText: 'text-xs' },
    medium: { outer: 'w-24 h-24', text: 'text-3xl', nameText: 'text-sm' },
    large: { outer: 'w-36 h-36', text: 'text-5xl', nameText: 'text-base' },
    hero: { outer: 'w-44 h-44 md:w-52 md:h-52', text: 'text-6xl', nameText: 'text-lg' },
  }
  const s = sizeMap[size] || sizeMap.medium

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`${s.outer} rounded-full flex items-center justify-center shadow-lg`}
        style={{ backgroundColor: color }}
      >
        <span className={s.text}>{emoji}</span>
      </div>
      {name && (
        <span className={`font-pen ${s.nameText} font-bold`} style={{ color }}>
          {name}
        </span>
      )}
    </div>
  )
}
