import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Expert', path: '/expert' },
  { name: 'Case Laws', path: '/case-laws' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy text-white/80 text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:resolutionlawfirm265@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={14} /> resolutionlawfirm265@gmail.com
            </a>
            <a href="tel:03168078693" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={14} /> 0316-8078693
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-gold" />
            <span>Lahore, Pakistan</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-navy/5' : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/uploads/logo_new.png"
                alt="Resolution Law Firm"
                className="h-12 sm:h-[72px] w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'text-gold bg-navy/5'
                      : 'text-navy hover:text-gold hover:bg-navy/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:03168078693"
                className="ml-3 px-5 py-2.5 gold-gradient text-white rounded-lg text-sm font-bold tracking-wide hover:shadow-lg hover:shadow-gold/25 transition-all duration-200 flex items-center gap-2"
              >
                <Phone size={15} />
                Free Consultation
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-navy hover:bg-navy/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-cream-dark"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                      location.pathname === link.path
                        ? 'text-gold bg-navy/5'
                        : 'text-navy hover:text-gold hover:bg-navy/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-3 space-y-3">
                  <a
                    href="tel:03168078693"
                    className="block text-center px-5 py-3 gold-gradient text-white rounded-lg font-bold tracking-wide"
                  >
                    <Phone size={15} className="inline mr-2" />
                    Free Consultation
                  </a>
                  <div className="flex flex-col gap-2 text-sm text-slate px-2">
                    <a href="mailto:resolutionlawfirm265@gmail.com" className="flex items-center gap-2">
                      <Mail size={14} className="text-gold" /> resolutionlawfirm265@gmail.com
                    </a>
                    <a href="tel:03168078693" className="flex items-center gap-2">
                      <Phone size={14} className="text-gold" /> 0316-8078693
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
