'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function Reservation() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', guests: '', date: '', time: '' });
  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const inp = 'w-full bg-white/[0.03] border border-white/[0.06] rounded-xl focus:border-accent/50 focus:bg-accent/5 text-text-primary py-3.5 px-4 outline-none transition-all duration-300 placeholder:text-text-muted text-base';

  return (
    <section id="foglalas" className="section-padding relative noise-overlay overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary-dark/30 to-secondary-dark z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-12 md:mb-14">
          <motion.div variants={staggerItem} className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
            <span className="text-accent text-xs font-medium tracking-[0.25em] uppercase">Foglalás</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-semibold mb-4 text-glow">Foglalj asztalt</motion.h2>
          <motion.p variants={staggerItem} className="text-text-secondary text-base md:text-lg">Garantáld a helyed egy felejthetetlen estéhez</motion.p>
        </motion.div>

        <motion.form variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
          onSubmit={(e) => e.preventDefault()} className="max-w-2xl mx-auto card-3d p-8 md:p-12 !rounded-3xl">
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-5 mb-10">
            {[
              { id: 'name', label: 'Név', type: 'text', ph: 'Teljes neved' },
              { id: 'email', label: 'Email', type: 'email', ph: 'email@pelda.hu' },
              { id: 'phone', label: 'Telefon', type: 'tel', ph: '+36 30 123 4567' },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="block text-[10px] uppercase tracking-widest text-text-muted mb-2 font-medium">{f.label}</label>
                <input type={f.type} id={f.id} name={f.id} placeholder={f.ph} value={form[f.id as keyof typeof form]} onChange={set} required className={inp} />
              </div>
            ))}
            <div>
              <label htmlFor="guests" className="block text-[10px] uppercase tracking-widest text-text-muted mb-2 font-medium">Vendégszám</label>
              <select id="guests" name="guests" value={form.guests} onChange={set} required className={`${inp} appearance-none cursor-pointer`}>
                <option value="" disabled>Válassz...</option>
                {[1,2,3,4,5,'6+'].map((n) => <option key={n} value={n}>{n} fő</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="date" className="block text-[10px] uppercase tracking-widest text-text-muted mb-2 font-medium">Dátum</label>
              <input type="date" id="date" name="date" value={form.date} onChange={set} required className={`${inp} cursor-pointer`} />
            </div>
            <div>
              <label htmlFor="time" className="block text-[10px] uppercase tracking-widest text-text-muted mb-2 font-medium">Időpont</label>
              <select id="time" name="time" value={form.time} onChange={set} required className={`${inp} appearance-none cursor-pointer`}>
                <option value="" disabled>Válassz...</option>
                {['16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'].map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <button type="submit" className="btn-primary w-full !py-4 !text-base">Asztal foglalása</button>
        </motion.form>
      </div>
    </section>
  );
}
