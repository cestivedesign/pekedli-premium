'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { staggerContainer, staggerItem } from '@/lib/animations';

const footerLinks = [
  { href: '#hero', label: 'Nyitólap' },
  { href: '#kinalat', label: 'Kínálatunk' },
  { href: '#galeria', label: 'Galéria' },
  { href: '#foglalas', label: 'Foglalás' },
];

function SocialIcon({ d }: { d: string }) {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

const socials = [
  { label: 'Facebook', d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { label: 'Instagram', d: 'M2 2h20v20H2zM16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' },
  { label: 'TikTok', d: 'M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary-dark">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="container-main pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-14">
          <motion.div variants={staggerItem} className="space-y-4">
            <Image src="https://pekedli.hu/wp-content/uploads/2024/08/logo_uj_vilagos.png" alt="Pekedli" width={140} height={48} className="h-10 w-auto object-contain" />
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">Prémium gin bár és lounge Veszprém szívében. Ahol minden korty egy történet.</p>
          </motion.div>
          <motion.div variants={staggerItem} className="space-y-4">
            <h3 className="font-heading text-base font-semibold">Navigáció</h3>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.map((l) => <a key={l.href} href={l.href} className="text-text-secondary hover:text-accent text-sm transition-colors w-fit">{l.label}</a>)}
            </nav>
          </motion.div>
          <motion.div variants={staggerItem} className="space-y-4">
            <h3 className="font-heading text-base font-semibold">Kapcsolat</h3>
            <p className="text-sm text-text-secondary">8200 Veszprém</p>
            <p className="text-sm text-text-secondary">Rákóczi Ferenc utca 1</p>
            <div className="flex gap-4 pt-2">
              {socials.map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="text-text-secondary hover:text-accent transition-all duration-300 hover:scale-110 inline-flex">
                  <SocialIcon d={s.d} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div variants={staggerItem} className="border-t border-white/10 pt-10 text-center">
          <p className="text-sm text-text-muted">&copy; 2023&ndash;2026 Pekedli Bar &amp; Lounge. Minden jog fenntartva.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
