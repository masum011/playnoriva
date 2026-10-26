import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Priya Sharma',
    city: 'Mumbai, MH',
    avatar: 'P',
    color: 'bg-brand-400',
    text: 'The stacking cups are my 10-month-old\'s favourite. Bright colors, smooth edges, and surprisingly sturdy. Delivery from Flipkart was super quick too!',
    product: 'Rainbow Stacking Cups',
  },
  {
    name: 'Ananya Reddy',
    city: 'Hyderabad, TS',
    avatar: 'A',
    color: 'bg-sage-400',
    text: 'Bought the plush bunny for my newborn. It\'s incredibly soft and washes well even after many spills. The Meesho price was the best I found anywhere.',
    product: 'Soft Plush Bunny',
  },
  {
    name: 'Rohit Nair',
    city: 'Kochi, KL',
    avatar: 'R',
    color: 'bg-sky-soft-400',
    text: 'Playnoriva\'s wooden blocks are excellent quality — no splinters, vibrant food-grade colors. My son builds towers for hours. Worth every rupee on Amazon.',
    product: 'Wooden Building Blocks',
  },
  {
    name: 'Meera Iyer',
    city: 'Pune, MH',
    avatar: 'M',
    color: 'bg-brand-500',
    text: 'Searched for BIS-certified toys for weeks. Playnoriva is the only brand that clearly lists certifications. The rattle set is gentle and perfectly sized.',
    product: 'Sensory Rattle Set',
  },
  {
    name: 'Kavita Joshi',
    city: 'Jaipur, RJ',
    avatar: 'K',
    color: 'bg-sage-500',
    text: 'The activity mat turned tummy time from tears to giggles. Beautiful design and the hanging toys keep my daughter entertained. Highly recommend.',
    product: 'Activity Play Mat',
  },
  {
    name: 'Arjun Gupta',
    city: 'Delhi, DL',
    avatar: 'A',
    color: 'bg-sky-soft-500',
    text: 'Shape sorter is perfect for my toddler\'s problem-solving phase. Chunky pieces are easy to grip and the colors help him learn animals too. Five stars!',
    product: 'Animal Shape Sorter',
  },
]

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative py-20 sm:py-28 bg-ink-900 text-cream-50 overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-soft-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-xs font-700 tracking-[0.2em] uppercase text-brand-300">
            From happy families
          </span>
          <h2 className="mt-3 font-display font-700 text-3xl sm:text-4xl lg:text-5xl text-cream-50 text-balance">
            Loved by parents across India
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-brand-400 text-brand-400" />
              ))}
            </div>
            <span className="text-cream-100 font-600">
              4.8 average · 3,200+ verified reviews
            </span>
          </div>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="rounded-3xl bg-cream-50/5 backdrop-blur border border-cream-50/10 p-6 sm:p-7 hover:bg-cream-50/10 transition-colors"
            >
              <Quote className="h-8 w-8 text-brand-300/70" />
              <blockquote className="mt-3 text-cream-100/90 leading-relaxed text-[15px]">
                "{r.text}"
              </blockquote>

              <figcaption className="mt-5 pt-5 border-t border-cream-50/10 flex items-center gap-3">
                <span
                  className={`grid place-items-center h-11 w-11 rounded-full ${r.color} text-white font-700`}
                >
                  {r.avatar}
                </span>
                <div>
                  <div className="font-600 text-cream-50">{r.name}</div>
                  <div className="text-xs text-cream-100/70">{r.city}</div>
                </div>
                <span className="ml-auto text-xs text-cream-100/60 bg-cream-50/5 rounded-full px-2.5 py-1">
                  {r.product}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
