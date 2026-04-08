'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInLeft, staggerContainer, staggerItem } from '@/lib/animations';

export default function Story() {
  return (
    <section className="section-padding relative noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary pointer-events-none z-0" />
      <div className="container-main relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-28 items-center">
          <motion.div variants={fadeInLeft} className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-transparent to-secondary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] ring-1 ring-white/5">
              <Image src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80" alt="Pekedli Bar belső" fill
                className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="space-y-8 md:space-y-10">
            <motion.div variants={staggerItem} className="inline-block whitespace-nowrap px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5">
              <span className="text-accent text-xs md:text-sm tracking-[0.2em] uppercase">EST. 2023 &middot; VESZPRÉM</span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="font-heading font-semibold leading-[1.15]" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Több mint egy bár
            </motion.h2>
            <motion.div variants={staggerItem} className="accent-line" />
            <motion.p variants={staggerItem} className="text-base md:text-lg text-text-secondary leading-relaxed">
              A Pekedli 2023 óta Veszprém szívében várja azokat, akik a minőségi italok és a felejthetetlen esték rajongói. Több mint 30 gondosan válogatott gin, signature koktélok és egy hangulat ami nem másolható.
            </motion.p>
            <motion.p variants={staggerItem} className="text-base md:text-lg text-text-secondary leading-relaxed">
              Minden részlet az élményt szolgálja — a gondosan összeállított itallapot, a meleg hangulatú belső teret és a személyes kiszolgálást.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
