import Container from "../../../components/common/container";
import PageHeader from "../../../components/common/page-header";
import Reveal from "../../../components/motion/reveal";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader
        title="About"
        subtitle="Learn who we are, how we work, and what we optimize for."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <Reveal>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  About Techmatically
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  We partner with organizations that need reliable engineering,
                  modern tooling, and clear communication—so delivery stays
                  predictable and outcomes stay measurable.
                </p>
              </div>
            </Reveal>

            <div className="md:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <Reveal delayMs={60}>
                  <div className="rounded-2xl border border-black/5 bg-background p-5 dark:border-white/10">
                    <div className="text-sm font-semibold">Vision & Mission</div>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      <li>Be focused towards one vision.</li>
                      <li>Work together with cohesion.</li>
                      <li>Keep procedures simple.</li>
                      <li>Aspire to be inspirational.</li>
                      <li>Realize every individual’s effort matters.</li>
                    </ul>
                  </div>
                </Reveal>
                <Reveal delayMs={120}>
                  <div className="rounded-2xl border border-black/5 bg-background p-5 dark:border-white/10">
                    <div className="text-sm font-semibold">Quality Approach</div>
                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      Deliver best products and services—on time, with quality,
                      and aligned to customer expectations.
                    </p>
                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      Customer delight is the benchmark we measure ourselves
                      against.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

