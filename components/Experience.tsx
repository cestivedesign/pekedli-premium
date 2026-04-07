'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wine, GlassWater, Beer } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

function CountUp({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

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

const cards = [
  {
    icon: Wine,
    number: 30,
    prefix: '',
    suffix: '+',
    title: 'Prémium gin',
    description: 'A világ legjobb ginpárlataival várunk, Skóciától Japánig.',
  },
  {
    icon: GlassWater,
    number: 40,
    prefix: '~',
    suffix: '',
    title: 'Koktél',
    description: 'Klasszikus receptúrák és saját signature kreációk.',
  },
  {
    icon: Beer,
    number: 5,
    prefix: '',
    suffix: '',
    title: 'Csapolt sör',
    description: 'Guinness, Pilsner, Peroni, HB búza és Dreher Gold.',
  },
];

export default function Experience() {
  return (
    <section id="kinalat" className="py-24 md:py-32 lg:py-40 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="font-heading text-4xl md:text-5xl font-semibold text-center mb-16"
        >
          Fedezd fel a kínálatunkat
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-primary-light p-8 md:p-10 border border-white/5 rounded-lg group cursor-pointer hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/20 transition-all duration-500"
            >
              <card.icon
                size={32}
                className="text-accent mb-6"
                strokeWidth={1.5}
              />

              <div className="font-heading text-5xl font-bold text-accent mb-4">
                <CountUp target={card.number} prefix={card.prefix} suffix={card.suffix} />
              </div>

              <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3">
                {card.title}
              </h3>

              <p className="text-text-secondary leading-relaxed mb-6">
                {card.description}
              </p>

              <span className="text-accent text-sm font-medium tracking-wide uppercase flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                Felfedezés
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
