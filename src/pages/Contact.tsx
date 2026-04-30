import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSending(false)
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div>
      <section className="navy-gradient py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Contact <span className="text-gold-gradient">Us</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Get in touch with our legal team for expert assistance</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Info Cards */}
          <div className="space-y-6">
            {[
              { icon: MapPin, title: 'Main Office', lines: ['Alvi Manzil, 3rd Floor', '9-Fane Road, Lahore'] },
              { icon: MapPin, title: 'DHA Office', lines: ['129-J DHA EME Sector', 'Lahore'] },
              { icon: MapPin, title: 'Islampura Office', lines: ['14-Jinnah St, Chohan Road', 'Islampura, Lahore'] },
              { icon: Phone, title: 'Phone', lines: ['0316-8078693'] },
              { icon: Mail, title: 'Email', lines: ['resolutionlawfirm265@gmail.com'] },
              { icon: Clock, title: 'Working Hours', lines: ['Monday - Saturday', '9:00 AM - 6:00 PM'] },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-cream-dark"
              >
                <div className="w-11 h-11 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{item.title}</p>
                  {item.lines.map((line, j) => (
                    <p key={j} className="text-slate text-sm">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 sm:p-10 shadow-sm border border-cream-dark"
            >
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-navy mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate">We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-4 text-gold font-semibold">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-semibold text-navy mb-1 block">Full Name *</label>
                      <input type="text" required value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} className="w-full px-4 py-3 rounded-lg border border-cream-dark bg-cream/30 text-charcoal focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-navy mb-1 block">Email Address *</label>
                      <input type="email" required value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))} className="w-full px-4 py-3 rounded-lg border border-cream-dark bg-cream/30 text-charcoal focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-semibold text-navy mb-1 block">Phone Number</label>
                      <input type="tel" value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))} className="w-full px-4 py-3 rounded-lg border border-cream-dark bg-cream/30 text-charcoal focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" placeholder="03XX-XXXXXXX" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-navy mb-1 block">Subject *</label>
                      <input type="text" required value={form.subject} onChange={e => setForm(p => ({...p, subject: e.target.value}))} className="w-full px-4 py-3 rounded-lg border border-cream-dark bg-cream/30 text-charcoal focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30" placeholder="Legal consultation" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy mb-1 block">Message *</label>
                    <textarea required rows={6} value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))} className="w-full px-4 py-3 rounded-lg border border-cream-dark bg-cream/30 text-charcoal focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 resize-none" placeholder="Describe your legal matter..." />
                  </div>
                  <button type="submit" disabled={sending} className="w-full gold-gradient text-white py-3.5 rounded-lg font-bold hover:shadow-lg hover:shadow-gold/20 transition-all flex items-center justify-center gap-2 disabled:opacity-60">
                    <Send size={18} /> {sending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-cream-dark h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.123!2d74.3236!3d31.5497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMyJzU5LjAiTiA3NMKwMTknMjUuMCJF!5e0!3m2!1sen!2spk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Resolution Law Firm Location"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
