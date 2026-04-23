import { useState } from 'react'
import { motion } from 'framer-motion'
import Toast from '../components/Toast'
import FooterSection from '../sections/FooterSection'

const EMAIL_ICON = '\uD83D\uDCE7'
const CAMERA_ICON = '\uD83D\uDCF8'
const PLAY_ICON = '\u25B6\uFE0F'

const LABELS = {
  email: '\uc774\uba54\uc77c',
  instagram: 'Instagram',
  youtube: 'YouTube',
}

const contactInfo = [
  {
    icon: EMAIL_ICON,
    label: LABELS.email,
    value: 'OLIVESTUDIO_COST@ELAND.CO.KR',
    href: 'mailto:OLIVESTUDIO_COST@ELAND.CO.KR',
  },
  {
    icon: CAMERA_ICON,
    label: LABELS.instagram,
    value: '@barnacle_lou',
    href: 'https://instagram.com/barnacle_lou',
  },
  {
    icon: PLAY_ICON,
    label: LABELS.youtube,
    value: '@barnaclelou6561',
    href: 'https://www.youtube.com/@barnaclelou6561',
  },
]

const TEXT = {
  pageTitle: '\ubb38\uc758\ud558\uae30',
  pageDesc: '\ub530\uac1c\ube44\ub8e8\uc5d0 \uad00\ud55c \ubaa8\ub4e0 \ubb38\uc758\ub97c \ub0a8\uacbc\uc8fc\uc138\uc694 \uD83D\uDC23',
  contactInfoTitle: '\uc5f0\ub77d\uc815\ubcf4',
  operationTitle: '\uc6b4\uc601 \uc2dc\uac04',
  weekday: '\ud3c9\uc77c',
  weekdayTime: '09:00 - 18:00',
  lunch: '\uc810\uc2ec \uc2dc\uac04',
  lunchTime: '12:00 - 13:00',
  weekend: '\uc8fc\ub9d0\u00b7\uacf5\ud734\uc77c',
  weekendTime: '\ud734\ubb34',
  replyNote: '* \uc601\uc5c5\uc77c \uae30\uc900 3-5\uc77c \ub0b4 \ub2f5\ubcc0\ub4dc\ub9bd\ub2c8\ub2e4.',
  detailInquiry: '\uc0c1\uc138 \ubb38\uc758',
  nameLabel: '\uc774\ub984 / \ud68c\uc0ac',
  namePlaceholder: '\ud64d\uae38\ub3d9',
  emailLabel: '\uc774\uba54\uc77c',
  phoneLabel: '\uc5f0\ub77d\ucc98',
  typeLabel: '\ubb38\uc758 \uc720\ud615',
  typeDefault: '\uc120\ud0dd\ud574\uc8fc\uc138\uc694',
  typeLicensing: 'IP \ub77c\uc774\uc13c\uc2f1',
  typeGoods: '\uad7f\uc988 \uc81c\uc791',
  typeCollab: '\ube0c\ub79c\ub4dc \ucf5c\ub77c\ubcf4',
  typeMedia: '\ubbf8\ub514\uc5b4\u00b7\ucd9c\ud310',
  typeOther: '\uae30\ud0c0 \ubb38\uc758',
  messageLabel: '\uc0c1\uc138 \ub0b4\uc6a9',
  messagePlaceholder: '\ubb38\uc758 \ub0b4\uc6a9\uc744 \uc0c1\uc138\ud558\uac8c \uc801\uc5b4\uc8fc\uc138\uc694.',
  fileLabel: '\ucca8\ubd80\ud30c\uc77c',
  fileOptional: '(\uc120\ud0dd)',
  fileGuide: '\uD83D\uDCCE \ud30c\uc77c\uc744 \ub4dc\ub798\uadf8\ud558\uac70\ub098 \ud074\ub9ad\ud574\uc11c \uc5c5\ub85c\ub4dc',
  fileSize: 'PDF, JPG, PNG (\ucd5c\ub300 10MB)',
  submitBtn: '\ubb38\uc758 \ubcf4\ub0b4\uae30 \uD83D\uDC23',
  toastMsg: '\ubb38\uc758\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uc811\uc218\ub418\uc5c8\uc5b4\uc694! \ube68\ub9ac \ub2f5\ubcc0\ub4dc\ub9b4\uac8c\uc694 \uD83D\uDC23',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' })
  const [toast, setToast] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setToast(true)
    setForm({ name: '', email: '', phone: '', type: '', message: '' })
  }

  return (
    <main className="pt-16">
      <section
        className="py-16 text-center"
        style={{ background: 'linear-gradient(135deg, #FFF0C8 0%, #FFE4EC 100%)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-4"
        >
          <h1
            className="font-jua"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#3D2B1F', letterSpacing: '-0.02em' }}
          >
            {TEXT.pageTitle}
          </h1>
          <p className="font-body text-muted text-base mt-3 font-medium">
            {TEXT.pageDesc}
          </p>
        </motion.div>
      </section>

      <section style={{ backgroundColor: '#FBF6EE' }} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              <h2
                className="font-jua"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#3D2B1F', letterSpacing: '-0.02em' }}
              >
                {TEXT.contactInfoTitle}
              </h2>

              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: '#FFF0C8' }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted font-semibold">{info.label}</p>
                    <p
                      className="font-body font-bold text-sm group-hover:text-lou transition-colors"
                      style={{ color: '#3D2B1F' }}
                    >
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}

              <div className="bg-white rounded-2xl p-6 shadow-sm mt-2">
                <p className="font-jua text-xl mb-4" style={{ color: '#F0A820', letterSpacing: '-0.01em' }}>
                  {TEXT.operationTitle}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-muted font-medium">{TEXT.weekday}</span>
                    <span className="font-bold text-warm">{TEXT.weekdayTime}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-muted font-medium">{TEXT.lunch}</span>
                    <span className="font-bold text-warm">{TEXT.lunchTime}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-muted font-medium">{TEXT.weekend}</span>
                    <span className="font-bold text-warm">{TEXT.weekendTime}</span>
                  </div>
                </div>
                <p className="font-body text-xs text-muted mt-4 font-medium">{TEXT.replyNote}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h2
                className="font-jua mb-6"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#3D2B1F', letterSpacing: '-0.02em' }}
              >
                {TEXT.detailInquiry}
              </h2>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-md p-7 flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-sm font-bold text-warm">{TEXT.nameLabel}</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder={TEXT.namePlaceholder}
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body outline-none focus:border-lou transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-sm font-bold text-warm">{TEXT.emailLabel}</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="hello@example.com"
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body outline-none focus:border-lou transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-sm font-bold text-warm">{TEXT.phoneLabel}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body outline-none focus:border-lou transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-sm font-bold text-warm">{TEXT.typeLabel}</label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body outline-none focus:border-lou transition-colors bg-white"
                  >
                    <option value="">{TEXT.typeDefault}</option>
                    <option value="licensing">{TEXT.typeLicensing}</option>
                    <option value="goods">{TEXT.typeGoods}</option>
                    <option value="collab">{TEXT.typeCollab}</option>
                    <option value="media">{TEXT.typeMedia}</option>
                    <option value="other">{TEXT.typeOther}</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-sm font-bold text-warm">{TEXT.messageLabel}</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder={TEXT.messagePlaceholder}
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body outline-none focus:border-lou transition-colors resize-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-sm font-bold text-warm">
                    {TEXT.fileLabel} <span className="text-muted font-normal">{TEXT.fileOptional}</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl px-4 py-6 text-center cursor-pointer hover:border-lou transition-colors">
                    <p className="font-body text-sm text-muted font-medium">{TEXT.fileGuide}</p>
                    <p className="font-body text-xs text-muted mt-1">{TEXT.fileSize}</p>
                  </div>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="font-body font-bold text-white py-3.5 rounded-full text-base shadow-md mt-2"
                  style={{ backgroundColor: '#F0A820' }}
                >
                  {TEXT.submitBtn}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
      <Toast message={TEXT.toastMsg} show={toast} onClose={() => setToast(false)} />
    </main>
  )
}
