export const metadata = {
  title: "App Development",
  description: "High-performance mobile and web applications built for scale.",
};

export default function AppDevPage() {
  const services = [ 
    {
      title: "iOS & Android Apps",
      desc: "Native and cross-platform mobile apps built for performance and seamless user experience.",
    },
    {
      title: "Cross-Platform Solutions",
      desc: "Single codebase apps using modern frameworks to reduce cost and development time.",
    },
    {
      title: "UI/UX for Mobile",
      desc: "Intuitive and engaging mobile-first designs that users love to interact with.",
    },
    {
      title: "App Maintenance",
      desc: "Continuous updates, bug fixes, and performance improvements to keep your app running smoothly.",
    },
  ];

  const process = [
    "Understanding your app idea & business goals",
    "Wireframing and UI/UX design",
    "Development and integration",
    "Testing, launch, and ongoing support",
  ];

  const tech = [
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "Firebase",
    "REST APIs",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">

        {/* HERO */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            App Development
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We build powerful, user-friendly applications that deliver seamless experiences across devices.
          </p>
        </section>

        {/* INTRO */}
        <section className="mb-16 p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur">
          <p className="text-lg leading-relaxed text-muted-foreground">
            From idea to launch, we craft mobile and web applications that are scalable,
            efficient, and built to meet real-world user needs.
          </p>
        </section>

        {/* SERVICES */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">What We Offer</h2>

          <div className="grid gap-6 md:grid-cols-2">
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
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-black text-white text-sm font-medium dark:bg-white dark:text-black">
                  {index + 1}
                </div>
                <p className="text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Technologies We Use</h2>

          <div className="flex flex-wrap gap-3">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center p-10 rounded-2xl border border-black/10 dark:border-white/10 bg-black text-white dark:bg-white dark:text-black">
          <h2 className="text-2xl font-semibold mb-4">
            Turn Your App Idea Into Reality
          </h2>
          <p className="mb-6 text-sm opacity-80">
            Let’s build an app that stands out and delivers real value to your users.
          </p>

          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-lg bg-white text-black font-medium hover:opacity-90 transition dark:bg-black dark:text-white"
          >
            Start Your Project
          </a>
        </section>

      </div>
    </main>
  );
}

