import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Home, Shield, Paintbrush, ChevronRight, Key } from 'lucide-react';

const services = [
  {
    icon: Wallet,
    title: 'Affordable Home Loans',
    desc: 'Tailored EMIs, competitive rates, and transparent fees. From first‑time buyer to balance transfer, we’ve got you.'
  },
  {
    icon: Home,
    title: 'Property Buy & Rent',
    desc: 'Curated listings, site visits, and negotiation support to find your next home faster and smarter.'
  },
  {
    icon: Shield,
    title: 'Home Insurance',
    desc: 'Protect your home and belongings with comprehensive coverage and quick, hassle‑free claims guidance.'
  },
  {
    icon: Paintbrush,
    title: 'Interior Design',
    desc: 'Warm, functional spaces crafted by experts. Modular kitchens, wardrobes, and turnkey makeovers.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-[#0b1a24] to-[#0c202a] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto h-80 max-w-7xl rounded-[2rem] bg-gradient-to-r from-teal-300/10 via-cyan-300/10 to-emerald-300/10 blur-2xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md">
            <Key className="h-3.5 w-3.5 text-teal-300" /> Your home journey, simplified
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            End‑to‑end support you can trust
          </h2>
          <p className="mt-3 text-white/80">
            From financing to moving‑in, we stay with you at every step. Choose a service or bundle them for the best value.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="group relative rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 grid place-items-center shadow-lg shadow-teal-500/30">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/80 leading-relaxed">
                {desc}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-teal-300/90 group-hover:text-teal-300">
                Learn more <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white/5 to-transparent" />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex flex-col sm:flex-row gap-3">
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 px-6 py-3 text-base font-semibold shadow-lg shadow-teal-500/30 hover:shadow-teal-500/45 transition-all"
          >
            Start your application
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-base font-semibold border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-colors"
          >
            Talk to an expert
          </a>
        </div>
      </div>
    </section>
  );
}
