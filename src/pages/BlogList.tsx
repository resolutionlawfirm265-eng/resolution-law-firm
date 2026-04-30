import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Scale, ArrowRight, Calendar } from 'lucide-react'

interface Blog { id: number; title: string; slug: string; excerpt: string; category: string; image_url: string; created_at: string; }

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/blogs?published=true')
      .then(r => r.json())
      .then(data => { setBlogs(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div>
      <section className="navy-gradient py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Legal <span className="text-gold-gradient">Blog & Insights</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Expert articles and updates on Pakistani law from Resolution Law Firm</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="bg-white rounded-xl overflow-hidden animate-pulse">
                <div className="h-48 bg-cream-dark" />
                <div className="p-5">
                  <div className="h-4 bg-cream-dark rounded w-1/4 mb-3" />
                  <div className="h-6 bg-cream-dark rounded w-3/4 mb-3" />
                  <div className="h-4 bg-cream-dark rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20">
            <Scale size={48} className="text-navy/10 mx-auto mb-4" />
            <p className="text-slate">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, i) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/blog/${blog.slug}`} className="block bg-white rounded-xl overflow-hidden border border-cream-dark hover:border-gold/30 hover:shadow-lg transition-all group h-full">
                  <div className="h-48 bg-navy/5 flex items-center justify-center">
                    <Scale size={48} className="text-navy/10" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-gold uppercase tracking-wider">{blog.category}</span>
                      <span className="text-xs text-slate flex items-center gap-1">
                        <Calendar size={12} /> {new Date(blog.created_at).toLocaleDateString('en-PK', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">{blog.title}</h3>
                    <p className="text-slate text-sm line-clamp-3">{blog.excerpt}</p>
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
