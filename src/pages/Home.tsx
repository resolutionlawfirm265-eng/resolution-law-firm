import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Scale, Shield, Users, Award, Star, Phone, ArrowRight, Clock, CheckCircle, Gavel, Building, FileText, Heart, Briefcase, DollarSign, ChevronDown, Quote, MapPin, BookOpen, Send } from 'lucide-react'

interface Service { id: number; title: string; description: string; icon: string; }
interface Review { id: number; name: string; rating: number; comment: string; approved: boolean; }
interface Blog { id: number; title: string; slug: string; excerpt: string; category: string; created_at: string; }
interface FAQ { id: number; question: string; answer: string; }

const iconMap: Record<string, any> = {
  Gavel, Building, FileText, Heart, Briefcase, DollarSign, Shield, Scale, Users, Award
}

export default function Home() {
  const [services, setServices] = useState<Service[]>([])
  const [reviews, setReviews] = useState<Review[]>([])
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [contactSubmitted, setContactSubmitted] = useState(false)

  useEffect(() => {
    Promise.all([
      fetch('/api/services').then(r => r.json()),
      fetch('/api/reviews').then(r => r.json()),
      fetch('/api/blogs?published=true').then(r => r.json()),
      fetch('/api/faqs').then(r => r.json()),
    ]).then(([s, r, b, f]) => {
      setServices(Array.isArray(s) ? s : [])
      setReviews(Array.isArray(r) ? r.filter((rv: Review) => rv.approved) : [])
      setBlogs(Array.isArray(b) ? b.slice(0, 3) : [])
      setFaqs(Array.isArray(f) ? f.slice(0, 4) : [])
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  const submitContact = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactForm),
    })
    setContactSubmitted(true)
    setContactForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const getIcon = (name: string) => iconMap[name] || Scale

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center navy-gradient overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full"><circle cx="100" cy="100" r="80" stroke="#c4973b" strokeWidth="0.5" fill="none" /><circle cx="100" cy="100" r="60" stroke="#c4973b" strokeWidth="0.3" fill="none" /></svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-24 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left — Text */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              {/* Mobile logo — prominent */}
              <div className="flex lg:hidden justify-center mb-6">
                <div className="w-36 h-36 rounded-full bg-navy-light/40 backdrop-blur-sm border-2 border-gold/20 flex items-center justify-center shadow-xl" style={{boxShadow:'0 0 40px rgba(196,151,59,0.15)'}}>
                  <img src="/uploads/upload_1.png" alt="Resolution Law Firm Logo" className="w-28 h-28 object-contain" />
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 sm:w-10 bg-gold" />
                <span className="text-gold font-semibold text-xs sm:text-sm tracking-widest uppercase">Resolution Law Firm</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                <span className="text-gold-gradient">Resolution Law Firm</span>
              </h1>
              <p className="text-white/60 text-base sm:text-xl leading-relaxed mb-6 sm:mb-8 max-w-xl">
                Led by Umar Azeem Advocate — expert legal services in Civil, Criminal, Tax, Corporate & Family law across Lahore.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:03168078693" className="gold-gradient text-white px-6 sm:px-8 py-3.5 rounded-lg font-bold text-sm sm:text-base hover:shadow-xl hover:shadow-gold/20 transition-all flex items-center justify-center gap-2">
                  <Phone size={18} /> Free Consultation
                </a>
                <Link to="/services" className="border-2 border-white/20 text-white px-6 sm:px-8 py-3.5 rounded-lg font-bold text-sm sm:text-base hover:border-gold hover:text-gold transition-all flex items-center justify-center gap-2">
                  Our Services <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Right — 3D Logo with orbits */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:flex justify-center">
              <div className="relative w-[500px] h-[500px] flex flex-col items-center justify-center">
                {/* Outer orbit */}
                <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                  <svg viewBox="0 0 500 500" className="w-full h-full"><circle cx="250" cy="250" r="240" stroke="#c4973b" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="8 6" /></svg>
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gold-gradient shadow-lg shadow-gold/40" />
                  <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/30" />
                </div>
                {/* Middle orbit reverse */}
                <div className="absolute inset-[45px] animate-[spin_15s_linear_infinite_reverse]">
                  <svg viewBox="0 0 410 410" className="w-full h-full"><circle cx="205" cy="205" r="195" stroke="#c4973b" strokeWidth="0.8" fill="none" opacity="0.15" strokeDasharray="12 8" /></svg>
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3.5 h-3.5 rounded-full gold-gradient shadow-md shadow-gold/30" />
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                {/* Inner orbit */}
                <div className="absolute inset-[90px] animate-[spin_25s_linear_infinite]">
                  <svg viewBox="0 0 320 320" className="w-full h-full"><circle cx="160" cy="160" r="150" stroke="#c4973b" strokeWidth="0.6" fill="none" opacity="0.1" strokeDasharray="4 8" /></svg>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full gold-gradient shadow-sm" />
                </div>
                {/* Glow rings */}
                <div className="absolute inset-[110px] rounded-full border border-gold/10" />
                <div className="absolute inset-[125px] rounded-full border border-gold/5" />
                {/* Center logo — bigger & prominent */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-navy-light/40 backdrop-blur-sm border-2 border-gold/20 flex items-center justify-center shadow-2xl" style={{boxShadow:'0 0 60px rgba(196,151,59,0.15), 0 0 120px rgba(196,151,59,0.05)'}}>
                    <img src="/uploads/upload_1.png" alt="Resolution Law Firm Logo" className="w-56 h-56 object-contain" style={{filter:'drop-shadow(0 8px 32px rgba(196,151,59,0.25))'}} />
                  </div>
                </div>
                {/* Firm name under logo */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-center">
                  <h2 className="font-heading text-xl font-bold text-white tracking-wide">RESOLUTION</h2>
                  <p className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-semibold">Law Firm</p>
                </div>

                {/* Floating icons */}
                <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="absolute -top-2 right-14 w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center shadow-xl shadow-gold/30">
                  <Scale size={28} className="text-white" />
                </motion.div>
                <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute -bottom-2 left-14 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/10">
                  <Shield size={24} className="text-gold" />
                </motion.div>
                <motion.div animate={{ x: [-5, 5, -5] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-24 -left-4 w-12 h-12 rounded-xl bg-white/5 backdrop-blur flex items-center justify-center border border-gold/10">
                  <Gavel size={20} className="text-gold/70" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES — Brief cards + View Details ═══ */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">Our Legal Services</h2>
          <p className="text-slate mt-2 text-sm sm:text-base">Expert representation across all major practice areas</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {loading ? [1,2,3,4,5,6].map(i => (
            <div key={i} className="bg-white rounded-xl p-4 animate-pulse text-center"><div className="w-10 h-10 bg-cream-dark rounded-lg mx-auto mb-2" /><div className="h-4 bg-cream-dark rounded w-3/4 mx-auto" /></div>
          )) : services.map((s, i) => {
            const Icon = getIcon(s.icon)
            return (
              <motion.div key={s.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl p-4 sm:p-5 text-center border border-cream-dark hover:border-gold/30 hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-heading text-sm sm:text-base font-bold text-navy leading-snug">{s.title}</h3>
              </motion.div>
            )
          })}
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="inline-flex items-center gap-2 gold-gradient text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-gold/20 transition-all">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ═══ ABOUT FOUNDER — Brief + View Details ═══ */}
      <section className="py-16 sm:py-20 navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 shadow-xl border-3 border-gold/30">
              <img src="/uploads/umar-azeem.jpg" alt="Umar Azeem Advocate" className="w-full h-full object-cover object-top" />
            </div>
            <div className="text-center sm:text-left flex-1">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-1">Umar Azeem Advocate</h2>
              <p className="text-gold font-semibold text-sm mb-3">Founder — Resolution Law Firm</p>
              <p className="text-white/60 text-sm leading-relaxed max-w-xl">
                Distinguished legal professional with extensive experience in Civil, Criminal, Tax, Corporate & Family law. Committed to justice and client satisfaction across all courts in Lahore.
              </p>
              <Link to="/expert" className="inline-flex items-center gap-2 mt-4 text-gold font-semibold text-sm hover:text-gold-light transition-colors">
                View Full Profile <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW WE WORK — Compact ═══ */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">How We Work</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { n: '01', t: 'Free Consultation' },
            { n: '02', t: 'Case Analysis' },
            { n: '03', t: 'Legal Representation' },
            { n: '04', t: 'Resolution' },
          ].map((step, i) => (
            <motion.div key={step.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-5 text-center border border-cream-dark hover:border-gold/30 transition-all"
            >
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-white text-sm">{step.n}</span>
              </div>
              <h3 className="font-heading text-sm sm:text-base font-bold text-navy">{step.t}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ WHY TRUST US — Icons only + View Details ═══ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">Why Clients Trust Us</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Shield, t: 'Proven Track Record' },
              { icon: Users, t: 'Client-First' },
              { icon: Award, t: 'Expert Team' },
              { icon: Clock, t: 'Timely Resolution' },
              { icon: Scale, t: 'Transparent Fees' },
              { icon: CheckCircle, t: 'Confidentiality' },
            ].map((item, i) => (
              <motion.div key={item.t} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="text-center p-4 rounded-xl bg-cream/50 border border-cream-dark"
              >
                <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mx-auto mb-2">
                  <item.icon size={20} className="text-gold" />
                </div>
                <p className="text-navy text-xs sm:text-sm font-semibold">{item.t}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/about" className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:text-gold-dark transition-colors">
              Learn More About Us <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ REVIEWS — 3 max + View All ═══ */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">Client Reviews</h2>
        </div>
        {reviews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.slice(0, 3).map((review, i) => (
              <motion.div key={review.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-5 border border-cream-dark"
              >
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: review.rating }).map((_, j) => <Star key={j} size={14} className="text-gold fill-gold" />)}
                </div>
                <p className="text-charcoal text-sm leading-relaxed line-clamp-3 mb-3">{review.comment}</p>
                <p className="font-heading font-bold text-navy text-sm">{review.name}</p>
              </motion.div>
            ))}
          </div>
        )}
        <div className="text-center mt-8">
          <Link to="/reviews" className="inline-flex items-center gap-2 gold-gradient text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-gold/20 transition-all">
            View All Reviews <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ═══ BLOGS — Titles only + View Details ═══ */}
      {blogs.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">Latest Legal Insights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {blogs.map((blog, i) => (
                <motion.div key={blog.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <Link to={`/blog/${blog.slug}`} className="block bg-cream/50 rounded-xl p-5 border border-cream-dark hover:border-gold/30 hover:shadow-md transition-all group">
                    <span className="text-xs font-bold text-gold uppercase tracking-wider">{blog.category}</span>
                    <h3 className="font-heading text-base font-bold text-navy mt-1 mb-1 group-hover:text-gold transition-colors line-clamp-2">{blog.title}</h3>
                    <span className="text-gold text-xs font-semibold flex items-center gap-1 mt-2">Read More <ArrowRight size={12} /></span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/blogs" className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:text-gold-dark transition-colors">
                View All Articles <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ═══ FAQ — 4 max + compact ═══ */}
      <section className="py-16 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">FAQ</h2>
        </div>
        <div className="space-y-2">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-xl border border-cream-dark overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)} className="w-full px-5 py-3.5 flex items-center justify-between text-left">
                <span className="font-semibold text-navy text-sm pr-4">{faq.question}</span>
                <ChevronDown size={18} className={`text-gold shrink-0 transition-transform ${openFaq === faq.id ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === faq.id && (
                <div className="px-5 pb-3.5">
                  <p className="text-slate text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ COURTS — Compact grid ═══ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">Inside Resolution Law Firm</h2>
            <p className="text-slate mt-2 text-sm">We represent clients across all major courts</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: 'Lahore High Court', img: '/images/lahore-high-court.jpg' },
              { name: 'Supreme Court', img: '/images/supreme-court.jpg' },
              { name: 'District Court', img: '/images/district-court.jpg' },
              { name: 'Civil Courts', img: '/images/civil-court.jpg' },
              { name: 'Family Courts', img: '/images/family-court.jpg' },
              { name: 'Sessions Court', img: '/images/sessions-court.jpg' },
            ].map((court, i) => (
              <motion.div key={court.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group rounded-xl overflow-hidden border border-cream-dark hover:border-gold/30 transition-all"
              >
                <div className="h-24 sm:h-28 overflow-hidden relative">
                  <img src={court.img} alt={court.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />
                  <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-bold leading-tight">{court.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT — Compact ═══ */}
      <section className="py-16 sm:py-20 navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">Contact Us</h2>
            <p className="text-white/50 mt-2 text-sm">Get in touch for expert legal assistance</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Info */}
            <div className="space-y-4">
              {[
                { icon: MapPin, l: 'Main Office', v: 'Alvi Manzil, 3rd Floor, 9-Fane Road, Lahore' },
                { icon: MapPin, l: 'DHA Office', v: '129-J DHA EME Sector, Lahore' },
                { icon: MapPin, l: 'Islampura', v: '14-Jinnah St, Chohan Road, Islampura, Lahore' },
                { icon: Phone, l: 'Phone', v: '0316-8078693' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">{item.l}</p>
                    <p className="text-white text-sm font-semibold">{item.v}</p>
                  </div>
                </div>
              ))}
              <Link to="/contact" className="inline-flex items-center gap-2 text-gold font-semibold text-sm mt-2 hover:text-gold-light transition-colors">
                View Full Contact Page <ArrowRight size={15} />
              </Link>
            </div>
            {/* Quick Form */}
            {contactSubmitted ? (
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center flex flex-col items-center justify-center">
                <CheckCircle size={40} className="text-gold mb-2" />
                <p className="font-heading text-lg font-bold text-white">Message Sent!</p>
                <p className="text-white/50 text-sm">We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={submitContact} className="bg-white/10 backdrop-blur rounded-xl p-5 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="Name" required value={contactForm.name} onChange={e => setContactForm(p => ({...p, name: e.target.value}))} className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold" />
                  <input type="tel" placeholder="Phone" value={contactForm.phone} onChange={e => setContactForm(p => ({...p, phone: e.target.value}))} className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold" />
                </div>
                <input type="email" placeholder="Email" required value={contactForm.email} onChange={e => setContactForm(p => ({...p, email: e.target.value}))} className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold" />
                <input type="text" placeholder="Subject" required value={contactForm.subject} onChange={e => setContactForm(p => ({...p, subject: e.target.value}))} className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold" />
                <textarea placeholder="Your Message" required rows={3} value={contactForm.message} onChange={e => setContactForm(p => ({...p, message: e.target.value}))} className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold resize-none" />
                <button type="submit" className="w-full gold-gradient text-white py-2.5 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-gold/20 transition-all flex items-center justify-center gap-2">
                  <Send size={15} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
