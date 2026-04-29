import { useState } from 'react'
import { motion } from 'framer-motion'
import WaveDivider from '../components/WaveDivider'
import Toast from '../components/Toast'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [toast, setToast] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setToast(true)
    setForm({ name: '', email: '', type: '', message: '' })
  }

  return (
    <>
      <WaveDivider from="#FFFFFF" to="#FBF6EE" />
      <section style={{ backgroundColor: '#FBF6EE' }} className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span
              className="inline-block text-xs font-body font-bold px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: '#F0A820', color: '#fff' }}
            >
              CONTACT
            </span>
            <h2
              className="font-jua"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#3D2B1F', letterSpacing: '-0.02em' }}
            >
              문의하기
            </h2>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-md p-8 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-body text-sm font-semibold text-warm">이름</label>
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
              <div className="flex flex-col gap-2">
                <label className="font-body text-sm font-semibold text-warm">이메일</label>
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
            <div className="flex flex-col gap-2">
              <label className="font-body text-sm font-semibold text-warm">문의 유형</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                required
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body outline-none focus:border-lou transition-colors bg-white"
              >
                <option value="">선택해주세요</option>
                <option value="licensing">IP 라이센싱</option>
                <option value="goods">굿즈 제작</option>
                <option value="collab">브랜드 콜라보</option>
                <option value="media">미디어·출판</option>
                <option value="other">기타</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-body text-sm font-semibold text-warm">메시지</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                  placeholder="문의 내용을 자유롭게 적어주세요."
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-body outline-none focus:border-lou transition-colors resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="self-center font-body font-bold text-white px-10 py-3.5 rounded-full text-base shadow-md"
              style={{ backgroundColor: '#F0A820' }}
            >
              보내기
            </motion.button>
          </motion.form>
        </div>
      </section>
      <Toast
        message="문의가 성공적으로 전달되었어요! 빠르게 답변드릴게요."
        show={toast}
        onClose={() => setToast(false)}
      />
    </>
  )
}
