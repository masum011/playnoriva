import { motion } from 'framer-motion'
import { Star, ShieldCheck, Truck, ArrowRight } from 'lucide-react'

const heroImg =
  'https://images.pexels.com/photos/31136997/pexels-photo-31136997.jpeg?auto=compress&cs=tinysrgb&w=1100'

const floaters = [
  { img: 'https://images.pexels.com/photos/59720/pexels-photo-59720.jpeg?auto=compress&cs=tinysrgb&w=240', cls: 'top-6 -left-4 w-20 h-20 sm:w-24 sm:h-24 animate-float-slow', rot: '-8deg' },
  { img: 'https://images.pexels.com/photos/234137/pexels-photo-234137.jpeg?auto=compress&cs=tinysrgb&w=240', cls: 'bottom-8 -right-5 w-24 h-24 sm:w-28 sm:h-28 animate-float-soft', rot: '6deg' },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-24">
      {/* soft background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl" />
      <div className="pointer-events-none absolute top-32 -right-24 h-96 w-96 rounded-full bg-sky-soft-200/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sage-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-100 px-4 py-1.5 text-xs font-600 text-brand-600">
            <Star className="h-3.5 w-3.5 fill-brand-500 text-brand-500" />
            Loved by 12,000+ Indian families
          </span>

          <h1 className="mt-5 font-display font-700 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-ink-900 text-balance">
            Toys that make
            <span className="block bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700 bg-clip-text text-transparent">
              little ones giggle
            </span>
          </h1>

          <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-ink-700 leading-relaxed">
            Playnoriva Baby crafts safe, colorful, child-tested toys designed to spark
            curiosity and joy in every giggle. Made for tiny hands, trusted by
            parents across India.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
            <a
              href="#marketplace"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-600 px-7 py-3.5 shadow-lg shadow-brand-500/30 transition-all hover:shadow-xl hover:shadow-brand-500/40"
            >
              Shop on Meesho, Flipkart & Amazon
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-cream-100 hover:bg-cream-200 text-ink-800 font-600 px-7 py-3.5 transition-colors"
            >
              Explore toys
            </a>
          </div>

          <div className="mt-9 flex items-center justify-center lg:justify-start gap-6 sm:gap-8 text-ink-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-sage-500" />
              <span className="text-sm font-600">BIS safe</span>
            </div>
            <div className="h-5 w-px bg-cream-300" />
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-sky-soft-500" />
              <span className="text-sm font-600">Pan-India delivery</span>
            </div>
          </div>
        </motion.div>

        {/* image cluster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-900/20 ring-8 ring-cream-50">
            <img
              src={heroImg}
              alt="Happy baby playing with Playnoriva toys"
              className="w-full h-[420px] sm:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-4 left-4 right-4 rounded-2xl bg-cream-50/95 backdrop-blur-md px-4 py-3 flex items-center gap-3 shadow-lg"
            >
              <div className="flex -space-x-2">
                {['A', 'P', 'R'].map((c, i) => (
                  <span
                    key={i}
                    className={`grid place-items-center h-8 w-8 rounded-full text-white text-xs font-700 ring-2 ring-cream-50 ${
                      ['bg-brand-400', 'bg-sky-soft-400', 'bg-sage-400'][i]
                    }`}
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="text-left leading-tight">
                <div className="flex text-brand-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-brand-500" />
                  ))}
                </div>
                <p className="text-xs text-ink-700 font-600 mt-0.5">
                  4.8/5 from 3,200+ reviews
                </p>
              </div>
            </motion.div>
          </div>

          {floaters.map((f, i) => (
            <div
              key={i}
              className={`absolute ${f.cls} rounded-2xl overflow-hidden ring-4 ring-cream-50 shadow-xl rotate-[${f.rot}] hidden sm:block`}
            >
              <img src={f.img} alt="Playnoriva toy" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
