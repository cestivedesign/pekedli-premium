'use client';

import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/lib/animations';

export default function ChubbyChick() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-secondary-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInLeft} className="space-y-6">
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">
              Food Partner
            </span>

            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold leading-tight">
              Chubby Chick
            </h2>

            <p className="text-lg text-text-secondary leading-relaxed">
              Éhes vagy? A Chubby Chick friss street food kreációi tökéletesen
              kiegészítik az italélményt. Készülj fel a következő szintre.
            </p>

            <p className="text-text-secondary leading-relaxed">
              Izgalmas ízvilágok, gondosan összeállított menü — mert a tökéletes
              este nem csak az italokról szól.
            </p>

            <motion.a
              variants={staggerItem}
              href="#"
              className="inline-block border border-accent text-accent text-sm font-medium tracking-wider uppercase px-8 py-4 hover:bg-accent hover:text-primary transition-all duration-300"
            >
              Menü megtekintése →
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="relative rounded-lg overflow-hidden aspect-[4/3]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80')",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
