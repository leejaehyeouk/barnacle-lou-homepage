import { useState } from 'react'
import { motion } from 'framer-motion'
import WaveDivider from '../components/WaveDivider'
import Toast from '../components/Toast'
import FooterSection from '../sections/FooterSection'
import { licensingCategories, processSteps } from '../data/mockData'

const L = {
  heroTitle: '\ub530\uac1c\ube44\ub8e8 IP \ub77c\uc774\uc13c\uc2f1',
  heroDesc: 'EBS\uc5d0\uc11c \uc0ac\ub791\ubc1b\ub294 \uc720\uc544 \uc560\ub2c8\uba54\uc774\uc158 \ub530\uac1c\ube44\ub8e8\uc758 IP\ub97c '
    + '\ud65c\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \uac00\uce58\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc138\uc694. '
    + '\ub2e4\uc591\ud55c \ubd84\uc57c\uc758 \ud30c\ud2b8\ub108\ub97c \uae30\ub2e4\ub9ac\uace0 \uc788\uc2b5\ub2c8\ub2e4.',
  catTitle: '\ub77c\uc774\uc13c\uc2f1 \uc720\ud615',
  processTitle: '\ub77c\uc774\uc13c\uc2f1 \ud504\ub85c\uc138\uc2a4',
  checkMark: '\u2713',
  inquiryTitle: '\ub77c\uc774\uc13c\uc2f1 \ubb38\uc758\ud558\uae30',
  inquiryNote: '\uc601\uc5c5\uc77c \uae30\uc900 3-5\uc77c \ub0b4 \ub2f5\ubcc0\ub4dc\ub9bd\ub2c8\ub2e4.',
  nameLabel: '\uc774\ub984 / \ud68c\uc0ac\uba85',
  namePlaceholder: '(\uc8fc)\ud55c\uad6d\ud68c\uc0ac',
  emailLabel: '\uc774\uba54\uc77c',
  typeLabel: '\ub77c\uc774\uc13c\uc2f1 \uc720\ud615',
  typeDefault: '\uc120\ud0dd\ud574\uc8fc\uc138\uc694',
  typeGoods: '\uad7f\uc988 \uc81c\uc791',
  typePublishing: '\ucd9c\ud310\u00b7\uad50\uc721',
  typeCollab: '\ube0c\ub79c\ub4dc \ucf5c\ub77c\ubcf4',
  typeDigital: '\ub514\uc9c0\ud138 \ucf58\ud150\uce20',
  typeOther: '\uae30\ud0c0',
  messageLabel: '\uc0c1\uc138 \ub0b4\uc6a9',
  messagePlaceholder: '\ud65c\uc6a9 \ubd84\uc57c \ubc0f \uc81c\ud488, \ubca0\ub810\ud06c \ubc94\uc704, \ud76c\ub9dd \uac8c\uc2dc\uc77c \ub4f1\uc744 \uc801\uc5b4\uc8fc\uc138\uc694.',
  submitBtn: '\ubb38\uc758 \ubcf4\ub0b4\uae30 \uD83D\uDC23',
  toastMsg: '\ubb38\uc758\uac00 \uc811\uc218\ub418\uc5c8\uc2b5\ub2c8\ub2e4! \ube68\ub9ac \ub2f5\ubcc0\ub4dc\ub9b4\uac8c\uc694 \uD83D\uDC23',
}

export default function Licensing() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [toast, setToast] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setToast(true)
    setForm({ name: '', email: '', type: '', message: '' })
  }

  return (
    <main className="pt-16">
      <section className="py-20 md:py-28 text-center" style={{ backgroundColor: '#E8F5EF' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto px-4"
        >
          <span
            className="inline-block text-xs font-body font-bold px-3 py-1 rounded-full mb-5 tracking-widest"
            style={{ backgroundColor: '#6E8EC8', color: '#fff' }}
          >
            IP LICENSING
          </span>
          <h1
            className="font-jua mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', color: '#3D2B1F', lineHeight: 1.2, letterSpacing: '-0.02em' }}
          >
            {L.heroTitle}
          </h1>
          <p className="font-body text-base md:text-lg text-muted" style={{ lineHeight: 1.8 }}>
            {L.heroDesc}
          </p>
        </motion.div>
      </section>

      <WaveDivider from="#E8F5EF" to="#FFFFFF" />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="font-jua text-center mb-12"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: '#3D2B1F', letterSpacing: '-0.02em' }}
          >
            {L.catTitle}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {licensingCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ backgroundColor: cat.lightColor, borderTop: `4px solid ${cat.color}` }}
              >
                <div className="text-4xl">{cat.icon}</div>
                <h3 className="font-jua text-2xl" style={{ color: cat.color, letterSpacing: '-0.01em' }}>{cat.title}</h3>
                <p className="font-body text-sm text-warm" style={{ lineHeight: 1.8 }}>{cat.desc}</p>
                <ul className="space-y-2 mt-2">
                  {cat.details.map((d) => (
                    <li key={d} className="font-body text-sm text-warm flex items-center gap-2 font-medium">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs text-white font-bold flex-shrink-0"
                        style={{ backgroundColor: cat.color }}
                      >
                        {L.checkMark}
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FBF6EE' }} className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="font-jua text-center mb-12"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: '#3D2B1F', letterSpacing: '-0.02em' }}
          >
            {L.processTitle}
          </motion.h2>

          <div className="relative">
            <div
              className="absolute top-10 left-0 right-0 h-0.5 hidden md:block"
              style={{ backgroundColor: '#F0A820', opacity: 0.3 }}
            />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div
                    className="w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-md relative z-10 bg-white"
                    style={{ border: '3px solid #F0A820' }}
                  >
                    <span className="text-2xl">{step.icon}</span>
                    <span className="text-xs font-bold" style={{ color: '#F0A820' }}>{step.step}</span>
                  </div>
                  <h3 className="font-jua text-xl" style={{ color: '#F0A820', letterSpacing: '-0.01em' }}>
                    {step.title}
                  </h3>
                  <p className="font-body text-xs text-muted font-medium" style={{ lineHeight: 1.7 }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WaveDivider from="#FBF6EE" to="#FFFFFF" />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2
              className="font-jua"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: '#3D2B1F', letterSpacing: '-0.02em' }}
            >
              {L.inquiryTitle}
            </h2>
            <p className="font-body text-sm text-muted mt-2 font-medium">{L.inquiryNote}</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-body text-sm font-bold text-warm">{L.nameLabel}</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder={L.namePlaceholder}
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body outline-none focus:border-kruru transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-body text-sm font-bold text-warm">{L.emailLabel}</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="hello@company.com"
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body outline-none focus:border-kruru transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-body text-sm font-bold text-warm">{L.typeLabel}</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                required
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body outline-none focus:border-kruru transition-colors bg-white"
              >
                <option value="">{L.typeDefault}</option>
                <option value="goods">{L.typeGoods}</option>
                <option value="publishing">{L.typePublishing}</option>
                <option value="collab">{L.typeCollab}</option>
                <option value="digital">{L.typeDigital}</option>
                <option value="other">{L.typeOther}</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-body text-sm font-bold text-warm">{L.messageLabel}</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={L.messagePlaceholder}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body outline-none focus:border-kruru transition-colors resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="self-center font-body font-bold text-white px-10 py-3.5 rounded-full text-base shadow-md"
              style={{ backgroundColor: '#6E8EC8' }}
            >
              {L.submitBtn}
            </motion.button>
          </motion.form>
        </div>
      </section>

      <FooterSection />
      <Toast message={L.toastMsg} show={toast} onClose={() => setToast(false)} />
    </main>
  )
}
