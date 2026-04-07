'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Navigation } from 'lucide-react';
import { fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';

const hours = [
  { days: 'Hétfő — Csütörtök', time: '16:00 — 24:00' },
  { days: 'Péntek — Szombat', time: '16:00 — 02:00' },
  { days: 'Vasárnap', time: '17:00 — 23:00' },
];

export default function Location() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 rounded-lg overflow-hidden border border-white/5"
        >
          <motion.div
            variants={fadeInLeft}
            className="bg-surface p-8 md:p-12 lg:p-16 space-y-8"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-semibold">
              Nyitvatartás
            </h2>

            <div className="space-y-0">
              {hours.map((item) => (
                <div
                  key={item.days}
                  className="flex items-center justify-between py-4 border-b border-white/5 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-accent flex-shrink-0" />
                    <span className="text-text-primary text-sm md:text-base">{item.days}</span>
                  </div>
                  <span className="text-accent font-medium text-sm md:text-base">{item.time}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-text-primary font-medium">8200 Veszprém</p>
                  <p className="text-text-secondary">Rákóczi Ferenc utca 1</p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Pekedli+Bar+Veszprém+Rákóczi+utca+1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-light text-sm font-medium tracking-wide uppercase transition-colors duration-300"
              >
                <Navigation size={16} />
                Útvonal tervezés &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="relative min-h-[350px] bg-primary-light"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.1!2d17.9085!3d47.0932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDA1JzM1LjUiTiAxN8KwNTQnMzAuNiJF!5e0!3m2!1shu!2shu!4v1"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pekedli Bar & Lounge - Térkép"
              style={{ filter: 'invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.8)' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
