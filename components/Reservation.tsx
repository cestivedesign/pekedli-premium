'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputClasses =
    'w-full bg-transparent border-b-2 border-white/10 focus:border-accent text-text-primary py-3 outline-none transition-colors duration-300 placeholder:text-text-muted text-base';

  return (
    <section
      id="foglalas"
      className="py-32 md:py-40 lg:py-48 bg-gradient-to-b from-primary to-secondary-dark"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <motion.span
            variants={staggerItem}
            className="block text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4"
          >
            Foglalás
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4"
          >
            Foglalj asztalt
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-text-secondary text-lg"
          >
            Garantáld a helyed egy felejthetetlen estéhez
          </motion.p>
        </motion.div>

        <motion.form
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          onSubmit={handleSubmit}
          className="bg-surface/60 backdrop-blur-sm p-8 md:p-14 rounded-xl border border-white/5"
        >
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mb-12">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest text-text-muted mb-3 font-medium">
                Név
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Teljes neved"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest text-text-muted mb-3 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@pelda.hu"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-text-muted mb-3 font-medium">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+36 30 123 4567"
                value={formData.phone}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="guests" className="block text-xs uppercase tracking-widest text-text-muted mb-3 font-medium">
                Vendégszám
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className={`${inputClasses} appearance-none cursor-pointer`}
              >
                <option value="" disabled>
                  Válassz...
                </option>
                {[1, 2, 3, 4, 5, '6+'].map((n) => (
                  <option key={n} value={n}>
                    {n} fő
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-xs uppercase tracking-widest text-text-muted mb-3 font-medium">
                Dátum
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className={`${inputClasses} cursor-pointer`}
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-xs uppercase tracking-widest text-text-muted mb-3 font-medium">
                Időpont
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className={`${inputClasses} appearance-none cursor-pointer`}
              >
                <option value="" disabled>
                  Válassz...
                </option>
                {['16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'].map(
                  (t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-accent text-primary py-5 text-base md:text-lg font-semibold tracking-wider uppercase hover:bg-accent-light transition-colors duration-300 shadow-lg shadow-accent/20 rounded-sm"
          >
            Asztal foglalása
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
