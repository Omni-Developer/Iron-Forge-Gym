// About page: presents the brand story, values and milestones.
// Content is imported from siteData.js so the page stays clean and easy to update.

import { useState } from "react";
import CTA from "../components/CTA";
import PageHero from "../components/PageHero";
import { milestones, values } from "../data/siteData";

const About = () => {
  const [activeMilestone, setActiveMilestone] = useState(milestones.length - 1);

  return (
    <div className="bg-[#0d0d0d]">
      <PageHero
        eyebrow="About Us"
        title="The Story Behind"
        highlight="IronForge"
        description="A modern training community built around coaching, consistency and an enjoyable member experience."
        image="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:px-12 lg:grid-cols-2">
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop" alt="IronForge gym interior" className="w-full rounded-3xl object-cover" />
          <div className="absolute -bottom-5 right-3 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 p-5 text-center shadow-xl shadow-orange-500/20 sm:-right-5">
            <p className="text-3xl font-black text-white">12+</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">Years</p>
          </div>
        </div>
        <div>
          <p className="section-eyebrow">Who We Are</p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white md:text-5xl">More Than A Gym. <span className="text-orange-500">A Movement.</span></h2>
          <p className="mt-6 leading-relaxed text-gray-400">IronForge was founded in 2013 with a simple idea: create a place where beginners and experienced athletes can train with quality equipment, knowledgeable coaches and a supportive community.</p>
          <p className="mt-4 leading-relaxed text-gray-400">Today the brand combines structured programs, personal coaching and recovery options under one roof.</p>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#111111] px-5 py-20 sm:px-8 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {[
            { icon: "🎯", title: "Our Mission", text: "Help people build sustainable training habits with the coaching, tools and community they need." },
            { icon: "🚀", title: "Our Vision", text: "Make fitness feel accessible, motivating and sustainable for people at every stage." },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border-l-4 border-orange-500 bg-white/5 p-8">
              <h2 className="text-xl font-black uppercase text-white">{item.icon} {item.title}</h2>
              <p className="mt-3 leading-relaxed text-gray-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:px-12">
        <div className="text-center">
          <p className="section-eyebrow">Core Values</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-white md:text-5xl">What We <span className="text-orange-500">Stand For</span></h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article key={value.title} className="glass-card p-7 text-center transition hover:-translate-y-2 hover:border-orange-500/50">
              <span className="text-4xl">{value.icon}</span>
              <h2 className="mt-5 font-black uppercase text-white">{value.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{value.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#111111] px-5 py-20 sm:px-8 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="section-eyebrow">Our Journey</p>
            <h2 className="mt-3 text-3xl font-black uppercase text-white md:text-5xl">Milestones <span className="text-orange-500">Over Time</span></h2>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-4">
            {milestones.map((item, index) => (
              <button key={item.year} type="button" onClick={() => setActiveMilestone(index)} className={`rounded-2xl border p-4 text-left transition ${activeMilestone === index ? "border-orange-500 bg-orange-500/10" : "border-white/10 bg-white/5 hover:border-orange-500/40"}`}>
                <span className="text-xs font-bold text-orange-400">{item.year}</span>
                <span className="mt-1 block text-sm font-bold text-white">{item.title}</span>
              </button>
            ))}
          </div>
          <article className="glass-card mt-6 p-7">
            <p className="text-4xl font-black text-orange-500">{milestones[activeMilestone].year}</p>
            <h3 className="mt-2 text-2xl font-black uppercase text-white">{milestones[activeMilestone].title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">{milestones[activeMilestone].desc}</p>
          </article>
        </div>
      </section>
      <CTA />
    </div>
  );
};

export default About;
