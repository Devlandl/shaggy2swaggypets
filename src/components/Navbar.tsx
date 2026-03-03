"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Scissors, Phone, MapPin } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-lg shadow-paw-brown/5" : "bg-white"
    }`}>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-paw-dark via-paw-brown to-paw-dark text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="hidden sm:flex items-center gap-1.5 text-white/80">
            <MapPin size={12} />
            3411 Arlington Ave, Riverside, CA 92506
          </span>
          <span className="sm:hidden text-white/80">Walk-ins Welcome!</span>
          <a href="tel:+19517425674" className="flex items-center gap-1.5 font-medium hover:text-paw-gold transition-colors">
            <Phone size={12} />
            (951) 742-5674
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-paw-brown to-paw-gold rounded-2xl flex items-center justify-center shadow-md shadow-paw-brown/20 group-hover:shadow-lg group-hover:shadow-paw-brown/30 transition-shadow">
              <Scissors className="text-white" size={20} />
            </div>
            <div>
              <span className="font-[family-name:var(--font-playfair)] font-bold text-paw-dark text-lg tracking-tight">Shaggy 2 Swaggy</span>
              <span className="block text-[10px] text-paw-brown font-semibold uppercase tracking-[0.15em] -mt-0.5">Pet Grooming</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm text-paw-dark/80 hover:text-paw-brown font-medium transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-paw-gold rounded-full group-hover:w-6 transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/quote"
              className="ml-3 bg-gradient-to-r from-paw-brown to-paw-warm text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-paw-brown/25 hover:-translate-y-0.5 transition-all duration-300 btn-shimmer"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-paw-dark p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-1 pb-5 pt-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Services" },
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-paw-dark hover:text-paw-brown hover:bg-paw-cream font-medium px-4 py-2.5 rounded-xl transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/quote"
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-paw-brown to-paw-warm text-white px-5 py-3 rounded-full font-semibold text-center mt-2"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
