import Container from "@/components/common/container";
import PageHeader from "@/components/common/page-header";
import Reveal from "@/components/motion/reveal";

export default function TechnologyPartnersPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader
        title="Technology Partners"
        subtitle="Vendor-aligned recommendations built around reliability, scale, and practical budget planning."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Trusted Vendor Network",
                desc: "We work with proven technology partners to source the right infrastructure for each environment.",
              },
              {
                title: "Right-Fit Procurement",
                desc: "Recommendations are matched to business requirements, growth plans, and available budget.",
              },
              {
                title: "Implementation Support",
                desc: "From selection through deployment, we help coordinate setup, rollout, and handover.",
              },
            ].map((card, idx) => (
              <Reveal key={card.title} delayMs={idx * 80}>
                <div className="rounded-2xl border border-black/5 bg-background p-5 dark:border-white/10">
                  <div className="text-sm font-semibold">{card.title}</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
