import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/923168078693?text=Hello%2C%20I%20need%20legal%20assistance%20from%20Resolution%20Law%20Firm"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-[#1ebe5d] transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958C9.72 30.986 12.736 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.178 2.28-.852.18-1.964.324-5.71-1.228-4.796-1.986-7.882-6.86-8.122-7.18-.228-.32-1.928-2.568-1.928-4.896 0-2.328 1.22-3.47 1.654-3.944.39-.426 1.02-.614 1.624-.614.196 0 .372.01.53.018.434.018.652.042.938.726.358.852 1.228 2.998 1.336 3.216.11.22.222.518.072.818-.14.308-.264.498-.484.766-.22.268-.428.472-.648.76-.198.25-.422.52-.176.954.246.434 1.094 1.804 2.35 2.922 1.616 1.438 2.978 1.886 3.402 2.094.326.16.714.128.97-.148.324-.354.724-.94 1.132-1.518.29-.414.658-.466 1.022-.318.368.14 2.326 1.098 2.724 1.296.398.2.664.296.762.462.096.166.096.962-.294 2.062z"/>
      </svg>
    </motion.a>
  )
}
