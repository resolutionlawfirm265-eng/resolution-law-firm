import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Building, BookOpen, Scale } from 'lucide-react'

interface CaseLaw {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  court: string
  year: string
  citation: string
  created_at: string
}

export default function CaseLawDetail() {
  const { slug } = useParams()
  const [caseLaw, setCaseLaw] = useState<CaseLaw | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/caselaws?slug=${slug}`)
      .then(r => r.json())
      .then(data => { setCaseLaw(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [slug])

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin" />
    </div>
  )

  if (!caseLaw) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <BookOpen size={48} className="text-navy/20 mx-auto mb-4" />
        <h2 className="font-heading text-2xl font-bold text-navy mb-2">Case Law Not Found</h2>
        <Link to="/case-laws" className="text-gold font-semibold">← Back to Case Laws</Link>
      </div>
    </div>
  )

  return (
    <div>
      <section className="navy-gradient py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/case-laws" className="inline-flex items-center gap-2 text-gold text-sm font-semibold mb-6 hover:text-gold-light">
              <ArrowLeft size={16} /> Back to Case Laws
            </Link>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="px-3 py-1 rounded-full gold-gradient text-white text-xs font-bold">{caseLaw.category}</span>
              <span className="text-white/60 text-sm flex items-center gap-1">
                <Building size={14} /> {caseLaw.court}
              </span>
              <span className="text-white/50 text-sm flex items-center gap-1">
                <Calendar size={14} /> {caseLaw.year}
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">{caseLaw.title}</h1>
            <p className="text-gold font-semibold">{caseLaw.citation}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 sm:p-10 shadow-sm border border-cream-dark blog-content"
          dangerouslySetInnerHTML={{ __html: caseLaw.content }}
        />
      </section>
    </div>
  )
}
