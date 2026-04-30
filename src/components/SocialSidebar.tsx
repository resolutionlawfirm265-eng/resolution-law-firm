import { motion } from 'framer-motion'

const FACEBOOK_URL = 'https://www.facebook.com/people/Resolution-Lawyers-Group/61582292877345/'
const WHATSAPP_URL = 'https://wa.me/923168078693?text=Hello%2C%20I%20need%20legal%20assistance%20from%20Resolution%20Law%20Firm'
const EMAIL_URL = 'mailto:resolutionlawfirm265@gmail.com'
const PHONE_URL = 'tel:03168078693'

const socials = [
  {
    label: 'Facebook',
    href: FACEBOOK_URL,
    color: 'bg-[#1877F2] hover:bg-[#0d65d9]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: WHATSAPP_URL,
    color: 'bg-[#25D366] hover:bg-[#1ebe5d]',
    icon: (
      <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958C9.72 30.986 12.736 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.178 2.28-.852.18-1.964.324-5.71-1.228-4.796-1.986-7.882-6.86-8.122-7.18-.228-.32-1.928-2.568-1.928-4.896 0-2.328 1.22-3.47 1.654-3.944.39-.426 1.02-.614 1.624-.614.196 0 .372.01.53.018.434.018.652.042.938.726.358.852 1.228 2.998 1.336 3.216.11.22.222.518.072.818-.14.308-.264.498-.484.766-.22.268-.428.472-.648.76-.198.25-.422.52-.176.954.246.434 1.094 1.804 2.35 2.922 1.616 1.438 2.978 1.886 3.402 2.094.326.16.714.128.97-.148.324-.354.724-.94 1.132-1.518.29-.414.658-.466 1.022-.318.368.14 2.326 1.098 2.724 1.296.398.2.664.296.762.462.096.166.096.962-.294 2.062z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: EMAIL_URL,
    color: 'bg-[#c4973b] hover:bg-[#a37d2f]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
  {
    label: 'Call Us',
    href: PHONE_URL,
    color: 'bg-[#1a2744] hover:bg-[#243352]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
  },
]

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col"
    >
      {socials.map((s, i) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith('http') ? '_blank' : undefined}
          rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={`group flex items-center ${s.color} transition-all duration-300 overflow-hidden`}
          style={{ width: '44px', transitionProperty: 'width' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.width = '160px' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.width = '44px' }}
        >
          <div className="w-[44px] h-[44px] flex items-center justify-center shrink-0">
            {s.icon}
          </div>
          <span className="text-white text-sm font-semibold whitespace-nowrap pr-4">
            {s.label}
          </span>
        </a>
      ))}
    </motion.div>
  )
}
