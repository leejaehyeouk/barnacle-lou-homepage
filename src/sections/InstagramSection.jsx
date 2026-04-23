import { motion } from 'framer-motion'
import PhoneMockup from '../components/PhoneMockup'

export default function InstagramSection() {
  return (
    <section style={{ backgroundColor: '#E8F5EF' }} className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center md:text-left"
          >
            <span
              className="inline-block text-xs font-body font-bold px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: '#E8607A', color: '#fff' }}
            >
              INSTAGRAM
            </span>
            <h2
              className="font-jua mb-4"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#3D2B1F', lineHeight: 1.25, letterSpacing: '-0.02em' }}
            >
              매일매일 따개비 마을 소식 📱
            </h2>
            <p className="font-body text-base md:text-lg text-muted mb-8 max-w-md mx-auto md:mx-0" style={{ lineHeight: 1.8 }}>
              루, 벨라, 크루루의 신나는 모험이 매일 인스타그램에 올라와요.
              팔로우하고 따개비 마을 소식을 가장 먼저 받아보세요!
            </p>
            <motion.a
              href="https://instagram.com/barnacle_lou"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 font-body font-bold text-white px-7 py-3.5 rounded-full shadow-lg transition-colors"
              style={{ backgroundColor: '#E8607A' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              인스타 팔로우하기 @barnacle_lou
            </motion.a>

            <div className="flex gap-6 mt-10 justify-center md:justify-start">
              {[
                { label: '팔로워', value: '12.4k' },
                { label: '게시물', value: '348' },
                { label: '좋아요', value: '28.1k' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-jua text-2xl" style={{ color: '#F0A820', letterSpacing: '-0.01em' }}>{stat.value}</p>
                  <p className="font-body text-xs text-muted font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
