import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Scale, Gavel, Building, FileText, Heart, Briefcase, DollarSign, Shield, Users, Award, Phone, ArrowRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

interface Service { id: number; title: string; description: string; icon: string; details: string; }

const iconMap: Record<string, any> = { Gavel, Building, FileText, Heart, Briefcase, DollarSign, Shield, Scale, Users, Award }

export default function Services() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/services')
      .then(r => r.json())
      .then(data => { setServices(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div>
      <section className="navy-gradient py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Our <span className="text-gold-gradient">Legal Services</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Comprehensive legal solutions across all major areas of Pakistani law</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-white rounded-xl p-8 animate-pulse">
                <div className="w-14 h-14 bg-cream-dark rounded-xl mb-4" />
                <div className="h-6 bg-cream-dark rounded w-1/2 mb-3" />
                <div className="h-4 bg-cream-dark rounded w-full mb-2" />
                <div className="h-4 bg-cream-dark rounded w-3/4" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Scale
              const isOpen = selected === service.id
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-white rounded-xl p-6 sm:p-8 shadow-sm border transition-all cursor-pointer ${
                    isOpen ? 'border-gold shadow-lg' : 'border-cream-dark hover:border-gold/30 hover:shadow-md'
                  }`}
                  onClick={() => setSelected(isOpen ? null : service.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center shrink-0">
                      <Icon size={26} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold text-navy mb-2">{service.title}</h3>
                      <p className="text-slate text-sm leading-relaxed">{service.description}</p>
                      {isOpen && service.details && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4 pt-4 border-t border-cream-dark"
                        >
                          <p className="text-charcoal text-sm leading-relaxed">{service.details}</p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="py-16 navy-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Need Legal Help?</h2>
          <p className="text-white/60 mb-8">Contact us today for a free consultation with our expert legal team.</p>
          <a href="tel:03168078693" className="inline-flex items-center gap-2 gold-gradient text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:shadow-gold/20 transition-all">
            <Phone size={20} /> Call 0316-8078693
          </a>
        </div>
      </section>
    </div>
  )
}
