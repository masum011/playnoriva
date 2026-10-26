import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Gift, ChevronDown, CheckCircle2 } from 'lucide-react'



const founders = [
{
  name: "Masum Reza",
  role: "Co-Founder",
  photo: "/assets/founders/founder-1.jpg",
},
{
  name: "Md Matenur Biswas",
  role: "Co-Founder",
  photo: "/assets/founders/founder-2.jpg",
},
];
export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail('')
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <>
      {/* Newsletter */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 px-6 py-12 sm:px-14 sm:py-16 text-center"
          >
            <div className="pointer-events-none absolute -top-12 -right-12 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-sage-300/20 blur-2xl" />




<div className="relative max-w-2xl mx-auto">
  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-700 text-ink-900">
    <Gift className="h-4 w-4" />
    Get 10% off your first order
  </span>
  <h2 className="mt-5 font-display font-700 text-3xl sm:text-4xl lg:text-5xl text-ink-900 text-balance">
    Join the Playnoriva family
  </h2>
  <p className="mt-3 text-white/90 text-base sm:text-lg leading-relaxed">
    Sign up for new launches, festive deals, and parenting tips
    delivered straight to your inbox.
  </p>

  <form
    onSubmit={submit}
    className="mt-7 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
  >
    <div className="relative flex-1">
      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-600" />
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full rounded-full pl-12 pr-5 py-3.5 bg-cream-50 text-ink-900 placeholder:text-ink-600/60 outline-none focus:ring-4 focus:ring-white/30"
      />
    </div>
    <button
      type="submit"
      className="rounded-full bg-ink-900 hover:bg-ink-800 text-cream-50 font-700 px-6 py-3.5 transition-colors shadow-lg"
    >
      Subscribe
    </button>
  </form>

  <AnimatePresence>
    {sent && (
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="mt-4 inline-flex items-center gap-2 text-white text-sm font-600"
      >
        <CheckCircle2 className="h-4 w-4" />
        You're in! Check your inbox for the 10% code.
      </motion.p>
    )}
  </AnimatePresence>

  <p className="mt-4 text-xs text-white/70">
    No spam, just love. Unsubscribe anytime.
  </p>

  {/* Founders */}
  <div className="mt-10 pt-8 border-t border-white/20">
    <p className="text-xs font-700 uppercase tracking-widest text-ink-900/80">
      Meet the founders
    </p>

    <div className="mt-6 flex items-start justify-center gap-8 sm:gap-12">
      {founders.map((f, i) => (
        <motion.div
          key={f.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          className="flex flex-col items-center text-center"
        >
          <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden ring-4 ring-white/40 shadow-lg bg-cream-50">
            <img
              src={f.photo}
              alt={f.name}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="mt-3 font-display font-700 text-base sm:text-lg text-ink-900">
            {f.name}
          </h3>
          <p className="text-xs sm:text-sm text-black/50">{f.role}</p>
        </motion.div>
      ))}
    </div>
  </div>
</div>
          </motion.div>
        </div>
      </section>


    </>
  )
}
