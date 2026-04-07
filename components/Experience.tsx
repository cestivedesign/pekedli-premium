'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { Wine, GlassWater, Beer } from 'lucide-react';

function CountUp({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 125;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
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
    <section id="kinalat" className="section-padding bg-surface">
      <div className="container-main">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-16 md:mb-20">
          <span className="block text-accent uppercase tracking-[0.25em] text-xs font-medium mb-5">Kínálatunk</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-semibold">Fedezd fel a kínálatunkat</h2>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-primary p-8 md:p-10 lg:p-12 border border-white/[0.06] rounded-2xl group cursor-pointer hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/20 transition-all duration-500 text-center"
            >
              <card.icon size={40} strokeWidth={1.2} className="text-accent mx-auto mb-8" />
              <div className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-accent mb-3 leading-none">
                <CountUp target={card.number} prefix={card.prefix} suffix={card.suffix} />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 max-w-[250px] mx-auto">{card.desc}</p>
              <span className="text-accent text-sm font-medium tracking-wide uppercase inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                Felfedezés <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
