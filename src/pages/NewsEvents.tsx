import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const events = [
  {
    id: 1,
    image: '/uploads/event-1.jpg',
    title: 'Meeting with Punjab Prosecution Department',
    description: 'Umar Azeem Advocate presenting bouquet to the head of Punjab Prosecution Department. Resolution Law Firm maintains strong professional relationships with key legal institutions across Punjab.',
  },
  {
    id: 2,
    image: '/uploads/event-2.jpg',
    title: 'Resolution Lawyers Group — Punjab Bar Council Candidate Announcement',
    description: 'Official announcement of Member Punjab Bar Council Candidate 2025-30 by Resolution Lawyers Group. The group comprises distinguished advocates from across Lahore under the supervision of Haji Azeem Mughal.',
  },
  {
    id: 3,
    image: '/uploads/event-3.jpg',
    title: 'Bar Association Event — Legal Community Gathering',
    description: 'Resolution Law Firm team at a Bar Association event. Our advocates actively participate in legal community activities, seminars, and professional development programs to stay at the forefront of legal practice.',
  },
  {
    id: 4,
    image: '/uploads/event-4.jpg',
    title: 'Our Legal Team at Lahore Courts',
    description: 'Members of Resolution Law Firm at Lahore Courts. Our advocates are dedicated professionals committed to providing the highest quality legal representation to our clients.',
  },
  {
    id: 5,
    image: '/uploads/event-5.jpg',
    title: 'Legal Conference & Networking Event',
    description: 'Resolution Law Firm team at a legal conference with fellow advocates. Building strong networks within the legal community helps us serve our clients better through collaboration and shared expertise.',
  },
  {
    id: 6,
    image: '/uploads/event-6.jpg',
    title: 'Professional Networking — Senior Advocates Meeting',
    description: 'Umar Azeem Advocate engaging with senior members of the legal community. Resolution Law Firm values mentorship and professional relationships that strengthen our legal practice.',
  },
]

export default function NewsEvents() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openDetails = (event: typeof events[0], index: number) => {
    setSelectedEvent(event)
    setLightboxIndex(index)
  }

  const navigateLightbox = (dir: number) => {
    const newIndex = (lightboxIndex + dir + events.length) % events.length
    setLightboxIndex(newIndex)
    setSelectedEvent(events[newIndex])
  }

  return (
    <div>
      {/* Hero */}
      <section className="navy-gradient py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Firm News <span className="text-gold-gradient">& Events</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Stay updated with Resolution Law Firm's latest activities, events, and achievements</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Latest Events & Activities" subtitle="Highlights from our firm's professional engagements and community involvement" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openDetails(event, i)}
            >
              <div className="bg-white rounded-xl overflow-hidden border border-cream-dark hover:border-gold/30 hover:shadow-xl transition-all duration-300">
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <ZoomIn size={22} className="text-navy" />
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-navy mb-1 line-clamp-2 group-hover:text-gold transition-colors">{event.title}</h3>
                  <p className="text-gold text-sm font-semibold">Click to see details →</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox / Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              >
                <X size={20} className="text-navy" />
              </button>

              {/* Image */}
              <div className="relative">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full max-h-[50vh] object-contain bg-gray-100 rounded-t-2xl"
                />
                {/* Navigation arrows */}
                <button
                  onClick={(e) => { e.stopPropagation(); navigateLightbox(-1) }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronLeft size={20} className="text-navy" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); navigateLightbox(1) }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight size={20} className="text-navy" />
                </button>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8">
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-3">{selectedEvent.title}</h2>
                <p className="text-slate leading-relaxed">{selectedEvent.description}</p>
                <div className="mt-4 pt-4 border-t border-cream-dark flex items-center justify-between">
                  <span className="text-xs text-slate/50">{lightboxIndex + 1} of {events.length}</span>
                  <span className="text-xs text-gold font-semibold">Resolution Law Firm</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
