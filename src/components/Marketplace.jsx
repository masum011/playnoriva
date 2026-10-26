import { motion } from 'framer-motion'
import { ShoppingBag, ExternalLink, Star, Truck, ShieldCheck, BadgePercent } from 'lucide-react'

const marketplaces = [
  {
    name: 'Meesho',
    tagline: 'Best prices, daily deals',
    accent: 'from-[#F43397] to-[#d61f82]',
    bg: 'bg-[#F43397]/8',
    border: 'border-[#F43397]/20',
    text: 'text-[#d61f82]',
    rating: '4.7',
    sales: '6,500+ sold',
    url: 'https://www.meesho.com',
  },
  {
    name: 'Flipkart',
    tagline: 'Fast delivery, easy returns',
    accent: 'from-[#2874F0] to-[#1a5fd0]',
    bg: 'bg-[#2874F0]/8',
    border: 'border-[#2874F0]/20',
    text: 'text-[#1a5fd0]',
    rating: '4.8',
    sales: '4,200+ sold',
    url: 'https://www.flipkart.com',
  },
  {
    name: 'Amazon',
    tagline: 'Prime delivery, trusted reviews',
    accent: 'from-[#FF9900] to-[#e07e00]',
    bg: 'bg-[#FF9900]/10',
    border: 'border-[#FF9900]/25',
    text: 'text-[#c97900]',
    rating: '4.9',
    sales: '2,800+ sold',
    url: 'https://www.amazon.in',
  },
]

const perks = [
  { icon: Truck, label: 'Free shipping on orders over ₹499' },
  { icon: ShieldCheck, label: 'Secure payments on every platform' },
  { icon: BadgePercent, label: 'Festive deals & combo offers' },
]

export default function Marketplace() {
  return (
    <section
      id="marketplace"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-cream-100/60 to-cream-50 overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-10 right-10 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-xs font-700 tracking-[0.2em] uppercase text-brand-500">
            Where to buy
          </span>
          <h2 className="mt-3 font-display font-700 text-3xl sm:text-4xl lg:text-5xl text-ink-900 text-balance">
            Shop Playnoriva Baby on your favourite store
          </h2>
          <p className="mt-4 text-ink-700 text-base sm:text-lg leading-relaxed">
            Find us on India's biggest marketplaces. Choose the platform you trust
            most — same great toys, same caring brand.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-5 sm:gap-6">
          {marketplaces.map((m, i) => (
            <motion.a
              key={m.name}
              href={m.url}
              target="_blank"
              rel="noreferrer noopener"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-3xl border-2 ${m.border} ${m.bg} p-7 sm:p-8 overflow-hidden hover:-translate-y-1.5 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-900/10`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br ${m.accent} text-white shadow-lg`}
                >
                  <ShoppingBag className="h-7 w-7" strokeWidth={2.2} />
                </div>
                <ExternalLink className="h-5 w-5 text-ink-600 group-hover:scale-110 transition-transform" />
              </div>

              <h3 className="mt-5 font-display font-700 text-2xl text-ink-900">
                {m.name}
              </h3>
              <p className={`mt-1 text-sm font-600 ${m.text}`}>{m.tagline}</p>

              <div className="mt-5 flex items-center gap-4 text-sm">
                <span className="inline-flex items-center gap-1.5 bg-cream-50 rounded-full px-3 py-1.5 font-600 text-ink-700">
                  <Star className="h-4 w-4 fill-brand-500 text-brand-500" />
                  {m.rating} rating
                </span>
                <span className="text-ink-600 font-600">{m.sales}</span>
              </div>

              <div
                className={`mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${m.accent} text-white text-sm font-700 px-5 py-2.5 shadow-md group-hover:shadow-lg transition-shadow`}
              >
                Visit {m.name}
                <ExternalLink className="h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid sm:grid-cols-3 gap-4"
        >
          {perks.map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-3 rounded-2xl bg-cream-100 px-5 py-4"
            >
              <p.icon className="h-5 w-5 text-brand-500 shrink-0" />
              <span className="text-sm font-600 text-ink-700">{p.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
