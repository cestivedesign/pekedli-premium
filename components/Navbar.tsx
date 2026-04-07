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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-primary/70 backdrop-blur-2xl border-b border-white/[0.04] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-main flex items-center justify-between h-20">
          <a href="#hero" className="relative z-10 flex-shrink-0">
            <Image src="https://pekedli.hu/wp-content/uploads/2024/08/logo_uj_vilagos.png" alt="Pekedli" width={140} height={48} className="h-9 w-auto object-contain" priority />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-[13px] font-medium tracking-wide uppercase text-text-secondary hover:text-accent transition-colors duration-300 relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
          <a href="#foglalas" className="hidden md:inline-flex btn-primary !py-2.5 !px-6 !text-[11px]">Foglalj asztalt</a>
          <button onClick={() => setOpen(!open)} className="md:hidden relative z-[60] text-text-primary p-2" aria-label="Menü">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-primary/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((l, i) => (
              <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-2xl font-heading font-semibold text-text-primary hover:text-accent transition-colors">
                {l.label}
              </motion.a>
            ))}
            <motion.a href="#foglalas" onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="mt-4 btn-primary">Foglalj asztalt</motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
