'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
    description: 'Albariño szőlő, tengerparti fűszerek',
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
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
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
    image: 'https://images.unsplash.com/photo-1574006852726-31d021fded59?w=400&q=80',
  },
  {
    name: 'Agárdi Cameleon',
    origin: 'Magyarország',
    flag: '🇭🇺',
    description: 'Friss, virágos, fűszeres',
    price: '2 400 Ft',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=400&q=80',
  },
];

export default function GinCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 320;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section id="ginek" className="py-32 md:py-40 lg:py-48 bg-gradient-to-b from-secondary-dark to-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14">
        <div className="flex items-end justify-between">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <span className="block text-accent uppercase tracking-[0.25em] text-xs font-medium mb-5">
              Gin kollekció
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
              Válogatott ginek
            </h2>
            <p className="text-text-secondary text-lg max-w-lg">
              A világ minden tájáról, gondosan válogatva
            </p>
          </motion.div>

          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Előző"
            >
              &larr;
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Következő"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {gins.map((gin) => (
          <div
            key={gin.name}
            className="w-[280px] md:w-[300px] flex-shrink-0 bg-surface rounded-2xl overflow-hidden border border-white/[0.06] group hover:border-accent/20 transition-all duration-500 snap-start"
          >
            <div className="relative h-52 overflow-hidden bg-primary-light">
              <Image
                src={gin.image}
                alt={gin.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent" />
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
          </div>
        ))}
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
