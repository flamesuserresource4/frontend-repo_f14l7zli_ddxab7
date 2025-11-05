import React from 'react';
import { Home, Phone, Info, Building2 } from 'lucide-react';

const NavItem = ({ href, label, Icon }) => (
  <a
    href={href}
    className="group inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-white/80 hover:text-white transition-colors"
  >
    <Icon className="h-4 w-4 text-teal-300/80 group-hover:text-teal-300 transition-colors" />
    <span>{label}</span>
  </a>
);

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="backdrop-blur-xl bg-white/10 border border-white/15 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 shadow-lg shadow-teal-500/30 grid place-items-center">
                <Home className="h-5 w-5 text-white" />
              </div>
              <div className="font-semibold tracking-tight text-white text-lg">
                Homenivas
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              <NavItem href="#about" label="About" Icon={Info} />
              <NavItem href="#services" label="Services" Icon={Building2} />
              <NavItem href="#contact" label="Contact" Icon={Phone} />
            </nav>

            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all"
            >
              Get Pre‑Approved
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
