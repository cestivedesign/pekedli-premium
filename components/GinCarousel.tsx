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
  const check = () => { const el = scrollRef.current; if (!el) return; setCanLeft(el.scrollLeft > 10); setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10); };
  useEffect(() => { const el = scrollRef.current; if (!el) return; el.addEventListener('scroll', check, { passive: true }); check(); return () => el.removeEventListener('scroll', check); }, []);
  const scroll = (d: number) => scrollRef.current?.scrollBy({ left: d * 310, behavior: 'smooth' });

  return (
    <section id="ginek" className="section-padding relative noise-overlay overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark via-secondary-dark/80 to-primary z-0" />
      <div className="container-main relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
              <span className="text-accent text-xs md:text-sm tracking-[0.2em] uppercase">Gin kollekció</span>
            </div>
            <h2 className="font-heading font-semibold mb-6 text-glow" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Válogatott ginek</h2>
            <p className="text-text-secondary text-base md:text-lg">A világ minden tájáról, gondosan válogatva</p>
          </motion.div>
          <div className="hidden md:flex gap-2 flex-shrink-0">
            {[{ d: -1, icon: ChevronLeft, can: canLeft }, { d: 1, icon: ChevronRight, can: canRight }].map((b, i) => (
              <button key={i} onClick={() => scroll(b.d)} disabled={!b.can}
                className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent/5 disabled:opacity-20 transition-all duration-300">
                <b.icon size={18} />
              </button>
            ))}
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-10 md:gap-12 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {gins.map((gin) => (
            <div key={gin.name} className="w-[300px] md:w-[340px] flex-shrink-0 card-3d group snap-start">
              <div className="relative h-56 overflow-hidden">
                <Image src={gin.image} alt={gin.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="300px" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading text-lg font-semibold truncate mr-2">{gin.name}</h3>
                  <span className="text-lg flex-shrink-0">{gin.flag}</span>
                </div>
                <p className="text-text-muted text-[10px] uppercase tracking-widest mb-5">{gin.origin}</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">{gin.desc}</p>
                <p className="text-accent font-semibold text-sm mt-auto">{gin.price} <span className="text-text-muted font-normal text-xs">/ 4cl</span></p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24">
          <a href="#" className="btn-outline text-xs py-3 px-6">Teljes gin menü &rarr;</a>
        </div>
      </div>
    </section>
  );
}
