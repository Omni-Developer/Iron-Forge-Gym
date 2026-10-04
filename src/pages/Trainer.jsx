// Trainers page: lets visitors search and filter the trainer dataset.
// useState manages the search/filter controls; map() renders the current results dynamically.

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import PageHero from "../components/PageHero";
import { trainers } from "../data/siteData";

const Trainer = () => {
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("All");

  const specialties = ["All", ...new Set(trainers.flatMap((trainer) => trainer.tags))];

  const filteredTrainers = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return trainers.filter((trainer) => {
      const matchesText = !normalized || `${trainer.name} ${trainer.role} ${trainer.tags.join(" ")}`.toLowerCase().includes(normalized);
      const matchesSpecialty = specialty === "All" || trainer.tags.includes(specialty);
      return matchesText && matchesSpecialty;
    });
  }, [query, specialty]);

  return (
    <div className="bg-[#0d0d0d]">
      <PageHero
        eyebrow="Our Team"
        title="Meet Your"
        highlight="Trainers"
        description="Find a coach by name, role or specialty and explore the training styles available."
        image="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:px-12">
        <div className="grid gap-4 md:grid-cols-[1fr_auto]">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search trainers or specialties..." aria-label="Search trainers" className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none transition focus:border-orange-500" />
          <select value={specialty} onChange={(event) => setSpecialty(event.target.value)} aria-label="Filter trainers by specialty" className="rounded-2xl border border-white/10 bg-[#111111] px-5 py-3 text-sm text-white outline-none focus:border-orange-500">
            {specialties.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>

        <p className="mt-5 text-sm text-gray-500">{filteredTrainers.length} trainer{filteredTrainers.length === 1 ? "" : "s"} found.</p>

        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {filteredTrainers.map((trainer) => (
            <article key={trainer.name} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-500 hover:-translate-y-2 hover:border-orange-500/50">
              <div className="relative h-72 overflow-hidden">
                <img src={trainer.img} alt={trainer.name} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">{trainer.exp}</span>
                <div className="absolute bottom-0 p-5">
                  <h2 className="text-xl font-black uppercase text-white">{trainer.name}</h2>
                  <p className="text-sm text-orange-400">{trainer.role}</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">{trainer.tags.map((tag) => <span key={tag} className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs text-orange-400">{tag}</span>)}</div>
                <Link to="/contact" className="mt-5 inline-block text-xs font-bold uppercase tracking-wider text-white hover:text-orange-400">Book Consultation →</Link>
              </div>
            </article>
          ))}
        </div>

        {filteredTrainers.length === 0 && (
          <div className="glass-card mt-8 p-10 text-center">
            <p className="font-bold text-white">No trainers match those filters.</p>
            <button type="button" onClick={() => { setQuery(""); setSpecialty("All"); }} className="mt-3 text-sm font-bold text-orange-400">Reset filters</button>
          </div>
        )}
      </section>
      <CTA />
    </div>
  );
};

export default Trainer;
