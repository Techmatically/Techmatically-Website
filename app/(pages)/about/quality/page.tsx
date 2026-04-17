export const metadata = {
  title: "Quality Approach",
  description: "Our commitment to delivering quality products and services.",
};

export default function QualityPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16">

        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Quality Approach</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence, consistency, and customer satisfaction.
          </p>
        </header>

        {/* Main Statement */}
        <section className="mb-10 p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Deliver best products and services—on time, with quality, and aligned
            to customer expectations.
          </p>
        </section>

        {/* Highlight / Quote */}
        <section className="p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5">
          <blockquote className="text-xl font-medium leading-relaxed text-foreground">
            “Customer delight is the benchmark we measure ourselves against.”
          </blockquote>
        </section>

      </div>
    </main>
  );
}