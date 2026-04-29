import { useState } from 'react'
import { motion } from 'framer-motion'

/* ──────────────────────────────────────────
   배경 요소들 (물결, 거품, 별, 갈매기)
────────────────────────────────────────── */

/** 하단 물결 레이어 */
function WaveBg() {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 1 }}>
      {/* 뒤 물결 (연한) */}
      <motion.div
        animate={{ x: [0, -60, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 1440 180" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path
            fill="#B8E8F0"
            fillOpacity="0.35"
            d="M0,80 C240,140 480,20 720,90 C960,160 1200,30 1440,100 L1440,180 L0,180 Z"
          />
        </svg>
      </motion.div>
      {/* 앞 물결 (진한) */}
      <motion.div
        style={{ marginTop: '-100px' }}
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 1440 140" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path
            fill="#5BC870"
            fillOpacity="0.2"
            d="M0,60 C360,120 1080,0 1440,70 L1440,140 L0,140 Z"
          />
        </svg>
      </motion.div>
      {/* 가장 앞 물결 */}
      <motion.div
        style={{ marginTop: '-80px' }}
        animate={{ x: [0, -40, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path
            fill="#E8F5EF"
            fillOpacity="0.9"
            d="M0,40 C300,90 900,0 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </motion.div>
    </div>
  )
}

/** 떠다니는 거품들 */
function Bubbles() {
  const bubbles = [
    { size: 14, x: '8%',  y: '20%', color: '#F0A820', delay: 0 },
    { size: 20, x: '88%', y: '15%', color: '#E8607A', delay: 0.8 },
    { size: 10, x: '18%', y: '72%', color: '#6E8EC8', delay: 1.6 },
    { size: 16, x: '75%', y: '68%', color: '#5BC870', delay: 0.4 },
    { size: 8,  x: '55%', y: '12%', color: '#F0A820', delay: 1.2 },
    { size: 12, x: '35%', y: '82%', color: '#E8607A', delay: 2.0 },
    { size: 18, x: '92%', y: '50%', color: '#6E8EC8', delay: 0.2 },
    { size: 9,  x: '5%',  y: '55%', color: '#5BC870', delay: 1.8 },
    { size: 22, x: '65%', y: '25%', color: '#F0A820', delay: 0.6 },
    { size: 6,  x: '48%', y: '75%', color: '#E8607A', delay: 2.4 },
  ]
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            backgroundColor: b.color,
            opacity: 0.25,
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 3.5 + i * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: b.delay,
          }}
        />
      ))}
    </div>
  )
}

/** 갈매기 실루엣 */
function Seagulls() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
      {[
        { x: '12%', y: '22%', scale: 0.7, delay: 0, dur: 9 },
        { x: '80%', y: '18%', scale: 0.5, delay: 2, dur: 11 },
        { x: '60%', y: '10%', scale: 0.6, delay: 1, dur: 8 },
      ].map((g, i) => (
        <motion.svg
          key={i}
          width="40"
          height="20"
          viewBox="0 0 40 20"
          style={{ position: 'absolute', left: g.x, top: g.y, scale: g.scale, opacity: 0.3 }}
          animate={{ x: [0, 18, 0], y: [0, -8, 0] }}
          transition={{ duration: g.dur, repeat: Infinity, ease: 'easeInOut', delay: g.delay }}
        >
          <path d="M0,10 Q10,0 20,10 Q30,0 40,10" stroke="#9B7E6A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </motion.svg>
      ))}
    </div>
  )
}

/** 반짝이는 별/하이라이트 */
function Sparkles() {
  const stars = [
    { x: '22%', y: '30%', color: '#F0A820', delay: 0 },
    { x: '78%', y: '35%', color: '#E8607A', delay: 0.7 },
    { x: '50%', y: '8%',  color: '#6E8EC8', delay: 1.4 },
    { x: '14%', y: '60%', color: '#5BC870', delay: 0.3 },
    { x: '88%', y: '62%', color: '#F0A820', delay: 1.1 },
  ]
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
      {stars.map((s, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', left: s.x, top: s.y }}
          animate={{ scale: [0.6, 1.3, 0.6], opacity: [0.4, 1, 0.4], rotate: [0, 180, 360] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path
              d="M12 2 L13.8 8.8 L21 9 L15.6 13.4 L17.4 20.2 L12 16.2 L6.6 20.2 L8.4 13.4 L3 9 L10.2 8.8 Z"
              fill={s.color}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

/** 잠보(고래) 실루엣 — 배경 하단 */
function JamboSilhouette() {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ bottom: '80px', left: '50%', transform: 'translateX(-50%)', zIndex: 1, opacity: 0.08 }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width="480" height="180" viewBox="0 0 480 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 고래 몸통 */}
        <ellipse cx="230" cy="120" rx="200" ry="60" fill="#5BC870" />
        {/* 머리 */}
        <ellipse cx="60" cy="110" rx="70" ry="50" fill="#5BC870" />
        {/* 꼬리 */}
        <path d="M420,100 Q460,60 480,40 Q470,90 480,120 Q460,110 420,130 Z" fill="#5BC870" />
        {/* 눈 */}
        <circle cx="42" cy="100" r="8" fill="white" />
        <circle cx="44" cy="101" r="4" fill="#3D2B1F" />
        {/* 입 */}
        <path d="M25,125 Q40,135 55,125" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* 등 무늬 (따개비 마을) */}
        <circle cx="180" cy="70" r="18" fill="white" fillOpacity="0.3" />
        <circle cx="240" cy="60" r="14" fill="white" fillOpacity="0.3" />
        <circle cx="300" cy="65" r="16" fill="white" fillOpacity="0.3" />
      </svg>
    </motion.div>
  )
}

/* ──────────────────────────────────────────
   캐릭터 카드
────────────────────────────────────────── */

const heroChars = [
  {
    key: 'kruru',
    korName: '크루루',
    engName: 'Kruru',
    color: '#6E8EC8',
    lightColor: '#E4EEF8',
    emoji: '🦋',
    src: '/assets/kruru-hero.png',
    duration: 2.5,
    delay: 0.4,
    size: 'medium',
    trait: '울보·힘쟁이',
  },
  {
    key: 'lou',
    korName: '루',
    engName: 'Lou',
    color: '#F0A820',
    lightColor: '#FFF0C8',
    emoji: '🐣',
    src: '/assets/lou-hero.png',
    duration: 2.8,
    delay: 0,
    size: 'large',
    trait: '호기심·예술가',
  },
  {
    key: 'bella',
    korName: '벨라',
    engName: 'Bella',
    color: '#E8607A',
    lightColor: '#FFE4EC',
    emoji: '🐰',
    src: '/assets/bella-hero.png',
    duration: 3.2,
    delay: 0.6,
    size: 'medium',
    trait: '발명가·탐험가',
  },
]

const sizeMap = {
  medium: { circle: 120, emoji: '3.5rem', img: 'w-full h-full' },
  large: { circle: 156, emoji: '4.5rem', img: 'w-full h-full' },
}

function HeroChar({ char, index }) {
  const [imgError, setImgError] = useState(false)
  const s = sizeMap[char.size]

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 + index * 0.15, type: 'spring', stiffness: 100 }}
      className="flex flex-col items-center gap-3"
      style={{ zIndex: 10, position: 'relative' }}
    >
      {/* float 애니메이션 래퍼 */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: char.duration, repeat: Infinity, ease: 'easeInOut', delay: char.delay }}
        className="flex flex-col items-center"
      >
        {/* 캐릭터 원형 + 그림자 */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 250 }}
          className="relative flex items-center justify-center rounded-full shadow-2xl overflow-hidden"
          style={{
            width: s.circle,
            height: s.circle,
            backgroundColor: char.lightColor,
            border: `4px solid ${char.color}`,
          }}
        >
          {char.src && !imgError ? (
            <img
              src={char.src}
              alt={char.korName}
              onError={() => setImgError(true)}
              className={`object-cover ${s.img}`}
              style={{ borderRadius: '50%' }}
            />
          ) : (
            <span style={{ fontSize: s.emoji }}>{char.emoji}</span>
          )}
          {/* 반짝이 효과 */}
          <motion.div
            className="absolute top-2 right-2 w-3 h-3 rounded-full"
            style={{ backgroundColor: 'white', opacity: 0.7 }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0.2, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: char.delay }}
          />
        </motion.div>

        {/* 이름 뱃지 */}
        <motion.div
          className="mt-3 flex flex-col items-center gap-1"
          whileHover={{ scale: 1.08 }}
        >
          <span
            className="font-jua text-xl md:text-2xl px-5 py-1.5 rounded-full text-white shadow-lg"
            style={{ backgroundColor: char.color, letterSpacing: '-0.01em' }}
          >
            {char.korName}
          </span>
          <span
            className="font-body text-xs px-3 py-1 rounded-full"
            style={{ backgroundColor: char.lightColor, color: char.color, fontWeight: 700, letterSpacing: '0' }}
          >
            {char.trait}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

/* ──────────────────────────────────────────
   메인 히어로 섹션
────────────────────────────────────────── */

export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16"
      style={{ background: 'linear-gradient(180deg, #FFF8EE 0%, #FBF6EE 55%, #E8F5EF 100%)' }}
    >
      {/* 배경 레이어들 */}
      <Bubbles />
      <Seagulls />
      <Sparkles />
      <JamboSilhouette />
      <WaveBg />

      {/* 메인 콘텐츠 */}
      <div className="relative w-full max-w-5xl mx-auto px-4 flex flex-col items-center" style={{ zIndex: 10 }}>

        {/* 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-center mb-10 md:mb-14"
        >
          {/* EBS 뱃지 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex items-center justify-center gap-2 mb-5"
          >
            <span className="font-body text-xs font-bold text-white px-3 py-1.5 rounded-full tracking-wide" style={{ backgroundColor: '#5BC870' }}>
              EBS 2009
            </span>
            <span className="font-body text-xs font-bold text-white px-3 py-1.5 rounded-full tracking-wide" style={{ backgroundColor: '#6E8EC8' }}>
              유아 애니메이션
            </span>
          </motion.div>

          <h1
            className="font-jua leading-tight"
            style={{
              fontSize: 'clamp(2.4rem, 6.5vw, 5.2rem)',
              color: '#3D2B1F',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              textShadow: '3px 3px 0px rgba(255,255,255,0.9), 0 6px 20px rgba(240,168,32,0.15)',
            }}
          >
            상상하면 뭐든
            <br />
            <span style={{
              color: '#F0A820',
              textShadow: '3px 3px 0px rgba(255,255,255,0.9)',
            }}>
              이루어지는 세상
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-body mt-4 font-medium"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: '#7A5A48', letterSpacing: '-0.01em' }}
          >
            따개비 마을에 놀러 오세요 🐣
          </motion.p>
        </motion.div>

        {/* 캐릭터 3인방 */}
        <div className="flex items-end justify-center gap-4 sm:gap-8 md:gap-16 w-full mb-4">
          {heroChars.map((char, i) => (
            <HeroChar key={char.key} char={char} index={i} />
          ))}
        </div>

        {/* 하단 정보 텍스트 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="font-body text-xs md:text-sm mt-4"
          style={{ color: '#9B7E6A', zIndex: 10, position: 'relative' }}
        >
          이랜드 올리브스튜디오 제작 · EBS 방영
        </motion.p>

        {/* CTA 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex gap-3 mt-6"
          style={{ zIndex: 10, position: 'relative' }}
        >
          <motion.a
            href="https://www.youtube.com/@barnaclelou6561"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="font-body font-bold text-sm text-white px-7 py-3.5 rounded-full shadow-lg flex items-center gap-2"
            style={{ backgroundColor: '#F0A820' }}
          >
            <span>▶</span> 영상 보러가기
          </motion.a>
          <motion.a
            href="https://instagram.com/barnacle_lou"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="font-body font-bold text-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-2 bg-white"
            style={{ color: '#E8607A', border: '2px solid #E8607A' }}
          >
            ♥ 인스타 팔로우
          </motion.a>
        </motion.div>
      </div>

      {/* 스크롤 유도 화살표 */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ bottom: '110px', zIndex: 12 }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5BC870" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </section>
  )
}
