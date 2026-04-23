import { motion } from 'framer-motion'
import FooterSection from '../sections/FooterSection'
import { goods } from '../data/mockData'

const SHOP_URL = 'https://url.kr/gz81o9'

const G = {
  bannerTitle: '\ub530\uac1c\ube44\ub8e8 \uacf5\uc2dd \uad7f\uc988 \uc2a4\ud1a0\uc5b4',
  bannerDesc: '\ub8e8, \ubca8\ub77c, \ud06c\ub8e8\ub8e8\uc758 \uadc0\uc5ec\uc6b4 \uad7f\uc988\ub97c \ub9cc\ub098\ubcf4\uc138\uc694!',
  bannerBtn: '\ucf5c\ub809\uc158 \ubc14\ub85c\uac00\uae30',
  buyBtn: '\uad6c\ub9e4\ud558\uae30',
  ctaTitle: '\uD83D\uDED2 \ub354 \ub9ce\uc740 \uad7f\uc988 \ubcf4\uae30',
  ctaDesc: '\uacf5\uc2dd \uc1fc\ud551\uba3c\uc5d0\uc11c \ub2e4\uc591\ud55c \ub530\uac1c\ube44\ub8e8 \uad7f\uc988\ub97c \ub9cc\ub098\ubcf4\uc138\uc694!',
  ctaBtn: '\uACF5\uc2dd \uc1fc\ud551\uba3c \ubc14\ub85c\uac00\uae30',
}

export default function Goods() {
  return (
    <main className="pt-16">
      <section className="py-16 text-center" style={{ backgroundColor: '#F0A820' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-4"
        >
          <p className="font-body text-white/80 text-sm mb-2 font-semibold tracking-widest">OFFICIAL GOODS</p>
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

      <section style={{ backgroundColor: '#FBF6EE' }} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {goods.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.1 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col relative"
              >
                {item.badge && (
                  <span
                    className="absolute top-3 right-3 text-xs font-bold text-white px-2 py-0.5 rounded-full z-10"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.badge}
                  </span>
                )}
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="block">
                  <div
                    className="flex items-center justify-center py-10"
                    style={{ backgroundColor: item.lightColor }}
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-md"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.emoji}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-body font-bold text-sm text-warm mb-1 line-clamp-2" style={{ letterSpacing: '-0.01em' }}>
                      {item.name}
                    </h3>
                    <p className="font-jua text-xl" style={{ color: item.color, letterSpacing: '-0.01em' }}>
                      {item.price}
                    </p>
                  </div>
                </a>
                <div className="px-4 pb-4 mt-auto">
                  <motion.a
                    href={SHOP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="block text-center text-white text-sm font-body font-bold py-2.5 rounded-xl"
                    style={{ backgroundColor: item.color }}
                  >
                    {G.buyBtn}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-14 bg-white rounded-3xl p-8 shadow-sm"
          >
            <p className="font-jua text-2xl mb-2" style={{ color: '#F0A820', letterSpacing: '-0.01em' }}>{G.ctaTitle}</p>
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
