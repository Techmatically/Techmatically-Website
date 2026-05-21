export const metadata = {
  title: "Web Development",
  description: "Modern, scalable, and high-performance web development services.",
};

import TechSlider from "./TechSlider";

// `TechSlider` is a client component moved to ./TechSlider

export default function WebDevPage() {
  const services = [
    {
      title: "Custom Websites",
      desc: "Tailor-made websites built to reflect your brand, goals, and user expectations — every detail intentional.",
    },
    {
      title: "Ecommerce Websites",
      desc: "High-converting online stores with smooth checkout flows, product management, and real-time data.",
    },
    {
      title: "Landing Pages",
      desc: "Focused, fast, and conversion-optimised pages built to turn visitors into customers. Shipped in days.",
    },
  ];

  const process = [
    "Understanding your vision & requirements",
    "Designing intuitive and modern UI/UX",
    "Developing scalable and clean code",
    "Testing, optimizing, and deploying",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">

        {/* HERO */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Web Development
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We build fast, scalable, and visually stunning websites that don&apos;t just look good — they perform.
          </p>
        </section>

        {/* INTRO CARD */}
        <section className="mb-16 p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur">
          <p className="text-lg leading-relaxed text-muted-foreground">
            From simple landing pages to complex web applications, we focus on delivering
            high-quality solutions that align with your business goals and user expectations.
          </p>
        </section>

        {/* SERVICES */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">What We Offer</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:scale-[1.02]"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Our Process</h2>
          <div className="grid gap-4">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl border border-black/5 dark:border-white/10"
              >
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-black text-white text-sm font-medium dark:bg-white dark:text-black flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK — Infinite Slider */}
        <section className="mb-20 relative left-1/2 right-1/2 w-screen -translate-x-1/2">
  <div className="px-6 md:px-12">
    <h2 className="text-2xl font-semibold mb-8 max-w-6xl mx-auto">
      Technologies We Use
    </h2>
  </div>

  <TechSlider />
</section>

        {/* CTA */}
        <section className="text-center p-10 rounded-2xl border border-black/10 dark:border-white/10 bg-black text-white dark:bg-white dark:text-black">
          <h2 className="text-2xl font-semibold mb-4">
            Let&apos;s Build Something Great
          </h2>
          <p className="mb-6 text-sm opacity-80">
            Have a project in mind? Let&apos;s turn your ideas into reality.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-lg bg-white text-black font-medium hover:opacity-90 transition dark:bg-black dark:text-white"
          >
            Get in Touch
          </a>
        </section>

      </div>
    </main>
  );
}