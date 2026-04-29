import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import FooterSection from '../sections/FooterSection'
import { goods as fallbackGoods } from '../data/mockData'

const SHOP_URL = 'https://smartstore.naver.com/olivefriendsshop'

// mockData를 폴백용 형태로 변환
const FALLBACK_PRODUCTS = fallbackGoods.map((g) => ({
  id: String(g.id),
  name: g.name,
  price: g.price,
  imageUrl: null,
  productUrl: SHOP_URL,
  isSoldOut: false,
  _meta: { color: g.color, lightColor: g.lightColor, emoji: g.emoji, badge: g.badge },
}))

const CARD_COLORS = ['#F0A820', '#E8607A', '#6E8EC8', '#5BC870']
const CARD_LIGHTS = ['#FFF0C8', '#FFE4EC', '#E4EEF8', '#E0F4EA']

const G = {
  bannerTitle: '따개비루 공식 굿즈 스토어',
  bannerDesc: '루, 벨라, 크루루의 귀여운 굿즈를 만나보세요!',
  bannerBtn: '콜렉션 바로가기',
  buyBtn: '구매하기',
  ctaTitle: '🛒 더 많은 굿즈 보기',
  ctaDesc: '공식 쇼핑몰에서 다양한 따개비루 굿즈를 만나보세요!',
  ctaBtn: '공식 쇼핑몰 바로가기',
}

// 스켈레톤 카드
function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col animate-pulse">
      <div className="h-44 bg-gray-100" />
      <div className="p-4 flex flex-col gap-2">
        <div className="h-3.5 bg-gray-200 rounded w-3/4" />
        <div className="h-5 bg-gray-200 rounded w-1/2" />
        <div className="h-9 bg-gray-200 rounded-xl mt-2" />
      </div>
    </div>
  )
}

// 개별 상품 카드
function ProductCard({ product, index }) {
  const color = product._meta?.color ?? CARD_COLORS[index % CARD_COLORS.length]
  const lightColor = product._meta?.lightColor ?? CARD_LIGHTS[index % CARD_LIGHTS.length]
  const emoji = product._meta?.emoji ?? '🐣'
  const badge = product._meta?.badge ?? null

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col relative"
    >
      {badge && (
        <span
          className="absolute top-3 right-3 text-xs font-bold text-white px-2 py-0.5 rounded-full z-10"
          style={{ backgroundColor: color }}
        >
          {badge}
        </span>
      )}

      {product.isSoldOut && (
        <div className="absolute inset-0 bg-black/30 z-20 flex items-center justify-center rounded-2xl">
          <span className="bg-white/90 text-gray-700 font-body font-bold text-sm px-4 py-1.5 rounded-full">
            품절
          </span>
        </div>
      )}

      <a
        href={product.productUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* 상품 이미지 */}
        <div
          className="flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: lightColor, minHeight: '11rem' }}
        >
          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-44 object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextSibling.style.display = 'flex'
              }}
            />
          ) : null}
          {/* 이미지 없거나 로드 실패 시 이모지 */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-md"
            style={{
              backgroundColor: color,
              display: product.imageUrl ? 'none' : 'flex',
            }}
          >
            {emoji}
          </div>
        </div>

        <div className="p-4">
          <h3
            className="font-body font-bold text-sm text-warm mb-1 line-clamp-2"
            style={{ letterSpacing: '-0.01em' }}
          >
            {product.name}
          </h3>
          {product.price && (
            <p className="font-jua text-xl" style={{ color, letterSpacing: '-0.01em' }}>
              {product.price}
            </p>
          )}
        </div>
      </a>

      <div className="px-4 pb-4 mt-auto">
        <motion.a
          href={product.productUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="block text-center text-white text-sm font-body font-bold py-2.5 rounded-xl"
          style={{ backgroundColor: product.isSoldOut ? '#ccc' : color }}
        >
          {product.isSoldOut ? '품절' : G.buyBtn}
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function Goods() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [source, setSource] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch('/api/products')
        const data = await res.json()

        if (!cancelled) {
          if (data.products && data.products.length > 0) {
            setProducts(data.products)
            setSource(data.source)
          } else {
            // 크롤링 실패 → 폴백
            setProducts(FALLBACK_PRODUCTS)
            setSource('fallback')
          }
        }
      } catch {
        if (!cancelled) {
          setProducts(FALLBACK_PRODUCTS)
          setSource('fallback')
        }
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
      <section className="py-16 text-center" style={{ backgroundColor: '#F0A820' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-4"
        >
          <p className="font-body text-white/80 text-sm mb-2 font-semibold tracking-widest">
            OFFICIAL GOODS
          </p>
          <h1
            className="font-jua text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
          >
            {G.bannerTitle}
          </h1>
          <p className="font-body text-white/90 text-base mb-6 font-medium">
            {G.bannerDesc}
          </p>
          <motion.a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block bg-white font-body font-bold px-8 py-3.5 rounded-full shadow-lg"
            style={{ color: '#F0A820' }}
          >
            {G.bannerBtn}
          </motion.a>
        </motion.div>
      </section>

      {/* 상품 그리드 */}
      <section style={{ backgroundColor: '#FBF6EE' }} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">

          {/* 데이터 출처 배지 (개발 편의용, 필요 없으면 제거 가능) */}
          {source === 'live' && (
            <p className="text-right text-xs text-gray-400 font-body mb-4">
              ✓ 스마트스토어 실시간 상품
            </p>
          )}
          {source === 'fallback' && (
            <p className="text-right text-xs text-gray-400 font-body mb-4">
              ※ 스토어 연결 중… 일부 정보가 최신이 아닐 수 있어요
            </p>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
              : products.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
          </div>

          {/* 하단 CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-14 bg-white rounded-3xl p-8 shadow-sm"
          >
            <p
              className="font-jua text-2xl mb-2"
              style={{ color: '#F0A820', letterSpacing: '-0.01em' }}
            >
              {G.ctaTitle}
            </p>
            <p className="font-body text-sm text-muted mb-5 font-medium">{G.ctaDesc}</p>
            <motion.a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block font-body font-bold text-white px-10 py-3.5 rounded-full shadow-md"
              style={{ backgroundColor: '#F0A820' }}
            >
              {G.ctaBtn}
            </motion.a>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
