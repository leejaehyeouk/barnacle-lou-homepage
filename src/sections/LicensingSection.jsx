import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import WaveDivider from '../components/WaveDivider'
import { licensingCategories } from '../data/mockData'

export default function LicensingSection() {
  return (
    <>
      <WaveDivider from="#E8F5EF" to="#FFFFFF" />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span
              className="inline-block text-xs font-body font-bold px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: '#6E8EC8', color: '#fff' }}
            >
              LICENSING
            </span>
            <h2
              className="font-jua"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#3D2B1F', letterSpacing: '-0.02em', lineHeight: 1.25 }}
            >
              따개비루 IP 라이센싱
            </h2>
            <p className="font-body text-muted mt-3 max-w-lg mx-auto font-medium" style={{ lineHeight: 1.7 }}>
              사랑받는 캐릭터 IP로 새로운 가치를 만들어보세요
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {licensingCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="rounded-2xl bg-white shadow-md overflow-hidden flex flex-col"
                style={{ borderTop: `4px solid ${cat.color}` }}
              >
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div className="text-4xl">{cat.icon}</div>
                  <h3 className="font-jua text-2xl" style={{ color: cat.color, letterSpacing: '-0.01em' }}>
                    {cat.title}
                  </h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{cat.desc}</p>
                  <ul className="mt-auto space-y-1">
                    {cat.details.map((d) => (
                      <li key={d} className="font-body text-xs text-warm flex items-center gap-2">
                        <span style={{ color: cat.color }}>•</span> {d}
                      </li>
                    ))}
                  </ul>
                  <Link to="/licensing">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block mt-3 text-sm font-body font-bold px-5 py-2 rounded-full text-white transition-colors"
                      style={{ backgroundColor: cat.color }}
                    >
                      자세히 보기 →
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
