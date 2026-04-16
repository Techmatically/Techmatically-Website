import Container from "../../../components/common/container";
import PageHeader from "../../../components/common/page-header";
import Reveal from "../../../components/motion/reveal";

export default function DevelopmentServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader
        title="Development Services"
        subtitle="From portals to internal systems, we build modern applications with maintainability and performance built-in."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Application Development",
                desc: "Custom software apps aligned to your operations and growth targets.",
              },
              {
                title: "Portal Development",
                desc: "Interactive portals that improve self-service and customer experience.",
              },
            ].map((c, idx) => (
              <Reveal key={c.title} delayMs={idx * 90}>
                <div className="rounded-2xl border border-black/5 bg-background p-6 dark:border-white/10">
                  <div className="text-base font-semibold">{c.title}</div>
                  <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {c.desc}
                  </div>
                  <a
                    href="/contact"
                    className="mt-4 inline-flex text-sm font-semibold text-[color:var(--brand)] hover:underline"
                  >
                    Get a quote →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

