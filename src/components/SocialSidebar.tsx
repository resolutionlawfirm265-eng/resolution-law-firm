import { motion } from 'framer-motion'

const FACEBOOK_URL = 'https://www.facebook.com/people/Resolution-Lawyers-Group/61582292877345/'
const WHATSAPP_URL = 'https://wa.me/923168078693?text=Hello%2C%20I%20need%20legal%20assistance%20from%20Resolution%20Law%20Firm'
const EMAIL_URL = 'mailto:resolutionlawfirm265@gmail.com'
const PHONE_URL = 'tel:03168078693'

const socials = [
  { label: 'Facebook', href: FACEBOOK_URL, icon: '/images/3d-facebook.png' },
  { label: 'WhatsApp', href: WHATSAPP_URL, icon: '/images/3d-whatsapp.png' },
  { label: 'Instagram', href: '#', icon: '/images/3d-instagram.png' },
  { label: 'LinkedIn', href: '#', icon: '/images/3d-linkedin.png' },
  { label: 'Email', href: EMAIL_URL, icon: '/images/3d-email.png' },
  { label: 'Call Us', href: PHONE_URL, icon: '/images/3d-phone.png' },
]

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-1 py-2 px-1 bg-white/80 backdrop-blur-md rounded-r-xl shadow-lg border border-l-0 border-cream-dark"
    >
      {socials.map((s, i) => (
        <motion.a
          key={s.label}
          href={s.href}
          target={s.href.startsWith('http') ? '_blank' : undefined}
          rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="group relative flex items-center justify-center w-12 h-12 rounded-lg hover:bg-cream/50 transition-all"
          whileHover={{ scale: 1.15, x: 4 }}
          whileTap={{ scale: 0.95 }}
          title={s.label}
        >
          <img
            src={s.icon}
            alt={s.label}
            className="w-9 h-9 object-contain drop-shadow-md group-hover:drop-shadow-xl transition-all"
          />
          {/* Tooltip */}
          <span className="absolute left-full ml-2 px-2.5 py-1 bg-navy text-white text-xs font-semibold rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg">
            {s.label}
          </span>
        </motion.a>
      ))}
    </motion.div>
  )
}
