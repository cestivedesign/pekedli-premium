'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

function CountUp({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

function GinIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
      <path d="M8 2h8l-2 7H10L8 2z"/>
      <path d="M10 9l-2 9c-.2.9.5 2 1.5 2h5c1 0 1.7-1.1 1.5-2L14 9"/>
      <path d="M10 13h4"/>
    </svg>
  );
}

function CocktailIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
      <path d="M8 2l8 8-4 4"/>
      <path d="M4 6l16 0"/>
      <path d="M12 14v6"/>
      <path d="M8 20h8"/>
      <path d="M7 6l5 5"/>
    </svg>
  );
}

function BeerIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
      <path d="M17 11h1a3 3 0 010 6h-1"/>
      <path d="M9 12a1 1 0 011-1h4a1 1 0 011 1v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6z"/>
      <path d="M7 7h10l-1 4H8L7 7z"/>
      <path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2"/>
    </svg>
  );
}

const cards = [
  {
    icon: GinIcon,
    number: 30,
    prefix: '',
    suffix: '+',
    title: 'Prémium gin',
    description: 'A világ legjobb ginpárlataival várunk, Skóciától Japánig.',
  },
  {
    icon: CocktailIcon,
    number: 40,
    prefix: '~',
    suffix: '',
    title: 'Koktél',
    description: 'Klasszikus receptúrák és saját signature kreációk.',
  },
  {
    icon: BeerIcon,
    number: 5,
    prefix: '',
    suffix: '',
    title: 'Csapolt sör',
    description: 'Guinness, Pilsner, Peroni, HB búza és Dreher Gold.',
  },
];

export default function Experience() {
  return (
    <section id="kinalat" className="relative">
      <div className="bg-surface py-32 md:py-40 lg:py-48">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-20"
          >
            <span className="block text-accent uppercase tracking-[0.25em] text-xs font-medium mb-5">
              Kínálatunk
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold">
              Fedezd fel a kínálatunkat
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-3 gap-8 lg:gap-10"
          >
            {cards.map((card) => (
              <motion.div
                key={card.title}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-primary p-10 md:p-12 border border-white/[0.06] rounded-2xl group cursor-pointer hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/20 transition-all duration-500 text-center"
              >
                <div className="flex justify-center mb-8">
                  <card.icon />
                </div>

                <div className="font-heading text-6xl md:text-7xl font-bold text-accent mb-4 leading-none">
                  <CountUp target={card.number} prefix={card.prefix} suffix={card.suffix} />
                </div>

                <h3 className="font-heading text-2xl font-semibold mb-4">
                  {card.title}
                </h3>

                <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-[260px] mx-auto">
                  {card.description}
                </p>

                <span className="text-accent text-sm font-medium tracking-wide uppercase inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  Felfedezés
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
