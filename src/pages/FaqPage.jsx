import { Mail, Gift, ChevronDown, CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
const faqs = [
  {
    q: 'Are Playnoriva Baby toys safe for newborns?',
    a: 'Yes. Every toy carries a BIS certification and is made from non-toxic, BPA-free materials. Each product page lists the recommended age range — look for "0m+" items for newborns.',
  },
  {
    q: 'Which marketplaces can I buy from?',
    a: 'We sell on Meesho, Flipkart, and Amazon India. Prices and offers may vary slightly across platforms, but the products and quality are identical everywhere.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer 7-day easy returns on all orders placed through our marketplace partners, in line with each platform\'s return policy. Items must be unused and in original packaging.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Delivery times depend on your location and the chosen platform. Typically you can expect 2–5 business days, with same-day or next-day options available in major cities on Amazon and Flipkart.',
  },
  {
    q: 'Are the materials eco-friendly?',
    a: 'Our wooden toys use FSC-certified wood with food-grade colors, and our plastics are recyclable and phthalate-free. We are steadily expanding our eco-friendly range.',
  },
  {
    q: 'Do you offer bulk or gifting orders?',
    a: 'Yes! For birthdays, return gifts, and corporate gifting, reach out to us at hello@playnorivababy.in with your requirements and we will share special pricing.',
  },
]

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
            // {/* FAQ */}
      <section id="faq" className="relative py-20 sm:py-28 bg-cream-100/60">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-xs font-700 tracking-[0.2em] uppercase text-brand-500">
              Questions & answers
            </span>
            <h2 className="mt-3 font-display font-700 text-3xl sm:text-4xl lg:text-5xl text-ink-900 text-balance">
              Everything parents ask us
            </h2>
          </motion.div>

          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => {
              const open = openIdx === i
              return (
                <motion.div
                  key={f.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-2xl bg-cream-50 border border-cream-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                  >
                    <span className="font-600 text-ink-900 text-[15px] sm:text-base">
                      {f.q}
                    </span>
                    <span
                      className={`shrink-0 grid place-items-center h-8 w-8 rounded-full ${
                        open ? 'bg-brand-500 text-white' : 'bg-cream-100 text-ink-700'
                      } transition-colors`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 sm:px-6 pb-5 text-ink-700 leading-relaxed text-sm sm:text-[15px]">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
  )
}