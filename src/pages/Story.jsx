import { motion } from 'framer-motion'
import CharacterCard from '../components/CharacterCard'
import FooterSection from '../sections/FooterSection'
import { characters } from '../data/mockData'

const S = {
  heroTitle: '\ub530\uac1c\ube44 \ub9c8\uc744\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4',
  heroDesc: '\ub530\uac1c\ube44 \ub9c8\uc744\uc740 \uc2e0\ube44\ud55c \ubc14\ub2f7\uc18d \uc544\uc774\ub4e4\uc774 \ud568\uaed8 \ub180\uace0 \ubc30\uc6b0\ub294 \uacf5\uac04\uc785\ub2c8\ub2e4. '
    + '\uc544\uae30 \uace0\ub798 \uc78c\ubcf4 \ub4f1 \uc704\uc5d0 \uc790\ub9ac\ub97c \uc7a1\uc740 \ub8e8\ub294 \ub3d9\uc0dd\ub4e4\uacfc \ud568\uaed8, '
    + '\ub9e4\uc77c\ub9e4\uc77c \uc0c8\ub85c\uc6b4 \ud0d0\ud5d8\uc744 \ub2f4\uc740 \uc774\uc57c\uae30\ub97c \ub9cc\ub4e4\uc5b4\uac11\ub2c8\ub2e4.',
  stat1Label: '\ubc29\uc601\ub144\ub3c4',
  stat1Value: '2009',
  stat2Label: '\ubc29\uc1a1\uc0ac',
  stat2Value: 'EBS',
  stat3Label: '\uc81c\uc791\uc0ac',
  stat3Value: '\uc62c\ub9ac\ube0c\uc2a4\ud29c\ub514\uc624',
  worldTitle: '\ub530\uac1c\ube44 \ub9c8\uc744 \uc138\uacc4\uad00',
  characters: '\ub4f1\uc7a5\uc778\ubb3c',
  worldCards: [
    {
      id: 'w1',
      title: '\uc2e0\ube44\ub85c\uc6b4 \ubc14\ub2f7\uc18d \uc138\uacc4',
      desc: '\ub530\uac1c\ube44 \ub9c8\uc744\uc740 \ud558\ub298\uacfc \ubc14\ub2e4\uac00 \ub9de\ub2ff\ub2ff\ud55c \uc544\ub984\ub2e4\uc6b4 \uacf3\uc785\ub2c8\ub2e4. \uc544\uae30\uc790\uae30 \uc0c9\uac15\ud55c \ubb3c\uace0\uae30\uc640 \ud574\uc591\uc0dd\ubb3c\ub4e4\uc774 \ud568\uaed8 \uc0b4\uc544\uac00\ub294 \ud3c9\ud654\ub85c\uc6b4 \uc138\uacc4\uc785\ub2c8\ub2e4.',
      emoji: '\uD83C\uDF0A',
      color: '#F0A820',
    },
    {
      id: 'w2',
      title: '\ub8e8, \ubca8\ub77c, \ud06c\ub8e8\ub8e8\uc758 \uc6b0\uc815',
      desc: '\ub8e8\ub294 \uc790\uc2e0\uc774 \ub530\uac1c\ube44\uc778 \uc904 \uc54c\uc544\uc694. \ub2e4\ub978 \ub3d9\uc0dd\ub4e4\uacfc \ud568\uaed8 \uc6c3\uace0 \uc6b8\uace0 \ubb35\ub354\uac00\uba70 \uc11c\ub85c\ub97c \uc774\ud574\ud574\uac00\ub294 \uac83\uc774 \uc774 \uc560\ub2c8\uba54\uc774\uc158\uc758 \ud575\uc2ec\uc785\ub2c8\ub2e4.',
      emoji: '\uD83D\uDC4B',
      color: '#6E8EC8',
    },
    {
      id: 'w3',
      title: '\uc78c\ubcf4 \ub4f1 \uc704\uc758 \ub530\uac1c\ube44 \ub9c8\uc744',
      desc: '\ub8e8\ub294 \uc544\uae30\uace0\ub798 \uc78c\ubcf4\uc758 \ub4f1 \uc704\uc5d0\uc11c \uc0b4\uc544\uc694. \uc78c\ubcf4\ub294 \uc9c0\uad6c\uc5d0\uc11c \uac00\uc7a5 \uc608\uc058 \ud48d\uacbd\uc744 \ubcf4\uc5ec\uc8fc\ub294 \ub530\ub73b\ud55c \uc9d1\uc785\ub2c8\ub2e4.',
      emoji: '\uD83D\uDC0B',
      color: '#5BC870',
    },
    {
      id: 'w4',
      title: '\uc0c1\uc0c1\ud558\uba74 \ub71c\ub4e0 \uc774\ub8e8\uc5b4\uc9c0\ub294 \uc138\uc0c1',
      desc: '\ub530\uac1c\ube44\ub8e8\uc758 \uc8fc\ub9b0 \uba54\uc2dc\uc9c0\ub294 \uc0c1\uc0c1\ub825\uacfc \uc6a9\uae30\uc785\ub2c8\ub2e4. \ub9e4 \uc5d0\ud53c\uc18c\ub4dc\ub9c8\ub2e4 \ub8e8\uc640 \uce5c\uad6c\ub4e4\uc774 \ud568\uaed8 \ubb38\uc81c\ub97c \ud48d\uc5b4\ub098\uac00\ub294 \uc774\uc57c\uae30\uc785\ub2c8\ub2e4.',
      emoji: '\uD83C\uDFA8',
      color: '#E8607A',
    },
  ],
}

export default function Story() {
  return (
    <main className="pt-16">
      <section
        className="py-24 md:py-32 text-center relative overflow-hidden"
        style={{ backgroundColor: '#FBF6EE' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-15"
              style={{
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                backgroundColor: ['#F0A820', '#E8607A', '#6E8EC8', '#5BC870'][i],
                left: `${[5, 85, 20, 75][i]}%`,
                top: `${[10, 15, 70, 65][i]}%`,
              }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block text-xs font-body font-bold px-3 py-1 rounded-full mb-5 tracking-widest"
              style={{ backgroundColor: '#5BC870', color: '#fff' }}
            >
              STORY
            </span>
            <h1
              className="font-jua mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#3D2B1F', lineHeight: 1.2, letterSpacing: '-0.02em' }}
            >
              {S.heroTitle}
            </h1>
            <p className="font-body text-base md:text-lg text-muted max-w-2xl mx-auto" style={{ lineHeight: 1.8 }}>
              {S.heroDesc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 grid grid-cols-3 gap-4 max-w-sm mx-auto"
          >
            {[
              { id: 's1', label: S.stat1Label, value: S.stat1Value },
              { id: 's2', label: S.stat2Label, value: S.stat2Value },
              { id: 's3', label: S.stat3Label, value: S.stat3Value },
            ].map((s) => (
              <div key={s.id} className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <p className="font-jua text-xl" style={{ color: '#F0A820', letterSpacing: '-0.01em' }}>{s.value}</p>
                <p className="font-body text-xs text-muted mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="font-jua"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', color: '#3D2B1F', letterSpacing: '-0.02em' }}
            >
              {S.worldTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {S.worldCards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl"
                style={{ backgroundColor: card.color + '18' }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: card.color }}
                >
                  {card.emoji}
                </div>
                <div>
                  <h3 className="font-jua text-xl mb-2" style={{ color: card.color, letterSpacing: '-0.01em' }}>
                    {card.title}
                  </h3>
                  <p className="font-body text-sm text-warm" style={{ lineHeight: 1.8 }}>{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FBF6EE' }} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="font-jua"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', color: '#3D2B1F', letterSpacing: '-0.02em' }}
            >
              {S.characters}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((char, i) => (
              <motion.div
                key={char.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <CharacterCard {...char} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
