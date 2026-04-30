import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Scale, ArrowRight, Calendar, Building, BookOpen, Search } from 'lucide-react'

interface CaseLaw {
  id: number
  title: string
  slug: string
  excerpt: string
  category: string
  court: string
  year: string
  citation: string
  created_at: string
}

export default function CaseLaws() {
  const [caseLaws, setCaseLaws] = useState<CaseLaw[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/api/caselaws?published=true')
      .then(r => r.json())
      .then(data => { setCaseLaws(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const categories = ['All', ...Array.from(new Set(caseLaws.map(c => c.category)))]
  const courts = Array.from(new Set(caseLaws.map(c => c.court)))

  const filtered = caseLaws.filter(c => {
    const matchCat = filter === 'All' || c.category === filter
    const matchSearch = !search || c.title.toLowerCase().includes(search.toLowerCase()) || c.citation.toLowerCase().includes(search.toLowerCase()) || c.court.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div>
      <section className="navy-gradient py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Case <span className="text-gold-gradient">Laws</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Important legal precedents and landmark judgments from Pakistani courts</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate/40" />
            <input
              type="text"
              placeholder="Search case laws, citations, courts..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-cream-dark bg-white text-charcoal placeholder:text-slate/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                  filter === cat
                    ? 'gold-gradient text-white shadow-sm'
                    : 'bg-white border border-cream-dark text-slate hover:text-navy hover:border-gold/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1,2,3,4].map(i => (
              <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                <div className="h-4 bg-cream-dark rounded w-1/4 mb-3" />
                <div className="h-6 bg-cream-dark rounded w-3/4 mb-3" />
                <div className="h-4 bg-cream-dark rounded w-full mb-2" />
                <div className="h-4 bg-cream-dark rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen size={48} className="text-navy/10 mx-auto mb-4" />
            <p className="text-slate">No case laws found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((cl, i) => (
              <motion.div
                key={cl.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/case-law/${cl.slug}`}
                  className="block bg-white rounded-xl p-6 border border-cream-dark hover:border-gold/30 hover:shadow-lg transition-all group h-full"
                >
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="text-xs font-bold text-white px-2.5 py-1 rounded-md gold-gradient">{cl.category}</span>
                    <span className="text-xs font-semibold text-navy bg-navy/5 px-2.5 py-1 rounded-md flex items-center gap-1">
                      <Building size={11} /> {cl.court}
                    </span>
                    <span className="text-xs text-slate flex items-center gap-1">
                      <Calendar size={11} /> {cl.year}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors leading-snug">{cl.title}</h3>
                  <p className="text-gold text-xs font-semibold mb-2">{cl.citation}</p>
                  <p className="text-slate text-sm line-clamp-3 leading-relaxed">{cl.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold mt-3">
                    Read Full Case <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
