export const metadata = {
  title: "Cyber Security",
  description: "Scalable, secure, and reliable cloud solutions.",
};

export default function CyberPage() {
  const features = [
    {
      title: "Scalability",
      desc: "Easily scale your infrastructure as your business grows without performance compromise.",
    },
    {
      title: "Security",
      desc: "Enterprise-grade security practices to keep your data safe and protected.",
    },
    {
      title: "Reliability",
      desc: "High availability systems ensuring your services stay online 24/7.",
    },
    {
      title: "Cost Efficiency",
      desc: "Optimized cloud usage to reduce unnecessary costs and maximize value.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-16">

        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Cyber Security</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empowering businesses with scalable, secure, and high-performance cloud solutions.
          </p>
        </header>

        {/* Intro Card */}
        <section className="mb-12 p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur">
          <p className="text-lg leading-relaxed text-muted-foreground">
            We provide modern cloud infrastructure and services designed to enhance performance,
            ensure security, and enable seamless scalability for your digital products.
          </p>
        </section>

        {/* Features Grid */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">What We Offer</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}