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
    <section id="galeria" className="section-padding">
      <div className="container-main">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-12 md:mb-16">
          <span className="block text-accent uppercase tracking-[0.25em] text-xs font-medium mb-5">Galéria</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-semibold">A hangulat</h2>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <motion.div key={i} variants={staggerItem} className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}>
              <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes={img.span.includes('col-span') ? '50vw' : '25vw'} />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                <Eye size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
