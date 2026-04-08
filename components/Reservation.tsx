'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function Reservation() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', guests: '', date: '', time: '' });
  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const inp = 'w-full bg-white/[0.03] border border-white/[0.06] rounded-xl focus:border-accent/50 focus:bg-accent/5 text-text-primary py-5 px-6 outline-none transition-all duration-300 placeholder:text-text-muted text-base md:text-lg';

  return (
    <section id="foglalas" className="section-padding relative noise-overlay overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary-dark/30 to-secondary-dark z-0" />
      <div className="container-main relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="text-center mb-16 md:mb-24">
          <motion.div variants={staggerItem} className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-4">
            <span className="text-accent text-xs md:text-sm tracking-[0.2em] uppercase">Foglalás</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="font-heading font-semibold mb-8 text-glow" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Foglalj asztalt</motion.h2>
          <motion.p variants={staggerItem} className="text-text-secondary text-base md:text-lg">Garantáld a helyed egy felejthetetlen estéhez</motion.p>
        </motion.div>

        <motion.form variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          onSubmit={(e) => e.preventDefault()} className="w-full max-w-5xl mx-auto card-3d p-14 md:p-20 lg:p-24 !rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14 mb-20">
            {[
              { id: 'name', label: 'Név', type: 'text', ph: 'Teljes neved' },
              { id: 'email', label: 'Email', type: 'email', ph: 'email@pelda.hu' },
              { id: 'phone', label: 'Telefon', type: 'tel', ph: '+36 30 123 4567' },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="block text-xs md:text-sm tracking-[0.15em] uppercase text-text-muted mb-5 font-medium">{f.label}</label>
                <input type={f.type} id={f.id} name={f.id} placeholder={f.ph} value={form[f.id as keyof typeof form]} onChange={set} required className={inp} />
              </div>
            ))}
            <div>
              <label htmlFor="guests" className="block text-xs md:text-sm tracking-[0.15em] uppercase text-text-muted mb-5 font-medium">Vendégszám</label>
              <select id="guests" name="guests" value={form.guests} onChange={set} required className={`${inp} appearance-none cursor-pointer`}>
                <option value="" disabled>Válassz...</option>
                {[1,2,3,4,5,'6+'].map((n) => <option key={n} value={n}>{n} fő</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="date" className="block text-xs md:text-sm tracking-[0.15em] uppercase text-text-muted mb-5 font-medium">Dátum</label>
              <input type="date" id="date" name="date" value={form.date} onChange={set} required className={`${inp} cursor-pointer`} />
            </div>
            <div>
              <label htmlFor="time" className="block text-xs md:text-sm tracking-[0.15em] uppercase text-text-muted mb-5 font-medium">Időpont</label>
              <select id="time" name="time" value={form.time} onChange={set} required className={`${inp} appearance-none cursor-pointer`}>
                <option value="" disabled>Válassz...</option>
                {['16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'].map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <button type="submit" className="btn-primary w-full !py-6 !text-sm md:!text-base">Asztal foglalása</button>
        </motion.form>
      </div>
    </section>
  );
}
