'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const headline = 'Ahol minden korty egy történet';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const words = headline.split(' ');

  return (
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-[-10%] z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&q=80"
          alt="Pekedli Bar & Lounge belső"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20 z-[1]" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20"
      >
        <div className="max-w-4xl">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + i * 0.12,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block mr-[0.25em] last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-text-secondary mb-10 tracking-wide"
          >
            30+ prémium gin · Signature koktélok · Veszprém szívében
          </motion.p>

          <motion.a
            href="#foglalas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-accent text-primary font-medium tracking-wider uppercase px-10 py-4 text-sm md:text-base hover:bg-accent-light transition-colors duration-300 shadow-lg shadow-accent/20"
          >
            Foglalj asztalt
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={28} className="text-text-secondary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
