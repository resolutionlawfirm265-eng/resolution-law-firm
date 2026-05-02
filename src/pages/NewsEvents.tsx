import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { Calendar, MapPin } from 'lucide-react'

const events = [
  {
    img: '/uploads/event-1.jpg',
    title: 'Meeting with Punjab Prosecution Department',
    desc: 'Umar Azeem Advocate presenting bouquet to senior official at Punjab Prosecution Department office.',
    date: '2025',
  },
  {
    img: '/uploads/event-2.jpg',
    title: 'Resolution Lawyers Group — Punjab Bar Council Candidate Announcement',
    desc: 'Official announcement of Member Punjab Bar Council Candidate 25-30 by Resolution Lawyers Group with full team.',
    date: '2025',
  },
  {
    img: '/uploads/event-3.jpg',
    title: 'Firm Team Meeting & Strategy Session',
    desc: 'Resolution Law Firm team gathering for strategic planning and case review session.',
    date: '2025',
  },
  {
    img: '/uploads/event-4.jpg',
    title: 'Legal Community Engagement',
    desc: 'Resolution Law Firm actively participating in legal community events and bar association activities.',
    date: '2025',
  },
  {
    img: '/uploads/event-5.jpg',
    title: 'Professional Networking Event',
    desc: 'Building strong relationships with fellow legal professionals and judiciary members.',
    date: '2025',
  },
  {
    img: '/uploads/event-6.jpg',
    title: 'Client Appreciation & Community Outreach',
    desc: 'Resolution Law Firm\'s commitment to community service and client relationship building.',
    date: '2025',
  },
]

export default function NewsEvents() {
  return (
    <div>
      {/* Hero */}
      <section className="navy-gradient py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Firm News <span className="text-gold-gradient">& Events</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Stay updated with the latest activities, events, and achievements of Resolution Law Firm</p>
          </motion.div>
        </div>
      </section>

      {/* Events Gallery */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Latest Events & Activities" subtitle="Highlights from our firm's recent engagements" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden border border-cream-dark hover:border-gold/30 hover:shadow-xl transition-all"
            >
              <div className="h-56 sm:h-64 overflow-hidden relative">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={14} className="text-gold" />
                  <span className="text-xs text-slate font-semibold">{event.date}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-navy mb-2 leading-snug">{event.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Resolution Lawyers Group */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <SectionTitle title="Resolution Lawyers Group" subtitle="A collective of dedicated legal professionals" />
          <p className="text-slate leading-relaxed mb-6">
            Resolution Lawyers Group is a collective of experienced advocates working under the leadership of Umar Azeem Advocate. Our group actively participates in bar association elections, legal reforms, and community service initiatives across Lahore.
          </p>
          <p className="text-slate leading-relaxed">
            We believe in strengthening the legal community through collaboration, mentorship, and active participation in the democratic processes of bar councils and legal institutions.
          </p>
        </div>
      </section>
    </div>
  )
}
