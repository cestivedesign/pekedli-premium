'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const images = [
  { src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80', alt: 'Bár belső', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80', alt: 'Koktél készítés', span: '' },
  { src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80', alt: 'Italok', span: '' },
  { src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80', alt: 'Hangulat', span: '' },
  { src: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=600&q=80', alt: 'Gin válogatás', span: '' },
  { src: 'https://images.unsplash.com/photo-1598018553943-93a92b10d04d?w=800&q=80', alt: 'Bár pult', span: 'col-span-2' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-center mb-16"
        >
          A hangulat
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className={`relative rounded-lg overflow-hidden group cursor-pointer ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                <Eye
                  size={32}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
