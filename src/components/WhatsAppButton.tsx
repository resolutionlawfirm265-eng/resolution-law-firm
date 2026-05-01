import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/923168078693?text=Hello%2C%20I%20need%20legal%20assistance%20from%20Resolution%20Law%20Firm"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 rounded-full shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 transition-all overflow-hidden bg-[#25D366] hover:bg-[#1ebe5d] sm:pr-5 sm:rounded-full"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <div className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] flex items-center justify-center shrink-0">
        {/* Official WhatsApp logo — genuine brand SVG from WhatsApp Brand Resources */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px]">
          <defs>
            <linearGradient id="wa-b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#57d163"/>
              <stop offset="1" stopColor="#23b33a"/>
            </linearGradient>
          </defs>
          {/* Green circle background */}
          <circle cx="87.608" cy="87.776" r="85" fill="#25D366"/>
          {/* White phone in chat bubble */}
          <path fill="#fff" fillRule="evenodd" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 008.413 30.927l-8.942 32.667 33.465-8.782a61.17 61.17 0 0029.238 7.45h.025c33.72 0 61.154-27.426 61.17-61.14a60.75 60.75 0 00-17.895-43.251 60.75 60.75 0 00-44.296-19z" clipRule="evenodd" opacity=".0"/>
          <path fill="#fff" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 008.413 30.927l-8.942 32.667 33.465-8.782a61.17 61.17 0 0029.238 7.45h.025c33.72 0 61.154-27.426 61.17-61.14a60.75 60.75 0 00-17.895-43.251 60.75 60.75 0 00-44.296-19zm0 112.108h-.02a50.86 50.86 0 01-25.91-7.094l-1.86-1.103-19.27 5.055 5.144-18.795-1.212-1.927a50.69 50.69 0 01-7.79-27.1c.01-28.133 22.907-51.02 51.07-51.02a50.73 50.73 0 0136.068 14.94 50.71 50.71 0 0114.944 36.088c-.012 28.136-22.908 51.02-51.06 51.02z"/>
          <path fill="#25D366" d="M87.184 37.378c-27.036 0-49.02 21.976-49.03 48.985a48.88 48.88 0 007.12 25.39l-7.576 27.668 28.376-7.44a49.05 49.05 0 0023.49 5.988h.02c27.024 0 49.01-21.978 49.022-48.99a48.68 48.68 0 00-14.346-34.636 48.68 48.68 0 00-34.65-14.33z"/>
          <path fill="#fff" fillRule="evenodd" d="M68.772 55.603c-1.378-3.062-2.828-3.124-4.137-3.178l-3.524-.043a6.76 6.76 0 00-4.9 2.304c-1.685 1.838-6.435 6.287-6.435 15.33 0 9.045 6.59 17.79 7.51 19.013.92 1.222 12.7 20.34 31.39 27.73 15.527 6.15 18.69 4.924 22.07 4.617 3.38-.308 10.87-4.44 12.4-8.728 1.53-4.29 1.53-7.965 1.07-8.728-.46-.763-1.685-1.222-3.525-2.14-1.84-.918-10.87-5.365-12.555-5.977-1.685-.612-2.91-.918-4.137.92-1.225 1.836-4.745 5.977-5.82 7.2-1.075 1.224-2.15 1.38-3.99.46-1.84-.918-7.78-2.867-14.82-9.145-5.48-4.886-9.18-10.924-10.255-12.764-1.075-1.838-.115-2.832.808-3.748.83-.824 1.84-2.15 2.76-3.223a12.6 12.6 0 001.84-3.063 3.38 3.38 0 00-.153-3.222c-.46-.918-4.05-9.988-5.665-13.633z" clipRule="evenodd"/>
        </svg>
      </div>
      <span className="text-white font-bold text-sm hidden sm:block pr-1">Chat with Us</span>
    </motion.a>
  )
}
