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
    // Form submission logic
  };

  return (
    <section
      id="foglalas"
      className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-primary to-secondary-dark"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={staggerItem}
            className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold mb-4"
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
          className="bg-surface/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-white/5"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-text-secondary mb-2"
              >
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
                className="w-full bg-transparent border-b border-white/20 focus:border-accent text-text-primary py-3 outline-none transition-colors duration-300 placeholder:text-text-muted"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-text-secondary mb-2"
              >
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
                className="w-full bg-transparent border-b border-white/20 focus:border-accent text-text-primary py-3 outline-none transition-colors duration-300 placeholder:text-text-muted"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm text-text-secondary mb-2"
              >
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
                className="w-full bg-transparent border-b border-white/20 focus:border-accent text-text-primary py-3 outline-none transition-colors duration-300 placeholder:text-text-muted"
              />
            </div>

            <div>
              <label
                htmlFor="guests"
                className="block text-sm text-text-secondary mb-2"
              >
                Vendégszám
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 focus:border-accent text-text-primary py-3 outline-none transition-colors duration-300 appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-surface text-text-muted">
                  Válassz...
                </option>
                {[1, 2, 3, 4, 5, '6+'].map((n) => (
                  <option key={n} value={n} className="bg-surface text-text-primary">
                    {n} fő
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm text-text-secondary mb-2"
              >
                Dátum
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 focus:border-accent text-text-primary py-3 outline-none transition-colors duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="block text-sm text-text-secondary mb-2"
              >
                Időpont
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 focus:border-accent text-text-primary py-3 outline-none transition-colors duration-300 appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-surface text-text-muted">
                  Válassz...
                </option>
                {['16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'].map(
                  (t) => (
                    <option key={t} value={t} className="bg-surface text-text-primary">
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
            className="w-full bg-accent text-primary py-4 text-lg font-medium tracking-wider uppercase hover:bg-accent-light transition-colors duration-300 shadow-lg shadow-accent/20"
          >
            Asztal foglalása
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
