import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/923168078693?text=Hello%2C%20I%20need%20legal%20assistance%20from%20Resolution%20Law%20Firm"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 transition-all"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-[60px] h-[60px]">
        <defs>
          <linearGradient id="wa-grad" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#57d163"/>
            <stop offset="1" stopColor="#23b33a"/>
          </linearGradient>
        </defs>
        <path fill="url(#wa-grad)" d="M87.184 14.2A73.68 73.68 0 0 0 17.87 101.76l-9.53 34.82 35.66-9.35a73.57 73.57 0 0 0 35.22 8.98h.03c40.64 0 73.72-33.07 73.74-73.72a73.3 73.3 0 0 0-21.6-52.09A73.23 73.23 0 0 0 87.184 14.2z"/>
        <path fill="#fff" fillRule="evenodd" d="M63.7 53.36c-1.48-3.3-3.04-3.37-4.45-3.43-1.15-.05-2.47-.05-3.8-.05a7.27 7.27 0 0 0-5.28 2.48c-1.82 1.98-6.93 6.77-6.93 16.5s7.1 19.14 8.08 20.47 13.67 21.9 33.79 29.86c16.73 6.62 20.14 5.3 23.77 4.97 3.63-.33 11.7-4.78 13.35-9.4 1.65-4.62 1.65-8.58 1.16-9.4-.5-.83-1.82-1.32-3.8-2.31s-11.7-5.78-13.52-6.44-3.13-1-4.45 1-5.12 6.44-6.27 7.76-2.31 1.49-4.3.5-8.38-3.09-15.95-9.85c-5.9-5.26-9.88-11.77-11.04-13.75s-.12-3.06.87-4.05c.9-.89 1.98-2.31 2.97-3.47a13.5 13.5 0 0 0 1.98-3.3 3.64 3.64 0 0 0-.17-3.46c-.5-.99-4.37-10.75-6.1-14.68z" clipRule="evenodd"/>
        <path fill="#fff" d="M87.184 0A87.53 87.53 0 0 0 0 87.93a87.2 87.2 0 0 0 11.78 43.94L0 175.55l45.05-11.82A87.37 87.37 0 0 0 87.22 175.55c48.38 0 87.78-39.37 87.78-87.78A87.53 87.53 0 0 0 87.184 0zm0 161.03a72.87 72.87 0 0 1-37.17-10.17l-2.66-1.58-27.61 7.24 7.36-26.9-1.73-2.76a72.93 72.93 0 0 1-11.18-38.86c0-40.27 32.77-73.04 73.07-73.04a73.07 73.07 0 0 1 73.04 73.12c-.03 40.27-32.8 72.95-73.12 72.95z" opacity=".1"/>
      </svg>
    </motion.a>
  )
}
