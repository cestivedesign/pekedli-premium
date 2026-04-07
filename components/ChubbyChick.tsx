'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';

export default function ChubbyChick() {
  return (
    <section className="py-32 md:py-40 lg:py-48 bg-secondary-dark">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <motion.div variants={fadeInLeft} className="space-y-8 order-2 md:order-1">
            <span className="block text-accent uppercase tracking-[0.25em] text-xs font-medium">
              Food Partner
            </span>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1]">
              Chubby Chick
            </h2>

            <div className="w-16 h-[2px] bg-accent" />

            <p className="text-lg text-text-secondary leading-relaxed">
              Éhes vagy? A Chubby Chick friss street food kreációi tökéletesen
              kiegészítik az italélményt. Készülj fel a következő szintre.
            </p>

            <p className="text-text-secondary leading-relaxed">
              Izgalmas ízvilágok, gondosan összeállított menü — mert a tökéletes
              este nem csak az italokról szól.
            </p>

            <a
              href="#"
              className="inline-block border border-accent text-accent text-sm font-medium tracking-wider uppercase px-10 py-4 hover:bg-accent hover:text-primary transition-all duration-300"
            >
              Menü megtekintése &rarr;
            </a>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] order-1 md:order-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80"
              alt="Chubby Chick street food"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
