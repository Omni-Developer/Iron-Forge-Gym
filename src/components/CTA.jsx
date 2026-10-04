// Reusable conversion section. React Router keeps navigation client-side.

import { Link } from "react-router-dom";

const CTA = () => (
  <section className="relative overflow-hidden bg-[#0d0d0d] px-5 py-24 text-center sm:px-8 md:px-12">
    <div className="hero-orb hero-orb-one opacity-30" />
    <div className="relative z-10">
      <p className="section-eyebrow">Start Today</p>
      <h2 className="mt-3 text-4xl font-black uppercase text-white md:text-6xl">Ready To <span className="text-orange-500">Grow?</span></h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-400">Explore the programs, meet the trainers and choose the membership that fits your routine.</p>
      <Link to="/contact" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-10 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-orange-500/30 transition hover:-translate-y-1">Get Free Trial →</Link>
    </div>
  </section>
);

export default CTA;
