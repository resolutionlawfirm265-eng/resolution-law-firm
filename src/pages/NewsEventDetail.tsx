import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, MapPin, Newspaper } from 'lucide-react'

interface NewsEvent {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  type: string
  image_url: string
  event_date: string
  location: string
  created_at: string
}

export default function NewsEventDetail() {
  const { slug } = useParams()
  const [item, setItem] = useState<NewsEvent | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/news-events?slug=${slug}`)
      .then(r => r.json())
      .then(data => { setItem(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [slug])

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin" />
    </div>
  )

  if (!item) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Newspaper size={48} className="text-navy/20 mx-auto mb-4" />
        <h2 className="font-heading text-2xl font-bold text-navy mb-2">Not Found</h2>
        <Link to="/news-events" className="text-gold font-semibold">← Back to News & Events</Link>
      </div>
    </div>
  )

  return (
    <div>
      <section className="navy-gradient py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/news-events" className="inline-flex items-center gap-2 text-gold text-sm font-semibold mb-6 hover:text-gold-light">
              <ArrowLeft size={16} /> Back to News & Events
            </Link>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className={`px-3 py-1 rounded-full text-xs font-bold capitalize ${
                item.type === 'event' ? 'bg-blue-500 text-white' : 'gold-gradient text-white'
              }`}>{item.type}</span>
              <span className="text-white/50 text-sm flex items-center gap-1">
                <Calendar size={14} /> {new Date(item.event_date).toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              {item.location && (
                <span className="text-white/50 text-sm flex items-center gap-1">
                  <MapPin size={14} /> {item.location}
                </span>
              )}
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">{item.title}</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6">
        {item.image_url && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl overflow-hidden mb-8 border border-cream-dark"
          >
            <img src={item.image_url} alt={item.title} className="w-full h-auto max-h-[400px] object-cover" />
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 sm:p-10 shadow-sm border border-cream-dark blog-content"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      </section>
    </div>
  )
}
