import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ArrowRight, Tag } from 'lucide-react'

const products = [
  {
    name: 'Rainbow Stacking Cups',
    tag: '6m+',
    price: '₹349',
    mrp: '₹599',
    img: 'https://images.pexels.com/photos/27661863/pexels-photo-27661863.jpeg?auto=compress&cs=tinysrgb&w=720',
    badge: 'Bestseller',
    badgeColor: 'bg-brand-500',
    desc: 'Colorful nesting cups that build fine motor skills and teach size & color.',
  },
  {
    name: 'Soft Plush Bunny',
    tag: '0m+',
    price: '₹449',
    mrp: '₹799',
    img: 'https://images.pexels.com/photos/4886896/pexels-photo-4886896.jpeg?auto=compress&cs=tinysrgb&w=720',
    badge: 'Newborn pick',
    badgeColor: 'bg-sage-500',
    desc: 'Huggable, washable, hypoallergenic plush — perfect first cuddle buddy.',
  },
  {
    name: 'Animal Shape Sorter',
    tag: '12m+',
    price: '₹529',
    mrp: '₹899',
    img: 'https://images.pexels.com/photos/59720/pexels-photo-59720.jpeg?auto=compress&cs=tinysrgb&w=720',
    badge: 'Top rated',
    badgeColor: 'bg-sky-soft-500',
    desc: 'Five chunky animal blocks that teach shapes and problem-solving.',
  },
  {
    name: 'Sensory Rattle Set',
    tag: '3m+',
    price: '₹399',
    mrp: '₹649',
    img: 'https://images.pexels.com/photos/234137/pexels-photo-234137.jpeg?auto=compress&cs=tinysrgb&w=720',
    badge: 'Mom favorite',
    badgeColor: 'bg-brand-400',
    desc: 'Gentle-sounding rattles with textures that delight tiny fingers.',
  },
  {
    name: 'Activity Play Mat',
    tag: '0m+',
    price: '₹1,199',
    mrp: '₹1,999',
    img: 'https://images.pexels.com/photos/7499406/pexels-photo-7499406.jpeg?auto=compress&cs=tinysrgb&w=720',
    badge: 'Premium',
    badgeColor: 'bg-ink-900',
    desc: 'A padded puzzle mat with a hanging mobile for tummy-time fun.',
  },
  {
    name: 'Wooden Building Blocks',
    tag: '18m+',
    price: '₹649',
    mrp: '₹1,099',
    img: 'https://images.pexels.com/photos/6692935/pexels-photo-6692935.jpeg?auto=compress&cs=tinysrgb&w=720',
    badge: 'Eco pick',
    badgeColor: 'bg-sage-500',
    desc: '60 FSC-wood blocks in food-grade colors for endless creative builds.',
  },
]

const filters = ['All', '0m+', '3m+', '6m+', '12m+', '18m+']

export default function Products() {
  const [active, setActive] = useState('All')

  const visible =
    active === 'All' ? products : products.filter((p) => p.tag === active)

  return (
    <section id="products" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="text-xs font-700 tracking-[0.2em] uppercase text-brand-500">
              Our toy collection
            </span>
            <h2 className="mt-3 font-display font-700 text-3xl sm:text-4xl lg:text-5xl text-ink-900 text-balance">
              Toys for every giggle, every milestone
            </h2>
            <p className="mt-4 text-ink-700 text-base sm:text-lg leading-relaxed">
              From first rattles to building blocks — discover toys that match
              your baby's age and stage.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm font-600 transition-all ${
                  active === f
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30'
                    : 'bg-cream-100 text-ink-700 hover:bg-cream-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35 }}
                className="group rounded-3xl overflow-hidden bg-cream-50 border border-cream-200 hover:shadow-2xl hover:shadow-brand-900/10 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className={`absolute top-3 left-3 ${p.badgeColor} text-white text-xs font-700 px-3 py-1 rounded-full shadow-md`}
                  >
                    {p.badge}
                  </span>
                  <span className="absolute top-3 right-3 bg-cream-50/95 backdrop-blur text-ink-800 text-xs font-700 px-3 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="font-display font-700 text-lg text-ink-900">
                    {p.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-700 leading-relaxed line-clamp-2">
                    {p.desc}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-800 text-ink-900">{p.price}</span>
                      <span className="text-sm text-ink-600 line-through">{p.mrp}</span>
                    </div>
                    <div className="flex items-center gap-1 text-brand-500">
                      <Star className="h-4 w-4 fill-brand-500" />
                      <span className="text-sm font-600 text-ink-700">4.8</span>
                    </div>
                  </div>

                  <a
                    href="#marketplace"
                    className="mt-4 group/btn inline-flex items-center gap-2 text-sm font-600 text-brand-600 hover:text-brand-700"
                  >
                    <Tag className="h-4 w-4" />
                    Shop now
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
