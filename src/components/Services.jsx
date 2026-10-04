// Displays the main service categories. Data lives outside the component so
// adding a service only requires adding one object to siteData.js.

import { services } from "../data/siteData";
import { Link } from "react-router-dom";

const Services = () => (
  <section className="bg-[#111111] px-5 py-20 sm:px-8 md:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="section-eyebrow">What We Offer</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-white md:text-5xl">Train With <span className="text-orange-500">Purpose</span></h2>
        </div>
        <Link to="/programs" className="text-sm font-bold uppercase tracking-wider text-orange-400 hover:text-orange-300">View all programs →</Link>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article key={service.title} className="glass-card group p-7 transition hover:-translate-y-2 hover:border-orange-500/50">
            <span className="text-4xl">{service.icon}</span>
            <h3 className="mt-6 font-black uppercase tracking-wide text-white">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">{service.desc}</p>
            <Link to="/programs" className="mt-5 inline-block text-sm font-bold text-orange-500 transition group-hover:translate-x-1">Explore →</Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
