// Home page: combines the reusable hero, service, proof, pricing and CTA sections.
// Keeping sections as components makes this page easy for developers to scan and maintain.

import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";

const Home = () => (
  <div className="bg-[#0d0d0d]">
    <Header />
    <AboutSection />
    <Services />
    <WhyChooseUs />
    <Pricing />
    <CTA />
  </div>
);

export default Home;
