'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Navigation } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

const hours = [
  { days: 'Hétfő — Csütörtök', time: '16:00 — 24:00' },
  { days: 'Péntek — Szombat', time: '16:00 — 02:00' },
  { days: 'Vasárnap', time: '17:00 — 23:00' },
];

export default function Location() {
  return (
    <section className="section-padding relative noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-surface z-0" />
      <div className="container-main relative z-10">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="text-center mb-10 md:mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-4">
            <span className="text-accent text-xs md:text-sm tracking-[0.2em] uppercase">Látogass el</span>
          </div>
          <h2 className="font-heading font-semibold" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Hol találsz meg</h2>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 card-3d overflow-hidden !rounded-3xl">
          <div className="p-8 md:p-12 space-y-8">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold">Nyitvatartás</h3>
            <div>
              {hours.map((h) => (
                <div key={h.days} className="flex items-center justify-between py-3.5 border-b border-white/[0.06] last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={13} className="text-accent" />
                    </div>
                    <span className="text-text-primary text-sm md:text-base">{h.days}</span>
                  </div>
                  <span className="text-accent font-semibold text-sm md:text-base">{h.time}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <MapPin size={13} className="text-accent" />
                </div>
                <div>
                  <p className="text-text-primary font-medium">8200 Veszprém</p>
                  <p className="text-text-secondary text-sm">Rákóczi Ferenc utca 1</p>
                </div>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=Pekedli+Bar+Veszprém+Rákóczi+utca+1" target="_blank" rel="noopener noreferrer" className="btn-outline !py-2.5 !px-5 !text-[11px]">
                <Navigation size={14} /> Útvonal tervezés
              </a>
            </div>
          </div>
          <div className="relative min-h-[300px] md:min-h-0 bg-primary-light">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.1!2d17.9085!3d47.0932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDA1JzM1LjUiTiAxN8KwNTQnMzAuNiJF!5e0!3m2!1shu!2shu!4v1"
              className="absolute inset-0 w-full h-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Pekedli térkép"
              style={{ filter: 'invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.8)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
