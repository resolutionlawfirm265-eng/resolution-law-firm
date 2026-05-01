import { motion } from 'framer-motion'

const FACEBOOK_URL = 'https://www.facebook.com/people/Resolution-Lawyers-Group/61582292877345/'
const WHATSAPP_URL = 'https://wa.me/923168078693?text=Hello%2C%20I%20need%20legal%20assistance%20from%20Resolution%20Law%20Firm'
const EMAIL_URL = 'mailto:resolutionlawfirm265@gmail.com'
const PHONE_URL = 'tel:03168078693'

const socials = [
  {
    label: 'Facebook',
    href: FACEBOOK_URL,
    bg: '#1877F2',
    bgHover: '#0d65d9',
    // Official Facebook "f" logo
    icon: (
      <svg viewBox="0 0 320 512" className="w-5 h-5 fill-white">
        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: WHATSAPP_URL,
    bg: '#25D366',
    bgHover: '#1ebe5d',
    // Official WhatsApp logo
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    bg: '#E4405F',
    bgHover: '#d62e4a',
    // Official Instagram camera logo
    icon: (
      <svg viewBox="0 0 448 512" className="w-5 h-5 fill-white">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: EMAIL_URL,
    bg: '#c4973b',
    bgHover: '#a37d2f',
    // Email envelope icon
    icon: (
      <svg viewBox="0 0 512 512" className="w-5 h-5 fill-white">
        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
      </svg>
    ),
  },
  {
    label: 'Call Us',
    href: PHONE_URL,
    bg: '#1a2744',
    bgHover: '#243352',
    // Phone icon
    icon: (
      <svg viewBox="0 0 512 512" className="w-5 h-5 fill-white">
        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
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
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col rounded-r-lg overflow-hidden shadow-lg"
    >
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith('http') ? '_blank' : undefined}
          rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="group flex items-center transition-all duration-300 overflow-hidden"
          style={{ width: '46px', backgroundColor: s.bg, transitionProperty: 'width, background-color' }}
          onMouseEnter={(e) => { 
            const el = e.currentTarget as HTMLElement;
            el.style.width = '170px';
            el.style.backgroundColor = s.bgHover;
          }}
          onMouseLeave={(e) => { 
            const el = e.currentTarget as HTMLElement;
            el.style.width = '46px';
            el.style.backgroundColor = s.bg;
          }}
          aria-label={s.label}
        >
          <div className="w-[46px] h-[46px] flex items-center justify-center shrink-0">
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
