'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

const testimonials = [
  { text: 'A legjobb gin válogatás Veszprémben. Az atmoszféra egyszerűen tökéletes. Minden alkalommal felfedezek egy új kedvencet.', author: 'Kovács Anna', source: 'Google Review' },
  { text: 'Végre egy hely ahol nem kell kompromisszumot kötni. A koktélok művészi szinten készülnek, a kiszolgálás pedig elsőrangú.', author: 'Szabó Márk', source: 'Google Review' },
  { text: 'Ha Veszprémben jársz, a Pekedli kötelező. A hangulat, az italok, az egész élmény... egyszerűen top.', author: 'Nagy Petra', source: 'Facebook Review' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  useEffect(() => { const t = setInterval(next, 5000); return () => clearInterval(t); }, [next]);

  return (
    <section className="section-padding relative noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-primary z-0" />
      <div className="container-main relative z-10">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
            <span className="text-accent text-xs font-medium tracking-[0.25em] uppercase">Vélemények</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold">Vendégeink mondták</h2>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="card-3d p-8 md:p-14 text-center min-h-[300px] flex flex-col items-center justify-center !rounded-3xl">
              <div className="flex gap-1 mb-8 justify-center">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-accent fill-accent drop-shadow-[0_0_4px_rgba(212,168,83,0.4)]" />)}
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={current} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }} className="max-w-md mx-auto">
                  <p className="font-heading text-lg md:text-xl italic leading-relaxed mb-8 text-text-primary">&ldquo;{testimonials[current].text}&rdquo;</p>
                  <p className="text-text-primary font-medium">{testimonials[current].author}</p>
                  <p className="text-text-muted text-sm mt-1">{testimonials[current].source}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-surface border border-white/10 hidden md:flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all">
              <ChevronLeft size={16} />
            </button>
            <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-surface border border-white/10 hidden md:flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all">
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} aria-label={`Vélemény ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'bg-gradient-to-r from-accent to-accent-light w-8' : 'bg-white/15 hover:bg-white/30 w-1.5'}`} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
