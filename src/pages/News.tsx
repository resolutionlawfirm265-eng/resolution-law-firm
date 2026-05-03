import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const newsImages = [
  { src: '/uploads/news-1.jpg', caption: 'Meeting with Punjab Prosecution Department' },
  { src: '/uploads/news-2.jpg', caption: 'Resolution Lawyers Group — Punjab Bar Council Candidate Announcement 25-30' },
  { src: '/uploads/news-3.jpg', caption: 'Resolution Lawyers Group at Bar Association Event' },
  { src: '/uploads/news-4.jpg', caption: 'Our Legal Team at Lahore Courts' },
  { src: '/uploads/news-5.jpg', caption: 'Resolution Lawyers Group — Bar Council Event' },
  { src: '/uploads/news-6.jpg', caption: 'Networking with Senior Legal Professionals' },
]

export default function News() {
  return (
    <div>
      {/* Hero */}
      <section className="navy-gradient py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Latest <span className="text-gold-gradient">News</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Updates and highlights from Resolution Law Firm & Resolution Lawyers Group</p>
          </motion.div>
        </div>
      </section>

      {/* News Gallery */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle title="News & Highlights" subtitle="Our firm's latest events, achievements, and community involvement" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsImages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl overflow-hidden border border-cream-dark hover:border-gold/30 hover:shadow-xl transition-all bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-navy font-semibold text-sm leading-snug">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
