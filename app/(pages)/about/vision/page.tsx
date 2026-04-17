export const metadata = {
  title: "Vision & Mission",
  description: "Our vision and mission statements.",
};

export default function VisionPage() {
  const points = [
    "Be focused towards one vision.",
    "Work together with cohesion.",
    "Keep procedures simple.",
    "Aspire to be inspirational.",
    "Realize every individual’s effort matters.",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16">

        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Vision & Mission</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our guiding principles that shape how we think, work, and grow together.
          </p>
        </header>

        {/* Vision Card */}
        <section className="mb-10 p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            To stay focused on a unified direction while building meaningful,
            impactful solutions that inspire growth and collaboration.
          </p>
        </section>

        {/* Mission Points */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>

          <div className="grid gap-4">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl border border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                {/* Number */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-sm font-medium dark:bg-white dark:text-black">
                  {index + 1}
                </div>

                {/* Text */}
                <p className="text-muted-foreground leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}