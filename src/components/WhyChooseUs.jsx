// Explains the gym's differentiators and maps over feature data dynamically.

import { features } from "../data/siteData";

const WhyChooseUs = () => (
  <section className="bg-[#0d0d0d] px-5 py-20 sm:px-8 md:px-12">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
      <div className="overflow-hidden rounded-3xl">
        <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop" alt="Personal training" className="h-full min-h-80 w-full object-cover transition duration-700 hover:scale-105" />
      </div>
      <div>
        <p className="section-eyebrow">Why Choose Us</p>
        <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white md:text-5xl">A Better <span className="text-orange-500">Training Experience</span></h2>
        <div className="mt-8 space-y-4">
          {features.map((feature) => (
            <article key={feature.title} className="glass-card group p-5 transition hover:border-orange-500/50">
              <h3 className="flex items-center justify-between font-bold text-white">{feature.title}<span className="text-orange-500 transition group-hover:translate-x-1">↗</span></h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-400">{feature.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
