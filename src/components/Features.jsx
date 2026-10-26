import { motion } from 'framer-motion'
import { ShieldCheck, Baby, Recycle, Award, HeartHandshake, Sparkles } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Safety First',
    desc: 'Every toy is BIS-certified, non-toxic, and free from sharp edges — built to strict Indian safety standards.',
    color: 'bg-sage-100 text-sage-500',
  },
  {
    icon: Baby,
    title: 'Age-Right Design',
    desc: 'Crafted for each developmental stage — from sensory rattles to building blocks that grow with your baby.',
    color: 'bg-brand-100 text-brand-500',
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly',
    desc: 'Made with BPA-free, recyclable plastics and sustainably sourced wood. Kind to your baby and the planet.',
    color: 'bg-sky-soft-100 text-sky-soft-500',
  },
  {
    icon: Award,
    title: 'Quality You Trust',
    desc: 'Tested for durability, color-fastness, and small-parts safety — so playtime is always worry-free.',
    color: 'bg-cream-200 text-brand-600',
  },
  {
    icon: HeartHandshake,
    title: 'Made in India',
    desc: 'Proudly designed and manufactured in India, supporting local artisans and small businesses.',
    color: 'bg-brand-50 text-brand-500',
  },
  {
    icon: Sparkles,
    title: 'Joy Guaranteed',
    desc: 'Not delighted? Our 7-day easy returns on every order make shopping completely risk-free.',
    color: 'bg-sky-soft-50 text-sky-soft-400',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 bg-cream-100/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-xs font-700 tracking-[0.2em] uppercase text-brand-500">
            Why parents choose us
          </span>
          <h2 className="mt-3 font-display font-700 text-3xl sm:text-4xl lg:text-5xl text-ink-900 text-balance">
            Crafted with care, trusted by families
          </h2>
          <p className="mt-4 text-ink-700 text-base sm:text-lg leading-relaxed">
            We obsess over the details that matter most — safety, quality, and the
            little moments of joy that make growing up magical.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group rounded-3xl bg-cream-50 border border-cream-200 p-6 sm:p-7 hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`grid place-items-center h-14 w-14 rounded-2xl ${f.color} group-hover:scale-110 transition-transform`}>
                <f.icon className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display font-700 text-xl text-ink-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] text-ink-700 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
