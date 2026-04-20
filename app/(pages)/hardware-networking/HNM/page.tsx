import Container from "@/components/common/container";
import PageHeader from "@/components/common/page-header";
import Reveal from "@/components/motion/reveal";

export default function HardwareNetworkMaintenancePage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader
        title="Hardware & Network Maintenance"
        subtitle="Reliable maintenance coverage that keeps devices, infrastructure, and teams running smoothly."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Preventive Maintenance",
                desc: "Scheduled servicing and health checks to reduce downtime before it starts.",
              },
              {
                title: "Corrective Support",
                desc: "Fast response for hardware issues, network faults, and day-to-day operational incidents.",
              },
              {
                title: "Service Reporting",
                desc: "Clear maintenance logs, recommendations, and planning insight for future upgrades.",
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
