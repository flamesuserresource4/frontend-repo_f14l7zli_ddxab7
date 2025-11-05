import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Shield, Wallet, Key, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-[#0a1420] via-[#0a1420] to-[#0b1a24] text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignettes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute right-10 top-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[32rem] rounded-[2rem] bg-gradient-to-r from-teal-300/10 via-emerald-300/10 to-cyan-300/10 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md">
            <Shield className="h-3.5 w-3.5 text-teal-300" /> Trusted by homebuyers nationwide
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Affordable, flexible home finance and property care in one place.
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Homenivas helps you secure the right home loan, find or rent property, protect your home, and design interiors that feel truly yours.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#apply"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 px-6 py-3 text-base font-semibold shadow-lg shadow-teal-500/30 hover:shadow-teal-500/45 transition-all"
            >
              Get Pre‑Approved
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-base font-semibold border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-colors"
            >
              Explore Services
            </a>
          </div>

          {/* Quick value props */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
            {[
              { icon: Wallet, text: 'Low rates & transparent fees' },
              { icon: Key, text: 'Fast approvals' },
              { icon: Shield, text: 'End‑to‑end guidance' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/80 backdrop-blur-md"
              >
                <item.icon className="h-4 w-4 text-teal-300" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating micro cards */}
        <div className="relative mt-16">
          <motion.div
            aria-hidden
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-4 top-0 hidden md:block"
          >
            <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-4 shadow-lg">
              <div className="text-xs text-white/70">Avg. approval time</div>
              <div className="mt-1 text-xl font-semibold text-white">48 hrs</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
