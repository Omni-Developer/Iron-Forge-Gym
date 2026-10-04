// Renders the cinematic landing-page hero and the main conversion actions.
// The service pills are generated from an array with map(), keeping the markup dynamic.

import { Link } from "react-router-dom";

const services = ["Personal Training", "Strength", "Group Classes", "Swimming", "Cardio", "Functional"];

const Header = () => (
  <header className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-[#0d0d0d]">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/30 via-transparent to-transparent" />
    </div>

    <div className="cinematic-grid absolute inset-0 opacity-25" />
    <div className="hero-orb hero-orb-one" />
    <div className="hero-orb hero-orb-two" />

    <div className="relative z-10 mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl flex-col justify-center px-5 py-24 sm:px-8 md:px-12">
      <span className="animate-fade-up w-fit rounded-full border border-orange-500/50 bg-orange-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-400 backdrop-blur-sm">
        #1 Gym In The City
      </span>
      <h1 className="animate-fade-up delay-100 mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
        Push Your
        <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Limits With Us</span>
      </h1>
      <p className="animate-fade-up delay-200 mt-6 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
        Train with expert coaches, flexible programs and a community built around consistent progress.
      </p>

      <div className="animate-fade-up delay-300 mt-8 flex flex-wrap gap-4">
        <Link to="/programs" className="group rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-orange-500/30 transition hover:-translate-y-1 hover:shadow-orange-500/50">
          Explore Programs <span className="ml-2 transition group-hover:translate-x-1">→</span>
        </Link>
        <Link to="/about" className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition hover:border-orange-500/50 hover:text-orange-400">
          Our Story
        </Link>
      </div>

      <div className="animate-fade-up delay-400 mt-10 flex flex-wrap gap-3">
        {services.map((service) => (
          <span key={service} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300 backdrop-blur-sm transition hover:border-orange-500/50 hover:text-orange-400">
            {service}
          </span>
        ))}
      </div>
    </div>
  </header>
);

export default Header;
