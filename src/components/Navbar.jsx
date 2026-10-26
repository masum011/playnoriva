import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Our Toys", to: "/toys" },
  { label: "Why Us", to: "/why-us" },
  { label: "Reviews", to: "/reviews" },
  { label: "FAQ", to: "/faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-cream-50/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(124,40,20,0.08)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="grid place-items-center h-10 w-10 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform">
              <ShoppingBag className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <span className="leading-none">
              <span className="block font-display font-700 text-lg sm:text-xl text-ink-900 tracking-tight">
                Playnoriva
              </span>
              <span className="block text-[11px] font-600 tracking-[0.2em] uppercase text-brand-500">
                Baby
              </span>
            </span>
          </Link>

          {/* Desktop links with sliding active pill */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `relative block px-4 py-2 text-sm font-600 transition-colors ${
                      isActive
                        ? "text-brand-600"
                        : "text-ink-700 hover:text-brand-600"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-line"
                          className="absolute bottom-2 bg-brand-50 ring-1"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{l.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/toys"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink-900 hover:bg-brand-600 text-cream-50 text-sm font-600 px-5 py-2.5 transition-colors"
          >
            Shop Now
          </Link>

          <button
            className="md:hidden grid place-items-center h-10 w-10 rounded-xl bg-cream-100 text-ink-900"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden bg-cream-50/95 backdrop-blur-xl border-t border-cream-200"
            >
              <ul className="px-5 py-4 flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      className={({ isActive }) =>
                        `block rounded-xl border-l-4 px-4 py-3 font-600 transition-colors ${
                          isActive
                            ? "border-brand-500 bg-brand-50 text-brand-700"
                            : "border-transparent text-ink-700 hover:bg-brand-50 hover:text-brand-600"
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <Link
                    to="/toys"
                    className="mt-2 block rounded-xl bg-ink-900 text-cream-50 px-4 py-3 text-center font-600"
                  >
                    Shop Now
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
