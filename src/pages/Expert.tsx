import { motion } from 'framer-motion'
import { Scale, Award, BookOpen, Briefcase, Phone, ArrowRight, MapPin, Mail, Shield, Users, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'

const expertise = [
  { icon: Scale, area: 'Civil Litigation', desc: 'Property disputes, recovery suits, injunctions, declaratory suits, and appeals in all civil courts.' },
  { icon: Shield, area: 'Criminal Defense', desc: 'FIR quashing, bail applications, trial defense, criminal appeals, and revision petitions.' },
  { icon: Briefcase, area: 'Tax Law & FBR', desc: 'Income tax, sales tax, FBR audits, tax appeals, and strategic tax planning for individuals and businesses.' },
  { icon: BookOpen, area: 'Corporate Law', desc: 'Company registration, SECP compliance, commercial contracts, mergers, and intellectual property.' },
  { icon: Users, area: 'Family Law', desc: 'Divorce, Khula, child custody, maintenance, guardianship, and inheritance disputes.' },
  { icon: Award, area: 'Property & Real Estate', desc: 'Title verification, sale deeds, lease agreements, mutation, and property dispute resolution.' },
]

const achievements = [
  'Successfully handled 500+ cases across multiple practice areas',
  'Represented clients in Lahore High Court and Supreme Court of Pakistan',
  'Expert in both civil and criminal litigation',
  'Trusted advisor for corporate and tax matters',
  'Recognized for client-first approach and transparent fee structure',
  'Multi-office presence across Lahore for client convenience',
]

export default function Expert() {
  return (
    <div>
      {/* Hero */}
      <section className="navy-gradient py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-10 bg-gold" />
                <span className="text-gold font-semibold text-sm tracking-widest uppercase">Meet Our Experts</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Our Legal
                <span className="text-gold-gradient block">Experts</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Resolution Law Firm is led by expert advocates Umar Azeem and Usman Azeem, distinguished legal professionals with extensive experience in Pakistani courts. Their combined commitment to justice and client satisfaction has made Resolution Law Firm a trusted name in Lahore's legal community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:03204887229"
                  className="gold-gradient text-white px-8 py-4 rounded-lg font-bold text-base hover:shadow-xl hover:shadow-gold/20 transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={18} /> Book Consultation
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold text-base hover:border-gold hover:text-gold transition-all flex items-center justify-center gap-2"
                >
                  Contact Us <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="space-y-6 w-full max-w-sm">
              <div className="bg-white/5 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/10">
                <div className="w-36 h-36 rounded-full mx-auto mb-4 overflow-hidden border-4 border-gold/30 shadow-xl shadow-gold/10">
                  <img src="/uploads/umar-azeem.jpg" alt="Umar Azeem Advocate" className="w-full h-full object-cover object-top" />
                </div>
                <h2 className="font-heading text-xl font-bold text-white text-center">Umar Azeem</h2>
                <p className="text-gold text-center font-semibold text-sm mb-4">Advocate & Founder</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <MapPin size={16} className="text-gold shrink-0" />
                    <span>Lahore, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <Phone size={16} className="text-gold shrink-0" />
                    <span>0320-4887229</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <Mail size={16} className="text-gold shrink-0" />
                    <span className="break-all">resolutionlawfirm265@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/10">
                <div className="w-20 h-20 rounded-full gold-gradient mx-auto mb-4 flex items-center justify-center">
                  <span className="font-heading text-3xl font-bold text-white">UA</span>
                </div>
                <h2 className="font-heading text-xl font-bold text-white text-center">Usman Azeem</h2>
                <p className="text-gold text-center font-semibold text-sm mb-4">Advocate</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <MapPin size={14} className="text-gold shrink-0" />
                    <span>Lahore, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <Phone size={14} className="text-gold shrink-0" />
                    <span>0320-4887229</span>
                  </div>
                </div>
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Areas of Expertise" subtitle="Comprehensive legal knowledge across all major practice areas" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, i) => (
            <motion.div
              key={item.area}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-cream-dark hover:border-gold/30 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <item.icon size={26} className="text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-navy mb-2">{item.area}</h3>
              <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionTitle title="Key Achievements" subtitle="A track record of excellence and dedication" />
          <div className="space-y-4">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 bg-cream/50 rounded-xl p-5 border border-cream-dark"
              >
                <CheckCircle size={22} className="text-gold shrink-0 mt-0.5" />
                <p className="text-charcoal font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courts We Practice In */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Courts We Practice In" subtitle="Representing clients across all levels of the judiciary" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'Supreme Court of Pakistan',
            'Lahore High Court',
            'District & Sessions Courts',
            'Civil Courts',
            'Family Courts',
            'Banking Courts',
            'Revenue Courts',
            'Appellate Tribunals',
          ].map((court, i) => (
            <motion.div
              key={court}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-navy text-center rounded-xl p-5 border border-navy-light hover:border-gold/30 transition-all"
            >
              <Scale size={24} className="text-gold mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">{court}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gold-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Discuss Your Case?</h2>
          <p className="text-white/80 mb-8">Schedule a free consultation with Umar Azeem Advocate today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:03204887229" className="inline-flex items-center justify-center gap-2 bg-white text-navy px-8 py-4 rounded-lg font-bold hover:bg-cream transition-colors">
              <Phone size={20} /> Call 0320-4887229
            </a>
            <a href="https://wa.me/923204887229" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-bold hover:bg-navy-dark transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
