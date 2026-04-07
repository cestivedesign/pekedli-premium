'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { href: '#hero', label: 'Nyitólap' },
  { href: '#kinalat', label: 'Kínálatunk' },
  { href: '#galeria', label: 'Galéria' },
  { href: '#foglalas', label: 'Foglalás' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-primary/80 backdrop-blur-xl border-b border-white/5 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <a href="#hero" className="relative z-10 flex-shrink-0">
            <Image
              src="https://pekedli.hu/wp-content/uploads/2024/08/logo_uj_vilagos.png"
              alt="Pekedli Bar & Lounge"
              width={140}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide uppercase text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#foglalas"
            className="hidden md:inline-block bg-accent text-primary text-sm font-medium tracking-wider uppercase px-6 py-3 hover:bg-accent-light transition-colors duration-300"
          >
            Foglalj asztalt
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-[60] text-text-primary p-2"
            aria-label="Menü"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-primary/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl font-heading font-semibold text-text-primary hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#foglalas"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 bg-accent text-primary text-sm font-medium tracking-wider uppercase px-8 py-4 hover:bg-accent-light transition-colors"
            >
              Foglalj asztalt
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
