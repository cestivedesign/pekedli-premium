'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const cocktails = [
  { name: 'Old Fashioned', desc: 'Bourbon, angostura, cukor' },
  { name: 'Gin Fizz', desc: 'Gin, citrom, szóda' },
  { name: 'Aperol Spritz', desc: 'Aperol, prosecco, szóda' },
  { name: 'Pekedli Signature', desc: 'A ház különlegessége' },
];

export default function Cocktails() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="koktelok" ref={ref} className="relative section-padding overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-[-15%] z-0">
        <Image src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=1920&q=80" alt="Koktélkészítés" fill className="object-cover" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-primary/80 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/50 z-[1]" />

      <div className="relative z-10 container-main text-center">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-14 md:mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm mb-8">
            <span className="text-accent text-xs md:text-sm tracking-[0.2em] uppercase">Koktélok</span>
          </div>
          <h2 className="font-heading font-semibold mb-10 text-glow" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Koktél művészet</h2>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">Klasszikus receptúrák és signature kreációk — minden koktél egy alkotás</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-20">
          {cocktails.map((c) => (
            <motion.div key={c.name} variants={staggerItem} whileHover={{ y: -6, scale: 1.02 }} className="card-glass p-8 md:p-10">
              <h3 className="font-heading text-sm md:text-lg font-semibold mb-4">{c.name}</h3>
              <p className="text-text-secondary text-xs md:text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <a href="#" className="btn-outline">Teljes ital menü</a>
      </div>
    </section>
  );
}
