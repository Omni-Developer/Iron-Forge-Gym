// Shared footer: provides brand context and dynamic navigation links.
// Keeping the links in an array prevents repetitive markup and makes updates easy.

import { Link } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Trainers", to: "/trainer" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => (
  <footer className="bg-black text-gray-400">
    <div className="h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500" />
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-4 md:px-12">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-black tracking-[0.15em] text-white">IRON<span className="text-orange-500">FORGE</span></h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed">A cinematic fitness website concept showing programs, trainers, membership plans and contact interactions in React.</p>
        <div className="mt-6 flex gap-3">
          {["📷", "▶", "𝕏"].map((icon) => <a key={icon} href="#" aria-label="Social link" className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/30 text-orange-400 transition hover:bg-orange-500 hover:text-white">{icon}</a>)}
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-orange-400">Quick Links</h3>
        <ul className="space-y-2 text-sm">{links.map((link) => <li key={link.to}><Link to={link.to} className="transition hover:text-orange-400">{link.label}</Link></li>)}</ul>
      </div>
      <div>
        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-orange-400">Contact</h3>
        <ul className="space-y-2 text-sm"><li>📍 123 Muscle Street</li><li>📞 +1 (555) 123-4567</li><li>✉️ train@ironforge.com</li><li>🕐 Open 24/7</li></ul>
      </div>
    </div>
    <div className="border-t border-white/10 py-5 text-center text-xs text-gray-500">© {new Date().getFullYear()} IronForge Gym. All rights reserved.</div>
  </footer>
);

export default Footer;
