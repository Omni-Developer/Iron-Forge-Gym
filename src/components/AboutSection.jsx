// Introduces the gym and dynamically renders its headline statistics.
// The play button is intentionally visual; a real video can be connected later.

import { stats } from "../data/siteData";

const AboutSection = () => (
  <section className="bg-[#0d0d0d] px-5 py-20 sm:px-8 md:px-12">
    <div className="mx-auto max-w-7xl">
      <p className="section-eyebrow">About Us</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-black uppercase leading-tight text-white sm:text-4xl md:text-5xl">
        Your Fitness Journey <span className="text-orange-500">Starts Here</span>
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
        IronForge combines modern equipment, expert coaching and a welcoming community to make structured training feel motivating and accessible.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card p-5">
            <p className="text-3xl font-black text-orange-500 md:text-5xl">{stat.value}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="group relative mt-12 overflow-hidden rounded-3xl">
        <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2070&auto=format&fit=crop" alt="Inside IronForge gym" className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 md:h-96" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-5 flex items-center gap-4 text-white md:left-8">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 shadow-xl shadow-orange-500/30">▶</span>
          <span className="text-sm font-semibold uppercase tracking-widest">Take A Tour Of Our Gym</span>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
