// Reusable hero banner used by inner pages.
// It receives content as props so each page can keep its own message and image.

const PageHero = ({ eyebrow, title, highlight, description, image }) => (
  <section
    className="relative flex min-h-[42vh] items-center justify-center overflow-hidden"
    style={{ backgroundImage: `url("${image}")`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-[#0d0d0d]" />
    <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/35 via-transparent to-transparent" />
    <div className="cinematic-grid absolute inset-0 opacity-30" />
    <div className="relative z-10 max-w-4xl px-6 py-24 text-center">
      <p className="animate-fade-up text-xs font-bold uppercase tracking-[0.4em] text-orange-500">{eyebrow}</p>
      <h1 className="animate-fade-up delay-100 mt-3 text-4xl font-black uppercase text-white sm:text-5xl md:text-6xl">
        {title}{" "}
        <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">{highlight}</span>
      </h1>
      {description && <p className="animate-fade-up delay-200 mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">{description}</p>}
    </div>
  </section>
);

export default PageHero;
