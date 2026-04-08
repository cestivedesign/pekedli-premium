'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { Wine, GlassWater, Beer } from 'lucide-react';

function CountUp({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  useEffect(() => {
    if (!inView) return;
    let s = 0;
    const step = target / 125;
    const t = setInterval(() => {
      s += step;
      if (s >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(s));
    }, 16);
    return () => clearInterval(t);
  }, [inView, target]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const cards = [
  { icon: Wine, number: 30, prefix: '', suffix: '+', title: 'Prémium gin', desc: 'A világ legjobb ginpárlataival várunk, Skóciától Japánig.' },
  { icon: GlassWater, number: 40, prefix: '~', suffix: '', title: 'Koktél', desc: 'Klasszikus receptúrák és saját signature kreációk.' },
  { icon: Beer, number: 5, prefix: '', suffix: '', title: 'Csapolt sör', desc: 'Guinness, Pilsner, Peroni, HB búza és Dreher Gold.' },
];

export default function Experience() {
  return (
    <section id="kinalat" className="section-padding relative noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-primary z-0" />
      <div className="container-main relative z-10">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="text-center mb-16 md:mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8">
            <span className="text-accent text-xs md:text-sm tracking-[0.2em] uppercase">Kínálatunk</span>
          </div>
          <h2 className="font-heading font-semibold text-glow mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Fedezd fel a kínálatunkat
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {cards.map((card) => (
            <motion.div key={card.title} variants={staggerItem} className="card-3d p-10 md:p-14 text-center group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-10 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center ring-1 ring-accent/10 group-hover:ring-accent/30 transition-all duration-500">
                <card.icon size={28} strokeWidth={1.3} className="text-accent" />
              </div>
              <div className="font-heading text-5xl md:text-6xl font-bold text-accent mb-8 leading-none text-glow">
                <CountUp target={card.number} prefix={card.prefix} suffix={card.suffix} />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold mb-6">{card.title}</h3>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-12">{card.desc}</p>
              <span className="text-accent text-sm font-medium tracking-wide uppercase inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                Felfedezés <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
