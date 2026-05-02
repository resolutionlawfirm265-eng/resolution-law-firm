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

const advocates = [
  {
    name: 'Umar Azeem',
    title: 'Advocate & Founder',
    phone: '0323-7239957',
    phoneLink: 'tel:03237239957',
    whatsapp: 'https://wa.me/923237239957',
    image: '/uploads/umar-azeem.jpg',
    bio: 'Founder of Resolution Law Firm, Umar Azeem Advocate is a distinguished legal professional with extensive experience in Pakistani courts. He specializes in civil litigation, criminal defense, tax law, corporate matters, and family law. His commitment to justice and client satisfaction has made Resolution Law Firm a trusted name in Lahore\'s legal community.',
  },
  {
    name: 'Usman Azeem',
    title: 'Advocate',
    phone: '0320-4887229',
    phoneLink: 'tel:03204887229',
    whatsapp: 'https://wa.me/923204887229',
    image: '/uploads/usman-azeem.jpg',
    bio: 'Usman Azeem Advocate is a dedicated legal professional at Resolution Law Firm, specializing in civil and criminal litigation. With strong courtroom skills and deep knowledge of Pakistani law, he provides effective legal representation and ensures clients receive the best possible outcomes in their cases.',
  },
]

export default function Expert() {
  return (
    <div>
      {/* Hero */}
      <section className="navy-gradient py-16 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 justify-center mb-4">
              <div className="h-px w-10 bg-gold" />
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Our Legal Team</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Meet Our <span className="text-gold-gradient">Experts</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Experienced advocates dedicated to protecting your rights and delivering justice
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advocates */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-16 sm:space-y-24">
          {advocates.map((adv, i) => (
            <motion.div
              key={adv.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}
            >
              {/* Photo */}
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative max-w-sm mx-auto">
                  <div className="rounded-2xl overflow-hidden border-4 border-gold/20 shadow-2xl shadow-navy/10">
                    <img
                      src={adv.image}
                      alt={`${adv.name} - ${adv.title}`}
                      className="w-full aspect-[3/4] object-cover object-top"
                    />
                  </div>
                  {/* Decorative corner */}
                  <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl gold-gradient flex items-center justify-center shadow-xl">
                    <Scale size={32} className="text-white" />
                  </div>
                  {/* Name badge */}
                  <div className="absolute -bottom-5 left-4 right-16 bg-white rounded-xl p-3 shadow-lg border border-cream-dark">
                    <p className="font-heading text-lg font-bold text-navy">{adv.name}</p>
                    <p className="text-gold text-xs font-semibold">{adv.title}</p>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} pt-8 lg:pt-0`}>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-2">{adv.name}</h2>
                <p className="text-gold font-semibold mb-4">{adv.title}</p>
                <p className="text-slate leading-relaxed mb-6">{adv.bio}</p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-slate">Phone</p>
                      <a href={adv.phoneLink} className="text-navy font-semibold hover:text-gold transition-colors">{adv.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366] flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 32 32" className="w-[18px] h-[18px] fill-white">
                        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958C9.72 30.986 12.736 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.178 2.28-.852.18-1.964.324-5.71-1.228-4.796-1.986-7.882-6.86-8.122-7.18-.228-.32-1.928-2.568-1.928-4.896 0-2.328 1.22-3.47 1.654-3.944.39-.426 1.02-.614 1.624-.614.196 0 .372.01.53.018.434.018.652.042.938.726.358.852 1.228 2.998 1.336 3.216.11.22.222.518.072.818-.14.308-.264.498-.484.766-.22.268-.428.472-.648.76-.198.25-.422.52-.176.954.246.434 1.094 1.804 2.35 2.922 1.616 1.438 2.978 1.886 3.402 2.094.326.16.714.128.97-.148.324-.354.724-.94 1.132-1.518.29-.414.658-.466 1.022-.318.368.14 2.326 1.098 2.724 1.296.398.2.664.296.762.462.096.166.096.962-.294 2.062z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate">WhatsApp</p>
                      <a href={adv.whatsapp} target="_blank" rel="noopener noreferrer" className="text-navy font-semibold hover:text-[#25D366] transition-colors">Chat Now</a>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={adv.phoneLink} className="gold-gradient text-white px-6 py-3 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-gold/20 transition-all flex items-center justify-center gap-2">
                    <Phone size={16} /> Call {adv.name.split(' ')[0]}
                  </a>
                  <a href={adv.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#1ebe5d] transition-all flex items-center justify-center gap-2">
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle title="Areas of Expertise" subtitle="Comprehensive legal knowledge across all major practice areas" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, i) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-cream/50 rounded-xl p-6 sm:p-8 border border-cream-dark hover:border-gold/30 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <item.icon size={26} className="text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-2">{item.area}</h3>
                <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courts We Practice In */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Courts We Practice In" subtitle="Representing clients across all levels of the judiciary" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
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
              className="bg-navy text-center rounded-xl p-4 sm:p-5 border border-navy-light hover:border-gold/30 transition-all"
            >
              <Scale size={22} className="text-gold mx-auto mb-2" />
              <p className="text-white text-xs sm:text-sm font-semibold">{court}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 gold-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white mb-4">Ready to Discuss Your Case?</h2>
          <p className="text-white/80 mb-8 text-sm sm:text-base">Schedule a free consultation with our expert advocates today.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="tel:03237239957" className="inline-flex items-center justify-center gap-2 bg-white text-navy px-6 sm:px-8 py-3.5 rounded-lg font-bold text-sm sm:text-base hover:bg-cream transition-colors">
              <Phone size={18} /> Call Umar Azeem
            </a>
            <a href="tel:03204887229" className="inline-flex items-center justify-center gap-2 bg-navy text-white px-6 sm:px-8 py-3.5 rounded-lg font-bold text-sm sm:text-base hover:bg-navy-dark transition-colors">
              <Phone size={18} /> Call Usman Azeem
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
