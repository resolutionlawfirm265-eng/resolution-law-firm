import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const newsImages = [
  { src: '/uploads/news/news-1.jpg', caption: 'Adv. Umar Azeem meeting with Punjab Prosecution officials' },
  { src: '/uploads/news/news-2.jpg', caption: 'Resolution Lawyers Group — Punjab Bar Council Candidate Announcement 25-30' },
  { src: '/uploads/news/news-3.jpg', caption: 'Resolution Lawyers Group at the Bar Association event' },
  { src: '/uploads/news/news-4.jpg', caption: 'Resolution Law Firm advocates at the court' },
  { src: '/uploads/news/news-5.jpg', caption: 'Resolution Lawyers Group celebrating at the Bar event' },
  { src: '/uploads/news/news-6.jpg', caption: 'Adv. Umar Azeem networking with senior lawyers' },
]

export default function News() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <div>
      {/* Hero */}
      <section className="navy-gradient py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">News & <span className="text-gold-gradient">Gallery</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Latest updates and highlights from Resolution Law Firm & Resolution Lawyers Group</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Photo Gallery" subtitle="Moments from our events, meetings, and legal community engagements" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {newsImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden border border-cream-dark hover:border-gold/30 hover:shadow-xl transition-all cursor-pointer bg-white"
              onClick={() => setLightbox(i)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <p className="text-white text-sm font-semibold">{img.caption}</p>
                </div>
              </div>
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={18} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X size={22} />
            </button>

            {/* Prev / Next */}
            {lightbox > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1) }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors text-xl font-bold"
              >
                ‹
              </button>
            )}
            {lightbox < newsImages.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1) }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors text-xl font-bold"
              >
                ›
              </button>
            )}

            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={newsImages[lightbox].src}
                alt={newsImages[lightbox].caption}
                className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
              />
              <p className="text-white/80 text-sm sm:text-base mt-4 text-center px-4">{newsImages[lightbox].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
