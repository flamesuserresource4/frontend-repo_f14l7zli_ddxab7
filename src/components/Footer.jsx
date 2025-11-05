import React from 'react';
import { Home, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0c202a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 grid place-items-center shadow-lg shadow-teal-500/30">
                <Home className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-semibold">Homenivas</div>
                <p className="text-white/70 text-sm">Affordable & Flexible Home Finance</p>
              </div>
            </div>

            <div className="grid gap-2 text-sm text-white/80">
              <a href="mailto:care@homenivas.com" className="inline-flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 text-teal-300" /> care@homenivas.com
              </a>
              <a href="tel:+910000000000" className="inline-flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 text-teal-300" /> +91 00000 00000
              </a>
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/60">
            © {new Date().getFullYear()} Homenivas. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
