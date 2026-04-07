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
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80',
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
    image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=400&q=80',
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
    image: 'https://images.unsplash.com/photo-1598018553943-93a92b10d04d?w=400&q=80',
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
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
  },
  {
    name: 'Agárdi Cameleon',
    origin: 'Magyarország',
    flag: '🇭🇺',
    description: 'Friss, virágos, fűszeres',
    price: '2 400 Ft',
    image: 'https://images.unsplash.com/photo-1574006852726-31d021fded59?w=400&q=80',
  },
];

export default function GinCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const cardWidth = 296;
  const gap = 24;
  const totalWidth = gins.length * (cardWidth + gap);

  useAnimationFrame((_, delta) => {
    if (isPaused) return;
    const current = x.get();
    const speed = hasInteracted ? 0.025 : 0.02;
    const newX = current - delta * speed;
    if (newX <= -totalWidth) {
      x.set(newX + totalWidth);
    } else {
      x.set(newX);
    }
  });

  return (
    <section id="ginek" className="py-32 md:py-40 lg:py-48 bg-gradient-to-b from-secondary-dark to-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14">
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
          className="text-text-secondary text-lg max-w-lg"
        >
          A világ minden tájáról, gondosan válogatva
        </motion.p>
      </div>

      <div
        ref={containerRef}
        className="relative cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setHasInteracted(true); }}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => { setIsPaused(false); setHasInteracted(true); }}
      >
        <motion.div
          className="flex gap-6 px-6 md:px-12"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -totalWidth * 2, right: 100 }}
          dragElastic={0.1}
          onDragStart={() => setIsPaused(true)}
          onDragEnd={() => { setIsPaused(false); setHasInteracted(true); }}
        >
          {[...gins, ...gins, ...gins].map((gin, i) => (
            <motion.div
              key={`${gin.name}-${i}`}
              className="w-[280px] md:w-[296px] flex-shrink-0 bg-surface rounded-xl overflow-hidden border border-white/5 group hover:border-accent/20 transition-all duration-500"
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <div className="relative h-48 overflow-hidden bg-primary-light">
                <Image
                  src={gin.image}
                  alt={gin.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="296px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-lg font-semibold truncate mr-2">
                    {gin.name}
                  </h3>
                  <span className="text-xl flex-shrink-0">{gin.flag}</span>
                </div>
                <p className="text-text-muted text-xs uppercase tracking-widest mb-3">{gin.origin}</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {gin.description}
                </p>
                <p className="text-accent font-semibold">{gin.price} <span className="text-text-muted font-normal text-xs">/ 4cl</span></p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
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
