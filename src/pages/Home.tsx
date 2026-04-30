import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Scale, Shield, Users, Award, ChevronRight, Star, Phone, ArrowRight, Clock, CheckCircle, Gavel, Building, FileText, Heart, Briefcase, DollarSign, ChevronDown, Quote, MapPin } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

interface Service { id: number; title: string; description: string; icon: string; }
interface Review { id: number; name: string; rating: number; comment: string; approved: boolean; }
interface Blog { id: number; title: string; slug: string; excerpt: string; category: string; image_url: string; created_at: string; }
interface FAQ { id: number; question: string; answer: string; }

const iconMap: Record<string, any> = {
  Gavel, Building, FileText, Heart, Briefcase, DollarSign, Shield, Scale, Users, Award
}

const howWeWork = [
  { step: '01', title: 'Free Consultation', desc: 'Schedule a free initial consultation to discuss your legal matter with our expert team.' },
  { step: '02', title: 'Case Analysis', desc: 'We thoroughly analyze your case, research applicable laws, and develop a winning strategy.' },
  { step: '03', title: 'Legal Representation', desc: 'Our advocates represent you with dedication in courts, tribunals, and negotiations.' },
  { step: '04', title: 'Resolution', desc: 'We work tirelessly until your case reaches a favorable resolution and your rights are protected.' },
]

const whyTrust = [
  { icon: Shield, title: 'Proven Track Record', desc: 'Over 500 cases successfully resolved with a high win rate across all practice areas.' },
  { icon: Users, title: 'Client-First Approach', desc: 'We prioritize your needs, keeping you informed at every stage of your legal journey.' },
  { icon: Award, title: 'Expert Legal Team', desc: 'Led by Umar Azeem Advocate, our team brings deep expertise in Pakistani law.' },
  { icon: Clock, title: 'Timely Resolution', desc: 'We understand the value of time and work efficiently to resolve your matters promptly.' },
  { icon: Scale, title: 'Transparent Fees', desc: 'No hidden charges. We provide clear fee structures before taking on your case.' },
  { icon: CheckCircle, title: 'Confidentiality', desc: 'Your information is protected with the highest standards of legal confidentiality.' },
]

export default function Home() {
  const [services, setServices] = useState<Service[]>([])
  const [reviews, setReviews] = useState<Review[]>([])
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [reviewForm, setReviewForm] = useState({ name: '', rating: 5, comment: '' })
  const [reviewSubmitted, setReviewSubmitted] = useState(false)
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
      setFaqs(Array.isArray(f) ? f : [])
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  const submitReview = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewForm),
    })
    setReviewSubmitted(true)
    setReviewForm({ name: '', rating: 5, comment: '' })
  }

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

  const getIcon = (iconName: string) => iconMap[iconName] || Scale

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center navy-gradient overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" stroke="#c4973b" strokeWidth="0.5" fill="none" />
            <circle cx="100" cy="100" r="60" stroke="#c4973b" strokeWidth="0.3" fill="none" />
            <circle cx="100" cy="100" r="40" stroke="#c4973b" strokeWidth="0.2" fill="none" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-10 bg-gold" />
                <span className="text-gold font-semibold text-sm tracking-widest uppercase">Resolution Law Firm</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Justice Through
                <span className="text-gold-gradient block">Expert Legal Solutions</span>
              </h1>
              <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
                Led by Umar Azeem Advocate, we provide comprehensive legal services in Civil, Criminal, Tax, Corporate, and Family law across Lahore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:03168078693"
                  className="gold-gradient text-white px-8 py-4 rounded-lg font-bold text-base tracking-wide hover:shadow-xl hover:shadow-gold/20 transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={18} /> Free Consultation
                </a>
                <Link
                  to="/services"
                  className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold text-base tracking-wide hover:border-gold hover:text-gold transition-all flex items-center justify-center gap-2"
                >
                  Our Services <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-[480px] h-[480px] flex flex-col items-center justify-center">
                {/* Outer rotating orbit */}
                <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                  <svg viewBox="0 0 480 480" className="w-full h-full">
                    <circle cx="240" cy="240" r="230" stroke="#c4973b" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="8 6" />
                  </svg>
                  {/* Orbit dot 1 */}
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gold-gradient shadow-lg shadow-gold/40" />
                  {/* Orbit dot 2 */}
                  <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/30" />
                </div>

                {/* Middle rotating orbit - reverse */}
                <div className="absolute inset-[40px] animate-[spin_15s_linear_infinite_reverse]">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <circle cx="200" cy="200" r="190" stroke="#c4973b" strokeWidth="0.8" fill="none" opacity="0.15" strokeDasharray="12 8" />
                  </svg>
                  {/* Orbit dot 3 */}
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3.5 h-3.5 rounded-full gold-gradient shadow-md shadow-gold/30" />
                  {/* Orbit dot 4 */}
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>

                {/* Inner rotating orbit */}
                <div className="absolute inset-[80px] animate-[spin_25s_linear_infinite]">
                  <svg viewBox="0 0 320 320" className="w-full h-full">
                    <circle cx="160" cy="160" r="150" stroke="#c4973b" strokeWidth="0.6" fill="none" opacity="0.1" strokeDasharray="4 8" />
                  </svg>
                  {/* Orbit dot 5 */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full gold-gradient shadow-sm" />
                </div>

                {/* Static glow ring */}
                <div className="absolute inset-[100px] rounded-full border border-gold/10" />
                <div className="absolute inset-[115px] rounded-full border border-gold/5" />

                {/* Center logo + name */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-56 h-56 rounded-full bg-navy-light/50 backdrop-blur-sm border-2 border-gold/25 flex items-center justify-center shadow-2xl shadow-gold/15">
                    <img src="/uploads/upload_1.png" alt="Resolution Law Firm Logo" className="w-44 h-44 object-contain" />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="font-heading text-2xl font-bold text-gold tracking-wide">RESOLUTION</h2>
                    <p className="text-white/50 text-xs tracking-[0.35em] uppercase font-semibold">Law Firm</p>
                  </div>
                </div>

                {/* Floating icons on orbits */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-2 right-12 w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center shadow-xl shadow-gold/30"
                >
                  <Scale size={28} className="text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [6, -6, 6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-2 left-12 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/10"
                >
                  <Shield size={24} className="text-gold" />
                </motion.div>

                <motion.div
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-20 -left-4 w-12 h-12 rounded-xl bg-white/5 backdrop-blur flex items-center justify-center border border-gold/10"
                >
                  <Gavel size={20} className="text-gold/70" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Our Legal Services" subtitle="Comprehensive legal solutions tailored to protect your rights and interests" />
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                <div className="w-12 h-12 bg-cream-dark rounded-lg mb-4" />
                <div className="h-6 bg-cream-dark rounded w-3/4 mb-3" />
                <div className="h-4 bg-cream-dark rounded w-full mb-2" />
                <div className="h-4 bg-cream-dark rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = getIcon(service.icon)
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 border border-transparent hover:border-gold/20"
                >
                  <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">{service.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        )}
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-dark transition-colors">
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* About / Founder */}
      <section className="py-20 sm:py-28 navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-4 border-gold/20">
                  <div className="w-full h-full bg-navy-light flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full gold-gradient mx-auto mb-4 flex items-center justify-center">
                        <span className="font-heading text-5xl font-bold text-white">UA</span>
                      </div>
                      <p className="font-heading text-2xl font-bold text-white">Umar Azeem</p>
                      <p className="text-gold text-sm">Advocate & Founder</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle title="About Our Founder" subtitle="" light center={false} />
              <h3 className="font-heading text-2xl font-bold text-gold mb-4">Umar Azeem Advocate</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Umar Azeem Advocate is the founder of Resolution Law Firm, bringing extensive experience in Pakistani law. With a deep commitment to justice and client advocacy, he has successfully handled hundreds of cases across civil, criminal, tax, corporate, and family law matters.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                His vision for Resolution Law Firm is to provide accessible, expert legal services to individuals and businesses across Lahore and beyond, ensuring every client receives personalized attention and the best possible legal representation.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 gold-gradient text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-gold/20 transition-all"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle title="How We Work" subtitle="Our streamlined process ensures efficient and effective legal representation" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howWeWork.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-cream-dark hover:border-gold/30 transition-all group"
            >
              <div className="font-heading text-5xl font-bold text-gold/10 group-hover:text-gold/20 transition-colors absolute top-4 right-4">
                {step.step}
              </div>
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mb-4">
                <span className="font-bold text-white text-lg">{step.step}</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-navy mb-2">{step.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle title="Why Clients Trust Us" subtitle="We deliver results with integrity, expertise, and unwavering dedication" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyTrust.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-xl bg-cream/50 border border-cream-dark hover:border-gold/30 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={26} className="text-gold" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Client Reviews" subtitle="What our clients say about our legal services" />
        {reviews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reviews.slice(0, 6).map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-cream-dark"
              >
                <Quote size={28} className="text-gold/20 mb-3" />
                <p className="text-charcoal text-sm leading-relaxed mb-4">{review.comment}</p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="font-heading font-bold text-navy">{review.name}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Add Review Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-cream-dark"
        >
          <h3 className="font-heading text-xl font-bold text-navy mb-4 text-center">Share Your Experience</h3>
          {reviewSubmitted ? (
            <div className="text-center py-6">
              <CheckCircle size={48} className="text-green-500 mx-auto mb-3" />
              <p className="font-semibold text-navy">Thank you for your review!</p>
              <p className="text-slate text-sm">Your review will appear after approval.</p>
            </div>
          ) : (
            <form onSubmit={submitReview} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={reviewForm.name}
                onChange={e => setReviewForm(p => ({ ...p, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-cream-dark bg-cream/30 text-charcoal placeholder:text-slate/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30"
              />
              <div>
                <label className="text-sm text-slate mb-1 block">Rating</label>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(n => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setReviewForm(p => ({ ...p, rating: n }))}
                      className="p-1"
                    >
                      <Star size={24} className={n <= reviewForm.rating ? 'text-gold fill-gold' : 'text-gray-300'} />
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                placeholder="Share your experience..."
                required
                rows={4}
                value={reviewForm.comment}
                onChange={e => setReviewForm(p => ({ ...p, comment: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-cream-dark bg-cream/30 text-charcoal placeholder:text-slate/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 resize-none"
              />
              <button
                type="submit"
                className="w-full gold-gradient text-white py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-gold/20 transition-all"
              >
                Submit Review
              </button>
            </form>
          )}
        </motion.div>
      </section>

      {/* Latest Blogs */}
      {blogs.length > 0 && (
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionTitle title="Latest Legal Insights" subtitle="Stay informed with our expert articles on Pakistani law" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog, i) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={`/blog/${blog.slug}`} className="block bg-cream/50 rounded-xl overflow-hidden border border-cream-dark hover:border-gold/30 hover:shadow-lg transition-all group">
                    <div className="h-48 bg-navy/5 flex items-center justify-center">
                      <Scale size={48} className="text-navy/10" />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold text-gold uppercase tracking-wider">{blog.category}</span>
                      <h3 className="font-heading text-lg font-bold text-navy mt-1 mb-2 group-hover:text-gold transition-colors">{blog.title}</h3>
                      <p className="text-slate text-sm line-clamp-2">{blog.excerpt}</p>
                      <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold mt-3">
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/blogs" className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-dark transition-colors">
                View All Articles <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Frequently Asked Questions" subtitle="Find answers to common legal questions" />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl border border-cream-dark overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-navy pr-4">{faq.question}</span>
                <ChevronDown size={20} className={`text-gold shrink-0 transition-transform ${openFaq === faq.id ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === faq.id && (
                <div className="px-6 pb-4">
                  <p className="text-slate text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inside Resolution Law Firm - Courts */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle title="Inside Resolution Law Firm" subtitle="We represent clients across all major courts in Pakistan" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Lahore High Court', img: '/images/lahore-high-court.jpg', desc: 'Constitutional petitions, civil & criminal appeals, writ jurisdiction' },
              { name: 'Supreme Court of Pakistan', img: '/images/supreme-court.jpg', desc: 'Appeals, constitutional matters, and landmark judgments' },
              { name: 'District & Sessions Court', img: '/images/district-court.jpg', desc: 'Criminal trials, civil suits, and appellate hearings' },
              { name: 'Civil Courts', img: '/images/civil-court.jpg', desc: 'Property disputes, recovery suits, injunctions, and declarations' },
              { name: 'Family Courts', img: '/images/family-court.jpg', desc: 'Divorce, custody, maintenance, Khula, and guardianship matters' },
              { name: 'Sessions & Magistrate Courts', img: '/images/sessions-court.jpg', desc: 'Criminal defense, bail applications, and trial proceedings' },
            ].map((court, i) => (
              <motion.div
                key={court.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-xl overflow-hidden border border-cream-dark hover:border-gold/30 hover:shadow-xl transition-all bg-white"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={court.img}
                    alt={court.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 font-heading text-lg font-bold text-white">{court.name}</h3>
                </div>
                <div className="p-5">
                  <p className="text-slate text-sm leading-relaxed">{court.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28 navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionTitle title="Contact Us" subtitle="Get in touch with our legal team for expert assistance" light />
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {[
                  { icon: MapPin, label: 'Main Office', value: 'Alvi Manzil, 3rd Floor, 9-Fane Road, Lahore' },
                  { icon: MapPin, label: 'DHA Office', value: '129-J DHA EME Sector, Lahore' },
                  { icon: MapPin, label: 'Islampura Office', value: '14-Jinnah St, Chohan Road, Islampura, Lahore' },
                  { icon: Phone, label: 'Phone', value: '0316-8078693' },
                  { icon: Phone, label: 'Email', value: 'resolutionlawfirm265@gmail.com' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">{item.label}</p>
                      <p className="text-white font-semibold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {contactSubmitted ? (
                <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
                  <CheckCircle size={48} className="text-gold mx-auto mb-3" />
                  <p className="font-heading text-xl font-bold text-white">Message Sent!</p>
                  <p className="text-white/60 text-sm mt-2">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={submitContact} className="bg-white/10 backdrop-blur rounded-xl p-6 sm:p-8 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Name" required value={contactForm.name} onChange={e => setContactForm(p => ({...p, name: e.target.value}))} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold" />
                    <input type="email" placeholder="Email Address" required value={contactForm.email} onChange={e => setContactForm(p => ({...p, email: e.target.value}))} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="tel" placeholder="Phone Number" value={contactForm.phone} onChange={e => setContactForm(p => ({...p, phone: e.target.value}))} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold" />
                    <input type="text" placeholder="Subject" required value={contactForm.subject} onChange={e => setContactForm(p => ({...p, subject: e.target.value}))} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold" />
                  </div>
                  <textarea placeholder="Your Message" required rows={5} value={contactForm.message} onChange={e => setContactForm(p => ({...p, message: e.target.value}))} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold resize-none" />
                  <button type="submit" className="w-full gold-gradient text-white py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-gold/20 transition-all">
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
