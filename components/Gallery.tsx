'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const images = [
  { src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80', alt: 'Bár belső tér', span: 'md:col-span-2 md:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80', alt: 'Koktél készítés', span: '' },
  { src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80', alt: 'Italok', span: '' },
  { src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80', alt: 'Hangulat', span: '' },
  { src: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=600&q=80', alt: 'Gin válogatás', span: '' },
  { src: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=800&q=80', alt: 'Bár pult', span: 'md:col-span-2' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="section-padding relative noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-surface z-0" />
      <div className="container-main relative z-10">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="text-center mb-14 md:mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8">
            <span className="text-accent text-xs md:text-sm tracking-[0.2em] uppercase">Galéria</span>
          </div>
          <h2 className="font-heading font-semibold" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>A hangulat</h2>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 auto-rows-[200px] md:auto-rows-[280px]">
          {images.map((img, i) => (
            <motion.div key={i} variants={staggerItem} className={`relative rounded-2xl overflow-hidden group cursor-pointer ring-1 ring-white/[0.04] ${img.span}`}>
              <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes={img.span.includes('col-span') ? '50vw' : '25vw'} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Eye size={20} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
