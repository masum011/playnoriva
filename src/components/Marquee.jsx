import { motion } from 'framer-motion'
import { Star, ShieldCheck, Truck, RotateCcw, BadgeIndianRupee, Heart } from 'lucide-react'

const items = [
  { icon: ShieldCheck, text: 'BIS-certified safety' },
  { icon: BadgeIndianRupee, text: 'Made in India' },
  { icon: Truck, text: 'Pan-India delivery' },
  { icon: RotateCcw, text: '7-day easy returns' },
  { icon: Heart, text: 'Non-toxic & BPA-free' },
  { icon: Star, text: '4.8★ from 3,200+ parents' },
]

export default function Marquee() {
  return (
    <div className="relative bg-ink-900 text-cream-50 py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 px-8 text-sm font-600"
          >
            <it.icon className="h-4 w-4 text-brand-300" />
            {it.text}
            <span className="ml-8 text-brand-400/60">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
