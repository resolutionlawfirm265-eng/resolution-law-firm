import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/923168078693?text=Hello%2C%20I%20need%20legal%20assistance%20from%20Resolution%20Law%20Firm"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <img
        src="/images/whatsapp-3d.png"
        alt="WhatsApp"
        className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-xl"
      />
    </motion.a>
  )
}
