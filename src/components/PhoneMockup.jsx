import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { instagramPosts } from '../data/mockData'

const slideVariants = {
  enter: { x: 40, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -40, opacity: 0 },
}

function formatLikes(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return String(n)
}

export default function PhoneMockup() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % instagramPosts.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const post = instagramPosts[current]

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative overflow-hidden"
        style={{
          width: '280px',
          height: '560px',
          borderRadius: '40px',
          border: '6px solid #1a1a1a',
          background: '#fff',
          boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        }}
      >
        {/* 노치 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#1a1a1a] rounded-b-2xl z-10" />

        {/* 인스타 헤더 */}
        <div className="flex items-center gap-2 px-4 pt-8 pb-3 border-b border-gray-100">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, #F0A820, #E8607A)' }}
          >
            B
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800">barnacle_lou</p>
            <p className="text-[10px] text-gray-400">따개비루 공식</p>
          </div>
          <div className="ml-auto">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8607A" strokeWidth="2.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="#E8607A" stroke="none" />
            </svg>
          </div>
        </div>

        {/* 게시물 슬라이드 */}
        <div className="relative overflow-hidden" style={{ height: '300px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={post.id}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute inset-0 flex flex-col items-center justify-center"
              style={{ backgroundColor: post.bgColor }}
            >
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-5xl shadow-md"
                style={{ backgroundColor: post.charColor }}
              >
                {post.emoji}
              </div>
              <p className="mt-3 font-pen text-2xl" style={{ color: post.charColor }}>
                {post.charName}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 게시물 하단 */}
        <div className="px-4 pt-3">
          <div className="flex items-center gap-3 mb-2">
            <button className="text-bella">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
            <button>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </button>
          </div>
          <p className="text-xs font-bold text-gray-700">좋아요 {formatLikes(post.likes)}개</p>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            <span className="font-bold text-gray-800">barnacle_lou </span>
            {post.caption}
          </p>
          <p className="text-[10px] mt-1" style={{ color: post.charColor }}>
            {post.tags}
          </p>
        </div>

        {/* 인디케이터 */}
        <div className="flex justify-center gap-1.5 mt-3">
          {instagramPosts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? '16px' : '6px',
                height: '6px',
                backgroundColor: i === current ? '#F0A820' : '#d1d5db',
              }}
              aria-label={`슬라이드 ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
