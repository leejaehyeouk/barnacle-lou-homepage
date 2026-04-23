import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Toast({ message, show, onClose, type = 'success' }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3500)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
          <div
            className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-xl text-white font-body font-semibold text-sm ${
              type === 'success' ? 'bg-jambo' : 'bg-bella'
            }`}
          >
            <span className="text-xl">{type === 'success' ? '🐣' : '❌'}</span>
            <span>{message}</span>
            <button
              onClick={onClose}
              className="ml-2 opacity-70 hover:opacity-100 transition-opacity text-lg leading-none"
              aria-label="닫기"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
