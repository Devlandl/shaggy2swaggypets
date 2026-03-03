import Link from "next/link";
import { Scissors, MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-paw-dark text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-paw-brown via-paw-gold to-paw-brown" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-paw-brown/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-gradient-to-br from-paw-brown to-paw-gold rounded-2xl flex items-center justify-center">
                <Scissors className="text-white" size={20} />
              </div>
              <div>
                <span className="font-[family-name:var(--font-playfair)] font-bold text-lg">Shaggy 2 Swaggy</span>
                <span className="block text-[10px] text-paw-gold font-semibold uppercase tracking-[0.15em] -mt-0.5">Pet Grooming</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Professional dog and cat grooming on Arlington Ave in Riverside. Natural and organic products, gentle care for every pet.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/shaggy2swaggypets" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-paw-gold/20 transition-colors">
                <Instagram size={16} className="text-gray-400" />
              </a>
              <a href="https://yelp.com/biz/shaggy2swaggypets-riverside-5" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-paw-gold/20 transition-colors text-gray-400 text-xs font-bold">
                Y
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] font-semibold text-lg mb-5">Quick Links</h3>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/quote", label: "Get a Quote" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-400 hover:text-paw-gold transition-colors text-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] font-semibold text-lg mb-5">Contact</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={16} className="mt-0.5 shrink-0 text-paw-gold" />
                <span>3411 Arlington Ave<br />Riverside, CA 92506</span>
              </div>
              <a href="tel:+19517425674" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-paw-gold transition-colors">
                <Phone size={16} className="shrink-0 text-paw-gold" />
                (951) 742-5674
              </a>
              <a href="mailto:shaggy2swaggypets@gmail.com" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-paw-gold transition-colors">
                <Mail size={16} className="shrink-0 text-paw-gold" />
                shaggy2swaggypets@gmail.com
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] font-semibold text-lg mb-5">Hours</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="shrink-0 text-paw-gold" />
                <span>Mon - Sat: 9AM - 5:30PM</span>
              </div>
              <div className="pl-[26px]">Sun: Closed</div>
              <div className="mt-2 px-4 py-2.5 bg-paw-gold/10 rounded-xl border border-paw-gold/20">
                <p className="text-paw-gold font-semibold text-xs uppercase tracking-wider">Walk-ins Welcome!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Shaggy 2 Swaggy Pet Grooming. All rights reserved.</p>
          <p className="text-xs text-gray-600">Cash - Card - PayPal - Venmo - Zelle</p>
        </div>
      </div>
    </footer>
  );
}
