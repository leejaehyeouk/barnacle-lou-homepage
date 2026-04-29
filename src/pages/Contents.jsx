import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import FooterSection from '../sections/FooterSection'

const YT_URL = 'https://www.youtube.com/@barnaclelou6561'

function formatViews(n) {
  if (n >= 10000) return Math.floor(n / 10000) + '만'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return String(n)
}

function formatSubs(n) {
  if (n >= 10000) return (n / 10000).toFixed(1) + '만'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return String(n)
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col animate-pulse">
      <div className="h-44 bg-gray-100" />
      <div className="p-4 flex flex-col gap-2">
        <div className="h-3.5 bg-gray-200 rounded w-full" />
        <div className="h-3.5 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2 mt-1" />
      </div>
    </div>
  )
}

export default function Contents() {
  const [videos, setVideos] = useState([])
  const [channel, setChannel] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch('/api/youtube')
        const data = await res.json()
        if (!cancelled) {
          if (data.error) {
            setError(data.error)
          } else {
            setVideos(data.videos || [])
            setChannel(data.channel || null)
          }
        }
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [])

  return (
    <main className="pt-16">
      {/* 배너 */}
      <section
        className="py-14 text-center"
        style={{ background: 'linear-gradient(135deg, #F0A820 0%, #E8607A 100%)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#E8607A" />
              </svg>
            </div>
            <h1 className="font-jua text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              따개비루 YouTube
            </h1>
          </div>
          <p className="font-body text-white/90 text-base mb-6 font-medium">
            루, 벨라, 크루루의 신나는 모험이 유튜브에 올라와 있어요!
          </p>

          {/* 채널 통계 */}
          {channel && (
            <div className="flex justify-center gap-8 mb-6">
              {[
                { label: '구독자', value: formatSubs(channel.subscriberCount) },
                { label: '영상', value: channel.videoCount.toLocaleString() + '개' },
                { label: '총 조회수', value: formatViews(channel.viewCount) },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-jua text-2xl text-white" style={{ letterSpacing: '-0.01em' }}>{s.value}</p>
                  <p className="font-body text-xs text-white/70 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          )}

          <motion.a
            href={YT_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 bg-white font-body font-bold px-7 py-3 rounded-full text-sm shadow-lg"
            style={{ color: '#E8607A' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#E8607A" stroke="none">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
            </svg>
            채널 구독하기 @barnaclelou6561
          </motion.a>
        </motion.div>
      </section>

      {/* 영상 그리드 */}
      <section style={{ backgroundColor: '#FBF6EE' }} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2
              className="font-jua"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: '#3D2B1F', letterSpacing: '-0.02em' }}
            >
              최신 에피소드
            </h2>
          </motion.div>

          {error && (
            <p className="text-center text-sm text-gray-400 font-body mb-6">영상을 불러오지 못했어요. 잠시 후 다시 시도해주세요.</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
              : videos.map((video, i) => (
                  <motion.a
                    key={video.id}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="rounded-2xl overflow-hidden bg-white shadow-md block group"
                  >
                    {/* 썸네일 */}
                    <div className="relative overflow-hidden" style={{ height: '180px' }}>
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#E8607A" stroke="none">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-body font-bold text-sm text-warm mb-2 line-clamp-2 group-hover:text-lou transition-colors" style={{ letterSpacing: '-0.01em' }}>
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="font-body text-xs text-muted font-medium">
                          {new Date(video.publishedAt).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                        <span className="font-body text-xs text-muted font-medium">
                          조회수 {formatViews(video.views)}
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a
              href={YT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body font-bold text-white px-8 py-3.5 rounded-full shadow-md"
              style={{ backgroundColor: '#E8607A' }}
            >
              📺 유튜브에서 더 보기
            </a>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
