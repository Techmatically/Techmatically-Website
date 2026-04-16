import Container from "../../../components/common/container";
import PageHeader from "../../../components/common/page-header";
import Reveal from "../../../components/motion/reveal";

export default function HardwareNetworkingPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader
        title="Hardware & Networking"
        subtitle="Systems and network management designed for predictable costs and reliable support."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Networking Installations & Management",
                desc: "Design, rollout, monitoring, and operational handover.",
              },
              {
                title: "Hardware & Network Maintenance",
                desc: "Maintenance packages with fast response and clear SLAs.",
              },
              {
                title: "Technology Partners",
                desc: "We work with trusted vendors to match solution to budget.",
              },
            ].map((c, idx) => (
              <Reveal key={c.title} delayMs={idx * 80}>
                <div className="rounded-2xl border border-black/5 bg-background p-5 dark:border-white/10">
                  <div className="text-sm font-semibold">{c.title}</div>
                  <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {c.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

