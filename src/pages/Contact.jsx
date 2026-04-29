import { useState } from 'react'
import { motion } from 'framer-motion'
import Toast from '../components/Toast'
import FooterSection from '../sections/FooterSection'

/* ── 브랜드 SVG 아이콘 ── */
function EmailIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="6" fill="#EA4335" />
      <path d="M6 9h16v12H6z" fill="#fff" opacity="0.15" />
      <rect x="6" y="9" width="16" height="12" rx="1.5" stroke="#fff" strokeWidth="1.4" fill="none" />
      <path d="M6 9.5l8 6 8-6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig-bg" cx="30%" cy="110%" r="140%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="10%" stopColor="#fdf497" />
          <stop offset="40%" stopColor="#fd5949" />
          <stop offset="65%" stopColor="#d6249f" />
          <stop offset="100%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="28" height="28" rx="7" fill="url(#ig-bg)" />
      <rect x="7" y="7" width="14" height="14" rx="4" stroke="#fff" strokeWidth="1.5" fill="none" />
      <circle cx="14" cy="14" r="3.5" stroke="#fff" strokeWidth="1.5" fill="none" />
      <circle cx="19" cy="9" r="1.1" fill="#fff" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="6" fill="#FF0000" />
      <path d="M11.5 10.5l7 3.5-7 3.5V10.5z" fill="#fff" />
    </svg>
  )
}

const contactInfo = [
  {
    Icon: EmailIcon,
    label: '이메일',
    bgColor: '#FFF0C8',
    value: 'OLIVESTUDIO_COST@ELAND.CO.KR',
    href: 'mailto:OLIVESTUDIO_COST@ELAND.CO.KR',
  },
  {
    Icon: InstagramIcon,
    label: 'Instagram',
    bgColor: '#FFF0F5',
    value: '@barnacle_lou',
    href: 'https://instagram.com/barnacle_lou',
  },
  {
    Icon: YouTubeIcon,
    label: 'YouTube',
    bgColor: '#FFF0F0',
    value: '@barnaclelou6561',
    href: 'https://www.youtube.com/@barnaclelou6561',
  },
]

const TYPE_OPTIONS = [
  { value: '', label: '선택해주세요' },
  { value: 'licensing', label: 'IP 라이센싱' },
  { value: 'goods', label: '굿즈 제작' },
  { value: 'collab', label: '브랜드 콜라보' },
  { value: 'media', label: '미디어·출판' },
  { value: 'other', label: '기타 문의' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' })
  const [sending, setSending] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '', success: true })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setToast({ show: true, message: '문의가 성공적으로 접수되었어요! 빠르게 답변드릴게요.', success: true })
        setForm({ name: '', email: '', phone: '', type: '', message: '' })
      } else {
        const data = await res.json()
        setToast({ show: true, message: data.error || '전송에 실패했습니다. 다시 시도해주세요.', success: false })
      }
    } catch {
      setToast({ show: true, message: '네트워크 오류가 발생했습니다. 다시 시도해주세요.', success: false })
    } finally {
      setSending(false)
    }
  }

  return (
    <main className="pt-16">
      {/* 헤더 */}
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
            문의하기
          </h1>
          <p className="font-body text-muted text-base mt-3 font-medium">
            따개비루에 관한 모든 문의를 남겨주세요
          </p>
        </motion.div>
      </section>

      {/* 본문 */}
      <section style={{ backgroundColor: '#FBF6EE' }} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* 왼쪽: 연락처 정보 */}
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
                연락처
              </h2>

              {contactInfo.map(({ Icon, label, bgColor, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: bgColor }}
                  >
                    <Icon />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted font-semibold">{label}</p>
                    <p
                      className="font-body font-bold text-sm group-hover:text-lou transition-colors"
                      style={{ color: '#3D2B1F' }}
                    >
                      {value}
                    </p>
                  </div>
                </a>
              ))}

              {/* 운영 시간 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm mt-2">
                <p className="font-jua text-xl mb-4" style={{ color: '#F0A820', letterSpacing: '-0.01em' }}>
                  운영 시간
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-muted font-medium">평일</span>
                    <span className="font-bold text-warm">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-muted font-medium">점심 시간</span>
                    <span className="font-bold text-warm">12:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-muted font-medium">주말·공휴일</span>
                    <span className="font-bold text-warm">휴무</span>
                  </div>
                </div>
                <p className="font-body text-xs text-muted mt-4 font-medium">
                  * 영업일 기준 3-5일 내 답변드립니다.
                </p>
              </div>
            </motion.div>

            {/* 오른쪽: 문의 폼 */}
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
                상세 문의
              </h2>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-md p-7 flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-sm font-bold text-warm">이름 / 회사</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="홍길동"
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body outline-none focus:border-lou transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-sm font-bold text-warm">이메일</label>
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
                  <label className="font-body text-sm font-bold text-warm">연락처</label>
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
                  <label className="font-body text-sm font-bold text-warm">문의 유형</label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body outline-none focus:border-lou transition-colors bg-white"
                  >
                    {TYPE_OPTIONS.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-sm font-bold text-warm">상세 내용</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="문의 내용을 상세하게 적어주세요."
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body outline-none focus:border-lou transition-colors resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: sending ? 1 : 1.04 }}
                  whileTap={{ scale: sending ? 1 : 0.96 }}
                  className="font-body font-bold text-white py-3.5 rounded-full text-base shadow-md mt-2 transition-opacity"
                  style={{ backgroundColor: sending ? '#ccc' : '#F0A820' }}
                >
                  {sending ? '전송 중...' : '문의 보내기'}
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      <FooterSection />
      <Toast
        message={toast.message}
        show={toast.show}
        onClose={() => setToast((t) => ({ ...t, show: false }))}
      />
    </main>
  )
}
