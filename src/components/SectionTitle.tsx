import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'

interface Props {
  title: string
  subtitle?: string
  light?: boolean
  center?: boolean
}

export default function SectionTitle({ title, subtitle, light, center = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-10 sm:mb-14 ${center ? 'text-center' : ''}`}
    >
      <div className={`flex items-center gap-2 mb-3 ${center ? 'justify-center' : ''}`}>
        <div className={`h-px w-8 ${light ? 'bg-gold/50' : 'bg-gold'}`} />
        <Scale size={18} className="text-gold" />
        <div className={`h-px w-8 ${light ? 'bg-gold/50' : 'bg-gold'}`} />
      </div>
      <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
        light ? 'text-white' : 'text-navy'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${
          light ? 'text-white/60' : 'text-slate'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
