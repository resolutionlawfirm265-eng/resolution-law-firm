import { motion } from 'framer-motion'
import { Scale, Shield, Users, Award, Clock, Target, BookOpen, Handshake } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We uphold the highest ethical standards in every case we handle.' },
  { icon: Target, title: 'Excellence', desc: 'We strive for excellence in legal research, strategy, and representation.' },
  { icon: Handshake, title: 'Client Focus', desc: 'Every decision we make is centered around our clients\' best interests.' },
  { icon: BookOpen, title: 'Knowledge', desc: 'We stay updated with the latest legal developments and precedents.' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="navy-gradient py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">About <span className="text-gold-gradient">Resolution Law Firm</span></h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Committed to justice, dedicated to excellence, and driven by results since our founding.</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionTitle title="Our Story" center={false} />
            <p className="text-slate leading-relaxed mb-4">
              Resolution Law Firm was founded by Umar Azeem Advocate with a clear vision: to provide accessible, high-quality legal services to individuals and businesses across Lahore and Pakistan.
            </p>
            <p className="text-slate leading-relaxed mb-4">
              With offices strategically located at Fane Road, DHA EME Sector, and Islampura, we ensure our clients have convenient access to expert legal counsel. Our firm has grown from a single-practitioner office to a respected legal practice handling complex cases across multiple areas of law.
            </p>
            <p className="text-slate leading-relaxed">
              We believe that everyone deserves competent legal representation, and we work tirelessly to ensure that our clients' rights are protected and their interests are served with the utmost dedication and professionalism.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-dark">
              <div className="w-24 h-24 rounded-full gold-gradient mx-auto mb-6 flex items-center justify-center">
                <span className="font-heading text-4xl font-bold text-white">UA</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy text-center mb-1">Umar Azeem</h3>
              <p className="text-gold text-center font-semibold mb-4">Advocate & Founder</p>
              <p className="text-slate text-sm leading-relaxed text-center">
                Umar Azeem Advocate is a distinguished legal professional with extensive experience in Pakistani courts. He specializes in civil litigation, criminal defense, tax law, corporate matters, and family law. His commitment to justice and client satisfaction has made Resolution Law Firm a trusted name in Lahore's legal community.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-3 bg-cream/50 rounded-lg">
                  <div className="font-heading text-2xl font-bold text-navy">500+</div>
                  <div className="text-slate text-xs">Cases Handled</div>
                </div>
                <div className="text-center p-3 bg-cream/50 rounded-lg">
                  <div className="font-heading text-2xl font-bold text-navy">10+</div>
                  <div className="text-slate text-xs">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle title="Our Core Values" subtitle="The principles that guide every aspect of our legal practice" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 sm:p-8 rounded-xl bg-cream/50 border border-cream-dark hover:border-gold/30 transition-all"
              >
                <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-4">
                  <val.icon size={30} className="text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy mb-2">{val.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Our Offices" subtitle="Conveniently located across Lahore for your accessibility" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Main Office - Fane Road', address: 'Alvi Manzil, 3rd Floor, 9-Fane Road, Lahore', desc: 'Our primary office located in the heart of Lahore\'s legal district.' },
            { name: 'DHA Office', address: '129-J DHA EME Sector, Lahore', desc: 'Serving clients in DHA and surrounding areas with full legal services.' },
            { name: 'Islampura Office', address: '14-Jinnah St, Chohan Road, Islampura, Lahore', desc: 'Accessible office for clients in the Islampura and Old Lahore area.' },
          ].map((office, i) => (
            <motion.div
              key={office.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-cream-dark"
            >
              <div className="w-12 h-12 rounded-xl navy-gradient flex items-center justify-center mb-4">
                <Scale size={22} className="text-gold" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy mb-1">{office.name}</h3>
              <p className="text-gold text-sm font-semibold mb-3">{office.address}</p>
              <p className="text-slate text-sm leading-relaxed">{office.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
