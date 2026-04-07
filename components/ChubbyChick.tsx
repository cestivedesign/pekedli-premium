'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';

export default function ChubbyChick() {
  return (
    <section className="section-padding relative noise-overlay overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark via-secondary-dark to-primary z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="container-main relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div variants={fadeInLeft} className="space-y-6 md:space-y-8 order-2 md:order-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5">
              <span className="text-accent text-xs font-medium tracking-[0.25em] uppercase">Food Partner</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1]">Chubby Chick</h2>
            <div className="accent-line" />
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">Éhes vagy? A Chubby Chick friss street food kreációi tökéletesen kiegészítik az italélményt.</p>
            <p className="text-text-secondary leading-relaxed">Izgalmas ízvilágok, gondosan összeállított menü — mert a tökéletes este nem csak az italokról szól.</p>
            <a href="#" className="btn-outline">Menü megtekintése &rarr;</a>
          </motion.div>
          <motion.div variants={fadeInRight} className="relative group order-1 md:order-2">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/15 via-transparent to-secondary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] ring-1 ring-white/5">
              <Image src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80" alt="Chubby Chick street food" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
