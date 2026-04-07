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

      <div className="relative z-10 container-main text-center">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="mb-12 md:mb-16">
          <span className="block text-accent uppercase tracking-[0.25em] text-xs font-medium mb-5">Koktélok</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-semibold mb-5">Koktél művészet</h2>
          <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto">Klasszikus receptúrák és signature kreációk — minden koktél egy alkotás</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-12">
          {cocktails.map((c) => (
            <motion.div key={c.name} variants={staggerItem} whileHover={{ y: -6 }} className="bg-white/[0.08] backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-7 hover:bg-white/[0.14] hover:border-accent/20 transition-all duration-300">
              <h3 className="font-heading text-sm md:text-lg font-semibold mb-1">{c.name}</h3>
              <p className="text-text-secondary text-xs md:text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <a href="#" className="inline-block border border-accent text-accent text-sm font-medium tracking-wider uppercase px-8 py-3.5 hover:bg-accent hover:text-primary transition-all duration-300">
          Teljes ital menü
        </a>
      </div>
    </section>
  );
}
