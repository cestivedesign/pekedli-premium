'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import Image from 'next/image';

const gins = [
  {
    name: "Hendrick's",
    origin: 'Skócia',
    flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    description: 'Uborka és rózsa jegyekkel',
    price: '2 800 Ft',
    image: 'https://images.unsplash.com/photo-1608885898957-a559228e4b62?w=400&q=80',
  },
  {
    name: 'Roku',
    origin: 'Japán',
    flag: '🇯🇵',
    description: '6 japán botanika harmóniája',
    price: '2 500 Ft',
    image: 'https://images.unsplash.com/photo-1609951651556-5334e2706168?w=400&q=80',
  },
  {
    name: 'Nordés',
    origin: 'Spanyolország',
    flag: '🇪🇸',
    description: 'Albariño szőlő, tengerparti gyógynövények',
    price: '2 500 Ft',
    image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=400&q=80',
  },
  {
    name: 'Baigur',
    origin: 'Baszkföld',
    flag: '🇪🇸',
    description: 'Fás-fűszeres, friss citrus',
    price: '2 900 Ft',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80',
  },
  {
    name: 'Malfy',
    origin: 'Olaszország',
    flag: '🇮🇹',
    description: 'Amalfi citrom és tengeri szellő',
    price: '2 500 Ft',
    image: 'https://images.unsplash.com/photo-1587223962217-f4e4612be4a2?w=400&q=80',
  },
  {
    name: 'Mrs. Millicent',
    origin: 'Magyarország',
    flag: '🇭🇺',
    description: 'Bodza és levendula jegyekkel',
    price: '2 300 Ft',
    image: 'https://images.unsplash.com/photo-1570598912132-0ba1dc952b7d?w=400&q=80',
  },
  {
    name: 'Tanqueray',
    origin: 'Egyesült Királyság',
    flag: '🇬🇧',
    description: 'Markáns boróka karakterrel',
    price: '1 900 Ft',
    image: 'https://images.unsplash.com/photo-1598018553943-93a92b10d04d?w=400&q=80',
  },
  {
    name: 'Agárdi Cameleon',
    origin: 'Magyarország',
    flag: '🇭🇺',
    description: 'Friss, virágos, fűszeres',
    price: '2 400 Ft',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
  },
];

export default function GinCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardWidth = 296;
  const gap = 24;
  const totalWidth = gins.length * (cardWidth + gap);

  useAnimationFrame((_, delta) => {
    if (isPaused) return;
    const current = x.get();
    const newX = current - delta * 0.03;
    x.set(newX <= -totalWidth ? 0 : newX);
  });

  return (
    <section id="ginek" className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-secondary-dark to-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="font-heading text-4xl md:text-5xl font-semibold mb-4"
        >
          Válogatott ginek
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-text-secondary text-lg"
        >
          A világ minden tájáról, gondosan válogatva
        </motion.p>
      </div>

      <div
        ref={containerRef}
        className="relative cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-6 pl-6 md:pl-12"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -totalWidth * 2, right: 100 }}
          dragElastic={0.1}
          onDragStart={() => setIsPaused(true)}
          onDragEnd={() => setIsPaused(false)}
        >
          {[...gins, ...gins].map((gin, i) => (
            <motion.div
              key={`${gin.name}-${i}`}
              className="w-[280px] md:w-[296px] flex-shrink-0 bg-surface rounded-lg overflow-hidden border border-white/5 group"
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <div className="relative h-44 overflow-hidden bg-primary-light">
                <Image
                  src={gin.image}
                  alt={gin.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="296px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-heading text-lg font-semibold truncate mr-2">
                    {gin.name}
                  </h3>
                  <span className="text-xl flex-shrink-0">{gin.flag}</span>
                </div>
                <p className="text-text-muted text-xs uppercase tracking-wider mb-2">{gin.origin}</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                  {gin.description}
                </p>
                <p className="text-accent font-semibold text-sm">{gin.price} / 4cl</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10">
        <motion.a
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href="#"
          className="text-accent hover:text-accent-light text-sm font-medium tracking-wide uppercase underline underline-offset-8 decoration-accent/30 hover:decoration-accent transition-all duration-300"
        >
          Teljes gin menü &rarr;
        </motion.a>
      </div>
    </section>
  );
}
