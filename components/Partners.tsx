'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp } from '@/lib/animations';

const partnerLogos = Array.from({ length: 12 }, (_, i) => ({
  src: `https://pekedli.hu/wp-content/uploads/2025/11/${i + 1}.png`,
  alt: `Partner ${i + 1}`,
}));

export default function Partners() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="font-heading text-4xl md:text-5xl font-semibold text-center"
        >
          Partnereink
        </motion.h2>
      </div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative"
      >
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 md:gap-16 w-max py-4">
          {[...partnerLogos, ...partnerLogos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
