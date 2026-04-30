import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react'

const FACEBOOK_URL = 'https://www.facebook.com/people/Resolution-Lawyers-Group/61582292877345/'

export default function Footer() {
  return (
    <footer className="navy-gradient text-white">
      {/* CTA Bar */}
      <div className="gold-gradient">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">Need Legal Assistance?</h3>
            <p className="text-white/80 text-sm">Get a free consultation with our expert lawyers today.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://wa.me/923168078693?text=Hello%2C%20I%20need%20legal%20assistance%20from%20Resolution%20Law%20Firm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#1ebe5d] transition-colors flex items-center gap-2"
            >
              <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958C9.72 30.986 12.736 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.178 2.28-.852.18-1.964.324-5.71-1.228-4.796-1.986-7.882-6.86-8.122-7.18-.228-.32-1.928-2.568-1.928-4.896 0-2.328 1.22-3.47 1.654-3.944.39-.426 1.02-.614 1.624-.614.196 0 .372.01.53.018.434.018.652.042.938.726.358.852 1.228 2.998 1.336 3.216.11.22.222.518.072.818-.14.308-.264.498-.484.766-.22.268-.428.472-.648.76-.198.25-.422.52-.176.954.246.434 1.094 1.804 2.35 2.922 1.616 1.438 2.978 1.886 3.402 2.094.326.16.714.128.97-.148.324-.354.724-.94 1.132-1.518.29-.414.658-.466 1.022-.318.368.14 2.326 1.098 2.724 1.296.398.2.664.296.762.462.096.166.096.962-.294 2.062z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="tel:03168078693"
              className="px-6 py-3 bg-white text-navy font-bold rounded-lg hover:bg-cream transition-colors flex items-center gap-2"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/uploads/upload_1.png" alt="Resolution Law Firm" className="h-14 w-auto brightness-0 invert" />
            </div>
            <h4 className="font-heading text-lg font-bold text-gold mb-2">Resolution Law Firm</h4>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Resolution Law Firm provides expert legal services across Pakistan. Founded by Umar Azeem Advocate, we are committed to delivering justice and protecting your rights.
            </p>
            <div className="flex gap-3">
              {/* Facebook */}
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-colors" aria-label="Facebook">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/923168078693" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors" aria-label="WhatsApp">
                <svg viewBox="0 0 32 32" className="w-[18px] h-[18px] fill-white">
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958C9.72 30.986 12.736 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.178 2.28-.852.18-1.964.324-5.71-1.228-4.796-1.986-7.882-6.86-8.122-7.18-.228-.32-1.928-2.568-1.928-4.896 0-2.328 1.22-3.47 1.654-3.944.39-.426 1.02-.614 1.624-.614.196 0 .372.01.53.018.434.018.652.042.938.726.358.852 1.228 2.998 1.336 3.216.11.22.222.518.072.818-.14.308-.264.498-.484.766-.22.268-.428.472-.648.76-.198.25-.422.52-.176.954.246.434 1.094 1.804 2.35 2.922 1.616 1.438 2.978 1.886 3.402 2.094.326.16.714.128.97-.148.324-.354.724-.94 1.132-1.518.29-.414.658-.466 1.022-.318.368.14 2.326 1.098 2.724 1.296.398.2.664.296.762.462.096.166.096.962-.294 2.062z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#f09433] hover:to-[#dc2743] transition-colors" aria-label="Instagram">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0A66C2] transition-colors" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {[{n:'Home',p:'/'},{n:'About Us',p:'/about'},{n:'Our Services',p:'/services'},{n:'Blogs',p:'/blogs'},{n:'Contact Us',p:'/contact'}].map(l => (
                <li key={l.p}>
                  <Link to={l.p} className="text-white/60 hover:text-gold transition-colors text-sm flex items-center gap-1">
                    <ArrowUpRight size={12} /> {l.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-gold">Important Links</h4>
            <ul className="space-y-2">
              {[
                {n:'Pakistan Bar Council', u:'https://pakistanbarcouncil.org'},
                {n:'Punjab Bar Council', u:'https://punjabbarcouncil.com'},
                {n:'Lahore High Court', u:'https://www.lhc.gov.pk'},
                {n:'Supreme Court of Pakistan', u:'https://www.supremecourt.gov.pk'},
                {n:'FBR - Tax Portal', u:'https://www.fbr.gov.pk'},
                {n:'SECP', u:'https://www.secp.gov.pk'},
                {n:'NADRA', u:'https://www.nadra.gov.pk'},
              ].map(l => (
                <li key={l.u}>
                  <a href={l.u} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold transition-colors text-sm flex items-center gap-1">
                    <ArrowUpRight size={12} /> {l.n}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-gold">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <div className="text-white/60 text-sm">
                  <p className="font-semibold text-white/80">Main Office</p>
                  Alvi Manzil, 3rd Floor, 9-Fane Road, Lahore
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <div className="text-white/60 text-sm">
                  <p className="font-semibold text-white/80">DHA Office</p>
                  129-J DHA EME Sector, Lahore
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <div className="text-white/60 text-sm">
                  <p className="font-semibold text-white/80">Islampura Office</p>
                  14-Jinnah St, Chohan Road, Islampura, Lahore
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <a href="tel:03168078693" className="text-white/60 hover:text-gold text-sm">0316-8078693</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <a href="mailto:resolutionlawfirm265@gmail.com" className="text-white/60 hover:text-gold text-sm break-all">resolutionlawfirm265@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-gold shrink-0" />
                <span className="text-white/60 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Logo */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/uploads/upload_1.png" alt="Resolution Law Firm" className="h-9 w-auto brightness-0 invert opacity-60" />
            <div>
              <p className="text-white/50 text-xs font-semibold">Resolution Law Firm</p>
              <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
          <p className="text-white/40 text-xs">Founded by Umar Azeem Advocate</p>
        </div>
      </div>
    </footer>
  )
}
