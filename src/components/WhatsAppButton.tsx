import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/923168078693?text=Hello%2C%20I%20need%20legal%20assistance%20from%20Resolution%20Law%20Firm"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <img
        src="/images/whatsapp-icon.png"
        alt="WhatsApp"
        className="w-[60px] h-[60px] drop-shadow-lg"
      />
    </motion.a>
  )
}
