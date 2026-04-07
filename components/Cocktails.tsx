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
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="koktelok" ref={sectionRef} className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-[-10%] z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80"
          alt="Koktélkészítés"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-primary/75 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="font-heading text-4xl md:text-5xl font-semibold mb-4"
        >
          Koktél művészet
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-text-secondary text-lg mb-16 max-w-2xl mx-auto"
        >
          Klasszikus receptúrák és signature kreációk — minden koktél egy alkotás
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {cocktails.map((cocktail) => (
            <motion.div
              key={cocktail.name}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-6 md:p-8 hover:bg-white/[0.15] hover:border-white/20 transition-all duration-300"
            >
              <h3 className="font-heading text-base md:text-xl font-semibold mb-2">
                {cocktail.name}
              </h3>
              <p className="text-text-secondary text-xs md:text-sm">{cocktail.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href="#"
          className="inline-block mt-12 border border-accent text-accent text-sm font-medium tracking-wider uppercase px-8 py-4 hover:bg-accent hover:text-primary transition-all duration-300"
        >
          Teljes ital menü
        </motion.a>
      </div>
    </section>
  );
}
