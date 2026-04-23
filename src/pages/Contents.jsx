import { motion } from 'framer-motion'
import FooterSection from '../sections/FooterSection'
import { episodes } from '../data/mockData'

const C = {
  bannerTitle: '\ub530\uac1c\ube44\ub8e8 YouTube',
  bannerDesc: '\ub8e8, \ubca8\ub77c, \ud06c\ub8e8\ub8e8\uc758 \uc2e0\ub098\ub294 \ubaa8\ud5d8\uc774 \ub9e4\uc77c \uc5c5\ub85c\ub4dc\ub429\ub2c8\ub2e4!',
  btnLabel: '\ucc44\ub110 \uad6c\ub3c5\ud558\uae30 @barnaclelou6561',
  episodeTitle: '\uc5d0\ud53c\uc18c\ub4dc',
  viewsUnit: '\uc870\ud68c\uc218',
  moreBtn: '\uD83D\uDCFA \uc720\ud29c\ube0c\uc5d0\uc11c \ub354 \ubcf4\uae30',
}

function formatViews(n) {
  if (n >= 10000) return Math.floor(n / 10000) + '\ub9cc'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return String(n)
}

export default function Contents() {
  return (
    <main className="pt-16">
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
              {C.bannerTitle}
            </h1>
          </div>
          <p className="font-body text-white/90 text-base mb-6 font-medium">
            {C.bannerDesc}
          </p>
          <motion.a
            href="https://www.youtube.com/@barnaclelou6561"
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
            {C.btnLabel}
          </motion.a>
        </motion.div>
      </section>

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
              {C.episodeTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodes.map((ep, i) => (
              <motion.a
                key={ep.id}
                href={ep.ytUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="rounded-2xl overflow-hidden bg-white shadow-md block group"
              >
                <div
                  className="relative flex items-center justify-center"
                  style={{ backgroundColor: ep.bgColor, height: '180px' }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-md"
                    style={{ backgroundColor: ep.charColor + 'CC' }}
                  >
                    {ep.charEmoji}
                  </div>
                  <span
                    className="absolute top-3 left-3 text-xs font-body font-bold px-2 py-1 rounded-lg text-white"
                    style={{ backgroundColor: ep.charColor }}
                  >
                    {ep.ep}
                  </span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#E8607A" stroke="none">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-body font-bold text-sm text-warm mb-1 group-hover:text-lou transition-colors" style={{ letterSpacing: '-0.01em' }}>
                    {ep.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-xs text-muted font-medium">{ep.charName}</span>
                    <span className="font-body text-xs text-muted font-medium">{C.viewsUnit} {formatViews(ep.views)}</span>
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
              href="https://www.youtube.com/@barnaclelou6561"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body font-bold text-white px-8 py-3.5 rounded-full shadow-md"
              style={{ backgroundColor: '#E8607A' }}
            >
              {C.moreBtn}
            </a>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
