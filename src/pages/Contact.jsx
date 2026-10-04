// Contact page: manages form fields, submission feedback and an interactive FAQ.
// useState keeps the form controlled so the UI always reflects the current values.

import { useState } from "react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import PageHero from "../components/PageHero";
import { contactInfo, faqs } from "../data/siteData";

const initialForm = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Demo-only behavior: replace this with an API/email service in production.
    console.log("IronForge contact form:", form);
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div className="bg-[#0d0d0d]">
      <PageHero
        eyebrow="Get In Touch"
        title="Contact"
        highlight="Us"
        description="Ask about memberships, programs, trainers or your first visit."
        image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => (
            <article key={item.title} className="glass-card p-6 text-center transition hover:-translate-y-2 hover:border-orange-500/50">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-2xl">{item.icon}</span>
              <h2 className="mt-4 font-black uppercase text-white">{item.title}</h2>
              {item.lines.map((line) => <p key={line} className="mt-1 text-sm text-gray-400">{line}</p>)}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 sm:px-8 md:px-12 lg:grid-cols-2">
        <div>
          <p className="section-eyebrow">Send A Message</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-white md:text-4xl">Drop Us A <span className="text-orange-500">Line</span></h2>
          <p className="mt-3 text-sm text-gray-400">This demo form validates in the browser and shows a success state. Connect it to your backend when ready.</p>

          {submitted && <div role="status" className="mt-6 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300">Thanks! Your message has been captured by this demo form.</div>}

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="form-input" />
              <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="form-input" />
            </div>
            <input required name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="form-input" />
            <textarea required rows="7" name="message" value={form.message} onChange={handleChange} placeholder="Your Message..." className="form-input resize-none" />
            <button type="submit" className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5">Send Message →</button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="relative min-h-80 overflow-hidden rounded-3xl border border-white/10">
            <iframe title="IronForge location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799!2d-74.259!3d40.6976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1614824796800!5m2!1sen!2sus" className="absolute inset-0 h-full w-full grayscale" loading="lazy" style={{ border: 0 }} />
          </div>
          <div className="glass-card p-6">
            <h2 className="font-black uppercase text-white">Prefer to browse first?</h2>
            <p className="mt-2 text-sm text-gray-400">Explore the programs or meet the trainers before contacting the team.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/programs" className="rounded-full border border-white/10 px-5 py-2 text-sm font-bold text-white hover:border-orange-500 hover:text-orange-400">Programs</Link>
              <Link to="/trainer" className="rounded-full border border-white/10 px-5 py-2 text-sm font-bold text-white hover:border-orange-500 hover:text-orange-400">Trainers</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-5 py-20 sm:px-8 md:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="mt-3 text-3xl font-black uppercase text-white md:text-4xl">Common <span className="text-orange-500">Questions</span></h2>
          </div>
          <div className="mt-9 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className={`rounded-2xl border bg-white/5 transition ${isOpen ? "border-orange-500/50" : "border-white/10"}`}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-white">
                    {faq.q}<span className={`text-orange-500 transition ${isOpen ? "rotate-45" : ""}`}>＋</span>
                  </button>
                  {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-gray-400">{faq.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
};

export default Contact;
