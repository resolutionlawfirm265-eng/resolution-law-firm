import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowRight, Newspaper, CalendarDays, Image } from 'lucide-react'

interface NewsEvent {
  id: number; title: string; slug: string; excerpt: string; type: string;
  image_url: string; event_date: string; location: string; created_at: string;
}

export default function NewsEvents() {
  const [items, setItems] = useState<NewsEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'news' | 'event'>('all')

  useEffect(() => {
    fetch('/api/news-events?published=true')
      .then(r => r.json())
      .then(data => { setItems(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const filtered = filter === 'all' ? items : items.filter(i => i.type === filter)

  return (
    <div>
      <section className="navy-gradient py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">News & <span className="text-gold-gradient">Events</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Stay updated with the latest news, events, and announcements from Resolution Law Firm</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Filter */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {([['all','All'],['news','News'],['event','Events']] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                filter === key ? 'gold-gradient text-white shadow-sm' : 'bg-white border border-cream-dark text-slate hover:text-navy hover:border-gold/30'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="bg-white rounded-xl overflow-hidden animate-pulse">
                <div className="h-48 bg-cream-dark" />
                <div className="p-5"><div className="h-6 bg-cream-dark rounded w-3/4 mb-3" /><div className="h-4 bg-cream-dark rounded w-full" /></div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <Newspaper size={48} className="text-navy/10 mx-auto mb-4" />
            <p className="text-slate">No news or events found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={`/news-event/${item.slug}`} className="block bg-white rounded-xl overflow-hidden border border-cream-dark hover:border-gold/30 hover:shadow-lg transition-all group h-full">
                  {/* Image */}
                  <div className="h-48 bg-navy/5 relative overflow-hidden">
                    {item.image_url ? (
                      <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        {item.type === 'event' ? <CalendarDays size={48} className="text-navy/10" /> : <Newspaper size={48} className="text-navy/10" />}
                      </div>
                    )}
                    <span className={`absolute top-3 left-3 text-xs font-bold text-white px-3 py-1 rounded-full ${
                      item.type === 'event' ? 'bg-blue-500' : 'gold-gradient'
                    }`}>
                      {item.type === 'event' ? 'Event' : 'News'}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      {item.event_date && (
                        <span className="text-xs text-slate flex items-center gap-1">
                          <Calendar size={12} /> {new Date(item.event_date).toLocaleDateString('en-PK', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </span>
                      )}
                      {item.location && (
                        <span className="text-xs text-slate flex items-center gap-1">
                          <MapPin size={12} /> {item.location.length > 30 ? item.location.slice(0, 30) + '...' : item.location}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors leading-snug">{item.title}</h3>
                    <p className="text-slate text-sm line-clamp-2">{item.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold mt-3">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
