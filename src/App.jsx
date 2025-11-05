import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#0a1420] text-white selection:bg-teal-400/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        {/* About */}
        <section id="about" className="relative py-20 bg-gradient-to-b from-[#0b1a24] to-[#0b1f29]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="mx-auto h-72 max-w-7xl rounded-[2rem] bg-gradient-to-r from-emerald-300/10 via-teal-300/10 to-cyan-300/10 blur-2xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">A partner for every step of home ownership</h2>
                  <p className="mt-3 text-white/80 leading-relaxed">
                    We combine finance expertise with real‑estate know‑how to make home buying simple. Our advisors help you compare options, complete paperwork, and move in with confidence — all with transparent pricing and zero pressure.
                  </p>
                </div>
                <ul className="grid gap-3 text-sm text-white/80">
                  <li className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">SEBI‑grade disclosures and lender‑neutral guidance</li>
                  <li className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">10+ top banking partners and flexible repayment plans</li>
                  <li className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">Verified listings and end‑to‑end property support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Services />

        {/* Apply anchor section */}
        <section id="apply" className="relative py-16 bg-gradient-to-b from-[#0b1f29] to-[#0c202a]">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl text-center">
              <h3 className="text-2xl font-semibold">Ready to check your eligibility?</h3>
              <p className="mt-2 text-white/80">Share a few details and get a personalized estimate in minutes — no impact on credit score.</p>
              <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="#contact" className="rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 px-6 py-3 font-semibold shadow-lg shadow-teal-500/30 hover:shadow-teal-500/45 transition-all">Talk to an advisor</a>
                <a href="#services" className="rounded-2xl px-6 py-3 font-semibold border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-colors">Explore plans</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
