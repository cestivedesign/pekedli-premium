'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const footerLinks = [
  { href: '#hero', label: 'Nyitólap' },
  { href: '#kinalat', label: 'Kínálatunk' },
  { href: '#galeria', label: 'Galéria' },
  { href: '#foglalas', label: 'Foglalás' },
];

function FacebookIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function TikTokIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>
  );
}

const socialLinks = [
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: TikTokIcon, href: '#', label: 'TikTok' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t border-white/5">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20"
      >
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div variants={staggerItem} className="space-y-4">
            <Image
              src="https://pekedli.hu/wp-content/uploads/2024/08/logo_uj_vilagos.png"
              alt="Pekedli Bar & Lounge"
              width={160}
              height={56}
              className="h-12 w-auto object-contain"
            />
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Prémium gin bár és lounge Veszprém szívében. Ahol minden korty egy
              történet.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="space-y-4">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
              Navigáció
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-text-secondary hover:text-text-primary text-sm transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={staggerItem} className="space-y-4">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
              Kapcsolat
            </h3>
            <div className="space-y-3 text-sm text-text-secondary">
              <p>8200 Veszprém</p>
              <p>Rákóczi Ferenc utca 1</p>
            </div>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-text-secondary hover:text-accent transition-colors duration-300 hover:scale-110 inline-block"
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={staggerItem}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-sm text-text-muted">
            © 2023–2026 Pekedli Bar & Lounge. Minden jog fenntartva.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
