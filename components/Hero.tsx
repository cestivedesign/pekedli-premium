'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const line1 = ['Ahol', 'minden', 'korty'];
  const line2 = ['egy', 'történet'];

  return (
    <section id="hero" className="relative h-screen min-h-[700px] overflow-hidden noise-overlay">
      <motion.div style={{ y }} className="absolute inset-[-10%] z-0">
        <Image src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&q=80" alt="Pekedli Bar" fill className="object-cover" priority sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-primary/40 z-[1]" />

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="w-full max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="inline-block mb-8 px-5 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm"
          >
            <span className="text-accent text-xs font-medium tracking-[0.25em] uppercase">Est. 2023 &middot; Veszprém</span>
          </motion.div>

          {/* Headline — two lines */}
          <h1 className="font-heading font-bold leading-[1.15] tracking-[-0.02em] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}>
            <span className="block">
              {line1.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block">
              {line2.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.66 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-[0.3em] last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-base md:text-lg text-text-secondary mb-10 tracking-[0.04em]"
          >
            30+ prémium gin &middot; Signature koktélok &middot; Veszprém szívében
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2"
          >
            <a href="#foglalas" className="btn-primary">Foglalj asztalt</a>
            <a href="#kinalat" className="btn-outline">Kínálatunk</a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-10">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-sm bg-white/5">
            <ChevronDown size={18} className="text-text-secondary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
