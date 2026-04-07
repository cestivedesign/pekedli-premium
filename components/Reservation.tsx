'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function Reservation() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', guests: '', date: '', time: '' });
  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const inp = 'w-full bg-transparent border-b-2 border-white/10 focus:border-accent text-text-primary py-3 outline-none transition-colors duration-300 placeholder:text-text-muted text-base';

  return (
    <section id="foglalas" className="section-padding bg-gradient-to-b from-primary to-secondary-dark">
      <div className="container-main">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-12 md:mb-14">
          <motion.span variants={staggerItem} className="block text-accent uppercase tracking-[0.25em] text-xs font-medium mb-5">Foglalás</motion.span>
          <motion.h2 variants={staggerItem} className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-semibold mb-4">Foglalj asztalt</motion.h2>
          <motion.p variants={staggerItem} className="text-text-secondary text-base md:text-lg">Garantáld a helyed egy felejthetetlen estéhez</motion.p>
        </motion.div>

        <motion.form variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
          onSubmit={(e) => e.preventDefault()} className="max-w-2xl mx-auto bg-surface/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/[0.06]">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-7 mb-10">
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
          <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="w-full bg-accent text-primary py-4 text-base font-semibold tracking-wider uppercase hover:bg-accent-light transition-colors duration-300 shadow-lg shadow-accent/20">
            Asztal foglalása
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
