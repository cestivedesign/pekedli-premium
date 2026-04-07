'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

const testimonials = [
  { text: 'A legjobb gin válogatás Veszprémben. Az atmoszféra egyszerűen tökéletes. Minden alkalommal felfedezek egy új kedvencet.', author: 'Kovács Anna', source: 'Google Review' },
  { text: 'Végre egy hely ahol nem kell kompromisszumot kötni. A koktélok művészi szinten készülnek, a kiszolgálás pedig elsőrangú.', author: 'Szabó Márk', source: 'Google Review' },
  { text: 'Ha Veszprémben jársz, a Pekedli kötelező. A hangulat, az italok, az egész élmény... egyszerűen top.', author: 'Nagy Petra', source: 'Facebook Review' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  useEffect(() => { const t = setInterval(next, 5000); return () => clearInterval(t); }, [next]);

  return (
    <section className="section-padding bg-surface">
      <div className="container-main">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-12 md:mb-16">
          <span className="block text-accent uppercase tracking-[0.25em] text-xs font-medium mb-5">Vélemények</span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold">Vendégeink mondták</h2>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="max-w-2xl mx-auto">
          <div className="bg-primary p-8 md:p-14 rounded-2xl border border-white/[0.06] text-center min-h-[300px] flex flex-col items-center justify-center">
            <div className="flex gap-1.5 mb-8 justify-center">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-accent fill-accent" />)}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }} className="max-w-md mx-auto">
                <p className="font-heading text-lg md:text-xl italic leading-relaxed mb-8 text-text-primary">&ldquo;{testimonials[current].text}&rdquo;</p>
                <p className="text-text-primary font-medium">{testimonials[current].author}</p>
                <p className="text-text-muted text-sm mt-1">{testimonials[current].source}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} aria-label={`Vélemény ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-accent w-8' : 'bg-white/20 hover:bg-white/40 w-2'}`} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
