import { motion } from 'framer-motion'

const FACEBOOK_URL = 'https://www.facebook.com/people/Resolution-Lawyers-Group/61582292877345/'
const WHATSAPP_URL = 'https://wa.me/923168078693?text=Hello%2C%20I%20need%20legal%20assistance%20from%20Resolution%20Law%20Firm'
const EMAIL_URL = 'mailto:resolutionlawfirm265@gmail.com'
const PHONE_URL = 'tel:03168078693'

const socials = [
  { label: 'Facebook', href: FACEBOOK_URL, icon: '/images/facebook-3d.png' },
  { label: 'WhatsApp', href: WHATSAPP_URL, icon: '/images/whatsapp-3d.png' },
  { label: 'Email', href: EMAIL_URL, icon: '/images/email-3d.png' },
  { label: 'Call Us', href: PHONE_URL, icon: '/images/phone-3d.png' },
]

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-1"
    >
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith('http') ? '_blank' : undefined}
          rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="group flex items-center bg-white/90 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden rounded-r-xl"
          style={{ width: '48px', transitionProperty: 'width' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.width = '170px' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.width = '48px' }}
        >
          <div className="w-[48px] h-[48px] flex items-center justify-center shrink-0 p-1.5">
            <img src={s.icon} alt={s.label} className="w-9 h-9 object-contain drop-shadow-sm" />
          </div>
          <span className="text-navy text-sm font-bold whitespace-nowrap pr-4">
            {s.label}
          </span>
        </a>
      ))}
    </motion.div>
  )
}
