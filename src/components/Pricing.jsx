// Renders membership plans dynamically and lets the visitor select a plan.
// useState gives immediate interactive feedback without needing a backend.

import { useState } from "react";
import { Link } from "react-router-dom";
import { plans } from "../data/siteData";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("Standard");

  return (
    <section className="bg-[#111111] px-5 py-20 sm:px-8 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="section-eyebrow">Subscriptions</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-white md:text-5xl">Flexible <span className="text-orange-500">Plans</span></h2>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {plans.map((plan) => {
            const selected = selectedPlan === plan.name;
            return (
              <article key={plan.name} className={`relative rounded-3xl p-7 transition duration-500 hover:-translate-y-2 ${selected ? "border border-orange-500/70 bg-orange-500/10 shadow-2xl shadow-orange-500/10" : "border border-white/10 bg-white/5"}`}>
                {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-4 py-1 text-xs font-bold uppercase text-white">Most Popular</span>}
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-3"><span className="text-5xl font-black text-orange-500">${plan.price}</span><span className="text-sm text-gray-500">/month</span></p>
                <p className="mt-2 text-sm text-gray-400">{plan.desc}</p>
                <ul className="mt-6 space-y-3 text-sm text-gray-300">{plan.features.map((feature) => <li key={feature}>✔ <span className="ml-1">{feature}</span></li>)}</ul>
                <button type="button" onClick={() => setSelectedPlan(plan.name)} className="mt-7 w-full rounded-full border border-orange-500/30 py-3 text-sm font-bold uppercase tracking-wider text-orange-400 transition hover:bg-orange-500 hover:text-white">{selected ? "Selected" : "Choose Plan"}</button>
              </article>
            );
          })}
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          Selected plan: <span className="font-bold text-orange-400">{selectedPlan}</span>. <Link to="/contact" className="font-bold text-white hover:text-orange-400">Continue to contact →</Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
