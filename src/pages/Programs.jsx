// Programs page: filters the program dataset with useState and renders cards with map().
// The active category is UI state, while the actual program content stays in siteData.js.

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import PageHero from "../components/PageHero";
import { programs } from "../data/siteData";

const categories = ["All", ...new Set(programs.map((program) => program.category))];

const Programs = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPrograms = useMemo(
    () => activeCategory === "All" ? programs : programs.filter((program) => program.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="bg-[#0d0d0d]">
      <PageHero
        eyebrow="Our Programs"
        title="Train"
        highlight="Your Way"
        description="Browse structured sessions for strength, cardio, classes and recovery."
        image="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:px-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition ${activeCategory === category ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30" : "border border-white/10 text-gray-400 hover:border-orange-500/50 hover:text-orange-400"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Showing <span className="font-bold text-orange-400">{filteredPrograms.length}</span> programs in <span className="text-white">{activeCategory}</span>.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPrograms.map((program) => (
            <article key={program.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-500 hover:-translate-y-2 hover:border-orange-500/50">
              <div className="relative h-56 overflow-hidden">
                <img src={program.img} alt={program.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase text-white">{program.category}</span>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 text-xs text-gray-200">
                  <span className="rounded-full bg-black/40 px-3 py-1 backdrop-blur">⏱ {program.duration}</span>
                  <span className="rounded-full bg-black/40 px-3 py-1 backdrop-blur">◈ {program.level}</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-black uppercase text-white">{program.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{program.desc}</p>
                <Link to="/contact" className="mt-5 inline-flex text-sm font-bold uppercase tracking-wider text-orange-500 transition group-hover:translate-x-1">Join Program →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#111111] px-5 py-16 sm:px-8 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl border border-orange-500/20 bg-orange-500/5 p-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-black uppercase text-white">Not sure what fits?</h2>
            <p className="mt-2 text-sm text-gray-400">Meet the coaching team and ask about a starting point.</p>
          </div>
          <Link to="/trainer" className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-7 py-3 text-sm font-bold uppercase text-white">Meet Trainers</Link>
        </div>
      </section>
      <CTA />
    </div>
  );
};

export default Programs;
