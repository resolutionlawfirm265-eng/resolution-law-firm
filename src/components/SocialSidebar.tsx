import { motion } from 'framer-motion'

const FACEBOOK_URL = 'https://www.facebook.com/people/Resolution-Lawyers-Group/61582292877345/'
const PHONE_URL = 'tel:03168078693'
const INSTAGRAM_URL = '#'
const LINKEDIN_URL = '#'

const socials = [
  {
    label: 'Facebook',
    href: FACEBOOK_URL,
    bg: '#1877F2',
    bgHover: '#0d65d9',
    // Official Facebook "f" logo (Font Awesome brands)
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-white">
        <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
      </svg>
    ),
  },
  {
    label: 'Call Us',
    href: PHONE_URL,
    bg: '#1a2744',
    bgHover: '#2d3f5e',
    // Phone handset icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-white">
        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: INSTAGRAM_URL,
    bg: '#E4405F',
    bgHover: '#c13584',
    // Official Instagram logo (Font Awesome brands)
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-white">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: LINKEDIN_URL,
    bg: '#0A66C2',
    bgHover: '#004182',
    // Official LinkedIn logo (Font Awesome brands)
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-white">
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
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
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col rounded-r-xl overflow-hidden shadow-xl"
    >
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith('http') ? '_blank' : undefined}
          rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="group flex items-center transition-all duration-300 overflow-hidden"
          style={{ width: '48px', backgroundColor: s.bg, transitionProperty: 'width, background-color' }}
          onMouseEnter={(e) => { 
            const el = e.currentTarget as HTMLElement;
            el.style.width = '170px';
            el.style.backgroundColor = s.bgHover;
          }}
          onMouseLeave={(e) => { 
            const el = e.currentTarget as HTMLElement;
            el.style.width = '48px';
            el.style.backgroundColor = s.bg;
          }}
          aria-label={s.label}
        >
          <div className="w-[48px] h-[48px] flex items-center justify-center shrink-0">
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
