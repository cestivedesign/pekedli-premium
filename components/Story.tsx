'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInLeft, staggerContainer, staggerItem } from '@/lib/animations';

export default function Story() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div
            variants={fadeInLeft}
            className="relative rounded-lg overflow-hidden aspect-[4/5]"
          >
            <Image
              src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80"
              alt="Pekedli Bar belső tér"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <motion.span
              variants={staggerItem}
              className="block text-accent uppercase tracking-[0.2em] text-sm font-medium"
            >
              EST. 2023 · VESZPRÉM
            </motion.span>

            <motion.h2
              variants={staggerItem}
              className="font-heading text-4xl md:text-5xl font-semibold leading-tight"
            >
              Több mint egy bár
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="text-lg text-text-secondary leading-relaxed"
            >
              A Pekedli 2023 óta Veszprém szívében várja azokat, akik a minőségi
              italok és a felejthetetlen esték rajongói. Több mint 30 gondosan
              válogatott gin, signature koktélok és egy hangulat ami nem másolható.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="text-lg text-text-secondary leading-relaxed"
            >
              Minden részlet az élményt szolgálja — a gondosan összeállított itallapot,
              a meleg hangulatú belső teret és a személyes kiszolgálást, ami miatt
              vendégeink újra és újra visszatérnek.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
