import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, CheckCircle } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

interface Review { id: number; name: string; rating: number; comment: string; approved: boolean; created_at: string; }

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [reviewForm, setReviewForm] = useState({ name: '', rating: 5, comment: '' })
  const [submitted, setSubmitted] = useState(false)

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/reviews')
      const data = await res.json()
      setReviews(Array.isArray(data) ? data.filter((r: Review) => r.approved) : [])
    } catch { /* ignore */ }
    setLoading(false)
  }

  useEffect(() => { fetchReviews() }, [])

  const submitReview = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewForm),
    })
    setSubmitted(true)
    setReviewForm({ name: '', rating: 5, comment: '' })
  }

  return (
    <div>
      {/* Hero */}
      <section className="navy-gradient py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Client <span className="text-gold-gradient">Reviews</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">See what our clients say about Resolution Law Firm's legal services</p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                <div className="w-8 h-8 bg-cream-dark rounded mb-3" />
                <div className="h-4 bg-cream-dark rounded w-full mb-2" />
                <div className="h-4 bg-cream-dark rounded w-3/4 mb-4" />
                <div className="h-3 bg-cream-dark rounded w-1/3" />
              </div>
            ))}
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-16">
            <Star size={48} className="text-navy/10 mx-auto mb-4" />
            <p className="text-slate">No reviews yet. Be the first to share your experience!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-cream-dark hover:border-gold/20 hover:shadow-md transition-all"
              >
                <Quote size={28} className="text-gold/20 mb-3" />
                <p className="text-charcoal text-sm leading-relaxed mb-4">{review.comment}</p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-gold fill-gold" />
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-gray-200" />
                  ))}
                </div>
                <p className="font-heading font-bold text-navy">{review.name}</p>
                <p className="text-slate/50 text-xs mt-1">{new Date(review.created_at).toLocaleDateString('en-PK', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Submit Review */}
      <section className="pb-20 sm:pb-28 max-w-xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-cream-dark"
        >
          <h3 className="font-heading text-xl font-bold text-navy mb-4 text-center">Share Your Experience</h3>
          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle size={48} className="text-green-500 mx-auto mb-3" />
              <p className="font-semibold text-navy">Thank you for your review!</p>
              <p className="text-slate text-sm">Your review will appear after approval.</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 text-gold font-semibold text-sm">Submit another review</button>
            </div>
          ) : (
            <form onSubmit={submitReview} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={reviewForm.name}
                onChange={e => setReviewForm(p => ({ ...p, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-cream-dark bg-cream/30 text-charcoal placeholder:text-slate/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30"
              />
              <div>
                <label className="text-sm text-slate mb-1 block">Rating</label>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(n => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setReviewForm(p => ({ ...p, rating: n }))}
                      className="p-1"
                    >
                      <Star size={28} className={n <= reviewForm.rating ? 'text-gold fill-gold' : 'text-gray-300'} />
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                placeholder="Share your experience with Resolution Law Firm..."
                required
                rows={5}
                value={reviewForm.comment}
                onChange={e => setReviewForm(p => ({ ...p, comment: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-cream-dark bg-cream/30 text-charcoal placeholder:text-slate/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 resize-none"
              />
              <button
                type="submit"
                className="w-full gold-gradient text-white py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-gold/20 transition-all"
              >
                Submit Review
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  )
}
