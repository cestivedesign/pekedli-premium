'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

const testimonials = [
  {
    text: 'A legjobb gin válogatás Veszprémben. Az atmoszféra egyszerűen tökéletes. Minden alkalommal felfedezek egy új kedvencet.',
    author: 'Kovács Anna',
    source: 'Google Review',
  },
  {
    text: 'Végre egy hely ahol nem kell kompromisszumot kötni. A koktélok művészi szinten készülnek, a kiszolgálás pedig elsőrangú.',
    author: 'Szabó Márk',
    source: 'Google Review',
  },
  {
    text: 'Ha Veszprémben jársz, a Pekedli kötelező. A hangulat, az italok, az egész élmény... egyszerűen top.',
    author: 'Nagy Petra',
    source: 'Facebook Review',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-surface">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-center mb-16"
        >
          Vendégeink mondták
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          <div className="bg-primary-light p-8 md:p-12 rounded-lg border border-white/5 text-center min-h-[280px] flex flex-col items-center justify-center">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-accent fill-accent" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-[family-name:var(--font-heading)] text-xl md:text-2xl italic leading-relaxed mb-8 text-text-primary">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <p className="text-text-secondary font-medium">
                  — {testimonials[current].author}
                </p>
                <p className="text-text-muted text-sm mt-1">
                  {testimonials[current].source}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Vélemény ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-accent w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
