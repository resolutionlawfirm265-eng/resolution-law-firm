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
              href="https://wa.me/923204887229?text=Hello%2C%20I%20need%20legal%20assistance%20from%20Resolution%20Law%20Firm"
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
              href="tel:03204887229"
              className="px-6 py-3 bg-white text-navy font-bold rounded-lg hover:bg-cream transition-colors flex items-center gap-2"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/uploads/logo_new.png" alt="Resolution Law Firm" className="h-16 w-auto" />
            </div>
            <h4 className="font-heading text-lg font-bold text-gold mb-2">Resolution Law Firm</h4>
            <p className="text-white/60 text-sm leading-relaxed mb-5">Resolution Law Firm provides expert legal services across Pakistan. Founded by Umar Azeem Advocate, we are committed to delivering justice and protecting your rights.</p>
            <div className="flex gap-2">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="Facebook"><img src="/images/3d-facebook.png" alt="Facebook" className="w-11 h-11 object-contain drop-shadow-md" /></a>
              <a href="https://wa.me/923204887229" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="WhatsApp"><img src="/images/3d-whatsapp.png" alt="WhatsApp" className="w-11 h-11 object-contain drop-shadow-md" /></a>
              <a href="#" className="hover:scale-110 transition-transform" aria-label="Instagram"><img src="/images/3d-instagram.png" alt="Instagram" className="w-11 h-11 object-contain drop-shadow-md" /></a>
              <a href="#" className="hover:scale-110 transition-transform" aria-label="LinkedIn"><img src="/images/3d-linkedin.png" alt="LinkedIn" className="w-11 h-11 object-contain drop-shadow-md" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {[{n:'Home',p:'/'},{n:'About Us',p:'/about'},{n:'Our Services',p:'/services'},{n:'Blogs',p:'/blogs'},{n:'Contact Us',p:'/contact'}].map(l => (
                <li key={l.p}><Link to={l.p} className="text-white/60 hover:text-gold transition-colors text-sm flex items-center gap-1"><ArrowUpRight size={12} /> {l.n}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-gold">Important Links</h4>
            <ul className="space-y-2">
              {[{n:'Pakistan Bar Council',u:'https://pakistanbarcouncil.org'},{n:'Punjab Bar Council',u:'https://punjabbarcouncil.com'},{n:'Lahore High Court',u:'https://www.lhc.gov.pk'},{n:'Supreme Court of Pakistan',u:'https://www.supremecourt.gov.pk'},{n:'FBR - Tax Portal',u:'https://www.fbr.gov.pk'},{n:'SECP',u:'https://www.secp.gov.pk'},{n:'NADRA',u:'https://www.nadra.gov.pk'}].map(l => (
                <li key={l.u}><a href={l.u} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold transition-colors text-sm flex items-center gap-1"><ArrowUpRight size={12} /> {l.n}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-gold">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><MapPin size={18} className="text-gold mt-0.5 shrink-0" /><div className="text-white/60 text-sm"><p className="font-semibold text-white/80">Main Office</p>Alvi Manzil, 3rd Floor, 9-Fane Road, Lahore</div></li>
              <li className="flex items-start gap-3"><MapPin size={18} className="text-gold mt-0.5 shrink-0" /><div className="text-white/60 text-sm"><p className="font-semibold text-white/80">DHA Office</p>129-J DHA EME Sector, Lahore</div></li>
              <li className="flex items-start gap-3"><MapPin size={18} className="text-gold mt-0.5 shrink-0" /><div className="text-white/60 text-sm"><p className="font-semibold text-white/80">Islampura Office</p>14-Jinnah St, Chohan Road, Islampura, Lahore</div></li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-gold shrink-0" /><a href="tel:03204887229" className="text-white/60 hover:text-gold text-sm">0320-4887229</a></li>
              <li className="flex items-center gap-3"><Mail size={18} className="text-gold shrink-0" /><a href="mailto:resolutionlawfirm265@gmail.com" className="text-white/60 hover:text-gold text-sm break-all">resolutionlawfirm265@gmail.com</a></li>
              <li className="flex items-center gap-3"><Clock size={18} className="text-gold shrink-0" /><span className="text-white/60 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <img src="/uploads/logo_new.png" alt="Resolution Law Firm" className="h-12 w-auto" />
            <div>
              <p className="text-white/70 text-sm font-bold font-heading">Resolution Law Firm</p>
              <p className="text-white/40 text-xs">&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="Facebook">
              <img src="/images/3d-facebook.png" alt="Facebook" className="w-8 h-8 object-contain drop-shadow-sm" />
            </a>
            <a href="https://wa.me/923204887229" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="WhatsApp">
              <img src="/images/3d-whatsapp.png" alt="WhatsApp" className="w-8 h-8 object-contain drop-shadow-sm" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform" aria-label="Instagram">
              <img src="/images/3d-instagram.png" alt="Instagram" className="w-8 h-8 object-contain drop-shadow-sm" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform" aria-label="LinkedIn">
              <img src="/images/3d-linkedin.png" alt="LinkedIn" className="w-8 h-8 object-contain drop-shadow-sm" />
            </a>
          </div>
          <p className="text-white/40 text-xs">Founded by Umar Azeem Advocate</p>
        </div>
      </div>
    </footer>
  )
}
