import { ShoppingBag, Globe, MessageCircle, Send, Mail, Phone, MapPin, Heart } from 'lucide-react'

const columns = [
  {
    title: 'Shop',
    links: ['Newborn Toys (0m+)', 'Sensory & Rattles', 'Stacking & Sorting', 'Building Blocks', 'Plush & Soft Toys'],
  },
  {
    title: 'Company',
    links: ['About Playnoriva', 'Our Story', 'Careers', 'Press & Media', 'Bulk Gifting'],
  },
  {
    title: 'Support',
    links: ['Track Order', 'Returns & Refunds', 'Shipping Policy', 'Safety Certifications', 'Contact Us'],
  },
]

const marketplaces = ['Meesho', 'Flipkart', 'Amazon India']

export default function Footer() {
  return (
    <footer className="relative bg-ink-900 text-cream-100 pt-16 sm:pt-20 pb-8 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          {/* brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid place-items-center h-11 w-11 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-lg">
                <ShoppingBag className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="leading-none">
                <span className="block font-display font-700 text-xl text-cream-50">
                  Playnoriva
                </span>
                <span className="block text-[11px] font-600 tracking-[0.2em] uppercase text-brand-300">
                  Baby
                </span>
              </span>
            </a>
            <p className="mt-5 text-cream-100/70 leading-relaxed text-sm max-w-sm">
              Bringing safe, joyful, beautifully designed toys to babies across
              India. Made with love, tested for safety, trusted by thousands of
              families.
            </p>

            <div className="mt-6 space-y-2.5 text-sm">
              <a href="mailto:hello@playnorivababy.in" className="flex items-center gap-2.5 text-cream-100/80 hover:text-brand-300 transition-colors">
                <Mail className="h-4 w-4 text-brand-300" /> hello@playnorivababy.in
              </a>
              <a href="tel:+918000000000" className="flex items-center gap-2.5 text-cream-100/80 hover:text-brand-300 transition-colors">
                <Phone className="h-4 w-4 text-brand-300" /> +91 80000 00000
              </a>
              <p className="flex items-center gap-2.5 text-cream-100/80">
                <MapPin className="h-4 w-4 text-brand-300" /> Made in India
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              {[Globe, MessageCircle, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid place-items-center h-10 w-10 rounded-xl bg-cream-50/8 hover:bg-brand-500 text-cream-100 hover:text-white transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="font-display font-700 text-cream-50">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-cream-100/70 hover:text-brand-300 transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* marketplaces */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-700 text-cream-50">Buy on</h4>
            <ul className="mt-4 space-y-2.5">
              {marketplaces.map((m) => (
                <li key={m}>
                  <a
                    href="#marketplace"
                    className="text-sm text-cream-100/70 hover:text-brand-300 transition-colors"
                  >
                    {m}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream-50/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-100/60">
            © {new Date().getFullYear()} Playnoriva Baby. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-cream-100/60">
            <a href="#" className="hover:text-brand-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-300 transition-colors">Cookies</a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-cream-100/50 flex items-center justify-center gap-1.5">
          Made with <Heart className="h-3.5 w-3.5 fill-brand-400 text-brand-400" /> for little ones in India
        </p>
      </div>
    </footer>
  )
}
