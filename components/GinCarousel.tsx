'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const gins = [
  { name: "Hendrick's", origin: 'Skócia', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', desc: 'Uborka és rózsa jegyekkel', price: '2 800 Ft', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80' },
  { name: 'Roku', origin: 'Japán', flag: '🇯🇵', desc: '6 japán botanika harmóniája', price: '2 500 Ft', image: 'https://images.unsplash.com/photo-1609951651556-5334e2706168?w=400&q=80' },
  { name: 'Nordés', origin: 'Spanyolország', flag: '🇪🇸', desc: 'Albariño szőlő, tengerparti fűszerek', price: '2 500 Ft', image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=400&q=80' },
  { name: 'Baigur', origin: 'Baszkföld', flag: '🇪🇸', desc: 'Fás-fűszeres, friss citrus', price: '2 900 Ft', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80' },
  { name: 'Malfy', origin: 'Olaszország', flag: '🇮🇹', desc: 'Amalfi citrom és tengeri szellő', price: '2 500 Ft', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80' },
  { name: 'Mrs. Millicent', origin: 'Magyarország', flag: '🇭🇺', desc: 'Bodza és levendula jegyekkel', price: '2 300 Ft', image: 'https://images.unsplash.com/photo-1570598912132-0ba1dc952b7d?w=400&q=80' },
  { name: 'Tanqueray', origin: 'Egyesült Királyság', flag: '🇬🇧', desc: 'Markáns boróka karakterrel', price: '1 900 Ft', image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=400&q=80' },
  { name: 'Agárdi Cameleon', origin: 'Magyarország', flag: '🇭🇺', desc: 'Friss, virágos, fűszeres', price: '2 400 Ft', image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=400&q=80' },
];

export default function GinCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const check = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', check, { passive: true });
    check();
    return () => el.removeEventListener('scroll', check);
  }, []);

  const scroll = (dir: number) => scrollRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });

  return (
    <section id="ginek" className="section-padding bg-gradient-to-b from-secondary-dark to-primary">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            <span className="block text-accent uppercase tracking-[0.25em] text-xs font-medium mb-5">Gin kollekció</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-semibold mb-3">Válogatott ginek</h2>
            <p className="text-text-secondary text-base md:text-lg">A világ minden tájáról, gondosan válogatva</p>
          </motion.div>
          <div className="hidden md:flex gap-2 flex-shrink-0">
            <button onClick={() => scroll(-1)} disabled={!canLeft} className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 disabled:opacity-20 transition-all" aria-label="Előző"><ChevronLeft size={20} /></button>
            <button onClick={() => scroll(1)} disabled={!canRight} className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 disabled:opacity-20 transition-all" aria-label="Következő"><ChevronRight size={20} /></button>
          </div>
        </div>

        {/* Cards */}
        <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
          {gins.map((gin) => (
            <div key={gin.name} className="w-[270px] md:w-[280px] flex-shrink-0 bg-surface rounded-2xl overflow-hidden border border-white/[0.06] group hover:border-accent/20 transition-all duration-500 snap-start">
              <div className="relative h-48 overflow-hidden bg-primary-light">
                <Image src={gin.image} alt={gin.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="280px" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-heading text-lg font-semibold truncate mr-2">{gin.name}</h3>
                  <span className="text-lg flex-shrink-0">{gin.flag}</span>
                </div>
                <p className="text-text-muted text-[10px] uppercase tracking-widest mb-2">{gin.origin}</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-3">{gin.desc}</p>
                <p className="text-accent font-semibold text-sm">{gin.price} <span className="text-text-muted font-normal text-xs">/ 4cl</span></p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a href="#" className="text-accent hover:text-accent-light text-sm font-medium tracking-wide uppercase underline underline-offset-8 decoration-accent/30 hover:decoration-accent transition-all duration-300">
            Teljes gin menü &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
